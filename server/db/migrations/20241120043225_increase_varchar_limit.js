/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.alterTable('aboutMe', (table) => {
    table.string('combat_moves', 1024).alter()
    table.string('achievements', 1024).alter()
    table.string('origin_story', 1024).alter()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.alterTable('aboutMe', (table) => {
    table.string('combat_moves', 255).alter()
    table.string('achievements', 255).alter()
    table.string('origin_story', 255).alter()
  })
}
