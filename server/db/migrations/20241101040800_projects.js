/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('url').notNullable()
    table.string('image').notNullable()
    table.string('duration')
    table.text('summary')
    table.string('description')
    table.json('icons')
    table.json('developers')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('projects')
}
