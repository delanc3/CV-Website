requirejs(['jquery', 'mousetrap.min', 'cookies.min'], function ($, Mousetrap, Cookies) {
	var isScrollEventRegistered = false;

	$(window).bind('mousewheel', function(event) {
		if (event.originalEvent.wheelDelta >= 0) {
			if (isScrollEventRegistered) {
				console.log('scroll up');
				$('#border').removeClass('transition');
				$('#titleCard').removeClass('transition');
				$('#aboutMe').removeClass('transition');
				isScrollEventRegistered = false;
			}
		} else {
			if (!isScrollEventRegistered) {
				console.log('scroll down');
				$('#border').addClass('transition');
				$('#titleCard').addClass('transition');
				setTimeout(function() {
					$('#aboutMe').addClass('transition');
				}, 400);
				isScrollEventRegistered = true;
			}
		}
	});

});