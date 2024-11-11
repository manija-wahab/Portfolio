export async function seed(knex) {
  await knex('aboutMe').del()
  await knex('aboutMe').insert([
    {
      id: 1,
      name: 'Noorya/Nora',
      code_name: 'Nora the Internet Explorer',
      level: 19,
      status: 'Freeloader living with parents',
      current_quest: 'Looking for a job to not be a freeloader',
      species: 'Full stack developer',
      likes: JSON.stringify([
        'Sailor Moon',
        'video games',
        'non-fiction books',
        'metaphysics',
      ]),
      dislikes: 'fiction books',
      combat_moves: JSON.stringify([
        'Debugging at 3 AM',
        'Writing decent CSS',
        'Building responsive web apps',
        'Personally cannot even hurt a fly',
      ]),
      achievements: 'Completed Dev Academy',
      origin_story:
        'I hate my real name Manija, so my family calls me Noorya, but no one else ever said it right :C So my friends and teachers started to call me Nora :D and since it rhymed with Dora the Explorer, I started calling myself Nora the Explorer, and once I began coding, I upgraded to "Nora the Internet Explorer." Hah! Get it? Like the web browser! Okay, sorry, that was cringe. Thank you for reading C:',
    },
  ])
}
