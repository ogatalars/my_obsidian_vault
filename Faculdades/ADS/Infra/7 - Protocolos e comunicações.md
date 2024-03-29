#### Regras de comunicação de dados


Para que a comunicação se estabeleça de forma correta e para que as pessoas possam se entender, é necessário que seja estabelecido um acordo de como a linguagem será utilizada.

A comunicação de dados segue os mesmos princípios, só que a informação estará no formato de dados e ocorrerá entre dispositivos, seguindo regras bem definidas, que vamos chamar de protocolos. As redes de comunicação desempenham um papel importante na sociedade, e são fundamentais para as empresas, pois possibilitam que elas desenvolvam seus negócios independentemente das distâncias geográficas.

Conceitos:
- **Mensagem:** é a informação a ser transmitida, que pode ser no
formato de texto, números, figuras, áudio ou vídeo; ou, ainda, de
diversos tipos de combinação entre eles.
• **Transmissor (TX):** é o dispositivo que envia a mensagem de dados e pode ser um computador, um telefone, uma câmera de vídeo, dispositivos sensores em uma fábrica, entre outros.
• **Receptor (RX):** é o dispositivo que recebe a mensagem e pode
ser um computador, um telefone, uma câmera de vídeo, dispositivos atuadores em uma fábrica, entre outros.
• **Meio de transmissão:** é o caminho físico que a mensagem, cuja
origem é o transmissor, utilizará para chegar até o receptor.
• **Protocolo:** é o conjunto de regras que gerencia a comunicação
dos dados. É um acordo entre os dispositivos envolvidos na
comunicação.

#### Transferência de dados na rede
A transmissão de dados entre dois ou mais equipamentos em um processo de comunicação pode se efetivar de diversas formas e se caracteriza pelo sentido da transmissão, meio de transmissão e pela sincronização. Os sentidos da transmissão podem ser classificados em:

- **Simplex:** a comunicação unidirecional entre um transmissor e
um receptor, ou seja, somente um dos dispositivos é capaz de
transmitir, enquanto o outro fica na condição de só poder receber.
Exemplo: transmissão de sinal de TV ou ainda de rádio AM e FM.
• **Half-duplex:** os dispositivos podem transmitir e receber, mas não
simultaneamente, o que significa que toda a capacidade do canal
de comunicação é utilizada para a transmissão. Exemplo: rádios
intercomunicadores.
• **Full-duplex:** os dispositivos podem transmitir e receber simultaneamente. Os sinais de comunicação, em direções opostas, compartilham a capacidade do link ou canal de comunicação.
Exemplo: comunicação através de um celular, onde as pessoas
podem falar e ouvir simultaneamente.

Os meios de transmissão podem ser feitos em:
**• Modo paralelo:** os bits que representam o caractere são enviados
simultaneamente por meio de várias linhas de dados. Um exemplo é a comunicação entre computador e impressora através de
um cabo paralelo, ou seja, com 10 fios para a comunicação.
**• Modo série:** neste modo os bits que representam o caractere são enviados um a um através de uma única via de dados.
Como exemplo temos a comunicação serial, a comunicação USB, entre outras.

Na sincronização, temos duas formas de transmissão:
• **Assíncrona**: neste modo os dados são enviados um a um sem
controle de tempo entre um e outro. Para indicar o início de uma
transmissão é colocado um indicador chamado de START BIT.
Para indicar o fim da transmissão é colocado um ou mais bits
chamados de STOP BIT. As características desse tipo de transmissão são: baixo rendimento (alto overhead), fácil implementação e baixa velocidade.
• **Síncrona:** os dados são enviados em blocos e em intervalos de
tempo definidos, ou seja, informações de sincronismo são enviadas durante a transmissão, mantendo o sincronismo entre os
dispositivos. São características desse modo de transmissão:
boa qualidade de transmissão, maior confiabilidade, adequação
a aplicações multimídia (voz, música e vídeo), equipamentos
mais sofisticados e custo da transmissão mais alto.

As comunicações podem ser intercaladas na linha de transmissão e, assim, dividir a banda com cada usuário.

#### Camadas de rede
A comunicação entre dispositivos em uma rede é complexa e cheia de detalhes. Para facilitar o desenvolvimento, no final dos anos 1970 a organização internacional para padronização de normas técnicas, a ISO (International Organization for Standardization), definiu um modelo para a comunicação em sete camadas e o denominou modelo OSI. A partir dele, as empresas desenvolveriam seus equipamentos. Esse modelo possibilita a divisão das funções da comunicação em camadas: facilita o gerenciamento do tráfego e padroniza os componentes da rede. Assim, o desenvolvimento pode ser feito por vários fabricantes, tornando mais fácil a comunicação entre dispositivos diferentes de hardware e software. Outra grande vantagem é que modificações em uma camada não afeta as outras, o que possibilita um desenvolvimento mais rápido e a implementação de novas tecnologias.

7 – Aplicação
Nessa camada estão as aplicações de rede e seus protocolos. Por exemplo: HTTP (que
proporciona a requisição e a transferência de documentos pela web), o SMTP (que cuida
das transferências de mensagens de correio eletrônico), FTP (que cuida da transferência
de arquivos entre dois sistemas finais).

6 – Apresentação 
Essa camada é responsável pela entrega e formatação da informação a ser entregue para
a camada de aplicação.

5 – Sessão
Essa camada é responsável por gerenciar e administrar os diálogos entre dois processos
de aplicação, que podem ser feitos de forma simplex, half duplex e full duplex. Nessa
camada temos a quebra de um pacote e a inserção de uma marca lógica no início do
diálogo, e assim identificar os blocos recebidos. 

