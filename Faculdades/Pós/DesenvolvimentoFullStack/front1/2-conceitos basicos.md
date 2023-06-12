**Introdução**

HTML é um acrônimo para Hiper Text Markup Language, que significa Linguagem de Marcação de Hipertexto e é a linguagem padrão para o desenvolvimento de páginas web.

A linguagem HTML foi criada em 1991 por Tim Berners-Lee e é mantida pela W3C (World Wide Web Consortium) que é um consórcio internacional que agrega empresas, órgãos governamentais e organizações independentes que juntos discutem e definem os padrões e tecnologias a serem utilizados na web.

**Objetivos da aula**

-   Descrever a semântica do HTML 5
-   Reconhecer a estrutura de um código HTML
-   Identificar os elementos e atributos
-   Identificar Títulos, links, texto

**Resumo**

A linguagem HTML serve para descrever a estrutura de um site e consiste em uma série de elementos que informam ao navegador como exibir o conteúdo. Seus elementos definem partes do conteúdo como "este é um título", "este é um parágrafo", "este é um link", etc.

**Estrutura básica de um código HTML**

O HTML, atualmente, está na versão 5.2, que foi lançada em 2017. Seus elementos são chamados de _tags_ e sua estrutura básica é a seguinte: uma página HTML se inicia, primeiramente, com a declaração <!DOCTYPE html>. Esta declaração é responsável por comunicar ao navegador que esta é uma página em HTML5. Antes do HTML5, esta declaração era feita de outra forma.

Para dar início ao conteúdo da página HTML, abrimos a tag <html lang="pt-BR"> e todo o conteúdo da página deve estar entre sua abertura e seu fechamento </html>. Note que a _tag_ possui o atributo  lang que deve conter o idioma do conteúdo da página, (importante para ajudar os motores de busca e navegadores a interpretar a página) neste caso, português do Brasil, cuja abreviação é pt-BR.

Após abrir a _tag_ html, abrimos a _tag_ <head>. Este elemento é uma seção que deve conter dados sobre o documento HTML como título do documento, codificação dos caracteres, estilos, _scripts_ e outras informações. O conteúdo que fica dentro desta _tag_ não é exibido pelo navegador.

Dentro do <head> vamos abrir a _tag_ <title> para inserir o título do documento e, em seguida, vamos fechá-la </title> e fechar também a _tag_ </head>. Obs: Alguns metadados não são obrigatórios, mas são importantes de serem definidos dentro da <head>, como:

-   <meta charset="UTF-8"> . O atributo _charset_ especifica a codificação de caracteres para o documento HTML. A especificação HTML5 incentiva a utilização do conjunto de caracteres _UTF-8_, que abrange quase todos os caracteres e símbolos do mundo.
-   <meta name="viewport" content="width=device-width, initial-scale=1.0">. Esta meta tag viewport fornece ao navegador instruções sobre como controlar o dimensionamento da página quando acessada de diferentes tamanhos de dispositivos. O valor  width=device-width do atributo content define que a largura da página deve seguir a largura do tamanho da tela do dispositivo. O valor initial-scale=1.0 define o nível de zoom inicial quando a página é carregada pela primeira vez pelo navegador, neste caso, 1.
-   A seguir, vamos abrir a tag <body>, que irá conter a estrutura do site.
-   Após o conteúdo do site, fecha-se a tag </body> e em seguida a fecha-se a tag </html>.
-   Por fim, a estrutura básica (mínima) para uma página HTML é a que se segue:

<!DOCTYPE html>  
<html lang="pt-BR">  
<head>

              <meta charset="UTF-8">

              <meta name="viewport" content="width=device-width, initial-scale=1.0">  
              <title>Título da página</title>  
</head>  
<body>  
              Conteúdo  
</body>  
</html>

**Elementos básicos do HTML**

O HTML possui alguns elementos básicos para formatação de texto. Dentre eles estão:

-   **Títulos**: As _tags_ <h1> a <h6> são usadas para definir diferentes tamanhos de título. Onde <h1> define o título mais importante e <h6>, o título menos importante.
-   **Parágrafos**: A tag <p> define um parágrafo. Os navegadores adicionam automaticamente uma única linha em branco antes e depois de cada elemento deste.
-   **Links**: A _tag_ <a>  define um hiperlink, que é usado para vincular uma página a outra ou uma âncora na mesma página. O atributo href desta tag define o destino do link. Exemplo: <a href="_link_">_Texto do link_</a>

