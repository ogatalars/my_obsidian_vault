## O que é MCP (Model Context Protocol)? O Guia Introdutório com Exemplos Práticos

Se você acompanha a evolução da Inteligência Artificial, já percebeu um padrão: para fazer uma IA (como o Claude, Gemini ou ChatGPT) interagir com o mundo real — ler seus arquivos locais, buscar dados em um banco Postgres ou ler um repositório no GitHub —, cada desenvolvedor precisa criar uma integração do zero. É um ecossistema fragmentado, onde cada ferramenta fala uma língua diferente.

O **MCP (Model Context Protocol)** nasceu para resolver exatamente isso.

Lançado originalmente pela Anthropic como um padrão aberto, o MCP funciona como uma **porta USB universal para Inteligência Artificial**. Ele define um protocolo unificado para que aplicativos de IA (clientes) se conectem de forma segura e padronizada a fontes de dados e ferramentas (servidores).

---

## Por que o MCP é revolucionário?

Antes do MCP, integrar uma IA ao seu fluxo de trabalho corporativo exigia construir APIs customizadas complexas e expor dados de forma insegura. Com o MCP, o cenário muda:

- **Padrão Aberto:** Substitui integrações proprietárias por um protocolo único baseado em JSON-RPC.
    
- **Desacoplamento:** O modelo de IA não precisa saber _como_ o seu banco de dados funciona. Ele só precisa pedir os dados através do MCP.
    
- **Flexibilidade:** Se você criar um "Servidor MCP" para vasculhar a documentação interna da sua empresa, qualquer IDE ou chat compatível com MCP poderá usá-lo imediatamente.
    
- **Segurança Local:** Os servidores MCP podem rodar localmente na sua máquina, garantindo que dados sensíveis não saiam do seu controle sem permissão.
    

> 💡 **A Analogia do LSP:** Pense no MCP como o _Language Server Protocol (LSP)_ da IA. No passado, cada editor de código (VS Code, Vim, Sublime) precisava reescrever o suporte para cada linguagem (Python, TypeScript, Go). O LSP unificou isso. O MCP faz o mesmo, permitindo que qualquer IA se conecte a qualquer fonte de dados.

---

## Como o MCP funciona? (A Arquitetura)

O ecossistema MCP é dividido em três partes principais:

1. **MCP Host (O Hospedeiro):** O aplicativo onde você interage com a IA (ex: editores de código como Cursor, VS Code, ou o Claude Desktop).
    
2. **MCP Client (O Cliente):** A parte do sistema que faz a ponte e envia os pedidos de contexto.
    
3. **MCP Server (O Servidor):** Pequenos programas (em Python, TypeScript, etc.) que expõem recursos específicos através do protocolo.
    

O protocolo MCP permite expor três coisas principais:

- **Resources (Recursos):** Dados brutos que a IA pode ler (como arquivos, tabelas ou logs).
    
- **Tools (Ferramentas):** Ações executáveis que a IA pode tomar (como rodar um script, criar um arquivo ou disparar uma API).
    
- **Prompts:** Modelos prontos de instruções que ajudam o usuário a interagir com aquela ferramenta.
    

---

## Exemplos Práticos de MCP

Para entender como isso funciona na prática, vamos ver dois cenários: o fluxo de comunicação conceitual e um exemplo de código de um servidor MCP real.

### Exemplo 1: O Fluxo de Comunicação (Conceitual)

Imagine que você está usando o editor **Cursor** (MCP Host) e pede para a IA analisar a saúde do seu banco de dados local.

```
[ Usuário ] -> "Veja os últimos erros no banco SQLite"
      │
      ▼
[ MCP Host / Client (Cursor) ]
      │  (Pergunta via JSON-RPC: "Quais ferramentas estão disponíveis?")
      ▼
[ MCP Server (SQLite-Server) ] -> Responde: "Tenho a ferramenta 'executar_query'"
      │
      ▼
[ MCP Host ] -> Envia comando: executar_query("SELECT * FROM logs WHERE status='error'")
      │
      ▼
[ MCP Server ] -> Executa a query localmente e devolve o texto do erro.
      │
      ▼
[ IA no Cursor ] -> Lê o texto do erro e responde para você como corrigi-lo.
```

---

### Exemplo 2: Criando um Servidor MCP Simples (Python)

Graças a frameworks como o `FastMCP`, criar um servidor que expõe ferramentas para qualquer IA compatível é extremamente simples.

Abaixo está um exemplo de um servidor MCP em Python que expõe uma ferramenta para ler dados de uso de CPU do sistema e outra para buscar logs específicos:

Python

```
# Servidor MCP para Diagnóstico de Infraestrutura Local
from mcp.server.fastmcp import FastMCP
import psutil

# Inicializa o servidor MCP com um nome amigável
mcp = FastMCP("Diagnostico-Local")

@mcp.tool()
def verificar_cpu() -> str:
    """Verifica a porcentagem atual de uso da CPU na máquina do desenvolvedor."""
    uso_cpu = psutil.cpu_percent(interval=1)
    return f"O uso atual da CPU é de {uso_cpu}%."

@mcp.tool()
def buscar_ultimos_logs(linhas: int = 10) -> str:
    """Lê as últimas N linhas do arquivo de log da aplicação local."""
    try:
        with open("/var/log/minha_app/erro.log", "r") as f:
            conteudo = f.readlines()
            # Pega as últimas linhas solicitadas
            ultimas_linhas = "".join(conteudo[-linhas:])
            return ultimas_linhas
    except FileNotFoundError:
        return "Arquivo de log não encontrado no caminho especificado."

if __name__ == "__main__":
    # Inicia o servidor MCP pronto para se conectar ao Cursor, VS Code ou Claude
    mcp.run()
```

### Como a IA consome isso?

Assim que você conecta esse servidor no seu ambiente (geralmente adicionando uma linha de configuração apontando para o script), a IA ganha superpoderes instantâneos.

Se você digitar no chat: _"Minha máquina parece lenta, me ajuda?"_, a IA vai automaticamente identificar a ferramenta `verificar_cpu`, executá-la por baixo dos panos através do protocolo MCP, ler o retorno (ex: `"O uso atual da CPU é de 98%"`) e te responder: _"Notei que sua CPU está em 98%. Quer que eu liste os processos mais pesados para investigarmos?"_.

---

## O Futuro com MCP

O MCP está transformando a IA de um "assistente isolado em uma aba do navegador" para um agente totalmente integrado ao ecossistema técnico.

Hoje, grandes plataformas já disponibilizam servidores MCP oficiais (GitHub, Postgres, Slack, Jira, Google Drive). Isso significa que, independentemente de qual modelo de linguagem domine o mercado no futuro, a forma como eles acessam os seus dados e ferramentas já possui uma fundação sólida, aberta e universal.