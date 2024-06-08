chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
      title: 'Leer con Velocilector',
      contexts: ['selection'],
      id: 'selection',
    });
});

chrome.contextMenus.onClicked.addListener((data, tab) => {
  // Store the last word in chrome.storage.session.
  chrome.storage.session.set({ selectionText: data.selectionText });

  navigator.serviceWorker.controller.postMessage(data.selectionText);

  chrome.tabs.update({
     url: "http://www.velocilector.com/?selectionText=" + data.selectionText
});
});


self.addEventListener('message', event => {
    clients.matchAll().then(clients => {
        clients.forEach(client => {
            client.postMessage({msg:"hello to all the tabs here"})
        })
    })
})



