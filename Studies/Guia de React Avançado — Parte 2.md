
### Domínio Total • Arquitetura • Internals • Performance • Estado Global • Padrões Avançados

Este documento é a continuação direta da **Parte 1**, mas agora entramos no território dos **especialistas em React**. Aqui você vai aprender os mecanismos internos do React, arquiteturas usadas em times grandes e padrões profissionais que diferenciam o júnior do sênior.

A Parte 2 é extensa, densa e feita para leitura lenta.

---

# 1. Entendendo o coração do React: o Fiber

React Fiber é o mecanismo interno que controla:

- renderização
    
- prioridade de tarefas
    
- divisão de trabalho
    
- interrupção e continuação de renders
    

## 1.1 Por que o Fiber existe?

Antes do Fiber (React 15), o render era **sincrônico**. Em interfaces grandes, isso podia travar a tela.

Fiber permitiu:

- renderização concorrente
    
- prioridades diferentes (alta prioridade: digitação; baixa: animações pesadas)
    
- interromper um render e retomá-lo depois
    

## 1.2 Como o Fiber funciona mentalmente

Não é necessário decorar sua estrutura interna, mas entender o conceito ajuda muito.

Desenho conceitual:

```
UI -> Elementos -> Árvore Fiber

Cada Fiber = uma unidade de trabalho:
- componente
- estado
- atualizações
- ponteiro para pai/irmãos
```

Fiber percorre esta árvore em duas fases:

### 1) Render (Reconciliation)

- Calcula mudanças
    
- Pode ser interrompido
    
- Prepara efeitos
    

### 2) Commit

- Aplicação real das mudanças
    
- É **sincrona** e não pode ser interrompida
    

---

# 2. Reconciliation: como o React decide o que atualizar

A reconciliação é o processo pelo qual React compara duas árvores: a anterior e a nova.

Regra geral:

- Se o tipo do elemento é o mesmo, React tenta **reutilizar**.
    
- Se o tipo é diferente, React **remove e recria**.
    

## 2.1 Chaves (keys) importam profundamente

Em listas, a key não é “só um identificador”. Ela **muda completamente a reconciliação**.

Desenho conceitual:

```
Sem key -> React tenta adivinhar quem é quem
Com key  -> React sabe exatamente qual elemento corresponde a qual
```

Más práticas:

- usar índice como key
    

Boas práticas:

- usar identificadores estáveis
    

---

# 3. Estado Global em profundidade

Quando um app cresce, usar apenas `useState` e props se torna impraticável.

Precisamos entender padrões de estado global:

- Context + useReducer
    
- Redux Toolkit
    
- Zustand
    
- Jotai
    
- Recoil
    

Esta seção explica cada um, seus pontos fortes e fracos, e quando usar.

---

# 3.1 Context + useReducer

Ideal para estados globais **estáveis**, com poucas atualizações.

Fluxo conceitual:

```
Dispatch -> Reducer -> Novo estado -> Re-render de todos que usam o contexto
```

Limitações:

- Qualquer mudança re-renderiza todos os consumidores.
    

Use quando:

- estado é pequeno
    
- atualizações pouco frequentes
    

---

# 3.2 Redux Toolkit

Redux moderno é simples, conciso e eficiente.

Pontos fortes:

- previsibilidade absoluta
    
- devtools poderosas
    
- middlewares
    

Quando usar:

- múltiplos fluxos complexos
    
- regras de negócio pesadas
    

---

# 3.3 Zustand

Uma das bibliotecas mais modernas e simples.

Características:

- estado global com **selectors** (evita re-render desnecessário)
    
- inspirado em flux
    
- leve, rápido, elegante
    

Use quando:

- você quer simplicidade + performance
    

---

# 4. React Query em profundidade

React Query é o padrão no mercado para lidar com **server state**.

## 4.1 Diferença entre client state e server state

Client state = preferencias locais, toggles, modais  
Server state = dados vindos de API e que podem mudar fora do cliente

React Query lida com:

- caching
    
- refetching
    
- sincronização
    
- deduplicação
    
- garbage collection
    

Fluxo conceitual:

```
Chamada -> Cache -> Render -> Revalidação
```

---

# 4.2 Estratégias de cache importantes

- stale-time
    
- cache-time
    
- refetchOnWindowFocus
    
- background refetch
    

---

# 5. Arquitetura de projetos profissionais

Estruturar arquivos de forma que escalam em equipe.

Padrão "feature-based":

```
src/
  features/
    users/
      components/
      hooks/
      services/
      pages/
```

Benefícios:

- tudo relacionado à feature fica junto
    
- facilita colaboração
    
- isola complexidade
    

---

# 6. Padrões Avançados de Componentização

## 6.1 Controlled vs Uncontrolled Components

- Controlled: o estado é gerido pelo React
    
- Uncontrolled: DOM gerencia o próprio estado
    

Use controlled para:

- formulários complexos  
    Use uncontrolled para:
    
- performance máxima
    

---

## 6.2 Compound Components

Padrão usado em libs profissionais (Radix, HeadlessUI).

Exemplo conceitual:

```
<Modal>
  <Modal.Trigger />
  <Modal.Content />
</Modal>
```

Benefício: API expressiva e modular.

---

## 6.3 Render Props

Permite passar uma função como filho.

```
<Data>{(dados) => <Tabela dados={dados} />}</Data>
```

---

## 6.4 Hooks Factories

Criar hooks parametrizados:

```
function createToggleHook(initial = false) {
  return function useToggle() {
    const [v, setV] = useState(initial);
    return [v, () => setV(!v)];
  };
}
```

---

# 7. Performance real

## 7.1 Evitando re-renders

- memo
    
- useMemo
    
- useCallback
    
- selectors (Zustand)
    
- virtualization
    

## 7.2 Batching e atualizações agrupadas

React mistura várias atualizações no mesmo ciclo para evitar renders repetidos.

---

# 8. Testes Avançados

Cobrir:

- fluxos complexos
    
- hooks isolados
    
- rotas protegidas
    
- mocks de rede avançados
    

Estratégias:

- Integration over unit
    
- User-first testing
    

---

# 9. Projeto Conceitual da Parte 2

Você irá implementar:

- arquitetura profissional completa
    
- estado global híbrido (Zustand + Context)
    
- camadas de serviço
    
- React Query
    
- páginas complexas com formulários reais
    
- otimizações com memo e selectors
    
- testes de integração
    

Este projeto será construído na Parte 3 se desejar.

---

# Conclusão

A Parte 2 dá a base teórica e arquitetural que diferencia programadores comuns de **especialistas** em React.  
A próxima parte pode ser:  
✅ Parte 3: Projeto completo de nível empresa  
✅ Parte 3: Guia de práticas sênior  
✅ Parte 3: Arquitetura avançada sob demanda

Me avise qual caminho deseja seguir.