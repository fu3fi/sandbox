import { describe, it, expect } from 'vitest'
import { InMemoryDB } from '../src/modules/users/infrastructure/db'

describe('InMemoryDB', () => {
  it('creates and lists users', async () => {
    const db = new InMemoryDB()
    await db.createUser('Alice')
    const users = await db.getUsers()
    expect(users.length).toBe(1)
    expect(users[0].name).toBe('Alice')
  })
})
