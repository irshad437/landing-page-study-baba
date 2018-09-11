// change header background
$(function() {
    var header = $(".navbar");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 1) {
            header.addClass('clear-header').removeClass("dark-header");
        } else {
            header.addClass("dark-header").removeClass('clear-header');
        }
    });
});
// change header background end

// slick slider
$(document).on('ready', function() {
      $(".regular").slick({
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
      });
    });
// slick slider end