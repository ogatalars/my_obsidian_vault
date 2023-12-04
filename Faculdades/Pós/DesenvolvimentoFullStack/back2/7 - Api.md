**Introdução**

A construção de APIs e aplicações onde o Backend está integrando com o FrontEnd sempre possuem desafios e a possibilidade de inserir novas funcionalidades. Nesse módulo, vamos construir uma nova funcionalidade e visualizar a aplicação funcionando com essa nova funcionalidade além do CRUD já implementado.

**Objetivos da aula**

O objetivo desse módulo é entender como é utilizada uma branch de funcionalidade, além da implementação de uma nova funcionalidade e o teste da aplicação utilizando Postman.

**Resumo**

Para começar a alteração na aplicação que irá fazer a gravação de arquivo no banco, precisamos atualizar o modelo do usuário e também o que o _endpoint_ recebe na requisição para que seja possível enviar arquivo.

Então, devemos modificar o arquivo User.js para incluir um novo campo chamado "profile\_picture":

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922287272-DMpCDbg3qs.png)

E também adicionar o novo atributo no userModel no UserController.js, tanto no método /addUser quanto no /updateUser:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922305621-aqSTJag5ou.png)

No controlador da entidade usuário é onde precisamos ter mais atenção e cuidado para acrescentar todas as alterações. Para essa implementação, vamos acrescentar ao projeto da aplicação as dependências do módulo multer e process.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922335769-iErBzZg0jX.png)

E após a instalação, precisa-se adicionar as dependências ao arquivo UserController.js. Apenas essa entidade será trabalhada já que a funcionalidade que está sendo implementada é para atualização e envio de imagem na tela de cadastro do usuário e não do curso ou avaliação por exemplo.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922356172-jwipSclXz5.png)

Ainda no arquivo controlador para a entidade usuário/aluno, precisamos alterar as funções de adicionar e atualizar usuário. Precisamos que as URLs que vão utilizar a nova funcionalidade consigam fazer uma rota de envio, recebimento e salvamento da imagem, e para isso acontecer é necessário acrescentar duas novas variáveis storage para armazenamento e upload para envio:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922377165-da8AF5kijw.png)

Lembrete e observação sobre essa funcionalidade: o que acontece aqui é que não salvamos o arquivo de fato no banco de dados, já que ao armazenarmos imagens ou dados binários no banco de dados, o acesso pode ser limitado ao código da aplicação e dos privilégios do sistema de arquivos que não estão disponíveis de forma escalar. Por isso, neste caso, iremos armazenar o caminho da imagem, não ela de fato como um dado binário no banco.

Para que os métodos de atualização e adição de usuário possam ter as melhores práticas de mercado, é recomendado ter o mínimo de tratamento de erro. E a ação de enviar um arquivo, pode gerar erros inesperados. Nesta aplicação, utilizamos um tratamento simples que responde uma mensagem direta. Então, adicione dentro de cada função (addUser e updateUserById) o teste de caso dê errado conforme o exemplo abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922406533-3kA164FV8L.png)

Atenção: para validar essa implementação, é necessário acompanhar a prática na vídeo-aula.

**FrontEnd**

E para o FrontEnd, para fazer as adaptações necessárias é preciso seguir a sequência de atualizar o Typescript para o formulário e o HTML para a aparência da tela, e atenção: essa alteração não é aplicada em todas entidades da aplicação, apenas para usuário/aluno, que é onde estamos fazendo a compatibilidade das alterações realizadas no BackEnd, e também para o funcionamento correto da funcionalidade.

No arquivo app.module.ts adicione o HTTPClientModule nas dependências:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922471592-YqHDObM2aJ.png)

Ainda no mesmo arquivo acrescente o HTTPClientModule na lista de imports do @NgModule para funcionamento correto da aplicação.

Agora, para sempre manter a compatibilidade com o BackEnd, vá ao arquivo de serviço para o usuário, “user.service.ts” e altere método que realiza a ação de POST para criar a configuração com o header de conteúdo multipart/form-data e altere a chamada para enviar o parâmetro config.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922495606-HsPrQGkugp.png)

E no HTML, onde vai acontecer a alteração do formulário na tela, é necessário adicionar as 3 tags que serão responsáveis por criar o botão de envio do arquivo.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922525955-ezrGyuJwvp.png)

Agora, no user-form.ts, é preciso trazer as ações para a funcionalidade. Primeiramente, você deve adicionar o domSanitizer no construtor. O Dom Sanitizer é um serviço em Angular que ajuda a evitar vulnerabilidades de segurança em aplicações da Web. Ele é responsável por sanitizar (ou seja, limpar) dados não confiáveis que podem ser fornecidos por usuários mal-intencionados, antes de inseri-los no DOM (Modelo de Objeto do Documento). Isso ajuda a evitar ataques XSS (_Cross-Site Scripting_) em que um invasor tenta injetar scripts maliciosos em uma página da web para obter acesso a informações confidenciais ou para danificar o site. O Dom Sanitizer pode ser usado em Angular para evitar vulnerabilidades de segurança ao trabalhar com conteúdo dinâmico ou HTML que vem de fontes externas, como APIs ou formulários.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922555169-WL0IhSZPdN.png)

Ainda no mesmo arquivo, precisamos criar a função onSelectNewFile() para selecionar um arquivo e alterar a URL da imagem.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922575876-004ZRpBEFm.png)

