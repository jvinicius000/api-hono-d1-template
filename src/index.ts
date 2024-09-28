import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'
import routerMain from './routes'


const app = new Hono<{ Bindings: CloudflareBindings }>()
app.use(prettyJSON())

app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404))

app.get('/', (c) => {
  return c.json({ message: 'JVinicius hono api template', ok: true }, 200);
})

app.route('/api/v1', routerMain)


export default app