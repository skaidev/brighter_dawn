import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InviteUserDTO } from 'src/auth/auth.dto';
import { config } from 'src/utils';
import { sendgrid } from 'src/utils/sendgrid';
import { User, UserDocument } from './schema/user.schema';
import { UserProfileTypeEnum } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  // create a user
  async createUser(data: UserDocument): Promise<UserDocument> {
    const { email, accountType } = data;
    if (!email) throw new BadRequestException('Email is required');
    let user = await this.userModel.findOne({ email });
    if (user) throw new BadRequestException('Email is already registered');
    try {
      user = await this.userModel.create({
        ...data,
        email,
        accountType: accountType || UserProfileTypeEnum.Teacher,
      });
      await sendgrid.sendMail({
        email: user.email,
        subject: 'Create your profile',
        html: `
        <h1>Hello ${user?.firstName}</h1>
        <p>Click <a href='${config.CLIENT_URL}/account?userId=${user.id}&profileType=${user?.accountType?.[0]}'>here</a> to create your profile on BDMIS Portal </p>
        `,
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async inviteUser(data: InviteUserDTO) {
    try {
      const user = await this.userModel.findById(data.userId);
      if (!user) throw new NotFoundException('User record not found');
      await sendgrid.sendMail({
        email: user.email,
        subject: 'Create your profile',
        html: `
        <h1>Hello ${user?.firstName}</h1>
        <p>Click <a href='${config.CLIENT_URL}/account?userId=${user.id}&profileType=${data.profileType}'>here</a> to create your profile on BDMIS Portal </p>
        `,
      });
    } catch (error) {
      throw error;
    }
  }
  // get all users
  async getUsers(): Promise<UserDocument[]> {
    try {
      const users = await this.userModel.find();
      return users;
    } catch (error) {
      throw error;
    }
  }
  // get a user
  async getUser(id: string): Promise<UserDocument> {
    try {
      const user = await this.userModel.findById(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  // update a user
  async updateUser(data: UserDocument): Promise<UserDocument> {
    try {
      const user = await this.userModel.findByIdAndUpdate(data.id, data, {
        new: true,
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  // delete a user
  async deleteUser(id: string): Promise<UserDocument> {
    try {
      const user = await this.userModel.findById(id);
      if (!user) throw new NotFoundException('No record found');
      user.remove();
      return user;
    } catch (error) {
      throw error;
    }
  }

  async deleteAllUsers(): Promise<UserDocument[]> {
    try {
      const users = await this.userModel.find();
      if (users) {
        users.forEach((user) => user.remove());
      }
      return users;
    } catch (error) {
      throw error;
    }
  }
}
