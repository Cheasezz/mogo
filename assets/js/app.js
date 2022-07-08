$(function () {
  var introH = $('#intro').innerHeight(),
    header = $('#header'),
    scrolloffset = $(window).scrollTop();

  // Header Fixed

  $(window).on('scroll', function () {
    scrolloffset = $(this).scrollTop();

    checkScroll(scrolloffset);
  });

  function checkScroll(scrolloffset) {
    if (scrolloffset >= introH - header.outerHeight()) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }

  // Smoth scroll

  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top - header.outerHeight();

    $('#nav a').removeClass('active');
    $this.addClass('active');

    $('html, body').animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });

  // Menu nav toggle

  $('#nav_toggle').on('click', function (event) {
    event.preventDefault();

    $(this).toggleClass('active');
    $('#nav').toggleClass('active');
  });

  // Collapse

  $('[data-collapse]').on('click', function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data('collapse');

    $this.toggleClass('active');
  });

  // Slider

  $('[data-slider]').slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
