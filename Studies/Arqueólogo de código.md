Aqui está o mapa mental tático de **Engenharia Reversa** para projetos Python (Back) e React (Front).

---

### 🗺️ Mapa Mental: Desbravando o Desconhecido (Engenharia Reversa)

O objetivo não é entender 100% do código (isso leva meses), mas entender o **Fluxo de Controle** e o **Fluxo de Dados**.

#### 1. O Reconhecimento de Terreno (Antes de ler código lógico)

Não abra arquivos `.py` ou `.tsx` aleatórios ainda. Olhe a estrutura.

- **O Manifesto do Projeto (Dependências):**
    
    - **No Backend (Python):** Abra o `requirements.txt`, `Pipfile` ou `pyproject.toml`.
        
        - _O que buscar:_ Qual o framework web? (Django? Flask? FastAPI?). Qual o banco? (SQLAlchemy? Psycopg2?).
            
    - **No Frontend (React):** Abra o `package.json`.
        
        - _O que buscar:_ Qual a lib de UI (Material UI, Tailwind)? Qual o gerenciador de estado (Redux, Zustand, React Query)? Qual a lib de rotas (React Router)?
            
- **A Infraestrutura (Como roda?):**
    
    - Existe um `Dockerfile` ou `docker-compose.yml`?
        
    - _Dica de Ouro:_ O `docker-compose` é a melhor documentação que existe. Ele te diz exatamente quais serviços o sistema precisa para ficar de pé (Redis, Postgres, RabbitMQ) e em quais portas.
        

#### 2. Encontrando a "Porta de Entrada" (Entry Point)

Todo software tem um ponto onde a execução começa.

- **Backend (Python):**
    
    - Se for **Django**: Procure por `settings.py` (configuração) e `urls.py` (o mapa das rotas). O `urls.py` principal é o índice do livro.
        
    - Se for **FastAPI/Flask**: Procure onde a instância `app = FastAPI()` ou `app = Flask()` é criada. Geralmente `main.py` ou `app.py`.
        
- **Frontend (React):**
    
    - Procure por `src/index.js` (ou `main.tsx`).
        
    - Dali, siga para o `App.js` ou `App.tsx`.
        
    - _O Alvo:_ Procure onde as **Rotas** (`<Routes>`, `<RouterProvider>`) estão definidas. Isso te dá o mapa de todas as telas do sistema.
        

#### 3. A Técnica do "Fio de Ariadne" (Rastreamento Vertical)

Não tente ler o projeto inteiro. Escolha **uma** funcionalidade pequena que você vê na tela (ex: "Botão de Login") e rastreie ela até o banco de dados.

**O Caminho do Front para o Back:**

1. **No Front:** Inspecione o botão no navegador. Veja qual função ele chama no `onClick`.
    
2. **A Busca (Grep/Search):** Pesquise no VS Code por strings específicas que você vê na tela (ex: o texto do label ou a URL da API na aba Network do navegador).
    
3. **Identifique a Chamada de API:** Ache onde o código faz `axios.post('/api/login')`.
    
4. **Pule para o Back:** Vá no código Python e procure pela rota `/api/login`.
    
    - _Dica:_ Em Python, busque pelos "Decorators".
        
    - FastAPI: `@app.post("/login")`
        
    - Django: Procure no `urls.py` quem responde por esse path.
        

#### 4. Entendendo o Fluxo de Dados (State & Props)

- **No React:**
    
    - Os dados vêm de onde? Estão sendo passados de pai para filho (Props drilling)?
        
    - Ou estão vindo de um "store" global (Redux/Context)? Se vir `useSelector` ou `useContext`, pare e vá olhar onde esse contexto é criado.
        
- **No Python:**
    
    - Entenda a camada de **Modelos (Models)**.
        
    - Abra os arquivos de models (geralmente `models.py`). Eles são o mapa do banco de dados. Se você entende as tabelas e como elas se relacionam, você entende 70% da lógica de negócio.
        

#### 5. "Quebrando para Entender" (Depuração Ativa)

Ler código é passivo. Para entender, você precisa interagir.

- **O método do Print/Log:**
    
    - Não tenha medo de colocar `print(f"ENTROU AQUI: {data}")` no Python ou `console.log('DADOS:', data)` no React. Rode e veja aparecer. Isso confirma suas hipóteses sobre o fluxo.
        
- **Debugger (Nível Avançado):**
    
    - Coloque um _breakpoint_ no VS Code no Controller do Python. Faça a requisição no Front. Se o VS Code travar a execução ali, você achou o fio da meada. Pode inspecionar as variáveis ao vivo.
        

