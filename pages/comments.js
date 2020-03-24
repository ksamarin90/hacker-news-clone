import view from "../utils/view.js";
import baseUrl from "../utils/baseUrl.js"

export default async function Comments() {
    const comments = await getComments();
    view.innerHTML = comments.map((comment) => {
        `<div class="story">
            <div>
                <span class="upvote">▲</span>
                <span>${comment.content}</span>
            </div>
            <div>
                <div class="gray">
                    
                </div>
            </div>
        </div>`
    }).join('');
}

async function getComments() {
    const response = await fetch(`${baseUrl}/newcomments`);
    const comments = await response.json();
    return comments;
}