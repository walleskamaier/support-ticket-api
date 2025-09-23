export function parseRoutePath(path) {
  // Escapa caracteres especiais do caminho
  const escapedPath = path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

  // Se for uma rota sem parâmetros, retorna uma regex que ignora query parameters
  if (!path.includes(":")) {
    return new RegExp(`^${escapedPath}(?:\\?.*)?$`)
  }

  // Para rotas com parâmetros
  const routeParametersRegex = /:([a-zA-Z]+)/g
  const params = escapedPath.replace(routeParametersRegex, "(?<$1>[^/]+)")

  // Retorna uma regex que captura a rota base, ignorando query parameters
  return new RegExp(`^${params}(?:\\?.*)?$`)
}
