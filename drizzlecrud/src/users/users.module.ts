import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
  controllers: [UserController],
  // eslint-disable-next-line prettier/prettier
  providers: [UserService]
})
export class UsersModule {}
