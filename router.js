import Stories from "./pages/stories.js"

const router = new Navigo(null, true, '#');

export default class RouterHandler {
    constructor() {
        this.createRoutes()
    }

    createRoutes() {
        const routes = [
            { path: '/news', page: Stories },
            { path: '/newest', page: Stories },
            { path: '/newcomments', page: Stories },
            { path: '/ask', page: Stories },
            { path: '/show', page: Stories },
            { path: '/jobs', page: Stories }
        ];

        routes.forEach(route => {
            router.on(route.path, () => {
                route.page(route.path);
            }).resolve()
        })
    }
}