import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>){}

    async obterPorNome(nome: string): Promise<User> {
        const usuario = await this.userRepo.findOneBy({ nome: nome });

        return usuario;
    }

    async obterTodos(): Promise<User[]> {
        return await this.userRepo.find();
    }
}
