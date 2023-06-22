## Nesse artigo você vai entender de forma técnica como o Consumidor Kafka trabalha

[

![Álvaro Bacelar](https://miro.medium.com/v2/resize:fill:88:88/0*zCcjvxaf3OHi9zg7)



](https://medium.com/@alvarobacelar?source=post_page-----ee72237904c8--------------------------------)

Apache Kafka é uma plataforma de streaming baseada em sistema distribuído de publish/subscribe, onde há um processo chamado _producer_, que envia mensagens para um tópico, que é gerenciado e armazenado por um cluster de brokers, e um processo chamado _consumer_ que subscreve ao tópico para realizar a leitura e processamento de tais mensagens.

Um tópico é distribuído entre os brokers e cada broker gerencia um subconjunto de mensagem de cada tópico — tais subconjuntos são chamados de **partições**. O número de partições é definido quando um tópico é criado e pode ser aumentado a qualquer momento após a criação, mas nunca diminuído.

É importante entendermos que partição é a unidade de paralelismo do Kafka _producer_ e _consumer_.

Do lado do _producer_ as partições de um tópico permitem escrever mensagens em paralelo. Se uma mensagem é publicada com uma chave, por padrão o _producer_ fará um cálculo para definir qual partição irá determinada chave e isso irá garantir que sempre as mensagens com aquela mesma chave vá para a mesma partição, mantendo a ordenação. Adicionalmente o _consumer_ terá a garantia de ler estas mensagens em ordem por partição.

No Apache Kafka, diferente dos sistemas tradicionais de mensageria (Message Queue), cada evento publicado pelo produtor é persistido por um período de tempo definido pelo parâmetro **retention.ms** (7 dias por padrão), depois disso o evento é excluído do mais antigo pro mais novo_._ Isso significa que quando consumidor ler tais eventos do Kafka não irá ‘retirá-lo’ do tópico, mas sim _commita-los_ — vamos entender mais a frente como funciona esse processo.

Aplicações que precisam consumir dados do Kafka usam o _KafkaConsumer_ para subscrever ao tópico e ler os eventos que nele forem produzidos.

Antes de entender como o _KafkaConsumer_ ler eventos do cluster Kafka é preciso entendermos um conceito básico.

## Consumer Groups

Suponha que você tem uma aplicação que ler eventos de um tópico do Kafka, roda algumas validações e escreve os resultados em uma base de dados. Isso funciona bem aparentemente. Mas, se o produtor do evento escalar em um nível que uma única aplicação (POD, _container_ ou instância) consumidora não conseguir dar vazão? Obviamente esta aplicação vai ficar atrasada no consumo (com _LAG_) podendo até falhar em caso de gargalo.

Nesse exemplo acima fica claro que a sua aplicação consumidora deve escalar horizontalmente para, assim como o produtor, atingir um _throughput_ maior.

Quando escalamos a aplicação consumidora, compartilhando o mesmo _group-id_, todas se tornarão parte de um _consumer group_. Com isso, cada _consumer_ nesse grupo irá receber mensagens de uma ou mais partições do tópico subscrito.

Vamos ver um exemplo de um tópico com 4 partições:

-   suponha que criamos um consumer, C1;
-   este pertencente ao grupo consumidor G1 e está subscrito ao tópico T1;
-   o único _consumer_ C1 irá subscrever e consumir todas as mensagens das 4 partições do tópico T1.

Figura abaixo:

![](https://miro.medium.com/v2/resize:fit:700/1*dSc9eF9WhQfA4ocFEpGWfw.png)

consumer group 1 subscrito as 4 partições

Se adicionarmos outro consumer, C2, no grupo G1, cada consumer irá subscrever e consumir mensagens de 2 partições. Podemos ver na imagem abaixo o seguinte cenário:

-   o consumer C1 está subscrito na partição 0 e 2; e
-   o consumer C2 está subscrito na partição 1 e 3.

![](https://miro.medium.com/v2/resize:fit:700/1*WcDZ8U4Lqi1NfR21XCwO7A.png)

consumer group 1 com 2 consumers subscrito em 2 partições cada

Esse grupo consumidor G1 pode escalar até no máximo 4 consumidores e cada um irá subscrever em uma partição, conforme imagem:

![](https://miro.medium.com/v2/resize:fit:700/1*8SBlObO-2MC-IXyZD-VIMA.png)

consumer group 1 com 4 consumers subscrito em 1 partição cada

Se, por algum motivo, a aplicação continuar escalando e adicionar mais um consumidor, para esse tópico que tem apenas 4 partições, este ficará ocioso:

![](https://miro.medium.com/v2/resize:fit:700/1*fmeXYc9eLW0771if2WbfeQ.png)

consumer group 1 com 1 consumer ocioso

Logo, se você quer atingir um maior throughput de consumo na sua aplicação, o primeiro passo talvez seja escalar horizontalmente sua aplicação no mesmo grupo de consumo até o número máximo de partições.

Em um único tópico podemos ter vários grupos de consumidores, e estes vão consumir em tempos distintos, cada grupo de consumo realiza o processamento isolado e após isso o consumer realiza o _commit_ do _offset_, que representa o id único de cada mensagem dentro do Kafka.

## Consumer Group e Rebalance de Partições

Bem, já sabemos que um _consumer_ dentro de um grupo compartilha as partições de um tópico. Quando adicionado um novo _consumer_ a esse grupo é realizado a redistribuição das partições entre os _consumers_ ativo, da mesma forma acontece quando um _consumer_ é removido.

Essa redistribuição de partições de um tópico entre _consumers_ do mesmo grupo é chamado de _rebalance_. _Rebalances_ são importantes para o _consumer group_ porque ele provém alta disponibilidade e escalabilidade. No entanto, ele acaba sendo uma faca de dois gumes, pois pode também gerar uma latência indesejável no curso normal do fluxo de eventos quando realizado constantemente.

Essencialmente há dois tipos de _rebalances_, dependendo da _strategy de partition assignment_ (estratégia de assinatura de partições) que o _consumer group_ usa.

-   **_Eager Rebalances_**: Durante um _eager rebalance_ todos os consumidores param de consumir, revogando a partição que tinha subscrito anteriormente. Depois realiza o _rejoin_, ou seja, junta-se novamente ao grupo e solicita uma nova partição para realizar a subscrição. Todo esse processo gera uma janela de indisponibilidade. O tamanho desta janela depende da quantidade de consumidores dentro do grupo, bem como a quantidade de partições do tópico.

![](https://miro.medium.com/v2/resize:fit:700/0*4OyX9Tr2gcQGFknP.jpg)

Eager Rebalance revoga todas as partições, pausa todo o consumo e reassina novamente, depois volta o consumo normalmente.

-   **_Cooperative Rebalances_**: Já no _cooperative rebalance_ (também chamado de _incremental rebalances_) é revogado apenas um conjunto de partições de um, ou mais, consumer realizando a redistribuição destas partições para outros consumers permitindo que os demais consumers, não revogados, continuem processando. Portanto isso evita que todos os consumers parem de consumir gerando uma janela de indisponibilidade generalizada. Esse modelo é extremamente valido para um grupo de consumo com um numero elevado de _consumers_ e partições.

![](https://miro.medium.com/v2/resize:fit:700/0*oJrb7H8fwnGY8Wp6.png)

Imagem mostra a revogação apenas o consumo do consumer A, antes subscrito na partição 1 e 3, para que o consumer C se subscreva a partição 3.

O caminho para os consumers manter os membros de um grupo ativos, consumindo e processando mensagens é enviando _heatbeats_ constantemente para o Kafka broker designado como _coordinator_ do grupo. Por padrão o _heartbeat_ é enviado a cada 3 segundos, podendo ser ajustado pelo parâmetro **heartbeat.interval.ms**. Esse processo é executado por uma thread separada que roda em _backgroud_ e que tem 10 segundos de timeout (**session.timeout.ms)**. Se dentro desse intervalo não enviar nenhum _heartbeat_, o consumer é considerado com falha e é removido do grupo, iniciado um novo rebalance.

Porém, esse não é o único motivo de causa de rebalance, mas vamos falar mais profundamente a respeito do rebalance em um outro artigo.

## Poll Loop

Podemos dizer que o coração do consumer Kafka é o _loop_ de _polling_ que o _Kafka_ _client_ realiza para o cluster Kafka em busca de dados.

Mas o que é esse _polling_? O método _poll(),_ do cliente consumer Kafka, retorna uma lista de eventos e cada evento contém o metadado (o tópico, partição, timestamp, etc) e a informação em si (chave e valor da mensagem).

No entanto, o _poll()_ não se limita em apenas obter dados do Kafka. A primeira vez que o _Kafka client_ _Consumer_ chama o método _poll()_ este realiza a busca do _GroupCoordinator,_ do group-id especifico que foi declarado na aplicação, realiza _join_ no grupo de consumidor e por último recebe a partição que será realizado a subscrição. Se um _rebalance_ é iniciado, este é realizado dentro do _loop_ de _polling_ também.

Uma vez instanciado esse método, a API do Kafka _consumer_ realiza de tempos em tempos _polling_ para o cluster Kafka. O intervalo máximo é definido pelo parâmetro **max.poll.interval.ms**, que por padrão são 5 minutos. Logo, se durante esse intervalo o Backend desse consumer não conseguir processar as mensagens e realizar uma nova chamada, este será removido do grupo de consumidores, causando _rebalance_.

Portanto, é importante evitar fazer processamentos longos de mensagens dentro do método _poll()_.

Abaixo um exemplo de código usando Java nativo:

![](https://miro.medium.com/v2/resize:fit:700/1*AuEhqWcJ2gNKHDiZyeKhuw.png)

1.  Essa linha é basicamente para a aplicação ficar em loop infinito;
2.  Instanciando o método _poll()_;
3.  O _poll()_ retorna uma lista de _records,_ como falado anteriormente. Cada _record_ contém o tópico e partição que este veio, o _offset_ dentro da partição e, é claro, o dado em si, chave e valor;
4.  Depois de processado cada evento, é escrito um log informando o resultado. Em um cenário real, essa informação poderia ser salva em uma base de dados, por exemplo;
5.  Importante sempre chamar o método _close()_ para encerrar o consumer.

## Commit e Offsets

Sempre que chamado o método _poll()_ é retornado dados que foram gravados no Kafka e que os consumidores no grupo não leu ainda. Isso significa que conseguimos rastrear de cada _record_ que foi consumido pelo _consumer_. Como foi falado no inicio, no Kafka não é removido o dado depois de consumido. Para isso é usado um identificador único (_offsets_) para cada _record_ gravado em cada partição e quando o consumer processa a informação ele tem que atualizar a posição do consumo.

Chamamos a ação de atualizar a posição de cada grupo de consumidor em uma partição de **_commit_**.

O registro de _commit_ de cada grupo de consumo fica armazenado em um tópico interno do Kafka _(\_\_consumer\_offsets)_ onde é alimentado pelo o _coordinator_, que recebe a informação dos consumidores.

Conforme descrito anteriormente, quando tem um cenário onde o produtor do evento está bem mais rápido que o consumidor, poderá haver diferença de mensagens pronta para serem consumidas e as já consumidas (‘_commitadas’_), essa diferença é chamada de LAG. A imagem abaixo representa bem esse atraso:

![](https://miro.medium.com/v2/resize:fit:700/0*UrdcQ7janZD-YJNU.png)

Lag de consumer group

> Se você quer saber como monitorar o LAG dos consumers groups e tópicos, [nesse artigo aqui](https://dev.to/kafkabr/monitorando-consumer-lag-do-apache-kafka-2o1d) mostro como instrumentar essa monitoração utilizando ferramentas Open Source.

Porém, há diversos outros motivos da causa de _LAG_, como problemas de Backend lento do consumer ou até mesmo _rebalance_ constantes de grupo consumidores. Em um outro artigo vamos entender as principais causas de rebalance, como reduzi-los e tunar o consumer.

## Referencias