#### 1 Protocolos da camada de aplicação
As empresas e seus usuários produzem diversos tipos de informação. Então pode-se dizer que a “rede humana” gera dados. A função da camada de aplicação é preparar a comunicação humana para ser transmitida por meio de uma rede de dados. Por outro lado, a camada de aplicação recebe os dados da rede e os prepara para que a rede humana possa utilizá-los, de forma inteligível. Assim, temos a função básica da camada de aplicação. Uma aplicação de rede é formada por pares de processos que enviam e recebem mensagens. O que inicia a comunicação é chamado de cliente; o que espera o contato é chamado de servidor. Esses processos necessitam de uma interface de comunicação entre eles: **o socket.**

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
