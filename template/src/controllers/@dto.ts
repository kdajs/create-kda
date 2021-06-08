import * as t from 'io-ts'

export const Test = t.type({
  id: t.number,
  name: t.union([t.string, t.undefined])
})

export type TestType = t.TypeOf<typeof Test>
