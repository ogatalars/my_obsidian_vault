## Observabilidade e SRE: Os Três Pilares (Métricas, Logs e Traces)

Se o **Runbook** é o manual que te ensina a apagar o incêndio e o **TDD** garante que as peças do seu sistema foram bem montadas, a **Observabilidade** é o sistema de telemetria que te avisa que o motor do seu sistema está superaquecendo antes mesmo de começar a sair fumaça.

No mundo de Engenharia de Confiabilidade de Sites (**SRE**), existe uma diferença crucial entre _Monitoramento_ e _Observabilidade_:

- **Monitoramento:** Te avisa **quando** algo dá errado (ex: "A taxa de erro 500 subiu"). É reativo.
    
- **Observabilidade:** Te dá ferramentas para entender **por que** algo deu errado, permitindo inferir o estado interno de um sistema complexo apenas analisando suas saídas externas.
    

Para alcançar a observabilidade, nós dependemos do que o mercado chama de **Os Três Pilares**: Métricas, Logs e Traces.

---

## 1. Métricas (O "O que" está acontecendo)

As métricas são dados numéricos agregados e medidos ao longo do tempo. Elas são extremamente baratas de armazenar e processar, sendo perfeitas para criar dashboards e disparar alertas em ferramentas como **Prometheus** e **Grafana**.

Métricas respondem a perguntas como: _Quantas requisições por segundo estamos recebendo? Qual o consumo de CPU do container? Quantas falhas de timeout ocorreram nos últimos 5 minutos?_

### Exemplo Prático de Métrica (Formato Prometheus)

Imagine a telemetria de um microsserviço de raspagem de dados (crawler):

Plaintext

```
# HELP crawler_outcome_total Total de execuções de crawlers por status.
# TYPE crawler_outcome_total counter
crawler_outcome_total{spider="jus_sp", status="success"} 14520
crawler_outcome_total{spider="jus_sp", status="captcha_block"} 412
crawler_outcome_total{spider="jus_sp", status="timeout"} 89
```

> 💡 **Visão de SRE (SLIs e SLOs):** O engenheiro de SRE usa essas métricas para definir o **SLI** (Indicador de Nível de Serviço, ex: % de requisições com sucesso) e garantir que o **SLO** (Objetivo de Nível de Serviço, ex: nossa taxa de sucesso deve ser de 99.5% ao mês) não seja violado.

---

## 2. Logs (O "Por que" aconteceu)

Se a métrica te avisa que a taxa de erros do crawler subiu, o **Log** é onde você vai para ver a autópsia do erro. Um log é um registro textual de um evento que aconteceu em um momento específico.

Logs legados eram apenas linhas de texto confusas, mas a observabilidade moderna exige **Logs Estruturados** (geralmente em JSON), o que permite indexar e buscar dados rapidamente em ferramentas como OpenSearch, Loki ou Datadog.

### Exemplo Prático de Log Estruturado (JSON)

JSON

```
{
  "timestamp": "2026-05-15T14:32:01.884Z",
  "level": "ERROR",
  "service": "crawler-engine",
  "spider": "jus_sp",
  "proxy_ip": "185.220.101.4",
  "message": "Falha ao extrair dados da página judicial.",
  "exception": "AttributeError: 'NoneType' object has no attribute 'find_all'",
  "trace_id": "4bf92f3577b34da6a3ce929d0e0e4736"
}
```

_Olhando o log, o desenvolvedor descobre instantaneamente o motivo da falha: o layout do site alvo mudou e quebrou o parser HTML._

---

## 3. Traces (O "Onde" aconteceu)

Em arquiteturas modernas de microsserviços ou sistemas distribuídos assíncronos, uma única ação do usuário pode passar por cinco containers, duas filas (RabbitMQ/Kafka) e três bancos de dados diferentes. Se essa ação falhar ou ficar lenta, como saber qual pedaço da engrenagem foi o culpado?

O **Trace (Rastreamento Distribuído)** acompanha a jornada completa de uma requisição de ponta a ponta. Cada trace é composto por vários **Spans** (blocos que representam o tempo gasto em cada subetapa do caminho).

Para que isso funcione, os sistemas usam padrões como o **OpenTelemetry** para injetar um cabeçalho com um `trace_id` único na requisição. Esse ID é passado de um serviço para o outro.

### Exemplo Prático da Anatomia de um Trace

Plaintext

```
[Trace ID: 4bf92f3577b34da6a3ce929d0e0e4736]

┌────────────────────────────────────────────────────────┐
│ Span 1: API Gateway - Receber requisição (Total: 120ms)│
└────────────────────────────────────────────────────────┘
    │
    ├──> ┌──────────────────────────────────────────────┐
    │    │ Span 2: Auth Service - Validar Token (15ms) │
    │    └──────────────────────────────────────────────┘
    │
    └──> ┌──────────────────────────────────────────────┐
         │ Span 3: Worker - Buscar no Banco (102ms)     │
         └──────────────────────────────────────────────┘
               │
               └──> ┌───────────────────────────────────┐
                    │ Span 4: Postgres - Query (98ms)  │ <-- O gargalo está aqui!
                    └───────────────────────────────────┘
```

---

## O Fluxo Perfeito de Resolução de Incidentes

A verdadeira magia acontece quando os três pilares estão correlacionados (geralmente usando o `trace_id` como linha condutora). No dia a dia do plantão técnico, o fluxo ideal de depuração segue este caminho:

1. **A Métrica avisa:** O Grafana pisca na tela ou um alerta dispara no Slack: _"A latência do endpoint `/processos` passou de 200ms para 2.5s nas últimas duas semanas"_.
    
2. **O Trace isola:** O engenheiro abre a ferramenta de tracing (como Jaeger ou Grafana Tempo), filtra pelas requisições mais lentas do endpoint e descobre visualmente que o atraso não está no código da API, mas sim em uma query específica que está batendo no banco de dados sem índice.
    
3. **O Log detalha:** Clicando diretamente naquele ponto do trace, o sistema exibe os logs emitidos pelo banco de dados naquele exato milissegundo, mostrando o plano de execução da query e permitindo que o time crie um script de migração para corrigir o problema.
    

Estruturar a telemetria da sua aplicação com esses três pilares poupa horas de adivinhação e discussões em equipe, transformando diagnósticos de problemas em um processo puramente científico e exato.

---

Dos tópicos da nossa lista inicial para fechar essa visão macro de arquitetura e engenharia, resta apenas um pilar fundamental de dados. Quer que avancemos agora para **Bancos de Dados Vetoriais (Vector Databases)** para entender como eles fecham o que vimos sobre IA e RAG?