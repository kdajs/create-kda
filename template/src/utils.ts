import day from 'dayjs'
import shortid from 'shortid'
import { Validator } from 'jsonschema'

function today (): string {
  return day().format('YYYY-MM-DD')
}

function now (): string {
  return day().format('YYYY-MM-DD HH:mm:ss')
}

function uuid (): string {
  return new Date().getTime().toString() + shortid.generate()
}

const validator = new Validator()
function jsonSchemaValidator (data: any, schema: object): string | undefined {
  let errors: string | undefined
  const result = validator.validate(data, schema, { allowUnknownAttributes: true })
  if (result.errors.length > 0) {
    errors = result.errors.map(v => v.message).join('\n')
  }
  return errors
}

export default {
  now,
  today,
  uuid,
  jsonSchemaValidator
}
