$("body").click(function(event) {
  if ($(event.target).parents('nav').attr('class') != 'side-menu' && $(event.target).attr('class') != 'side-menu') {
    if ($(event.target).attr('class') == 'open-menu' || $(event.target).parent().attr('class') == 'open-menu') {
      $("body").addClass("collapse-body")
    } else {
      $("body").removeClass("collapse-body")
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


$(function(){
  $("#navbar-loader").load("controls/navbar.html"); 
});


$('.owl-carousel').owlCarousel({
    loop:true,
    dots: false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:4
        }
    }
})


var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

$(window).on("resize", function () {
  delay(function(){
    $('.owl-item').each(function() {
      var itemWidth = $(this).width();
      $(this).height(itemWidth);
    });
  }, 200);
}).resize();

$('.item img').each(function() {
  var imgWidth = $(this).width();
  var imgHeight = $(this).height();
  if (imgWidth > imgHeight) {
    $(this).height('100%');
  } else {
    $(this).width('100%');
  }
});


$(function() {
    $('.img-carousel').on('click', function() {
      $('.imagepreview').attr('src', $(this).attr('src'));
      $('#imagemodal').modal('show');   
    });   
});