---

### 🧩 Exemplo Prático de Raciocínio (Onde clicar?)

Imagine que pediram para você: _"Arrume um bug no cálculo de desconto do Carrinho de Compras"_. Você não conhece o projeto.

1. **Ache a Tela:** Rode o projeto, vá na tela de carrinho.
    
2. **Ache o Componente:** Use a extensão "React Developer Tools" no Chrome. Clique no componente que mostra o preço. Descubra que o nome do arquivo é `CartSummary.tsx`.
    
3. **Leia o Componente:** Dentro de `CartSummary`, você vê que ele recebe `totalPrice` via props, mas quem calcula é um hook chamado `useCartCalculation`.
    
4. **Aprofunde:** Entre em `useCartCalculation`. Lá você vê uma chamada `api.get('/cart/calculate')`.
    
5. **Mude para o Back:** Vá no projeto Python. Pesquise (Ctrl+Shift+F) por `/cart/calculate`.
    
6. **Analise a Rota:** Você achou a função `calculate_cart_total`. Ela chama um `DiscountService`.
    
7. **O Tesouro:** Dentro de `DiscountService.py`, você acha a lógica matemática. O bug está lá.
    

### Resumo da Atitude

Como dev sênior entrando em base de código desconhecida, sua atitude deve ser:

1. **Não assuma nada.** Verifique.
    
2. **Siga os dados.** O código pode mentir (nomes de variáveis ruins), mas os dados no banco e na rede não mentem.
    
3. **Use a busca global (Ctrl+Shift+F) agressivamente.** É sua melhor ferramenta de navegação.
    
----
---

Quando você entra num projeto legado ou desconhecido, **não tente ler o código como se fosse um livro** (do começo ao fim). Isso é impossível e frustrante. Você deve ler como se fosse uma **enciclopédia**: consultando apenas o necessário para resolver o mistério atual.

Aqui está o seu **Guia Mental de Engenharia Reversa para Devs Fullstack**, dividido por camadas de profundidade.

---

### 🕵️‍♂️ Fase 1: O Reconhecimento Superficial (Sem ler lógica)

_Objetivo: Entender quais ferramentas estão na mesa e como o projeto fica em pé._

Antes de abrir qualquer arquivo de código (`.py` ou `.tsx`), abra os **arquivos de configuração**. Eles são o mapa do território.

#### 1. O Ecossistema (Infra & Comandos)

- **Procure por:** `Dockerfile`, `docker-compose.yml`, `Makefile`, `README.md`.
    
- **A Pergunta:** "Quais serviços esse projeto precisa para existir?"
    
    - Se tem `postgres` no docker-compose, você sabe que tem banco relacional.
        
    - Se tem `redis`, sabe que tem cache ou fila de tarefas.
        
    - **Dica de Ouro:** Leia os comandos `entrypoint` ou `command` no Docker. Eles te dizem exatamente qual comando inicia o servidor (ex: `uvicorn app.main:app`). Isso te revela o **arquivo principal**.
        

#### 2. As Dependências (O "DNA" do projeto)

- **Backend (`pyproject.toml` ou `requirements.txt`):**
    
    - Identifique o Framework Web: É `Django`? `Flask`? `FastAPI`?
        
    - Identifique o ORM (Banco): É `SQLAlchemy`? `Django ORM`? `Peewee`?
        
    - _Por que isso importa?_ Se você sabe que é Django, você já sabe procurar por `urls.py`. Se é FastAPI, você procura por decorators `@app`.
        
- **Frontend (`package.json`):**
    
    - Identifique a Lib de UI: `MaterialUI`, `AntDesign`, `Tailwind`? (Isso te ajuda a reconhecer componentes visuais).
        
    - Identifique a Gestão de Estado: `Redux` (procure por reducers), `Zustand`, `React Query`?
        
    - Identifique o Roteamento: `react-router-dom`? (Essencial para achar telas).
        

---

### 🔬 Fase 2: Análise Dinâmica (O Navegador é seu melhor amigo)

_Objetivo: Mapear a conexão Front-Back sem ler código ainda._

Não tente adivinhar o que o código faz. Veja o que ele faz.

**O Fluxo da "Aba Network":**

1. Abra o projeto no navegador. Abra o DevTools (F12) -> Aba **Network**.
    
2. Execute a ação que você quer entender (ex: "Salvar Cliente").
    
