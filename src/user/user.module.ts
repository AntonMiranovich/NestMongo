import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schemas';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule { }
