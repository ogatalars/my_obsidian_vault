##### Intro
A transferência de dados de um computador para outro em uma arquitetura de rede é realizada por meio de vários equipamentos e cabos de comunicação. Na parte de equipamentos estão os dispositivos de rede como os switches e roteadores de diversos fornecedores. A comunicação e a interoperabilidade entre os diversos fornecedores é possível por conta da adoção do protocolo TCP/IP, hoje um padrão na comunicação das redes. O esquema de endereçamento lógico do TCP/IP utilizado é baseado no protocolo IP

#### Enderaçamento IP 
Para ser interligado em uma rede local ou global, um dispositivo deve possuir uma interface e um endereço único chamado MAC Address (Media Access Control), composto de um conjunto de quarenta e oito bits, com formato e definições.

I/G – INDIVIDUAL/GROUP
Corresponde à identificação: se o endereço Mac for individual, o valor
será 0; se for de broadcast ou multicast, o indicador será 1.

G/L – 1 BIT
Global/local: corresponde ao bit que faz a diferença se o endereço MAC
possui âmbito global (por exemplo, administrado pelo IEEE) ou local.

OUI – 22 BITS Identificador único atribuído pelo IEEE a cada fabricante

IDENTIFICADOR – 24 BITS É o identificador da interface em si, que pertence a um fabricante

Podemos executar comandos no computador através do sistema operacional. No Windows, por exemplo, isso é possível através do prompt de comando. Para isso, execute o comando “cmd”, na barra de tarefas ou no menu iniciar, dependendo da versão de sistema operacional que esteja sendo utilizada; isso dará acesso a um ambiente onde é possível a execução de comandos do sistema operacional em linha de texto. Ao digitar o comando “ipconfig /all”, serão apresentadas informações sobre endereços das placas instaladas

**A arquitetura da internet está baseada na utilização do protocolo TCP/IP**

"Quando um usuário envia uma mensagem a outro usuário da Internet, ela é decomposta em pacotes por meio do protocolo TCP. Cada pacote contém seu endereço de destino. Eles são então enviados do cliente para o servidor de rede e, de lá, para quantos servidores forem necessários até chegar a um computador específico com um endereço conhecido. No endereço de destino, os pacotes são remontados de modo a formar a mensagem original."

Na arquitetura de rede proposta pela internet existem os roteadores e os hospedeiros. Eles possuem em geral um único enlace com a rede e quando enviam um datagrama para a rede o fazem através desse enlace. A ligação do hospedeiro (também chamado de host) com a rede é a interface de rede, também chamada de placa de rede (ROSS; KUROSE, 2013).