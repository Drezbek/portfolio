/*$(document).on('ready', function () {
    // initialization of carousel
    $.HSCore.components.HSCarousel.init('.js-carousel');

    // initialization of header
    $.HSCore.components.HSHeader.init($('#js-header'));
    $.HSCore.helpers.HSHamburgers.init('.hamburger');

    // initialization of go to section
    $.HSCore.components.HSGoTo.init('.js-go-to');

    // initialization of counters
    var counters = $.HSCore.components.HSCounter.init('[class*="js-counter"]');

    // initialization of popups
    $.HSCore.components.HSPopup.init('.js-fancybox');
});*/

$(window).on('load', function () {
    // initialization of HSScrollNav
/*    $.HSCore.components.HSScrollNav.init($('#js-scroll-nav'), {
        duration: 700
    });*/

    // initialization of cubeportfolio
    $.HSCore.components.HSCubeportfolio.init('.cbp');
});