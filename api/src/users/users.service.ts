import { Injectable } from '@nestjs/common';

export type User = {
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  //TODO
  private readonly users = [
    {
      id: 1,
      username: 'test',
      password: 'test',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
