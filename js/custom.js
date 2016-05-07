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