import fastify from 'fastify';

fastify({ logger: false })
  .get('/', () => 'Hi')
  .get('/user/:id', (c) => (c.params as any).id)
  .post('/body', (c) => c.body);