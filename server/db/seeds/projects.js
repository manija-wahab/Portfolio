/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// agile.svg                             javascript-js.svg
// collaboration.svg                     knex-js.svg
// express-original.svg                  linux.svg
// file-type-css.svg                     node-js.svg
// file-type-html.svg                    react-query-seeklogo.svg
// file-type-sqlite.svg                  react-router.svg
// file-type-vscode.svg                  react.svg
// film.svg                              sass.svg
// git.svg                               typescript-icon.svg
// github.svg                            vitest-seeklogo.svg

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {
      id: 1,
      name: 'Time Jump',
      url: 'https://time-jump.pushed.nz/',
      image: '/images/time-jump.png',
      duration: '2 weeks minus the procastination',
      summary:
        'A life planner to break down goals into smaller achievable steps and to track your habits',
      description:
        'This is my first personal project, originally created as a tool for myself to organize my year by breaking down big goals into smaller, actionable steps (and to help me tackle procrastination!) When my friends saw it, they loved the idea and wanted to use it, too! I saw this as the perfect opportunity to try implementing my own authentication system (Something ive always been curious to do) and It worked!! I think.. But I am pretty happy with this and one day I want to turn this into a mobile app so I can use it on my phone too',
      icons: JSON.stringify([
        'react.svg',
        'typescript-icon.svg',
        'knex-js.svg',
        'express-original.svg',
        'react-query-seeklogo.svg',
        'react-router.svg',
        'sass.svg',
      ]),
      developers: JSON.stringify(['Me']),
    },
    {
      id: 2,
      name: 'Chatter',
      url: 'https://chatter.pushed.nz/',
      image: '/images/chatter-temp.png',
      duration: '1.5 weeks',
      summary:
        'A Twitter-inspired app for Dev Academy graduates to stay connected after bootcamp. Users can create profiles, post updates, comment, and add friends',
      description:
        "This was our final group project, and with more time than usual, we knew it had to be something memorable. 'Chatter' became that special project, one I’ll never forget, not just for what we built but for the memories we created along the way. Every day, we’d catch up for 30 minutes to check in on each other, celebrate small wins, and give eachother feedback and support. I got to learn heaps by being a part of this project (Never have I ever struggled with css more) but I also got to learn so much about what it means to be a part of a team and it was so furfilling",
      icons: JSON.stringify([
        'react.svg',
        'typescript-icon.svg',
        'knex-js.svg',
        'express-original.svg',
        'vitest-seeklogo.svg',
        'react-query-seeklogo.svg',
        'react-router.svg',
        'sass.svg',
      ]),
      developers: JSON.stringify(['Me', 'Georgia', 'Trisha', 'Giovanni']),
    },
    {
      id: 3,
      name: 'Todo App',
      url: 'https://noras-todo-app.pushed.nz/',
      image: '/images/todo-app.png',
      duration: '2 days',
      summary:
        'A simple to-do app created to practice my skills with Express.js and database integration',
      description:
        'This project was a great way for me to practice working with databases and explore the functionality of Express.js. Since I was still fairly new to both, it felt rewarding to dive in. Building this app gave me sooo much more confidence and helped me refine my skills in backend development',
      icons: JSON.stringify([
        'react.svg',
        'typescript-icon.svg',
        'knex-js.svg',
        'express-original.svg',
        'react-query-seeklogo.svg',
        'react-router.svg',
        'file-type-css.svg',
      ]),
      developers: JSON.stringify(['Me']),
    },
    {
      id: 4,
      name: 'Glow Up',
      url: 'https://glow-up.pushed.nz/lights',
      image: '/images/glow-up.png',
      duration: '4 days',
      summary:
        'An online lamp store where users can browse and add lamps to their cart or submit a repair ticket',
      description:
        'A little project we did together we wanted to create a little lamp store and it served as our first big test of database knowledge. We found it a bit intimidating at first, but it turned out to be a fantastic learning experience. Even though our final project might not look perfect, we were proud of how much we learned and accomplished along the way',
      icons: JSON.stringify([
        'react.svg',
        'typescript-icon.svg',
        'knex-js.svg',
        'express-original.svg',
        'react-query-seeklogo.svg',
        'react-router.svg',
        'file-type-css.svg',
      ]),
      developers: JSON.stringify(['Me', 'Hope', 'Joshua']),
    },
    {
      id: 5,
      name: 'React Rockstars',
      url: 'http://react-rockstars.pushed.nz/',
      image: '/images/react-rockstars.png',
      duration: '4 days',
      summary:
        'A place for you to browse albums of your favorite artists and listen to song snippets',
      description:
        'One of my favorite projects of all time probably because of the time and effort we all put into it. It was our first experience working with an external API and we chose the Deezer API. I was also responsible for creating and designing the wireframe and I decided to go really big, which felt ambitious given our skill level at the time and I thought I was being a bit delusional with the scope, but we actually pulled it off! I remember spending hours figuring out params and wrestling with CSS which, admittedly, was challenging back then and getting that final component to look exactly like my wireframe design almost killed my final 3 braincells. But I’m so proud of this little app, and I still visit it occasionally and use it myself because I think it turned out pretty neat',
      icons: JSON.stringify([
        'react.svg',
        'typescript-icon.svg',
        'express-original.svg',
        'react-query-seeklogo.svg',
        'react-router.svg',
        'file-type-css.svg',
      ]),
      developers: JSON.stringify(['Me', 'Hue', 'Giovanni']),
    },
    {
      id: 6,
      name: 'Pokedex',
      url: 'http://pokedex.pushed.nz/',
      image: '/images/pokedex.png',
      duration: '4 days',
      summary: 'Our own version of a Pokédex',
      description:
        'This was the first time I was going to be in a group creating a project together and I remember being so nervous the day before. But it ended up being one of my favorite projects ive ever done!!. We had to manually create the entire data.json file ourselves and link each Pokémon image individually as we didn’t yet know how to fetch data from external APIs. Despite everything this project will alwyas be a core memory for me',
      icons: JSON.stringify([
        'react.svg',
        'typescript-icon.svg',
        'react-router.svg',
        'vitest-seeklogo.svg',
        'file-type-css.svg',
      ]),
      developers: JSON.stringify(['Me', 'Joshua', 'Andrew', 'Giovanni']),
    },
    {
      id: 7,
      name: 'Problem Solving',
      url: 'https://manija-wahab.github.io/blog/problem-solving.html',
      image: '/images/problem-solving.png',
      duration: '2 days',
      summary:
        'A blog where I share my approaches to problem-solving in different situations (starring sailor moon!!)',
      description:
        'Out of all my little blogs, this one is my favorite because I got to experiment with GSAP animations and I gave it an adorable Sailor Moon theme and it turned out so cute!! That said, please don’t read the actual content—it’s a bit cringey, and I’m not sure why I was so cringe back then (though this was only a few months ago...)',
      icons: JSON.stringify([
        'file-type-html.svg',
        'file-type-css.svg',
        'javascript-js.svg',
      ]),
      developers: JSON.stringify(['Me']),
    },
    {
      id: 8,
      name: 'Learning Plan',
      duration: '2 days',
      url: 'https://manija-wahab.github.io/blog/learning-plan-2.html',
      image: '/images/learning-plan.png',
      summary: 'A blog outlining my learning plan as I prepared for bootcamp',
      description:
        'I’m leaving this here because, upon reflection, it looks pretty neat! However, I’m not sure if it’s entirely responsive. Please avoid reading the text, as it’s a bit cringey. Thank you! I also had the chance to experiment with GSAP again, which was really fun. I just love doing css and designing this so muchhh!!',
      icons: JSON.stringify([
        'file-type-html.svg',
        'file-type-css.svg',
        'javascript-js.svg',
      ]),
      developers: JSON.stringify(['Me']),
    },
    {
      id: 9,
      name: 'Blog',
      duration: '1 week',
      url: 'https://manija-wahab.github.io/',
      image: '/images/blog.png',
      summary: 'A simple static blog about myself. it’s cringe.',
      description:
        'This is my very first HTML page. The design may hurt your eyes a little, but at the time, I was incredibly proud of my work. Now that I look back at it, I realize it’s not responsive at all, and the CSS is quite a mess. I can see that the same result could have been achieved with just a fraction of the CSS I used here. Despite that, this blog holds a special place in my heart because it marks the beginning of my journey. It’s both nostalgic and bittersweet to revisit it',
      icons: JSON.stringify(['file-type-html.svg', 'file-type-css.svg']),
      developers: JSON.stringify(['Me']),
    },
  ])
}
