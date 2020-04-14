adicionarClasseEsconde();
function adicionarClasseEsconde(){
	var itensRemove = document.getElementsByClassName('item-projeto');

	for(var j = 0; j < itensRemove.length; j++){
	  $(itensRemove[j]).addClass("projetos-escondendo");
	  
	}
  };
