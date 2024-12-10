// Only for talking to the server.

const API_URL = 'http://localhost:3000/api/v1/'

export async function rest<T>(url: string, data?: any, method?: string): Promise<T> {
  return fetch(url, {
    method: method ?? (data ? 'POST' : 'GET'),
    headers: {
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : undefined
  }).then((x) => x.json())
}

export function api<T>(url: string, method?: string, data?: any) {
  return rest<T>(API_URL + url, data, method)
}