import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  async findAll() {
    return this.todoRepository.find();
  }

  async create(title: string) {
    const todo = this.todoRepository.create({ title });
    return this.todoRepository.save(todo);
  }

  async update(id: number, completed: boolean) {
    const todo = await this.todoRepository.findOne(id);
    if (!todo) {
      throw new Error('todo not found');
    }
    todo.completed = completed;
    return this.todoRepository.save(todo);
  }

  async delete(id: number) {
    const todo = await this.todoRepository.findOne(id);
    if (!todo) {
      throw new Error('todo not found');
    }
    await this.todoRepository.delete(id);
  }
}
