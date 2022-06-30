import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private todoRepo: Repository<Todo>){}

    async obterTodos(): Promise<Todo[]> {
        return await this.todoRepo.find();
    }

    async criar(todo: Todo): Promise<Todo> { 
        return await this.todoRepo.save(todo);
    }

    async obterPorId(id: number): Promise<Todo> {
        return await this.todoRepo.findOneBy({ id: id })
    }

    async atualizar(id: number, todo: Todo): Promise<UpdateResult> {
        return await this.todoRepo.update(id, todo);
    }

    async deletar(id: number): Promise<DeleteResult> {
        return await this.todoRepo.delete(id);
    }
}
