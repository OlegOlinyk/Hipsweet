// bxslider
$(document).ready(function(){
	$('.bxslider').bxSlider();
});

// skroll

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $('.comand__form').offset().top
    }, 700);
    return false;
});

// tab 
$(document).ready(function(){

	$('.comand__top-links').on('click', function(e){
		e.preventDefault();

		var 
		$this =  $(this),
		index = $(this).index();

		$this
		.addClass('active-top')
		.siblings()
		.removeClass('active-top');

		$('.comand__middle-text-li').eq(index)

		.addClass('comand__middle-text-li-active')
		.siblings()
		.removeClass('comand__middle-text-li-active');

	});

	// masked
	$('.number-input').mask('8 (999) 999-99-99');

}); 
// accordion 
$(document).ready(function() {
	$('ul.section5__menu-vertical li ul').css({display:"none"});    
	$('ul.section5__menu-vertical li:has("ul")').click(function() {
		if ($("ul",this).css("display") == "none") {
			$("ul.section5__menu-vertical li ul").slideUp(300);
			$("ul",this).slideDown(300);
		}
		return false;

		
	});
});

// qestion
$(document).ready(function(){

	$('.section5__menu-vertical__item__title').on('click', function(e){
		e.preventDefault();

		var 
		$this =  $(this);

		$this
		.addClass('section5__menu-vertical__item__title-active')
		.siblings()
		.removeClass('section5__menu-vertical__item__title-active');

	});
});
