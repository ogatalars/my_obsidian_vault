**Introdução**

Notícias sobre ataques em sites ou programas, bem como vazamento e roubo de dados são cada vez mais frequentes. Brechas de segurança nas aplicações podem custar caro. Por isso, o tema segurança de software é fundamental.

O Spring Security é um framework que provê autenticação, autorização e proteção contra os ataques mais comuns. Com ele é possível proteger a aplicação de forma simples e eficiente.

**Objetivos da aula**

-   Conceitos de segurança;
-   Spring Security;
-   OAuth;
-   JWT.

**Resumo**

**Conceitos de segurança**

Autenticação é como se verifica a identidade de quem está tentando acessar um recurso privado da aplicação. Uma forma comum de autenticar usuários é solicitando login e senha. Uma vez autenticado, é possível saber a identidade do usuário e, então, conceder autorização ou não a ele.

Autorização é determinar quem tem permissão para acessar um conteúdo privado.

Ao levantar os requisitos de um sistema, uma das primeiras coisas a fazer é determinar os atores (usuários) e seus papéis (funções). Trazendo isso para o conceito de segurança, em muitos casos, a aplicação requer diferentes usuários (Fulano, Ciclano, etc) com diferentes funções (Administrador, Controlador etc). É disso que se trata Autenticação (quem é Fulano?) e Autorização (como Controlador, ele tem acesso a tal recurso?).

A segurança do software deve ser planejada desde o início e existem diversos fatores que determinam como ela deve ser implementada. Por exemplo, se é um software público, possui dados sensíveis, qual a infraestrutura usada, etc.

Porém segurança de software não está limitada somente a tecnologia usada, mas também a boas práticas. Todos os itens listados abaixo devem partir dos desenvolvedores:

-   Não expor informações na url.
-   Não expor informações desnecessárias nas respostas - Uma boa ideia é usar o padrão DTO (Data Transfer Object), onde o objeto enviado na requisição não é o mesmo que está salvo no banco de dados. Toda informação confidencial fica restrita dentro da aplicação, como senhas e dados de cartões.
-   Sempre salvar dados sensíveis criptografados no banco de dados.
-   Exigir dos usuários uma senha forte.

**Spring Security**

O Spring Security provê um suporte completo para autenticação e autorização. Ele possibilita proteger a aplicação, com autenticação nas requisições e autorização nos métodos. Isso quer dizer que é possível restringir o acesso em toda a aplicação de forma granular.

O Spring Boot Auto Configuration, que é ativado pela anotação @SpringBootApplication na nossa classe principal, automaticamente, habilita a configuração padrão do Spring Security criando um bean chamado springSecurityFilterChain. Ele é responsável por toda segurança (proteção das rotas, validação de usuários e senhas, redirecionamentos e muito mais).

Para configurarmos este bean, devemos criar uma classe e anotá-la com @EnableWebSecurity. Em seguida podemos alterar o bean springSecurityFilterChain criando o método filterChain da seguinte forma:

Figura 1 – Configurando o bean springSecurityFilterChain

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673341932-BHJeMwJWXR.png "Fonte: O autor.")

Fonte: O autor.

No exemplo da Figura 1 podemos notar o uso da anotação @EnableWebSecurity na linha 17, que é usado para habilitação recursos de segurança. Observe que o método recebe como parâmetro a variável http do tipo HttpSecurity, o qual usamos para fazer as principais configurações e devolver como retorno na linha 28 com http.build().

Com o propósito de demonstrar o funcionamento do Spring Security, nós desabilitamos o CSRF (Cross Site Request Forgery) na linha 22. Porém, em uma aplicação real isso não é recomendado se a API for exposta a usuários externos. Recomendo ler mais sobre o assunto. O Spring fornece uma explicação detalhada do problema em: <[https://docs.spring.io/spring-security/reference/reactive/exploits/csrf.html](https://docs.spring.io/spring-security/reference/reactive/exploits/csrf.html)\>. 

Na linha 23, usamos authorizeRequest() para listar todos os endpoints que serão configurados. Em seguida, dizemos que o endpoint “/arquivos/uploadFile” não precisará de autenticação (linha 24 - permitAll()) e que todos os demais precisam (linha 25). Por fim, na linha 27 indicamos o tipo de autenticação que iremos usar.

**OAuth**

OAuth é um padrão de autorização, usado para permitir que os usuários possam fazer login em sites de terceiros usando contas de provedores de identidade, como Google, Facebook, Slack etc. Ele se concentra na simplicidade do desenvolvedor, ao mesmo tempo que fornece fluxos de autorização específicos para aplicativos da Web, desktop, etc.

Para simplificar o entendimento de como todo esse processo de autorização funciona usando OAuth, vamos analisar a Figura 2:

Figura 2 – Fluxo autorização OAuth

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673388814-LWMWp5p29n.png "Fonte: O autor.")

Fonte: O autor.

a) O Usuário que queira usar a API, solicita autorização em uma plataforma, como o Google (ou seja, ele já está autenticado), através de uma tela de login da aplicação.

b) A plataforma envia a autorização com os dados deste usuário.

c) O Usuário solicita um token de acesso ao Authorization Server, que é responsável por gerenciar os acessos. No caso, usaremos o Auth0.

d) O Auth0 retorna o token de acesso JWT, o qual podemos usar para acessar recursos protegidos na nossa API.

e) Passamos o token JWT no header das nossas requisições para API.

f) A API, por sua vez, verifica se o token é válido. Se sim, retorna o recurso solicitado. Caso contrário, uma resposta HTTP 401 será retornada.

