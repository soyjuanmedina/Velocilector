// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// A generic onclick callback function.
chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info, tab) {
   console.log('tab:', tab);
  switch (info.menuItemId) {
    case 'selection':
      // selection item function
      console.log('info:', info);
      chrome.runtime.sendMessage('get-user-data', (response) => {
        // 3. Got an asynchronous response with the data from the service worker
        console.log('received user data', response);
      });
      break;
    default:
      console.log('Standard context menu item clicked.');
  }
}

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
      title: 'Leer con Velocilector',
      contexts: ['selection'],
      id: 'selection',

    });

});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('message', message);
});