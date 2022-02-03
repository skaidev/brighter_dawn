import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as sgMail from '@sendgrid/mail';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { ReqWithUser } from 'src/typings';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { config } from 'src/utils';
import { sendgrid } from 'src/utils/sendgrid';
import { RegisterAndLinkUserDTO } from './auth.dto';
import { Auth, AuthDocument } from './schema/auth.schema';
sgMail.setApiKey(config.SENDGRID_API_KEY);

export class AuthResponseData {
  id: string;
  token: string;
  isActive: boolean;
  authId?: string;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Auth.name) private readonly authModel: Model<AuthDocument>,
    @Inject(REQUEST) private readonly req: ReqWithUser,
    private jwtService: JwtService,
  ) {}

  async getAuthUsers(): Promise<AuthDocument[]> {
    try {
      const users = await this.authModel.find();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async register(data: Partial<AuthDocument>): Promise<UserDocument> {
    const { password, profile } = data;

    if (!profile) throw new BadRequestException('Add profile id');
    const user = await this.userModel.findById(profile).catch((err) => {
      throw new Error(err);
    });
    if (!user) throw new NotFoundException('Invalid user');
    const authUser = await this.authModel.findOne({ email: user.email });
    if (authUser)
      throw new BadRequestException('Email aleady exist, sigin instead');
    const payload: Partial<AuthDocument> = {
      password: bcrypt.hashSync(password, 10),
      profile,
      email: user.email,
    };

    try {
      await sendgrid.sendMail({
        subject: 'Profile created',
        html: ` <strong style="display:block">Hi ${user?.firstName}!</strong>
  
        <p>profile has been created sucessfully</p>
  
        `,
        email: payload.email,
      });
      await this.authModel.create(payload).catch((err) => {
        throw err;
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  async login(data: {
    email: string;
    password: string;
  }): Promise<AuthResponseData> {
    try {
      const authData = await this.authModel.findOne({ email: data.email });
      if (!authData) throw new NotFoundException('You are not yet registered');
      const isMatch = bcrypt.compareSync(data.password, authData.password);
      if (!isMatch)
        throw new UnauthorizedException('Email or password not correct');
      const { isActive } = authData;
      const user = await this.userModel.findById(authData.profile);

      if (user) {
        this.req.user = user;
        const token = `Bearer ${this.jwtService.sign(user.id)}`;
        return {
          id: user.id,
          isActive,
          token,
        };
      } else {
        return { id: null, isActive, token: null, authId: authData.id };
      }
    } catch (error) {
      throw error;
    }
  }
  async registerAndLinkUser(
    data: RegisterAndLinkUserDTO,
  ): Promise<UserDocument> {
    try {
      let user = await this.userModel.findById(data.userId);
      if (!user) throw new NotFoundException('user record not found');
      const authData = await this.register({
        email: data.email,
        password: data.password,
        profile: data.userId as unknown as UserDocument,
      });
      user = await this.userModel.findByIdAndUpdate(
        user.id,
        { $set: { authData: authData.id } },
        { new: true },
      );
      return user;
    } catch (error) {
      throw error;
    }
  }
  async verifyToken(emailToken: string): Promise<AuthDocument> {
    if (!emailToken) throw new NotFoundException();
    try {
      const user = await this.authModel
        .findOne({ emailToken })
        .select('-password');
      if (!user) throw new NotFoundException('Invalid token');
      await this.authModel.findByIdAndUpdate(
        user.id,
        { $set: { emailToken: '', isActive: true } },
        { multi: true, new: true },
      );
      await sendgrid.sendMail({
        email: user.email,
        subject: 'Welcome to Brighter Dawn Portal',
        html: `Your account has been verified, You can now proceed to login `,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  // async loginWithGoogle(
  //   data: UserDocument,
  // ): Promise<{ user: Partial<UserDocument>; token: string }> {
  //   let user = await this.userModel
  //     .findOne({ email: data.email })
  //     .select('-password');
  //   if (user) {
  //     try {
  //       await this.userModel.findByIdAndUpdate(
  //         user.id,
  //         { ...data, image: user.image ? user.image : data.image },
  //         { new: true },
  //       );
  //       const token = this.jwtService.sign(user.id);
  //       return { user, token };
  //     } catch (error) {
  //       throw error;
  //     }
  //   }
  //   try {
  //     user = await this.userModel.create(data);
  //     const token = this.jwtService.sign(user.id);
  //     return { user, token };
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  async getMe(): Promise<UserDocument> {
    const user = this.req.user;
    try {
      await this.userModel.updateOne(
        { _id: user.id },
        {
          $set: { lastSeen: new Date() },
        },
      );
      // const user = await this.userModel.findById(id).select('-password');
      return user;
    } catch (error) {
      throw error;
    }
  }
  // async forgotPassword(email: string): Promise<UserDocument> {
  //   const user = await this.userModel.findOne({ email }).select('-password');
  //   if (!user) throw new NotFoundException('No record found');
  //   const emailToken = (Math.floor(Math.random() * 90000) + 10000).toString();
  //   try {
  //     const mailOptions: sgMail.MailDataRequired = {
  //       from: config.MAIL_SENDER,
  //       to: user?.email,
  //       subject: 'Your new verification code',
  //       html: ` <strong style="display:block">Hi ${user.firstName}!</strong>
  //       <h1>Hello ${user?.name}!</h1>
  //       <p> You requested to change your change your password ?</p>

  //       <p style="margin-top:20px;"> <a href=${
  //         config.CLIENT_URL +
  //         '/auth/changepassword?user_id=' +
  //         user?.id +
  //         '&token=' +
  //         emailToken +
  //         '&mode=email'
  //       }>Click here</a> to begin the process if you actually made the request </p>

  //      `,
  //     };
  //     await sgMail.send(mailOptions).catch((err) => {
  //       throw new HttpException(err, 500);
  //     });
  //     await this.userModel.findByIdAndUpdate(user.id, { $set: { emailToken } });
  //     return user;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  // async verifyToChangePassword(data: {
  //   id: string;
  //   emailToken: string;
  // }): Promise<UserDocument> {
  //   try {
  //     const user = await this.userModel.findById(data.id);
  //     if (!user) throw new NotFoundException();
  //     if (user?.emailToken !== data?.emailToken)
  //       throw new UnauthorizedException();
  //     return user;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async resendVerification(id: string): Promise<UserDocument> {
  //   try {
  //     let user = await this.userModel.findById(id).select('-password');
  //     if (!user) throw new NotFoundException('No record found');
  //     const payload: Partial<UserDocument> = {
  //       emailToken: (Math.floor(Math.random() * 90000) + 10000).toString(),
  //       name: `${user.firstName} ${user.lastName}`,
  //     };
  //     const mailOptions: sgMail.MailDataRequired = {
  //       from: config.MAIL_SENDER,
  //       to: user?.email,
  //       subject: 'Your new verification code',
  //       html: ` <strong style="display:block">Hi ${user.firstName}!</strong>

  //       <p>Here is your new verification code <b>${
  //         payload?.emailToken
  //       }</b>. You can also click <a href=${`${config.CLIENT_URL}/auth/verify?user_id=${user?.id}&token=${payload?.emailToken}`}>here to activate</a> </p>

  //      `,
  //     };
  //     await sgMail.send(mailOptions).catch((err) => {
  //       throw new HttpException(err, 500);
  //     });
  //     user = await this.userModel.findByIdAndUpdate(id, {
  //       $set: { emailToken: payload?.emailToken },
  //     });

  //     return user;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async changePassword(data: {
  //   id: string;
  //   password: string;
  // }): Promise<UserDocument> {
  //   try {
  //     const user = await this.userModel.findByIdAndUpdate(
  //       data.id,
  //       {
  //         $set: { password: bcrypt.hashSync(data.password) },
  //       },
  //       { new: true },
  //     );
  //     return user;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async changeAuthPassword(data: {
  //   id: string;
  //   oldPassword: string;
  //   newPassword: string;
  // }): Promise<UserDocument> {
  //   let user = await this.userModel.findById(data.id);
  //   if (!user) throw new NotFoundException('No record found');
  //   const isMatch = bcrypt.compareSync(data.oldPassword, user.password);
  //   if (!isMatch) throw new UnauthorizedException('Invalid credentials');

  //   try {
  //     user = await this.userModel.findByIdAndUpdate(
  //       data.id,
  //       {
  //         $set: {
  //           password: bcrypt.hashSync(data.newPassword, 10),
  //           emailToken: '',
  //         },
  //       },
  //       { multi: true },
  //     );
  //     return user;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
