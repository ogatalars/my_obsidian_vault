#### Principais tipos de sistema operacional
Os sistemas operacionais podem ser divididos em dois tipos:
• Sistemas monoprogramáveis ou monotarefas: são caracterizados pelo modo como o processador, a memória e os dispositivos periféricos são dedicados a um único usuário (monousuário). Assim, enquanto o programa aguarda por um evento, por exemplo a digitação de uma informação, o processador não realiza qualquer tarefa, e a memória fica subutilizada caso o programa não a preencha totalmente.
• Sistemas multiprogramáveis ou multitarefas: são classificados pelo modo como suas aplicações são gerenciadas. Nesses sistemas, o tempo de utilização da CPU é muito maior, e a memória é utilizada com mais eficiência. Nos sistemas multiprogramáveis, vários programas podem utilizar o mesmo recurso, e nos multitarefas o usuário pode, por exemplo, editar textos, imprimir arquivos, acessar dados de uma planilha, ou seja, realizar várias tarefas ao mesmo tempo.

Para que os usuários possam executar várias tarefas, o sistema multiusuário utiliza um recurso chamado tempo compartilhado (time- -sharing), que na prática significa que o sistema operacional aloca uma fatia de tempo do processador e também de memória e periféricos que são então compartilhados. Não podemos esquecer que a velocidade do processador é muito maior do que memória e dispositivos periféricos. Graças a isso, o sistema operacional pode alocar diversas tarefas, ou seja, enquanto uma tarefa espera resposta de memória ou de dispositivo periférico, o processador pode executar outra tarefa. O gerenciamento das tarefas é feito por rotinas do sistema operacional.

Os sistemas operacionais possuem características que os diferem quanto à arquitetura de hardware onde serão executados, e escolher o sistema operacional que melhor se adapta ao hardware dará às aplicações e aos negócios maior performance e facilidade no uso.

#### Sistema operacional para computadores de grande porte
Os computadores de grande porte são diferentes de outros computadores em termos da capacidade de E/S (entrada/saída). Assim disponibilizam muito espaço de armazenamento. Os sistemas operacionais para esses computadores são orientados para processamento simultâneo de muitas tarefas (chamadas de jobs) com enormes quantidades de E/S. Os serviços disponibilizados são: em lote (também chamado de batch), processamento de transações e os de tempo compartilhado. Os mainframes são exemplos desses computadores de grande porte. Atualmente, novos servidores web e servidores para transações têm sido desenvolvidos pelos fabricantes. Empresas como a IBM têm desenvolvido sistemas operacionais para computadores de grande porte. Um exemplo disso é o sistema operacional z/OS.

#### Sistema operacional de servidores
Os computadores servidores possuem uma arquitetura de hardware desenvolvida para que vários usuários em rede possam utilizar seus recursos ao mesmo tempo; sua função é compartilhar recursos de hardware e software. Esse tipo de sistema operacional deve fornecer um bom gerenciamento de recursos, serviços de impressão, serviços de arquivos e serviços web.
Atualmente, diversos sistemas operacionais se encaixam nessa categoria, por exemplo: Unix, Windows Server, Linux (e suas diversas distribuições) e outros.

#### Sistema operacional de multiprocessadores
Para aumentar o poder computacional de um servidor, uma estratégia é interligar várias CPUs em um único sistema. Esses sistemas podem ser chamados de computadores paralelos, multicomputadores ou multiprocessadores. Esse sistema operacional deve ter programas específicos de comunicação e conectividade.

Nesse sistema operacional temos o conceito de **cluster** – conjunto de computadores que utiliza um sistema operacional para gerenciar os serviços dos sistemas distribuídos. São muito utilizados para serviços de alta disponibilidade e podemos considerá-los em três categorias:

**Cluster de alta disponibilidade:** os sistemas permanecem funcionando por um longo tempo, e podemos dizer que eles nunca
param e podem oferecer serviços onde essa necessidade seja
importante.
• **Cluster de alto desempenho:** os sistemas nesse caso possibilitam uma alta carga de processamento. Um exemplo são os sistemas que demandam grande quantidade de cálculos.
• **Cluster de balanceamento de carga:** já esse tipo de cluster tem
por função controlar a distribuição equilibrada do processamento.

