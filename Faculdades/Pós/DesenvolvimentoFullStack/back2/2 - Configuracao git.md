**Introdução**

Um repositório de versionamento é um sistema que permite gerenciar e controlar as alterações feitas em um projeto de software ao longo do tempo. Nesse módulo, vamos abordar alguns conceitos básicos importantes para entender o que são sistemas de versionamento e versionamento distribuídos, além de também realizar a configuração do Git localmente.

**Objetivos da aula**

O objetivo desse módulo é conhecer os tipos de sistema de versionamento, entender a importância do versionamento distribuído e configurar o Git localmente.

**Resumo**

**Sistemas de versionamento e versionamento distribuído**

O versionamento consiste em estratégias para gerenciar as diferentes versões de um código, sistema ou modelo. É uma forma de administrar as mudanças que são feitas e garantir mais segurança na transição de uma versão para outra.

O desenvolvimento de software é feito em etapas, onde cada etapa adiciona novas funcionalidades específicas ao sistema. Assim, temos diferentes versões após cada pequena ação ou etapa. O versionamento lida com essas várias formas e tenta administrar mudanças de maneira mais organizada. O controle de versão, também conhecido como controle de código-fonte, é a prática de rastrear e gerenciar as alterações em um código de software.

Os sistemas de controle de versão são ferramentas de software que ajudam as equipes de desenvolvimento de software a gerenciar as alterações ao código-fonte ao longo do tempo. Com o acelerado ambiente de desenvolvimento, os sistemas de controle de versão ajudam as equipes a trabalhar de forma mais rápida e inteligente. Eles são ainda mais úteis para as equipes de DevOps, pois ajudam a reduzir o tempo de desenvolvimento e aumentar as implementações bem-sucedidas.

Existem três tipos de sistemas de controle de versão (VCS - V_ersion Control System_):

1.  Sistema de controle de versão local: é o modelo mais simples e também o mais suscetível a falhas. Os arquivos são copiados para diretórios locais em várias versões diferentes, tornando impossível trabalhar em equipe e comunicar as alterações entre as diferentes máquinas.
2.  Sistema de controle de versão centralizado: este sistema permite que os desenvolvedores recuperem versões específicas em suas próprias máquinas. Porém, a individualização das versões impede o trabalho em conjunto da mesma forma que o versionamento local.
3.  Sistema de controle de versão distribuído: este tipo de sistema será detalhado na próxima aula.

Os sistemas de controle de versão passaram por grandes melhorias nas últimas décadas e alguns são mais eficientes do que outros.

O uso de software de controle de versão é altamente recomendado para equipes DevOps, para softwares de alto desempenho e para toda e qualquer equipe de desenvolvimento. O controle de versão permite que as equipes de software mantenham a eficiência e agilidade, mesmo quando a equipe é escalonada para incluir mais desenvolvedores. O **versionamento distribuído** é definido como vários repositórios autônomos e independentes, um para cada desenvolvedor. Cada repositório possui uma área de trabalho acoplada e as operações são realizadas entre as duas áreas.

Este tipo de versionamento é o mais utilizado porque, além das cópias armazenadas no servidor, multiplica a cópia total de tudo o que é feito nas máquinas clientes. Além de ser muito mais fácil de trabalhar em equipe, se o servidor falhar, qualquer um dos repositórios autônomos e independentes, instalados em todos os computadores, pode ser usado para restaurar o conteúdo danificado.

Os VCS são às vezes conhecidos como ferramentas SCM (Gerenciamento de código-fonte, _Source Code Management_) ou RCS (Sistema de controle de revisão, _Revision Control System_). O sistema de controle de versão distribuído mais utilizado hoje é o Git, que tem variações como o Mercurial e o Bazaar.

**Configuração do Git localmente e obtenção de repositório**

Para realizar a configuração do Git localmente você precisa já ter instalado Git no seu computador e também ter feito uma conta no Github.com.

Antes de iniciar a configuração, você pode verificar as configurações do Git caso seu computador tenha usando o comando “git config --list” sem as aspas.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681848983196-U3YyjrWr5c.png)

Para configurar o Git localmente você pode utilizar o terminal, o _prompt_ de comando (no Windows) ou o Git Bash. Escolha qual shell vai utilizar e inicie a configuração da seguinte forma:

1.  Escolhi usar o Bit Bash, abra o Git Bash.
2.  Configure o Git com o seu nome de usuário e endereço de e-mail com os comandos:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849043179-qmGxcAu1cV.png)

Certifique-se de usar seu próprio nome de usuário e endereço de e-mail.

