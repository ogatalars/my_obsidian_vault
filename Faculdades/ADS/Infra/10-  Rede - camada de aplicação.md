#### 1 Protocolos da camada de aplicação
As empresas e seus usuários produzem diversos tipos de informação. Então pode-se dizer que a “rede humana” gera dados. A função da camada de aplicação é preparar a comunicação humana para ser transmitida por meio de uma rede de dados. Por outro lado, a camada de aplicação recebe os dados da rede e os prepara para que a rede humana possa utilizá-los, de forma inteligível. Assim, temos a função básica da camada de aplicação. Uma aplicação de rede é formada por pares de processos que enviam e recebem mensagens. **O que inicia a comunicação é chamado de cliente; o que espera o contato é chamado de servidor**. Esses processos necessitam de uma interface de comunicação entre eles: **o socket.**

*Um processo é semelhante a uma casa e seu socket, à porta da casa. Quando um processo quer enviar uma mensagem a outro processo em outro hospedeiro, ele empurra a mensagem pela porta (socket). O emissor admite que existe uma infraestrutura de transporte do outro lado de sua porta que transportará a mensagem pela rede até a porta do processo destinatário. Ao chegar ao hospedeiro destinatário, a mensagem passa pela porta (socket) do processo receptor, que então executa uma ação sobre a mensagem.*

**A comunicação por socket através da internet possibilita que dois processos possam trocar informações, sendo então a interface entre a camada de aplicação e a de transporte e que ficam dentro do hospedeiro. Também é chamado de interface de programação de aplicação, API (Application Programming Interface), entre a rede e a aplicação (ROSS; KUROSE, 2013).*

A camada de transporte é o protocolo TCP. Nesse caso, o desenvolvedor do software tem controle na camada de aplicação do socket, mas pouco ou nenhum controle na camada de transporte. Os controles da camada de transporte que o desenvolvedor tem são: selecionar o protocolo da camada de transporte (TCP ou UDP)1 e em alguns casos determinar alguns parâmetros, por exemplo: tamanho máximo de buffer e de segmentos. O desenvolvedor, ao construir a aplicação e a comunicação com a rede, selecionará o protocolo para o transporte, ou seja, se a aplicação precisa de um transporte confiável dos dados, em que diversos recursos de garantia de entrega e verificação são efetuados, nesse caso será utilizado o protocolo TCP; se a aplicação não precisar de garantia de entrega dos dados, então optará pelo uso do protocolo UDP. É importante salientar que os dois protocolos da camada de transporte se responsabilizam por enviar os dados da aplicação através da rede. A principal diferença entre eles está no controle do envio dos dados. O desenvolvedor pode optar por utilizar o protocolo UDP, que, embora mais rápido, não controla o envio. Caberá ao desenvolvedor implementar em sua aplicação, caso seja de seu interesse, os diversos controles para a garantia da entrega dos dados.

UDP (User Datagram Protocol) – protocolo da camada de transporte que faz a entrega de mensagens entre as aplicações, sem os controles de entrega e garantia que o protocolo TCP possui.

Para a comunicação entre os hospedeiros (emissor e receptor), é preciso que se tenha um processo funcionando em cada um deles. Para a identificação do processo receptor, é necessário que se tenha o endereço do hospedeiro e um identificador que especifique o processo receptor no hospedeiro de destino (ROSS; KUROSE, 2013). Na internet, é utilizado o endereço IP para identificar o hospedeiro e para identificar o processo no hospedeiro, ou seja, o socket é informado por meio de um número de porta. Esses números de portas são padronizados, e assim uma aplicação recebe um número de porta padrão, como a aplicação do servidor web, que é identificado pela porta 80.

**Servidor DNS**
Sistema de gerenciamento de nomes
Possui nível hierárquico
Faz relação entre nome de domínio e endereço IP
Utiliza a porta 53

**E-mail**
Enviar e-mail
Utiliza protocolo SMTP (Simple Mail Transfer Protocol)
Utiliza a porta 587 para enviar
**Receber e-mail**
Utiliza protocolo POP 3 (Post Office Protocol)
Utiliza a porta 110 para receber
**Webmails**
modernos
Utiliza protocolo ICMP (Internet Message Access Protocol)
Utilizado para ler a mensagem, sem transferi-la do
servidor
**Servidor web**
Utiliza protocolo HTTP
Transfere conteúdos da web para os navegadores
Utiliza porta 80
**Servidor web seguro**
Utiliza protocolo HTTP
Utiliza porta 443
**Servidor FTP**
Utiliza o protocolo FTP
Utilizado para transferência de arquivos
Utiliza as portas 20 e 21
**Servidor DHCP** Utiliza o protocolo DHCP (Dynamic Host Configuration Protocol) Atribui dinamicamente endereços IP a máquinas de uma rede local

