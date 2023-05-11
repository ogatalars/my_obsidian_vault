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

#### Camadas de r