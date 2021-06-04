import { createUDPSocketClient } from 'kda'
import { TestClientSend } from './@types/kda.d';

export default {
  Test: createUDPSocketClient<TestClientSend>({
    port: 3001
  })
}
