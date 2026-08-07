window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
    }

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    bulmaSlider.attach();

    // Handle page zoom: directly recalculate slider-item widths
    // so the publication-video aspect ratio stays correct
    var resizeTimer;
    $(window).on('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        $('.carousel').each(function () {
          var $carousel = $(this);
          var w = $carousel.width();
          if (!w) return;
          var $items = $carousel.find('.slider-item');
          var $slider = $carousel.find('.slider-container');
          $items.width(w);
          $slider.width(w * $items.length);
        });
      }, 200);
    });

})
