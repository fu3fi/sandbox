import { initTRPC } from '@trpc/server'
import { z } from 'zod'
import { UserService } from '../usecases/userService'

export const createRouter = (service: UserService) => {
  const t = initTRPC.create()

  return t.router({
    users: t.procedure.query(() => service.listUsers()),
    createUser: t.procedure
      .input(z.object({ name: z.string() }))
      .mutation(({ input }) => service.createUser(input.name))
  })
}

export type AppRouter = ReturnType<typeof createRouter>
