// console.log("This is background Script");
/*
    Author: Arijit Paria 
    Subscribe @tutoriex on youtube to get more such scripts
    Note:
    This script is free to use, do not pay anyone anything.
    To modify or redistribute, kindly follow the license agreement strictly.
*/
console.log("This is background Script @aveshCS (Avesh Singh)");

let installURL = "https://linktr.ee/shubhansu";
chrome.runtime.onInstalled.addListener(function (details) {
  // console.log(details);
  if (details.reason === "install") {
    chrome.tabs.create({
      url: installURL,
    });
    chrome.tabs.create({
      url: "https://github.com/aveshCS",
    });
    chrome.notifications.create({
      title: "Avesh Singh",
      message: "Please follow me on Github.",
      iconUrl: "icon.png",
      type: "basic",
    });
  }
});
