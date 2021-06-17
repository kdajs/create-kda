import day from 'dayjs'

function today (): string {
  return day().format('YYYY-MM-DD')
}

function now (): string {
  return day().format('YYYY-MM-DD HH:mm:ss')
}

async function sleep (time: number = 1000): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, time))
}

function random (n: number, m: number): number {
  return Math.floor(Math.random() * (m - n + 1) + n)
}

export default {
  today,
  now,
  sleep,
  random
}
