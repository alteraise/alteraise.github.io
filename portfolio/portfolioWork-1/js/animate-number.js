$(document).ready(function() {

  $('[data-animate-number]').each(function() {

    var num = $(this).attr('data-count-from');
    var result = "";

    if (num.length > 0) {
      result = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    $(this).text(result);

  });

  var waypoint = new Waypoint({
    element: $('.achieve-counters-box')[0],
    handler: function() {
      var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
      $('[data-animate-number]').each(function() {
        var animateNumberStart = $(this).attr('data-count-from');
        var animateNumberTo = $(this).attr('data-count-to');
        $(this).prop('number', animateNumberStart).animateNumber(
          {
            number: animateNumberTo,
            easing: 'easeInQuad',
            numberStep: comma_separator_number_step
          },
          4500
        );
      });
      this.destroy();
    },
    offset: '90%'
  });
});