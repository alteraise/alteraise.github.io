$(document).ready(function() {

    var $productSlider = $('.product-slider').flickity({
        cellAlign: 'left',
        draggable: true,
        pageDots: true,
        wrapAround: true,
        autoPlay: true,
        pauseAutoPlayOnHover: false
    });

    var $testimonialsSlider = $('.testimonials-slider .testimonials-slider__inner').flickity({
        cellAlign: 'left',
        draggable: true,
        pageDots: false,
        wrapAround: true,
        autoPlay: true,
        pauseAutoPlayOnHover: false
    });

    $('.category-tabs').tabs({
        show: { effect: "fade", duration: 500 }
    });

    $('.amount-price-tabs').tabs({
        show: { effect: "fade", duration: 500 }
    });

    $('.product-add-info-tabs').tabs({
        show: { effect: "fade", duration: 500 }
    });

    $('.agreement label a').click(function(event) {
        event.preventDefault();
    });

    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });

    $.extend($.validator.messages, { required: "Вы не заполнили поле" });

    $.validator.addMethod("minlenghtphone", function (value, element) {
            return value.replace(/\D+/g, '').length > 10;
        },
    "Вы не заполнили поле");

    $('.menu #menu-open').click(function(){
        if ( $(this).hasClass('is-active') ) {
            $(this).stop();
            $(this).siblings('ul').stop();
            $(this).removeClass('is-active');
            $(this).siblings('ul').fadeOut().removeClass('opened');
        }
        else {
            $(this).stop();
            $(this).siblings('ul').stop();
            $(this).addClass('is-active');
            $(this).siblings('ul').fadeIn(700).addClass('opened');
        }
    });

	$('.category-menu__button').click(function(event) {
        event.preventDefault();
        if ( $(this).hasClass('active') ) {
        	$('.category-menu__list').stop();
        	$('.category-menu__list').fadeOut();
        	$('body').css('background-color', '').find('main').css('filter', '');
        	$(this).removeClass('active');
        }
        else {
        	$('.category-menu__list').stop();
        	$(this).addClass('active');
        	$('body').css('background-color', '#545454').find('main').css('filter', 'opacity(10%)');
        	$('.category-menu__list').fadeIn();
        }
    });

    $('.get-popup-form').fancybox({
        type : 'inline',
        animationEffect: 'fade',
        smallBtn : true,
        toolbar  : false,
        touch: false,
        btnTpl   : {
          smallBtn : '<button data-fancybox-close="" type="button" class="fancybox-button fancybox-close-small" title="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.429 42.429"><defs><style>.cls3-1{fill:#fff}</style></defs><path id="close" d="M-19671 33V20h-13v-4h13V3h4v13h13v4h-13v13z" class="cls3-1" transform="rotate(-45 -9820.012 -23748.587)"/></svg></button>'
        }
    });

    $('.get-popup-search').fancybox({
        type : 'inline',
        animationEffect: 'zoom-in-out',
        smallBtn : false,
        toolbar  : false,
        touch: false,
        afterLoad: function() {
            $('.fancybox-container').addClass('fancybox-popup-search');
        },
        afterShow: function() {
            $('.popup-search__results-wrapper').getNiceScroll().remove();
            $('.popup-search__results-wrapper').niceScroll({
                cursorwidth: 3,
                cursoropacitymin: 0.1,
                cursoropacitymax: 0.3,
                cursorcolor: '#fff',
                cursorborder: 'none',
                cursorborderradius: 0,
                autohidemode: 'leave'
            });
        },
        beforeClose: function() {
            
        }
    });

    $('.product-amount-form button[type="submit"]').click(function(event) {
        event.preventDefault();
        var amountVal = $(this).siblings('.nice-select').find('.list .option.selected').text();
        var amountVal1 = 'heh1'
        $.fancybox.open({
            src  : '#popUpBuy',
            type : 'inline',
            animationEffect: 'fade',
            smallBtn : true,
            toolbar  : false,
            touch: false,
            btnTpl   : {
              smallBtn : '<button data-fancybox-close="" type="button" class="fancybox-button fancybox-close-small" title="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.429 42.429"><defs><style>.cls3-1{fill:#fff}</style></defs><path id="close" d="M-19671 33V20h-13v-4h13V3h4v13h13v4h-13v13z" class="cls3-1" transform="rotate(-45 -9820.012 -23748.587)"/></svg></button>'
            },
            afterShow: function() {
                $('#popUpBuy').find('form input[name="amount"]').val(amountVal);
            }
        });
    });

    $('.form-validate').each(function() {
        $(this).validate({
            rules: {
                phone: {
                    required: true,
                    minlenghtphone: true
                }
            },
            errorElement: 'span',
            highlight: function(element) {
                $(element).addClass('has-error');
            },
            unhighlight: function(element) {
                $(element).removeClass('has-error');
            },
            errorPlacement: function(error, element) {
                if ($(element).attr("name") === "agreement") {
                    return true;
                }
                else {
                    error.insertAfter(element.parent('div').find('label'));
                }
            },
            submitHandler: function(form) {
                $(form).hide()
                    .parent('.popup-form').addClass('popup-form--done')
                    .find('.popup-form__done-message').fadeIn();
                setTimeout(function(){
                    $.fancybox.close();
                }, 3000);
                setTimeout(function(){
                    form.submit(); 
                }, 5000);
            }
        });
    });

    $('input[name="phone"]').inputmask("+7(999)999-99-99");

});

$(window).load(function() {
    $('.preloader').addClass("loaded").delay(1000).hide(0);
});