import { CacheModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schema/user.schema';
import { config } from '../utils';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { Auth, AuthSchema } from './schema/auth.schema';
import { AuthController } from './auth.controller';
import { JwtStrategy } from 'src/strategies/jwt.strategy';

@Module({
  providers: [AuthResolver, AuthService, JwtStrategy],
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Auth.name, schema: AuthSchema },
    ]),
    JwtModule.register({
      secret: config.SECRET,
    }),
    CacheModule.register(),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
