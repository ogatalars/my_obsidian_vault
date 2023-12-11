**Introdução**

A partir do momento em que passamos a utilizar as poderosas ferramentas da engenharia orientada a micro serviços e contêineres notamos que sistemas compostos por múltiplas aplicações são muito comuns. Não é difícil imaginar que um simples sistema pode ser decomposto em frontend, backend, e banco de dados, cada qual com seu próprio repositório e código.

Um contêiner deve, na maioria dos casos, comportar uma aplicação atômica e isolada e, assim sendo, precisamos de um aparato adequado de ferramentas para gerenciar múltiplos contêineres. Kubernetes se propõem a ser este aparato.

**Objetivos da aula**

O objetivo deste módulo é o de introduzir a tecnologia Kubernetes, mostrando suas potencialidades através de exercícios práticos com a definição de um cluster, criação de uma aplicação para acompanhamento de métricas (dashboard), criação e execução de pods/contêineres, e amostragem de alguns exemplos de comandos.

**Resumo**

Na engenharia de sistemas distribuídos, um cluster é um conjunto de um ou mais servidores (computadores nós) que atuam como se fossem um único _pool_ de recursos. Cada servidor/nó hospeda um conjunto de PODs, que são as formas mais elementares de plataformas (contêineres) para se executar uma aplicação. Uma mesma aplicação pode ainda ter múltiplas instâncias de PODs e, quando um POD vem a tornar-se instável ou inoperante, os demais conseguem prover a computação demandada. Este é um dos pilares do processamento clusterizado: a tolerância a falhas. O outro pilar é a escalabilidade, que é fornecida através da capacidade do cluster crescer horizontalmente: quando temos necessidade de mais recursos apenas aumentamos o número de servidores (nós) no cluster. A escalabilidade pode ser, inclusive, automatizada (Auto-Scaling) conforme regras definidas pelos profissionais de engenharia.

O Kubernetes é uma poderosa plataforma de processamento distribuído implementada para atuar em clusters. Com ele, podemos fazer uso tanto da tolerância a falhas quanto da escalabilidade, além de automatizar muitos dos processos envolvendo a cultura DevOps. A Figura 1 nos mostra uma visão geral de como é arquitetado um servidor (nó) Kubernetes.

