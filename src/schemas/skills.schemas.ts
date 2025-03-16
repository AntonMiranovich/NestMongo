import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Skills {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    discription: string;
}

export const SkillsSchema = SchemaFactory.createForClass(Skills);