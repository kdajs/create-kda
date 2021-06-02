import { createUDPSocketClient, createClients } from 'kda'

export default createClients({
  Test: createUDPSocketClient({
    port: 3001
  })
})