![Figura 1: diagrama de um cluster Kubernetes. Fonte: https://kubernetes.io/pt-br/docs/concepts/overview/components/](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1677785396169-l3ozjTofHV.png "Figura 1: diagrama de um cluster Kubernetes. Fonte: https://kubernetes.io/pt-br/docs/concepts/overview/components/")

Na Figura 1, podemos ver os seguintes componentes:

-   **API Server**: Componente da camada de gerenciamento do Kubernetes que expõe sua API. É o frontend para a camada de gerenciamento;
-   **etcd**: Implementa um armazenamento Chave-Valor consistente e em alta-disponibilidade, sendo usado como repositório de apoio do Kubernetes para todos os dados do cluster;
-   **Scheduler**: É o componente da camada de gerenciamento que observa os PODs recém-criados que estejam sem nenhum nó atribuído, selecionando um nó para executá-los;
-   **Controller-Manager**: Componente da camada de gerenciamento que executa os processos de controlador. Cada controlador está em um processo separado, mas são compilados num único binário e são executados em um único processo;
-   **Cloud-Controller-Manager**: Componente da camada de gerenciamento do Kubernetes que incorpora a lógica para controle específico em Cloud. Permite que você vincule seu cluster na API do seu provedor de nuvem, e separe os componentes que interagem com essa plataforma a partir de componentes que apenas interagem com seu cluster;
-   **kubelet**: Um agente que é executado em cada um dos nós do cluster. Ele garante que os contêineres estejam sendo executados em um POD;
-   **kube-proxy**: É um proxy de rede executado em cada nó do cluster, implementando parte do conceito de serviço do Kubernetes. O kube-proxy mantém regras de rede em cada nó que permitem a comunicação em rede com seus PODs a partir de sessões dentro ou fora de seu cluster;
-   **Contêiner Runtime**: É o agente de execução (runtime) do contêiner, sendo o software responsável pelas execuções.

Em nossos estudos trazemos uma versão local do Kubernetes, disponível na ferramenta Docker Desktop. O Docker executa a plataforma clusterizada em contêineres locais, operando como um cluster cuja infraestrutura está totalmente construída em um único servidor. Apesar de não ser o ambiente que iremos encontrar nas empresas, é interessante mencionar que o cenário simula com muita similaridade funcional tudo o que é experimentado na tecnologia corporativa. Na Figura 2, vemos como habilitar o Kubernetes no Docker Desktop v4.15.0, bastando seguir para a opção "_Settings_" (ícone de engrenagem no canto superior direito) e depois em "_Kubernetes → Enable Kubernetes_".

![Figura 2: local onde habilitar o Kubernetes para o Docker Desktop v4.15.0. Fonte: catálogo do professor autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1677785465439-HBOFKIfChu.png "Figura 2: local onde habilitar o Kubernetes para o Docker Desktop v4.15.0. Fonte: catálogo do professor autor.")

Figura 2: local onde habilitar o Kubernetes para o Docker Desktop v4.15.0. Fonte: catálogo do professor autor.

Após a habilitação do Kubernetes e de aguardar alguns poucos minutos, será possível enxergar na lista de contêineres do Docker Desktop os principais PODs do Kubernetes já em execução local. Para realizarmos alguns testes preliminares, podemos seguir com a instalação do _dashboard_ do cluster seguindo os seguintes passos:

1.  Execute o comando para instalar o contêiner contendo a implementação do dashboard:  
    _$ kubectl apply -f_ [_https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml_](https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml)
2.  Certifique-se que a porta 8001 está liberada (se o primeiro comando _lsof_ retornar vazio, vá direto para a etapa 3):  
    _$ sudo lsof -i :8001  
    $ kill -9 <PID dos Processos usando portas 8001>_
3.  Execute o dashboard:  
    _$ kubectl proxy_
4.  Antes de visitarmos o dashboard, precisamos de um usuário devidamente credenciado para o acesso. Navegue até o diretório raíz do projeto desta disciplina em [https://github.com/FaculdadeDescomplica/Advanced-BackEnd/](https://github.com/FaculdadeDescomplica/Advanced-BackEnd/). Lá você encontrará dois arquivos de configuração Kubernetes, sendo eles o "_dashboard-adminuser.yaml_" e o "_clusterRoleBinding.yaml_". Faça a criação do usuário e credencie-o para acessar o cluster:  
    _$ kubectl apply -f dashboard-adminuser.yaml  
    $ kubectl apply -f clusterRoleBinding.yaml_
5.  Com o usuário criado e credenciado, criei um token de acesso:  
    _$ kubectl -n kubernetes-dashboard create token admin-user_
6.  Anote o token fornecido na etapa 5, e acesse a URL da plataforma em: [http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/). Insira o token e faça o logon. Você deverá enxergar uma tela similar a que é mostrada pela Figura 3.

![Figura 3: dashboard do Kubernetes por onde podemos acompanhar métricas. Fonte: catálogo do professor autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1677785674542-4SGtqARxxx.png "Figura 3: dashboard do Kubernetes por onde podemos acompanhar métricas. Fonte: catálogo do professor autor.")

Figura 3: dashboard do Kubernetes por onde podemos acompanhar métricas. Fonte: catálogo do professor autor.

Agora com o Kubernetes instalado e com o dashboard operante, vamos testar alguns comandos. Em um terminal/prompt, execute as seguintes tarefas:

1.  Verifique a versão do seu Kubernetes:  
    _$ kubectl version_
2.  Verifique o contexto do seu Kubernetes:  
    _$ kubectl config current-context_
3.  Obtenha informações do cluster:  
    _$ kubectl cluster-info_
4.  Liste os servidores nós em execução:  
    _$ kubectl get nodes_

          Por fim, vamos agora criar uma aplicação conteinerizada para nosso cluster. O setup que este laboratório foi construído contempla as seguintes ferramentas:

-   Sistema Operacional OSX 11.7.1 BigSur;
-   Docker Desktop v4.15.0;
-   xCode com a versão mais recente:  
    _$ sudo rm -rf /Library/Developer/CommandLineTools  
    $ xcode-select --install_
-   NodeJS v16.13.0
-   NPM v8.1.0
-   Angular v15.0.1
-   Nginx v1.23.3

          A configuração exata deste conjunto de ferramentas não é obrigatória, e porventura sua implementação poderá ser criada sem problemas mesmo com algumas versões diferentes. É interessante salientar que instabilidades de versionamento e possíveis incompatibilidades podem vir a ocorrer com outro setup. Para executarmos nossa aplicação, procedamos com os seguintes passos:

1.  Com o Docker Desktop aberto, navegue via prompt até a raíz do projeto:  
    [https://github.com/FaculdadeDescomplica/Advanced-BackEnd/gitlab-ci-cd-hello-world](https://github.com/FaculdadeDescomplica/Advanced-BackEnd/gitlab-ci-cd-hello-world);
2.  Faça a atualização e download das dependências do Angular:  
    _$ npm install_
3.  Execute o localhost da aplicação Angular para verificação (acessível em [http://localhost:4200](http://localhost:4200/))  
    _$ ng serve -o_
4.  Crie o pacote para deployment:  
    _$ ng build_
5.  Construa uma imagem do Docker para ser executada em contêiner:  
    _$ docker build -t ng-docker-k8s:1.0 ._
6.  Suba a imagem no seu cluster Kubernetes, usando o arquivo ng-deployment como ponto de configuração:  
    _$ kubectl apply -f ng-deployment.yaml_
7.  Leia o arquivo ng-deployment.yaml. Entenda o que cada linha traz e define. Percebeu que existem configurações, inclusive, do número de PODs? Estamos subindo uma aplicação tolerante a falhas!
8.  Quando temos uma aplicação com vários PODs, quem as acessa de fora irá usar qual POD? Esta pergunta é respondida pelo LoadBalancer, um serviço que escolhe de forma criteriosa e equilibrada qual POD será disponibilizado a um cliente solicitante. Vamos criar o LoadBalancer:  
    _$ kubectl expose deployment angular-deployment --type=LoadBalancer --port=8080 --target-port=80_
9.  Visite a página [http://localhost:8080](http://localhost:8080/) e confira seu serviço Angular operante. A Figura 4 mostra o que você deverá estar enxergando:

![Figura 4: aplicação Angular em http://localhost:8080 após subir em cluster Kubernetes. Fonte: catálogo do professor autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1677785785344-h6zoY7kzZa.png "Figura 4: aplicação Angular em http://localhost:8080 após subir em cluster Kubernetes. Fonte: catálogo do professor autor.")

Figura 4: aplicação Angular em [http://localhost:8080](http://localhost:8080/) após subir em cluster Kubernetes. Fonte: catálogo do professor autor.

10.  Depois de verificar sua aplicação Angular, derrube o serviço e o deployment (não deixe recursos sendo utilizados sem propósito):  
    _$ kubectl delete -n default deployment angular-deployment  
    $ kubectl delete -n default service angular-service_

**Conteúdo bônus**

**Tópicos avançados**

O principal comando para interfacear com o cluster Kubernetes é o "_kubectl_". Fazer uma leitura das documentações do mesmo, bem como entender como ele funciona e quais os seus principais parâmetros é uma ótima idéia para alavancar seu conhecimento sobre Kubernetes. Apenas lembre-se que este comando só estará acessível se o Kubernetes estiver instalado na máquina em que estiver tentando chamá-lo.

Você pode ainda ter muito interesse no comando _"kubectl delete"_, que faz a exclusão, apagamento, remoção, ou cancelamento de recursos do cluster. A forma mais comum de executá-lo é da seguinte maneira:

_$ kubectl -n <target> delete <tipo\_recurso> <nome\_recurso>_

Para cancelar o credenciamento do usuário admin de nosso dashboard (um dos nossos exemplos práticos desta aula) você pode proceder com a seguinte linha:

_$ kubectl -n kubernetes-dashboard delete serviceaccount admin-user_

Ainda, algo interessante de ser mencionado é sobre o local em que o Kubernetes do Docker Desktop armazena credenciais e configurações. Em máquinas OSX, o local fica em _"~/.kube/config"_, e o conhecimento desta localidade é interessante caso você identifique que o seu ambiente encontra-se instável ou operando com processos/contêineres zumbis (que não podem ser derrubados).

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir:

[https://github.com/FaculdadeDescomplica/Advanced-BackEnd](https://github.com/FaculdadeDescomplica/Advanced-BackEnd)

<u><span><span><span>Referência Bibliográfica</span></span></span></u>

**Página do Projeto Kubernetes**. Orquestração de Contêineres Prontos para Produção, 2023. Disponível em: [https://kubernetes.io/pt-br/](https://kubernetes.io/pt-br/). Acesso em: 24/01/2023.