import { createUDPSocketClient } from 'kda'

export default {
  Test: createUDPSocketClient({
    port: 3001
  })
}
