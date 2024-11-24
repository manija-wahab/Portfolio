export default async () => {
  try {
    const response = await fetch(
      'https://nooryas-portfolio.up.railway.app/api/v1/skills',
    )

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          message: 'Error fetching data from external API',
        }),
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
    console.error(error)

    return new Response(
      JSON.stringify({
        message: 'Failed to fetch data from external API',
        error: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
