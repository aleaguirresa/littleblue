$('.owl-item').ready(function() {
  $('.owl-item').each(function() {
    var itemWidth = $(this).width();
    $(this).height(itemWidth);
  });
});

var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

$(window).resize(function () {
    waitForFinalEvent(function(){
      $('.owl-item').each(function() {
        var itemWidth = $(this).width();
        $(this).height(itemWidth);
      });
    }, 500, "some unique string");
});



$("body").click(function(event) {
  if ($(event.target).parents('nav').attr('class') != 'side-menu' && $(event.target).attr('class') != 'side-menu') {
    if ($(event.target).attr('class') == 'open-menu' || $(event.target).parent().attr('class') == 'open-menu') {
      $("body").addClass("collapse-body-right")
      $("body").removeClass("collapse-body-left")
    } else if ($(event.target).attr('class') == 'open-left' || $(event.target).parent().attr('class') == 'open-left') {
      $("body").toggleClass("collapse-body-left")
      $("body").removeClass("collapse-body-right")
    } else {
      $("body").removeClass("collapse-body-right")
      $("body").removeClass("collapse-body-left")
    }
  }
  if ($(event.target).parents('header').attr('class') != 'menu-wrapper' && $(event.target).attr('class') != 'menu-wrapper') {
    if ($(event.target).attr('class') == 'dino-open' || $(event.target).parent().attr('class') == 'dino-open') {
      if ($('.menu-wrapper').hasClass('hiddendino')) {
        $(".menu-wrapper").removeClass("hiddendino")
        $('.fa-envelope').addClass('twist')
      } else {
        $(".menu-wrapper").addClass("hiddendino")
        $('.fa-envelope').removeClass('twist')
      }
    } else {
      $(".menu-wrapper").addClass("hiddendino")
      $('.fa-envelope').removeClass('twist')
    }
  }
});


$('.owl-carousel').owlCarousel({
    loop:true,
    dots: false,
    margin:1,
    nav:true,
    responsive:{
        0:{
            items:4
        }
    }
})


$(function() {
    $('.img-carousel').on('click', function() {
      $('.imagepreview').attr('src', $(this).attr('src'));
      $('#imagemodal').modal('show');
    });
    $('.thumbs').on('click', function() {
      $('.imagepreview').hide();
      $('.imagepreview').attr('src', $(this).attr('src'));
      $('#imagemodal').modal('show');
      $('.imagepreview').fadeIn();
    });
});

$("body").click(function(event) {
  if ($(event.target).attr('class') != 'thumbs' && $(event.target).attr('class') != 'imagepreview' && $(event.target).attr('class') != 'img-carousel') {
    $('#imagemodal').modal('hide');
  }
});