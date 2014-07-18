    chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.method == "fromPopup") {
            // Send JSON data back to Popup.
            var data = {
                "name":"",
                "colors":[]
            };

            $(".detail-row .color").each(function(){
                var matches = $(this).prop("href").match(/\/color\/(.+)\/(.+)/);
                if(matches.length>1){
                    var flag = true
                    $.each(data.colors,function(i, item){
                        if(item.color == matches[1] && item.name==matches[2]){
                            flag = false;
                        }
                    });
                    flag && data.colors.push({
                        color:matches[1],
                        name:matches[2]
                    });
                }
            });
            data.name = window.location.href.match(/palette\/\d+\/(.+)/)[1];
            sendResponse({
                method: "fromContentScript",
                data: "from Content Script to Popup",
                palette: data
            });

        } else {
            sendMessage({}); // snub them.
        }
    });