Essa é a configuração essencial para começar a utilizar o Git como sistema de versionamento distribuído.

O comando "git config" é usado para configurar as opções do Git em sua máquina local. Com este comando, você pode definir opções como seu nome de usuário e endereço de e-mail, ferramenta de edição preferida, opções de formatação, entre outras. O comando "git config" é usado com uma série de opções para definir e visualizar configurações. Algumas das opções mais comuns são:

-   "--global": define a configuração globalmente, para todos os projetos em sua máquina.
-   "--local": define a configuração localmente, para um projeto específico.
-   "--list": mostra uma lista de todas as configurações do Git em sua máquina.
-   "--get": mostra o valor de uma configuração específica.
-   "--unset": remove uma configuração específica.

Ao usar o "git config", é importante saber a diferença entre configurações globais e locais. As configurações globais se aplicam a todos os projetos em sua máquina, enquanto as configurações locais se aplicam apenas a um projeto específico.

**Chave SSH**

Além disso, é necessário ter uma chave SSH para ter mais segurança e facilidade no trabalho com Git. Como explicado nas aulas anteriores, vamos fazer os comandos seguintes para criar a chave SSH:

1.  Abra o Git Bash no seu computador.
2.  Digite o comando ssh-keygen -t rsa -b 4096 -C "seu\_email@exemplo.com" e pressione Enter.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849135980-vbHWYjU08O.png)

Este comando criará uma chave SSH RSA de 4096 bits e associará um comentário (neste caso, seu endereço de e-mail) à chave.

1.  Será solicitado que você escolha um local para salvar a chave. O local padrão é geralmente bom, então basta pressionar Enter.
2.  Será solicitado que você digite uma frase secreta para proteger a chave. Você pode optar por digitar uma frase secreta ou deixá-la em branco, se preferir. Em seguida, pressione Enter. Se você escolher uma frase secreta, certifique-se de lembrá-la, pois você precisará dela sempre que usar a chave.
3.  A chave SSH foi criada. Agora, para adicionar a chave SSH ao seu agente SSH, digite o comando eval $(ssh-agent -s) e pressione Enter. Este comando iniciará o agente SSH em segundo plano.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849443728-J13TNdHkHJ.png)

1.  Em seguida, digite o comando ssh-add ~/.ssh/id\_rsa e pressione Enter. Este comando adiciona a chave SSH recém-criada ao agente SSH.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849473372-yvBVTY7k9h.png)

Agora que a chave SSH foi criada e adicionada ao agente SSH, você pode adicioná-la à sua conta do GitHub ou de outro serviço Git que esteja usando. Para adicionar a chave SSH criada à sua conta do GitHub, siga os seguintes passos:

1.  Abra o Git Bash no seu computador.
2.  Digite o comando cat ~/.ssh/id\_rsa.pub e pressione Enter. Isso irá imprimir sua chave SSH pública na tela.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849505252-33D8CYQjCt.png)

1.  Selecione e copie toda a saída do comando cat. Certifique-se de selecionar todo o texto, incluindo a palavra "ssh-rsa" no início e o endereço de e-mail no final.
2.  Acesse sua conta do GitHub e faça login.
3.  Clique na sua foto de perfil no canto superior direito e selecione "Settings" no menu suspenso.
4.  Na página Configurações, clique em "SSH and GPG keys" no menu lateral esquerdo.
5.  Clique em "New SSH key" para adicionar uma nova chave SSH.
6.  Na página "Add SSH key", dê um nome descritivo à sua chave SSH no campo "Title".
7.  Cole sua chave SSH pública no campo "Key".
8.  Clique em "Add SSH key".

Agora sua chave SSH está configurada e pronta para ser usada com o GitHub. Você pode usar a autenticação SSH para clonar, push e pull repositórios do GitHub.

**Tipos de conexões**

Os repositórios remotos são utilizados pelos desenvolvedores para compartilhar seu trabalho com outros membros da equipe. O Git oferece três protocolos para essa comunicação com o repositório remoto: SSH, Git e HTTP/HTTPS. Exceto pelo último, os demais protocolos devem estar instalados na máquina do desenvolvedor.

A escolha do protocolo a ser utilizado depende da ferramenta que está sendo usada. Para criar um novo repositório no Github para a disciplina e demonstração é necessário ter uma conta no Github e criar o repositório correspondente.

Existem três formas principais de conexão com um repositório remoto no Git:

