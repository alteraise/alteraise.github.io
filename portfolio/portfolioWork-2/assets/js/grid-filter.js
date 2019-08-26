$(document).ready(function () {

    var caseStudiesGrid = $('.case-studies-grid .case-studies-grid__inner').isotope({
        itemSelector: '.case-studies-grid__item',
        layoutMode: 'fitRows'
    });
    
    var buttonGroup = $('.case-studies-grid .case-studies-grid__button-group');

    buttonGroup.on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        caseStudiesGrid.isotope({ filter: filterValue });
        buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
    });

});