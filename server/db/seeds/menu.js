/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('menu').del()
  await knex('menu').insert([
    { id: 1, name: 'About Me', image: 'image here' },
    { id: 2, name: 'Projects', image: 'image here' },
    { id: 3, name: 'Skills', image: 'image here' },
    { id: 4, name: 'My CV', image: 'image here' },
  ])
}
