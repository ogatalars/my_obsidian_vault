## Tabelas

**Introdução**

Uma tabela é um conjunto estruturado de dados composto de linhas e colunas. A tabela permite pesquisar de forma rápida e fácil valores que indicam algum tipo de conexão entre diferentes tipos de dados, por exemplo, uma pessoa e sua idade ou um horário no dia da semana, por exemplo.

**Objetivos da aula**

-   Definir o conceito de tabelas em documentos HTML.
-   Discutir a estrutura básica de tabela em documentos HTML.
-   Explicar a estrutura semântica de tabela em documentos HTML.

**Resumo**

**O que são tabelas e qual é a estrutura básica de uma tabela**

Uma tabela é um conjunto estruturado de dados composto de linhas e colunas. A tabela permite pesquisar de forma rápida e fácil valores que indicam algum tipo de conexão entre diferentes tipos de dados, por exemplo, uma pessoa e sua idade ou um horário no dia da semana, por exemplo.

As tabelas em HTML iniciam com a tag <table> e terminam com o fechamento dela </table>. Cada linha da tabela começa com uma tag <tr> e termina com uma </tr>. E cada célula da tabela é começa com a tag <td> e termina com a </td>, como no exemplo a seguir:

<table>  
    <tr>  
          <th>Coluna 1</th>  
          <th>Coluna 2</th>  
          <th>Coluna 3</th>  
    </tr>  
    <tr>  
          <td>Conteúdo 1</td>  
          <td>Conteúdo 2</td>  
          <td>Conteúdo 3</td>  
    </tr>  
</table>

A tabela pode ter quantas linhas forem necessárias, apenas certifique-se de que o número de células seja o mesmo em cada linha. Caso deseje que a primeira linha seja um cabeçalho, utilize a tag <th> em vez da tag <td> (como no exemplo acima isso deixará o conteúdo em negrito e centralizado

**Estrutura semântica de uma tabela**

Podemos trazer semanticidade para uma tabela adicionando as algumas tags do HTML5 como:

-   A tag <thead> que define onde está o cabeçalho
-   A tag <tbody> que define onde está o corpo da tabela
-   A tag <tfoot> que define onde está o rodapé
-   A tag <caption> que possibilita definir o título da tabela, importante para que o leitor possa ter uma ideia do conteúdo da mesma.

Os navegadores podem usar esses elementos para permitir a rolagem do corpo da tabela independentemente do cabeçalho e do rodapé. Além disso, ao imprimir uma tabela grande, que abranja várias páginas, esses elementos podem permitir que o cabeçalho e o rodapé da tabela sejam impressos na parte superior e inferior de cada página. Por fim, estes são elementos também importantes para leitores de tela e ferramentas de busca. A sintaxe final é a que se segue:

<table>  
          <thead>  
                    <tr>  
                              <th>Coluna 1</th>  
                              <th>Coluna 2</th>  
                    </tr>  
          </thead>  
          <tbody>  
                    <tr>  
                              <td>Conteúdo coluna 1 linha 1</td>  
                              <td>Conteúdo coluna 2 linha 1</td>  
                    </tr>  
                    <tr>  
                              <td>Conteúdo coluna 1 linha 2</td>  
                              <td>Conteúdo coluna 2 linha 2</td>  
                    </tr>  
          </tbody>  
          <tfoot>  
                    <tr>  
                              <td>Conteúdo coluna 1 linha 3</td>  
                              <td>Conteúdo coluna 2 linha 3</td>  
                    </tr>  
          </tfoot>  
</table>

**Como aplicar na prática o que aprendeu**

-   Continuando a construir a página web, vamos incluir mais uma seção, abrindo o elemento <section> e dentro dela vamos inserir uma tabela.
-   Para isso, vamos iniciar a tabela abrindo a _tag_ <table border>
-   Em seguida, vamos inserir o cabeçalho da tabela, abrindo a _tag_ <thead>
-   Dentro da _tag,_ vamos criar uma linha, abrindo a _tag_ <tr>
-   E dentro desta linha, vamos incluir duas colunas de cabeçalho com o conteúdo que desejar dentro das tags <th>Coluna 1</th>, <th>Coluna 2</th>
-   Agora vamos fechar a linha com </tr> e fechar o cabeçalho, com </thead>
-   Em seguida, vamos abrir o corpo da tabela, com a tag <tbody>
-   E vamos incluir uma linha com <tr>. Dentro da linha, vamos adicionar duas colunas com o com conteúdo, utilizando <td>Conteúdo coluna 1</td> <td>Conteúdo coluna 2</td>e vamos fechar a linha </tr>
-   Vamos incluir mais uma linha da mesma forma feita anteriormente
-   E vamos fechar o corpo da tabela com a tag </tbody>
-   Agora vamos fechar a tabela com a tag </table>
-   E em seguida, vamos fechar a seção </section>
-   Agora, volte ao navegador, atualize a página e veja como ficou. Adicione ou remova colunas caso necessário.

**Dica quente para você não esquecer**

As tabelas HTML devem ser usadas para dados tabulares apenas. Não devem ser utilizadas para posicionar elementos na tela. Isso era comumente usado antigamente porque o suporte a CSS em navegadores costumava ser terrível, mas atualmente não é mais necessário.

Os principais motivos para não utilizar tabelas na estruturação do layout são os seguintes:

-   As tabelas de layout reduzem a acessibilidade para usuários com deficiência visual.
-   Tabelas produzem sopa de tags: Como mencionado acima, os layouts de tabela geralmente envolvem estruturas de marcação mais complexas do que as técnicas de layout adequadas. Isso pode tornar o código mais difícil de escrever, manter e depurar.
-   As tabelas não são responsivas automaticamente.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Practitioner\_FrontEnd.git](https://github.com/FaculdadeDescomplica/Practitioner_FrontEnd.git)

Referência Bibliográfica

**MDN Web Docs**. \[_S. l._\], 20 set. 2022. Disponível em: https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Tables. Acesso em: 20 set. 2022.