**Semântica do HTML 5**

Em 2014 foi lançado o HTML5 que trouxe significativas modificações em relação à sua versão anterior introduzindo novos elementos e recursos à linguagem, além de melhorar ou remover algumas funcionalidades existentes.

O HTML5 introduziu o conceito de semântica, descrevendo mais claramente o significado dos elementos, tanto para o navegador quanto para o desenvolvedor.

Exemplos e novos elementos semânticos são:

-   <header>: Define o cabeçalho do site ou de uma seção e, normalmente, contém elementos como logo e menu de navegação.
-   <nav>: Define um conjunto de links de navegação ou menu.
-   <section>: Define uma seção no documento.
-   <aside>: Define um local para conteúdo além do principal, como uma barra lateral.
-   <footer>: Define o rodapé do documento.

Alguns dos benefícios de se utilizar estes elementos de marcação semântica:

-   Os mecanismos de pesquisa consideraram seu conteúdo como palavras-chave importantes para influenciar os rankings de pesquisa da página.
-   Os leitores de tela irão utilizar os elementos semânticos como placas de sinalização para ajudar os usuários com deficiência visual a navegarem na página.
-   Facilita a manutenção de código, uma vez que encontrar blocos de código significativos é mais fácil do que pesquisar em divs infinitas com ou sem classes semânticas.

**Como aplicar na prática o que aprendeu**

Abra o arquivo _index.html_ do seu projeto e dê início à construção da sua página web:

1.  Primeiramente, inclua a definição de que esta página utiliza o padrão HTML5, utilizando a definição <!DOCTYPE html>
2.  Em seguida, diga ao navegador que a linguagem utilizada será HTML e o conteúdo está em português com  <html lang="pt-BR">
3.  Agora abra a _tag_ <head> para poder inserir os metadados da página. Então, insira um título para o documento: <title>Meu primeiro site</title>
4.  Adicione a meta tag <meta charset="UTF-8">  para especificar a codificação.
5.  Adicione a meta tag <meta name="viewport" content="width=device-width, initial-scale=1.0"> para controlar o dimensionamento.
6.  Em seguida feche com </head>
7.  Agora abra o corpo da página para poder inserir conteúdo utilizando <body>
8.  Vamos adicionar um título para a página, para isso vamos abrir o elemento <header> e, dentro dele, colocar um título <h1>Este é o título</h1> e então fechar o </header>
9.  Agora,vamos adicionar uma seção, abrindo o elemento <section> e, dentro dela, vamos adicionar um parágrafo, <p>Este é um parágrafo</p> e em seguida, vamos fechar a seção com o elemento </section>
10.  Feche o corpo da página utilizando a tag </body>
11.  Em seguida, feche a página HMTL utilizando a tag </html>
12.  Agora atualize o seu navegador, utilizando a tecla de atalho _f5_ e veja como ficou!

**Dica quente para você não esquecer**

O W3C é o consórcio que mantém a linguagem HTML e define as diretrizes e mudanças da linguagem. Por isso, sempre que tiver alguma dúvida sobre a sintaxe, consulte sua documentação no site [https://www.w3c.br/](https://www.w3c.br/).

Você pode encontrar por aí definições de HTML diferentes da <!DOCTYPE html>. São definições antigas, pertencentes a versões anteriores do HTML como por exemplo, A definição do HTML 4.01: <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> e a definição do XHTML 1.1: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

A especificação mais atualizada do HTML (_HTML Living Standard_) pode ser encontrada em [html.spec.whatwg.org](http://html.spec.whatwg.org/).

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Practitioner\_FrontEnd.git](https://github.com/FaculdadeDescomplica/Practitioner_FrontEnd.git)

Referência Bibliográfica

W3C. **W3C Brasil.** _\[S.l.\]._ Consórcio World Wide Web, 2022. Disponível em: [https://www.w3c.br/](https://www.w3c.br/) Acesso em: 20 set. 2022.