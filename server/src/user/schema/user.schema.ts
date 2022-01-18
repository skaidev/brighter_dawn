import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { AuthDocument } from 'src/auth/schema/auth.schema';

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
  @Prop({ type: Types.ObjectId, ref: 'Auth', autopopulate: true })
  authData: AuthDocument;
  @Prop()
  image: string;
  @Prop()
  lastSeen: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);
