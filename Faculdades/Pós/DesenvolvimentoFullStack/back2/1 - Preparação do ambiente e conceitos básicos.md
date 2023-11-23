**Introdução**

Preparação do ambiente é uma etapa importante para iniciar qualquer projeto de desenvolvimento de software. É necessário instalar e configurar as ferramentas necessárias para o desenvolvimento, como linguagens de programação, frameworks, banco de dados, IDEs, entre outras. Nesse módulo, vamos abordar alguns conceitos básicos importantes para o desenvolvimento de software como linguagem de programação, framework, IDE, controle de versão e testes.

**Objetivos da aula**

O objetivo deste módulo é conhecer e configurar as ferramentas utilizadas no desenvolvimento da aplicação BackEnd. É esperado que você saiba os conceitos básicos para uma preparação do ambiente e também **o que é** e **como instalar**:

1.  Node.js;
2.  Git, Git Bash, GitHub e Sourcetree
3.  Postman, IDE com plugins e navegador de internet.

**Resumo**

**Node**

Vamos começar com a definição de Node.js. Antes de falar do Node, preciso te contextualizar contando que ele é um _framework_ para a linguagem de programação JavaScript, o que antes era exclusivo das linguagens de programação como PHP, Ruby e Python. A linguagem Javascript foi criada em 1995, e se tornou a linguagem padrão dos navegadores e, consequentemente, da Web para o desenvolvimento _client-side_. O Node.js pode ser definido como um ambiente de execução Javascript _server-side_.

Com o Node.js, os desenvolvedores podem escrever códigos em Javascript tanto para o lado do cliente quanto para o servidor, o que facilita a comunicação entre as duas partes e aumenta a eficiência na execução de tarefas na web. O Node.js também é uma plataforma de software livre e de código aberto, o que significa que qualquer pessoa pode usá-lo e contribuir com o seu desenvolvimento.

E o que significa esse tal de ‘_client-side_’ e ‘_server-side_’?

_Server-side_ quer dizer que vai escrever um código onde o servidor vai processá-lo e então vai mandar para o seu navegador a resposta. Ele lida com tarefas mais complexas, como processamento de banco de dados, autenticação de usuários, entre outras tarefas relacionadas à lógica de negócios.

_Client-side_ são linguagens onde apenas o seu navegador vai entender. Quem vai processar essa linguagem não é o servidor, mas o seu navegador. Ele geralmente é responsável por lidar com a interface do usuário, processar e validar formulários e realizar animações.

**Node: é uma plataforma de desenvolvimento de software que permite executar código JavaScript fora do navegador. Com o Node, é possível construir aplicações de backend, CLI, entre outros.**

