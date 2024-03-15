import { appHistory } from "./data.js";

window.addEventListener("DOMContentLoaded", function () {
  if (!appHistory) {
    console.log("couldn't get appHistory");
    return;
  }

  const dataContainer = document.getElementById("dataContainer");

  for (const issue of appHistory) {
    const issueDiv = document.createElement("div");

    issueDiv.innerHTML = `
        <div class="issue">
        <p class="label"><b>Date:</b></p>
        ${issue.date} 
        <p class="label"><b>Company:</b></p>
        ${issue.company} 
        <p class="label"><b>Position:</b></p>
        ${issue.positon} 
        <p class="label"><b>Status:</b></p>
        ${issue.status} 
        <p class="label"><b>Platform:</b></p>
        ${issue.hiringPlatform}
        <p class="label"><b>Pay Range:</b></p>
        ${issue.payRange}  
        <p class="label"><b>Cold Email:</b></p>
        ${issue.coldEmailed} 
        </div>
        `;

    dataContainer.appendChild(issueDiv);
  }
});
