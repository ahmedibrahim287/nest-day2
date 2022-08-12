import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from 'src/services/task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  getAll() {
    return this.taskService.getAll();
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) userId: number) {
    return this.taskService.getOne(userId);
  }
  @Post()
  addOne(
    @Body() taskDetails: { title: string; userId: number; statusId: number },
  ) {
    return this.taskService.addOne(taskDetails);
  }

  @Put(':id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() title: string) {
    return this.taskService.updateOne(id, title);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) userId: number) {
    return this.taskService.deleteOne(userId);
  }
}
