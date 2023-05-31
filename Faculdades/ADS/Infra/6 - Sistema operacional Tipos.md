#### Principais tipos de sistema operacional
Os sistemas operacionais podem ser divididos em dois tipos:
• Sistemas monoprogramáveis ou monotarefas: são caracterizados pelo modo como o processador, a memória e os dispositivos periféricos são dedicados a um único usuário (monousuário). Assim, enquanto o programa aguarda por um evento, por exemplo a digitação de uma informação, o processador não realiza qualquer tarefa, e a memória fica subutilizada caso o programa não a preencha totalmente.
• Sistemas multiprogramáveis ou multitarefas: são classificados pelo modo como suas aplicações são gerenciadas. Nesses sistemas, o tempo de utilização da CPU é muito maior, e a memória é utilizada com mais eficiência. Nos sistemas multiprogramáveis, vários programas podem utilizar o mesmo recurso, e nos multitarefas o usuário pode, por exemplo, editar textos, imprimir arquivos, acessar dados de uma planilha, ou seja, realizar várias tarefas ao mesmo tempo.

Para que os usuários possam executar várias tarefas, o sistema multiusuário utiliza um recurso chamado tempo compartilhado (time- -sharing), que na prática significa que o sistema operacional aloca uma fatia de tempo do processador e também de memória e periféricos que são então compartilhados. Não podemos esquecer que a velocidade do processador é muito maior do que memória e dispositivos periféricos. Graças a isso, os sistema operacional pode alocar diversas tarefas, ou seja, enquanto uma tarefa espera resposta de memória ou de dispositivo periférico, o processador pode executar outra tarefa. O gerenciamento das tarefas é feito por rotinas do sistema operacional.

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

A maioria dos computadores atuais tem processadores potentes e, por isso, pode ser multitarefa; isso é possível também por causa do uso direto da memória, o que faz com que o armazenamento primário possa ser subdividido em diversas partições maiores e, assim, cada parte pode ser utilizada por aplicações diferentes. Essa característica faz com que um computador possa se comportar como se fosse muitos, ou como máquinas virtuais,1 em que cada aplicação é executada de forma independente e simultânea (LAUDON; LAUDON, 2007).

Um sistema operacional para computadores utilizado por muito tempo foi o DOS (Disk Operating System), com características de sistema operacional de um único usuário e monotarefa e que depois a Microsoft complementou com uma interface gráfica e alguns recursos de multitarefa

#### Sistemas operacionais Windows para desktop
A partir de 1995, a Microsoft substituiu o DOS/Windows pelo Windows 95, uma versão de sistema operacional com interface gráfica para o usuário, recursos de multitarefa, serviços de rede e de multimídia. Já em 1998 é lançado o Windows 98 com diversos aprimoramentos e que depois daria origem ao Windows Me (Millennium Edition). Com o passar dos anos, a Microsoft lançou vários sistemas operacionais para desktops. Em 2001, lançou o Windows XP (eXPerience Professional) nas versões Home e Professional. Depois vieram o Windows 7, o Windows 8, o Windows 8.1 e o Windows 10. As diversas versões do sistema operacional para desktops agregaram novas funcionalidades e facilidades. E, como curiosidade, foi a partir do Windows 95 que o conceito de plug and play2 e a navegação na internet através do Internet Explorer foram desenvolvidos. O Windows 98 incorpora o padrão USB, que passou a ser amplamente utilizado. O Windows Millennium Edition foi a última versão de sistema operacional baseada no DOS. Lançada em 2000, é, segundo especialistas, a pior de todas as versões do Windows.

Em 2001 foi lançada a versão Windows XP, que ficou quase 13 anos com suporte. Segundo especialistas, foi a melhor versão de sistema operacional para desktop desenvolvida pela Microsoft. O Windows 7, lançado em 2009, trouxe poucas mudanças com relação ao Windows XP, sendo muito mais rápido, estável e mais fácil de utilizar. Com o avanço dos dispositivos sensíveis ao toque, a Microsoft lançou em 2012 o Windows 8. Entretanto, devido a mudanças radicais na aparência, que não agradou a todos, ele foi considerado um fracasso, apesar das novidades como o suporte ao USB 3.0 e a loja de aplicativos da Microsoft, onde o usuário poderia adquirir programas on-line. Como opção para diminuir a rejeição ao Windows 8, a Microsoft lançou o Windows 8.1, porém sem muitas novidades, a não ser a volta do botão do Menu Iniciar. Em 2014 foi lançado o Windows 10, com foco nos desktops. Várias funcionalidades para facilitar a vida dos usuários foram acrescentadas. Um dos grandes desafios dessa versão de Windows é reconquistar a confiança dos usuários, um tanto abalada com o Windows 8 (MICROSOFT, 2018).

