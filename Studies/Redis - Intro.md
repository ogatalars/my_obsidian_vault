O **Redis** é a melhor escolha para começar porque ele é extremamente simples, leve e fácil de "subir" para testes.

O Redis implementa o Pub/Sub no modelo **"Fire and Forget"** (Atire e Esqueça). Isso significa que, se você publicar uma mensagem e ninguém estiver ouvindo _naquele exato momento_, a mensagem é perdida. Ele não guarda histórico (diferente do Apache Kafka, que veremos depois).

Vou dividir este tutorial em duas partes: **Linha de Comando (CLI)** (para entender o conceito puro) e **Python** (para ver como funciona no código).

---

### Pré-requisitos

Você precisa ter o Redis instalado. Se tiver Docker, é o jeito mais fácil:

Bash

```
docker run --name meu-redis -p 6379:6379 -d redis
```

---

### Parte 1: Testando via Terminal (Redis CLI)

Para ver a mágica acontecer, você precisará abrir **dois terminais** (janelas) diferentes.

#### Terminal 1: O Assinante (Subscriber)

Nesta janela, ficaremos esperando as mensagens.

1. Acesse o Redis: `redis-cli` (ou `docker exec -it meu-redis redis-cli` se usar Docker).
    
2. Digite o comando para assinar um canal chamado `noticias`:
    

Bash

```
SUBSCRIBE noticias
```

_O terminal ficará "travado", escutando. Ele avisará que se inscreveu com sucesso._

#### Terminal 2: O Publicador (Publisher)

Nesta janela, enviaremos os dados.

1. Acesse o Redis (mesmo comando do passo 1 acima).
    
2. Publique uma mensagem no canal `noticias`:
    

Bash

```
PUBLISH noticias "Olá, assinantes!"
```

3. O Redis retornará o número `(integer) 1`, indicando que 1 cliente recebeu a mensagem.
    

**Volte ao Terminal 1.** Você verá que a mensagem "Olá, assinantes!" apareceu instantaneamente.

---

### Parte 2: Implementação com Python

Agora vamos fazer algo mais próximo do mundo real.

**Instalação da biblioteca:**

Bash

```
pip install redis
```

Vamos criar dois scripts separados.

#### 1. O Script do Ouvinte (`subscriber.py`)

Este script vai rodar em _loop_ infinito, processando qualquer mensagem que chegar.

Python

```
import redis

# Conecta ao Redis local
r = redis.Redis(host='localhost', port=6379, decode_responses=True)

# Cria o objeto PubSub
p = r.pubsub()

# Se inscreve no canal 'sistema_alertas'
p.subscribe('sistema_alertas')

print("Aguardando mensagens no canal 'sistema_alertas'...")

# Loop para ler as mensagens conforme chegam
for message in p.listen():
    # O Redis envia diferentes tipos de dados (confirmação de inscrição, etc)
    # Queremos filtrar apenas as mensagens de texto
    if message['type'] == 'message':
        conteudo = message['data']
        print(f"ALERTA RECEBIDO: {conteudo}")
```

#### 2. O Script do Publicador (`publisher.py`)

Este script apenas envia a mensagem e encerra.

Python

```
import redis

# Conecta ao Redis
r = redis.Redis(host='localhost', port=6379, decode_responses=True)

# Publica a mensagem
canal = 'sistema_alertas'
mensagem = 'Servidor CPU em 99% - Perigo!'

r.publish(canal, mensagem)
print(f"Mensagem enviada para {canal}")
```

#### Como rodar:

1. Abra um terminal e rode: `python subscriber.py` (ele ficará esperando).
    
2. Abra outro terminal e rode: `python publisher.py`.
    
3. Veja a mensagem aparecer na primeira tela.
    

---

### Resumo das Características do Redis Pub/Sub

- **Velocidade:** É extremamente rápido (baixa latência).
    
- **Efêmero:** Se o `subscriber.py` estiver desligado quando você rodar o `publisher.py`, a mensagem desaparece para sempre. O Redis não guarda ela para entregar depois.
    
- **Broadcast:** Se você rodar 10 cópias do `subscriber.py`, as 10 receberão a mesma mensagem ao mesmo tempo.
    

---

Este foi o básico do Redis. Ele é ótimo para chats em tempo real, placares de jogos ou notificações instantâneas.

Como você também mencionou **Apache** (provavelmente se referindo ao **Kafka**), a lógica muda um pouco: o Kafka é focado em persistência e histórico (replay de mensagens).

**Gostaria de seguir agora para o tutorial de Apache Kafka para ver a diferença?**