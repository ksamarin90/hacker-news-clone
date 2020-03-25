import view from "../utils/view.js";
import baseUrl from "../utils/baseUrl.js"

export default async function Jobs() {
    const jobs = await getJobs();
    view.innerHTML = 
    `<div class="gray jobs-header"> 
        <span>These are jobs at YC startups. See more at 
        <a href="https://www.workatastartup.com/" style="text-decoration: underline">Work at a Startup</a>.
        </span>
    </div>` 
    + jobs.map((job) => 
        `<div class="job">
            <div>
                <a href=${job.url}>${job.title}</a>
                <span class="gray middle-font">${job.domain ? `(${job.domain})` : ''}</span>
            </div>
            <div class="second-line">
                <div class="gray small-font">
                    ${job.time_ago} 
                </div>
            </div>
        </div>`
    ).join('');
}

async function getJobs() {
    const response = await fetch(`${baseUrl}/jobs`);
    const jobs = await response.json();
    return jobs;
}