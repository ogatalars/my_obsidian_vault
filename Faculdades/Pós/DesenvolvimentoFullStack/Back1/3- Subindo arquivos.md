**Introdução**

Aplicações API RESTful possibilitam que possamos trocar informações entre aplicações. Essas informações podem ser transferidas em alguns formatos, os dois mais conhecidos são json e xml. Porém, nada nos impede de transferir outros formatos de arquivos, como por exemplo um arquivo mp4 ou pdf.

**Objetivos da aula**

-   Criar exceções personalizadas.
-   Como configurar e usar variáveis de ambiente
-   Como fazer upload e download de arquivos

**Resumo**

**Criando nossas próprias exceções**

É uma boa prática de desenvolvimento criar as próprias exceções que o sistema irá usar. A primeira vantagem é fazer separação entre as exceções que já existem na linguagem de programação usada com aquelas que o sistema usa.

Uma segunda vantagem é que podemos customizar nossas exceções para armazenar valores que podem ser usados em um segundo momento para gerar logs.

E por fim, queremos ter nossas próprias exceções para que ao acontecer determinado erro, conseguiremos saber de imediato qual o problema ocorrido. Desta forma evitamos usar exceções genéricas que sem um contexto não dizem nada.

Para criar nossa própria exceção, devemos criar nossa classe de exceção e estendê-la a uma exceção já existente, como podemos ver na figura abaixo:

Figura 1 – Exceção customizada

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674668513901-uJSLotg1aj.png "Fonte: O autor.")

Fonte: O autor.

A classe MeuArquivoNaoEncontradoException, além de estender a classe RuntimeException, é anotada com @ResponseStatus do Spring.

Quando um endpoint retorna com sucesso o resultado de uma requisição, o Spring fornece uma resposta HTTP 200 (OK). Se quisermos especificar o status de resposta de um método do controlador, podemos marcar esse método com @ResponseStatus. Esta notação pode receber dois parâmetros, o código da resposta e o motivo. No exemplo acima, caso a exceção seja lançada, o Spring retornará uma resposta HTTP 404 (NOT\_FOUND) com a mensagem “Arquivo não encontrado”.

**Configurando variáveis de ambiente**

Aplicações Spring possuem um arquivo de configuração chamado application.properties que fica localizado dentro da pasta resources. Este arquivo é responsável por armazenar as variáveis de ambiente da aplicação.

Variáveis de ambiente são variáveis que podem mudar dependendo do ambiente onde a aplicação está sendo executada. Elas trazem uma flexibilidade a nossa aplicação, pois podemos atualizá-las enquanto o sistema estiver executando.

Existem algumas maneiras de usarmos uma variável de ambiente dentro do nosso sistema em tempo de execução, uma delas é usando a notação @Value.

A notação @Value é usada para injetar um valor de uma variável de ambiente dentro de nosso código. Ela recebe um único parâmetro do tipo String que possui a seguinte sintaxe: “${nome.da.variavel}”. Veja o exemplo na imagem a seguir:

Figura 2 – Variável de ambiente

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674668553601-FgJ7v3SI4Q.png "Fonte: O autor.")

Fonte: O autor.

É importante ressaltar que essa notação somente funcionará dentro de uma classe gerenciada pelo Spring. Note que na Classe FileStoregeProperties está anotada com @Componet, o que a torna uma Bean do Spring.

Existem variáveis de ambiente que são usadas pelo Spring internamente. Listo aqui algumas usadas para podermos habilitar o upload de arquivos

-   spring.servelet.muiltipart.enabled: responsável por habilitar o upload de arquivos usando a classe MultipartFile.
-   spring.servelet.multipart.max-file-size: sempre que habilitamos o upload de arquivo devemos também especificar o tamanho do arquivo, pois o valor padrão é muito pequeno, por questões de segurança.
-   spring.servelet.muiltipart.max.request-size: mais uma variável de segurança, onde nós determinamos o tamanho máximo que um request para nossa API pode ter.

**Aprendendo a fazer upload e download de arquivos**

O Spring possui uma classe específica para usarmos para fazer o upload de arquivos, essa classe é a MultipartFile, que nada mais é que uma representação de um arquivo que queremos enviar para o servidor. Essa classe possui alguns atributos que são úteis quando trabalhamos com arquivos, como por exemplo o nome do arquivo e o tamanho.

**Conteúdo bônus**

**Tópicos avançados**

Códigos de respostas HTTP são muito importantes para todos que trabalham diretamente ou indiretamente com APIs RESTful, pois é através deles que conseguimos identificar se um determinado problema está do lado do servidor ou do cliente.

Eles indicam quando uma requisição finalmente foi completada. As respostas são organizadas em um grupo de cinco classes, sendo elas:

1.  Resposta de informação (100 - 109)
2.  Resposta de sucesso (200 - 209)
3.  Mensagem de redirecionamento (300 - 399)
4.  Resposta de erro do lado do cliente (400 - 499)
5.  Resposta de erro do lado do servidor (500 - 599)

Alguns exemplos são a resposta 200 que indica que a requisição completou com sucesso, resposta 201 que um recurso foi criado com sucesso, 404 diz que o recurso não foi encontrado e 500 indica erro no servidor.

Para saber mais sobre cada uma delas e quais são a mais usadas dê uma olhada na documentação do Mozilla que se encontra em <[https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)\>. 

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Strategies-BackEnd](https://github.com/FaculdadeDescomplica/Strategies-BackEnd)

Referência Bibliográfica

Mauda. Como criar sua própria exception. **Mauda**, 2021. Disponível em <[http://www.mauda.com.br/?p=2315](http://www.mauda.com.br/?p=2315)\>. Acesso em 23 de Dezembro de 2022.

Using Spring @ResponseStatus. **Baeldung**, 2021. Disponível em <[https://www.baeldung.com/spring-response-status](https://www.baeldung.com/spring-response-status)\>. Acesso em 23 de Dezembro de 2022.

HTTP response status. **Mozilla**, 2022 Disponível em <[https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)\>. Acesso em 23 de Dezembro de 2022.