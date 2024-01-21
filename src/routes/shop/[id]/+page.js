export async function load({ fetch, params }) {
  const endpoint = 'https://dummyjson.com/products/' + params.id

  const response = await fetch(endpoint)
  const product = await response.json()

  return {
    product
  }
}