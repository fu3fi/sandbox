import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../../backend/src/modules/users/router'

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({ url: '/trpc' })
  ]
})
