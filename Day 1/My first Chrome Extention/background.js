chrome.runtime.onInstalled.addListener(async () => {

    let url = chrome.runtime.getURL("hello.html");
  
    console.log(`Created tab ${tab.id}`);
  });