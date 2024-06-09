chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
      title: 'Leer con Velocilector',
      contexts: ['selection'],
      id: 'selection',
    });
});

chrome.contextMenus.onClicked.addListener(async (data, tab) => {
  // Store the last word in chrome.storage.session.
  chrome.storage.session.set({ selectionText: data.selectionText });

  if(data.selectionText.length > 5000){
    data.selectionText = data.selectionText.substring(0,5000) + '&error=1';
  }

  chrome.tabs.create({
     url: "http://www.velocilector.com/?selectionText=" + data.selectionText
  });
});




