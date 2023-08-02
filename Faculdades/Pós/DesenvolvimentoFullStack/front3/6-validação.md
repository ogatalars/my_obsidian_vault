## Validação avançada de dados

**Introdução**

Vamos aprender a fazer validações avançadas nos formulários, assim como criar máscaras nos inputs. Também vamos criar um arquivo para validar um CPF e aplicar essa validação no formulário em conjunto com a máscara.

**Objetivos da aula**

-   Aprender a fazer validação avançada de dados.
-   Validadores personalizados.
-   Validar CPF.
-   Salvar os dados usando REST API.

**Resumo**

Como já temos nossos formulários, vamos adicionar novos campos em nosso objeto e adicionar máscaras. Para isso, será necessário adicionar as biblioteca ng-mask através do comando abaixo.

npm install --save ngx-mask

Agora, teremos que configurar a biblioteca e alterar nosso module principal adicionando o código abaixo no imports:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671809524841-jhVoZKf43W.png)

No link a seguir você consegue mais informações sobre o funcionamento da biblioteca:

[https://www.npmjs.com/package/ngx-mask](https://www.npmjs.com/package/ngx-mask) **(Acesso em 07/11/2022).**

Agora, iremos adicionar no nosso formulário o campo CPF:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671809567321-2dxPOTfNYi.png)

No nosso input adicionamos a máscara mask="000.000.000-00".

Vamos ter que criar uma classe para validar o dado do CPF, conforme mostra o código abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671809615670-4YJhDuSOvU.png)

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671809639536-OyAKz33yVV.png)

Em nosso componente alteramos a variável formBuilder fb:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671809733527-qNldmlwPLz.png)

Para a CNPJ, seguiremos a mesma lógica.

Agora, teremos que refatorar nosso formulário para salvar na API fake. Para isso, vamos alterar novamente o componente de cadastro:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671809699865-43L81W9zTL.png)

  
Nesse caso, a função addUser executa uma função no nosso service passando o objeto user como parâmetro e retorno e um observable do tipo user.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671809825321-1FV2OmYO2N.png)

**Conteúdo bônus**

**Tópicos avançados**

Você pode criar validações mais bem elaboradas, por exemplo, validar o CPF e CNPJ através de um REST API. Consultado dados no Serasa, você consegue fazer isso também para validar e consultar um CEP por exemplo.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir:

[https://github.com/FaculdadeDescomplica/pos-advanced-front-end](https://github.com/FaculdadeDescomplica/pos-advanced-front-end)

  
Referência Bibliográfica

Angular Docs. **Angular IO**, Disponível em: < [https://angular.io](https://angular.io/) >. Acesso em: 10, outubro e 2022. **(Acesso em 07/11/2022)**

Angular Material Docs. **Angular Material**, Disponível em: < [https://material.angular.io](https://material.angular.io/) >. **(Acesso em 07/11/2022)**