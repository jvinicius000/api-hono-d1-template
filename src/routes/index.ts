import { Hono } from "hono";
import newsController from "../controllers/news.controller"

const routerMain = new Hono<{ Bindings: CloudflareBindings }>()

routerMain.route("news", newsController)

export default routerMain;