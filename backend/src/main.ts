import Fastify from 'fastify'
import { createFastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import { createRouter } from './modules/users/router'
import { InMemoryDB } from './modules/users/infrastructure/db'
import { UserService } from './modules/users/usecases/userService'
import fastifyMetrics from 'fastify-metrics'
// Placeholder for authjs
// import auth from '@auth/core/fastify'

const server = Fastify({ logger: true })

// metrics
server.register(fastifyMetrics)

const db = new InMemoryDB()
const service = new UserService(db)
const router = createRouter(service)

server.register(createFastifyTRPCPlugin, {
  prefix: '/trpc',
  router
})

server.get('/', async () => ({ status: 'ok' }))

server.listen({ port: 3000 }, err => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info('server running at http://localhost:3000')
})
