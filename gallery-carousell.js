(function($){

/*    Portfolio Hex    */

$(document).on('click', '.hexagon a.hover-effect', function(e){
	e.preventDefault();
	var itemClicked = $(this).attr('data-element');
	$('#carousel-hex').carousel(itemClicked-1);
	$(this).closest('.hexagon-elements-wrap').stop(true).animate({opacity : 0}, 400,function(){
		var ofsetFromTop = $(this).closest('.hexagon-elements-wrap').parent().offset().top - $('.navigation-tab').outerHeight();
		$('body, html').stop(true).animate({'scrollTop' : ofsetFromTop},400);
		$(this).stop(true).animate({height : 0},400);
		var heightToAnimateTo = $(this).parent().find('.item-details-wrapper-inner').outerHeight();
		if(heightToAnimateTo < $(window).innerHeight()) heightToAnimateTo = $(window).innerHeight();
		$(this).parent().find('.item-details-wrapper').stop(true).animate({height : heightToAnimateTo},400, function(){
			$(this).stop(true).animate({opacity : 1}, 400);
		});

	});
});
	/* Carousel Closing */
$(document).on('click', '.closing.carousel-control', function(){
	var portHexHeight = $(this).closest('.container').find('.hexagon-elements-wrap-inner').outerHeight();
	$(this).closest('.item-details-wrapper').stop(true).animate({opacity : 0}, 400,function(){
		var ofsetFromTop = $(this).closest('.container').parent().offset().top - $('.navigation-tab').outerHeight();
		$('body, html').stop(true).animate({'scrollTop' : ofsetFromTop}, 400);
		$(this).closest('.container').find('.hexagon-elements-wrap').stop(true).animate({height : portHexHeight},400);
		$(this).stop(true).animate({height : 0}, 400,function(){
			$(this).closest('.container').find('.hexagon-elements-wrap').stop(true).animate({opacity : 1}, 400);
		});
	});
});







})(jQuery);