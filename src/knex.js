import knex from "knex"

export const config = {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'rayware',
      password: '1qa2ws3ed',
      database: 'teste_db',
    },
    useNullAsDefault: true,
}


export const tknex = knex(config)