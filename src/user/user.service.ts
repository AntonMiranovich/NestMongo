import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schemas';

@Injectable()
export class UserService {

    constructor(@InjectModel('users') private userModel: Model<User>) { }

    create(obj) {
        return this.userModel.create(obj)
    }
}
