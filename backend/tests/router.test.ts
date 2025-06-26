import { describe, it, expect, beforeEach } from 'vitest'
import Fastify from 'fastify'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import { InMemoryDB } from '../src/infrastructure/db'
import { UserService } from '../src/usecases/userService'
import { createRouter } from '../src/trpc/router'

const setup = async () => {
  const app = Fastify()
  const db = new InMemoryDB()
  const service = new UserService(db)
  const router = createRouter(service)
  app.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: { router }
  })
  await app.ready()
  return { app, db }
}

describe('tRPC router via Fastify', () => {
  it('lists users', async () => {
    const { app } = await setup()
    const res = await app.inject({ method: 'GET', url: '/trpc/users' })
    expect(res.statusCode).toBe(200)
    const body = JSON.parse(res.payload)
    expect(body.result.data).toEqual([])
  })

  it('creates a new user', async () => {
    const { app } = await setup()
    const resCreate = await app.inject({
      method: 'POST',
      url: '/trpc/createUser',
      payload: JSON.stringify({ name: 'Charlie' }),
      headers: { 'content-type': 'application/json' }
    })
    expect(resCreate.statusCode).toBe(200)
    const created = JSON.parse(resCreate.payload).result.data
    expect(created.name).toBe('Charlie')

    const resList = await app.inject({ method: 'GET', url: '/trpc/users' })
    expect(JSON.parse(resList.payload).result.data).toHaveLength(1)
  })
})
