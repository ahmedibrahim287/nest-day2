import { Injectable } from '@nestjs/common';
import { status } from '../../data.json';
@Injectable()
export class StatusService {
  getAll() {
    return status;
  }
  getOne(id:number){
    return status.filter(state=>state.id === id)
  }
}
