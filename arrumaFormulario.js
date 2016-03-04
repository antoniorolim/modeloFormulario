/************************************************************************************************
 *    FunÃ§Ã£o @arrumaTexto                                                                     *
 *    @description = Função que testa se o conteudo dos valores de entrada são iguais ou não.   *
 *                   Caso sejam retorna apenas um, do contrario retorna a concatenação dos dois *
 *		 @exemple 		= arrumaTexto("etios" , "hach");                                            *
 ************************************************************************************************/
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

 /************************************************************************************************
  *    FunÃ§Ã£o @arrumaTexto                                                                     *
  *    @description = Função altera o campo ()"#produto" + n) no formulário, para acabar com o   *
  *                    problema de nome/modelo duplicado nos produtos                            *
  *                   Caso sejam retorna apenas um, do contrario retorna a concatenação dos dois *
  *		 @exemple 		 = buscaTexto(2);                                                            *
  ************************************************************************************************/
function buscaTexto(numCampos){// parametro utilizado para verificar quantos blocos de formulários possui a div
   var cont = 0;// um contador para cada hipótese de numero de formularios
   var aplicaRetorno;
   var produtoNome;// variavel utilizada para guardar o nome de cada produto
   var produtoModelo;// variavel utilizada para guardar o modelo de cada produto
   var countForm = 1;

   while(countForm <= numCampos){
     console.log(countForm);
     $("#produto" + countForm + " option").each(function(){
            console.log(cont);
            produtoNome = $('.bloco-produtos .produto_nome').eq(cont).text();/* Busca o nome dentro da miniatura */
            produtoModelo = $('.bloco-produtos .produto_modelo').eq(cont).text();/* Busca o modelo dentro da miniatura */
            aplicaRetorno = arrumaTexto(produtoNome,produtoModelo);/* Chama a função "arrumaTexto" que testa os conteudos */
            $(this).html(aplicaRetorno);/* altera o texto interno do option para o novo testado na função anterior */
            cont++; /* contador que mantem o each pegando o nome/modelo correto */
      });

      countForm++;
      cont = 0;
   }
}
