import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController
  ],
  providers: [AppService,UserService],
})
export class AppModule {}