1.  HTTPS: é a forma mais comum de conexão e utiliza o protocolo HTTP para enviar e receber dados entre o repositório local e o repositório remoto. Essa conexão é feita através de uma URL que começa com "https://".
2.  SSH: é uma forma mais segura de conexão que utiliza o protocolo SSH para autenticação e criptografia de dados. Essa conexão é feita através de uma URL que começa com "ssh://".
3.  Git: é uma forma de conexão mais direta e rápida que utiliza o próprio protocolo do Git para enviar e receber dados entre o repositório local e o repositório remoto. Essa conexão é feita através de uma URL que começa com "git://".

É importante ressaltar que a forma de conexão utilizada dependerá das configurações do repositório remoto e das preferências do usuário. E se você se conectar e clonar um repositório inicialmente utilizando HTTPS e realizar o envio dos arquivos via SSH, por exemplo, você poderá ter problemas de permissão porque cada configuração é específica. Você precisa saber qual conexão será utilizada desde o começo do seu projeto.

**Adicionar projeto local**

Depois de criar o repositório, é preciso adicioná-lo ao projeto local na máquina do desenvolvedor. Isso pode ser feito acessando o diretório do projeto, iniciando o Git e adicionando o repositório com os comandos "git init" e "git remote add origin https://github.com/gbgelado/meu-primeiro-repositorio.git".

Em seguida, os arquivos devem ser adicionados ao repositório, "commitados" e "pushados" usando os comandos "git add .", "git commit -m "meu primeiro commit"" e "git push -u origin master". Após executar esses comandos, o desenvolvedor estará conectado ao repositório remoto.

**Obtenção e replicação de repositório remoto**

Para clonar um repositório, é necessário criar uma pasta, rodar o comando git init para inicializar o git na pasta. Assim, pode-se usar o comando git clone URL do repositório na pasta desejada. Pelo Github web, você também tem os comandos para clonar um repositório pelo menu “Code” na tela inicial do mesmo.

Figura 1.

![Fonte: Elaborado pelo autor, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849546352-uIuFoI6wOz.png "Fonte: Elaborado pelo autor, 2023.")

Fonte: Elaborado pelo autor, 2023.

Você pode manter o seu repositório local sincronizado com o repositório remoto enquanto faz alterações em qualquer um deles. Para manter o repositório atualizado com o GitHub remoto, é necessário usar o comando git pull após cloná-lo. Para mostrar como essa troca funciona, imagine que você insira um novo arquivo no repositório remoto. Para atualizar o repositório local com a versão mais recente do arquivo, você precisa usar o comando git pull na sua máquina.

Ao trabalhar em projetos com várias pessoas ou em diferentes dispositivos, é essencial sincronizar o seu branch local com o repositório remoto. Isso é feito através do git pull, que puxa quaisquer commits adicionados ao branch no GitHub desde a última vez que você sincronizou. Ao fazer alterações no seu branch local, você precisará enviá-las para o repositório remoto usando o comando git push. Antes de enviar as alterações, você pode usar o comando git status para visualizá-las e, em seguida, usar o comando git add antes do git push.

**Alguns comandos e utilização do Git**

-   git init é o comando utilizado para iniciar um novo repositório Git em um diretório local.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849594042-sv7xFXm0PS.png)

-   git clone é um comando do Git que é utilizado para criar uma cópia de um repositório remoto em um diretório local. Para usar o comando git clone, é necessário informar a URL do repositório remoto que deseja clonar. Por exemplo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849624986-YhUeMPw8xI.png)

-   git add é um comando do Git que é utilizado para adicionar arquivos ao index (ou staging area) do Git, permitindo que eles sejam incluídos no próximo commit. Quando você faz alterações em um arquivo em um repositório Git, essas alterações não são automaticamente adicionadas ao próximo commit. É necessário usar o comando git add para incluir essas alterações no index.

Por exemplo, se você modificou um arquivo chamado "index.js", pode adicionar essas alterações ao index usando o comando:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849668603-TKLmrLDJ1B.png)

Você também pode usar o comando git add com o parâmetro **. (ponto)** para adicionar todas as alterações realizadas em todos os arquivos no diretório atual ao index:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849701526-jI0qhiVOSY.png)

-   git commit -m é o comando utilizado para criar um novo commit, ou seja, uma nova versão do projeto com as alterações realizadas. O parâmetro -m permite adicionar uma mensagem ao commit, informando o que foi alterado.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849733571-pBko9bFhKd.png)

A mensagem de commit precisa ser simples e autoexplicativa.

