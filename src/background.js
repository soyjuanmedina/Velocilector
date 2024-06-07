document.addEventListener("mousedown", function(event){
    var selection = window.getSelection().toString();
    if(selection.match(/^10\./)) {
        chrome.extension.sendRequest({cmd: "create_menu"});
    } else {
        chrome.extension.sendRequest({cmd: "delete_menu"});
    }
}, true); 