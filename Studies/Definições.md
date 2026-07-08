1 - API -> é o conjunto de regras e especificações que define **como** dois sistemas de software podem trocar informação — quais operações estão disponíveis, que dados cada uma espera receber, que formato de resposta ela devolve, e quais erros pode retornar. A API é a interface visível; a implementação por trás dela é irrelevante para quem consome.
**Dois exemplos:**

1. _Didático_: pense numa tomada elétrica. Você não precisa saber como a usina gera energia — só precisa saber o formato do plugue (a "API" física). Qualquer aparelho compatível com esse formato funciona, independente do que tem por trás da parede.
2. _Aplicado ao seu contexto_: quando o mrcrawler dispara uma tarefa pro Justasks, ele não sabe (nem precisa saber) se o Justasks está rodando em Kubernetes, qual fila interna ele usa, ou como ele decide prioridade. O mrcrawler só conhece o contrato: "chamo esse endpoint/método, mando esses campos, recebo essa resposta". Essa é a API do Justasks em ação.
**Nuance importante:** existe uma diferença entre a API (o contrato) e o **protocolo de transporte** que carrega essa comunicação (HTTP, gRPC sobre HTTP/2, etc.). Isso é algo que costuma confundir: "API REST" e "API gRPC" não são "tipos diferentes de API" no sentido filosófico — são o mesmo conceito de contrato, expresso sobre protocolos e convenções diferentes

**Nuance importante:** existe uma diferença entre a API (o contrato) e o **protocolo de transporte** que carrega essa comunicação (HTTP, gRPC sobre HTTP/2, etc.). Isso é algo que costuma confundir: "API REST" e "API gRPC" não são "tipos diferentes de API" no sentido filosófico — são o mesmo conceito de contrato, expresso sobre protocolos e convenções diferentes

RESUMIDAMENTE -> **API - é um contrato de comunicação de uma aplicação**

Exemplo de API: 

POST /tasks
Request body: { "url": string, "priority": int, "callback_url": string }
Response: { "task_id": string, "status": "queued" | "rejected" }
Erros possíveis: 400 (payload inválido), 429 (rate limit), 500 (erro interno)

Isso **é** o contrato: o nome do endpoint, os campos esperados, os tipos de cada campo, o formato da resposta, os códigos de erro possíveis.

---- 
1.1 -> **API REST** (Representational State Transfer) não é um protocolo — é um **estilo arquitetural** para desenhar APIs, proposto por Roy Fielding em 2000. Ele define um conjunto de princípios de como organizar a comunicação entre cliente e servidor:

- **Recursos como URLs**: cada "coisa" do sistema é um recurso endereçável por uma URL (`/users/123`, `/tasks/456`).
- **Verbos HTTP como operações**: você usa os métodos do próprio HTTP (`GET` para ler, `POST` para criar, `PUT`/`PATCH` para atualizar, `DELETE` para remover) para dizer o que quer fazer com o recurso.
- **Stateless**: cada request contém tudo que o servidor precisa saber; o servidor não guarda "memória" de requests anteriores do mesmo cliente.
- **Representação em formato de texto**, tipicamente JSON (mas podia ser XML — JSON só virou o padrão de fato).

**Então "API REST" = uma API cujo contrato é expresso seguindo esses princípios: recursos via URL, HTTP verbos como ações, dados em JSON, sobre HTTP tradicional**

Rest - JSON e HTTP 

gRPC - Protobuf e HTTP/2