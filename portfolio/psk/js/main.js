$('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:false
});
$('.brands-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots:false
});
$('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    appendArrows: $('.product-arrow'),
    prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"></button>'
});
$('.popular-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    appendArrows: $('.product-arrow'),
    prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"></button>'
});
$('.filter__name').click(function(){
	$(this).parent().toggleClass('noactive');
	$(this).next().slideToggle();
});
$('ul.tab a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('data-tab');
	
	$('ul.tab li').removeClass('active');
	$(this).parent().addClass('active');

	$('.tab').removeClass('active');
	$('.tab-'+id).addClass('active');
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical:true,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    autoplay: true,
  	autoplaySpeed: 4000,
    focusOnSelect: true,
    verticalSwiping:true,
    responsive: [
    {
        breakpoint: 992,
        settings: {
          vertical: false,
        }
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false,
      }
    },
    {
      breakpoint: 580,
      settings: {
        vertical: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 380,
      settings: {
        vertical: false,
        slidesToShow: 2,
      }
    }
    ]
});