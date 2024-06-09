import { Controller, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Patch('fix-issues')
  async fixIssues(): Promise<{ updatedCount: number }> {
    const count = await this.usersService.updateIssuesAndCount();
    return { updatedCount: count };
  }
}
