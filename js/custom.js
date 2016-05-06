$("body").click(function(event) {
  if ($(event.target).attr('class') == 'open-menu' || $(event.target).parent().attr('class') == 'open-menu') {
    $("body").toggleClass("collapse-body")
  } else {
  	if ($(event.target).parents('nav').attr('class') != 'side-menu' && $(event.target).attr('class') != 'side-menu') {
	    $("body").removeClass("collapse-body")
	}
  }
});