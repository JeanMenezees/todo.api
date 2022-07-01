import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async obterTodos(@Request() req: any): Promise<Todo[]> {
    return await this.todoService.obterTodos(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async obterPorId(@Request() req: any, @Param() id: number): Promise<Todo> {
    return await this.todoService.obterPorId(id, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async criar(@Request() req: any, @Body() todo: Todo): Promise<Todo> {
    const addedTodo: Todo = { ...todo, usuario: req.user.userId };

    return await this.todoService.criar(addedTodo);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async atualizar(
    @Request() req: any,
    @Param() id: number,
    @Body() todo: Todo,
  ): Promise<UpdateResult> {
    return await this.todoService.atualizar(id, todo, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deletar(
    @Request() req: any,
    @Param() id: number,
  ): Promise<DeleteResult> {
    return await this.todoService.deletar(id, req.user.userId);
  }
}
