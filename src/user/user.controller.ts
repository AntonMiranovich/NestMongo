import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly UserService: UserService) { }

    @Post()
    async create(@Body() obj) {
        return await this.UserService.create(obj);
    }

    @Get()
    async getAll() {
        return await this.UserService.getAllItem()
    }

    @Get('/:id')
    async getById(@Param('id') id) {
        return await this.UserService.getById(id)
    }

    @Delete('/:id')
    async deleteById(@Param('id') id) {
        return await this.UserService.deleteById(id)
    }

    @Put('/:id')
    async putById(@Param('id') id, @Body() obj) {
        return await this.UserService.putById(id, obj)
    }
}