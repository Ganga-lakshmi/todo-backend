import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  exports: [TodoService],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
