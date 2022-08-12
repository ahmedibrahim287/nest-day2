import { Module } from "@nestjs/common";
import { TaskController } from "src/controllers/task.controller";
import { StatusService } from "src/services/status.service";
import { TaskService } from "src/services/task.service";
import { StatusModule } from "./status.module";


@Module({
    imports:[StatusModule],
    controllers:[TaskController],
    providers:[TaskService,StatusService]
})

export class TaskModule{}