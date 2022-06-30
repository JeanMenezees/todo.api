import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "sqlite",
    database: "todoDB",
    entities: ['dist/**/*.entity.js'],
    synchronize: true
  }), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}