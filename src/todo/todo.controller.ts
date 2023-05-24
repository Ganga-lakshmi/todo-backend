import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async findAll() {
    return this.todoService.findAll();
  }

  @Post()
  async create(@Body('title') title: string) {
    return this.todoService.create(title);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body('completed') completed: boolean) {
    return this.todoService.update(parseInt(id, 10), completed);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.todoService.delete(id);
  }
}
