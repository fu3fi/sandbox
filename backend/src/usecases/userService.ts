import { User } from '../domain/user'
import { Database } from '../infrastructure/db'

export class UserService {
  constructor(private db: Database) {}

  async listUsers(): Promise<User[]> {
    return this.db.getUsers()
  }

  async createUser(name: string): Promise<User> {
    return this.db.createUser(name)
  }
}
