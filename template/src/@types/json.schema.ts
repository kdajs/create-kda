export default {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $ref: '#/definitions/RequestBody',
  definitions: {
    RequestBody: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        }
      },
      required: [
        'id'
      ],
      additionalProperties: false
    }
  }
}
