const fetch = require('node-fetch')

export default async (event) => {
  const { type } = event.queryStringParameters
  let url

  switch (type) {
    case 'aboutMe':
      url = 'https://nooryas-portfolio.up.railway.app/api/v1/aboutMe'
      break
    case 'skills':
      url = 'https://nooryas-portfolio.up.railway.app/api/v1/skills'
      break
    case 'projects':
      url = 'https://nooryas-portfolio.up.railway.app/api/v1/projects'
      break
    default:
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid type parameter' }),
      }
  }

  try {
    const response = await fetch(url)
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to fetch data' }),
    }
  }
}
