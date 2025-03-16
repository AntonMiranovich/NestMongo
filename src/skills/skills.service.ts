import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skills } from 'src/schemas/skills.schemas';

@Injectable()
export class SkillsService {

    constructor(@InjectModel('skills') private skillsModel: Model<Skills>) { }

    create(obj) {
        return this.skillsModel.create(obj)
    }

    getAllItem() {
        return this.skillsModel.find()
    }

    getById(id) {
        return this.skillsModel.findById(id)
    }

    deleteById(id) {
        return this.skillsModel.findByIdAndDelete(id)
    }

    putById(id, obj) {
        return this.skillsModel.findByIdAndUpdate(id, obj)
    }
}
