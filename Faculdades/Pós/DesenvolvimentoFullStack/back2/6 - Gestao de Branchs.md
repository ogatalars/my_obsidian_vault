**Introdução**

O fluxo de trabalho básico e simples para versionamento de código é criar um repositório no Git, criar arquivos e enviar para o remoto, mas é importante lembrar que o Git oferece muitos recursos avançados de versionamento de código, como ramificações (branches), mesclagem (merging), revisões (revisions), tags (tags), entre outros. Nesse módulo, vamos abordar alguns conceitos importantes para entender o que é uma ramificação e como trabalhar com as mesmas.

**Objetivos da aula**

O objetivo deste módulo é compreender os principais comandos do Git para gestão de branches, além de entender o que é o fluxo de desenvolvimento conhecido como Git Flow e visualizar os projetos em ferramentas gráficas.

**Resumo**

**Branches**

Usando a analogia da árvore, uma _branch_ é como uma ramificação ou galho da árvore, onde o seu tronco é a _branch_ principal (_main_ ou _master_). Uma ramificação ou galho é uma cópia temporária de um conjunto de arquivos (tronco na analogia) de um projeto de software que permite que diferentes desenvolvedores trabalhem em paralelo em diferentes recursos do projeto sem interferir no trabalho uns dos outros. Essa cópia permite que os desenvolvedores trabalhem em recursos diferentes ou testem novas ideias sem afetar o código-base principal. As branches são frequentemente usadas em sistemas de controle de versão, como o Git, para permitir que vários desenvolvedores trabalhem em um projeto ao mesmo tempo.

No dia a dia, a criação de branches em um sistema de controle de versionamento como o Git é bastante simples. O processo começa com o time de desenvolvimento decidindo que deseja criar uma nova ramificação para trabalhar em uma nova funcionalidade ou correção de bugs. Essa decisão pode vir de outra necessidade também. Para isso, pode-se utilizar o comando "git branch" seguido pelo nome do novo branch que deseja criar.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681854847167-drqGvLWNPe.png)

Uma vez que o novo branch é criado, pode-se alternar para ele utilizando o comando "git checkout". A partir desse momento, trabalha-se em suas alterações sem afetar a linha principal de desenvolvimento, que continua existindo em outro branch.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681854868356-5DNAZhsMot.png)

Enquanto o/a desenvolvedor(a) trabalha em seu novo branch, outras pessoas também podem estar trabalhando em outras ramificações, ou mesmo na linha principal - que é a branch _main_. Quando o desenvolvimento de uma branch estiver finalizado, as alterações devem ser integradas de volta ao branch principal. Tradicionalmente, isso pode ser feito utilizando o comando "git merge", que mescla as alterações feitas no branch com as alterações existentes na linha principal.

É importante lembrar que as operações de criação de branches e mesclagem podem gerar conflitos que, algumas vezes, precisam ser resolvidos manualmente. Por isso, é sempre recomendável criar uma nova ramificação para cada nova funcionalidade ou correção de bug, de modo a manter o histórico do desenvolvimento organizado e facilitar a resolução de conflitos.

Alguns comandos muito utilizados para gestão de branches são:

-   “git pull”: atualiza seu repositório local com as alterações mais recentes do repositório remoto, garantindo que você esteja trabalhando com a versão mais recente do código;
-   “git add .” ou “git add -A” ou “git add caminho/para/o/arquivo”: adiciona alterações ao próximo commit. . (ponto) adiciona todas as alterações, -A adiciona todas as alterações e exclui arquivos que foram excluídos do repositório, e caminho/para/o/arquivo adiciona um arquivo específico;
-   “git commit -m “enviar nova branch” ”: cria um novo commit com as alterações adicionadas ao último commit e com a mensagem personalizada como ‘enviar nova branch’;
-   “git revert <id-do-commit>”: desfaz as alterações feitas em um commit específico e cria um novo commit que reverte as mudanças.
-   “git push”: envia o commit atual para o servidor remoto;
    -   “git push --set-upstream origin nova-branch”: envia a nova branch para o servidor remoto para que outros desenvolvedores possam acessá-la. "origin" é o nome do seu repositório remoto, e "nova-branch" é o nome da branch que você criou.
    -   “git push origin nome-da-branch”: envia os commits locais da branch especificada para a branch correspondente no repositório remoto.
    -   “git push -u origin nome-da-branch”: envia os commits locais da branch especificada para a branch correspondente no repositório remoto e define a branch remota como upstream.
