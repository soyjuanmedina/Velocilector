chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
      title: 'Leer con Velocilector',
      contexts: ['selection'],
      id: 'selection',
    });
});

chrome.contextMenus.onClicked.addListener((data, tab) => {
  // Store the last word in chrome.storage.session.
    chrome.storage.local.set( { selectionText: data.selectionText }, ()=>{
    console.log('selectionText saved successfully') ;
}) ;

chrome.storage.local.get( 'selectionText', (selectionText)=>{
    console.log('selectionText geted successfully', selectionText) ;
}) ;

  chrome.tabs.update({
     url: "http://www.velocilector.com/?selectionText=" + data.selectionText
});
});