**Sistemas operacionais Windows para servidores**
Para os sistemas operacionais desenvolvidos pela Microsoft para utilização em computadores servidores podemos começar com o lançamento do Windows NT (New Technology) em 1995, um multitarefa e multiusuário que permitia a instalação em diversos servidores de rede com a finalidade de gerenciar computadores com necessidades de alto desempenho. Versões de servidores e workstations (estações de trabalho) foram lançadas em 1997. Em 2000, após vários aperfeiçoamentos, foi lançada a versão Windows 2000.

Em 2003 a Microsoft lançou o Windows Server 2003, sendo um
Windows XP com algumas características “desligadas” no kernel e
com maior estabilidade. Acrescentou novas melhorias de rede e mais
serviços para administração. Uma atualização surgiu em 2005 e foi
chamada de Windows Server 2003 R2.
Em 2006 foi lançado o Windows Vista, com centenas de novas funcionalidades, como nova interface gráfica, novos recursos de pesquisa,
ferramentas de criação de multimídia, e os sistemas de rede, de impressão, de áudio e de vídeo. Uma funcionalidade colocada nessa versão de
sistema operacional foi a possibilidade de comunicação peer-to-peer,
que nada mais é do que a comunicação entre computadores de uma
rede doméstica, possibilitando o compartilhamento de arquivos de
mídia entre os diversos dispositivos. A preocupação com a segurança
e diminuição das vulnerabilidades também foi um dos maiores objetivos dessa versão.
Em 2008 foi lançado o Windows Server 2008, que ampliou as características do Windows Vista e apresentou quatro versões projetadas
para aplicações específicas (O’BRIEN; MARAKAS, 2013):

• Windows Server 2008, Standard Edition: voltado para uso em
pequenos servidores, para compartilhamento de arquivos e impressão, serviços de conectividade com a internet e intranet3 e ainda a execução de forma centralizada de aplicações.
• Windows Server 2008, Enterprise Edition: voltado para as aplicações coorporativas, com suporte a serviços XML4  (eXtensible Markup Language) na web.
Windows Server 2008, Datacenter Edition: voltado para aplicações corporativas e as de missão crítica, em que são exigidas
escalabilidade e disponibilidade altas.
• Windows Server 2008, Web Edition: voltado para serviços de
hospedagem de páginas web e para o desenvolvimento e a utilização de aplicações e serviços na web.

O Windows Server 2008 incorpora características do Windows Vista
e implementa novos recursos, como:
• processos de rede com IPv6 nativo, rede wireless nativa, melhorias na segurança e velocidade;
• instalação baseada em imagem, com implantação e recuperação
melhoradas, com novas ferramentas de diagnóstico;
• novos recursos de segurança e firewall com configuração mais
segura;
• processadores e dispositivos de memória modelados como dispositivos plug and play e conectados de forma automática.

O Windows Server 2012, lançado em setembro de 2012, acrescenta novos recursos com ênfase em computação em nuvem, atualização do software Hyper-V para virtualização e um novo sistema de arquivo. Em 2014 foi lançado a versão Windows Server 2012 R2.

#### Sistema operacional Unix
O sistema operacional Unix foi desenvolvido por Ken Thompson nos laboratórios da Bell AT&T em 1965. É multitarefa, multiusuário e gerenciador de redes e, graças a sua portabilidade, pode ser executado em computadores de pequeno, médio ou grande porte. Possui vários interpretadores de comandos (shell) e vários utilitários (montadores, compiladores para diversas linguagens de programação, processadores de texto, serviços de e-mail, serviços de banco de dados, etc.).

A evolução do sistema operacional Unix e a distribuição dos códigos fonte junto às universidades fez com que surgissem duas linhas de
desenvolvimento:
• Linha desenvolvida pela AT&T, que se tornou o System V do Unix
System Labs.
• Linha desenvolvida na Universidade da Califórnia, que se chamou BSD (Berkeley Software Development).
Em 1977, com a disponibilização das fontes dos arquivos do sistema operacional pela AT&T, várias empresas desenvolveram seus sistemas similares ao Unix.
• AIX – desenvolvido pela IBM, com base no System V.
• Sun Solaris – desenvolvido pela Sun Microsystems, com base no
System V e BSD.
• HP-UX – desenvolvido pela HP e baseado no System V.
• Ultrix – desenvolvido pela DEC.
• Unixware – desenvolvido pela Novell.
• Unix SCO – desenvolvido pela Santa Cruz Operation e HP, baseado no System V

