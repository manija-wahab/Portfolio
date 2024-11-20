/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.alterTable('skills', (table) => {
    table.string('name', 1024).alter()
    table.string('icon', 1024).alter()
    table.string('confidence_level', 1024).alter()
    table.text('experience').alter()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.alterTable('skills', (table) => {
    table.string('name', 255).alter()
    table.string('icon', 255).alter()
    table.string('confidence_level', 255).alter()
    table.text('experience').alter()
  })
}
