import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@agileflow.dhlktmi.mongodb.net/?retryWrites=true&w=majority`)
  ],
  controllers: [
    AppController,
    UserController
  ],
  providers: [AppService, UserService],
})
export class AppModule { }