*"Em 1985, o professor Andrew Tanembaum, com o objetivo de ensinar programação de computadores, desenvolveu um sistema operacional mínimo e o chamou de Minix. Em 1991, o estudante finlandês Linus Torvalds desenvolveu um sistema operacional tendo como base o Minix. Esse sistema funcionava nas arquiteturas de processadores 386 – que são os processadores dos computadores pessoais. Essa iniciativa deu origem ao que ficou conhecido como sistema operacional Linux."*

#### Sistema operacional Linux
O sistema operacional Linux, similar em algumas características ao sistema operacional Unix, possui baixo custo, é confiável e tem grande aceitação no mercado de servidores como um sistema operacional de alto desempenho. Sua utilização em servidores de rede e de web para os mais variados tipos e tamanhos de empresa o tem colocado em forte crescimento. Como o sistema operacional Linux foi construído utilizando o conceito de software de código aberto ou software livre, existem diversos programadores no mundo todo contribuindo para seu desenvolvimento.

*"o conceito de software de código aberto vem se ampliando além do sistema operacional Linux. A ideia básica por trás do código aberto é bem simples: se os programadores puderem ler, redistribuir e modificar o código-fonte de uma parte do software, este evoluirá."*

Com esse conceito, criou-se uma comunidade de desenvolvedores do software de código aberto. Isso tornou mais rápido o ciclo de desenvolvimento e o surgimento de novas aplicações; os erros vão sendo corrigidos e a solução de software proposta vai se tornando mais estável. O conceito de software de código aberto pode ser desenvolvido com vários modelos de distribuição para que não entre em conflito com os chamados softwares proprietários, que têm licença de uso e são comercializados.

Existem diversas distribuições do sistema operacional Linux, como: Mandriva, Suse, Ubuntu, Slackware, Debian, Fedora, Red Rat, entre outras. O kernel dessas distribuições está baseado na versão original de Linus Torvalds e a ele são acrescentadas funcionalidades conforme a aplicação desejada. Além disso, ambientes gráficos são desenvolvidos e incorporados às versões que estão em desenvolvimento.

#### Sistema operacional Mac OS X
Os computadores da Apple, os chamados iMac, possuem um sistema operacional desenvolvido especificamente para eles; possuem interface gráfica avançada, multitarefa e multiusuário, com recursos integrados para navegador web, correio eletrônico, mensagens instantâneas, tocador de mídia e diversas outras características para o usuário.

O Mac OS X também incluiu uma série de características destinadas a tornar o sistema operacional mais estável e confiável que os sistemas operacionais anteriores da Apple. A preemptividade5 e a proteção de memória, por exemplo, aprimoraram a capacidade do sistema operacional em executar vários aplicativos simultaneamente sem que estes interrompam ou corrompam uns aos outros.


#### Sistemas operacionais para dispositivos móveis
Os dispositivos móveis também necessitam de sistema operacional e existem diversos sistemas operacionais para celulares e smartphones no mercado

**Android:** desenvolvido pela Google, utilizando como base o núcleo do sistema operacional Linux. Possui conexão com as redes
sem fio – bluetooth, wi fi, 3G e 4G. Com a arquitetura de software
em código aberto, pode ser alterado e adaptado para diversos
hardwares de celulares e smartphones. Os aplicativos podem ser
adquiridos nas lojas da Play Store.
**• Mac OS X (IOS):** desenvolvido pela Apple para ser utilizado nos
iPhones e iPads. Foi o primeiro sistema operacional desenvolvido para telefones celulares incorporando tecnologias de toque e
adaptadas à multimídia (imagens, vídeos e músicas). Os aplicativos podem ser adquiridos nas lojas da Apple Store. Uma curiosidade é que até o momento não existem vírus para esse sistema
operacional.
**• Symbian:** sistema operacional desenvolvido pelas empresas
Nokia, Ericsson, Motorola e Panasonic. Possui simplicidade e seu
maior foco é na rapidez e acessibilidade. Esse sistema operacional pode ser licenciado para uso em dispositivos que sejam de
outros fabricantes.
**• Windows Phone:** desenvolvido pela Microsoft e baseado no
Windows CE. Utiliza hardware específico para que possa operar
corretamente. Integra os aplicativos de escritório da versão para
computador, da Microsoft.