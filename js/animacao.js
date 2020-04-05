$(function() {
    $('.animation-ancora').bind('click',function(event){
      var $anchor = $(this);
      $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'swing');
      // Outras Animações
      // linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce
    });
  });

 $(function(){   
    var nav = $('#nav-main');   
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 790) { 
            nav.addClass("menu-fixo");
            $('body').css('padding-top', 70);
        } else { 
            nav.removeClass("menu-fixo"); 
            $('body').css('padding-top', 0);
        } 
    });  
});


var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

$(document).ready(function() {
	var $target = $('.anime'),
			animationClass = 'anime-init',
			windowHeight = $(window).height(),
			offset = windowHeight - (windowHeight / 4);

	function animeScroll() {
		var documentTop = $(document).scrollTop();
		$target.each(function() {
			if (documentTop > boxTop(this) - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}
	animeScroll();

	$(document).scroll(function() {
		setTimeout(function() {animeScroll()}, 150);
	});
});

$("#wpp").hover(
	function() {
	   $('#texto-wpp').collapse('show');
	 }, function() {
	   $('#texto-wpp').collapse('hide');
	 }
   );
