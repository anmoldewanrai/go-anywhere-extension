let youtubeBtn = document.getElementById("youtubeBtn");

youtubeBtn.addEventListener("click", () => {
  chrome.tabs.create({
    url: `https://www.youtube.com/`,
  });
});
