import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, userResolver],
  exports: [UserService],
})
export class UserModule {}
