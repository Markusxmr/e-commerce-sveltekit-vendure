import { browser } from '$app/environment'
import type { RequestHandlerArgs } from '$houdini'
import { HoudiniClient } from '$houdini'

const AUTH_TOKEN_KEY = 'auth_token'
console.log(import.meta.env.VITE_GRAPHQL_ENDPOINT);

async function fetchQuery({
  fetch,
  text = '',
  variables = {},
}: // session,
  // metadata,
  RequestHandlerArgs) {
  const url =
    import.meta.env.VITE_GRAPHQL_ENDPOINT ||
    'https://readonlydemo.vendure.io/shop-api'

  const headers = {}
  headers['Content-Type'] = 'application/json'

  if (browser) {
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }
  }

  const result = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  if (browser) {
    const authToken = result.headers.get('vendure-auth-token')
    if (authToken) {
      localStorage.setItem(AUTH_TOKEN_KEY, authToken)
    }
  }

  return await result.json()
}

export default new HoudiniClient(fetchQuery)