-   “git merge nome-da-branch”: mescla a branch especificada com a branch atual.
-   “git branch nome-da-branch”: cria uma nova branch no seu repositório. Uma branch é uma linha independente de desenvolvimento que permite que você trabalhe em diferentes recursos ou correções de bugs sem afetar o código principal do projeto.
    -   “git branch” ou “git branch --list”: lista todas as branches disponíveis no seu repositório.
-   “git checkout nome-da-branch”:  muda a branch atual para a branch especificada.
    -   “git checkout -b nome-da-nova-branch”:  cria uma nova branch e muda para ela.

Esses são alguns dos comandos úteis para criar e enviar uma nova branch para o servidor remoto, permitindo que você trabalhe em novos recursos sem interferir no trabalho em andamento do time e na branch principal.

**Fluxo e comandos do Git**

O Git não armazena os dados como uma série de mudanças ou diferenças, mas sim como uma série de snapshots (instantâneos) de um momento específico, estes são os commits. Quando você faz um commit, o Git armazena um objeto de commit que contém um ponteiro para o snapshot do conteúdo que você submeteu. Esse objeto também contém informações sobre o autor (nome e e-mail), a mensagem do commit e ponteiros para um ou mais commits anteriores, conhecidos como "pai(s)". O primeiro commit de um repositório não tem pai, enquanto um commit normal tem um pai e um commit de merge (fusão) tem vários pais, que são os commits de diferentes branches que foram mescladas. Um resumo sobre commit é entender suas partes que incluem:

-   Um snapshot do código-fonte: é uma captura instantânea (_snapshot_) do estado atual do seu projeto, incluindo todos os arquivos e diretórios no diretório de trabalho no momento em que o commit é feito. Com esse snapshot é possível recomeçar seu projeto de um ponto de partida
-   Mensagem do commit: Cada commit deve ter uma mensagem descritiva que explique as mudanças que foram feitas no código. Essa mensagem ajuda a documentar as mudanças feitas e torna mais fácil para outros desenvolvedores entender o que foi feito.
-   Autor: O nome do autor do commit é registrado no Git. Por padrão, o Git usa o nome de usuário e o endereço de e-mail configurados no seu sistema para identificar o autor do commit, mas você pode especificar um nome e um e-mail diferentes ao fazer um commit.
-   Timestamp: O Git registra a data e a hora em que o commit foi feito.
-   Um ou mais pais: Um commit normal tem um pai, que é o commit anterior no histórico do projeto. No entanto, um commit de merge (fusão) tem vários pais, que são os commits de diferentes branches que foram mescladas.

Os comandos do Git são uma parte importante do fluxo de trabalho do desenvolvimento de software, como vimos anteriormente.

**Gitflow**

O Git Flow é um modelo alternativo de ramificação no Git que consiste no uso de ramificações de recursos e várias ramificações principais. Embora seja um método que auxilie no nosso trabalho, é importante ter algumas ressalvas em relação à sua aplicação. Se usado de maneira inadequada, o Git Flow pode se tornar bastante ineficiente e gerar uma experiência não muito agradável. No Sourcetree, é possível usar o Git Flow por meio de uma interface gráfica amigável. Além disso, o Git Flow precisa ser iniciado usando o comando “git flow init”.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681855164265-qXHvphBBUn.png)

Para criar uma ramificação de recurso, podemos usar os seguintes comandos no terminal, sem as extensões do Gitflow:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681855186417-cmRWVJ8PiY.png)

Com as extensões do Gitflow:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681855208673-TUs0FbK83t.png)

