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
Observe que, para o cálculo da quantidade de redes de uma classe, deve-se fazer a conta de 2 elevado ao número de bits disponíveis, que corresponde às letras X indicadas no quadro 3. Assim, para uma classe A, a quantidade de redes será 2,7 pois um bit já foi fixado como zero.

As redes possuem dois endereços IP reservados, sendo um para o identificador da rede, quando colocamos zero para todos os bits reservados para hosts, e outro que se chama endereço de broadcast da rede, quando colocamos um para todos os bits reservados para hosts. Assim, da quantidade de redes de cada classe deverão ser descontados os dois endereços reservados para endereço da rede e para o endereço de broadcast.

VER PAGINA 113

Por exemplo, para o IP – 192.161.181.34 temos: • Endereço da rede: colocar zero no identificador do host: 192.161.181.0 • Endereço de broadcast: colocar um no identificador do host: 192.168.181.255

Máscara-padrão de rede: colocar um nos identificadores de rede: 255.255.255.0

A escolha de endereços IP para a rede dependerá de algumas decisões de projeto, por exemplo: número de hosts que serão colocados na rede e quantidade de redes que a empresa planeja ter. Após responder a essas perguntas, escolhe-se a classe mais adequada e, em seguida, define-se o IP desejado.

Exemplo: uma empresa deseja preparar uma rede que deverá ter no máximo 40 computadores. Selecione uma classe, um endereço de rede, a máscara-padrão e os possíveis endereços dos hosts. Solução: como a quantidade de hosts será de no máximo 40, pode-se escolher a classe C, que habilita até 254 hosts. É importante observar que endereços da classe A ou B também atenderiam à especificação do projeto. Teremos como sugestão de endereços IP: • Classe C – endereço de rede: 197.20.30.0 e máscara-padrão: 255.255.255.0 • Endereço de broadcast: 197.20.30.255 • Endereço de primeiro host: 197.20.30.1 • Endereço de último host: 197.20.30.254 • Endereço dos hosts: selecione os quarenta endereços e atribua para as placas de rede dos hosts.

#### Switch – interligando computadores
O switch é um equipamento que trabalha na camada de enlace do modelo OSI e interliga os hosts por meio de seus endereços. Em geral, possui diversas interfaces de rede às quais os computadores são interligados, e os acessa por meio dos endereços MAC. O switch possui um domínio de broadcast. Quando desejam instalar mais computadores do que o número de portas do switch, alguns administradores utilizam uma das portas para interligar dois switches. Isso deve ser evitado porque a geração de broadcast poderá comprometer a performance da rede.

#### Roteador – interligando redes
Os roteadores são equipamentos que trabalham com os endereços IP de rede, e como possuem interfaces que também são configuradas com um endereço IP, eles são utilizados para o roteamento dos pacotes que chegam em sua porta de entrada e, dependendo de uma tabela de roteamento, são capazes de encaminhar o pacote para a saída adequada.

#### Testes básicos de funcionamento de redes
Para construir os testes básicos de funcionamento de redes e conhecer como funciona a comunicação entre um computador e outro, vamos adotar diversos cenários e desenvolver os conhecimentos necessários e de forma crescente.

**Cenário 1 – rede local com computadores e um switch ->** 
O primeiro comando utilizado é o ipconfig /all do sistema operacional Windows ou o ifconfig para o sistema operacional Linux.
Entre as informações do teste, podemos destacar:
• Endereço físico (MAC Address): 0060.0F08.2A3D.
• Link-local IPv6 Address: FE80::250:FFF:FE08:2A3D.
• IP Address: 197.20.30.4.
• Subnet Mask: 255.255.255.0.
• Default Gateway1
: 0.0.0.0
• DNS Servers2
: 0.0.0.0.
• DHCP Servers3
: 0.0.0.0.
• DHCPv6 Client DUID: 00-01=00-01-D2-60-66-24-00-50-OF-08-2A3D.

Outro comando do sistema operacional é o comando “ping”, que possibilita testar a conectividade entre dois endereços e cuja sintaxe é mostrada a seguir. O programa ping envia quatro pacotes de 32 bytes e aguarda o retorno do host cujo endereço IP foi dado como alvo.

O resultado dos testes realizados serve para verificar a conexão lógica de dois hosts e descobrir se a comunicação está funcionando na camada lógica (endereço IP) e na camada física (placa de rede e switch). Quando um host está na mesma rede local, ou pode ser encontrado através de roteadores, o retorno do comando “ping” mostra os quatro pacotes enviados e o tempo gasto para retornarem do endereço-alvo. E quando o endereço-alvo não se encontra acessível, pode ser que não exista na rede local ou que não esteja acessível através de roteadores, ou esteja desligado ou até mesmo com problemas no cabeamento ou na placa de rede, o resultado aparece com request timed out,4 indicando que nenhum pacote enviado conseguiu chegar ao endereço-alvo. Após os testes de conectividade com o comando ping, realizado entre todas as estações da rede, as aplicações poderão funcionar e, em caso de alguma falha, poderão ser descartados problemas nas camadas física e de rede

#### 2 Cenário 2 – duas redes locais com switch e não interligadas
a empresa possui duas redes com endereços de rede diferentes, sendo um a REDE 1 com endereço IP – 197.20.30.0/24 e a REDE 2 com endereço IP – 47.0.0.0/8. Ao observar o cenário percebe-se que a conexão entre um host da REDE 1 e outro da REDE 2 não acontecerá, pois não há conexão entre os dois switches. 

Os testes realizados com o comando ping só funcionarão entre hosts da mesma rede.

Para que os computadores da REDE 1 possam conectar os da REDE 2 será necessária a utilização de um roteador, equipamento que interliga redes e trabalha com encaminhamento de pacotes IP

Para testar a conexão entre os hosts, primeiro fazemos o teste no Host 2 com o comando ping no endereço da porta do roteador que está ligada na REDE 1.
Os testes podem ser repetidos em todos os computadores e assim garantir a conectividade entre as duas redes