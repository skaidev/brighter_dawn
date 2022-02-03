import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { UserDocument } from 'src/user/schema/user.schema';

export type AuthDocument = Document & Auth;

@Schema()
export class Auth {
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  phone: string;
  @Prop()
  role: string;
  @Prop()
  google_id: string;
  @Prop()
  username: string;
  @Prop()
  emailToken: string;
  @Prop({ type: Boolean, default: true })
  isActive: boolean;
  @Prop({ type: Types.ObjectId, ref: 'User' })
  profile: UserDocument;
}
export const AuthSchema = SchemaFactory.createForClass(Auth);
