(function($) {
	"use strict";
	var menuToggler = $(".menu--toggle"),
		offsetMenu = $(".menu--offset"),
		menuQuit = $(".menu--close");
	menuToggler.on("click", function(e) {
		e.preventDefault();
		offsetMenu.addClass("show");
	});
	menuQuit.on("click", function() {
		offsetMenu.removeClass("show");
	});

	// Mix js
	var containerEl = document.querySelector("#project--mix");
	var mixer = mixitup(containerEl, {
		selectors: {
			target: ".mix"
		},
		animation: {
			effects: "fade",
			duration: 700
		}
	});

	//message js

	var pauseBtn = $(".sound_toggle_btn"),
		playing = false;
	pauseBtn.on("click", function() {
		$(this)
			.children("span")
			.toggleClass("fa fa-times fa fa-clone");
	});

	//Service slick js

	$(".service--slick").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		prevArrow: '<i class="fa fa-chevron-left slidprev4"></i>',
		nextArrow: '<i class="fa fa-chevron-right slidNext4"></i>',
		autoplaySpeed: 1300,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//testimonial slick js

	$(".testimonial--slick").slick({
		centerPadding: "0px",
		centerMode: true,
		focusOnSelect: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		prevArrow: '<i class="fa fa-long-arrow-alt-right slidPrev3"></i>',
		nextArrow: '<i class="fa fa-long-arrow-alt-left slidNext3"></i>',
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$(document).ready(function() {
		// Add scrollspy to <body>
		$("body").scrollspy({
			target: ".nav",
			offset: 50
		});
		$("#navbar a").on("click", function(event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$("html, body").animate(
					{
						scrollTop: $(hash).offset().top
					},
					1000,
					function() {
						window.location.hash = hash;
					}
				);
			}
		});
	});

	// newsletter
	$(window).on("load", function() {
		setTimeout(function() {
			$("#modalNew").addClass('show');
		}, 2000);
  });

  var iconCloseNew = $('.modal--close');
  iconCloseNew.on("click", function() {
		$("#modalNew").removeClass('show');
  });
  $('.open--modal').on('click', function() {
    $("#modalNew").addClass('show');
  })
  

	//Preloader
	$(window).on("load", function() {
		$("#preloader").fadeOut(1000);
	});

	// bottom to top
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 100) {
			// If page is scrolled more than 50px
			$("#top--to").fadeIn(500); // Fade in the arrow
		} else {
			$("#top--to").fadeOut(300); // Else fade out the arrow
		}
	});
	$("#top--to").click(function() {
		// When arrow is clicked
		$("body,html").animate(
			{
				scrollTop: 0 // Scroll to top of body
			},
			1200
		);
	});

	// feature design hover js ends
})(jQuery);
