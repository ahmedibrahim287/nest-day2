import { Module } from '@nestjs/common';
import { StatusModule } from './modules/status.module';
import { TaskModule } from './modules/task.module';
import { UserModule } from './modules/user.module';


@Module({
  imports: [UserModule,TaskModule,StatusModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
