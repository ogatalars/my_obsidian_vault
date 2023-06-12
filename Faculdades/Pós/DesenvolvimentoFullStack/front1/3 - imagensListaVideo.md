**Introdução**

Com o surgimento da web, o HTML se constituiu como a principal linguagem usada para a publicação de conteúdo na web. Em linhas gerais, o HTML é baseado no conceito de hipertexto, que são conjuntos de elementos ligados por conexões, que podem ser palavras, imagens, vídeos, áudio, documentos etc. que quando conectados, formam uma grande rede de informação.

O HTML tem como principal objetivo estruturar o conteúdo de uma página web, podendo criar diferentes tipos de links para outras páginas e arquivos, criar formulários, tabelas, listas etc. Quando acessamos um site, ao clicar em uma página, estamos basicamente acessando um documento HTML.

**Objetivos da aula**

-   Empregar Imagens em documentos HTML
-   Usar Vídeos em documentos HTML
-   Demonstrar Listas em documentos HTML

**Resumo**

**Como inserir imagens na página HTML**

A tag _<img>_ é usada para incorporar uma imagem em uma página da web. A sintaxe é <img src=”url” alt=”Texto alternativo”>. Este elemento não possui _tag_ de fechamento e possui dois atributos obrigatórios:

-   src: é o diminutivo de _source_ e deve receber o caminho para a imagem
-   alt é o diminutivo de _alternative_ e deve receber um texto alternativo para a imagem

**Como inserir vídeos na página HTML**

Para inserir um vídeo em uma página HTML utiliza-se a seguinte sintaxe:

<video width="320" height="240" controls>  
  <source src="movie.mp4" type="video/mp4">  
  <source src="movie.ogg" type="video/ogg">  
  Seu navegador não suporta a exibição deste vídeo  
</video>

No qual o elemento _source_ possui os atributos src e type que especificam o local e o tipo do arquivo de vídeo respectivamente. Podem ser definidos vários elementos _source_ com tipos de vídeo diferentes. O navegador usará o primeiro formato que ele reconhecer e, caso não suporte nenhum, exibirá a frase inserida ao final (Seu navegador não suporta a exibição deste vídeo)

O atributo controls é responsável por adicionar controles de vídeo como play, pause e volume. Outros atributos podem ser usados no controle do vídeo, como muted para iniciar o vídeo sem áudio e autoplay para iniciar o vídeo ao carregar a página. Também é possível definir altura (height) e largura (width) para tag vídeo e é indicado que sempre sejam definidas.

**Como apresentar conteúdo em listas**

Existem 3 formas de se exibirem listas em HTML:

1.  <ul>: Representa _unordered list_, ou seja, listas não ordenadas;
2.  <ol>: Representa _ordered list_, ou seja, listas ordenadas;
3.  <dl>: Representa _description list_, ou seja, listas de descrição

Para as listas ordenadas e não ordenadas, os itens são definidos pela tag <li> e a sintaxe final fica desta forma:

<ul>  
          <li>Primeiro item</li>  
          <li>Segundo item</li>  
          <li>Terceiro item</li>  
</ul>

<ol>  
          <li>Primeiro item</li>  
          <li>Segundo item</li>  
          <li>Terceiro item</li>  
</ol>

Para a lista de descrição utiliza-se as _tags_ <dt> para definição de termo e <dd> para descrição de termo e a sintaxe fica como a seguir:

<dl>  
          <dt>Primeiro item</dt>  
          <dd>- Descrição do primeiro item</dd>  
          <dt>Segundo item</dt>  
          <dd>- Descrição do segundo item</dd>  
</dl>

**Como aplicar na prática o que aprendeu**

Vamos dar continuidade à construção da página HTML.

Vamos abrir outra <section> e vamos incluir uma imagem, utilizando <img src="https://www.w3schools.com/html/pic\_trulli.jpg" alt="Trulli" width="500" height="333">

Em seguida, vamos fechar esta seção com </section>

Agora vamos voltar à seção <header> e antes do título (<h1>) e vamos incluir uma lista que posteriormente funcionará como menu:

<ul>  
    <li>Primeiro item</li>  
    <li>Segundo item</li>  
    <li>Terceiro item</li>  
</ul>

Agora volte ao navegador e atualize a página, utilizando a tecla _f5_ e veja como ficou!

**Dica quente para você não esquecer**

Nem todos os navegadores suportam os mesmos formatos de vídeo; por isso, você pode fornecer várias fontes em elementos _<source>_ dentro do elemento _<video>_, e o navegador usará a primeira que achar compatível.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Practitioner\_FrontEnd.git](https://github.com/FaculdadeDescomplica/Practitioner_FrontEnd.git)

Referência Bibliográfica

**RESOURCES for Developers, by Developers**. \[_S. l._\], 20 set. 2022. Disponível em: [https://developer.mozilla.org/pt-BR/](https://developer.mozilla.org/pt-BR/)  Acesso em: 20 set. 2022.