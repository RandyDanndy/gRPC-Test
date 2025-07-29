import { Injectable } from '@nestjs/common';

export interface CreateUserDto {
  id: string;
  username: string;
  password: string;
}

const users: CreateUserDto[] = [];

@Injectable()
export class UserService {
  createUser({ id, username, password }: CreateUserDto) {
    const user = { id, username, password };
    users.push(user);
    return { id, username };
  }
  findUser({ id }) {
    const user = users.find((u) => u.id === id);
    if (!user) return {};
    return { id: user.id, username: user.username };
  }
}
