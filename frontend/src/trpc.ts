import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../../backend/src/trpc/router'

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({ url: '/trpc' })
  ]
})
