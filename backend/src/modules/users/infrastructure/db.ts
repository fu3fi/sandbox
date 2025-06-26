import { User } from '../domain/user'

export interface Database {
  getUsers(): Promise<User[]>
  createUser(name: string): Promise<User>
}

export class InMemoryDB implements Database {
  private users: User[] = []
  private nextId = 1
  async getUsers(): Promise<User[]> {
    return this.users
  }
  async createUser(name: string): Promise<User> {
    const user = { id: this.nextId++, name }
    this.users.push(user)
    return user
  }
}
