var d=document;

window.addEventListener('load',function(){
	if(d.querySelector('section.index-header-slider')) indexHeaderSlider();
	if(d.querySelector('section.header-menu')) headerMenu();
	if(d.querySelector('section.application-warning')) applicationWarning();
});

window.addEventListener('scroll',function(){

});

function indexHeaderSlider(){
	if(window.innerWidth>768){
		jQuery("#index-header-carousel").Cloud9Carousel({
			//autoPlay: 1,
			bringToFront: true,
			farScale: 0.8,
			xRadius: 240,
			buttonLeft: jQuery('section.index-header-slider .navigation .prev'),
			buttonRight: jQuery('section.index-header-slider .navigation .next')
		});
	} else {
		jQuery("#index-header-carousel").Cloud9Carousel({
			bringToFront: true,
			farScale: 0.8,
			xRadius: 500,
			yRadius: 1,
			buttonLeft: jQuery('section.index-header-slider .navigation .prev'),
			buttonRight: jQuery('section.index-header-slider .navigation .next')
		});
	}
}

function headerMenu(){
	d.querySelector('section.header-menu-toggler').addEventListener('click',function(){
		d.querySelector('section.header-menu').classList.toggle('open');
		d.querySelector('html').classList.toggle('menu-open');
	});
	d.querySelector('section.header-menu .toggler').addEventListener('click',function(){
		d.querySelector('section.header-menu').classList.remove('open');
		d.querySelector('html').classList.remove('menu-open');
	});
}

function applicationWarning(){
	d.querySelector('section.application-warning .close').addEventListener('click',function(){
		d.querySelector('section.application-warning').classList.add('hide');
	});

}
