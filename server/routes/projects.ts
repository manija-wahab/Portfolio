const fetch = require('node-fetch')

export default async () => {
  try {
    // Fetch data from all your endpoints
    const aboutMeResponse = await fetch(
      'https://your-backend-url.up.railway.app/api/v1/aboutMe',
    )
    const aboutMeData = await aboutMeResponse.json()

    const skillsResponse = await fetch(
      'https://your-backend-url.up.railway.app/api/v1/skills',
    )
    const skillsData = await skillsResponse.json()

    const menuResponse = await fetch(
      'https://your-backend-url.up.railway.app/api/v1/menus',
    )
    const menuData = await menuResponse.json()

    const projectsResponse = await fetch(
      'https://your-backend-url.up.railway.app/api/v1/projects',
    )
    const projectsData = await projectsResponse.json()

    // Combine all data into one object or array
    const responseData = {
      aboutMe: aboutMeData,
      skills: skillsData,
      menu: menuData,
      projects: projectsData,
    }

    return {
      statusCode: 200,
      body: JSON.stringify(responseData),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to fetch data' }),
    }
  }
}
