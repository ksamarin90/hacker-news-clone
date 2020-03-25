import Stories from "./pages/stories.js"
import Item from "./pages/item.js"
import Comments from "./pages/comments.js"
import Jobs from "./pages/jobs.js"
import Login from "./pages/login.js"

const router = new Navigo(null, true, '#');

export default class RouterHandler {
    constructor() {
        this.createRoutes()
    }

    createRoutes() {
        const routes = [
            { path: '/', page: Stories },
            { path: '/news', page: Stories },
            { path: '/newest', page: Stories },
            { path: '/newcomments', page: Comments },
            { path: '/show', page: Stories },
            { path: '/jobs', page: Jobs },
            { path: '/item', page: Item },
            { path: '/login', page: Login }
        ];

        routes.forEach(route => {
            router.on(route.path, () => {
                route.page(route.path);
            }).resolve()
        })
    }
}