export async function load({ fetch }) {
  const endpoint = 'https://dummyjson.com/products/'
  
  const response = await fetch(endpoint)
  const products = await response.json()

  return {
    products: products.products
  }
}