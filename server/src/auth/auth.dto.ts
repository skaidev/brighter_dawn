import { UserProfileTypeEnum } from 'src/user/user.interface';

export class InviteUserDTO {
  userId: string;
  profileType: UserProfileTypeEnum;
}

export class RegisterAndLinkUserDTO {
  userId: string;
  email: string;
  password: string;
}
