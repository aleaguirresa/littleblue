$("body").click(function(event) {
  if ($(event.target).attr('class') == 'open-menu' || $(event.target).parent().attr('class') == 'open-menu') {
		$("body").addClass("collapse-body")
		$(".menu-wrapper").addClass("hiddendino")
		$('.fa-envelope').toggleClass('twist')
  } else if ($(event.target).attr('class') == 'dino-open' || $(event.target).parent().attr('class') == 'dino-open') {
		$(".menu-wrapper").toggleClass("hiddendino")
		$('.fa-envelope').toggleClass('twist')
  } else if ($(event.target).parents('nav').attr('class') != 'side-menu' && $(event.target).attr('class') != 'side-menu') {
		$("body").removeClass("collapse-body")
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


$(window).on("resize", function () {
	var minHeight = 700;

  $('.item img').each(function() {
    minHeight = minHeight < $(this).height() ? minHeight : $(this).height();
  });

  $('.item').each(function() {
    $(this).height(minHeight);
  });
}).resize();