Para mesclar a ramificação de recurso na ramificação principal, usamos os seguintes comandos no terminal, sem as extensões do Gitflow:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681855228729-YkaOl3GaD0.png)

Com as extensões do Gitflow:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681855249108-kf7mkki2LC.png)

Esses comandos são usados para ilustrar a criação e a mesclagem de uma ramificação de recurso, mas é importante lembrar que o Git Flow é um método mais avançado de gerenciamento de ramificações, e pode haver outras definições de padronização específicas dependendo da equipe e do projeto.

Para mais detalhes, o Git Flow possui definições bem específicas para cada branch do seu padrão:

-   Branch Main/Master - Principal branch, contém associadas a ela as versões de publicação para facilitar o acesso e a busca por versões mais antigas. Também entendemos que é o espelho do programa que está no ar, já que o último código dessa branch deve sempre estar em produção. Além do mais, a única maneira de interagir com essa branch é através de uma Hotfix ou de uma nova Release.
-   Branch Develop - É uma das principais branches e serve como uma linha com os últimos desenvolvimentos. Como visto na imagem, é uma cópia da branch principal contendo algumas funcionalidades que ainda não foram publicadas. Sendo assim, é a base para o desenvolvimento de novas features.
-   Branch Feature - Uma das branches temporárias e auxiliares do nosso fluxo, sendo a branch que contém uma nova funcionalidade específica para a nossa aplicação. Nela temos a convenção do nome feature/nome\_do\_recurso que será utilizado no nosso fluxo de trabalho. Não podemos esquecer que toda nova Feature começa e termina obrigatoriamente a partir da develop.
-   Branch Hotfix - Também é uma branch auxiliar e temporária, utilizada quando ocorre algum problema no ambiente de produção no qual a correção deve ser feita imediatamente. Conseguimos com isso solucionar o erro e fazer a mesclagem da solução para as branches main/master e develop para que não ocorra a perda do nosso código.
-   Branch Release - Por fim, a branch de lançamento do nosso programa. Nela unimos o que está pronto em nossa branch de desenvolvimento e “jogamos” para a branch principal. No mais, é criado uma nova versão etiquetada no nosso projeto para que possamos ter um histórico completo do desenvolvimento.

Todos os comandos do Git Flow exigem a palavra reservada ‘flow’, em aula vimos alguns, é recomendado estudar os principais como:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681855328905-auxqjqOVh5.png)

Para melhor entender esse fluxo, veja a imagem abaixo retirada da documentação do Git Flow:

![Fonte: Atlassian, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681926663559-mgmRUp6TVi.png "Fonte: Atlassian, 2023.")

Fonte: Atlassian, 2023.

Nessa imagem, consegue-se visualizar na primeira linha a árvore principal que é a ramificação principal, branch main. A partir dela, todas as outras ramificações são e serão criadas seguindo o fluxo de desenvolvimento. Como vimos em aula, a branch main, principal, armazena o histórico do lançamento oficial e estável. A branch develop serve como uma ramificação de integração para recursos, sendo geralmente a ramificação para desenvolvimento. Além dessa Branch, é esperado que as ramificações de hotfix e feature sejam também separadas, mas estas de forma diferente: a Branch hotfix sempre vem da Branch main, sendo usada principalmente para correções urgentes de ambiente de produção, e a Branch feature vindo da Branch de develop, voltando a ser parte da Branch principal quando a funcionalidade é finalizada. As ramificações chamadas de release são os lançamentos de versões estáveis da aplicação.

**Estados dos arquivos no versionamento git**

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681855353145-7ZjKemvCF8.png)

“git status” é o comando que mostra o status atual do seu repositório. Ele exibe informações sobre arquivos modificados, arquivos adicionados e arquivos excluídos.

O Git possui três estados principais para os arquivos em um repositório: não rastreado (_untracked_ ou _unstaged_), modificado (_modified_) e preparado (_staged_).

