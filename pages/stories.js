import view from "../utils/view.js";
import Story from "../components/Story.js"
import baseUrl from "../utils/baseUrl.js"

export default async function Stories(path) {
    const stories = await getStories(path);
    const hasStories = stories.length > 0;

    view.innerHTML = 
        `<div class="background-gray">
            ${hasStories ? 
            stories.map((story, i) => Story({...story, index: i + 1})).join('') : 
            "No stories."
        }</div>`
}

async function getStories(path) {
    const isHomeRoute = path === '/';
    if (isHomeRoute) {
        path = '/news';
    }
    const response = await fetch(`${baseUrl}${path}`);
    const stories = await response.json();
    return stories;
}