-   git push -u origin main é o comando utilizado para enviar as alterações do repositório local para um repositório remoto, no caso especificado como "origin", e para a branch principal "main". O parâmetro -u é utilizado para estabelecer uma relação de "rastreamento" entre a branch local e a branch remota, permitindo que as futuras alterações sejam enviadas para a branch correta sem precisar especificá-la novamente.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849876582-ctxD426F2c.png)

-   git push  é um comando do Git que é utilizado para enviar as alterações do repositório local para um repositório remoto, atualizando a versão do projeto que está armazenada no repositório remoto.

Também é possível ligar o seu repositório local com um repositório remoto, utilizando o comando git remote add. Precisamos passar dois parâmetros para esse comando:

-   nome: nome que daremos ao nosso repositório remoto, como se fosse um atalho para não precisarmos ficar escrevendo a URL toda hora. O padrão é usar o nome origin.
-   url: endereço do repositório remoto ao qual o nome passado anteriormente vai se referir.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849923692-OuEkEh7t6s.png)

Isso criará uma conexão entre seu repositório local e o repositório remoto, permitindo que você envie suas alterações para o repositório remoto usando o comando git push. Depois de adicionar o repositório remoto, você pode ver uma lista de todos os repositórios remotos configurados em seu repositório local usando o comando git remote -v.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681849940504-fM2WJgq0Ak.png)

-   git pull  é um comando do Git que é utilizado para baixar as alterações do repositório remoto e atualizar a branch local correspondente.

Quando você executa o comando git pull, o Git faz o download das alterações do repositório remoto e integra essas alterações na sua branch local. Se houver conflitos entre as alterações locais e as alterações remotas, o Git tentará mesclá-las automaticamente. Se houver conflitos que não possam ser mesclados automaticamente, o Git solicitará que você resolva esses conflitos manualmente.

-   git status é um comando útil para verificar o status do seu repositório e garantir que todas as alterações estejam corretamente adicionadas ao index antes de criar um commit.

Nas próximas aulas, você aprenderá mais sobre esses comandos e como usá-los de maneira eficaz em diferentes cenários. Para demonstrar uma alteração em um arquivo, podemos usar o exemplo clássico do "hello world" e fazer mudanças no código antes de fazer o push para o repositório remoto.

**Como aplicar na prática o que aprendeu**

