/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('skills', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('icon')
    table.text('experience')
    table.string('confidence_level').unsigned().defaultTo(0)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('skills')
}
