function arrumaTexto(nome,modelo){
  var valorCorreto;
  if(nome == modelo){
     valorCorreto = nome;
  }
   if(nome != modelo){
     valorCorreto = modelo +"&nbsp;&nbsp;" + nome;
  }
  return (valorCorreto);
}

function buscaTexto(numCampos){
   var cont = 0;
   var cont2 = 0;
   var cont3 = 0;
   var produto = $('.produto').size();
   var aplicaRetorno;
   var produtoNome;
   var produtoModelo;   
   $("#produto1 option").each(function(){
          produtoNome = $('.bloco-produtos .produto_nome').eq(cont).text();
          produtoModelo = $('.bloco-produtos .produto_modelo').eq(cont).text();
          aplicaRetorno = arrumaTexto(produtoNome,produtoModelo);
          $(this).html(aplicaRetorno);
          cont++;
    });
    if(numCampos == 2){
         $("#produto2 option").each(function(){
          produtoNome = $('.bloco-produtos .produto_nome').eq(cont2).text();
          produtoModelo = $('.bloco-produtos .produto_modelo').eq(cont).text();
          aplicaRetorno = arrumaTexto(produtoNome,produtoModelo);
          $(this).html(aplicaRetorno);
          cont2++;
          });
    }
   if(numCampos == 3){
         $("#produto2 option").each(function(){
              produtoNome = $('.bloco-produtos .produto_nome').eq(cont2).text();
              produtoModelo = $('.bloco-produtos .produto_modelo').eq(cont).text();
              aplicaRetorno = arrumaTexto(produtoNome,produtoModelo);
              $(this).html(aplicaRetorno);
          cont2++;
          });
      
          $("#produto3 option").each(function(){
              produtoNome = $('.bloco-produtos .produto_nome').eq(cont3).text();
              produtoModelo = $('.bloco-produtos .produto_modelo').eq(cont).text();
              aplicaRetorno = arrumaTexto(produtoNome,produtoModelo);
              $(this).html(aplicaRetorno);
              cont3++;
          });
    }  
} 