Os passos A e B não serão desenvolvidos aqui, pois cabe a uma aplicação Frontend implementar a tela de login e fazer a integração com a plataforma Auth0. Porém, iremos ver com mais detalhes a implementação dos demais passos para proteger nossa API.

**Auth0**

Auth0 é uma plataforma que fornece software com serviço (SAAS) com gerenciamento de acessos, usuários e autenticação. Ele disponibiliza alguns recursos, como Login universal, login único, autenticação multifator, entre outros. Para podermos usar os seus recursos, devemos fazer um cadastro na plataforma. Nela, podemos cadastrar usuários e definir suas funções, configurar nossas aplicações, APIs e muito mais.

Como nosso objetivo é proteger nossa API Spring, devemos criar uma API na plataforma, que irá fazer referência a nossa API Spring. Ao criarmos uma API na plataforma Auth0, devemos fornecer um identificador único para nossa API Spring, que chamaremos de _audience_ e, ao finalizar o cadastro, teremos acesso a uma URI única, que também precisaremos para configurar nossa API Spring.

Nosso ressource deve ficar desta forma:

Figura 3 – Configurando Auth0 no ressource.

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673430120-w6PN33kJXA.png "Fonte: O autor.")

Fonte: O autor.

É muito importante que, ao definirmos nossa propriedade issuer-uri, utilizemos https:// no início e / no final, senão teremos problema ao tentarmos fazer a integração.

Agora podemos importar a dependência necessária, que é o spring-boot-starter-oauth2-resource-server:

Figura 4 – Dependência OAuth2

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673458662-TDEEfZWQBS.png "Fonte: O autor.")

Fonte: O autor.

Para fazer a integração de nossa API com o Auth0 temos que seguir os seguintes passos:

1\. Validar o identificador único da API que definimos no Auth0 que chamamos de _audience_. Esse identificador virá dentro do token JWT, então, devemos criar uma classe que vai pegar esse atributo e comparar se ele é o mesmo que definimos no resource.

2\. Devemos criar um método que decodifica o token JWT, uma vez que ele é codificado.

3\. Devemos adicionar mais uma camada de configuração no método filterChain: mudar nosso tipo de autenticação de Basic para JWT.

Com isso, nosso fluxo está completo:

-   O usuário irá pegar um token JWT válido no Auth0
-   O usuário deverá passar esse token JWT no header das requisições HTTP feitas para a nossa API.
-   A nossa API irá validar esse token, se tiver tudo certo irá retornar o recurso solicitado.

**Token JWT**

JSON Web Token (JWT) é um padrão aberto que define uma maneira compacta e independente de transmitir informações com segurança entre as partes como um objeto JSON. Essas informações podem ser verificadas e confiáveis porque são assinadas digitalmente (quando configuramos uma API dentro do Auth0, tínhamos uma opção de selecionar o algoritmo de assinatura).

Os JWTs são úteis em processos de autenticação, quando o usuário já está logado, cada requisição subsequente deve conter um JWT, permitindo que o usuário acesse as rotas, serviços e recursos no servidor com as informações desse token. Outra forma interessante de usar JWT é na troca segura de informações entre partes. Porque JWTs podem ser assinados, por exemplo, usando par de chaves pública/privada, nós podemos ter certeza de que quem está enviando é quem diz ser.

**Conteúdo bônus**

**Tópicos avançados**

O interessante do Spring Security é que ele foca em deixar a vida dos desenvolvedores melhor, tornando o processo de configurar nossa aplicação muito simples. Porém, isso tem um custo, pois com toda essa abstração podemos não entender bem como todo o processo funciona. Por isso, é recomendado um estudo de como o processo de segurança funciona, e o Spring fornece uma documentação excelente sobre isso em: <[https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html](https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html)\>. 

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Strategies-BackEnd](https://github.com/FaculdadeDescomplica/Strategies-BackEnd)

Referência Bibliográfica

Hello Spring Security. **Spring.io**, 2022. Disponível em <[https://docs.spring.io/spring-security/reference/servlet/getting-started.html](https://docs.spring.io/spring-security/reference/servlet/getting-started.html)\>.Acesso em 26/01/2023

Cross Site Request Forgery (CSRF) for WebFlux Environments. **Spring.io**, 2022. Disponível em <[https://docs.spring.io/spring-security/reference/reactive/exploits/csrf.html](https://docs.spring.io/spring-security/reference/reactive/exploits/csrf.html)\>. Acesso em 26/01/2023

OAuth 2.0 Resource Server. **Spring.io**, 2022. Disponível em <[https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html](https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html)\>. Acesso em 26/01/2023

Spring Security Basic Authentication. **Baeldung**, 2022. Disponível em <[https://www.baeldung.com/spring-security-basic-authentication](https://www.baeldung.com/spring-security-basic-authentication)\>. Acesso em 26/01/2023

A Guide to CSRF Protection in Spring Security. **Baeldung**, 2022. Disponível em <[https://www.baeldung.com/spring-security-csrf](https://www.baeldung.com/spring-security-csrf)\>. Acesso em 26/01/2023

Spring Boot API: Authorization. **Auth0**, 2022. Disponível em <[https://auth0.com/docs/quickstart/backend/java-spring-security5/01-authorization#create-an-api](https://auth0.com/docs/quickstart/backend/java-spring-security5/01-authorization#create-an-api)\>. Acesso em 26/01/2023

What is JSON Web Token? **JWT.io**, 2022. Disponível em <[https://jwt.io/introduction](https://jwt.io/introduction)\>. Acesso em 04 de Janeiro de 2023.