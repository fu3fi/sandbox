import { User } from '../domain/user';

const users: User[] = [];
let nextId = 1;

export class UserRepository {
  all(): User[] {
    return users;
  }

  create(name: string): User {
    const user = { id: nextId++, name };
    users.push(user);
    return user;
  }
}
