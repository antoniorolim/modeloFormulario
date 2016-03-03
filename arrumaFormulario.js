/* Função que testa se o conteudo do modelo e do nome são iguais */
function arrumaTexto(nome,modelo){
  var valorCorreto;
  if(nome == modelo){
     valorCorreto = nome;// caso seja igual, para que nao se repita retorna apenas um;
  }
   if(nome != modelo){
     valorCorreto = modelo +"&nbsp;&nbsp;" + nome;// Caso nao seja retorna entao o modelo e o nome;
  }
  return (valorCorreto);
}
/* Função que efetivamente altera o campo modelo do formulário */

function buscaTexto(numCampos){// parametro utilizado para verificar quantos blocos de formulários possui a div
   var cont = 0;// um contador para cada hipótese de numero de formularios
   var cont2 = 0;
   var cont3 = 0;
   //var produto = $('.produto').size();
   var aplicaRetorno;
   var produtoNome;// variavel utilizada para guardar o nome de cada produto
   var produtoModelo;// variavel utilizada para guardar o modelo de cada produto

   /* Each que percorre todo "#produto1 oprion" que é o campo que mostra o nome e o modelo dos produtos no formulario */
   /* Primeiro Each sempre roda já que sempre sera ao menos um campo */
   $("#produto1 option").each(function(){
          produtoNome = $('.bloco-produtos .produto_nome').eq(cont).text();/* Busca o nome dentro da miniatura */
          produtoModelo = $('.bloco-produtos .produto_modelo').eq(cont).text();/* Busca o modelo dentro da miniatura */
          aplicaRetorno = arrumaTexto(produtoNome,produtoModelo);/* Chama a função "arrumaTexto" que testa os conteudos */
          $(this).html(aplicaRetorno);/* altera o texto interno do option para o novo testado na função anterior */
          cont++; /* contador que mantem o each pegando o nome/modelo correto */
    });

    /* Each serve para caso existam dois formularios */
    if(numCampos == 2){
         $("#produto2 option").each(function(){
          produtoNome = $('.bloco-produtos .produto_nome').eq(cont2).text();
          produtoModelo = $('.bloco-produtos .produto_modelo').eq(cont).text();
          aplicaRetorno = arrumaTexto(produtoNome,produtoModelo);
          $(this).html(aplicaRetorno);
          cont2++;
          });
    }

  /* Each serve para caso existam três formularios */
  /* Neste caso é necessario dois eachs ja que o do segundo formulari também deve ser veito pois nao entrou no IF anterior */
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
