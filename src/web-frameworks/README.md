Benchmark web frameworks.

Routes:
- `$requestBody`: Request body as text.
- `$params`: Request path parameters.

```ts
'/' -> 'Hi'
'/user/:id' -> $params.id
'/body' -> JSON.parse($requestBody)
```
