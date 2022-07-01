import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) {}

  async validateUser(nome: string, senha: string): Promise<any> {
    const user = await this.userService.obterPorNome(nome);

    if (user && user.senha === senha) {
      const { senha, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.nome, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
