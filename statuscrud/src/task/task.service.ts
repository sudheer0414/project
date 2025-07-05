/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
  ) {}

  create(task: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepo.create(task);
    return this.taskRepo.save(newTask);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepo.find();
  }

  async update(id: number, task: Partial<Task>): Promise<Task> {
    const existing = await this.taskRepo.findOneBy({ id });
    if (!existing) throw new NotFoundException('Task not found');
    Object.assign(existing, task);
    return this.taskRepo.save(existing);
  }

  async delete(id: number): Promise<void> {
    const result = await this.taskRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException('Task not found');
  }
}