Para que os dados recebidos na tela sejam enviados para o BackEnd é necessário atualizar a forma com que os dados são tratados, ao invés de utilizar um JSON como antes, vamos enviar um formData e enviar o arquivo através dele, e essa é a montagem do formData:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922598515-D7mvnXsaVF.png)

Outro detalhe é alterar o campo “data” das requisições /updateUserById e /addUser para incluir o formData criado. Adicione parâmetro na função onsubmit().

Essas alterações fizeram parte da parte do POST que envia um novo cadastro de usuário, para a atualização de uma imagem, precisamos alterar o PUT deste mesmo arquivo de serviço para criar uma configuração com o header da mesma forma que foi feita anteriormente:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922627048-0i25Fr7HfF.png)

E também devemos acrescentar a função getImage() que será responsável por aguardar o envio do arquivo.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922654148-il4OsOF8mg.png)

Para que a função funcione como esperado, além de acrescentar a chamada no HTML, é preciso chamá-la dentro do subscriber do construtor assim:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922676266-nRXEQkj8Qh.png)

Atenção: para validar essa implementação, é necessário acompanhar a prática na vídeo-aula.

**Postman**

O Postman é uma ferramenta de desenvolvimento de API que permite aos desenvolvedores enviar e receber solicitações HTTP, testar e depurar suas APIs de maneira mais fácil e eficiente. Com o Postman, podemos enviar solicitações HTTP para suas APIs, definir os cabeçalhos de solicitação, os parâmetros de consulta, o corpo da solicitação e analisar a resposta da API para garantir que ela esteja funcionando corretamente. Além disso, essa ferramenta é ótima para validar requisições de APIs públicas como a do Google Maps e entender na prática as diferenças existentes em versão de APIs.

O versionamento da API é importante porque as APIs evoluem com o tempo e, portanto, podem ter mudanças significativas em sua estrutura, funcionalidades e comportamento. É importante manter o controle das diferentes versões da API para que os usuários possam atualizar suas integrações sem quebrar suas funcionalidades existentes. O versionamento da API pode ser implementado de várias maneiras, mas geralmente envolve a inclusão do número de versão na URL da API ou nos cabeçalhos da solicitação. Por exemplo, a URL de uma API v1 pode ser "https://api.exemplo.com/v1/" e a URL de uma API v2 pode ser "https://api.exemplo.com/v2/". O versionamento de API, hoje, não é padronizado. Não existe uma recomendação de boas práticas como as linguagens de programação, depende da arquitetura do código e da decisão do time de desenvolvimento.

**Como aplicar na prática o que aprendeu**

Para praticar o que aprendeu, além de implementar a alteração na sua aplicação, recomendo realizar novos testes e variados testes utilizando o navegador e a ferramenta Postman. Além disso, incluir novas funcionalidades na sua aplicação, principalmente depois de ter uma versão estável na branch principal, pode ser uma ótima prática para utilizar o Git Flow. A recomendação é estudar com os sites [Angular University](https://blog.angular-university.io/angular-file-upload/) e o [Acervo Lima](https://acervolima.com/upload-de-arquivo-angular/).

Essa disciplina tem um repositório no Github que será utilizado para toda a parte prática: [FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd).

**Conteúdo bônus**

**Tópicos avançados**

Como uma oportunidade de evolução do código trabalhado, recomendo estudar o atributo “fileFilter” da propriedade “diskStorage” do multer para filtrar e aplicar regras sobre os arquivos recebidos. A propriedade _fileFilter_ é opcional e permite definir uma função que verifica se o arquivo é aceito. A função deve receber o objeto de solicitação, o arquivo e um callback. Por exemplo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681922813998-pN0eN9jZXT.png)

Nesse exemplo, a função de filtro verifica se o arquivo é uma imagem PNG. Se não for, um erro será retornado. Com esse exemplo, o desafio é você fazer a integração desta propriedade com essa função na sua aplicação.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: 

[https://github.com/FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd)

Referência Bibliográfica

BOUCHEFRA, Ahmed. **Working with FormData in Angular 15 | Techiediaries**. Techie Diaries, 2022. Disponível em: <[https://www.techiediaries.com/angular-formdata/](https://www.techiediaries.com/angular-formdata/)\>. Acesso em: 30 mar. 2023.

MATOSO, Douglas. **Upload De Arquivos No Node.js Com Multer**. Web Dev Drops, 2020. Disponível em: <[https://www.webdevdrops.com/upload-arquivos-node-js-multer/](https://www.webdevdrops.com/upload-arquivos-node-js-multer/)\>. Acesso em: 30 mar. 2023.

RIBAS VISMARI, Marcelo. **Upload De Imagens Ou Arquivos Utilizando Multer - Node.js Express**. Console. Log, 2021. Disponível em: <[https://consolelog.com.br/upload-de-arquivos-imagens-utilizando-multer-express-nodejs/](https://consolelog.com.br/upload-de-arquivos-imagens-utilizando-multer-express-nodejs/)\>. Acesso em: 30 mar. 2023.

SILVA, Thiago. **Node - Salvando Imagens Em Banco De Dados E Convertendo Em Imagens Novamente**. Thiago Silva - @thihenos no Medium, 2020. Disponível em: <[https://thihenos.medium.com/node-salvando-imagens-em-banco-de-dados-e-convertendo-em-imagens-novamente-1a304880f285](https://thihenos.medium.com/node-salvando-imagens-em-banco-de-dados-e-convertendo-em-imagens-novamente-1a304880f285)\>. Acesso em: 28 mar. 2023.