### O que são "Eventos" no Apache Kafka?

No contexto do **Apache Kafka**, **eventos** referem-se a dados ou mensagens que são gerados por alguma ação ou ocorrência em um sistema. Esses eventos podem representar qualquer tipo de informação que ocorre em tempo real em um sistema. No Kafka, um evento geralmente contém uma **chave**, um **valor**, e **metadados** (como o timestamp, ou seja, o momento em que o evento ocorreu).

#### Exemplos de eventos:
1. **Logs de Servidores**: Cada vez que um servidor gera um log, esse log pode ser considerado um evento. O Kafka pode capturar e transmitir esses eventos de log em tempo real.
2. **Transações Bancárias**: Uma transação de compra ou venda em um sistema bancário pode ser enviada como um evento.
3. **Clique de um Usuário**: Quando um usuário clica em um botão ou navega em uma página, esse evento pode ser registrado e enviado para o Kafka.
4. **Dados de Sensores**: Dispositivos IoT podem gerar eventos continuamente com leituras de temperatura, pressão, ou localização.
5. **Mensagens de Aplicações**: Aplicações distribuídas podem enviar eventos de comunicação entre elas, como confirmações de pedidos em um sistema de e-commerce.

Esses eventos são enviados para **tópicos** no Kafka, onde ficam armazenados e podem ser consumidos por outras aplicações que precisam processá-los.

### O que são **Tópicos** no Apache Kafka?

No Apache Kafka, os **tópicos** são o conceito central em torno do qual toda a comunicação gira. Um tópico é uma **categoria** ou **canal** de comunicação para as mensagens (ou eventos) que estão sendo transmitidas. Ele funciona como um "container" onde os eventos são enviados pelos produtores e lidos pelos consumidores.

#### Principais características dos Tópicos:
1. **Tópicos são particionados**: 
   - Cada tópico é dividido em várias **partições**, que são segmentos independentes onde os eventos são armazenados. Cada partição contém uma sequência ordenada de mensagens, mas as mensagens em diferentes partições não têm uma ordem global. A divisão em partições é crucial para a escalabilidade do Kafka, pois permite o processamento paralelo de mensagens.

2. **Tópicos armazenam dados de forma durável**:
   - As mensagens publicadas em um tópico são persistidas no disco (nas partições do tópico) e mantidas por um determinado período de tempo (definido pela configuração de retenção de dados). Diferentemente de uma fila tradicional, os dados não são removidos automaticamente após serem consumidos. Eles permanecem disponíveis para serem lidos quantas vezes forem necessárias até que a política de retenção decida excluí-los.

3. **Tópicos suportam múltiplos produtores e consumidores**:
   - Um único tópico pode receber mensagens de múltiplos produtores e também ser consumido por múltiplos consumidores simultaneamente. Isso torna o Kafka adequado para sistemas com muitos componentes que precisam produzir ou consumir dados de forma paralela.
   
4. **Mensagens têm ordem dentro de uma partição**:
   - Dentro de cada partição de um tópico, as mensagens têm uma ordem garantida, sendo indexadas por um **offset** (um número sequencial único que identifica a posição da mensagem na partição). Isso garante que os consumidores leiam as mensagens na ordem em que foram publicadas dentro daquela partição específica.

#### Estrutura de um Tópico

Um tópico pode ser visualizado da seguinte forma:

```
Tópico: "notificacoes"
    Partição 0:
        [Mensagem 1] [Mensagem 2] [Mensagem 3]
    Partição 1:
        [Mensagem 4] [Mensagem 5] [Mensagem 6]
    Partição 2:
        [Mensagem 7] [Mensagem 8] [Mensagem 9]
```

- Neste exemplo, o tópico `notificacoes` possui 3 partições. As mensagens são distribuídas entre essas partições, e os consumidores podem ler essas mensagens em paralelo.
- Dentro de cada partição, a ordem das mensagens é garantida, mas entre as partições a ordem não é garantida.

#### Partições e Escalabilidade

Uma das principais vantagens dos tópicos no Kafka é o uso de **partições** para aumentar a escalabilidade do sistema.

1. **Distribuição de Dados**:
   - Quando um tópico é particionado, as mensagens podem ser distribuídas entre vários servidores Kafka, chamados de **brokers**. Isso permite que o Kafka manipule grandes quantidades de dados de forma paralela, com diferentes partições armazenadas em diferentes brokers.
   
2. **Processamento Paralelo**:
   - Como cada partição pode ser consumida de forma independente, os consumidores podem ser executados em paralelo para processar mensagens mais rapidamente. Isso aumenta o throughput (taxa de processamento de dados) e melhora a eficiência do sistema.

3. **Chave de Partição**:
   - Quando uma mensagem é enviada para um tópico, o produtor pode escolher uma **chave de partição** (partition key). Essa chave determina em qual partição a mensagem será armazenada. Isso permite que mensagens com a mesma chave (por exemplo, transações relacionadas ao mesmo cliente) sejam sempre armazenadas na mesma partição, garantindo a ordem das mensagens relacionadas a essa chave.

#### Tópico Replicado

Para garantir **alta disponibilidade** e **tolerância a falhas**, o Kafka permite que as partições de um tópico sejam **replicadas** em diferentes brokers. Cada partição pode ter várias réplicas, sendo que uma delas é a **partição líder**, que é a partição que manipula todas as operações de leitura e gravação. As outras réplicas atuam como cópias de segurança.

