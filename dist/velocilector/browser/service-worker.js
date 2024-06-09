// import { read } from './background.js';

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

  console.log('.length', data.selectionText.length);

  data.selectionText = data.selectionText.substring(0,1000);


  chrome.tabs.create({
     url: "http://www.velocilector.com/?selectionText=" + data.selectionText
  });
});




