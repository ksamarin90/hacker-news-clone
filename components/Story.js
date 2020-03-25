export default function Story(story) {
    return `
        <div class="story">
            <div class="story-left">
                <span class="gray">${story.index ? `${story.index}.` : ""}</span>
                <img src="https://news.ycombinator.com/grayarrow.gif">
            </div>
            <div class="story-right">
                <div>
                    <a href=${story.url}>${story.title}</a>
                    <span class="gray middle-font">${story.domain ? `(${story.domain})` : ''}</span>
                </div>
                <div class="second-line">
                    <div class="gray small-font">
                        ${story.points} points by ${story.user} ${story.time_ago} 
                        |
                        <span>hide</span>
                        |
                        <a href="#/item?id=${story.id}" class="gray">
                            ${story.comments_count} comments
                        </a>
                    </div>
                </div>
            </div>
        </div>`
}