- **Replica**: Cópias de uma partição em diferentes brokers.
- **Líder de Partição**: A partição que recebe as mensagens e as disponibiliza para os consumidores. Se o broker que contém a partição líder falhar, uma das réplicas assume como nova líder.

Esse processo de replicação aumenta a resiliência do sistema, garantindo que, mesmo que um broker falhe, as mensagens ainda estejam disponíveis em outro broker que contém uma réplica da partição.

#### Produtores e Consumidores em Tópicos

- **Produtores**: São as aplicações ou sistemas que enviam dados (eventos) para os tópicos. Um produtor pode escolher em qual partição de um tópico ele deseja enviar uma mensagem, ou deixar o Kafka distribuir as mensagens automaticamente entre as partições.
  
- **Consumidores**: São as aplicações que leem e processam as mensagens dos tópicos. Um consumidor pode ler de uma ou mais partições simultaneamente, e o Kafka mantém o **offset** (posição da leitura) de cada consumidor para garantir que as mensagens sejam consumidas na ordem correta dentro de cada partição.

#### Políticas de Retenção de Dados em Tópicos

O Kafka armazena mensagens em tópicos por um tempo determinado ou até que um limite de espaço seja atingido. Existem duas formas principais de gerenciar a retenção de dados:

1. **Baseada em tempo**: As mensagens são retidas por um período específico de tempo (por exemplo, 7 dias) antes de serem apagadas.
2. **Baseada em tamanho**: As mensagens são mantidas até que o tópico atinja um tamanho máximo definido (por exemplo, 100 GB).

Essas políticas de retenção garantem que os tópicos não cresçam indefinidamente, liberando espaço para novas mensagens.

### Conclusão

- **Tópicos** no Apache Kafka são a estrutura central para organizar e categorizar os eventos transmitidos no sistema. Eles são particionados para permitir alta escalabilidade e processamento paralelo.
- Cada mensagem enviada para um tópico é armazenada em uma partição, e dentro dessa partição, as mensagens têm uma ordem garantida. Com a replicação de partições, o Kafka garante alta disponibilidade e tolerância a falhas.
- Tópicos também suportam vários produtores e consumidores, o que permite a comunicação eficiente entre diferentes sistemas em tempo real.

Essa arquitetura robusta permite que o Kafka seja utilizado em uma ampla gama de aplicações, desde o monitoramento de sistemas até o processamento de grandes volumes de dados em tempo real.

### O que é um **Cluster** no Apache Kafka?

Um **cluster** no Apache Kafka é um conjunto de **brokers** (servidores Kafka) que trabalham juntos para formar um sistema distribuído. O conceito de **cluster** permite que o Kafka seja altamente escalável e tolerante a falhas, uma vez que os dados são distribuídos e replicados entre vários brokers.

#### Componentes de um Cluster Kafka:
1. **Brokers**: Cada broker é um servidor Kafka que armazena dados (mensagens) e processa requisições de produtores e consumidores. Em um cluster, há múltiplos brokers, e os dados são distribuídos entre eles.
   - **Replicação**: Para garantir a alta disponibilidade e tolerância a falhas, as partições de um tópico podem ser replicadas em diferentes brokers. Isso significa que se um broker falhar, outro pode assumir sem perder dados.
   
2. **Tópicos**: Dentro de um cluster Kafka, os tópicos são divididos em **partições** que são distribuídas entre os brokers. Cada partição de um tópico pode estar replicada em vários brokers para aumentar a resiliência do sistema.

3. **ZooKeeper** (nas versões anteriores): O Kafka originalmente usava o ZooKeeper para gerenciar o estado do cluster e coordenar os brokers. O ZooKeeper controlava informações como quais brokers estavam ativos e que partições estavam atribuídas a cada broker. Nas versões mais recentes, o Kafka está eliminando a dependência do ZooKeeper, substituindo-o por um sistema de gerenciamento nativo.

#### Vantagens de um Cluster Kafka:
- **Escalabilidade**: Você pode adicionar mais brokers ao cluster para aumentar a capacidade de armazenamento e o volume de mensagens que podem ser processadas simultaneamente.
- **Tolerância a Falhas**: Se um broker falhar, os dados replicados podem ser acessados em outro broker, garantindo que o sistema continue funcionando sem perda de dados.
- **Distribuição de Carga**: Um cluster permite que os dados sejam distribuídos entre diferentes brokers e partições, balanceando a carga de processamento e armazenamento.

#### Exemplo:
Imagine que você tenha um cluster Kafka com 3 brokers. Se você criar um tópico com 6 partições, essas partições serão distribuídas entre os 3 brokers. Quando um produtor envia eventos para o tópico, esses eventos serão automaticamente distribuídos entre os brokers. Da mesma forma, os consumidores podem consumir esses eventos de diferentes brokers, paralelamente.

### Conclusão

- **Eventos** no Kafka são dados ou mensagens que representam algo acontecendo em tempo real, como logs de sistemas, cliques de usuários ou transações financeiras.
- **Clusters** são grupos de brokers que trabalham juntos para formar um sistema distribuído, o que permite que o Kafka seja escalável, tolerante a falhas e altamente disponível.

Essa estrutura distribuída e o conceito de processamento de eventos em tempo real fazem do Kafka uma plataforma ideal para sistemas que precisam lidar com grandes volumes de dados com alta disponibilidade e performance.