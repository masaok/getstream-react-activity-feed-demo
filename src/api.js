import { isDev } from './common'
// TODO: Use an environment variable here
// TODO: PROD - Vercel
// TODO: DEV - localhost:4000

const api = isDev() ? 'http://localhost:4000/' : 'https://getstream-token-api-demo.vercel.app/'

const BASE_API_REQUEST_HEADER = {
  'Content-Type': 'application/json',
}

const urlFor = resource => `${api}${resource}`

const get = resource => {
  const options = {
    method: 'GET',
    headers: { ...BASE_API_REQUEST_HEADER },
  }

  return fetch(urlFor(resource), options).then(response => {
    if (!response) throw new Error('GET FETCH failed')
    return response?.json()
  })
}

const getToken = () => get(`token`).then(result => result)

export { getToken }
