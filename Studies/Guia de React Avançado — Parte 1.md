# Guia de React Avançado — Parte 1

### Estudo aprofundado, didático, com explicações extensas e exemplos completos

Este material foi escrito para quem deseja **entender profundamente** o React, desde seus princípios internos até técnicas usadas em projetos profissionais e complexos. A abordagem aqui é lenta, progressiva e rica em detalhes. Nenhuma etapa será "pulada".

A Parte 1 cobre:

- Fundamentos teóricos do React
    
- Mentalidade declarativa
    
- JSX em profundidade
    
- Componentes e ciclo de renderização
    
- Estado e reconciliação
    
- Hooks essenciais explicados com cuidado
    
- Fluxo de dados e arquitetura de componentes
    

A Parte 2 (separada) cobrirá:

- Estado global avançado
    
- React Query
    
- Arquitetura modular
    
- Testes avançados
    
- Performance profunda
    
- Padrões e anti-padrões
    
- Projeto real e completo
    

---

# 1. O que é React _de verdade_?

React não é um "framework que faz interface". Ele é um **motor de cálculo de UI**.

Você diz para o React: "Se o estado for X, a UI deve ser Y".

React observa mudanças no estado e **re-renderiza** a interface declarada. Quem manipula o DOM não é você, mas o próprio React, seguindo regras internas.

## 1.1 A ideia fundamental

O React segue um princípio simples:

> _A UI é uma função pura do estado._

Em matemática: UI = f(estado)

Quando o estado muda, a função é executada novamente.

---

# 2. O que é JSX e por que ele existe?

JSX não é HTML. É uma extensão de sintaxe que o React converte para chamadas de funções.

Exemplo JSX:

```jsx
<h1>Olá</h1>
```

O React converte isso em:

```js
React.createElement("h1", null, "Olá")
```

Ou, na versão moderna:

```js
jsx("h1", {}, "Olá")
```

## 2.1 Por que isso importa?

Porque JSX parece HTML, mas se comporta como JavaScript:

- você pode fazer cálculos dentro dele;
    
- pode usar variáveis;
    
- pode montar UI dinamicamente.
    

---

# 3. Componentes: funções que descrevem interface

Um componente é uma função JavaScript comum:

```jsx
function App() {
  return <h1>Oi</h1>;
}
```

## 3.1 Regras dos componentes

1. O nome deve começar com letra maiúscula.
    
2. Devem retornar JSX.
    
3. Não podem ser chamados manualmente como funções; React é quem invoca.
    

### 3.2 Ciclo de vida mental

React chama seu componente:

1. Cria a árvore de elementos.
    
2. Compara com a árvore anterior.
    
3. Atualiza só o que mudou.
    

Desenho conceitual:

```
[Componente] -> gera -> [Árvore de UI] -> React compara -> Atualiza DOM minimamente
```

---

# 4. Estado em profundidade: o coração do React

Para React, **estado é qualquer informação que, quando muda, exige atualização da UI.**

O hook base é `useState`:

```jsx
const [valor, setValor] = useState(0);
```

## 4.1 O que realmente acontece dentro do React?

Toda vez que você chama `setValor`:

- React agenda uma atualização.
    
- O componente é executado de novo.
    
- Todo o JSX é recalculado.
    
- React compara árvore antiga com a nova.
    
- Atualiza somente o que mudou.
    

Desenho conceitual:

```
estado mudou
   |
   v
React reexecuta componente
   |
   v
gerar nova árvore JSX
   |
   v
React compara e atualiza DOM
```

## 4.2 Imutabilidade

React depende de imutabilidade para detectar mudanças:

- Nunca altere arrays/objetos diretamente.
    
- Sempre retorne novos valores.
    

Errado:

```js
tarefas.push(nova)
```

Certo:

```js
setTarefas([...tarefas, nova])
```

---

# 5. Renderização e Re-renderização

Um dos assuntos mais mal compreendidos.

### 5.1 Quando um componente re-renderiza?

Quando:

- Seu estado muda.
    
- Suas props mudam.
    
- O pai re-renderiza.
    

### 5.2 Re-render não significa "refazer o DOM"

React re-renderiza o **JS** (função), não a **interface física**.  
A atualização real do DOM é mínima.

---

# 6. useEffect: efeitos colaterais com compreensão real

`useEffect` não é um substituto genérico para "quando algo muda".  
Ele serve exclusivamente para sincronizar **efeitos colaterais** com o ciclo de render.

Exemplos de efeitos colaterais:

- requisições API
    
- timers
    
- integração com localStorage
    
- manipulação de título da página
    

## 6.1 Funcionamento profundo

`useEffect` roda **depois** que o React atualiza o DOM.

Fluxo:

```
rendezirou?
   |
   v
DOM atualizado
   |
   v
roda useEffect
```

## 6.2 Array de dependências explicado com calma

`[]` → roda apenas 1 vez.  
`[x]` → roda toda vez que `x` muda.  X podendo ser um numero ou uma variavel 
Sem array → roda a cada render.

---

# 7. Comunicação por props

Props são o mecanismo oficial de comunicação _descendente_.

Fluxo:

```
Pai -> envia dados -> Filho
```

Props são **imutáveis** dentro do filho: ele não pode modificá-las.

---

# 8. Levantando estado (Lifting State Up)

Quando dois componentes irmãos precisam do mesmo estado:

1. Suba o estado para o pai.
    
2. Passe para os filhos via props.
    

Desenho conceitual:

```
   [Pai]
  estado compart.
   /    \
[Filho] [Filho]
```

---

# 9. Composição de componentes

React incentiva composição, não herança.

Errado esncarar componentes monolíticos.  
Certo construir pequenas peças reutilizáveis.

---

# 10. Pensamento declarativo

Em vez de dizer _como fazer_, você descreve _o que deve acontecer_.

Imperativo:

```js
se modoEscuro for true:
  troca fundo
  troca texto
```

Declarativo:

```jsx
<div className={modoEscuro ? "dark" : "light"}>...
```

---

# 11. Mini projeto da Parte 1

Construa um pequeno sistema:

✅ contador com múltiplas operações  
✅ campo de texto com validação ao vivo  
✅ lista de itens com adicionar, remover e editar  
✅ sincronização com localStorage via useEffect

O foco é **entender profundamente o ciclo de renderização**, não apenas fazer a interface funcionar.

---

## Próximo passo: Parte 2

A Parte 2 será um documento separado, cobrindo:

- Estado global avançado (Context, Redux, Zustand, Jotai)
    
- React Query em profundidade
    
- Arquitetura escalável para times
    
- Padrões de design em React
    
- Performance avançada
    
- Projeto completo de dashboard profissional