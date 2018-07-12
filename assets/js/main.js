$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// Sticky Header Active
	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();
		if (scroll > 250) {
			$("#sticky-header").addClass('sticky');
		} else {
			$("#sticky-header").removeClass('sticky');
		}
	});

	// Meanmenu Active
	$('#mobile-menu-active').meanmenu({
		meanScreenWidth: "767",
		meanMenuContainer: ".mobile-menu"


	});

	// Slider carousel active
    $('.slider-active').owlCarousel({
	    loop:true,
	    nav:true,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    smartSpeed: 800,
	    navText: ['<i class="icofont icofont-thin-left"></i>', '<i class="icofont icofont-thin-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

    // Project carousel active
	$('.project-active').owlCarousel({
	    loop:true,
	    nav:true,
	    dots: false,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    smartSpeed: 800,
	    navText: ['<i class="icofont icofont-thin-left"></i>', '<i class="icofont icofont-thin-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	         768:{
	            items:2
	        },
	        1000:{
	            items:4
	        },
	        1600:{
	            items:4
	        }
	    }
	})

	// Choose video active
	$('#video-popup').magnificPopup({
		type:'iframe',
		iframe: {
		  patterns: {
		    youtube: {
		      index: 'youtube.com/', 
		      id: 'v=', 
		      src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
		    },

		  },

		  srcAction: 'iframe_src', 
		}

	});

	// Blog carousel active
	$('.blog-active').owlCarousel({
	    loop:true,
	    nav:true,
	    dots: false,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    smartSpeed: 800,
	    navText: ['<i class="icofont icofont-thin-left"></i>', '<i class="icofont icofont-thin-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        },
	        1600:{
	            items:1
	        }
	    }
	})

	// Testimonial carousel active
	$('.active-testimonial').owlCarousel({
	    loop:true,
	    nav:true,
	    dots: false,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    smartSpeed: 800,
	    navText: ['<i class="icofont icofont-thin-left"></i>', '<i class="icofont icofont-thin-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        },
	        1600:{
	            items:1
	        }
	    }
	})


	// Brand carousel active
	$('.brand-active').owlCarousel({
	    loop:true,
	    nav: false,
	    dots: false,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    smartSpeed: 800,
	    navText: false,
	    margin: 20,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	          768:{
	            items:3
	        },
	        1000:{
	            items:6
	        },
	        1600:{
	            items:6
	        }
	    }
	})


	// Scroll Up Btn 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$(".scroll-up-btn").fadeIn();
		} else {
			$(".scroll-up-btn").fadeOut();
		}
	});

	$(".scroll-up-btn").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 700)
	});



}(jQuery));