const server = Bun.serve({
  port: Bun.env.PORT || 8000,
  fetch(req) {
    const url = new URL(req.url)
    if (url.pathname === '/') {
      return new Response('Home Page!')
    }

    if (url.pathname === '/about') {
      return new Response('About Page!')
    }

    return new Response('Not Found', { status: 404 })
  }
})

console.log(`Server running at http://localhost:${server.port}`)
