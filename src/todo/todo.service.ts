import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private todoRepo: Repository<Todo>) {}

  async obterTodos(userId: number): Promise<Todo[]> {
    return await this.todoRepo.find({
      relations: {
        usuario: true,
      },
      where: {
        usuario: {
          id: userId,
        },
      },
    });
  }

  async criar(todo: Todo): Promise<Todo> {
    return await this.todoRepo.save(todo);
  }

  async obterPorId(id: any, userId: number): Promise<Todo> {
    let todo = await this.todoRepo
      .createQueryBuilder('todo')
      .where('todo.id = :id', { id: id.id })
      .andWhere('todo.usuario = :userId', { userId: userId })
      .getOne();

    console.log(todo);

    return todo;
  }

  async atualizar(id: any, todo: Todo, userId: number): Promise<UpdateResult> {
    return await this.todoRepo
      .createQueryBuilder('todo')
      .update(Todo)
      .set({ ...todo })
      .where('id = :id', { id: id.id })
      .andWhere('usuario = :userId', { userId: userId })
      .execute();
  }

  async deletar(id: any, userId: number): Promise<DeleteResult> {
    return await this.todoRepo
      .createQueryBuilder()
      .delete()
      .from(Todo)
      .where("id = :id", {id: id.id})
      .andWhere("usuario = :userId", { userId: userId })
      .execute();
  }
}