#### Servidor Web
Esse tipo de servidor é o grande atrativo da utilização da internet nas empresas, funcionando sob a demanda das solicitações de serviços feitas pelos usuários. Com muitas facilidades e inovação proporcionou um grande crescimento nos negócios. A disponibilidade de novos serviços de forma mais fácil para os desenvolvedores se deve à padronização dos protocolos e à interoperabilidade. As informações dos mais diversos sistemas estão disponibilizadas nas páginas web. Um servidor web mantém a estrutura e, por meio do protocolo HTTP (Hypertext Transfer Protocol), disponibiliza páginas com textos, imagens, vídeos e outros objetos. O socket para o protocolo HTTP é identificado pelo número 80. Em algumas situações o acesso a páginas web deve ser feito de forma segura. Nesse caso, o protocolo a ser utilizado é o HTTPS (Hypertext Transfer Protocol Secure), que é uma versão do HTTP, só que os dados são transmitidos através de uma conexão criptografada. O socket para o protocolo HTTP é identificado pelo número 443.

#### Servidor de e-mail
Outra aplicação muito utilizada pelos usuários é o serviço de e-mail, que trabalha com três componentes principais: agentes de usuário, servidores de correio e o SMTP (Simple Mail Transfer Protocol) (ROSS; KUROSE, 2013)

Os agentes de usuário possibilitam que os usuários possam ler, responder, encaminhar, salvar e escrever mensagens. Para enviar uma mensagem, o agente de usuário envia a mensagem ao servidor de correio, que a coloca em uma fila de mensagens de saída. O agente de usuário do destinatário, então, acessa a mensagem da caixa de entrada de seu servidor de correio. A estrutura central de correio eletrônico está no servidor de correio, onde cada destinatário possui uma caixa postal, que armazena as mensagens de entrada e saída.

O outro agente do sistema de correio eletrônico é o SMTP. Segundo Ross e Kurose (2013, p. 88):

"*O SMTP é o principal protocolo da camada de aplicação do correio eletrônico da internet. Usa o serviço confiável de transferência de dados do TCP para transferir mensagens do servidor de correio do remetente para o do destinatário. Como acontece na maioria dos protocolos de camada de aplicação, o SMTP tem dois lados: um lado cliente, que funciona no servidor de correio do remetente, e um lado servidor que funciona no servidor de correio do destinatário. Ambos funcionam em todos os servidores de correio. Quando um servidor de correio envia correspondência para outros, age como um cliente SMTP. Quando o servidor de correio recebe correspondências de outros, age como um servidor SMTP.*"

O cliente SMTP (que está em funcionamento no hospedeiro do servidor de correio do remetente) faz o protocolo TCP abrir uma conexão com o servidor SMTP (no caso funciona no hospedeiro do servidor de correio destinatário) na porta 25. Com a conexão feita, alguns procedimentos são realizados na camada de aplicação; por exemplo, o cliente SMTP indica os endereços de e-mail do remetente e do destinatário. Após essa apresentação, a mensagem do cliente é enviada e fica armazenada na caixa de entrada do destinatário; já na caixa postal do remetente, a mensagem fica na caixa de saída. A leitura de e-mails da caixa postal do usuário é feita por meio do protocolo POP3, que abre uma conexão TCP com o servidor de correio e utiliza a porta 110. A conexão terá autorização, transação e atualização. Depois que o nome de usuário e a senha de acesso ao e-mail forem autenticados, as caixas de e-mail ficarão disponíveis.

#### Serviços de rede (DNS/DHCP)
A utilização cada vez maior de computadores e aplicações de negócios tem contribuído com o aumento das redes de computadores e torna a configuração cada vez mais complexa para os administradores. A navegação via internet e a grande quantidade de novas aplicações nas empresas, tendo em vista que todo equipamento deve ter um endereço IP, faz com que a memorização fique mais difícil para os usuários (na prática, impossível).

**Servidor DNS – Domain Name Server**
A navegação através da internet pode ser facilitada pelo serviço DNS (Domain Name Server), servidor de nomes de domínio, que é um protocolo de gerenciamento de nomes. Assim o servidor DNS funciona como um grande banco de dados com os endereços de IP públicos e seus domínios associados. A importância do DNS para a rede é que facilita a navegação dos usuários, reduzindo o tempo de espera referente à tradução dos domínios para os seus IPs. Ainda deve-se considerar que os domínios (entenda nome do site da empresa, por exemplo) são registrados e recebem um endereço IP correspondente que ficará disponível para todos os servidores.

Os servidores DNS são organizados em uma forma hierárquica e distribuídos pelo mundo todo. Existem três classes de servidores DNS: os servidores raiz; os de domínio de alto nível, conhecidos com TLD (Top- -level Domain); e os servidores autorizativos.

