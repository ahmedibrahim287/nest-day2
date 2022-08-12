import { UserService } from '../services/user.service';
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

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAll() {
    return this.userService.getAll();
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getOne(id);
  }
  @Post()
  addOne(@Body() user: { username: string; password: string }) {
    return this.userService.addOne(user.username, user.password);
  }
  @Put(':id')
  updateOne(
    @Param('id',ParseIntPipe) id: number,
    @Body() user: { username: string; password: string },
  ) {
    return this.userService.updateOne(id, user);
  }
  @Delete(':id')
  DeleteOne(@Param('id') id: number) {
    return this.userService.deleteOne(id);
  }
}
