import { createUDPClient } from 'kda'
import { TestClientSend } from '@/@types/kda.d';

export default {
  Test: createUDPClient<TestClientSend>({
    port: 3001
  })
}
