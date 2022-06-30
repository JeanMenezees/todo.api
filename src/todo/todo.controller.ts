import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get()
    async obterTodos(): Promise<Todo[]> {
        return await this.todoService.obterTodos();
    }

    @Get(':id')
    async obterPorId(@Param() id: number): Promise<Todo> {
        return await this.todoService.obterPorId(id);
    }

    @Post()
    async criar(@Body() todo: Todo): Promise<Todo> {
        return await this.todoService.criar(todo);
    }

    @Put(':id') 
    async atualizar(@Param() id: number, @Body() todo: Todo): Promise<UpdateResult> {
        return await this.todoService.atualizar(id, todo);
    }

    @Delete(':id')
    async deletar(@Param() id: number): Promise<DeleteResult> {
        return await this.todoService.deletar(id);
    }
}