Nesse momento, para aplicar na prática o que você aprendeu é muito importante conhecer a plataforma Github.com e estudar os comandos do Git que já conhece até agora. Além disso, é necessário fazer a configuração do Git localmente e criar a chave SSH. Para conhecer mais dos repositórios, te convido a clonar alguns repositórios legais para quem está começando a programar em Javascript com Node.js [GitHub - richecr/Estudos\_JavaScript: Repositório para estudar JavaScript](https://github.com/richecr/Estudos_JavaScript) e [GitHub - goldbergyoni/nodebestpractices: The Node.js best practices list (March 2023)](https://github.com/goldbergyoni/nodebestpractices) . Para as próximas aulas, você precisa ter o ambiente Git pronto e funcionando.

Essa disciplina tem um repositório no Github que será utilizado para toda a parte prática: [FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd).

**Conteúdo bônus**

**Tópicos avançados**

Para entender mais sobre sistema de versionamento de código, principalmente utilizando o Git, te convido a criar um projeto pessoal para praticar os comandos que conheceu até agora, para já criar um histórico dos seus estudos com a Descomplica até aqui. Além disso, te convido a pesquisar um pouco sobre merges e resoluções de conflitos que é um dos tópicos avançados de Git que farão parte da sua rotina como desenvolvedor(a). Apenas praticando e estudando os comandos você será capaz de familiarizar-se com os conceitos e se tornar mais eficiente nos seus projetos.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: 

[https://github.com/FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd)

Referência Bibliográfica

ATLASSIAN. **O que é controle de versão | Atlassian Git Tutorial**. Disponível em: <[https://www.atlassian.com/br/git/tutorials/what-is-version-control](https://www.atlassian.com/br/git/tutorials/what-is-version-control)\>. Acesso em: 26 mar. 2023.

ATLASSIAN. **Source Code Management | Atlassian Git Tutorial**. Disponível em: <[https://www.atlassian.com/git/tutorials/source-code-management#:~:text=Source%20code%20management%20(SCM)%20is](https://www.atlassian.com/git/tutorials/source-code-management#:~:text=Source%20code%20management%20(SCM)%20is)\>. Acesso em: 26 mar. 2023.

CARVALHO, J. **Melhores Repositórios Do GitHub Para Aprender JavaScript E Frameworks**. Disponível em: <[http://programadorobjetivo.co/os-melhores-repositorios-do-github-para-aprender-javascript-e-seus-frameworks/](http://programadorobjetivo.co/os-melhores-repositorios-do-github-para-aprender-javascript-e-seus-frameworks/)\>. Acesso em: 27 mar. 2023.

DIAS, A. F. **Conceitos Básicos De Controle De Versão De Software - Centralizado E D**. Disponível em: <[https://blog.pronus.io/posts/controle-de-versao/conceitos-basicos-de-controle-de-versao-de-software-centralizado-e-distribuido/#:~:text=Controle%20de%20Vers%C3%A3o%20Distribu%C3%ADdo](https://blog.pronus.io/posts/controle-de-versao/conceitos-basicos-de-controle-de-versao-de-software-centralizado-e-distribuido/#:~:text=Controle%20de%20Vers%C3%A3o%20Distribu%C3%ADdo)\>. Acesso em: 27 mar. 2023.

GAEA. **Controle de versão de software: tire aqui suas dúvidas**. Disponível em: <[https://gaea.com.br/controle-de-versao-de-software-tire-aqui-suas-duvidas/#:~:text=Sistema%20de%20Controle%20de%20Vers%C3%A3o%20Distribu%C3%ADdo&text=No%20chamado%20DVCS%20](https://gaea.com.br/controle-de-versao-de-software-tire-aqui-suas-duvidas/#:~:text=Sistema%20de%20Controle%20de%20Vers%C3%A3o%20Distribu%C3%ADdo&text=No%20chamado%20DVCS%20)\>. Acesso em: 27 mar. 2023.

GAEA. **Entenda Por Que Versionamento De Software É Tão Importante**. Disponível em: <[https://gaea.com.br/entenda-por-que-versionamento-de-software-e-tao-importante/#:~:text=O%20que%20%C3%A9%20versionamento%20de](https://gaea.com.br/entenda-por-que-versionamento-de-software-e-tao-importante/#:~:text=O%20que%20%C3%A9%20versionamento%20de)\>. Acesso em: 27 mar. 2023.

GITHUB DOCS. **Sincronizar o branch**. Disponível em: <[https://docs.github.com/pt/desktop/contributing-and-collaborating-using-github-desktop/keeping-your-local-repository-in-sync-with-github/syncing-your-branch?platform=windows](https://docs.github.com/pt/desktop/contributing-and-collaborating-using-github-desktop/keeping-your-local-repository-in-sync-with-github/syncing-your-branch?platform=windows)\>. Acesso em: 27 mar. 2023.

HANASHIRO, A. **Comandos do Git que você precisa conhecer - Parte 2 - Repositórios Remotos**. Disponível em: <[https://www.treinaweb.com.br/blog/comandos-do-git-que-voce-precisa-conhecer-parte-2-repositorios-remotos#:~:text=Para%20ligar%20o%20seu%20reposit%C3%B3rio](https://www.treinaweb.com.br/blog/comandos-do-git-que-voce-precisa-conhecer-parte-2-repositorios-remotos#:~:text=Para%20ligar%20o%20seu%20reposit%C3%B3rio)\>. Acesso em: 27 mar. 2023.

MEDEIROS, H. **Trabalhando com o Repositório Remoto no Git**. Disponível em: <[https://www.devmedia.com.br/trabalhando-com-o-repositorio-remoto-no-git/33786](https://www.devmedia.com.br/trabalhando-com-o-repositorio-remoto-no-git/33786)\>. Acesso em: 27 mar. 2023.

PROGRAMADORES DEPRÊ. **10 repositórios GitHub para ser um desenvolvedor javascript melhor**. Disponível em: <[https://programadoresdepre.com.br/10-repositorios-github-para-ser-um-desenvolvedor-javascript-melhor/](https://programadoresdepre.com.br/10-repositorios-github-para-ser-um-desenvolvedor-javascript-melhor/)\>. Acesso em: 27 mar. 2023.

SACRAMENTO, G. **Versionamento De Código E De software: Entenda Cada Processo**. Disponível em: <[https://blog.somostera.com/data-science/versionamento](https://blog.somostera.com/data-science/versionamento)\>. Acesso em: 27 mar. 2023.

SOFTWARE FREEDOM CONSERVANCY. **Git - Getting a Git Repository**. Disponível em: <[https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)\>. Acesso em: 26 mar. 2023.

WIKIVERSITY. **Mercurial vs Git - Wikiversidade**. Disponível em: <[https://pt.wikiversity.org/wiki/Mercurial\_vs\_Git](https://pt.wikiversity.org/wiki/Mercurial_vs_Git)\>. Acesso em: 27 mar. 2023.