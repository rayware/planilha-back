import setupKnex from "knex"

export const config = {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'rayware',
      password: '1qa2ws3ed',
      database: 'db_sistema',
    },
    useNullAsDefault: true,
}


export const knex = setupKnex(config)