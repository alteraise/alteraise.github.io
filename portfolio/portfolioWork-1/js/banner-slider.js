$(document).ready(function() {

    var $bannerSlider = $('.banner-slider .banner-slider__inner').flickity({
        draggable: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: true,
        pauseAutoPlayOnHover: false
    });

    var $bannerSliderStatus = $('.banner-slider .banner-slider__status');

    var flkty = $bannerSlider.data('flickity');

    function updateStatus() {
      var cellNumber = flkty.selectedIndex + 1;
      $bannerSliderStatus.html('<span>0' + cellNumber + '</span> <span>- 0' + flkty.slides.length + '</span>');
    }
    updateStatus();
    $bannerSlider.on( 'change.flickity', updateStatus );

    $bannerSlider.on( 'select.flickity', function() { $bannerSlider.flickity('playPlayer') });

});