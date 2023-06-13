**Introdução**

Formulários HTML são um dos principais pontos de interação entre um usuário e um web site ou aplicativo. Um desenvolvedor web pode criar formulários HTML baseados em um determinado modelo, usando os elementos HTML apropriados, pois são criados usando os elementos de formulário HTML. Estes elementos de formulário HTML são usados para criar diferentes tipos de campos de formulário, tais como caixas de texto, botões, caixas de seleção, etc.

Os formulários HTML são processados pelos navegadores e os dados são enviados para o servidor web. A maioria dos navegadores processa os formulários HTML de acordo com o W3C HTML5 especificação.

**Objetivos da aula**

-   Definir o conceito de formulários HTML?
-   Descrever a estrutura básica de um formulário em HTML
-   Discutir os principais elementos aplicados a um formulário HTML.

**Resumo**

**O que são formulários? Estrutura básica de um formulário**

Formulários são estruturas utilizadas para coletar a entrada de dados do usuário e enviar para o servidor.

A construção de um formulário inicia-se sempre com a _tag_ <form> e termina com a _tag_ </form>. Esses elementos são um contêiner para diferentes tipos de campos de entrada de dados, tais como: campos de texto, caixas de seleção, botões de opção, botões de envio, etc. O elemento <form> possui alguns atributos referente à forma como o formulário será submetido:

-   O atributo _action_ define recebe como valor o destino dos dados que serão submetidos no fomulário, que, normalmente é uma página em uma linguagem de backend como PHP, Java, ASP, etc. Ex.: <form action="/action\_page.php">
-   O atributo _target_ especifica onde exibir a resposta recebida após o envio do formulário, como por exemplo _\_blank_ (em uma nova janela), \_self (na janela atual), \_parent (no quadro pai), _\_top_ (em todo o corpo da janela) ou  _framename_ (em um iframe nomeado).  Ex.: <form action="/action\_page.php" target="\_blank">
-   O atributo _method_ especifica o método HTTP a ser usado ao enviar os dados do formulário, que podem ser enviados como variáveis de URL (method="get") ou como transação HTTP post (method="post"). Exemplo: <form action="/action\_page.php" method="post">

**Tipos de campos para envio de dados**

O elemento HTML <input> é o mais comumente usado nos formulários. Um elemento <input> pode ser exibido de várias maneiras, dependendo do valor do atributo type, por exemplo:

-   <input type="text"> Exibe um campo de entrada de texto de uma linha.
-   <input type="radio"> Exibe um botão para cada item de uma série de opções, onde somente um item pode ser selecionado.
-   <input type="checkbox"> Exibe uma caixa de seleção para cada item de uma série de opções, onde pode-se selecionar mais de um item.
-   <input type="submit"> Exibe um botão enviar (para submeter o formulário)
-   <input type="button"> Exibe um botão clicável
-   <input type="date"> Exibe (ao clicar no campo) um calendário para selecionar uma data.
-   <input type="email"> Exibe um campo para entrada de um endereço de e-mail. O valor de entrada é validado automaticamente para garantir que seja um endereço de e-mail formatado corretamente.

Outro campo muito utilizado é a lista suspensa, que é definida pelo elemento <select> seguido das opções da listas, definidas pelos elementos <option>

  
<select id="carros" name="carros">  
          <option value="gol">Gol</option>  
          <option value="palio">Pálio</option>  
          <option value="hb20">HB20</option>  
          <option value="clio">Clio</option>  
</select>

Todo campo do formulário deve ter um atributo _name_ que deverá receber o nome do campo (sem espaços) para que o servidor possa pegar o valor enviado.

Para atribuir um rótulo ao campo, utiliza-se o elemento <label>. É importante a utilização deste elemento para que leitores de tela identifiquem o campo para pessoas com deficiência visual. Este elemento ajuda os usuários que têm dificuldade em clicar em regiões muito pequenas pois ao clicar no texto do <label>, ele seleciona o campo, mas, para isso, é necessário utilizar o atributo _for_, que deve receber o mesmo valor do atributo _id_ do campo a que se refere, como no exemplo a seguir:

<label for="linguagem">Digite aqui a sua linguagem favorita</label>

<input type="text" id="linguagem" name="linguagemFavorita">

Abaixo um exemplo de formulário com campos de entrada de texto para nome e sobrenome. Veja que comumente, os valores dos atributos for, id e name são iguais.

