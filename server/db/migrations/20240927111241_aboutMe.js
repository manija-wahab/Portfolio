/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('aboutMe', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('code_name')
    table.integer('level')
    table.string('status')
    table.string('current_quest')
    table.string('species')
    table.string('likes')
    table.string('dislikes')
    table.string('combat_moves')
    table.string('achievements')
    table.string('origin_story')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('aboutMe')
}
