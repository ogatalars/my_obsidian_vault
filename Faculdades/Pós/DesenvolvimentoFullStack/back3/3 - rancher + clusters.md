**Introdução**

Um tempo depois dos primeiros contatos com os clusters e com Kubernetes, percebemos que também temos a necessidade de combinar diferentes clusters, disponibilizados por diferentes origens e provedores. Ora, podemos fazer uso de um cluster on-premise (tecnologia local) combinada com um provedor em nuvem. Para este cenário, como gerenciar diferentes clusters?

O Rancher vem para ajudar engenheiros de DevOps no que tange a criação, definição de políticas de uso, permissionamento, gerenciamento, e operação de múltiplos clusters, independente de onde estejam hospedados.

**Objetivos da aula**

O objetivo deste módulo é o de introduzir a ferramenta Rancher integrada ao Kubernetes e quais seus benefícios no ambiente da Cloud Computing. Veremos, de forma prática, como configurar uma versão do Rancher, executando em um cluster Kubernetes localhost através do Docker Desktop, explorando seu dashboard de funcionalidades e entendendo como configurar Agentes Rancher adicionais para compor nosso Kubernetes com outros clusters.

**Resumo**

Preliminarmente à nossa etapa prática, vamos apresentar brevemente a tecnologia que iremos trabalhar neste módulo. Trata-se do Rancher, uma ferramenta criada para a gestão de múltiplos clusters heterogêneos quanto a ser servido por Cloud ou em on-premise, híbrido, e também quanto ao provedor (AWS, Azure, Google, IBM, etc). Com o Rancher você pode centralizar operações comuns a todos os clusters como por exemplo a camada de autenticação e credenciamento (Auth, IAM, e Roles), bem como as configurações de intercomunicação de redes entre os clusters (regras de firewall). A arquitetura do Rancher funciona conforme mostrado na Figura 1. O servidor Rancher gerencia vários clusters Kubernetes simultaneamente criados de forma customizada ou diretamente nas máquinas agentes através da execução de comandos em prompt que registram o Agente Rancher. Os usuários podem gerenciar vários clusters Kubernetes por meio de um proxy de autenticação que encaminha todas as chamadas da API do Kubernetes para clusters _downstream_ (clusters hospedados). Para obter o melhor desempenho e segurança, recomenda-se um cluster Kubernetes dedicado para o servidor Rancher. Depois de implantar o Rancher, podemos criar ou importar outros clusters.

Agora que temos um embasamento introdutório da tecnologia Rancher, vamos colocar a mão na massa com nosso laboratório. Iremos criar nosso servidor Rancher que usará o próprio cluster do Docker Desktop como plataforma de funcionamento. O ambiente é todo construído localmente e com propósitos unicamente de testes, mas você poderá exercitar as principais sequências para configurar de forma efetiva seu servidor Rancher. A última etapa mostrará como levantar outros clusters Kubernetes, registrando-os a partir de outras máquinas que contenham o Kubernetes instalado previamente. Para proceder com nosso laboratório execute os seguintes passos:

1.  No Docker Desktop, habilite o Kubernetes em "_Settings → Kubernetes → Enable Kubernetes_". Navegue até o diretório raíz do repositório de projetos desta disciplina, local que contém os arquivos _"dashboard-adminuser.yaml"_ e _"clusterRoleBinding.yaml"_.
2.  Certifique-se de que possui o dashboard do cluster instalado e execute o proxy para o dashboard (se sua porta 8001 estiver ocupada, dê "kill -9" no processo que estiver ocupando a porta:  
    _$ kubectl apply -f_ [_https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yam  
    $ localhost proxyl_](https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml)
3.  Crie os PODs de certificação, que irão assegurar que o Rancher Agent possa se comunicar e se instalar no cluster. Se necessário, instale o helm (comando para interfacear com instalações de pacotes no Kubernetes):  
    _$ helm repo add rancher-stable_ [_https://releases.rancher.com/server-charts/stable_](https://releases.rancher.com/server-charts/stable)  
    _$ kubectl create namespace cattle-system  
    $ kubectl apply -f_ [_https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml_](https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml)  
    _$ helm repo add jetstack_ [_https://charts.jetstack.io_](https://charts.jetstack.io/)  
    _$ helm repo update  
    $ helm install cert-manager jetstack/cert-manager --namespace cert-manager --create-namespace --version v1.7.1_
4.  Verifique que os PODs que gerem os certificados estão operantes:  
    _$ kubectl get pods --namespace cert-manager_  
    Ao executar o comando acima você terá uma lista com os PODs e seus respectivos status de prontidão (_ready_).

1.  Proceda com a instalação do Agente Rancher, que pode ser feita de duas formas possíveis:

a. Executando o comando: _$ helm install rancher rancher-stable/rancher --namespace cattle-system --set hostname=rancher.descomplica.org --set bootstrapPassword=admin_

b. Executando o comando: _$ docker run -d --name rancher-server --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher:latest --no-cacerts_

6.  Verifique a execução de todos os contêineres. Após alguns minutos, você terá um dashboard do Docker Desktop similar ao que é mostrado na Figura 2.

![Figura 2: contêineres do Kubernetes e Rancher em execução no Docker Desktop. Fonte: catálogo do professor autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1677786271724-6yRin4mILq.png "Figura 2: contêineres do Kubernetes e Rancher em execução no Docker Desktop. Fonte: catálogo do professor autor.")

Figura 2: contêineres do Kubernetes e Rancher em execução no Docker Desktop. Fonte: catálogo do professor autor.

![Figura 3: tela de logon do Rancher, com instruções para o credenciamento. Fonte: catálogo do professor autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1677786327227-YRgQrRXYxD.png "Figura 3: tela de logon do Rancher, com instruções para o credenciamento. Fonte: catálogo do professor autor.")

Figura 3: tela de logon do Rancher, com instruções para o credenciamento. Fonte: catálogo do professor autor.

![Figura 4: seção para configurar seus próximos clusters Kubernetes. Fonte: catálogo do professor autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1677786378188-zSD620gOVi.png "Figura 4: seção para configurar seus próximos clusters Kubernetes. Fonte: catálogo do professor autor.")

Figura 4: seção para configurar seus próximos clusters Kubernetes. Fonte: catálogo do professor autor.

Este laboratório se propôs a mostrar como é a configuração do Rancher e de outros clusters, sejam eles locais ou remotos, de mesmos provedores ou não. Caso tenha interesse e curiosidade é recomendado que explore as opções que o Rancher oferece, sendo possível praticar muitas das operações de gestão de clusters através desta ferramenta completamente em localhost.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir:

[https://github.com/FaculdadeDescomplica/Advanced-BackEnd](https://github.com/FaculdadeDescomplica/Advanced-BackEnd)

<u><span><span><span>Referência Bibliográfica</span></span></span></u>

**Página do Projeto Rancher**. What Is Rancher, 2023. Disponível em: [https://ranchermanager.docs.rancher.com/v2.6/getting-started/overview](https://ranchermanager.docs.rancher.com/v2.6/getting-started/overview). Acesso em: 24/01/2023.