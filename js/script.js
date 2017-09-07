$(document).ready( function() {   
	"use strict";
	var scroll_pos = 0;
	$(document).scroll(function() { 
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 300) {
			$("#navigation-bar").css('background-color', '#202020');
		} else {
			$("#navigation-bar").css('background-color', 'rgba(0,0,0,0)');
		}
	});
	
	$("smooth-scroll").on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash = this.hash;
			$('html', 'body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			});
		}
	});
	
	
});


