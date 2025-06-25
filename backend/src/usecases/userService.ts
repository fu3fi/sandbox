import { User } from '../domain/user';
import { UserRepository } from '../infrastructure/repositories';

export class UserService {
  constructor(private repo: UserRepository) {}

  listUsers(): User[] {
    return this.repo.all();
  }

  createUser(name: string): User {
    return this.repo.create(name);
  }
}
