$('.about, .splash-bttn').click(function(){
	$('html, body').animate({
	        scrollTop: $('#intro').offset().top - 90
	    }, 1000);
})

$('.work').click(function(){
	$('html, body').animate({
	        scrollTop: $('#work').offset().top
	    }, 1000);
})