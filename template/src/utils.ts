import * as day from 'dayjs'
import * as shortid from 'shortid'

function today (): string {
  return day().format('YYYY-MM-DD')
}

function now (): string {
  return day().format('YYYY-MM-DD hh:mm:ss')
}

function uuid (): string {
  return new Date().getTime().toString() + shortid.generate()
}

const utils: Utils = {
  now,
  today,
  uuid
}

export default utils
