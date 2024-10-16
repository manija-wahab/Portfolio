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
      experience:
        'When I first discovered web development, the first thing I did was watch a one-hour YouTube tutorial on how to create an HTML page. I remember setting up VS Code and creating my very first "Hello World!" page, and when those words appeared on the localhost server, I felt such great joy. I knew this was something I wanted to continue doing, so even though HTML websites are not as common anymore, it still holds a core memory for me as the start of my journey as a coder.',
      confidence_level: 100,
    },
    {
      name: 'CSS',
      icon: '/images/inventory/file-type-css.svg',
      experience:
        'I’ve always loved designing things. Before I decided to pursue coding as a career, I wanted to be a digital artist or do something design-related because I find it really enjoyable. So, CSS is like art for me and the best part of creating projects. I love designing components and making everything look pretty, spending a lot of time trying to master CSS. Even though people don’t consider CSS a real programming language, to me, it’s super important—it’s like turning a caterpillar (basic HTML) into a butterfly. CSS brings things to life, and I want to be the best at it one day.',
      confidence_level: 80,
    },
    {
      name: 'JavaScript',
      icon: '/images/inventory/javascript-js.svg',
      experience:
        'JavaScript used to scare me a lot. The first time I tried learning it from a book, I kept reading more and more, but nothing made sense until I started practicing it on real projects. Then, everything clicked for me, and I slowly became good at it. JavaScript is such a detailed language that even if you spend your whole life learning it, you might not understand everything 100%. So, I keep expanding my skills. The more I practice, the better I get. Since it’s my first programming language, I feel really connected to it.',
      confidence_level: 50,
    },
    {
      name: 'React.js',
      icon: '/images/inventory/react.svg',
      experience:
        'I’ve heard a lot about Vue being a great framework (which is why it’s one of my goals to learn), but React really clicked for me. I learned it surprisingly fast and felt confident within the first week. It’s the framework I’ve used the most in multiple projects, and I feel quite comfortable using it. That said, I’d still like to try Vue and see how I work with it, but I believe it’s better to master one framework rather than be average at many. So far, React has been my go-to, and I’m confident in it, but it’d be nice to see how Vue stacks up.',
      confidence_level: 90,
    },
    {
      name: 'TypeScript',
      icon: '/images/inventory/typescript-icon.svg',
      experience:
        'I’ve been using TypeScript for a while now, and I can’t imagine going back to JavaScript without it. It just makes sense to me. Seeing the errors TypeScript catches early on has saved me from some pretty big headaches. Almost all my projects now use TypeScript, and I plan to stick with it because it helps me write better, more reliable code.',
      confidence_level: 100,
    },
    {
      name: 'Node.js',
      icon: '/images/inventory/node-js.svg',
      experience:
        'When I started working with backend development, it took a while for my brain to comprehend its purpose, and Node.js felt a bit intimidating at first. But after building a few projects, I’ve grown really confident with it. It’s amazing how much you can do with JavaScript on both the frontend and backend. I still have a lot to learn, but it’s been around a year now, and I feel pretty good about my Node skills!',
      confidence_level: 90,
    },
    {
      name: 'Express.js',
      icon: '/images/inventory/express-original.svg',
      experience:
        'I used to think I really enjoyed the frontend part of development, but after using Express.js for a while, I feel like I enjoy writing backend code much more. Express.js has become my go-to framework for building backend services. It’s fast, lightweight, and I’ve been using it consistently for a year now. It makes creating APIs and handling routes super easy. Every time I work on a new backend project, Express.js is my framework of choice because it just works for me, and I feel really confident with it.',
      confidence_level: 100,
    },
    {
      name: 'SQLite',
      icon: '/images/inventory/file-type-sqlite.svg',
      experience:
        'Databases were a mystery to me at first, but after using SQLite in my projects, it started to make sense. I realized how much better it is to use databases in your code. I’ve been using SQLite for about a year now, and even though it’s a lightweight database, it’s been more than enough for the apps I’ve built. There’s still a lot I can learn, but so far, I feel pretty comfortable with it.',
      confidence_level: 70,
    },
    {
      name: 'Knex.js',
      icon: '/images/inventory/knex-js.svg',
      experience:
        'Working with databases became so much easier because of Knex.js. It makes writing SQL queries way more intuitive. I’ve been using Knex for a year, and I feel like it’s become an essential part of my backend stack. I use it for almost every project, including this one, so I don’t think I can go back to creating projects without it. Ever since I learned Knex.js, creating projects has become so much easier for me, and I feel extremely confident with it.',
      confidence_level: 100,
    },
    {
      name: 'Git',
      icon: '/images/inventory/git.svg',
      experience:
        'I have been collaborating on many projects with other developers during my bootcamp, and we only used Git. I feel really confident with it, and I think getting to use it in real-time with other developers was really helpful because there were times when we ran into many issues and errors, such as things not being pushed properly or branch issues. Every time we encountered a new issue, we had the chance to solve and learn something new about Git. Overall, Git and GitHub together have been a great experience for me, and I feel pretty confident using them.',
      confidence_level: 100,
    },
    {
      name: 'GitHub',
      icon: '/images/inventory/github.svg',
      experience:
        'I always knew GitHub existed because I used to download open-source apps on my phone, but I could never wrap my head around it and what it was. Now, after using it for a year, I realize how foolish I was for not understanding it. My biggest challenge in creating independent projects is that I never commit since I’m working alone, so I do everything locally and commit in the end, which is something I need to remember to change. I really enjoy working in teams, and using GitHub brings back so many good memories for me. I would love to spend some time contributing to other open-source projects if I can.',
      confidence_level: 100,
    },
    {
      name: 'Vitest',
      icon: '/images/inventory/vitest-seeklogo.svg',
      experience:
        'Testing has always been a little confusing for me, but I have completed many projects and added tests to them. I feel that regarding testing and Vitest, I have a long way to go and a lot of potential that I need to spend some time trying to reach for sure.',
      confidence_level: 40,
    },
    {
      name: 'React Query',
      icon: '/images/inventory/react-query-seeklogo.svg',
      experience:
        'I have been using React Query ever since I learned React, and I have gained a lot of experience using TanStack React Query. I don’t think I can go back to using regular fetching, which often led to repetitive code and inefficient state management. With React Query, I can easily fetch, cache, and synchronize server data with minimal boilerplate, and I love how it automatically handles caching and background updates. So I really don’t see the point of going back as I’ve already gained so much experience with it unless something even better comes out. Overall I feel pretty confident using it in my projects.',
      confidence_level: 90,
    },
    {
      name: 'Agile',
      icon: '/images/inventory/agile.svg',
      experience:
        'I’ve been working with Agile methodologies for about a year now, and it’s been a game changer for me. At first, I wasn’t sure how it would work for me, but as I dove into it during my bootcamp, I started to see the value in flexibility and collaboration. The idea of breaking projects into smaller, manageable chunks really helps keep the momentum going and makes it easier to adapt to changes along the way. I love how Agile encourages regular check-ins and feedback loops, which means we can constantly improve our process and stay on track. Overall, I feel like Agile has made my workflow more dynamic and enjoyable, and I’m excited to keep learning and growing in this area.',
      confidence_level: 85,
    },
    {
      name: 'Teamwork',
      icon: '/images/inventory/collaboration.svg',
      experience:
        'I work really well independently, and my goal is to become a 10x programmer, so working in teams was never something I cared for. However, during bootcamp, when I collaborated with others on multiple projects, I truly understood the value of teamwork. If you give me a project to complete alone, I can probably do it 10 times faster than if I were to work in a team. However, working in a team is 10 times more enjoyable than doing something alone. This realization hit me hard during bootcamp because I found that even though I could complete a task more efficiently on my own, working with others sometimes slowed me down (waiting for others to complete their parts, etc.). I realized I felt much more fulfilled and motivated while collaborating with others. There is so much to learn from working together, like taking care of each other’s emotional needs and having courageous conversations. I believe that working in a team is far more rewarding than working alone; it’s those small moments when you check in on each other for a few minutes, celebrate each other’s small wins, and ensure everyone is feeling alright and not stressed. Working with people is such a fulfilling task, and I’m so glad that as a developer, I have the privilege to do this. I know there is so much for me to learn, and I’m excited for the experiences I will have in the future.',
      confidence_level: 90,
    },
    {
      name: 'Video Editing',
      icon: '/images/inventory/film.svg',
      experience:
        'I have been video editing for over a decade now. Ever since I was a kid, I’ve always wanted to be a YouTuber, so I’ve been editing and creating content on YouTube (mostly gaming videos, digital art, animations, etc.). By now, I feel like a pro at video editing, especially since I once aspired to create 2D animations. By the time I was 14, I was using Sony Vegas Pro to create 2D and 3D keyframe animations, as well as 2D rigging software for animations. My editing skills have improved so much that I feel I can edit almost anything. I know that it’s not technically a useful skill in software development, but it’s something I’m really proud of because I truly feel like I have mastered video editing.',
      confidence_level: 100,
    },
    {
      name: 'React Router',
      icon: '/images/inventory/react-router.svg',
      experience:
        'I was so scared of React Router the first time I used it, but now it’s a piece of cake for me and an essential part of all my projects. I think it’s the best way to manage routing in a React application, and pairing it with Express.js is perfection. I feel confident with React Router, and while there’s probably still a lot for me to learn, as long as I have a deep understanding of the fundamentals, I should be alright.',
      confidence_level: 90,
    },
    {
      name: 'Sass',
      icon: '/images/inventory/sass.svg',
      experience:
        'I chose Sass as the topic for my lightning talk during boot camp because I wanted to learn more about CSS. Sass has become a really useful part of writing CSS for me, and I’m also using it for the CSS in this very project. I mostly like using mixins, variables, and nesting. I feel like there’s still a lot more for me to learn, so I should probably spend some more time exploring other features of Sass. So far, it feels like it has made writing CSS so much easier!',
      confidence_level: 30,
    },
    {
      name: 'Linux (Ubuntu) ',
      icon: '/images/inventory/linux.svg',
      experience:
        'Using Linux was one of the best decisions I’ve made for development. At first it was a bit intimidating—coming from Windows the command line was unfamiliar territory and setting it up made me feel really anxious but over time I’ve grown to appreciate how lightweight and customizable Ubuntu is and now I love how much control it gives me over my development environment. At first I couldn’t wrap my head around why we can’t just use the default windows file explorer now I understand how much more time efficent it is. I feel like it’s made me a more efficient developer especially with how seamlessly it integrates with tools like Git and VS Code. Plus, it’s just fun to use now I can’t imagine working with anything else.',
      confidence_level: 70,
    },
    {
      name: 'VS Code',
      icon: '/images/inventory/file-type-vscode.svg',
      experience:
        'I’ve been using VS Code since I first started coding and it’s been my go-to code editor ever since. From the moment I created my first HTML file, VS Code has been there for me. I am someone who highly customzies everything so I appreciate how much you can customize such as the themes and layout. I am open to try other softwares if the company im working at recommends it, but so far im pretty comfortable with VS Code as it is but again im happy to explore new softwares and tools.',
      confidence_level: 100,
    },
  ])
}
