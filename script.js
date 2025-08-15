
// Back-to-top, loader, simple navbar behavior
$(window).on('load', function () {
  $('#preload').fadeOut(200);
});

$(document).ready(function () {
  var btn = $('#button');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) { btn.fadeIn(); } else { btn.fadeOut(); }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  // Smooth anchor links
  $('a[href^="#"]').on('click', function (e) {
    var target = this.getAttribute('href');
    if (target.length > 1) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(target).offset().top - 70 }, 400);
    }
  });
});
