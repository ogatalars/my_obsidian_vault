**Introdução**

Vamos aprender a adicionar recursos avançados nas rotas, como passar informações e organizar melhor as mesmas.

O Guard no Angular é uma funcionalidade para proteger as rotas que devem ser acessadas, conforme uma determinada regra de negócio.

**Objetivos da aula**

-   Vamos aprender um pouco mais sobre Rotas
-   Passar informações entre as rotas, Guard e Segurança dos componentes.

**Resumo**

Vamos adicionar recursos avançados na nossa rota. Primeiramente, é possível criar sub-rotas, posteriormente, adicionar mais rotas, sub-rotas e, assim por diante. O exemplo de código abaixo demonstra o funcionamento. Normalmente, também se cria nesses componentes um conceito de Lazzy loading onde cada componente dessa sub-rota teria um module com dependências que não estão disponíveis em todo o contexto somente para aqueles componentes e sub-rotas.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671799205857-DpzRb7Mai1.png)

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671799250853-u1g9FmkUOV.png)

Outro recurso interessante seria a proteção das rotas utilizando Guard do Angular, para isso criamos uma pasta denominada Guard e vamos criar os arquivos com o seguinte comando:

ng g guard guard/autorizado

Agora, vamos modificar nosso arquivo Guard:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671799340233-gX0BRniNI8.png)

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671799355694-Jmsx2eT5xE.png)

No caso do código acima, ele retorna _true_ se a constante usarioEstadoLogado for verdadeira e _false_ se ele não estiver logado e, nesse caso, direciona novamente para página de login.

No arquivo de _routes_ adicionamos a condição do guard através da variável canActivate para proteger as rotas desejadas.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671799392382-ZAbt109hwu.png)

Criamos um arquivo de service para fazer o controle no localStorage da sessão do usuário:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671803716897-Vt42NmWJhT.png)

Agora, vamos modificar o componente de login para adicionar o dado no localStorage:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671805115313-gRBq7ks86T.png)

Outra funcionalidade importante das rotas seria passar dados entre os componentes dessa rota, podendo passar um dado único ou um Json.

Vamos modificar a página manipulando json e enviar o ID da lista para a rota de detalhe.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671805183693-Aflb5C8syv.png)

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671805219460-Pm87oH8FeO.png)

Criaremos uma página de detalhes e na função ngOnit vamos recuperar o dado:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671805280900-bhHMX789Jw.png)

No nosso HTML vamos apresentar o dado na tela:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671805314172-7gTVD8hvlW.png)

Posteriormente, vamos melhorar a página de detalhes adicionando dados vindos da API.

**Conteúdo bônus**

**Tópicos avançados**

Existe uma maneira de passar um objeto completo através da rota serializando o mesmo para Json e depois deserializando o mesmo no componente destino da rota. Isso facilita muito no desenvolvimento da aplicação, porém existem maneiras mais modernas de compartilhar dados entre os componentes, como Redux denominado NgRx. Vale pesquisar na internet para se aprofundar nesses conteúdos.

Vamos para um exemplo de código:

  user: User = new User('Bruno', 'brunohauck@gmail.com')

  this.router.navigate(\['/user-detail'\],

      { queryParams: { user: JSON.stringify(user) }});

Dentro de qualquer componente defina um objeto route e passe o objeto user no formato acima.

No componente destino vamos recuperar a informação:

  ngOnInit() {

  this.route.queryParams.subscribe(

    params => {

      console.log('Got param: ', params\['user'\]);

      this.user =  params\['user'\];

      let data = JSON.parse(this.user);

      console.log(data.name);

    }

  )

Agora, podemos usar esses dados e mostrar os mesmos no HTML como desejar.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir:

[https://github.com/FaculdadeDescomplica/pos-advanced-front-end](https://github.com/FaculdadeDescomplica/pos-advanced-front-end)

Referência Bibliográfica

  
Angular Docs. **Angular IO**, Disponível em: < [https://angular.io](https://angular.io/) >. **(Acesso em 04/11/2022)**

Angular Material Docs. **Angular Material**, Disponível em: < [https://material.angular.io](https://material.angular.io/) >. **(Acesso em 04/11/2022)**