O crescimento das redes de computadores nas empresas tem colocado os administradores e projetistas de infraestrutura de redes em situações em que lentidão, acessos não autorizados e invasão de computadores são comuns. Uma das causas de lentidão pode estar relacionada aos pacotes de broadcast que circulam nas redes

#### Segmentação de redes
Os negócios das empresas que utilizam redes de computadores cresceu muito, e o volume de informações tem gerado uma grande quantidade de tráfego por meio de toda a rede de comunicação. Ao observarmos as redes locais, ou LAN (Local Area Network), vemos cada vez mais novas aplicações e serviços compartilhando o mesmo recurso, ou seja, é a infraestrutura de rede. As redes tendem então a ficar congestionadas e com isso apresentar lentidão na transferência dos pacotes das diversas aplicações, causando transtornos aos usuários e até mesmo a indisponibilidade de um ou vários serviços. Tudo causado pelo crescimento de serviços na rede e pela propagação de pacotes de difusão (os chamados pacotes de broadcast), que inundam as redes consumindo uma parte considerável do enlace de dados. As redes LAN interligam os computadores dentro de uma empresa.

Inicialmente, foram utilizados os hubs, equipamentos que fazem a interligação de computadores, como exemplifica o cenário da figura 1. Por causa das características do hub, as redes se tornam lentas, pois, quando um computador transmite um pacote pela rede, todos os computadores recebem esse pacote e o descartam (pois não são destinados para eles), ou seja, apenas o destinatário receberá efetivamente o pacote e o enviará para as camadas superiores do protocolo TCP/IP

**Algumas características importantes**

• Hub: também chamado de concentrador de rede, funciona na camada física do modelo OSI e sua função é interligar computadores
em uma rede. Como característica de sua função, quando um pacote sai de um computador e é endereçado a outro, a transmissão
é feita para todos os computadores, mas apenas o destinatário vai
processar, os outros descartam. Isso faz com que apenas uma comunicação ocorra na rede, em um instante.
• Switch: equipamento que atua na camada de enlace do modelo
OSI. O switch envia os dados do computador de origem apenas
para o computador de destino, e não para todos da rede. Isso porque ele se baseia no endereço MAC dos computadores para fazer
a conexão. Assim também ocorre uma diminuição de erros e colisões de pacotes.
• Roteador: equipamento que atua na camada de rede do modelo
OSI e possui a mesma funcionalidade do switch, só que pode escolher a melhor rota para que um determinado pacote chegue ao
destino desejado e através de rotas menos congestionadas

*As redes de broadcast têm apenas um canal de comunicação, compartilhado por todas as máquinas da rede; os pacotes enviados por qualquer máquina são recebidos por todas as outras. Um campo de endereço dentro do pacote especifica o destinatário pretendido. Quando recebe um pacote, a máquina processa o campo de endereço. Se o pacote se destinar à máquina receptora, esta o processará; se for destinado a alguma outra máquina, o pacote será simplesmente ignorado.*
*Os sistemas de broadcast normalmente também oferecem a possibilidade de endereçamento de um pacote a todos os destinos usando um código especial no campo de endereço. Quando um pacote com esse código é transmitido, ele é recebido e processado por cada máquina na rede; não é à toa que esse modo de operação é chamado de broadcasting.*

Com as considerações sobre equipamentos e o conceito de broadcast, as redes possuem então grande quantidade de pacotes de broadcast, que podem ser ocasionados por falhas na comunicação (por exemplo: problemas de conectores, cabos e até placas de rede) ou ainda por protocolos e aplicações. A mesma rede local do cenário da figura 1 pode ser melhorada quanto ao tráfego com a utilização de switch, pois atuando na camada de enlace já consegue direcionar os dados para a máquina com o endereço MAC específico


"*Um conceito importante a ser colocado é o gateway. Os computadores de cada domínio de broadcast conhecem os endereços para os hosts de sua própria rede. Ao enviar um pacote para endereços fora de sua rede, deverá enviar para o gateway, que vai verificar onde o endereço desejado se encontra e, se conhecer a rota, o encaminhará até o destinatário.*"

**Um único domínio de broadcast ->**  
Deterioração do desempenho da rede
Problemas de segurança
Gerenciamento de endereços
Todos os dispositivos de rede estão conectados
em um único domínio de broadcast
Como os switches encaminham broadcasts,
eles serão processados por todos os
computadores nessa rede

**Criação de dois domínios de broadcast** -> 
O roteador tem acesso a duas sub-redes, e logo
a dois domínios de broadcast diferentes
Cada domínio fica com
seu broadcast específico
O roteador não propaga broadcast de um
domínio para o outro

	Também é possível dividir uma LAN física grande em duas LANs lógicas menores. Você pode estar se perguntando por que isso seria útil. Às vezes, o layout do equipamento de rede não corresponde à estrutura da organização. Por exemplo, os departamentos de engenharia e finanças de uma empresa poderiam ter computadores na mesma LAN física, pois estão na mesma ala do prédio, mas poderia ser mais fácil administrar o sistema se engenharia e finanças tivessem cada um sua própria LAN virtual, ou VLAN. Nesse projeto, cada porta é marcada com uma “cor”, digamos verde para engenharia e vermelha para finanças. O switch então encaminha pacotes de modo que os computadores conectados às portas verdes sejam separados dos computadores conectados às portas vermelhas. Os pacotes de broadcast enviados em uma porta de cor vermelha, por exemplo, não seriam recebidos em uma porta de cor verde, como se existissem duas LANs diferentes.

A utilização de redes locais virtuais, as **VLAN,** aumenta muito a performance da rede, pois separa grandes domínios de broadcast em domínios menores e oferece características importantes como:
• Segurança: os grupos de usuários que possuem informações
confidenciais são colocados em redes separadas, diminuindo assim os riscos de acesso não autorizado.
• Aumento do desempenho: com a rede dividida em grupos de trabalho de forma lógica reduz-se o tráfego desnecessário na rede e
com isso aumenta-se o desempenho.
• Redução de custo: há menor necessidade de atualizações na rede
e assim um uso mais eficiente da largura de banda disponível.
• Diminuição da tempestade de broadcast: com a divisão da rede
em VLANs, diminui-se o número de equipamentos que podem
sofrer algum problema de disponibilidade em razão de um momento de excesso de broadcast.
Eficiência da equipe: com a utilização de VLANs e com nomes
adequados para cada uma, fica mais fácil o gerenciamento da rede.
• Gerenciamento de aplicativo: facilita-se muito o gerenciamento
dos aplicativos e como são disponibilizados para os usuários

#### Tipos de VLAN 
