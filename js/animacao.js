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
        if ($(this).scrollTop() > 650) { 
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
	document.body.onresize = function() {
		windowHeight = $(window).height();
		offset = windowHeight - (windowHeight/10);
	};

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

function fecharMenu(){

	var classeOpen = document.querySelector("#collapse-navbar")
		classeOpen.classList.remove('in');
	
}


function filter(el){
	var itens = document.getElementsByClassName("item-projeto");
		id = el.id;
		
		botoes = document.querySelectorAll(".botao-projeto-a")

		
	for(var i = 0; i < itens.length; i++){
	  if(itens[i].classList.contains(id)){
		$(itens[i]).addClass("projetos-aparecendo");
		$(itens[i]).removeClass("projetos-escondendo");

	  }
	  else{
		$(itens[i]).addClass("projetos-escondendo");
		$(itens[i]).removeClass("projetos-aparecendo");
	  }
	}
	
	for(var j=0; j < botoes.length; j++){
		
		if(botoes[j].id == id){
			$(botoes[j]).addClass("botao-clicado");
		}
		else{
			$(botoes[j]).removeClass("botao-clicado");
		}
	}
	

  };
  
  function reset(elemento){
	var itens = document.getElementsByClassName('item-projeto');
		idReset= elemento.id;
		botoes = document.querySelectorAll(".botao-projeto-a")


	for(var i = 0; i < itens.length; i++){
	  $(itens[i]).removeClass("projetos-aparecendo projetos-escondendo")
	}
	for(var j=0; j < botoes.length; j++){
		
		if(botoes[j].id == idReset){
			$(botoes[j]).addClass("botao-clicado");
		}
		else{
			$(botoes[j]).removeClass("botao-clicado");
		}
	}
  };

