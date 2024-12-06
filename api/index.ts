import { Hono } from '@hono/hono';
import { cors } from '@hono/hono/cors';

import 'jsr:@std/dotenv/load';

const PORT = Number(Deno.env.get('PORT')) || 8000;

const app = new Hono();

/** MIDDLEWARES */
app.use('/v1/*', cors());

/** ROUTES */
app.get('/', (c) => {
  return c.text('Welcome to PastExam API!');
});

/** START THE SERVER */
console.log(`API server running on http://localhost:${PORT}`);
Deno.serve({ port: PORT }, app.fetch);