Para realizar a instalação no seu computador, acesse o link da documentação para download: [Download | Node.js](https://nodejs.org/pt-br/download), identifique seu sistema operacional e opte pela última versão LTS.

Uma versão LTS significa, do inglês: _Long Term Support_, e do português: suporte de longo prazo, então você terá maior estabilidade por um longo período de tempo.

Ao baixar o arquivo e abrir o instalador msi, você deve seguir as instruções na tela para concluir a instalação. Certifique-se de ler cuidadosamente cada etapa e aceitar os termos e condições antes de prosseguir com a instalação. Se você já tiver a versão mais recente instalada, o instalador deve informá-lo e encerrar o processo. Caso contrário, a instalação deve prosseguir normalmente. Boa sorte!

Para verificar a versão do Node.js instalada no seu computador, basta abrir o terminal e digitar o comando "node --version" (sem aspas). Isso deve retornar a versão do Node.js instalada em seu computador.

Para criar o nosso primeiro "Hello World" em Node.js, siga os seguintes passos:

1- Abra um editor de texto (como o Bloco de Notas, por exemplo) e digite o seguinte código:

2- Salve o arquivo com o nome "hello.js" em uma pasta de sua escolha.

3- Abra o terminal e navegue até a pasta onde o arquivo "hello.js" foi salvo.

4- Digite o seguinte comando no terminal:

5- Isso deve exibir a mensagem "Hello World" no terminal.

Parabéns, você acabou de criar e executar seu primeiro programa em Node.js! Esse é apenas o começo, existem muitas possibilidades com o Node.js.

**Git e Git Bash**

O que é GIT? É um projeto de código aberto e com manutenção ativa criado pelo engenheiro de software Linus Torvalds, conhecido por ter desenvolvido, também, o núcleo Linux. O GIT é um Sistema de Controle de Versões Distribuído — ou DVCS, do inglês _Distributed Version Control System_.

O Git é amplamente utilizado no desenvolvimento de software para gerenciar e controlar as alterações feitas em um projeto, permitindo que várias pessoas trabalhem no mesmo projeto simultaneamente, sem sobrescrever o trabalho de outras pessoas. Ele mantém um histórico completo de todas as alterações feitas em um projeto, permitindo que as versões anteriores sejam restauradas e comparadas.

Além disso, o Git se tornou uma das ferramentas mais populares e poderosas para gerenciamento de código-fonte e colaboração em equipe. O Git pode ser usado para registrar edições de **qualquer** tipo de arquivo, incluindo documentos de texto, planilhas e até mesmo imagens e vídeos. O Git oferece um conjunto robusto de ferramentas para gerenciamento de código e colaboração, o que o torna uma das ferramentas mais populares e amplamente usadas na indústria de desenvolvimento de software.

**Git: é um sistema de controle de versão distribuído usado para rastrear alterações no código-fonte durante o desenvolvimento de software.**

A recomendação é instalar a versão _standalone\*_ do instalador e escolher a versão que melhor atende o seu computador. Para instalar Git no Windows:

1.  Acesse o site oficial do Git em [https://git-scm.com/download/win](https://git-scm.com/download/win).
2.  Na seção "Downloads", clique no botão de download correspondente à versão do seu sistema operacional (32 ou 64 bits).
3.  Quando o download terminar, clique duas vezes no arquivo baixado para iniciar a instalação.
4.  Na primeira tela do assistente de instalação, clique em "Próximo".
5.  Leia e aceite os termos da licença de uso do Git e clique em "Próximo".
6.  Escolha o diretório de instalação do Git e clique em "Próximo".
7.  Escolha os componentes que deseja instalar e clique em "Próximo". Se você não tiver certeza do que escolher, pode manter as opções padrão.
8.  Escolha um editor de texto para o Git e clique em "Próximo". Se você não tiver preferência, pode manter a opção padrão ("Use o Vim como editor padrão do Git").
9.  Escolha como deseja usar o Git a partir do prompt de comando e clique em "Próximo". Se você não tiver certeza do que escolher, pode manter a opção padrão ("Usar o Git Bash como terminal padrão do Git"). **Vamos usar o Git Bash como terminal padrão daqui para frente nessa disciplina.**
10.  Escolha como deseja tratar as linhas finais e clique em "Próximo". Se você não tiver certeza do que escolher, pode manter a opção padrão ("Checkout do Windows como está, commit Unix-style line endings").
11.  Escolha como deseja tratar a compatibilidade com o console e clique em "Próximo". Se você não tiver certeza do que escolher, pode manter a opção padrão ("Use MinTTY (o terminal padrão do Git)").
12.  Escolha como deseja tratar a inclusão de ícones no menu Iniciar e clique em "Próximo". Se você não tiver certeza do que escolher, pode manter a opção padrão ("Não criar um ícone no menu Iniciar").
13.  Escolha se deseja criar atalhos para o Git no desktop e/ou no menu Iniciar e clique em "Próximo". Se você não tiver certeza do que escolher, pode manter as opções padrão.
14.  Escolha como deseja usar o Git a partir de outros softwares e clique em "Próximo". Se você não tiver certeza do que escolher, pode manter a opção padrão ("Usar o Git apenas a partir do prompt de comando do Git Bash").
15.  Clique em "Instalar" para iniciar a instalação do Git.
16.  Aguarde até que a instalação seja concluída e clique em "Concluir" para finalizar o assistente de instalação.

Para verificar a versão no seu computador, basta abrir o Git Bash, terminal (ou _prompt_ de comando, no caso do Windows) e digitar o comando “git --version” sem as aspas. Se aparecer a versão do Git instalada, significa que deu tudo certo. Se não aparecer a versão, reinstale o Git.

_\*A versão standalone do instalador é uma boa opção porque ela inclui todos os componentes necessários para usar o Git, além de permitir que você escolha a versão mais adequada para o seu sistema operacional._

**Agora, falando em Git Bash!**

O Git Bash é o aplicativo para ambientes do Microsoft Windows que oferece a camada de emulação para a experiência de linha de comando Git. Bash é acrônimo para "_Bourne Again Shell_". Bash foi escrito para o Projeto GNU por Brian Fox. É chamado de _Bourne again shell_ por várias razões, a primeira sendo que é a versão de código aberto da Bourne Shell e a segunda como um trocadilho com o conceito de nascer de novo. Seu acrônimo também é uma descrição do que o projeto fez, que foi juntar os recursos sh, csh e ksh. Desenvolvido por Stephen Bourne no Bell Labs, foi um substituto para o Shell Thompson, cujo arquivo executável tinha o mesmo nome: sh. _“Shells”_ são aplicativos terminais usados como interface em sistemas operacionais por meio de comandos gravados. O Shell é o padrão popular no Linux e no macOS. O Bash tem uma sintaxe de linha de comando comum e pode executar scripts de shell e outras tarefas automatizadas.

O Git Bash fornece aos usuários do Windows uma experiência semelhante à de um ambiente Unix, com uma ampla gama de comandos disponíveis para uso com o Git e outras ferramentas. É uma escolha popular para desenvolvedores que desejam usar o Git em plataformas Windows.

**Git Bash: é um terminal de linha de comando que permite interagir com o Git e executar comandos Unix no Windows.**

Também para facilitar o trabalho com o Git, também é necessário criar uma chave SSH via Git Bash. Uma chave SSH é a credencial de acesso para o protocolo de rede SSH (shell seguro).

**Github e Sourcetree**

GitHub: dividindo a palavra para melhor entendimento: **git** é um sistema de controle de versão distribuído e **hub**, normalmente, é um aparelho utilizado como periférico para permitir a conexão de computadores a uma rede para compartilhar informação, sendo basicamente um concentrador. Então, o Github é basicamente a junção disso, sendo praticamente uma rede de desenvolvedores. É uma das maiores plataformas online de trabalho colaborativo do mundo, conseguimos compartilhar projetos e as pessoas podem trabalhar em códigos paralelamente de qualquer lugar do mundo. O GitHub é uma excelente ferramenta para o trabalho em equipe. Quando se trata de um software ou um site que precisa ser criado em conjunto, por exemplo, a plataforma online facilita, sem dúvidas, a gestão do projeto. E essa ferramenta também está disponível para empresas: é conhecida como GitHub Enterprise. Além disso, o GitHub oferece diversas funcionalidades para colaboração em equipe, como ferramentas de gerenciamento de problemas (issues), pull requests para revisão de código, integração com ferramentas de desenvolvimento, como o Visual Studio Code, e muito mais.

Para utilizar o Github, é necessário criar uma conta. Para criar uma conta no GitHub, basta acessar o site [https://github.com/](https://github.com/) e clicar no botão "Sign up", preencher as informações solicitadas e seguir os passos para criar sua conta. É importante lembrar que é possível criar tanto contas gratuitas como contas pagas, que oferecem recursos adicionais e maior capacidade de armazenamento de dados.

**GitHub: é uma plataforma de hospedagem de código-fonte e colaboração para desenvolvedores. É baseado no Git e fornece controle de acesso e recursos de colaboração para equipes de desenvolvimento.**

Essa disciplina tem um repositório no Github que será utilizado para toda a parte prática: [FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd).

**Agora, vamos falar sobre a ferramenta Sourcetree.**

Sourcetree é uma ferramenta de interface gráfica de usuário (GUI) para o Git e o Mercurial. Ele permite que os usuários trabalhem com repositórios Git e Mercurial de forma visual, sem precisar usar comandos de linha de comando. O Sourcetree possui recursos como histórico de commits, diffs, ramificações, mesclagem e muito mais. Ele também permite que os usuários trabalhem com repositórios remotos, como o GitHub e o Bitbucket, e possam fazer push e pull de alterações diretamente da interface do usuário. O Sourcetree está disponível para Windows e macOS, e é uma excelente ferramenta para desenvolvedores que preferem trabalhar com uma interface gráfica intuitiva em vez de comandos de linha de comando.

Para instalar o Sourcetree, siga estas etapas:

1.  Acesse o site oficial do Sourcetree: [https://www.sourcetreeapp.com/](https://www.sourcetreeapp.com/)
2.  Clique no botão "Download" para a versão que corresponde ao seu sistema operacional (Windows ou macOS).
3.  Uma vez que o download esteja completo, abra o arquivo de instalação.
4.  Siga as instruções do assistente de instalação para concluir o processo de instalação.
5.  Quando a instalação estiver concluída, inicie o Sourcetree e siga as instruções de configuração.

É importante lembrar que o Sourcetree é uma ferramenta para gerenciamento de repositórios Git e Mercurial, então você precisará ter conhecimento básico sobre essas tecnologias para utilizar a ferramenta com eficiência.

Não vamos utilizar o Mercurial nessa disciplina, veja um pouco sobre ele na seção “Conteúdo Bônus” deste módulo. Veja também como fazer _login_ na ferramenta Sourcetree.

**Sourcetree: é uma interface gráfica de usuário para o Git que simplifica a interação com repositórios Git.**

**Postman**

Começando pela definição, o Postman é uma ferramenta que tem como objetivo testar serviços RESTful, WEB APIs por meio de envio de requisições HTTP e análise do retorno. Todos estes são conceitos que vão fazer parte da sua vida como desenvolvedor(a). Com o Postman é  possível consumir facilmente serviços locais e na internet, enviando dados e efetuando testes sobre as respostas das requisições. O uso de Web APIs vem crescendo e o Postman auxilia nos testes desse tipo de projeto, bem como permite aos desenvolvedores analisarem o funcionamento de serviços externos, a fim de saber como consumi-los. Veja o site oficial para aprender, conhecer e fazer _download_ - [Postman](https://www.postman.com/).

Além da versão _desktop_, o Postman também possui uma versão web que funciona diretamente no navegador. O **Postman Web** pode ser acessado a partir de qualquer navegador compatível, sem necessidade de instalação no computador ou dispositivo. Basta acessar o site oficial do Postman e fazer login com uma conta gratuita para começar a usar. A versão web tem funcionalidades similares à versão _desktop_, incluindo a criação e envio de requisições HTTP, a visualização das respostas, a criação de testes automatizados e outras opções. No entanto, a versão _desktop_ oferece mais recursos avançados, como a possibilidade de trabalhar offline e integrar com outras ferramentas de desenvolvimento.

Dito que existe a versão _desktop_, você pode instalar a ferramenta no seu computador ou dispositivo para ser utilizado. Ele está disponível para download gratuito no site oficial do Postman. Com a versão _desktop_, é possível consumir facilmente serviços locais e na internet, enviando dados e efetuando testes sobre as respostas das requisições.

Para instalar o Postman, siga os seguintes passos:

1.  Acesse o site oficial do Postman: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
2.  Clique no botão "Download the App" para baixar o instalador adequado para o seu sistema operacional (Windows, Mac ou Linux).
3.  Abra o arquivo baixado e siga as instruções do instalador.
4.  Após a instalação, abra o Postman e faça login com sua conta gratuita do Postman ou crie uma nova conta.

Caso encontre dificuldades durante a instalação, verifique se o seu sistema atende aos requisitos mínimos e se há alguma incompatibilidade com outros softwares instalados.

**Postman: é uma ferramenta de desenvolvimento de API que permite testar, documentar e compartilhar APIs.**

**IDE e Plugins**

IDE, do inglês _Integrated Development Environment_, e do português Ambiente de Desenvolvimento Integrado é um software para criar aplicações que combina ferramentas comuns de desenvolvedor em uma única interface de usuário gráfica. Um IDE geralmente consiste em editor de código-fonte que é basicamente um editor de texto que auxilia na criação de código por meio de funcionalidades como destaque da sintaxe com indicadores visuais, recurso de preenchimento automático específico da linguagem e verificação de bugs durante a criação. Tarefas como compilação de código-fonte em código binário, criação de pacotes de código binário e execução de testes automatizados e também um debugger que é usado para testar outros programas e mostrar graficamente a localização do bug no código original. Além das funcionalidades mencionadas, um IDE também pode incluir outras ferramentas comuns de desenvolvimento, como gerenciamento de projetos, controle de versão, depuração de desempenho, perfis de código, integração com sistemas de gerenciamento de banco de dados, gerenciamento de dependências, entre outras. Embora existam vários IDEs disponíveis para diferentes linguagens de programação, alguns dos mais populares incluem o [Visual Studio Code](https://code.visualstudio.com/), o [Eclipse](https://www.eclipse.org/) e o [IntelliJ IDEA](https://www.jetbrains.com/idea/). Cada IDE tem suas próprias vantagens e desvantagens e é importante que os desenvolvedores escolham o IDE que melhor atenda às suas necessidades específicas de desenvolvimento de software. Nessa disciplina, vamos utilizar o Visual Studio Code.

Para instalar o Visual Studio Code, siga os passos abaixo:

1.  Acesse o site oficial do Visual Studio Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2.  Clique no botão "Download" para baixar o instalador do Visual Studio Code para o seu sistema operacional (Windows, macOS ou Linux).
3.  Depois de baixar o instalador, execute-o para iniciar a instalação.
4.  Siga as instruções na tela para concluir a instalação. Dependendo do seu sistema operacional, pode ser necessário aceitar os termos de uso, escolher a pasta de instalação, etc.
5.  Após a conclusão da instalação, o Visual Studio Code estará pronto para ser usado.

Uma vez instalado, você pode iniciar o Visual Studio Code e começar a usá-lo para criar e editar arquivos de código-fonte em várias linguagens de programação, como JavaScript, Java, entre outras. O Visual Studio Code também suporta extensões que adicionam funcionalidades adicionais, como suporte a outras linguagens de programação, ferramentas de depuração, etc. Você pode encontrar e instalar extensões diretamente do Visual Studio Code, acessando a seção de extensões na barra lateral esquerda.

As extensões do Visual Studio Code são semelhantes aos plugins em outros softwares e sistemas. **_Plugins_** são adições ou alterações de software que permitem a personalização de programas de computador, aplicativos e navegadores da web, bem como a personalização do conteúdo oferecido pelos sites. O Visual Studio Code possui uma grande variedade de extensões disponíveis, e você pode procurar e instalar extensões diretamente do editor usando a barra lateral esquerda, acessando a seção de extensões.

Nessa disciplina, focamos em facilitar seu entendimento e o conhecimento de algumas ferramentas de mercado, então os principais _plugins_ que você irá instalar são:

-   [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner), utilizada para facilitar rodar o código: ao invés de usar o terminal ou Git Bash, você usa um botão de ‘_play_’ na IDE.
-   [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode), utilizada para identificar erros de codificação da linguagem antes de você enviar seu código final. Muito utilizado em times, principalmente para identificação de _bugs_ e vulnerabilidades de segurança no código.
-   [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), utilizada para entender melhor quais partes do código foram alteradas e te ajudar a enviar para o repositório remoto de forma rápida e visual, ao invés de linha de comando.

**IDE e plugins: Uma IDE (_Integrated Development Environment_) é um ambiente de desenvolvimento completo que integra editor de código, depurador, compilador, entre outras ferramentas. Além disso, os plugins podem adicionar recursos adicionais à IDE.**

**Navegador**

Provavelmente você tem um ou mais navegadores instalados no seu computador e/ou celular. Um navegador _web_ te leva para qualquer lugar na internet. Ele obtém informações de outras partes da _web_ e as exibe em seu computador ou dispositivo móvel. Hoje, os navegadores mais utilizados são [Chrome](https://www.google.com/intl/pt-BR/chrome/), [Safari](https://www.apple.com/br/safari/), [Microsoft Edge](https://www.microsoft.com/pt-br/edge?form=MA13FJ), e [Mozilla Firefox](https://www.mozilla.org/pt-BR/firefox/), de acordo com uma pesquisa do site [Oficina da Net](https://www.oficinadanet.com.br/).

**Navegador: é um software que permite aos usuários acessar a internet e visualizar sites da web. Alguns navegadores populares incluem Google Chrome, Mozilla Firefox e Microsoft Edge.**

**Como aplicar na prática o que aprendeu**

Nesse momento, para aplicar na prática o que você aprendeu é muito importante você conhecer as documentações do Node.js e do Git para conseguir pesquisar mais nas próximas aulas. É essencial que você instale todas as ferramentas no seu computador **com muita atenção,** e pesquise caso tenha qualquer problema não citado em aula. Para conseguir memorizar e aprender os conceitos de preparação do ambiente: apenas preparando o ambiente. Para as próximas aulas, você precisa ter o ambiente pronto e funcionando.

**Conteúdo bônus**

**Tópicos avançados**

**Node:**

Para aprofundar seu conhecimento sobre o _framework_ Node.js, estude a documentação oficial [Node.js](https://nodejs.org/dist/latest-v18.x/docs/api/synopsis.html). Utilize o repositório da disciplina para ver o arquivo de “_Hello World”_ utilizado em aula, veja também a documentação do _framework_ como base: [Getting Started Guide | Node.js](https://nodejs.org/en/docs/guides/getting-started-guide).

**Git e Git Bash:**

Citado neste conteúdo, entenda mais sobre o termo: _standalone. Standalone_ é um termo que pode ser usado em diferentes contextos, mas geralmente significa algo que é independente ou autônomo. Na tecnologia da informação, por exemplo, um aplicativo _standalone_ é um programa que pode ser executado sozinho, sem depender de outros softwares ou conexão com a internet.

**Sourcetree:**

Para fazer login no Sourcetree, siga estas etapas:

1.  Abra o Sourcetree.
2.  Na janela de boas-vindas, selecione a opção "Clone a Repository" ou "Add an existing repository".
3.  Na próxima tela, selecione o tipo de repositório que você deseja clonar ou adicionar (Git ou Mercurial).
4.  Se você já tiver uma conta em um provedor de serviços de hospedagem de repositório, selecione o provedor e faça login na sua conta.
5.  Se você não tiver uma conta em um provedor de serviços de hospedagem de repositório, selecione a opção "Use an existing account" ou "Create an account" para criar uma conta no provedor de sua escolha.
6.  Depois de fazer login na sua conta, você será redirecionado para a tela de seleção do repositório. Selecione o repositório que você deseja clonar ou adicionar e clique em "Clone" ou "Add".
7.  Se você já tiver clonado ou adicionado um repositório anteriormente e precisar fazer login novamente, você pode fazer isso indo em "Preferences" > "Accounts" e clicando em "Add Account" para adicionar uma nova conta ou em "Edit" para editar uma conta existente.

**EXTRA: O que é Mercurial?**

Mercurial é um sistema de controle de versão distribuído (DVCS) que é usado para rastrear mudanças em arquivos e coordenar o trabalho em projetos de software. Ele foi criado por Matt Mackall em 2005 e é uma alternativa ao sistema de controle de versão Git. Assim como o Git, o Mercurial permite que várias pessoas trabalhem em um mesmo projeto ao mesmo tempo e que cada pessoa tenha uma cópia local do projeto em sua própria máquina. Ele rastreia todas as mudanças feitas em cada arquivo e mantém um histórico completo de todas as versões do projeto. Isso permite que os usuários vejam as mudanças feitas em cada versão e voltem para versões anteriores do projeto, se necessário. O Mercurial tem muitos recursos avançados, incluindo mesclagem (merge) automática, ramificação (branching) e marcação (tagging). Ele também tem uma sintaxe simples e fácil de aprender, o que o torna uma opção popular para projetos de software de pequeno e médio porte.

**Postman:**

Após a instalação, ao abrir o Postman, o usuário é direcionado para a tela principal, que é a área de trabalho do aplicativo. Essa tela é composta por vários elementos, como:

-   Menu: O menu fica na parte superior da tela e contém opções como criar uma nova requisição, gerenciar coleções, visualizar a documentação do Postman e outras opções.
-   Barra lateral: A barra lateral fica no lado esquerdo da tela e exibe as coleções, requisições, ambientes, histórico e outras opções disponíveis. É possível navegar por essa barra para acessar as diferentes áreas do aplicativo.
-   Painel de requisições: O painel de requisições fica na área central da tela e é onde o usuário pode criar, enviar e visualizar as respostas das requisições. É possível definir o método HTTP, os cabeçalhos, os parâmetros e o corpo da requisição nesse painel.
-   Painel de respostas: O painel de respostas fica abaixo do painel de requisições e exibe o resultado da requisição. É possível visualizar o código de status HTTP, o corpo da resposta e os cabeçalhos nesse painel.
-   Área de testes: A área de testes fica na parte inferior da tela e permite que o usuário crie testes automatizados para validar as respostas das requisições. É possível escrever testes usando a sintaxe do JavaScript nessa área.

Figura 1.

Além desses elementos, o Postman também tem outras opções, como a capacidade de importar e exportar coleções, compartilhar requisições com outros usuários, colaborar em projetos em equipe e muito mais. A interface do Postman é intuitiva e fácil de usar, tornando-se uma ferramenta essencial para o teste e desenvolvimento de serviços RESTful e WEB APIs.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: 

[https://github.com/FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd)

Referência Bibliográfica

BONAVENTURA, Adalton. **Melhores Navegadores Para Utilizar No PC Em 2023**. Oficina da Net, 2023. Disponível em: <[https://www.oficinadanet.com.br/internet/35255-melhores-navegadores-para-utilizar-no-pc-em-2021](https://www.oficinadanet.com.br/internet/35255-melhores-navegadores-para-utilizar-no-pc-em-2021)\>. Acesso em: 30 mar. 2023.

ALMENARA, Igor. **O que é uma versão LTS e quais as vantagens desse tipo de software**. Canal Tech, 2021. Disponível em: <[https://canaltech.com.br/apps/o-que-e-versao-lts-180894/](https://canaltech.com.br/apps/o-que-e-versao-lts-180894/)\>. Acesso em: 30 mar. 2023.

DE SOUZA, Ivan. **Entenda De Uma Vez O Que É GitHub E a Importância Dele Num Negócio**. RockContent Blog, 2020. Disponível em: <[https://rockcontent.com/br/blog/o-que-e-github](https://rockcontent.com/br/blog/o-que-e-github)\>. Acesso em: 30 mar. 2023.

GOMES, Rodolfo. **Testando APIs Web Com O Postman**. DevMedia, 2023 Disponível em: <[https://www.devmedia.com.br/testando-apis-web-com-o-postman/37264](https://www.devmedia.com.br/testando-apis-web-com-o-postman/37264)\>. Acesso em: 30 mar. 2023.

KOVACS, Leandro. **O Que É Um Plugin?** TecnoBlog, 2022. Disponível em: <[https://tecnoblog.net/responde/o-que-e-um-plugin/](https://tecnoblog.net/responde/o-que-e-um-plugin/)\>. Acesso em: 26 mar. 2023.

KRIGER, Brunno. **O que é Git e GitHub, para que serve e quais as vantagens?** Kenzie, 2022. Disponível em: <[https://kenzie.com.br/blog/o-que-e-git/](https://kenzie.com.br/blog/o-que-e-git/)\>. Acesso em: 30 mar. 2023.

LENON. **Node.js - O que é, como funciona e quais as vantagens | OPUS**. Opus Software, 2018. Disponível em: <[https://www.opus-software.com.br/node-js/#](https://www.opus-software.com.br/node-js/#)\>. Acesso em: 26 mar. 2023.

MEROLA. **Bourne Again Shell (bash)**. Definirtec, 2021. Disponível em: <[https://definirtec.com/bourne-again-shell-bash/](https://definirtec.com/bourne-again-shell-bash/)\>. Acesso em: 26 mar. 2023.

RAMOS, Nathan. **O Que É Client-side E Server-side?** Tableless, 2013. Disponível em: <[https://tableless.github.io/iniciantes/manual/obasico/o-que-front-back.html](https://tableless.github.io/iniciantes/manual/obasico/o-que-front-back.html)\>. Acesso em: 26 mar. 2023.