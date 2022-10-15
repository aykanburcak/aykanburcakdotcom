export async function fetchApi(parameters) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${parameters}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const json = await res.json()

  if (json.errors) {
    return {
      props: {},
    }
  }

  return json
}
