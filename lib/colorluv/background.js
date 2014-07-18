/** Created by griga at 24.12.12 | 17:48.
 *
 */

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
    // If the letter 'g' is found in the tab's URL...
    if (tab.url.indexOf('colourlovers.com/palette/') > -1) {
        // ... show the page action.
        chrome.pageAction.show(tabId);
    }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

