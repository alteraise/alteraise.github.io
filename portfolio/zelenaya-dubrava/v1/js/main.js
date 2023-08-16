$(function () {
	var controller = new ScrollMagic.Controller();
	if ($(".page").length) {
		$(".page").mousemove(function (event) {
			let x = event.clientX / window.innerWidth;
			let y = event.clientY / window.innerHeight;
			$("._mm").each(function () {
				$(this).css(
					"transform",
					"translate(-" + x * 60 + "px, -" + y * 60 + "px)"
				);
			});
			$("._mm-reverse").each(function () {
				$(this).css(
					"transform",
					"translate(" + x * 60 + "px, " + y * 60 + "px)"
				);
			});
		});
	}
	// if ($(".front-contract__bg").length) {
	// 	let cf = $(".front-contract__bg-circle").first();
	// 	let cl = $(".front-contract__bg-circle").last();

	// 	$(".front-contract__img").mousemove(function (event) {
	// 		let x = event.clientX / window.innerWidth;
	// 		let y = event.clientY / window.innerHeight;
	// 		cf.css(
	// 			"transform",
	// 			"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
	// 		);
	// 		cl.css(
	// 			"transform",
	// 			"translate(" + x * 130 + "px, " + y * 130 + "px)"
	// 		);
	// 	});
	// }
	// if ($(".front-where").length) {
	// 	let cf = $(".front-where__bg-circle").first();
	// 	let cl = $(".front-where__bg-circle").last();

	// 	$(".front-where").mousemove(function (event) {
	// 		let x = event.clientX / window.innerWidth;
	// 		let y = event.clientY / window.innerHeight;
	// 		cf.css(
	// 			"transform",
	// 			"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
	// 		);
	// 		cl.css(
	// 			"transform",
	// 			"translate(" + x * 130 + "px, " + y * 130 + "px)"
	// 		);
	// 	});
	// }
	// if ($(".front-partners").length) {
	// 	let cf = $(".front-partners__bg-circle").first();
	// 	let cl = $(".front-partners__bg-circle").last();

	// 	$(".front-partners").mousemove(function (event) {
	// 		let x = event.clientX / window.innerWidth;
	// 		let y = event.clientY / window.innerHeight;
	// 		cf.css(
	// 			"transform",
	// 			"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
	// 		);
	// 		cl.css(
	// 			"transform",
	// 			"translate(" + x * 130 + "px, " + y * 130 + "px)"
	// 		);
	// 	});
	// }
	// if ($(".front-top").length) {
	// 	let cf = $(".front-top__bg-circle").first();
	// 	let cl = $(".front-top__bg-circle").last();

	// 	$(".front-top").mousemove(function (event) {
	// 		let x = event.clientX / window.innerWidth;
	// 		let y = event.clientY / window.innerHeight;
	// 		cf.css(
	// 			"transform",
	// 			"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
	// 		);
	// 		cl.css(
	// 			"transform",
	// 			"translate(" + x * 130 + "px, " + y * 130 + "px)"
	// 		);
	// 	});
	// }
	// if ($(".front-catalog").length) {
	// 	let cf = $(".front-catalog__bg-circle").first();

	// 	$(".front-catalog").mousemove(function (event) {
	// 		let x = event.clientX / window.innerWidth;
	// 		let y = event.clientY / window.innerHeight;
	// 		cf.css(
	// 			"transform",
	// 			"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
	// 		);
	// 	});
	// }
	if ($(".front-work").length) {
		const swiper = new Swiper(".front-work__slider", {
			slidesPerView: "auto",
			spaceBetween: 16,
			navigation: {
				nextEl: $(".front-work__next")[0],
				prevEl: $(".front-work__prev")[0],
			},
			breakpoints: {
				500: {
					slidesPerView: 2,
				},
				800: {
					slidesPerView: 3,
				},
				1100: {
					slidesPerView: 4,
				},
			},
		});
	}
	if ($(".front-news").length) {
		let slideWrapper = $(".front-news__swiper .swiper-wrapper");
		$(".front-news__slide-column").each(function () {
			$(this)
				.find(".front-news__item")
				.each(function () {
					console.log(this);
					slideWrapper.append(
						`<div class="swiper-slide front-news__slide-mob"><div class="front-news__item _br">${$(
							this
						).html()}</div></div>`
					);
				});
		});
		const swiper = new Swiper(".front-news__swiper", {
			slidesPerView: "auto",
			spaceBetween: 16,

			navigation: {
				nextEl: $(".front-news__next")[0],
				prevEl: $(".front-news__prev")[0],
			},
		});
	}
	if ($(".front-top__item-img-slider").length) {
		const swiper2 = new Swiper(
			$(".front-top__item").last().find(".front-top__item-img-slider")[0],
			{
				slidesPerView: 1,
				spaceBetween: 16,
				loop: true,
				speed: 700,
			}
		);
		const swiper = new Swiper(
			$(".front-top__item")
				.first()
				.find(".front-top__item-img-slider")[0],
			{
				slidesPerView: 1,
				spaceBetween: 16,
				loop: true,
				speed: 700,
				autoplay: {
					delay: 3000,
				},
				on: {
					slideChange: function () {
						setTimeout(function () {
							swiper2.slideNext();
						}, 1500);
					},
				},
			}
		);
	}
	if ($(".front-top").length) {
		const swiper = new Swiper(".front-top__slider", {
			slidesPerView: 1,
			loop: true,
			autoHeight: true,
			spaceBetween: 16,
			navigation: {
				nextEl: $(".front-top__slider-right")[0],
				prevEl: $(".front-top__slider-left")[0],
			},
			on: {
				slideChange: function (swiper) {
					console.log("!!!!", swiper.realIndex);
					$(".front-top__left-slide").removeClass("_prev");
					$(".front-top__left-slide._active")
						.addClass("_prev")
						.removeClass("_active");
					$(
						`.front-top__left-slide[data-slide="${swiper.realIndex}"]`
					)
						.addClass("_active")
						.removeClass("_prev");
				},
			},
		});
	}
	let full = false;
	let animate = false;
	let bg = $(".front-top__left");
	var body = $("html, body");
	let wrap = $(".front-top__left-wrap");
	$(".front-top__full-btn").click(function () {
		console.log(animate, "animate");
		if (!animate) {
			animate = true;
			if (full) {
				$(".front-top").removeClass("_full-video");
				gsap.to(".front-top__left", {
					width: wrap.innerWidth(),
					height: wrap.innerHeight(),
					top: 0,
					left: 0,
					borderRadius: "15px",
					duration: 0.33,
					// ease: "linear",
					onComplete: function () {
						setTimeout(function () {
							console.log("xxxz");
							animate = false;
							full = false;
							$("body").removeClass("_no-scroll");
							bg.removeClass("_transition");
							setTimeout(function () {
								$(".load-anim").addClass("_animate");
							});
						}, 200);
					},
				});
			} else {
				$(".front-top").addClass("_full-video");

				body.stop().animate(
					{ scrollTop: 0 },
					100,
					"swing",
					function () {
						$("body").addClass("_no-scroll");
					}
				);
				full = true;
				bg.addClass("_full");
				gsap.to(".front-top__left", {
					width: window.innerWidth,
					height: window.innerHeight,
					top: -1 * wrap.offset().top,
					left: -1 * wrap.offset().left,
					borderRadius: 0,
					duration: 0.33,
					// ease: "linear",
					onComplete: function () {
						setTimeout(function () {
							console.log("ttts");
							animate = false;
							if (animate) {
								bg.addClass("_animate");
							}
						}, 200);
					},
				});
			}
		}
	});
	if ($("#front-contract-bottle").length) {
		console.log($("#front-contract-bottle").height() * 1.1);
		var scene = new ScrollMagic.Scene({
			triggerElement: "#front-contract-bottle",
			duration: 600,
		})
			.setTween("#front-contract-bottle", {
				rotate: 0,
			})

			.addTo(controller);
		var scene2 = new ScrollMagic.Scene({
			triggerElement: "#front-contract-bottle",
			duration: 550,
		})
			.setTween("#front-contract-bottle-fill", {
				rotate: 0,
				height: "90%",
			})
			.addTo(controller);
	}
	if ($("#front-where-img").length) {
		var scene = new ScrollMagic.Scene({
			triggerElement: "#front-where-img",
			duration: $("#front-where-img").height() * 1,
		})
			.setTween("#front-where-img", {
				rotate: 0,
			})

			.addTo(controller);
	}
});

