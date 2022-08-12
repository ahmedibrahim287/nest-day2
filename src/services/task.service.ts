import { Injectable } from '@nestjs/common';
import { tasks } from '../../data.json';
import { StatusService } from './status.service';
@Injectable()
export class TaskService {
    constructor(private readonly statusService:StatusService){}
  getAll() {
    return tasks;
  }
  getOne(id: number) {
    let task = tasks.filter((task) => task.id === id);
    // let status =  this.statusService.getOne(task[0].statusId)
    return task
  }

  addOne(taskDetails: { title: string; userId: number; statusId: number }) {
    tasks.push({
      id: Math.random() * 100,
      title: taskDetails.title,
      userId: taskDetails.userId,
      statusId: taskDetails.statusId,
    });
    return tasks;
  }

  updateOne(id: number, title: string) {
    let selectedTaskIndex = tasks.findIndex((task) => task.id === id);
    if (selectedTaskIndex === -1) {
      return 'Task not Found';
    }
    tasks[selectedTaskIndex].title = title;

    return tasks;
  }
  deleteOne(id: number) {
    return tasks.filter((task) => task.userId !== id);
  }
}
