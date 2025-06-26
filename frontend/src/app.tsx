import { Component, createSignal, onMount } from 'solid-js'
import { trpc } from './trpc'

const App: Component = () => {
  const [users, setUsers] = createSignal<string[]>([])

  onMount(async () => {
    const data = await trpc.users.query()
    setUsers(data.map(u => u.name))
  })

  return (
    <div class="p-4 text-center">
      <h1 class="text-2xl font-bold">SolidStart + tRPC</h1>
      <ul class="mt-4">
        {users().map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
