/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('computers', (table) => {
      table.increments('id').primary();
      table.integer('quantidade').notNullable();
      table.integer('patrimonio').notNullable();
      table.text('marca').notNullable();
      table.text('nome').notNullable();
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export async function down(knex) {
    await knex.schema.dropTable('computers');
  }