**Introdução**

O processo da engenharia de sistemas é, para a grande maioria dos casos corporativos, bastante complexo. Partindo da codificação do software, após testes locais temos o envio deste código para repositórios remotos, os quais devem ser compilados e empacotados em artefatos que, por suas vezes, serão usados como parte de um sistema. Se a cada nova atualização, cada engenheiro precisar se atentar a cada etapa, o processo como um todo terá gargalos em todas as partes, impactando e inviabilizando o negócio. É necessária uma automatização do que é processo repetitivo.

As esteiras de CI (_continuous integration_) e CD (_continuous delivery_) implementam a automatização que vai desde a codificação até a entrega do sistema em produção, e são uma ferramenta muito poderosa da cultura DevOps.

**Objetivos da aula**

O objetivo deste módulo é o de explicar a integração contínua e o CI/CD, usando o Gitlab, uma plataforma que é ao mesmo tempo um repositório e uma esteira CI/CD. Iremos estudar, de forma prática, como criar e estruturar um _pipeline_ através de arquivos _gitlab-ci.yml_, e entender como os _pipelines_ funcionam e interagem uns com os outros. Serão estudados também os tipos de estágios, variáveis de ambiente, _schedulers_, triggers, e builds para deploy.

**Resumo**

O CI/CD faz parte da cultura DevOps e, como podemos ver na Figura 1, existem diferentes fases que contempla a codificação, os testes, o empacotamento, a publicação, a configuração da aplicação, o monitoramento dos resultados e métricas, e o planejamento de novas funcionalidades e necessidades.