-   Arquivos não rastreados são aqueles que não estão sendo rastreados pelo Git. Eles não foram adicionados ao repositório Git e não fazem parte do histórico de commits.
-   Arquivos rastreados são aqueles modificados e preparados.
    -   Os arquivos modificados são aqueles que foram alterados desde o último commit. Essas alterações ainda não foram registradas no Git.
    -   Os arquivos preparados são aqueles que foram selecionados para serem incluídos no próximo commit. Eles foram adicionados ao índice Git, o que significa que o Git está ciente das alterações e as preparou para serem incluídas no próximo commit.

Além disso, existem os arquivos confirmados (ou _committed_ \- “commitados”) que são os arquivos que foram incluídos em um commit e armazenados permanentemente no repositório Git. Esses arquivos representam uma versão estável do código-fonte e podem ser recuperados a qualquer momento.

Para mover os arquivos de um estado para outro, você pode usar os comandos do Git. Por exemplo, para adicionar arquivos modified ao índice Git, você pode usar o comando git add <nome\_do\_arquivo>. Para confirmar as alterações e criar um novo commit, você pode usar o comando git commit -m "mensagem\_do\_commit". Saber o uso adequado desses estados de arquivo é essencial para um bom controle de versão. Isso permite que você saiba quais arquivos foram alterados, quais estão prontos para serem confirmados e quais precisam ser adicionados ao repositório. E você irá fazer isso praticamente todos os dias num time de desenvolvimento.

**Como aplicar na prática o que aprendeu**

Nada melhor que nesse momento, fazer alguns testes na sua aplicação com o Sourcetree e com os comandos do Git via Git Bash. A melhor prática é realmente utilizar e aprender fazendo, aproveite o momento para testar o plugin do VS Code e o que mais tiver no seu computador para visualização do Git. Além disso, buscar ferramentas visuais para te ajudar sempre vai ser muito interessante.

Essa disciplina tem um repositório no Github que será utilizado para toda a parte prática: [FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd).

**Conteúdo bônus**

**Tópicos avançados**

"_Git Flow: A Successful Git Branching Model_" de Vincent Driessen é o livro original que apresenta o modelo de fluxo de trabalho Git Flow, explicando em detalhes cada etapa do processo. Então, caso você goste de livros e queira também praticar seu inglês, é um bom ponto de partida para os seus estudos.

O autor descreve como utilizar o Git Flow para gerenciar diferentes versões do código, incluindo como criar, mesclar e excluir branches, bem como como aplicar correções e recursos em diferentes fases do processo, também aborda alguns dos desafios comuns que as equipes enfrentam ao implementar o Git Flow, como conflitos de mesclagem, resolução de problemas e garantia da qualidade do código. Ao longo do livro, são apresentados alguns exemplos e ilustrações para tornar os conceitos mais claros e acessíveis. É um livro indicado para desenvolvedores e equipes que desejam implementar um modelo de fluxo de trabalho estruturado e eficiente em seus projetos Git.

"[_Learning Git Branching_](https://learngitbranching.js.org/)" de Brett Slatkin é um recurso online gratuito e interativo que oferece uma experiência prática para aprender sobre Git Flow, incluindo como criar e mesclar branches. As lições começam com conceitos básicos do Git e evoluem para tópicos mais avançados, como merge, rebase e Git Flow. Cada lição é apresentada em um ambiente de simulação que permite que você veja como as diferentes operações afetam o histórico do Git.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: 

[https://github.com/FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd)

Referência Bibliográfica

BATAGINI, Raphael. **Como Versionar Utilizando O Git**. Biblioteca dos Devs no Medium, 2020. Disponível em: <[https://medium.com/biblioteca-dos-devs/como-versionar-utilizando-o-git-1f5d8fe2afcd](https://medium.com/biblioteca-dos-devs/como-versionar-utilizando-o-git-1f5d8fe2afcd)\>. Acesso em: 30 mar. 2023.

HADLER, Mikael. **Utilizando O Fluxo Git Flow**. Training Center no Medium, 2018. Disponível em: <[https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04)\>. Acesso em: 28 mar. 2023.