Se o Redis é como um **Rádio** (se você não estava ouvindo na hora, perdeu a música), o Apache Kafka é como um **DVR/Gravador de TV** (o programa é gravado e você pode assistir agora, daqui a uma hora, ou rever o que passou).

Para tornarmos isso "mais avançado", não vamos falar apenas de enviar mensagens. Vamos focar nos conceitos que tornam o Kafka uma ferramenta de **Big Data** e engenharia robusta: **Persistência, Partições e Consumer Groups**.

### O Conceito "Avançado": O Log de Commit

Diferente do Redis, o Kafka não apaga a mensagem assim que ela é entregue. Ele escreve a mensagem em um arquivo de log no disco rígido.

1. **Retention (Retenção):** Você configura o Kafka para guardar mensagens por 7 dias (padrão), 30 dias, ou até para sempre.
    
2. **Offset (O Marcador):** Como o Kafka guarda tudo, o consumidor (Subscriber) é responsável por dizer: _"Eu já li até a mensagem número 50"_. Esse número é o **Offset**. Se o consumidor cair e voltar, ele diz: _"Parei na 50, me mande da 51 em diante"_.
    
3. **Partições:** Para escalar, um Tópico é dividido em pedaços (Partições). Isso permite que vários consumidores leiam do mesmo tópico ao mesmo tempo sem se atropelarem.
    

---

### Passo 1: O Ambiente (Docker Compose)

O Kafka é um sistema distribuído, então ele precisa de um coordenador (Zookeeper ou KRaft). Para não complicar sua máquina local (Debian), vamos usar o Docker Compose.

Crie um arquivo `docker-compose.yml`:

YAML

```
version: '3'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000

  kafka:
    image: confluentinc/cp-kafka:latest
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
```

Rode no terminal:

Bash

```
docker-compose up -d
```

---

### Passo 2: Python com "Consumer Groups"

Instale a biblioteca:

Bash

```
pip install kafka-python
```

Vamos simular um sistema de **Processamento de Pagamentos**.

#### 1. O Producer (Gerador de Transações)

Este script vai simular compras chegando o tempo todo. Note que enviaremos **JSON** (comum em Kafka), e não apenas texto.

Python

```
# producer.py
import json
import time
import random
from kafka import KafkaProducer

# Serializador para transformar dicionário em JSON bytes
def json_serializer(data):
    return json.dumps(data).encode("utf-8")

producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    value_serializer=json_serializer
)

topic_name = 'transacoes_cartao'

while True:
    # Simula uma transação
    transacao = {
        "usuario_id": random.randint(1, 100),
        "valor": round(random.uniform(10.0, 500.0), 2),
        "status": "pendente"
    }
    
    producer.send(topic_name, transacao)
    print(f"Enviado: {transacao}")
    
    time.sleep(1) # Gera 1 transação por segundo
```

#### 2. O Consumer (Processador com Grupo)

Aqui está a parte avançada. Vamos definir um group_id.

Isso diz ao Kafka: "Eu faço parte do time de processamento 'grupo_fraude'. Se houver outros consumidores com esse mesmo ID, divida o trabalho entre nós."

Python

```
# consumer.py
import json
import time
from kafka import KafkaConsumer

# Se o tópico não existir, o Kafka cria automaticamente (configuração padrão dev)
topic_name = 'transacoes_cartao'

consumer = KafkaConsumer(
    topic_name,
    bootstrap_servers=['localhost:9092'],
    auto_offset_reset='earliest', # Se não tiver offset salvo, comece do zero (histórico)
    enable_auto_commit=True,      # O Kafka salva o offset automaticamente
    group_id='grupo_analise_fraude', # <--- A CHAVE DO PODER
    value_deserializer=lambda x: json.loads(x.decode('utf-8'))
)

print("Aguardando transações...")

for message in consumer:
    dados = message.value
    
    # Simulando um processamento pesado
    if dados['valor'] > 300:
        print(f"[ALERTA] Transação alta detectada: R$ {dados['valor']} (User: {dados['usuario_id']})")
    else:
        print(f"Processando normal: R$ {dados['valor']}")
        
    # Offset: O Kafka anota internamente que essa mensagem foi lida por esse grupo
```

### Passo 3: Testando a "Mágica" do Histórico e Grupos

1. **Teste de Histórico:**
    
    - Rode o `producer.py` por uns 10 segundos e pare (Ctrl+C). Você gerou 10 mensagens.
        
    - Agora, rode o `consumer.py`.
        
    - **Resultado:** Ele vai ler as 10 mensagens que foram enviadas _no passado_. O Redis não faria isso.
        
2. **Teste de Consumer Group (Escalabilidade):**
    
    - Deixe o `producer.py` rodando infinitamente.
        
    - Abra **dois terminais** novos.
        
    - Em ambos, rode `python consumer.py` simultaneamente.
        
    - **O que acontece:** O Kafka tentará dividir as mensagens entre os dois consumidores. Se o tópico tiver apenas 1 partição (padrão), um consumidor ficará ativo e o outro em _idle_ (espera). Se tivermos mais partições, eles dividirão a carga.123
        

### Diferença Chave para o Desenvolvedor456

No Redis, você projeta pensando em velocidade de7 entrega.89

No Kafka, você projeta pensando em:1011

- "E se12 meu consumidor13 cair e ficar 2 horas fora do ar? Eu perco os dados?" (No Kafka, não).
    
- "Eu preciso processar 1 milhão de mensagens por segundo." (No Kafka, você adiciona mais partições e mais consumidores no mesmo Grupo).
    

Como você gosta de Grim Dawn e Torchlight (RPGs), pense assim:

- **Redis:** É o chat global do jogo. Se você não leu na hora, sumiu.
    
- **Kafka:** É o log de combate (Combat Log) salvo no disco. Você pode rolar para cima para ver quanto dano tomou 10 minutos atrás, e o jogo grava tudo lá sequencialmente.
    

Gostaria de ver como criar **Múltiplas Partições** para forçar o Kafka a usar os dois consumidores ao mesmo tempo?