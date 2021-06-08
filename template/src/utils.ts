import day from 'dayjs'
import shortid from 'shortid'

function today (): string {
  return day().format('YYYY-MM-DD')
}

function now (): string {
  return day().format('YYYY-MM-DD HH:mm:ss')
}

function uuid (): string {
  return new Date().getTime().toString() + shortid.generate()
}

async function sleep (time: number = 1000): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, time))
}

function random (n: number, m: number): number {
  return Math.floor(Math.random() * (m - n + 1) + n)
}

export default {
  now,
  today,
  uuid,
  sleep,
  random
}
