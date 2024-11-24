export default async (event) => {
  try {
    console.log('Received event:', event)

    const path = event.url || event.path
    const id = path.split('/').pop()

    if (!id) {
      return new Response(
        JSON.stringify({ message: 'ID parameter is missing' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      )
    }

    let apiUrl = 'https://nooryas-portfolio.up.railway.app/api/v1/skills'

    if (id) {
      apiUrl = `${apiUrl}/${id}`
    }

    const response = await fetch(apiUrl)

    if (!response.ok) {
      return new Response(
        JSON.stringify({ message: 'Error fetching data from external API' }),
        {
          status: response.status,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    const data = await response.json()
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error.message)
    return new Response(
      JSON.stringify({
        message: 'Failed to process request',
        error: error.message,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}
