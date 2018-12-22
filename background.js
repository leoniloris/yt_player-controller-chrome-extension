chrome.browserAction.onClicked.addListener(buttonHandler);
chrome.commands.onCommand.addListener(commandHandler)

function buttonHandler(tab) {
    let msg = {
        txt: "weeb lixo"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}

function commandHandler(command) {
    chrome.tabs.getAllInWindow(null, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
            // console.log(tabs[i].url);
            if (tabs[i].url.includes("youtube.com/watch")) {
                chrome.tabs.sendMessage(tabs[i].id, command);
            }
            // TODO: Add third argument with function for error/response handling.
            // 		This is supposed to change the default_icon to a paused/played symbol
        }
    });
};