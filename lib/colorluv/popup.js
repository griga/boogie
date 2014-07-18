chrome.tabs.getSelected(null, function (tab) {
    chrome.tabs.sendMessage(tab.id, {method:"fromPopup", tabid:tab.id},
        function (response) {
            if (response.palette && response.palette.colors) {
                var i, item, name,
                    selection = window.getSelection(),
                    output = document.querySelector("#output"),
                    css = scss = '/*------------------------------------*\\\n' +
                        '\tPalette "' + response.palette.name + '"\n' +
                        '\\*------------------------------------*/\n';
                for (i = 0; i < response.palette.colors.length; i++) {
                    item = response.palette.colors[i];
                    name = item.name.toLowerCase().replace(/\W+/,'_')
                    css += '.' + name + ' {\n' +
                        '\tcolor: #' + item.color + ';\n}\n';
                    scss += '$' + name + ': #' + item.color + ';\n';
                }
                output.innerText = scss;
                selection.setBaseAndExtent(output, 0, output, 1);
                document.execCommand('copy');
                selection.setBaseAndExtent(output, 0, output, 0);
            } else {
                document.querySelector("#message").innerText = "something goes wrong";
            }

        });
});

