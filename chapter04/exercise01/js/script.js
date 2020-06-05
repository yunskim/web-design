jQuery(document).ready(function(){

	$('.navi>li').mouseover(function(){
		$(this).find('.submenu').stop().slideDown(500);
	}).mouseout(function(){
		$(this).find('.submenu').stop().slideUp(500);
	});

	$('.imgslide a').slice(1).hide();
	setInterval(function(){
		$('.imgslide a:first-child').fadeOut()
		.next('a').fadeIn()
		.end().appendTo('.imgslide')}, 3000);

	$('.notice li:first').click(function(){
	    $('#modal').addClass('active');
	});

	$('.btn').click(function(){
	    $('#modal').removeClass('active');
	});
});