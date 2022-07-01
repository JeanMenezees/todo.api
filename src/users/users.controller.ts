import { Controller, Post, UseGuards, Request, Get, Inject, forwardRef } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/guards/local.auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private authService: AuthService, private userService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any): Promise<any> {
    return await this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }

  @Get(':nome')
  async obter(nome: string) {
    return await this.userService.obterPorNome(nome);
  }

  @Get()
  async obterTodos() {
    return await this.userService.obterTodos();
  }
}