Como exemplos de sistemas operacionais com características para cluster podemos citar: Failover Cluster Windows, VMware ESXi e o Heartbeat do sistema operacional Linux. Desses exemplos apenas o sistema operacional Linux é gratuito, os demais dependem da aquisição de licença.

#### Sistema operacional para computadores pessoais
São os sistemas operacionais para uso em computadores pessoais ou computadores utilizados na empresa como estação de trabalho (os desktops dos usuários). Como exemplos de sistemas operacionais para usuários temos: Windows da Microsoft, MacOS para os computadores Macintosh da Apple e as diversas distribuições Linux.

#### Sistema operacional para dispositivos portáteis
São os sistemas operacionais utilizados em dispositivos portáteis. Nessa categoria vamos colocar os celulares, os smartphones e os iPod (tocador de música) e o iPad Touch (computador portátil). Como exemplos de sistemas operacionais para dispositivos portáteis temos o iOS (sistema da Apple para uso em celulares iPhone, iPod e iPad Touch), o Android (sistema operacional para celulares e smartphones, desenvolvido pela empresa Google, com base no núcleo do sistema operacional Linux) e o Windows Phone

#### Sistema operacional de tempo real
Para determinadas aplicações o tempo é um parâmetro fundamental, e isso significa que a execução de tarefas exige confiabilidade em tempo bastante preciso. São chamados de sistema operacional de tempo real (RTOS – Real Time Operating Systems). As rotinas para o processamento são muito especializadas e curtas para que possam executar a tarefa no menor espaço de tempo: as atividades com maior prioridade são executadas primeiro pelo processador, interrompendo alguma outra atividade de menor prioridade.
Como as tarefas são divididas em rotinas bem especializadas (fazem uma ação bem específica), o sincronismo e o gerenciamento das interrupções são ações muito importantes desse tipo de sistema operacional. São exemplos de uso de sistema operacional de tempo real: sistemas de controle de tráfego aéreo, sistemas de controle de processos industriais, sistemas de robôs, sistemas médicos

#### Sistema operacional embarcado
O sistema operacional embarcado é utilizado para pequenos dispositivos, pois realiza poucas funções. É importante considerar que esse tipo de sistema operacional deve trabalhar com restrições de tamanho, memória e de consumo de energia. Como exemplos de uso de sistema operacional embarcado temos: equipamentos eletrodomésticos, os celulares, os setups box de TV digital, entre outros.

#### Sistema operacional de cartões inteligentes
Os sistemas de cartões inteligentes (smart cards) são dispositivos do tamanho de um cartão de crédito, com uma CPU dentro dele, e com restrições quanto ao consumo de energia e à memória. São dispositivos que podem ter uma função específica, como pagamentos eletrônicos, ou com mais funções. O sistema operacional para os cartões inteligentes é bem simples e dedicado. São exemplos de uso de cartão inteligente: os cartões de controle de acesso, os cartões de bilhetes de passagens e o cartão utilizado como substituto do dinheiro

### Categorias do uso do sistema operacional 
Como já dissemos, os sistemas operacionais são projetados para
diversos tipos de equipamentos e podem ser divididos em:
• sistemas operacionais para mainframes;
• sistemas operacionais para desktops;
• sistemas operacionais para servidores;
• sistemas operacionais para dispositivos móveis (celulares e
tablets). 

Vamos nos concentrar nos sistemas operacionais para desktop, servidores e dispositivos móveis. A maioria dos computadores atuais tem processadores potentes e, por isso, pode ser multitarefa; isso é possível também por causa do uso direto da memória, o que faz com que o armazenamento primário possa ser subdividido em diversas partições maiores e, assim, cada parte pode ser utilizada por aplicações diferentes. Essa característica faz com que um computador possa se comportar como se fosse muitos, ou como máquinas virtuais,1 em que cada aplicação é executada de forma independente e simultânea (LAUDON; LAUDON, 2007).