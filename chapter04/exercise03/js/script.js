// JavaScript Document

jQuery(document).ready(function(){

  $('.navi>li').mouseover(function(){
      // console.log("mouse over");
	  $(this).find('.submenu').stop().slideDown(500);
  }).mouseout(function(){
      // console.log("mouse out");
	  $(this).find('.submenu').stop().slideUp(500);
  });

  $('.imgslide a').slice(1).hide(0);

  setInterval(function() {
    $('.imgslide a:first-child').fadeOut().next('a').fadeIn()
    .end().appendTo('.imgslide');
  }, 3000);

});




