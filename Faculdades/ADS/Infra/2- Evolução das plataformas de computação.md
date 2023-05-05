#### 1 Mainframe – 1a plataforma
A história de utilização de computadores para solucionar os problemas das organizações e gerenciar milhares de processos deu um grande salto com a evolução da eletrônica dos semicondutores, que permitiu a construção de equipamentos com processadores mais rápidos, menores e com menor consumo de energia. Diversas tecnologias também contribuíram para o desenvolvimento de sistemas de memória e de armazenamento.

Assim, as necessidades passam a ser o processamento de um volume grande de informações e o atendimento a muitos usuários conectados em terminais de acesso direto ou por meio de uma rede. **Com essas características surge o termo “mainframe”, um gabinete onde ficava a unidade central de processamento.** O surgimento dos mainframes acontece em 1964 com o lançamento do sistema 360 da IBM (IBM System/360), sendo esse o maior projeto da empresa na época (IBM, [s.d.])

A estrutura de um ambiente com mainframe envolvia diversos terminais, nos quais a entrada de dados era feita pelos usuários geralmente via teclado; e a saída era através de um terminal de vídeo ou uma impressora. Todo o processamento das informações era realizado no mainframe. Os terminais não tinham processamento devido à limitação imposta pela tecnologia eletrônica da época. Segundo Laudon e Laudon (2007, p. 125), ***“um mainframe é um computador de alto desempenho e grande capacidade, capaz de processar gigantescas quantidades de dados com extrema velocidade”.*** Os mainframes são computadores dimensionados para aplicações em que a exigência de recursos é muito alta. Os processadores são montados para que o mainframe não seja desligado, mantendo a execução de tarefas em paralelo sem que uma comprometa a outra

São componentes dos primeiros mainframes:
• **Processadores:** utilizados e montados de tal forma que podem
ser colocados ou retirados sem desligar o mainframe.
• **Discos:** utilizados para armazenamento dos dados; contam com
a tecnologia de conjunto redundante de discos independentes
(RAID – Redundant Array of Inexpensive Disks), que gerencia o
armazenamento de maneira que os dados não sejam comprometidos, mesmo que aconteçam falhas.
• **Fitas:** no início dos mainframes eram essenciais, pois os discos
armazenavam o sistema operacional (que gerenciava o uso dos
recursos de hardware do mainframe) e os aplicativos; os dados
gerados eram armazenados em fitas.
• **Sistemas operacionais:** são o conjunto de rotinas que possibilitam a utilização dos recursos de hardware do mainframe. Eram desenvolvidos para processar textos e banco de dados e para
fazer cálculos, sendo específicos para cada modelo

A principais características de mainframes são (CA TECHNOLOGIES, 2018): 
- É um servidor corporativo com capacidade para processar uma grande quantidade de transações por segundo.
- A plataforma de hardware e software que apresenta maior índice de segurança, disponibilidade, escalabilidade e uso eficiente de energia.
- É utilizado como servidor de grande porte e de missão crítica.
- Pode atender a milhões de usuários com um único servidor e sistema operacional.
- O ambiente virtualizado está estabilizado há mais de 40 anos.


#### Cliente-servidor – 2a plataforma
Com o desenvolvimento da microeletrônica e o surgimento de computadores mais acessíveis em custo, tamanho e capacidades de processamento e armazenamento, os usuários começaram a ter seus aplicativos funcionando em suas mesas de trabalho, o que deu origem ao desktop. 

As informações ficavam então espalhadas pelos diversos computadores, o que dificultava a organização e a disponibilização dos dados para os vários departamentos e usuários. A tecnologia cliente-servidor consiste em uma arquitetura na qual o processamento das informações é dividido em partes ou processos distintos. 

Um desses processos, responsável pela manutenção da informação, é executado no servidor; um outro processo, este responsável pela aquisição dos dados, é executado no cliente. 

Com essa divisão de funcionalidades, os processos podem ser executados em plataformas independentes, que interagem compartilhando os recursos e obtendo o máximo de cada equipamento existente na rede de computadores da organização. 

