**Introdução**

Vamos criar componentes avançados em Angular como datepicker, tables e modais. Além de criar uma lista com paginação e ordenação a partir de um conjunto de dados vindos da API.

**Objetivos da aula**

-   Aprender componentes avançados em Angular, como datepicker.
-   Tabelas dinâmicas com paginação.
-    Modais.

**Resumo**

Já que temos nosso formulário vamos adicionar um datepicker, ou seja, um selecionador de data do Angular material em nosso formulário de cadastro como um campo de data de nascimento.

![Fonte: Autoral, 2022.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671812756217-3L99Ysrs1q.png "Fonte: Autoral, 2022.")

Fonte: Autoral, 2022.

Agora, vamos alterar também nosso objeto:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671812780245-DkcEzawsvP.png)

E também nosso FormBuilder:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671812814110-KLADS5nMen.png)

Nos aprofundaremos um pouco mais sobre os Layouts em Angular Material e criaremos um modal. Com esse intuito, criamos um componente denominado modal e dentro desse componente criamos outro que representará o modal, assim como seu HTML.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671812872277-kk5evzEz7u.png)

Criaremos um HTML para esse modal, como o código a seguir:

![Fonte: Autoral, 2022.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671812987965-sDprff4BwF.png "Fonte: Autoral, 2022.")

Fonte: Autoral, 2022.

Criaremos uma lista dinâmica com paginação usando o componente do Angular Material de tabela de lista. A seguir, o comando cria uma página com uma tabela com as configurações predefinidas.

ng generate @angular/material:table listar

Agora, vamos alterar os dados estáticos para dados dinâmicos vindo da nossa API, além de alterar o arquivo listar.component.ts:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671813129469-lsntEl9Db5.png)

![Fonte: Autoral, 2022.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671813152707-wGdGXzjYw8.png "Fonte: Autoral, 2022.")

Fonte: Autoral, 2022.

Vamos alterar também o HTML:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671813212699-GW4WfadTxo.png)

![Fonte: Autoral, 2022.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671813232703-TR33HEhOQb.png "Fonte: Autoral, 2022.")

Fonte: Autoral, 2022.

**Conteúdo bônus**

**Tópicos avançados**

Ao visitar a documentação oficial do Angular material, podemos perceber que existem vários componentes prontos e comandos de geradores de templates denominados schematics. Você pode verificar a documentação completa no link abaixo:  [https://material.angular.io/guide/schematics](https://material.angular.io/guide/schematics)  

Seguem alguns exemplos:

**Fomulário de Enderesso**

ng generate @angular/material:address-form <component-name>

**Navegação que gera a barra de navegação em conjunto com Menu**

ng generate @angular/material:navigation <component-name>

**Tabela com paginação**

ng generate @angular/material:table <component-name>

**Árvore de navegação**

  ng generate @angular/material:tree <component-name>

**Drag and Drop**

ng generate @angular/cdk:drag-drop <component-name>

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir:

[https://github.com/FaculdadeDescomplica/pos-advanced-front-end](https://github.com/FaculdadeDescomplica/pos-advanced-front-end)

Referência Bibliográfica

Angular Docs. **Angular IO**, Disponível em: < [https://angular.io](https://angular.io/) >. **(Acesso em 04/11/2022)**

Angular Material Docs. **Angular Material**, Disponível em: < [https://material.angular.io](https://material.angular.io/) >. **(Acesso em 04/11/2022)**