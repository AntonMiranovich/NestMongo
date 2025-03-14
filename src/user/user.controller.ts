import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly UserService: UserService) { }

    @Post()
    async create(@Body() obj) {
        return await this.UserService.create(obj);
    }
}