<form>  
          <label for="nome">Nome</label><br>  
          <input type="text" id="nome" name="nome"><br>  
          <label for="sobrenome">Sobrenome:</label><br>  
          <input type="text" id="sobrenome" name="sobrenome">  
</form>

Podemos também usar o elemento <fieldset> para agrupar campos do formulário, como no exemplo a seguir:

<form action="/action\_page.php">  
          <fieldset>  
                    <legend>Pessoa:</legend>  
                    <label for="nome">Nome:</label><br>  
                    <input type="text" id="nome" name="nome" value="John"><br>  
                    <label for="sobrenome">Sobrenome:</label><br>  
                    <input type="text" id="sobrenome" name="sobrenome" value="Doe"><br>  
                    <input type="submit" value="Submit">  
          </fieldset>  
</form>

Podemos utilizar o atributo readonly para especificar que um campo de entrada é somente leitura. Um campo de entrada somente leitura não pode ser modificado.

Podemos usar também atributo _maxlength_ para limitar número máximo de caracteres que podem ser inseridos em um campo.

A seguir mais um exemplo:

<form>  
          <label for="nome">Nome:</label>  
          <input type="text" id="nome" name="nome" value="John" readonly>  
          <label for="sobrenome">Sobrenome:</label>  
          <input type="text" id="sobrenome" name="sobrenome" value="Doe" maxlength>  
</form>

**Como aplicar na prática o que aprendeu**

-   Vamos incluir na página web mais uma seção para conter um formulário. Para isso, abra a seção com <section>
-   Dentro dela, inclua a abertura do formulário <form action="" method="get">
-   Vamos incluir um campo para o usuário digitar seu nome. Para isso, inclua o rótulo <label for="nome">Nome:</label><br> e em seguida, o campo <input type="text" id="nome" name="nome" value="John" readonly><br><br>
-   Agora vamos incluir um campo para o usuário digitar seu sobrenome. Para isso, vamos incluir o rótulo <label for="sobrenome">Sobrenome:</label><br> e o campo <input type="text" id="sobrenome" name="sobrenome" value="Doe" maxlength><br><br>
-   Vamos criar mais um campo do tipo lista suspensa. Vamos adicionar um rótulo para a lista <label for="linguagem">Escolha sua linguagem preferida:</label><br>
-   E vamos abrir a lista <select id="linguagem" name="linguagem">
-   e em seguida incluir os itens:  
     <option value="html">HTML</option>  
     <option value="css">CSS</option>  
     <option value="javascript">Javascript</option>
-   Vamos fechar a lista suspensa </select> <br><br>
-   Agora vamos incluir um botão para enviar os dados <input type="submit" value="Enviar">
-   Vamos fechar o formulário </form>  e em seguida, fechar a seção </section>
-   Agora volte ao navegador e atualize a página para visualizar as alterações

**Dica quente para você não esquecer**

O elemento <label>:

-   Define rótulos para os campos do formulário.
-   É útil para usuários que necessitam de leitores de tela, porque o leitor  lerá em voz alta o rótulo quando o usuário focar no campo dele.
-   Ajuda os usuários que têm dificuldade em clicar em regiões muito pequenas (como botões de opção ou caixas de seleção) - pois quando o usuário clica no _<label>_, ele seleciona o campo deste rótulo
-   O atributo _for_ do _<label>_ deve ser igual ao atributo _id_ do campo a que ele se refere.

**O atributo method do formulário**

Observações sobre o método GET:

-   Anexa os dados do formulário à URL, em pares nome/valor
-   NUNCA use GET para enviar dados confidenciais! (os dados do formulário enviado são visíveis na URL!)
-   O comprimento de um URL é limitado (2048 caracteres)
-   Este método é útil para envios de formulários em que um usuário deseja marcar o resultado
-   GET é bom para dados não seguros, como strings de consulta no Google

Observações sobre o POST:

-   Anexa os dados do formulário dentro do corpo da solicitação HTTP (os dados do formulário enviado não são mostrados na URL)
-   O POST não tem limitações de tamanho e pode ser usado para enviar grandes quantidades de dados.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Practitioner\_FrontEnd.git](https://github.com/FaculdadeDescomplica/Practitioner_FrontEnd.git)

Referência Bibliográfica

**MDN Web Docs**. \[_S. l._\], 20 set. 2022. Disponível em: [https://developer.mozilla.org/pt-BR/docs/Learn/Forms](https://developer.mozilla.org/pt-BR/docs/Learn/Forms) Acesso em: 20 set. 2022.