**Na arquitetura cliente-servidor, os servidores prestam serviços aos processos dos usuários, isto é, executam as solicitações de tarefas mediante um pedido feito pelo cliente e retornam uma resposta, ou seja, devolvem os dados solicitados.**

**Os clientes solicitam, por meio de um pedido, um serviço a ser executado pelo servidor. É importante observar que, enquanto o servidor está trabalhando no processo solicitado, o cliente está livre para realizar outras tarefas. O cliente é a parte da arquitetura que se relaciona com o usuário e deve possuir uma interface “amigável”, conhecida como o front-end da aplicação. Os clientes podem solicitar os serviços ao servidor, mas não podem oferecê-los a outros clientes.**

O servidor gerencia todas as solicitações de serviços e pode oferecer respostas a diversos clientes, utilizando os recursos de forma compartilhada. 

O processo servidor é chamado de **back-end.** Os servidores podem prestar serviços de banco de dados, de impressão, de servidores web, etc.; assim as diversas aplicações de negócios da organização podem ser atendidas. 

Os usuários executam suas tarefas no computador local e não percebem a diferença entre acessar o recurso que desejam, local ou remotamente. Logo, a localização do servidor e a comunicação com ele não importam. Os responsáveis pelo projeto da infraestrutura de TI, estes sim, devem utilizar estratégias para garantir aos usuários velocidade, segurança e disponibilidade dos serviços. Os clientes se relacionam com o servidor por meio de uma requisição, e as informações solicitadas são desenvolvidas de acordo com as regras dos negócios e da lógica da aplicação

**Os clientes se relacionam com o servidor por meio de uma requisição, e as informações solicitadas são desenvolvidas de acordo com as regras dos negócios e da lógica da aplicação**

**Na arquitetura *cliente-servidor two-tier (duas camadas*), o cliente se comunica diretamente com o servidor. Suas características são:
• A base de dados fica armazenada no servidor.
• As regras e a lógica da aplicação ficam armazenadas no cliente.
• Quando uma aplicação é alterada, os bancos de dados e as aplicações do cliente também precisam ser alterados.
• A aplicação do cliente deve ser instalada em todos os computadores dos usuários.
**

**Na arquitetura *cliente-servidor three-tier (três camadas*), existe
uma camada intermediária entre o cliente e o servidor. Suas características são:
• A camada intermediária tem a função de armazenar as regras do
negócio e a lógica da aplicação.
• O cliente é responsável apenas pela interface com o usuário.
• Quando uma alteração acontece na camada intermediária é
imediatamente assumida por todas as aplicações e pelo banco
de dados
A arquitetura cliente-servidor, muito utilizada em diversas organizações para a construção da infraestrutura de TI, apresenta algumas características que precisam ser consideradas, por exemplo: aumento do custo do hardware, tanto no servidor quanto no cliente; custo do software, e aí incluem-se o servidor de banco de dados, os aplicativos e as ferramentas de desenvolvimento e administração.**

Ao digitar o endereço de uma página da internet em um navegador, estamos acessando um servidor com uma aplicação que recebe as chamadas dos usuários, as processa e devolve um conteúdo no formato do que conhecemos como página web. Ao utilizarmos um serviço de busca de previsão de tempo, utilizamos um applet1 em nosso celular que irá buscar os dados em um servidor

#### 3 Combinação de tecnologias – 3a plataforma
As organizações e seus modelos de negócios têm desenvolvido diversos novos modelos e aplicações em que a infraestrutura de TI se tornou fundamental. Há um número cada vez maior de transações por segundo, e o armazenamento das informações exige cada vez mais espaço em disco. O fenômeno do Big Data, com a geração de altos volumes de dados, e o crescimento diário desses volumes, e ainda os diversos monitoramentos de sensores, como os das condições climáticas de uma determinada região, realizados por milhares de sensores ligados a veículos autônomos. É a tecnologia da internet das coisas (em inglês, IoT – Internet of Things), colocando milhares de dados nas redes de comunicação e nos servidores de banco de dados.

*As tecnologias de mainframe e cliente-servidor sozinhas não conseguem mais dar suporte a todo esse crescimento. Assim, novas tecnologias surgem não para concorrer umas com as outras, mas para dar suporte, juntas, às necessidades das organizações e aos novos modelos de negócios*

