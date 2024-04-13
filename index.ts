const server = Bun.serve({
  port: Bun.env.PORT || 8000,
  fetch(req) {
    return new Response('Hello Jason He and Miaomiao!')
  }
})

console.log(`Server running at http://localhost:${server.port}`)
