import view from "../utils/view.js";
import baseUrl from "../utils/baseUrl.js"

export default async function Comments() {
    const comments = await getComments();
    view.innerHTML = comments.map((comment) => 
        `<div>
            <div class="comment-icon-author">
                <img src="https://news.ycombinator.com/grayarrow.gif">
                <span class="gray middle-font">${comment.user}</span>
            </div>
            <div class="comment-content">
                ${comment.content}
            </div>
        </div>`
    ).join('')
}

async function getComments() {
    const response = await fetch(`${baseUrl}/newcomments`);
    const comments = await response.json();
    return comments;
}