$(function () {
	var vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
	var width = window.innerWidth;
	window.addEventListener("resize", () => {
		if (width != window.innerWidth) {
			var vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
			width = window.innerWidth;
		}
	});
	let offset = window.innerWidth < 600 ? 60 : 120;
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
		initClassName: "aos-init", // class applied after initialization
		animatedClassName: "aos-animate", // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: offset, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 800, // values from 0 to 3000, with step 50ms
		easing: "ease", // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
	});
	document.addEventListener("aos:in", ({ detail }) => {
		console.log(detail.hasAttribute("data-speed"), detail);
		if (detail.hasAttribute("data-count")) {
			let step;
			detail.hasAttribute("data-step")
				? (step = $(detail).data("step"))
				: (step = 1);
			console.log("stp", step, detail);
			let count = $(detail).data("count");
			$(detail).css({
				width: $(detail).width(),
				height: $(detail).height(),
			});
			let i = 0;
			let interval = setInterval(function () {
				i += step;
				$(detail).text(i);
				if (i >= count) {
					$(detail).text(count);
					$(detail).removeAttr("style");
					clearInterval(interval);
				}
			}, $(detail).data("speed"));
		}
	});
});

$(function(){})
$(function(){})
function header() {
	let header = $(".header");
	let prevscroll = $(window).scrollTop();
	// if (isFront) {
	// 	prevscroll = window.innerHeight * 2;
	// }
	$(".header__mob-menu").html($(".header__menu").html());
	if (prevscroll > 5) {
		header.addClass("_bg");
	} else {
		header.removeClass("_bg");
	}
	$(".header__burger").click(function () {
		$("body").toggleClass("_header-open");
		let img = $(".header__logo img");
		if ($("body").hasClass("_header-open")) {
			img.attr("src", img.data("menu"));
		} else {
			img.attr("src", img.data("main"));
		}
	});
	$(".header__mob-menu a").click(function (e) {
		if ($(this).parent("li").find(".header__sub-menu").length) {
			e.preventDefault();
			$(this).parent("li").toggleClass("_open");
		}
	});
	$(window).scroll(() => {
		let currentScroll = $(window).scrollTop();

		if (currentScroll > 5) {
			header.addClass("_bg");
		} else {
			header.removeClass("_bg");
		}
		if (currentScroll > prevscroll) {
			header.addClass("_header-hidden");
		} else {
			header.removeClass("_header-hidden");
		}
		if (currentScroll <= 10) {
			header.removeClass("_header-hidden");
		}
		prevscroll = currentScroll;
	});
}
$(function () {
	header();
});

$(function(){})