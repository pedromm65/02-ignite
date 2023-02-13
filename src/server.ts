import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Hello Nodejs'
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
