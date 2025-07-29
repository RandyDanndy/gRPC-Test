import { GrpcMethod } from '@nestjs/microservices';
import { CreateUserDto, UserService } from './user.service';
import { Controller } from '@nestjs/common';

@Controller()
export class UserController {
  constructor(private readonly UserService: UserService) {}
  @GrpcMethod('UserService', 'CreateUser')
  createUser(data: CreateUserDto) {
    return this.UserService.createUser(data);
  }
  @GrpcMethod('UserService', 'FindUser')
  findUser(data: CreateUserDto) {
    return this.UserService.findUser(data);
  }
}
