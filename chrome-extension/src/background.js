'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message = `Hi Pan, my name is Bac. I am from Background. It's great to hear from you.`;

    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    // Send a response message
    sendResponse({
      message,
    });
  }
});

/**
 * Listens for the runtime.onInstalled event and performs actions based on the reason.
 * @param {Object} details - The details object containing information about the installation event.
 * @param {string} details.reason - The reason for the installation event ('install', 'update', or 'chrome_update').
 */
chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === 'install') {
        chrome.tabs.create({
            url: 'https://www.google.com',
        });
        chrome.runtime.setUninstallURL('https://www.google.com');
    }
});