Para determinar um endereço IP de um domínio, o cliente fará acesso a um dos servidores raiz, que retornará endereços IP dos servidores TLD para o domínio ponto com. Como exemplo, caso procuremos acessar o site da Amazon (www.amazon.com), o DNS raiz, ao ser contatado, retornará o endereço autorizativo para amazon.com, que, por sua vez, retornará o endereço IP para www.amazon.com. 
• Servidores DNS raiz: são treze servidores espalhados pelo mundo com nomes de A a M. 
• Servidores DNS de domínio de alto nível (TLS): são os servidores responsáveis por domínios de alto nível (.com, .org, .edu e .gov) e por todos os domínios de alto nível dos países. 
• Servidores DNS autorizativos: os hospedeiros que possam ser acessados em uma rede pública devem fornecer registros DNS para que sejam mapeados em endereços IP.

As empresas também podem possuir seus servidores DNS internos. Com isso, os computadores da rede local podem ser acessados pelas aplicações através de nomes, e não apenas por seus endereços IP.

#### Servidor DHCP – Dynamic Host Configuration Protocol
**Para que os computadores possam pertencer a uma rede, eles precisam de um endereço IP**. É importante relembrar que os dispositivos que participam de uma rede possuem o endereço da placa de rede, conhecido como endereço MAC. A configuração do endereço IP pode ser feita de forma manual, isto é, o administrador irá de computador em computador e configurará o endereço IP, máscara e gateway. **Isso pode ser feito em redes com um número pequeno de computadores; no entanto, com o crescimento da rede, essa tarefa pode se tornar mais trabalhosa.

Por isso, foi desenvolvido um protocolo de configuração automática dos endereços IP chamado DHCP (Dynamic Host Configuration Protocol), protocolo de configuração dinâmica de endereços de rede.** Em cada rede deve ser configurado um servidor IP que possuirá a faixa de endereços IP e manterá uma tabela com os endereços de cada computador. Quando um novo computador entra na rede, não possui um endereço IP atribuído. O computador envia uma solicitação de broadcast por endereço IP na rede através de uma chamada DHCP Discover. Assim que o servidor DHCP receber a solicitação, irá alocar um endereço IP válido (TANENBAUM, 2011). O servidor DHCP possui três mecanismos de alocação de endereço fornecendo uma maior flexibilidade ao atribuir os endereços aos computadores.

• Alocação manual: o administrador atribui um endereço pré-
-alocado ao cliente e o DHCP informa ao dispositivo somente o
endereço IP associado àquele endereço MAC.
• Alocação automática: o DHCP atribui automaticamente um endereço IP estático e permanente a um dispositivo, tendo selecionado o endereço a partir de um conjunto de IPs disponíveis.
• Alocação dinâmica: o DHCP atribui dinamicamente ou “aluga”
um endereço IP a um dispositivo a partir de um conjunto de
IPs disponíveis por um tempo determinado pelo servidor ou até
o cliente não precisar mais do endereço. Um exemplo são os
hotspots de shoppings ou de empresas que fornecem acesso
wi-fi para os clientes.

Uma pequena empresa ou um cliente de serviços de internet podem receber endereços IP que permitem navegar na rede internet através do roteador de acesso (ISP1, por exemplo). Já na rede corporativa de uma empresa com vários computadores temos o servidor DHCP local, que tem por tarefa a distribuição de endereços IP válidos apenas na rede interna, e a conexão com a internet é feita através do roteador de acesso, que recebe um IP válido na internet. Com esse cenário podemos ver as diversas utilizações do protocolo DHCP e a facilidade que ele introduz na gestão da rede.

**Testes de funcionamento dos serviços de rede**

A primeira atividade que vamos fazer nesse cenário será a configuração dos servidores com IP fixo; assim atribuímos os IPs de cada servidor como indicado no cenário. Observar que os computadores dos clientes ainda não possuem endereço IP. A próxima etapa são as atividades no servidor DHCP. Para isso, deverá ser configurada uma faixa de endereços a serem disponibilizados e, para que não se percam endereços IP quando os computadores são desligados, pode-se “alugar” os endereços por um período de tempo. Com os computadores ligados pela primeira vez e sem endereços IP, farão acesso ao servidor DHCP e em seguida terão seus endereços IP atribuídos. Os testes de acesso ao servidor web podem ser feitos em um computador utilizando um navegador (browse) e digitando o endereço de um site desejado. A solicitação sairá do computador do usuário e chegará até o servidor web, que devolverá uma página HTML e com seus conteúdos. Para que o acesso ao servidor web possa ser feito sem ter que digitar o endereço IP, podemos instalar um servidor DNS. A função do servidor DNS será cadastrar o endereço de domínio e o endereço IP associado e assim fazer com todos os domínios que forem utilizados. Estamos falando de um servidor DNS interno em nosso cenário. Com todos os servidores configurados no cenário da figura 8, a utilização da rede e dos serviços oferecidos aos usuários se torna mais fácil.

