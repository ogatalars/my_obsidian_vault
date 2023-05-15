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