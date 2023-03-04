import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers: [UserController],
    imports: [],
    providers: [UserService],
    exports: []

})

export class UserModule { }