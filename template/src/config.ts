const TEST = {
  DB: {
    host: 'test.test.com',
    port: 3306,
    username: 'test',
    password: 'test',
    database: 'test'
  }
}

const PROD = {
  DB: {
    host: 'test.test.com',
    port: 3306,
    username: 'test',
    password: 'test',
    database: 'test'
  }
}

export default process.env.NODE_ENV === NODE_ENV.Production ? PROD : TEST
