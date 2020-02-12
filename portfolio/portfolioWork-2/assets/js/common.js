$(document).ready(function () {

    $('.show-search-btn').click(function(){
        if ($(this).hasClass('active')) {
            $(this).stop();
            $('.main-menu, .search-form, .search-form input, .header__search-overlay').stop();
            clearTimeout(focusDelay);
            $(this).removeClass('active');
            $('.search-form').removeClass('active');
            $('.main-menu').removeClass('main-menu--overlay');
            $('.header__search-overlay').fadeOut(300);
        }
        else {
            $(this).stop();
            $('.main-menu, .search-form, .search-form input, .header__search-overlay').stop();
            focusDelay = setTimeout(function(){
                $('.search-form').find('input').focus();
            }, 1000);
            $(this).addClass('active');
            $('.search-form').addClass('active');
            $('.main-menu').addClass('main-menu--overlay');
            $('.header__search-overlay').fadeIn(700);
        }
    });

    $('.header__search-overlay').click(function(){
        if ($('.show-search-btn').hasClass('active')) {
            $(this).stop();
            $('.main-menu, .search-form, .search-form input, .show-search-btn').stop();
            clearTimeout(focusDelay);
            $('.search-form, .show-search-btn').removeClass('active');
            $('.main-menu').removeClass('main-menu--overlay');
            $(this).fadeOut(300);
        }
    });

    $('.main-banner-slider').owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        autoplay: true,
        autoplayTimeout: 7000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        onTranslate: function (event) {
            $('.main-banner-slider .owl-dot').prop('disabled', true);
        },
        onTranslated: function (event) {
            $('.main-banner-slider .owl-dot').prop('disabled', false);
        }
    });

    $('.main-banner-slider .owl-dots').wrap('<div class="container"></div>');

    if ($('.case-studies-slider').hasClass('case-studies-slider_single-item')) {
        $('.case-studies-slider_single-item').owlCarousel({
            items: 1,
            margin: 30,
            nav: true,
            dots: false,
            navText: ["", ""],
            responsive: {
                0: {
                    nav: false,
                    dots: true
                },
                576: {
                    nav: true,
                    dots: false
                }
            }
        });
    }
    else {
        $('.case-studies-slider').owlCarousel({
            items: 3,
            margin: 30,
            nav: true,
            dots: false,
            navText: ["", ""],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true
                },
                576: {
                    items: 1,
                    nav: true
                },
                768: {
                    items: 2
                },
                1470: {
                    items: 3
                }
            }
        });
    }

    $('.clients-slider').owlCarousel({
        items: 6,
        margin: 50,
        loop: true,
        nav: true,
        dots: true,
        navText: ["", ""],
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            576: {
                items: 2,
                nav: true
            },
            768: {
                items: 4
            },
            1470: {
                items: 6
            }
        }
    });

    $('.recommend-slider').owlCarousel({
        items: 2,
        margin: 50,
        nav: true,
        dots: true,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            992: {
                items: 2,
                nav: true
            }
        }
    });

    $('.our-team-slider').owlCarousel({
        items: 4,
        margin: 20,
        nav: true,
        dots: false,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            576: {
                items: 2,
                nav: false,
                dots: true
            },
            768: {
                items: 2,
                nav: true,
                dots: false
            },
            992: {
                items: 3,
                nav: true,
                dots: false
            },
            1470: {
                items: 4,
                nav: true,
                dots: false
            }
        }
    });
    
    $('.tools-slider').owlCarousel({
        items: 4,
        margin: 20,
        nav: true,
        dots: true,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 1,
                nav: true
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1470: {
                items: 4
            }
        }
    });

    $('.project-gallery a').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-arrows-green'
    });

    $('.show-mobile-menu').click(function() {
        $('.mobile-menu').addClass('active');
    });

    $('.mobile-menu__close').click(function () {
        $('.mobile-menu').removeClass('active');
    });

    $('.mobile-menu > ul > li').has('ul').children('a').click(function (e) {
        e.preventDefault();
        $(this).stop();
        $(this).siblings('ul').stop();
        $('.mobile-menu > ul > li').has('ul').children('a').not(this).removeClass('opened');
        $('.mobile-menu > ul > li').has('ul').children('a').not(this).siblings('ul').slideUp();
        $(this).toggleClass('opened');
        $(this).siblings('ul').slideToggle();
    });

});