## Técnicas Avançadas de Prompt: CoT (Chain-of-Thought) e ReAct

Quando começamos a usar IA, a tendência natural é tratar o modelo como uma barra de pesquisa do Google glorificada: nós enviamos uma pergunta direta e esperamos uma resposta perfeita imediata. Para tarefas simples, isso funciona. Mas para problemas complexos de lógica, matemática ou fluxos que exigem múltiplos passos, essa abordagem falha. O modelo tenta adivinhar a resposta direto e acaba alucinando.

As técnicas avançadas de prompt mudam o jogo. Em vez de forçar a IA a cuspir o resultado final de uma vez, nós damos a ela um **"espaço de rascunho" para pensar**. As duas técnicas mais famosas e poderosas para isso são o **CoT (Chain-of-Thought)** e o **ReAct (Reason + Act)**.

---

## 1. CoT (Chain-of-Thought / Cadeia de Pensamento)

O **Chain-of-Thought** é o equivalente a pedir para uma criança em uma prova de matemática: _"Não coloque apenas o resultado, mostre a sua linha de raciocínio passo a passo"_.

Ao quebrar o problema em etapas sequenciais textuais, a IA utiliza seus próprios tokens anteriores como contexto para calcular o próximo passo com muito mais precisão.

Existem duas formas de aplicar o CoT:

- **Few-shot CoT:** Você dá um ou dois exemplos de problemas resolvidos passo a passo antes de enviar o seu problema real.
    
- **Zero-shot CoT:** Você simplesmente adiciona uma frase mágica no final do prompt, como: _"Pense passo a passo antes de responder"_.
    

### Exemplo Prático de CoT (Problema de Lógica)

**Prompt Ruim (Abordagem Direta):**

> "Tenho 4 caixas. Dentro de cada caixa existem 3 sacos. Dentro de cada saco existem 2 moedas de ouro e 1 de prata. Se eu jogar fora metade dos sacos de duas caixas, quantas moedas de ouro me restam no total?"

_Risco:_ A IA pode se perder nas multiplicações rápidas e responder "12" ou "18" direto, errando a matemática básica por pura pressa estatística.

**Prompt Avançado (Usando CoT):**

> "Resolva o problema abaixo. **Pense passo a passo**, detalhando o raciocínio de cada etapa antes de chegar ao resultado final.
> 
> Problema: Tenho 4 caixas. Dentro de cada caixa existem 3 sacos. Dentro de cada saco existem 2 moedas de ouro e 1 de prata. Se eu jogar fora metade dos sacos de duas caixas, quantas moedas de ouro me restam no total?"

**Resposta Esperada da IA com CoT:**

> 1. **Vamos calcular o total inicial:**
>     
>     - Tenho 4 caixas. Cada caixa tem 3 sacos, então são $4 \times 3 = 12$ sacos no total.
>         
>     - Cada saco tem 2 moedas de ouro. Então, inicialmente, tenho $12 \times 2 = 24$ moedas de ouro.
>         
> 2. **Agora vamos calcular a alteração:**
>     
>     - O problema diz que joguei fora metade dos sacos de _duas_ caixas.
>         
>     - Cada caixa tem 3 sacos. Metade de 3 é 1,5 saco.
>         
>     - Como fiz isso em duas caixas, joguei fora $1,5 \times 2 = 3$ sacos.
>         
> 3. **Cálculo final:**
>     
>     - Se eu tinha 12 sacos e joguei 3 fora, me restam $12 - 3 = 9$ sacos.
>         
>     - Cada um dos 9 sacos restantes contém 2 moedas de ouro.
>         
>     - Portanto, restam $9 \times 2 = 18$ moedas de ouro.
>         
> 
> **Resultado Final:** Restam 18 moedas de ouro.

---

## 2. ReAct (Reason and Act / Raciocínio e Ação)

Se o CoT ensina a IA a pensar, o **ReAct** ensina a IA a **pensar e agir**. É a técnica que serve de fundação para os Agentes de IA modernos.

O framework ReAct força o modelo a entrar em um loop contínuo de três etapas:

1. **Pensamento (Thought):** A IA analisa o cenário atual e decide o que precisa descobrir.
    
2. **Ação (Action):** A IA decide usar uma ferramenta externa (fazer uma busca na web, ler uma Wiki local via MCP, rodar um script).
    
3. **Observação (Observation):** A IA lê o resultado trazido pela ferramenta e reinicia o ciclo até resolver o problema.
    

### Exemplo Prático de ReAct (Simulação de Agente)

Imagine que você deu para a IA acesso a uma ferramenta de busca no banco de dados da empresa e a uma ferramenta de envio de e-mails (as **Skills** que vimos antes). Você pede: _"Verifique se o cliente 'Felipe Ogata' pagou a fatura deste mês e, se não, envie uma cobrança"_.

Aqui está como a IA executa o prompt usando a estrutura ReAct por baixo dos panos:

Plaintext

```
Usuário: Verifique se o cliente 'Felipe Ogata' pagou a fatura e aja de acordo.

Pensamento (Thought): Primeiro, preciso descobrir o ID do cliente 'Felipe Ogata' e verificar o status da fatura dele no banco de dados.
Ação (Action): buscar_cliente(nome="Felipe Ogata")
Observação (Observation): [Resultado da ferramenta] -> { id: 9482, email: "ogata@email.com", status_fatura: "PENDENTE", valor: 250.00 }

Pensamento (Thought): A observação me mostra que a fatura do Felipe está PENDENTE. O objetivo diz que se não estiver paga, devo enviar uma cobrança. Vou usar a ferramenta de e-mail para isso.
Ação (Action): enviar_email(para="ogata@email.com", assunto="Fatura Pendente", corpo="Olá Felipe, notamos que sua fatura de R$ 250,00 está em aberto...")
Observação (Observation): [Resultado da ferramenta] -> { status: "SUCESSO", email_id: "msg_88421" }

Pensamento (Thought): O e-mail de cobrança foi enviado com sucesso. Concluí a tarefa.
Resposta Final: Verifiquei o sistema e a fatura do cliente Felipe Ogata estava pendente. Um e-mail de cobrança notificando o débito de R$ 250,00 já foi enviado para ele.
```

---

## Como eles impactam o seu bolso e o seu código?

A escolha e o refinamento dessas técnicas geram um equilíbrio importante no desenvolvimento de software com IA:

|**Técnica**|**Precisão**|**Consumo de Tokens**|**Velocidade**|**Melhor Caso de Uso**|
|---|---|---|---|---|
|**Direct Prompt**|Baixa em lógica|Muito Baixo|Muito Rápido|Classificação de texto, resumos, geração simples.|
|**CoT**|Alta em lógica|Médio (gera mais texto)|Médio|Análise de logs complexos, refatoração de algoritmos matemáticos.|
|**ReAct**|Altíssima em automação|Alto (múltiplos loops)|Lento (espera as APIs)|Agentes autônomos, assistentes de suporte integrados a sistemas.|

Dominar CoT e ReAct é o que transforma prompts amadores em sistemas de nível de produção confiáveis, permitindo que a IA lide com fluxos de trabalho reais sem quebrar no primeiro cenário inesperado.