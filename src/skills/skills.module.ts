import { Module } from '@nestjs/common';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillsSchema } from 'src/schemas/skills.schemas';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'skills', schema: SkillsSchema }])],
    controllers: [SkillsController],
    providers: [SkillsService],
})
export class SkillsModule { }