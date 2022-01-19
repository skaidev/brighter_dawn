import { User } from './schema/user.schema';
import { UserProfileTypeEnum } from './user.interface';

export class CreateUserDTO extends User {
  firstName: string;
  lastName: string;
  accountType: UserProfileTypeEnum[];
}
