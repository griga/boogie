/** Created by griga at 03.01.14 | 13:51.
 *
 */

//chrome.cookies.onChanged.addListener(function(info) {
//	 console.log("onChanged" + JSON.stringify(info));
//});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		switch (request.bgiMethod){
			case "getIdeIsStarted":
				chrome.cookies.get({
					url:'github.com',
					name: 'shouldStartIde'
				}, function (cookie){
///					if(cookie)
//						console.log(cookie);

//					var shouldStartIde = (!cookie ? true : cookie.value == '0');
//
//					chrome.cookies.set({
//						url:'github.nom',
//						path : '/',
//						name: 'shouldStartIde',
//						value: shouldStartIde ? '1' : '0'
//					});
					sendResponse({shouldStartIde: true});
				});
//				sendResponse({shouldStartIde: true});
				break;
		}
	});