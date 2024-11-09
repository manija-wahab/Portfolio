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
      likes: JSON.stringify(['Anime', 'video games', 'books']),
      dislikes: 'People who are not cheerful at 5am in the morning',
      combat_moves: JSON.stringify([
        'Debugging at 3 AM',
        'Writing decent CSS',
        'Building responsive web apps',
        'Personally cannot even hurt a fly',
      ]),
      achievements: 'Completed Dev Academy',
      origin_story:
        'I hate my real name Manija, so my family calls me Nora, but no one else ever said it right :C So my friends call me Nora :D But this became a problem as everyone started to call me Dora the Explorer. But I embraced it and started calling myself Nora the Explorer, and once I began coding, I upgraded to "Nora the Internet Explorer." Hah! Get it? Like the web browser! Okay, sorry, that was cringe. Now, I wander the digital realm, solving bugs and pushing code. Thank you for reading C:',
    },
  ])
}
