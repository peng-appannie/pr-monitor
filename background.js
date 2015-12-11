'use strict';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.subject === 'localStorage') {
        sendResponse({localStorage: localStorage});
    }
});
