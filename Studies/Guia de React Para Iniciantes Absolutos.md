# Guia de React Para Iniciantes Absolutos

## Etapa 1: Agora com exercícios e desenhos conceituais

Nesta etapa vamos enriquecer cada seção com:

- **Exercícios guiados**;
    
- **Desenhos conceituais textuais** que representam o fluxo mental.
    

Depois faremos a **Etapa 2**, aprofundando conceitos avançados de React para projetos complexos.

Este guia foi reescrito para alguém que está **começando do zero**, incluindo quem tem **pouquíssima experiência em programação**. Nada de pressa. Nada de termos complicados sem explicação. Cada conceito vai ser apresentado devagar, com exemplos simples, e repetição suficiente para fixar.

A ideia é que você consiga abrir o editor de código e ir acompanhando.

---

# 1. O que é React?

Imagine que você quer construir uma interface (uma tela) que se atualiza quando algo muda. Por exemplo:

- quando você clica num botão;
    
- quando digita num campo de texto;
    
- quando recebe dados de uma API.
    

Fazer isso manualmente em JavaScript puro exige manipular HTML direto, atualizar cada parte, trocar texto, remover elementos. React facilita isso criando **componentes**, pequenas funções que descrevem o que deve aparecer na tela.

Quando algo muda, React automaticamente **re-renderiza** a tela sem que você precise mexer direto no DOM.

---

# 2. Criando o projeto (com Vite)

Você precisa ter o **Node.js** instalado.

Abra o terminal e rode:

```bash
npm create vite@latest minha-app -- --template react
cd minha-app
npm install
npm run dev
```

Depois abra o endereço que aparece no terminal (geralmente `http://localhost:5173`).

Você deve ver uma tela inicial do Vite + React funcionando.

---

# 3. Primeiro contato: o componente App

Abra `src/App.jsx`. Ele é parecido com isto:

```jsx
export default function App() {
  return (
    <h1>Hello World!</h1>
  );
}
```

## O que está acontecendo aqui?

- `export default function App() { ... }` significa que estamos criando um componente chamado **App**.
    
- Esse componente **retorna** algo chamado **JSX**, que parece HTML, mas é na verdade JavaScript.
    
- Tudo dentro de `return (...)` é o que aparece na tela.
    

## Exercício

Troque o texto para:

```jsx
<h1>Meu primeiro app em React!</h1>
```

Salve. A página atualiza sozinha.

Pronto. Você já está “programando em React”.

---

# 4. Variáveis dentro da tela

Você pode colocar **JavaScript dentro do JSX** usando `{}`.

```jsx
const nome = "Lucas";

export default function App() {
  return <h1>Bem-vindo, {nome}</h1>;
}
```

React pega o valor da variável `nome` e coloca no HTML.

---

# 5. Introdução ao estado (useState)

Agora começamos a parte mais importante: **estado**.

O estado é uma variável que muda com o tempo e, quando muda, React atualiza a tela.

Exemplo simples:

```jsx
import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={aumentar}>Clique aqui</button>
    </div>
  );
}
```

## Entenda com calma

- `useState(0)` cria uma variável chamada `contador` e começa em `0`.
    
- `setContador` é a função que muda esse valor.
    
- Toda vez que você chama `setContador`, a tela atualiza.
    

## Exercício

Crie um botão que diminui o contador.

---

# 6. Eventos: clique, digitação, etc.

Você pode reagir a eventos como:

- `onClick` (cliques)
    
- `onChange` (quando digita num campo)
    
- `onSubmit` (quando envia um formulário)
    

Exemplo com campo de texto:

```jsx
import { useState } from "react";

export default function App() {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <input
        placeholder="Digite algo"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <p>Você digitou: {texto}</p>
    </div>
  );
}
```

Aqui React está mostrando na tela exatamente o que você digita.

---

# 7. Renderização condicional

Às vezes queremos mostrar algo **dependendo** de uma condição.

```jsx
const logado = false;

export default function App() {
  return (
    <div>
      {logado ? <p>Você está logado</p> : <p>Faça login</p>}
    </div>
  );
}
```

---

# 8. Trabalhando com listas

Se você tem vários itens, pode exibi-los com `.map()`:

```jsx
const frutas = ["Maçã", "Banana", "Pêra"];

export default function App() {
  return (
    <ul>
      {frutas.map((f) => <li key={f}>{f}</li>)}
    </ul>
  );
}
```

A propriedade `key` é obrigatória para React saber qual item é qual.

---

# 9. EXEMPLO COMPLETO 1: Lista de Tarefas para iniciantes

Vamos juntar tudo que aprendemos num mini projeto.

```jsx
import { useState } from "react";

export default function App() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionar(e) {
    e.preventDefault();
    if (!texto.trim()) return;

    setTarefas([...tarefas, texto]);
    setTexto("");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Minhas tarefas</h1>

      <form onSubmit={adicionar}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button>Adicionar</button>
      </form>

      <ul>
        {tarefas.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Aprendizados deste exemplo

- usar estado para guardar informações
    
- trabalhar com listas
    
- criar formulários controlados
    
- manipular arrays com `...`
    

---

# 10. useEffect — explicação devagar

`useEffect` serve para **rodar código quando algo acontecer**.

Use quando:

- você quer buscar dados da internet;
    
- quer atualizar o título da aba;
    
- quer salvar dados automaticamente.
    

Exemplo de relógio simples:

```jsx
import { useEffect, useState } from "react";

export default function App() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(id); // limpeza
  }, []);

  return <h1>{hora}</h1>;
}
```

---

# 11. EXEMPLO COMPLETO 2: Buscador de Pokémon (didático)

Agora vamos chamar uma API real.

```jsx
import { useEffect, useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [erro, setErro] = useState("");

  async function buscar() {
    try {
      setErro("");
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`);
      if (!res.ok) throw new Error("Pokémon não encontrado");
      const dados = await res.json();
      setPokemon(dados);
    } catch (e) {
      setPokemon(null);
      setErro(e.message);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Buscador de Pokémon</h1>

      <input
        placeholder="Digite o nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={buscar}>Buscar</button>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
}
```

---

# 12. O que aprender depois

Quando você dominar o básico:

- React Router (múltiplas páginas)
    
- Context API (compartilhar dados entre telas)
    
- Styled Components ou Tailwind
    
- Testes
    
- TypeScript
    

---

Se você quiser, posso deixar o guia **ainda mais didático**, com:

- analogias do mundo real,
    
- exercícios para cada seção,
    
- desenhos conceituais,
    
- ou transformar isso em um "curso de 7 dias".
    

O que você prefere?