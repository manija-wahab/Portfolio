/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.alterTable('projects', (table) => {
    table.string('description', 1024).alter()
    table.string('summary', 1024).alter()
    table.string('name', 1024).alter()
    table.string('url', 1024).alter()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.alterTable('projects', (table) => {
    table.string('description', 255).alter()
    table.string('summary', 255).alter()
    table.string('name', 255).alter()
    table.string('url', 255).alter()
  })
}
