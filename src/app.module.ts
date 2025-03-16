import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [UserModule, SkillsModule, MongooseModule.forRoot('mongodb://localhost:27017/nest-app')],
  controllers: [],
  providers: [],
})
export class AppModule { }
