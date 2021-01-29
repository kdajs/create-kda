import { createUDPSocketServer, createUDPSocketClient } from 'kda'
import { Test } from './udp.socket.delegates/test'

const udpSocketDelegates: UDPSocketDelegates = {
  '/socket/test': Test
}

function createUDPSocketClients (state: CommonState): UDPSocketClients {
  const udpSocketServer = createUDPSocketServer({
    state,
    port: 3001,
    delegates: udpSocketDelegates
  })

  const udpSocketClient = createUDPSocketClient({
    server: udpSocketServer,
    port: 3001
  })

  return {
    Test: udpSocketClient
  }
}

export default createUDPSocketClients
