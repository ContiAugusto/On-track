import { useEffect, useState } from 'react'

type FetchApiProps = {
  path?: string
  id?: number | null
  method?: string
  body?: unknown
  headers?: Record<string, string>
  params?: Record<string, string | number | boolean | null | undefined>
}
export function FetchApi({
  path = 'https://www.bling.com.br/Api/v3/produtos?pagina=1&limite=100&criterio=1&tipo=T',
  id = null,
  method = 'GET',
  body = null,
  headers = {},
  params = {},
}: FetchApiProps) {
  const [data, setData] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError(null)

      try {
        let url = id ? `${path}/${id}` : path

        const queryString = new URLSearchParams(
          Object.entries(params).reduce<Record<string, string>>(
            (acc, [key, value]) => {
              if (value !== undefined && value !== null) {
                acc[key] = String(value)
              }
              return acc
            },
            {},
          ),
        ).toString()

        if (queryString) {
          url += `?${queryString}`
        }

        const response = await fetch(url, {
          method: method,
          headers: {
            ...headers,
          },
          body: body ? JSON.stringify(body) : null,
        })

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`)
        }

        const result = await response.json()

        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)))
        return
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [path, id, method, body, headers, params])

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error.message}</p>}
      {data !== null && (
        <div>
          <h1>Dados</h1>
          <pre>{JSON.stringify(data)}</pre>
        </div>
      )}
    </div>
  )
}

export default FetchApi
