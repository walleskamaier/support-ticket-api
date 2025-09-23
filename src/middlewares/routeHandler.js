import { routes } from "../routes/index.js"
import { Database } from "../database/database.js"
import { extractQueryParams } from "../utils/extractQueryParams.js"

const database = new Database()

export function routeHandler(request, response) {
  const { url, method } = request

  // Extrai o caminho sem os parâmetros de consulta
  const [path] = url.split("?")

  const route = routes.find((route) => {
    return route.method === method && route.path.test(path)
  })

  if (route) {
    const routeParams = path.match(route.path)

    // Extrai os parâmetros de consulta da URL
    const queryString = url.includes("?") ? url.split("?")[1] : ""
    request.query = queryString ? extractQueryParams("?" + queryString) : {}

    // Se houver parâmetros de rota, adiciona ao request
    if (routeParams?.groups) {
      request.params = { ...routeParams.groups }
    }

    return route.controller({ request, response, database })
  }

  return response.writeHead(404).end()
}