3. Observe a requisição XHR/Fetch disparada.
    
    - **Endpoint:** `POST /api/v1/clientes` (Isso é sua pista de busca no Python).
        
    - **Payload (Body):** O que foi enviado? (Isso te mostra a estrutura de dados esperada).
        
    - **Response:** O que voltou?
        

> **Mentalidade:** A Aba Network é a "verdade". O código pode ter comentários desatualizados, mas a requisição HTTP mostra o que está acontecendo _agora_.

---

### 🧶 Fase 3: O Rastreamento do Fio (Trace Route)

_Objetivo: Ligar a UI ao Banco de Dados._

Agora que você tem a pista da Fase 2 (o endpoint ou um texto na tela), vamos mergulhar no código.

#### Passo A: Do Visual ao Lógico (Frontend)

Como achar o código que gerou aquele botão?

1. **Busca Textual (A "Força Bruta"):**
    
    - Copie um texto fixo da tela (ex: "Confirmar Pagamento").
        
    - Dê um "Global Search" (Ctrl+Shift+F) no VS Code dentro da pasta do Front.
        
    - Você achou o arquivo `PaymentModal.tsx`.
        
2. **Identifique o Gatilho:**
    
    - Procure o `onClick` ou `onSubmit` nesse arquivo.
        
    - Veja qual função ele chama (ex: `handlePayment`).
        
3. **Siga a API:**
    
    - Dentro de `handlePayment`, veja qual serviço HTTP é chamado. Geralmente algo como `api.post('/payments')`.
        

#### Passo B: A Ponte (Backend Entry Point)

Agora você tem a rota: `/payments`. Vá para o código Python.

1. **A Busca da Rota:**
    
    - Search global por `"/payments"` ou `"payments"`.
        
    - Você vai cair num arquivo de Rotas/Controller (ex: `routes.py` ou `views.py`).
        
2. **Entenda a Entrada:**
    
    - Veja a função associada. Que dados ela recebe? (No FastAPI, olhe os modelos Pydantic nos argumentos; No Django, olhe o `request.data`).
        

#### Passo C: A Lógica Profunda (Service & Database)

Geralmente a rota apenas "recebe" o pedido. A lógica real está mais fundo.

1. **Siga a Importação:** A rota chama `PaymentService.process()`? Dê _Go to Definition_ (F12) nessa função.
    
2. **Chegando ao Banco:**
    
    - Continue descendo até ver comandos de banco (ex: `session.add()`, `.save()`, `SELECT`).
        
    - **Pare aqui.** Se você chegou no ponto onde os dados são salvos, você mapeou o fluxo completo dessa funcionalidade.
        

---

### 🗺️ Diagrama Visual do Fluxo de Investigação

![Imagem de reverse engineering flow diagram software](https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTuiAwT943ng8kQfPt8UvyfEyKtxIgm2FMIWLPSypGgjPFEy9_QVj7_Cg6P5ZjlTJZnnHwY8B6PFs8-tb-RHQkUbOT11_TMhtqtEeZf-ro_VVcnz0k)

Shutterstock

---

### 🧠 Dicas de Sobrevivência para Projetos Caóticos

1. A Técnica do "Git Blame" (Quem e Quando)

Se um trecho de código parece sem sentido, use a extensão GitLens ou git blame.

- Veja _quando_ foi alterado e _qual a mensagem do commit_.
    
- Muitas vezes a mensagem explica o "porquê" (ex: "Fix: ajustando cálculo de taxa devido à lei X"). Isso te dá contexto de negócio que o código não dá.
    

2. Isolamento de Variáveis (Breakpoints)

Não leia código simulando na cabeça. O cérebro falha.

- Coloque um `print("PASSOU AQUI", dados)` no meio da função Python.
    
- Se o print aparecer no terminal, sua hipótese de que o código passa por ali está certa. Se não, você está olhando o arquivo errado.
    

3. Entenda o Banco de Dados (ERD)

Muitas vezes, o código é confuso, mas o banco é estruturado.

- Abra o `models.py` (Django/SQLAlchemy).
    
- Desenhe num papel as relações. Se `Pedido` tem uma `ForeignKey` para `Usuario`, você já sabe que um pedido não existe sem um usuário. Isso clareia as regras de negócio.
    

### Resumo do Processo Mental

1. **Localize:** Onde no código está o texto que vejo na tela?
    
2. **Rastreie:** Quem chama essa função? E quem chama essa? (Subindo a árvore).
    
3. **Conecte:** Qual rota do back esse front chama?
    
4. **Verifique:** Onde no banco isso grava?
    

Quer que eu simule esse processo de investigação passo-a-passo usando um cenário comum, como "Descobrir por que o login está falhando"?