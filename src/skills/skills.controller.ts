import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SkillsService } from './skills.service';

@Controller('/skills')
export class SkillsController {
    constructor(private readonly SkillsService: SkillsService) { }

    @Post()
    async create(@Body() obj) {
        return await this.SkillsService.create(obj);
    }

    @Get()
    async getAll() {
        return await this.SkillsService.getAllItem()
    }

    @Get('/:id')
    async getById(@Param('id') id) {
        return await this.SkillsService.getById(id)
    }

    @Delete('/:id')
    async deleteById(@Param('id') id) {
        return await this.SkillsService.deleteById(id)
    }

    @Put('/:id')
    async putById(@Param('id') id, @Body() obj) {
        return await this.SkillsService.putById(id, obj)
    }
}