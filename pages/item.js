import view from "../utils/view.js"
import Story from "../components/Story.js"
import Comment from "../components/Comment.js"
import baseUrl from "../utils/baseUrl.js"

export default async function Item() {
    let story = null; 
    let hasError = false;
    let hasComments = false;

    try {
        story = await getStory();
        hasComments = story.comments.length > 0;
    } catch(error) {
        hasError = true;
    }
    
    if (hasError) {
        document.querySelector('body').innerHTML = "No such item."
     } else {
        view.innerHTML =
            `<div>
                ${Story(story)}
            </div>
            <hr/>
            ${hasComments ? story.comments.map(comment => Comment(comment)).join('') : "No comments."}
            `
     }
}

async function getStory() {
    const storyId = window.location.hash.split('?id=')[1]
    const response = await fetch(`${baseUrl}/item/${storyId}`)
    const story = await response.json()
    return story
}