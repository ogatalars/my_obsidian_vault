**Introdução**

A segurança e a autenticação são pontos importantes em uma aplicação front-end. Hoje, vamos aprender a utilizar o JWT e realizar um login em uma API para que ela retorne ao token JWT. Também vamos aprender a criar componentes _Lazy Loading_ e aplicar na prática essa funcionalidade.

**Objetivos da aula**

-   Aprenderemos sobre _Lazy Loading._
-   Refatorar o formulário de login para receber o token.
-   Utilizar a Segurança JWT em conjunto com as rotas e o guard.

**Resumo**

Um componente _Lazy Loading_ possui uma característica que o mesmo pode importar uma dependência com escopo somente daquele componente. Essa dependência só será carregada quando o componente for instanciado deixando seu código mais organizado. Outra característica do Lazy é a possibilidade de criar uma pasta de componentes com dependências e rotas específicas.

Para transformar um componente em _Lazy_ temos que criar um Module e uma rota. Agora, vamos criar um componente _Lazy_ com um module e uma rota através do comando abaixo:

ng generate module pages/lazy --route /pages/lazy

Importaremos nossas dependências e outros modules, conforme o código abaixo:

![Fonte: Autoral, 2022.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814083681-wMUFzwZRy5.png "Fonte: Autoral, 2022.")

Fonte: Autoral, 2022.

JSON Web Token JWT (RFC7519) é um formato compacto de representação de declarações destinado para ambientes com restrição de espaço, como HTTP Cabeçalhos de autorização e parâmetros de consulta de URI. JWTs codificam as informações a serem transmitida como um objeto JSON \[RFC7159\] que é usado como a carga útil de uma estrutura JSON Web Signature (JWS) \[JWS\] ou como o texto simples de uma estrutura JSON Web Encryption (JWE) \[JWE\], permitindo que as reivindicações sejam assinadas digitalmente ou protegidas pela integridade com um Código de Autenticação de Mensagem (MAC) e/ou criptografado. Além disso, são sempre representados usando JWS Compact Serialization ou JWE Compact Serialização. A figura 1 demonstra o seu funcionamento:

![Fonte:  https://medium.com/tableless/entendendo-tokens-jwt-json-web-token-413c6d1397f6   (Acesso em 21/11/2022)](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814109390-R9ZCGtMFZI.png "Fonte:  https://medium.com/tableless/entendendo-tokens-jwt-json-web-token-413c6d1397f6   (Acesso em 21/11/2022)")

A figura 2 mostra um token JWT e sua decodificação:

![Fonte: https://jwt.io/ (Acesso em 21/11/2022)](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814135210-x9t0MtOxcM.png "Fonte: https://jwt.io/ (Acesso em 21/11/2022)")

Agora, vamos modificar nossa página de login para executar uma requisição HTTP para uma API com email e senha, retornando os dados do usuário, assim como um JWT token. Adicionaremos o UserService no componente e fazer a requisição, como mostra o código abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814200500-aCrLCazdiY.png)

Vamos alterar nosso service e criar a função de login:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814220140-ezvJ4EhBtv.png)

Vamos gravar nosso token no localStorage para ser utilizado nas rotas privadas da API:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814242260-nQmIJi9Oxd.png)

Alterar o arquivo de AutorizationService:

![Fonte: Autoral, 2022.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814264039-6s0Z4w4LhB.png "Fonte: Autoral, 2022.")

Fonte: Autoral, 2022.

A Jwt é um token que representa nossa sessão nos sistemas de front-end. Ele é gerado pela API com um valor único, você pode adicionar informações como o ID e nome do usuário para ser recuperado no front, pois ele é uma concatenação de valores.

Agora, vamos acessar uma rota protegida na nossa API e alterar nosso _service_. Podemos usar essa informação protegida dentro da nossa aplicação.

![Fonte: Autoral, 2022.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814302582-XRcSSvmiSb.png "Fonte: Autoral, 2022.")

Fonte: Autoral, 2022.

**Conteúdo bônus**

**Tópicos avançados**

Para dar continuidade seria interessante também criar um Crud de produtos em conjunto com o que fizemos de usuário. No github, a seguir, vou complementar esse exemplo com um cadastro de produtos bem e uma listagem na home.

[https://github.com/FaculdadeDescomplica/pos-advanced-front-end](https://github.com/FaculdadeDescomplica/pos-advanced-front-end)  

Na branch main você consegue acessar o projeto completo com CRUD de Produtos e CRUD de Usuários.

No repositório do github, a seguir, [https://github.com/brunohauck/faculdade\_descomplica\_front-end](https://github.com/brunohauck/faculdade_descomplica_front-end) você encontrará todos os exemplos citados nessa disciplina e alguns conteúdos extras. 

![Figura 3 – Autoria própria.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814432341-e7TsHvbTs5.png "Figura 3 – Autoria própria.")

Figura 3 – Autoria própria.

Na figura acima podemos ver as branchs, conforme as vídeoaulas. Na branch final\_com\_back\_end\_producao vamos ter um exemplo completo para uma API em node JS de autoria própria que conecta em um banco de dados mongoDB, em que temos cadastro de usuários e de produtos.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir:

[https://github.com/FaculdadeDescomplica/pos-advanced-front-end](https://github.com/FaculdadeDescomplica/pos-advanced-front-end)

Referência Bibliográfica

Angular Docs. **Angular IO**, Disponível em: < [https://angular.io](https://angular.io/) >.(Acesso em 07/11/2022)

Angular Material Docs. **Angular Material**, Disponível em: < [https://material.angular.io](https://material.angular.io/) >. (Acesso em 07/11/2022)

RFC. **JSON Web Token (JWT).** Disponível em: <[https://www.rfc-editor.org/rfc/rfc7519](https://www.rfc-editor.org/rfc/rfc7519) >. (Acesso em 07/11/2022)

Medium. Nascimento. **Entendendo tokens JWT (Json Web Token).** Disponível em: < [https://medium.com/tableless/entendendo-tokens-jwt-json-web-token-413c6d1397f6](https://medium.com/tableless/entendendo-tokens-jwt-json-web-token-413c6d1397f6) >. (Acesso em 07/11/2022)

Medium. RFC. **JSON Web Tokens are an open, industry standard** [**RFC 7519**](https://tools.ietf.org/html/rfc7519) **method for representing claims securely between two parties.** Disponível em: < [https://jwt.io/](https://jwt.io/) >. (Acesso em 07/11/2022)