## RAG e Wiki Local: Como Dar Memória e Contexto Privado para a sua IA

Se você perguntar hoje para uma Inteligência Artificial de ponta (como o Gemini ou o Claude) qual é a receita de um bolo de cenoura ou como configurar o Docker, ela responderá perfeitamente. Mas se você perguntar: _"Qual é a senha do Wi-Fi do terceiro andar do escritório?"_ ou _"Como funciona o processo de deploy do nosso crawler interno?"_, ela vai falhar ou inventar uma resposta (alucinar).

Modelos de IA são brilhantes, mas eles não conhecem os dados privados da sua empresa ou da sua vida. Para resolver isso sem gastar milhões de dólares treinando um modelo do zero, o mercado adotou a combinação perfeita: uma **Wiki Local** unida à técnica de **RAG (Retrieval-Augmented Generation)**.

---

## 1. O que é uma Wiki Local?

Uma **Wiki Local** (ou Base de Conhecimento Interna) é o repositório centralizado onde estão guardados todos os documentos, regras de negócio, runbooks, atas de reunião e tutoriais de uma organização ou projeto.

Ela pode estar estruturada em ferramentas corporativas como Notion e Confluence, ou de forma totalmente local e offline, como uma pasta cheia de arquivos `.md` (Markdown) gerenciados pelo **Obsidian**, **Logseq** ou um repositório Git.

---

## 2. O que é RAG (Retrieval-Augmented Generation)?

**RAG** (Geração Aumentada de Recuperação) é a técnica que permite a uma IA "consultar" uma fonte externa de dados (como a sua Wiki Local) em tempo real para responder a uma pergunta.

Em vez de tentar fazer a IA decorar tudo, o RAG funciona como uma **prova com consulta**. O processo acontece em 3 passos automáticos toda vez que você faz uma pergunta:

1. **Recuperação (Retrieval):** A IA lê a sua pergunta, faz uma busca rápida na sua Wiki Local e encontra os parágrafos ou documentos exatos que falam sobre aquele assunto.
    
2. **Aumento (Augmentation):** O sistema pega a sua pergunta original e "injeta" esses parágrafos da Wiki logo acima dela, criando um contexto rico.
    
3. **Geração (Generation):** O modelo de IA lê a sua pergunta _junto com o contexto da Wiki_ e gera uma resposta precisa, baseada estritamente no seu documento.
    

> 💡 **A Analogia Básica:** Imagine um advogado genial (A IA). Ele sabe todas as leis do mundo, mas não conhece o seu caso específico. O RAG é o ato de você entregar a pasta com os documentos do seu processo (A Wiki Local) na mão dele antes de fazer uma pergunta. Agora ele pode te dar uma resposta especializada.

---

## Exemplo Prático de Funcionamento

Vamos ver como essa dinâmica funciona por baixo dos panos na prática.

### Cenário:

O desenvolvedor pergunta no chat interno da empresa: _"Como eu faço para pedir reembolso de um curso de tecnologia aqui na empresa?"_

#### Passo 1: O Sistema busca na Wiki Local (Markdown)

O sistema de RAG faz uma busca vetorial (por significado) na pasta da Wiki e encontra o arquivo `politicas_rh.md`:

Markdown

```
# Política de Benefícios e Reembolsos
Última atualização: Janeiro de 2026

A empresa reembolsa até R$ 500 por ano em cursos e livros técnicos.
Para solicitar, o colaborador deve abrir um ticket no Jira na categoria "RH - Reembolsos" anexando a nota fiscal em nome da empresa até o dia 20 de cada mês.
```

#### Passo 2: O Prompt é "Aumentado" automaticamente

O sistema monta um prompt invisível para o usuário, juntando o documento encontrado com a pergunta:

Plaintext

```
Você é um assistente virtual de RH corporativo. Responda à pergunta do usuário utilizando APENAS as informações do Contexto abaixo. Se a informação não estiver no contexto, diga que não sabe.

CONTEXTO RECUPERADO DA WIKI:
"A empresa reembolsa até R$ 500 por ano em cursos e livros técnicos. Para solicitar, o colaborador deve abrir um ticket no Jira na categoria 'RH - Reembolsos' anexando a nota fiscal em nome da empresa até o dia 20 de cada mês."

PERGUNTA DO USUÁRIO:
"Como eu faço para pedir reembolso de um curso de tecnologia aqui na empresa?"
```

#### Passo 3: A IA Gera a Resposta

A IA lê o bloco acima e responde para o usuário de forma natural e precisa:

> "Para pedir o reembolso do seu curso, você deve abrir um ticket no Jira na categoria **'RH - Reembolsos'**. Certifique-se de anexar a nota fiscal (que deve estar em nome da empresa) e enviar o pedido até o **dia 20 do mês**. Lembrando que o limite anual para esse benefício é de **R$ 500**."

---

## Exemplo de Código: Um RAG Minimalista em Python

Se fôssemos traduzir a lógica de um sistema RAG que lê uma Wiki local baseada em arquivos de texto, o esqueleto do código em Python seria parecido com isto:

Python

```
import os
from openai import OpenAI  # Ou qualquer outro cliente de IA (Gemini, Claude, etc.)

client = OpenAI(api_key="SUA_CHAVE_AQUI")

def buscar_na_wiki_local(termo_busca: str) -> str:
    """Simula a busca por relevância dentro de uma pasta de arquivos Markdown."""
    caminho_wiki = "./minha_wiki_local/"
    
    # Na vida real, usaríamos embeddings e um banco vetorial (ChromaDB, Pinecone).
    # Aqui faremos uma busca textual simples para fins didáticos.
    for arquivo in os.listdir(caminho_wiki):
        if arquivo.endswith(".md"):
            with open(os.path.join(caminho_wiki, arquivo), "r", encoding="utf-8") as f:
                conteudo = f.read()
                if termo_busca.lower() in conteudo.lower():
                    return conteudo
    return "Nenhum documento específico encontrado na Wiki."

def perguntar_ao_assistente(pergunta_usuario: str):
    # 1. Recupera o contexto da Wiki Local
    # Extrai uma palavra-chave simples da pergunta para buscar
    palavra_chave = "reembolso" if "reembolso" in pergunta_usuario.lower() else "deploy"
    contexto_wiki = buscar_na_wiki_local(palavra_chave)
    
    # 2. Aumenta o prompt com o contexto
    prompt_final = f"Contexto:\n{contexto_wiki}\n\nPergunta: {pergunta_usuario}\nResposta:"
    
    # 3. Gera a resposta usando o modelo de linguagem
    resposta = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt_final}]
    )
    
    return respuesta.choices[0].message.content

# Execução
resposta_final = perguntar_ao_assistente("Como peço reembolso de cursos?")
print(resposta_final)
```

---

## Por que essa dupla é tão poderosa?

- **Privacidade Total:** Ao rodar uma Wiki local (com ferramentas como Obsidian) e acoplá-la a um modelo de IA local (usando Ollama ou Llama.cpp), os dados da sua empresa **nunca saem da sua infraestrutura**.
    
- **Atualização Sem Custo:** Se a regra do reembolso mudar amanhã, você só precisa alterar uma linha no arquivo Markdown da sua Wiki. O RAG lerá o arquivo atualizado instantaneamente. Não há necessidade de re-treinar a IA.
    
- **Auditoria:** Como a resposta da IA diz de onde tirou a informação, você pode auditar e verificar se a documentação da Wiki precisa ser atualizada.