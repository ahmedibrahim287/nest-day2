
import { UserService } from '../services/user.service';
import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { TaskModule } from './task.module';
import { TaskService } from 'src/services/task.service';
import { StatusService } from 'src/services/status.service';

@Module({
  imports: [TaskModule],
  controllers: [UserController],
  providers: [UserService,TaskService,StatusService],
})
export class UserModule {}
