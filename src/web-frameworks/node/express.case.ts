import express from 'express';

express()
  .get('/', (_, res) => {
    res.end('Hi');
  })
  .get('/user/:id', (req, res) => {
    res.end(req.params.id);
  })
  .post('/body', express.json(), (req, res) => {
    res.json(req.body);
  });