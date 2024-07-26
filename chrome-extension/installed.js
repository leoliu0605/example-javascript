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