4 – Transporte
Essa camada é responsável pelas funções de conexão entre o dispositivo fonte e o
destino, segmentando os dados em unidades com tamanho apropriado para a utilização
na camada de rede. Como funções principais estão a conexão para cada requisição vinda
do nível superior, multiplexar as várias conexões em uma única conexão de rede, dividir
as mensagens em tamanhos menores e que serão tratadas pelo nível abaixo (a camada de
rede). O nível de transporte trabalha com a conexão lógica fim a fim, enquanto os outros
níveis de rede, enlace e física, controlam como essas mensagens serão transmitidas.

3 – Rede
Essa camada é responsável por controlar a operação da rede. Tem como função o
roteamento dos pacotes entre a fonte e o destino. O pacote é recebido pela camada
de rede com um endereço de destino na porta de entrada do roteador, que irá verificar
se o pacote está endereçado para esse roteador em particular ou não. Caso não esteja
endereçado para esse roteador local, será feita uma busca na tabela de roteamento
e então será enviado para a saída adequada. Para o caso de o pacote não ser para o
roteador e o endereço de destino não estiver na tabela de roteamento, o pacote será
descartado.

2 – Enlace
Essa camada é responsável pelo tratamento dos dados e lida com erros de transmissão,
topologia da rede e controle de fluxo dos bits. Ela também faz o controle de acesso
ao meio (MAC – Medium Access Control). Esse MAC é o endereço físico da placa de
comunicação, também chamada de placa de rede.

1 – Física
Esta camada é responsável pela definição das características mecânicas – conectores
e pinos, elétricas – tipo e nível de sinal, e funcionais. Também cuida da ativação,
manutenção e desativação das conexões físicas necessárias para a transmissão dos bits

*A construção de um padrão único e universal para os fabricantes de equipamentos e programas para redes de comunicação foi possível graças ao desenvolvimento do que se chamou TCP/IP (Transmission Control Protocol/Internet Protocol), desenvolvido pela Agência de Pesquisas Avançadas do Departamento de Defesa dos Estados Unidos – DARPA (U.S. Department of Defense Advanced Research Projects Agency)*

O protocolo TCP/IP utiliza um conjunto de protocolos, sendo o principal o TCP, cuja função é cuidar do movimento de dados entre os computadores. Ele estabelece uma conexão entre os computadores, controla a sequência dos pacotes e verifica os enviados para, se for o caso, retransmitir. O protocolo IP está localizado uma camada abaixo, na pilha de protocolos. É responsável por entregar os pacotes e inclui desmontagem e remontagem durante a transmissão.

A figura 6 apresenta uma comparação entre as camadas do modelo OSI e o TCP/IP e as funcionalidades de cada uma, sendo que cada camada pode ter vários protocolos, que serão estudados nos próximos capítulos. Nessa figura a visão dos dispositivos de rede permite conhecer a funcionalidade dos roteadores e dos switches. **O switch trabalha na camada física do protocolo TCP/IP e é responsável por enviar os datagramas recebidos para um computador dentro da mesma infraestrutura física, ou se não for encontrado enviará para o roteador e este por sua vez, trabalhando com informações da camada de internet (ou rede), analisará o endereço IP e encaminhará o pacote a seu destino, que poderá ser outro roteador**; e assim sucessivamente, até que seja encontrada a rede onde estarão ligados o switch e o computador ou dispositivo de destino.

Para compreendermos melhor o funcionamento dos protocolos TCP/IP, vamos conhecer o conceito de **encapsulamento**. No estudo de camadas de rede, o encapsulamento funciona juntando novas informações à mensagem de uma camada anterior e enviando-a à camada seguinte, e assim sucessivamente. Uma mensagem na camada de aplicação é passada para a camada de transporte, que insere informações como cabeçalho da camada de transporte e que serão utilizadas pela camada de suporte do outro lado receptor. Esse conjunto de informações (dados e cabeçalho da camada de transporte) é chamado de segmento da camada de transporte, que encapsula (esconde) a mensagem da camada de aplicação. 

O próximo encapsulamento acontece quando a camada de transporte envia o segmento à camada de rede, que coloca endereços finais de origem e de destino, criando o datagrama da camada de rede. Agora, a camada de enlace adicionará suas informações de controle e criará o quadro de camada de enlace. O interessante a se observar é que cada camada possui dois tipos de campos: o campo de cabeçalho e o campo de carga útil, que em geral é o pacote da camada acima.

Temos o encapsulamento de uma mensagem de e-mail através das camadas do TCP/IP até chegar na camada física. Esta, por sua vez, envia para o sistema de cabeamento as informações codificadas em bits, ou melhor ainda, em sinais elétricos ou ópticos, dependendo se a infraestrutura física utiliza cabos metálicos ou de fibra óptica. Assim, temos os dados gerados pelo usuário na camada de aplicação (as informações do e-mail, no exemplo) sendo transmitidos para a pilha. A camada de transporte cuida do segmento TCP e envia para a camada de internet (ou rede). Em seguida a camada física insere suas informações e envia um conjunto de bits que serão roteados em direção ao destino, que na figura está representado por uma nuvem.

Temos o encapsulamento de uma mensagem de e-mail através das camadas do TCP/IP até chegar na camada física. Esta, por sua vez, envia para o sistema de cabeamento as informações codificadas em bits, ou melhor ainda, em sinais elétricos ou ópticos, dependendo se a infraestrutura física utiliza cabos metálicos ou de fibra óptica. Assim, temos os dados gerados pelo usuário na camada de aplicação (as informações do e-mail, no exemplo) sendo transmitidos para a pilha. A camada de transporte cuida do segmento TCP e envia para a camada de internet (ou rede). Em seguida a camada física insere suas informações e envia um conjunto de bits que serão roteados em direção ao destino, que na figura está representado por uma nuvem.