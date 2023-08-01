## Formulários

**Introdução**

Vamos criar formulários reativos e validar os campos desses formulários, Além disso, vamos adicionar os dados em um localStorage.

**Objetivos da aula**

-   Aprender a criar formulários reativos e validar o mesmo.
-   Salvar os dados no localStorage.

**Resumo**

Agora, é necessário alterar nossos dois formulários que criamos para transformar os mesmos em reativos. Vamos iniciar pelo formulário de cadastro fazendo as validações dos mesmos e habilitando o botão de salvar à medida que todas as validações do formulário sejam verdadeiras.

Teremos que adicionar as informações do form control em todos os campos.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671806537838-zQ5noR0PZu.png)

Os dados formControlName deve ser o mesmo declarado no seu componente, conforme o código abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671806702490-FVnZsKvb7S.png)

  
Para configurar nosso formulário reativo, criamos um objeto do tipo formBuild em nosso construtor e uma configuração onde vamos determinar qual campo será obrigatório.  
 

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671806731246-SYQBxNxecQ.png)

A partir do momento que todos os campos forem preenchidos, o botão de cadastrar é habilitado através da verificação addressFrom.valid. Se o campo disabled for diferente do válido, ele mantém o botão desabilitado, ou seja, não é possível clicar e executar a função submit do formulário tornando reativo.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671806813301-TE0b6BOc0p.png)

Segue nosso HTML do formulário:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671806903924-HLUeJk3Dh9.png)

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671806923596-1nZLAfxQEf.png)

Agora vamos salvar os dados do formulário em nosso localStorage para posteriormente recuperar o dado no formulário de edição.

É possível através da função JSON.stringify(this.user) adicionar um objeto ao localStorage.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671806983301-FHU1jZ4CwA.png)

Neste momento, vamos criar um novo componente, editá-lo, copiar todos os códigos do componente de cadastro, fazer uma pequena alteração em nosso construtor para recuperar a informação do local storage e atribuir esses dados a um objeto do tipo user. Esses dados serão preenchidos, pois na declaração do FormBuilder adicionamos os valores iniciais, conforme o objeto abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671807047821-vikvjmv3bG.png)

Como o objeto User está com os dados recuperados do storage, ele é preenchido com o último dado feito no cadastro de usuário. Posteriormente, vamos recuperar e cadastrar essas informações em nossa FAKE Rest API.

**Conteúdo bônus**

**Tópicos avançados**

Existem duas maneiras de validar os formulários em Angular: uma delas é a forma reativa e a outra é validar somente quando dermos o submit, usando ngModel. Essa validação não é reativa, porém conseguimos fazer algumas validações, como mostra o código abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671807094252-gN2je7JLsD.png)

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir:

[https://github.com/FaculdadeDescomplica/pos-advanced-front-end](https://github.com/FaculdadeDescomplica/pos-advanced-front-end)

Referência Bibliográfica

Angular Docs. **Angular IO**, Disponível em: < [https://angular.io](https://angular.io/) >. **(Acesso em 07/11/2022)**

Angular Material Docs. **Angular Material**, Disponível em: < [https://material.angular.io](https://material.angular.io/) >. **(Acesso em 07/11/2022)**