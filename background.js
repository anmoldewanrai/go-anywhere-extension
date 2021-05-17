chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case "open-youtube":
      openYoutube();
      break;
    default:
      console.log(`Command ${command} not found`);
  }
});

function openYoutube() {
  const query = { active: true, currentWindow: true };
  chrome.tabs.query(query, (tabs) => {
    chrome.tabs.create({ url: "https://www.youtube.com/", active: true });
  });
}
