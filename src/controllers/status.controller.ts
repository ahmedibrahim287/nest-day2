import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StatusService } from 'src/services/status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}
  @Get()
  getAll() {
    return this.statusService.getAll();
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.statusService.getOne(id);
  }
}
