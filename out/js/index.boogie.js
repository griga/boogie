function process() {


//	$.getJSON('https://api.github.com/users/griga/repos').success(function(){console.log(arguments)})

}


(function () {
	var ideIsActive = false;
	var dom = {
		$ul: $('#user-links')
	};
	var bgiHide = ['.site', '.site-footer'];
	var init = function () {
		dom.$ul.append($('<li><a href="#"><span id="bgi-ide-toggle" class="bgi-icon-science"></span></a></li><span>'))
		bindEvents();
		chrome.storage.local.get('bgiIdeStarted', function(data){
			if(data.bgiIdeStarted && !ideIsActive)
				startIde();
		})
	};

	var bindEvents = function () {
		dom.$ul.on('click', '#bgi-ide-toggle', function () {
			toggleIde();
 			event.preventDefault()
		})
	};

	var toggleIde = function(){
		if(!ideIsActive)
			startIde();
		else
			stopIde();
	};
	var startIde = function () {
		_.each(bgiHide, function (selector) {
			$(selector).addClass('bg-hidden');
		});
		ideIsActive = true;
		chrome.storage.local.set({bgiIdeStarted: true})
	};
	var stopIde = function () {
		$('.bg-hidden').removeClass('bg-hidden')
		ideIsActive = false;
		chrome.storage.local.set({bgiIdeStarted: false})
	};
	return {init: init}
})().init();


