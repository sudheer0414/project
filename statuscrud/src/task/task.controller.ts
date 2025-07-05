/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // 201
  async create(@Body() body: Partial<Task>) {
    const data =await this.taskService.create(body);
    return { 
            statusCode: HttpStatus.CREATED,
            message:'201, task created successfully',
            data,
    };
  }
    //return this.taskService.create(body);
    //res.status(201).json({ meassage:"task created successfully"});

  @Get()
  @HttpCode(HttpStatus.OK) // 200
  async findAll() {
    const tasks =await this.taskService.findAll();
    return{
      statusCode: HttpStatus.OK,
      message: '200, tasks fetched successfully',
      data: tasks,
    };
    //return this.taskService.findAll();
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK) // 200
  async update(@Param('id') id: string, @Body() body: Partial<Task>) {
    const data =await this.taskService.update(+id, body);
  return {
    statusCode: HttpStatus.OK,
    message: 'Task updated successfully',
    data,
  };
    //return this.taskService.update(+id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK) // 204
  async remove(@Param('id') id: string) {
    await this.taskService.delete(+id);
    return {
    statusCode: HttpStatus.OK,
    message: 'Task deleted successfully',
    data: null,
  };
  }
}
