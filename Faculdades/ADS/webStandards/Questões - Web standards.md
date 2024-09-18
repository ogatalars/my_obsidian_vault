1 - Ao desenvolver seu currículo na WEB, você percebeu que o link para a pagina com seu portfolio de trabalhos desenvolvidos estava com erros, após algumas tentativas, o erro foi corrigido. Indique qual foi a versão final, onde o link está correto -> 
QUESTÃO QUE TEM COMO RESPOSTA <a href >  tem que ter a tag junto'a' (veja que tem title, e body)
**

b<!DOCTYPE html> 

<html lang="pt-br"> 

<head> 

<title>Meu Site</title> 

</head> 

<body> 

<p>Obrigado por me visitar</p> 

<a href="portfolio.html">Veja meu portf&oacute;lio</a> 

</body> 

</html>**

2 - Ao tentar desenvolver seu primeiro website, você resolveu utilizar o Markup ValidationService da W3C para verificar se havia erros em seu código. Após algumas tentativasvocê chegou a um código sem erros. Mostre qual foi esse código, ou seja, selecione aresposta que apresenta um código sem erros e ou alertas (warnings)


<!DOCTYPE html> 
<html lang='pt-br'> 
			<head>
			<title> meu site </title> 
			</head>
			<body>
			<p> Obrigado por me visitar </p>
			</body> 
</html> 

resposta: OBSERVEAR FECHAR O FECHAMENTO DE TAGS


3 A Web semântica é uma extensão da World Wide Web que permite aos computadore se humanos trabalharem em cooperação. A Web semântica interliga significados de palavras e, neste âmbito, tem como finalidade conseguir atribuir um significado(sentido) aos conteúdos publicados na Internet de modo que seja compreensível tanto pelo humano como pelo computador.Fonte: https://pt.wikipedia.org/wiki/Web_sem%C3%A2ntica **Indique qual conjunto de tags HTML melhor representa a estrutura semântica em um código.**

Resposta -> <aside> <footer> <main> <nav> <header>

4 - O jQuery serve para simplificar a forma como usamos JavaScript em websites. Existem
outras bibliotecas, mas o jQuery é uma das mais populares. Uma das estruturas do
Query são os seletores. Escolha a opção que melhor explica o que é um seletor.

aUm seletor em jQuery serve para fazer acessos ao banco de dados apenas.

bUm seletor em jQuery serve apenas para o usuário poder selecionar qual parte

do website deseja ver.

cUm seletor em jQuery serve para selecionar o domínio que o website deverá

utilizar, ex.: senac.br

d ~~Um seletor em jQuery serve para que seja especificado o elemento do HTML e ou~~
~~CSS que será manipulado. O seletor em JQuery é representação dessa forma:~~
~~$(“elemento”).acao();~~

eUm seletor em jQuery serve para que seja construída uma caixa seletora para

que o usuário possa escolher uma entre outras opções em um formulário

5 - Para tentar mudar a aparência dos parágrafos (<p></p>) em seu site, você após ler

alguns documentos no site da W3C e realizar algumas tentativas, conseguiu fazer o que

queria. Indique qual foi a versão entre as tentativas que funcionou como desejado, ou

seja, mudando o tipo de fonte cor do texto nos parágrafos de seu site

resposta: 
<style>
p{color: #dedede; font-family: Verdana, geneva, tahoma, sans-serif;}
</style>

6 - Para conseguir facilitar a adaptação a diferentes tamanhos de telas (responsividade), o framework Bootstrap possui o sistema de **grid**. A ideia é separar a página em uma grade (grid), onde é possível posicionar os elementos respeitando as divisões feitas. Indique qual código faz o correto uso do sistema de grid do Bootstrap
<div class="container">
 <div class="row">
  <div class="col-sm">
   Coluna Um
   </div>
   <div class="col-sm">
   Coluna dois
   </div> 
TEM QUE TER CLASSE CONTAINER E ROW E COL-SM


7 - Ao entrar no mundo de desenvolvimento web, você descobriu a importância da Web semântica. Aponte qual é a resposta que melhor descreve seu objetivo. 
resposta: O OBJETIVO DA WEB SEMANTICA É  FACILITAR A IDENTIFICACAO DE AREAS DE CONTEUDOS NOS WEBSITES PARA O PROCESSAMENTO POR APLICACOES E ROBOS DE INTERNET

8 - Explique o que é Web Semantica. 
Web semantica é um movimento colaborativo para organizar a informação de maneira legível para computadores e máquinas através de padrões de formatação de dados. O objetivo é atribuir significado ao conteúdo na internet, evitando a necessidade de busca por informações de forma isolada ou por palavras chaves. Permite que aplicações possam ler um bloco de informação, atribuir uma etiqueta(label) de significado.

9 - Com JQuery é possível manipular elementos do HTML e ou CSS de forma que a aplicação apresente um comportamento mais dinâmico. Indique qual das alternativas descreve melhor a forma de se manipular uma propriedade CSS utilizando o jQuery.

R: $(“seletor”).css(“propriedade”, “valor”)

10 - Existe uma maneira mais eficiente de dispor, alinhar e distribuir o espaço entre os itens e m um contêiner HTML, mesmo quando seu tamanho é desconhecido e / ou dinâmico. Isso é possível com a utilização do módulo Flexbox. Sua aplicação é relativamente simples, indique qual alternativa melhor demonstra isso
<head>
<style> 
.espaco-flexivel { display: flex;}
</style>
</head>

x- No início da World Wide Web não havia CSS, frameworks CSS e frameworks JavaScript.Qual foi o objetivo pretendido com cada um desses grupos de tecnologias?

11 -> 
4- O DOM (Document Object Model) é uma interface de desenvolvimento web para manipular os objetos em uma página HTML. Por esta interface, podemos ter acesso aos seguintes objetos: Documentos, página html, elementos da página html. Este objetos estão dispostos em um hierarquia (árvore DOM) )no qual cada ramificação da árvore de nó e, em cada nó, há outro nível hierárquico acima ou abaixo.

 Assinale a alternativa correta em relação ao acesso de um determinado objeto na árvore DOM:	

a)- Os objetos da árvore DOM “history” possuem os objetos “location”, “document” e “window”
	

b)- Os objetos da árvore DOM “window” estão subordinados aos objetos “Document”
	

c)- Os objetos da árvore DOM “html” possuem os objetos “location”, “document” e “history”
	

d)- Os objetos da árvore DOM “window” estão subordinados aos objetos “html”

**e)- Os objetos da árvore DOM “window” possuem os objetos “location”, “document” e “history” @@**


12-> PROVAVELMENTE ESSA SERÁ A DISSERTATIVA:

Joana é uma desenvolvedora web que está trabalhando em um projeto para um cliente. No momento, ela está implementando uma página de notícias com as principais trends do empresa. A seção abaixo mostra a tarefa atual que ela se encontra. No entanto, Joana está em dúvida de como implementar o CSS do container destacado. Como você ajudaria Joana a resolver essa tarefa? Lembre-se de considerar os espaçamentos e alinhamentos. Use como base o modelo do bloco abaixo:

.noticias {     // coloque as estilizações de flexbox, espaçamentos e alinhamento }

RESPOSTA: 

.noticias {
display: flex; 
flex-direction: row; 
flex-wrap: wrap; 
justify-content. flex-start;
align-items: flex-start;
gap: 30px; 
padding: 30px; 
width: 100%
}

.noticias {
display: flex; 
flex-direction: row; 
flex-wrap: wrap;
justify-content: flex-start; 
align-itens: flex-start; 
gap. 35px; 
padding: 35px; 
width: 100%

}