window.onload = function(){
	$(".container-2").fadeIn(1000);
}

$(".about-link").click(function(){
	$('html, body').animate({
        scrollTop: $(".about-section").offset().top + 40
    });
	
});

$(".projects-link").click(function(){
	$('html, body').animate({
        scrollTop: $(".work-banner").offset().top - 65
    });	
});


$(".thoughts-link").click(function(){
	$('html, body').animate({
        scrollTop: $(".thoughts-container").offset().top - 65
    });
	
});

var stickyNav = function(){   
var scrollTop = $(window).scrollTop();  
var stickyNavTop = $('.work-banner, .project-brief, .about-section').offset().top - 220;
/* var stickyNavTopProjects = $('.project-brief').offset().top - 70; */
       
	if (scrollTop >= stickyNavTop) {   
	    $('.fix-nav').fadeIn(500);
    
	} else {  
	    $('.fix-nav').fadeOut(); 
	} 
}; 

stickyNav();  
  
$(window).scroll(function() {  
    stickyNav();  
});


$(".nav-logo, .brand-name").click(function(){
	$('html, body').animate({
        scrollTop: $("body").offset().top
    }, 1000);
	
});

$(".open-menu").click(function(){
	$(".menu-ico, .menu-label").removeClass("open-menu");
	$(".menu-ico, .menu-label").addClass("close-menu");
	$(".brand-name, .fade-bar").fadeOut();
	$(".menu-label").html("");
	$('.close-bar1').transition({ rotate: '45deg', marginTop: '10px' });
	$('.close-bar2').transition({ rotate: '-45deg', marginTop: '-7px' });
	$(".dark-overlay").fadeIn();
	$(".fix-nav").animate({
		height: "150px",
		backgroundColor: "#fff",
		opacity: 1
		}, 250, function(){
			$(".fade-links").fadeIn();
	});
	$(".nav-logo img").animate({
				height: 70,
				width: 70,
				marginTop: 25
			}, 300);
	return;
});

$(".close-menu, .in-nav-link, .nav-logo, .dark-overlay, #arrow-down, #arrow-up").click(function(){
	$(".fade-links, .dark-overlay").fadeOut();
	$(".menu-ico, .menu-label").removeClass("close-menu");
	$(".menu-ico, .menu-label").addClass("open-menu");
	$(".nav-logo img").animate({
				height: 45,
				width: 45,
				marginTop: 0
			},200)
	$(".fix-nav").animate({
			height: "70px",
			backgroundColor: "#f4f1e6",
			opacity: 1
		}, 250, function(){
				$(".brand-name, .fade-bar").fadeIn();
				$(".menu-label").html("Menu");
				$('.close-bar1').transition({ rotate: '0deg', marginTop: '0px' });
				$('.close-bar2').transition({ rotate: '0deg', marginTop: '0px' });
			});
	return;
});

$(".nav-work").mouseenter(function(){
	$(".nav-work").html("Coming Soon");
});

$(".nav-work").mouseleave(function(){
	$(".nav-work").html("Work");
});

$('#arrow-down').click(function(){
	 if ($(window).scrollTop() <= $('.about-section').offset().top) {
		 $('html, body').animate({
		 	scrollTop: $('.about-section').offset().top + 40
	    });
	 }
	 
	 if ($(window).scrollTop() <= $('.work-banner').offset().top - 70 && $(window).scrollTop() >= $('.about-section').offset().top - 40) {
		 $('html, body').animate({
	        scrollTop: $('.work-banner').offset().top - 70
	    });
	 }
	 
	 if ($(window).scrollTop() >= $('.work-banner').offset().top - 70) {
		 $('html, body').animate({
	        scrollTop: $('.thoughts-container').offset().top - 70
	    });
	 }
	 
	 else {}
	 
	 
})

$('#arrow-up').click(function(){
	 if ($(window).scrollTop() < $('.work-banner').offset().top - 70) {
		 $('html, body').animate({
	        scrollTop: 0
	    });
	    return;
	 }
	 
	  if ($(window).scrollTop() >= $('.about-section').offset().top + 40 && $(window).scrollTop() < $('.thoughts-container').offset().top - 70) {
		 $('html, body').animate({
	        scrollTop: $('.about-section').offset().top + 40
	    });
	    return;
	 }
	 
	 if ($(window).scrollTop() >= $('.thoughts-container').offset().top - 70) {
		 $('html, body').animate({
		 	scrollTop: $('.work-banner').offset().top - 70
	    });
	 }
	 
	 else {}
	 
	 
})


/*
$(".nav-thoughts").mouseenter(function(){
	$(".nav-thoughts").html("Coming Soon");
});

$(".nav-thoughts").mouseleave(function(){
	$(".nav-thoughts").html("Thoughts");
});
*/

/*

$(".menu-ico, .menu-label").click(function(){
	$(".logo-spot-show").fadeOut(100);
	$(".menu-ico, .menu-label").fadeOut(100);
	$(".dark-overlay").fadeIn(100);
	$(".nav-container, .nav").animate({
		height: "150px",
		backgroundColor: "#a3dcea"
		}, 500, function(){
			$(".nav-links").fadeIn();
			$(".logo-spot").fadeIn();
	})	
})
*/

/*
$(".nav-container").mouseleave(function(){
	$(".nav-links").fadeOut(100);
	$(".logo-spot").fadeOut(100);
	$(".dark-overlay").fadeOut(100);
	$(".nav-container").animate({
		height: "50px",
		backgroundColor: "#fff"
	}, 250, function(){
		$(".logo-spot-show").fadeIn();
		$(".menu-ico").fadeIn();
	})	
})
*/

/*
$(".nav-links, .logo-spot, .dark-overlay").click(function(){
	$(".nav-links").fadeOut(100);
	$(".logo-spot").fadeOut(100);
	$(".dark-overlay").fadeOut(100);
	$(".nav-container, .nav").animate({
		height: "60px",
		backgroundColor: "#fff"
	}, 500, function(){
		$(".logo-spot-show").fadeIn();
		$(".menu-ico, .menu-label").fadeIn();
	})	
})
*/