![Figura 1: diagrama de cada uma das etapas do DevOps. Fonte: https://about.gitlab.com/topics/devops/.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1677787559443-ko5Tg3UPlb.png "Figura 1: diagrama de cada uma das etapas do DevOps. Fonte: https://about.gitlab.com/topics/devops/.")

Uma das formas mais eficazes de assimilarmos um conceito (no nosso caso, o de CI/CD), é praticarmos com uma ferramenta que implementa tal conceito (no nosso caso, o Gitlab). Usado por engenheiros de software, testadores, gestores de TI, gestores de negócios, e engenheiros de infraestrutura, o Gitlab é conhecido por atender às diferentes etapas do DevOps.

Propomos aqui, como primeira etapa caso você, estudante, ainda não tenha feito, é a criação de sua conta no [https://gitlab.com/](https://gitlab.com/). Após a criação de sua conta, não se esqueça de configurar os seguintes itens na plataforma:

-   Configure sua chave SSH e cadastre-a no Gitlab para que seu código possa ser enviado e recebido através de SSH;
-   Faça o download/instalação de um cliente git. Em sistemas operacionais baseados em Linux, a ferramenta normalmente já está presente. Se não estiver, você poderá usar o github, disponível em [https://desktop.github.com/](https://desktop.github.com/);
-   Opcionalmente, instale um ambiente de desenvolvimento integrado (IDE), para ter mais facilidade na edição do seu código, bem como _commits_ e _pushs_. Em nossas vídeo-aulas, utilizamos o Visual Studio, disponível para download em [https://visualstudio.microsoft.com/pt-br/downloads/](https://visualstudio.microsoft.com/pt-br/downloads/).

Em vídeo-aula, configuramos o projeto "_gitlab-ci-cd-example_". Para fazê-lo, proceda da seguinte maneira seguindo os passos:

1.  Crie um projeto no Gitlab utilizando o código em:  
    [https://github.com/FaculdadeDescomplica/Advanced-BackEnd/gitlab-ci-cd-example](https://github.com/FaculdadeDescomplica/Advanced-BackEnd/gitlab-ci-cd-example);
2.  Repare que a pasta raíz do projeto possui um arquivo oculto, nomeado de .gitlab-ci.yml. Este arquivo é lido pelo editor do Gitlab e define o _pipeline_ através de seu meta-código. No Gitlab, navegue até o projeto que você criou e clique em CI/CD na barra lateral esquerda. Depois, clique em editor. Você verá uma tela similar à mostrada pela Figura 2;
3.  Analise o arquivo. Perceba que este _pipeline_ é desenhado para uma esteira que constrói uma imagem Docker, usando a imagem do _docker:latest_. Você pode verificar que cada uma das etapas é definida nas linhas de "_stage"_, que em nosso exemplo possui apenas a etapa de _"build"_. A linha _before-script_ e _script_ trazem instruções para o que o pipeline deve executar em cada job pertencente a um estágio;
4.  Analise o seguinte trecho:  
    docker login -u "$CI\_REGISTRY\_USER" -p "$CI\_REGISTRY\_PASSWORD" $CI\_REGISTRY  
    Perceba que esta linha instrui o ambiente a realizar um logon na plataforma Docker, presente localmente ao build. As construções identificadas por $CI\_REGISTRY\_USER e $CI\_REGISTRY\_PASSWORD são variáveis de ambiente, as quais você pode configurar em _"Settings → CI/CD → Variables"_. Variáveis de ambiente são extremamente importantes para que não sejam expostas informações sensíveis em código, como senhas e tokens de acesso;
5.  Observe as seguintes linhas:  
    _docker build --pull -t "$CI\_REGISTRY\_IMAGE${tag}" .  
    docker push "$CI\_REGISTRY\_IMAGE${tag}"_  
    Perceba que estas instruções realizam o build de uma imagem e depois a enviam para o registry que, em muitos casos será o Docker Hub, repositório de imagens do Docker.

![Figura 2: tela do editor do pipeline CI/CD do Gitlab. Fonte: catálogo do professor autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1677787754125-gX6PAlVY9p.png "Figura 2: tela do editor do pipeline CI/CD do Gitlab. Fonte: catálogo do professor autor.")

Figura 2: tela do editor do pipeline CI/CD do Gitlab. Fonte: catálogo do professor autor.

Outro exemplo prático de nossa vídeo-aula traz a configuração de uma esteira composta, que funciona através de triggers. Para realizar seu laboratório, proceda conforme os seguintes passos:

1.  Navegue até o diretório do projeto:  
    [https://github.com/FaculdadeDescomplica/Advanced-BackEnd/gitlab-types-stages-example](https://github.com/FaculdadeDescomplica/Advanced-BackEnd/gitlab-types-stages-example);  
    Crie um projeto com esta pasta. Perceba que este diretório possui também um arquivo oculto .gitlab-ci.yml;
2.  Na plataforma do Gitlab, ao entrar na edição de _pipeline_ do projeto, você perceberá que este projeto possui complexidades adicionais, com mais etapas: build, test, deploy, e triggers;
3.  Perceba que os builds possuem 2 processos cada, ou seja, são dois processos (_build\_a_ e _build\_b_) que ocorrem paralelamente. Estes 2 builds são sucedidos por testes (_test\_a_ e _test\_b_) que também podem ocorrer paralelamente. Na sequência, temos ainda deploys (_deploy\___a_ e _deploy\_b_) que precisam da etapa de testes concluída (pré-requisito). Ainda, estes deploys ativam, em caso de sucesso, gatilhos para _pipelines_ adicionais. Repare ainda que estas esteiras adicionais estão contidas no mesmo código, mas poderiam também chamar esteiras de projetos externos ao que estamos trabalhando;
4.  Confira a visão gráfica do editor clicando em "_Visualize_", conforme mostra a Figura 3;
5.  Clique em _"CI/CD → Pipelines"_, para visualizar o histórico de builds de forma gráfica. Nesta visão você poderá acompanhar em tempo real os builds de sua esteira. Clique em "_Run Pipeline_" para iniciar um teste.

![Figura 3: visualização gráfica do pipeline em construção. Fonte: catálogo do professor autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1677787835343-lrOXsukreW.png "Figura 3: visualização gráfica do pipeline em construção. Fonte: catálogo do professor autor.")

Figura 3: visualização gráfica do pipeline em construção. Fonte: catálogo do professor autor.

![Figura 4: tela da visão de pipelines CI/CD do Gitlab. Fonte: catálogo do professor autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1677787845991-nHR4lHWml2.png "Figura 4: tela da visão de pipelines CI/CD do Gitlab. Fonte: catálogo do professor autor.")

Figura 4: tela da visão de pipelines CI/CD do Gitlab. Fonte: catálogo do professor autor.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir:

[https://github.com/FaculdadeDescomplica/Advanced-BackEnd](https://github.com/FaculdadeDescomplica/Advanced-BackEnd)

<u><span><span><span>Referência Bibliográfica</span></span></span></u>

**Página do Projeto Gitlab**. Gitlab Documentation, 2023. Disponível em: [https://docs.gitlab.com/](https://docs.gitlab.com/). Acesso em: 24/01/2023.