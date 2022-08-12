import { Module } from "@nestjs/common";
import { StatusController } from "src/controllers/status.controller";
import { StatusService } from "src/services/status.service";

@Module({
    imports:[],
    controllers:[StatusController],
    providers:[StatusService]
})

export class StatusModule{}