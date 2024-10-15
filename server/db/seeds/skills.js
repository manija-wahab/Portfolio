/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('skills').del()

  // Insert seed entries
  await knex('skills').insert([
    {
      name: 'HTML',
      icon: '/images/inventory/file-type-html.svg',
      experience: '3 years',
      confidence_level: 100,
    },
    {
      name: 'CSS',
      icon: '/images/inventory/file-type-css.svg',
      experience: '3 years',
      confidence_level: 80,
    },
    {
      name: 'JavaScript',
      icon: '/images/inventory/javascript-js.svg',
      experience: '2 years',
      confidence_level: 50,
    },
    {
      name: 'React.js',
      icon: '/images/inventory/react.svg',
      experience: '2 years',
      confidence_level: 90,
    },
    {
      name: 'TypeScript',
      icon: '/images/inventory/typescript-icon.svg',
      experience: '1 year',
      confidence_level: 100,
    },
    {
      name: 'Node.js',
      icon: '/images/inventory/node-js.svg',
      experience: '1 year',
      confidence_level: 90,
    },
    {
      name: 'Express.js',
      icon: '/images/inventory/express-original.svg',
      experience: '1 year',
      confidence_level: 100,
    },
    {
      name: 'SQLite',
      icon: '/images/inventory/file-type-sqlite.svg',
      experience: '1 year',
      confidence_level: 70,
    },
    {
      name: 'Knex.js',
      icon: '/images/inventory/knex-js.svg',
      experience: '1 year',
      confidence_level: 100,
    },
    {
      name: 'Git',
      icon: '/images/inventory/git.svg',
      experience: '2 years',
      confidence_level: 100,
    },
    {
      name: 'GitHub',
      icon: '/images/inventory/github.svg',
      experience: '2 years',
      confidence_level: 100,
    },
    {
      name: 'Vitest',
      icon: '/images/inventory/vitest-seeklogo.svg',
      experience: '1 year',
      confidence_level: 40,
    },
    {
      name: 'Agile',
      icon: '/images/inventory/agile.svg',
      experience: '1 year',
      confidence_level: 75,
    },
    {
      name: 'Teamwork',
      icon: '/images/inventory/collaboration.svg',
      experience: '3 years',
      confidence_level: 90,
    },
    {
      name: 'Video Editing',
      icon: '/images/inventory/film.svg',
      experience: '3 years',
      confidence_level: 95,
    },
  ])
}
