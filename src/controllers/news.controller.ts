import { type Context, Hono } from 'hono';

const app = new Hono()
    .get('/', async (ctx: Context) => {
        try {
            const { results } = await ctx.env.DATABASE.prepare('SELECT * FROM news ORDER BY id ASC').all();
 
            return ctx.json(results);
          } catch (e) {
            return ctx.json({ err: e.message }, 500);
          }

    })
    .get('/:id{[0-9]+}', async (ctx: Context) => {
   
            const id = Number.parseInt(ctx.req.param('id') || '0');

            try {
                let { results } = await ctx.env.DATABASE.prepare(
                  "SELECT * FROM news WHERE id = ?",
                )
                  .bind(id)
                  .all();
                return ctx.json(results);
              } catch (e) {
                return ctx.json({ err: e.message }, 500);
              }
    });

export default app;