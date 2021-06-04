import 'kda'
// import models from '@/models'
import utils from '@/utils'
import clients from '@/clients'

declare module 'kda' {
  interface InjectContext {
    // models: typeof models
    utils: typeof utils
    clients: typeof clients
  }
}

export const enum TestClientPath {
  Test1 = '/udp/test/1',
  Test2 = '/udp/test/2'
}

export type TestClientSendTest1 = (path: TestClientPath.Test1, params: number) => Promise<number>
export type TestClientSendTest2 = (path: TestClientPath.Test2, params: string) => Promise<string>

export type TestClientSend = TestClientSendTest1 & TestClientSendTest2
