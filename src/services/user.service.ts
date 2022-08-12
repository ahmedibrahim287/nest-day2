import { Injectable, NotFoundException } from '@nestjs/common';
import { users } from '../../data.json';
import { TaskService } from './task.service';
@Injectable()
export class UserService {
  constructor(private readonly taskService: TaskService) {}
  getAll() {
    return users;
  }
  getOne(id: number) {
    let userData = users.filter((user) => user.id === id);

    if (userData.length === 0) {
      throw new NotFoundException('User Not Found');
    }
    let userTasks = this.taskService.getOne(id);
    return { userData, userTasks };
  }
  addOne(username: string, password: string) {
    users.push({
      id: Math.random() * 1000,
      username: username,
      password: password,
    });
    return users;
  }

  updateOne(id: number, user: { username: string; password: string }) {
    let selectedUserIndex = users.findIndex((user) => user.id === id);
    if (selectedUserIndex === -1) {
      throw new NotFoundException('Not Found');
    }
    users[selectedUserIndex].username = user.username;
    users[selectedUserIndex].password = user.password;
    return users;
  }
  deleteOne(id: number) {
    return users.filter((user) => user.id !== id);
  }
}
