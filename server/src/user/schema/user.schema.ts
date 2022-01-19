import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserProfileTypeEnum } from '../user.interface';

export type UserDocument = Document & User;

@Schema()
export class User {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  otherName: string;
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  phone: string;
  @Prop()
  role: string;
  @Prop()
  image: string;
  @Prop()
  lastSeen: Date;
  @Prop({
    type: [
      {
        type: String,
        enum: UserProfileTypeEnum,
        default: UserProfileTypeEnum.Teacher,
      },
    ],
  })
  accountType: UserProfileTypeEnum[];
}
export const UserSchema = SchemaFactory.createForClass(User);
