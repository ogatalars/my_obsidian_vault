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

A função do roteador é receber um datagrama em um enlace e enviá-lo para algum outro enlace, o que por si só já indica que o roteador deve ser ligado a dois ou mais enlaces. Aqui também é importante considerar que a comunicação do roteador com o enlace se dá através de uma placa de rede.

A conexão entre hospedeiros e roteadores na arquitetura de rede da internet necessita que cada dispositivo possua um endereço para que essa conexão lógica possa ser estabelecida, e como também tanto os hospedeiros quanto os roteadores necessitam de uma interface física para a conexão com o enlace, tem-se então uma forma de conectar endereços lógicos a endereços físicos (ROSS; KUROSE, 2013).

O endereço lógico que será atribuído a placas de rede dos hospedeiros e as portas de comunicação dos roteadores se chama IP (Internet Protocol) e é constituído por um conjunto de 32 bits, equivalentes a 4 bytes. Assim, é possível a criação de um esquema de endereçamento com capacidade para 232 endereços IP possíveis, ou seja, em torno de 4 bilhões de endereços. Ou seja, para acessar a rede o dispositivo precisa das seguintes informações:

Endereço de rede Endereço do host na rede
Máscara de rede

O endereço IP e a máscara de rede são representados utilizando 32 bits separados por ponto a cada grupo de 8 bits (o byte). Para facilitar a leitura do endereço IP, ele é representado com a notação decimal. Exemplo: IP - 192.168.12.3 e máscara de rede: 255.255.255.0 Ou escrito em binário: IP – 11000000.10101000.00001100.00000101 Máscara: 11111111.11111111.11111111.00000000

#### Classes de endereços IP
Os endereços IP foram divididos em blocos de tamanho fixo, definidos como classes de endereços, para facilitar a alocação de endereços para hosts e roteadores.
O quadro abaixo apresenta as classes A, B, C, D, E, os valores dos espaços de endereço por classe, a máscara-padrão por classe, a capacidade de redes por classe e finalmente o número de hosts por classe. Os bits da máscara de rede são colocados em UM nos identificadores da rede, e como exemplo a máscara das redes de classe A tem os bits: 11111111.00000000.00000000.00000000.