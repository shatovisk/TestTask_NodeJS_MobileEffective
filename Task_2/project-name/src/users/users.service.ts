import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UsersService {
    constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
    ) {}
  
    async updateIssuesAndCount(): Promise<number> {
      // Подсчёт пользователей с флагом issues = true
      const count = await this.usersRepository.count({ where: { issues: true } });
  
      // Обновление всех записей с issues = true на issues = false
      await this.usersRepository.update({ issues: true }, { issues: false });
  
      return count;
    }
  }
