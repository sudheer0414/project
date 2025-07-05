/* eslint-disable prettier/prettier */
import { Controller,Get,Post, Put, Delete } from '@nestjs/common';
@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return [{ id: 1, name: 'sudheer' }];
  }
  @Post()
  create() {
    return [{ id: 1, name: 'kumar' }];
  }
  @Put()
  update() {
    return [{ id: 1, name: 'veeramma' }];
  }
  @Delete()
  remove() {
    return [{ id: 1, name: 'veeramma' }];
  }
}
