

### Parte 3 • Arquitetura • Padrões • Anti-padrões • Componentização Sênior • Engenharia de Frontend

Este documento é totalmente focado em **práticas profissionais e maturidade técnica**, o tipo de conhecimento que diferencia um dev mediano de um dev sênior em React. Aqui você vai entender **como pensar**, **como estruturar** e **como tomar decisões arquiteturais** em projetos React de verdade.

É um manual de engenharia, não apenas de código.

---

# 1. Princípios Fundamentais do React Sênior

Todo desenvolvedor React avançado compartilha alguns princípios internos:

## 1.1 Pensamento declarativo

Você descreve _o que deve acontecer_, não _como fazer_.  
Isso cria UIs previsíveis, testáveis e fáceis de manter.

## 1.2 UI como consequência, não como destino

Um dev júnior “empurra” mudanças para a UI.

Um dev sênior **deriva a UI do estado**.

Fluxo conceitual:

```
Estado -> UI
```

## 1.3 Composição sobre herança

React é uma linguagem de componentes. Componentes menores e puros são sempre melhores.

## 1.4 Uma fonte de verdade

Evite estados duplicados e inconsistentes.

---

# 2. Arquitetura Frontend Moderna

A estrutura de um projeto é um fator crítico para a manutenibilidade.

## 2.1 Feature-Based Architecture

Organizar por tipo (components/, hooks/, utils/) funciona apenas em projetos pequenos.  
Projetos profissionais usam **arquitetura baseada em features**.

```
src/
  features/
    users/
      pages/
      components/
      hooks/
      services/
    products/
      pages/
      components/
      hooks/
      services/
  shared/
    ui/
    hooks/
    utils/
    layouts/
```

### Benefícios

- Maior autonomia por feature
    
- Escalabilidade em equipe
    
- Testes mais organizados
    
- Separação clara de domínios
    

---

# 3. Anti-padrões comuns em React

Aqui estão sinais de alerta que indicam código júnior.

## 3.1 Estado demais em um único componente

Sinais:

- o componente tem mais de 300 linhas
    
- contém múltiplos fluxos de dados
    
- faz mnoho responsabilidades
    

Solução: separar UI, lógica e serviços.

## 3.2 Re-renderização excessiva

Causas comuns:

- passar props inline
    
- recriar funções a cada render
    
- contexto mal particionado
    

## 3.3 Efeitos de useEffect usados incorretamente

Exemplos ruins:

- usar useEffect para atualizar estado derivado
    
- usar useEffect para sincronizar coisas que poderiam ser calculadas direto no render
    

## 3.4 Duplicação de estado

Evite estados como:

```js
const [filtered, setFiltered] = useState([]);
```

quando pode ser derivado:

```js
const filtered = items.filter(...);
```

---

# 4. Padrões Avançados de Componentização

## 4.1 Pattern: Container + Presenter

Separar lógica e UI.

```
UserContainer (lógica)
UserList       (UI)
```

Benefícios:

- testes mais simples
    
- UI 100% declarativa
    

## 4.2 Pattern: Compound Components

Pattern usado por bibliotecas de componentes modernos.

Exemplo:

```
<Accordion>
  <Accordion.Item>
    <Accordion.Header />
    <Accordion.Content />
  </Accordion.Item>
</Accordion>
```

Ideal para componentes complexos e flexíveis.

## 4.3 Pattern: Hooks especializados

Separar lógica em hooks isolados:

```
useAuth()
useUserFilters()
usePagination()
```

Cada hook representa um _caso de uso_, não apenas código reutilizável.

---

# 5. Estado Global: Estratégia Profissional

Dev sênior não usa apenas “qualquer biblioteca”. Ele **escolhe uma estratégia**.

## 5.1 Context

Ótimo para: tema, user, configs.

Ruim para: estado que muda muito.

## 5.2 Zustand

Excelente para:

- alta performance
    
- selectors
    
- ergonomia
    

Fluxo conceitual:

```
estado -> select -> re-render mínimo
```

## 5.3 Redux Toolkit

Bom para:

- regras de negócio complexas
    
- workflows longos
    
- histórico e devtools poderosos
    

## 5.4 React Query (server state)

É um erro usar Redux/Zustand para dados de API.

Use sempre React Query para:

- cache
    
- sincronização
    
- revalidações automáticas
    

---

# 6. Performance Sênior

## 6.1 Evitando renders desnecessários

Ferramentas:

- React.memo
    
- useMemo
    
- useCallback
    
- selectors
    
- virtualization
    

## 6.2 Suspense e Concurrent Features

React moderno permite operações assíncronas fluídas.

Fluxo:

```
SuspenseBoundary
   -> carregando
   -> sucesso
   -> erro
```

## 6.3 Entendendo Batching

React agrupa atualizações para evitar renders múltiplos.

---

# 7. Design System e UI consistente

Dev sênior entende que:

- UI é um sistema
    
- Components < Patterns < Design System
    

## 7.1 Paleta, tokens e semântica

Estruturar tema via tokens:

```
--color-primary: #6200ee;
--spacing-sm: 8px;
```

## 7.2 Componentes base

Botões, inputs, cards, modal devem ser genéricos e reutilizáveis.

---

# 8. Boas Práticas de Testes

## 8.1 Teste comportamentos, não implementações

User-first testing:

```
type
click
see changes
```

## 8.2 Teste flows, não detalhes

Teste:

- rotas privadas
    
- formulários complexos
    
- mutações de API
    

## 8.3 Mocks inteligentes

Evitar mocks excessivos: prefira integração leve.

---

# 9. Logging, Telemetria e Observabilidade

Apps reais precisam medir erros.  
Ferramentas:

- Sentry
    
- LogRocket
    

## 9.1 Smart Error Boundaries

Criar limites de erro por feature.

---

# 10. Guia de Decisões Arquiteturais

Dev sênior sabe justificar escolhas:

- Context ou Zustand?
    
- React Query ou Redux?
    
- Controlled ou Uncontrolled?
    
- API REST ou GraphQL?
    

Este documento te dá critérios claros.

---

# 11. Checklist Sênior para Pull Requests

Antes de aprovar código:

- Componente faz apenas UMA coisa?
    
- Tem estado redundante?
    
- Tem efeito desnecessário?
    
- UI deriva de estado?
    
- Código é previsível?
    
- Arquitetura está consistente?
    

---

# 12. Próximos Passos

Você pode agora seguir para:  
✅ Parte 4: Projeto empresarial completo  
✅ Parte 4: Guia de Debugging Profundo  
✅ Parte 4: Arquitetura avançada orientada a domínios

Escolha e eu continuo a evolução.