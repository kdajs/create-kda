import { createUDPController } from 'kda'
import { TestClientSendTest1, TestClientSendTest2 } from '@/@types/kda.d';

export const Test1 = createUDPController<TestClientSendTest1>(async (ctx, params, resolve, reject) => {
  resolve(params + params)
})

export const Test2 = createUDPController<TestClientSendTest2>(async (ctx, params, resolve, reject) => {
  resolve(params + params)
})
