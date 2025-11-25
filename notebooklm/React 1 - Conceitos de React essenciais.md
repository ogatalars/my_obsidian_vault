Os conceitos de **React Puro** são apresentados nas fontes como a fundação do ecossistema React, intimamente ligada ao paradigma do Desenvolvimento Funcional (PF), que é o foco principal do livro "Learning React". O Capítulo 4 do material é dedicado a explorar o **"Pure React"** (React Puro) para que os desenvolvedores entendam o que está acontecendo "sob o capô" do React, o que é crucial para maior eficiência e depuração.

### Contexto: React e Programação Funcional

React é uma biblioteca que enfatiza a Programação Funcional em detrimento da programação orientada a objetos (POO). A compreensão dos conceitos básicos de PF, como Funções Puras e Imutabilidade, eleva o conhecimento sobre a estruturação de aplicações React. React se encaixa no paradigma da **Programação Declarativa**, onde o foco está em descrever _o que_ deve acontecer, em vez de definir _como_.

### Conceitos Fundamentais do React Puro

O React Puro é baseado em três conceitos essenciais que garantem que o código seja previsível e eficiente:

#### 1. Funções Puras e Componentes Funcionais _Stateless_

O React utiliza a ideia de **Funções Puras** — um conceito central da PF — para expressar a Interface do Usuário (UI). Uma função pura deve aceitar pelo menos um argumento, retornar um valor ou outra função, e **não deve causar efeitos colaterais** (como modificar argumentos ou o estado da aplicação).

No React, os **Componentes Funcionais _Stateless_** (sem estado) são a implementação mais pura desse conceito.

- **Definição:** Componentes Funcionais _Stateless_ (SFCs) são simplesmente **funções**, não objetos, e, portanto, não possuem escopo `this`.
- **Princípio da Pureza:** Eles pegam propriedades (`props`) como entrada e retornam um elemento DOM, sem causar efeitos colaterais.
- **Benefícios:** Fomentar o uso de SFCs leva a uma arquitetura de aplicação mais simples e um código base **extremamente testável**, pois são funções puras. Deve-se buscar usá-los o máximo possível na aplicação.

#### 2. Elementos React e o DOM Virtual

O React Puro é construído em torno de dois conceitos que separam a lógica da aplicação da manipulação direta do navegador:

- **DOM Virtual (Virtual DOM):** É um conjunto de instruções ou um modelo que o React usa para construir e interagir com o navegador, abstraindo as complexidades de manipulação do DOM nativo. Trabalhar com o Virtual DOM (objetos JavaScript) é muito mais rápido do que interagir diretamente com a API do DOM.
- **Elementos React (React Elements):** São os "tijolos" do Virtual DOM. Um Elemento React é uma **descrição** de como o elemento DOM real deve se parecer; eles são objetos JavaScript literais que contêm as instruções de construção. Eles são criados usando a função `React.createElement`.

#### 3. ReactDOM e Renderização Eficiente

A biblioteca **ReactDOM** contém as ferramentas necessárias para renderizar os Elementos React no navegador. A função `ReactDOM.render` é responsável por renderizar a UI.

No React Puro, a eficiência de atualização da UI é crítica. Quando o estado da aplicação muda e um novo elemento é renderizado, o `ReactDOM.render` trabalha de forma inteligente: em vez de reconstruir o DOM inteiro, ele **deixa o DOM atual no lugar e aplica apenas a quantidade mínima de mudanças necessárias**.

### O Papel da Composição e do JSX

No contexto do React Puro e do desenvolvimento funcional, a estrutura dos elementos é mantida através da **composição**.

- **Árvore de Componentes:** Todos os elementos React são aninhados em uma **árvore de componentes** única, na qual um elemento raiz tem muitos filhos (`props.children`).
- **Separação de Dados:** O React permite a **separação de dados dos elementos da UI**. No desenvolvimento funcional, essa separação é essencial, permitindo que os dados sejam armazenados (e gerenciados por bibliotecas como Redux) e mapeados para elementos React usando funções como `Array.map`.
- **JSX:** Embora o Capítulo 4 se concentre no **React Puro** (usando `React.createElement`), as fontes explicam que o JSX é uma extensão do JavaScript que fornece uma sintaxe concisa (semelhante a HTML) para criar esses Elementos React. O JSX é, no final, **transpilado** (pelo Babel) em chamadas `React.createElement`, retornando ao código React Puro que de fato é executado.

Em suma, "Pure React" significa focar na descrição da UI usando funções que reagem de forma previsível a entradas (props), enquanto o framework gerencia a manipulação real e eficiente do DOM através do conceito de Virtual DOM. Este design se alinha perfeitamente com os princípios declarativos e testáveis do desenvolvimento funcional.

**Configuração de página **

O conceito de **Configuração de Página** (_Page Setup_) é o primeiro passo discutido no Capítulo 4, "Pure React", e estabelece o ambiente mínimo necessário para executar o código React diretamente no navegador, sem a necessidade inicial de ferramentas de _build_ como o Webpack ou JSX.

Esta configuração é crucial para entender como o React funciona "por baixo do capô" e sublinha a divisão fundamental entre a lógica de _criação_ da UI e a lógica de _renderização_ no ambiente do navegador.

### Componentes Mínimos da Configuração de Página

Para trabalhar com React Puro no navegador, as fontes indicam que três elementos são indispensáveis: as duas bibliotecas principais do React e um contêiner alvo na estrutura HTML.

#### 1. Bibliotecas React e ReactDOM

Duas bibliotecas distintas devem ser incluídas no documento HTML:

- **React:** Esta é a biblioteca responsável pela **criação de _views_**.
- **ReactDOM:** Esta é a biblioteca usada para **renderizar a Interface do Usuário (UI) no navegador**.

A cisão dessas funcionalidades em pacotes separados ocorreu na versão 0.14 do React. Essa separação enfatiza que a essência do React não está ligada exclusivamente aos navegadores ou ao DOM. Isso permite que os desenvolvedores escrevam componentes que possam ser compartilhados entre a versão web e plataformas nativas, como o React Native.

Ambas as bibliotecas são carregadas através de _scripts_ disponíveis em CDNs (Content Delivery Networks) do Facebook.

#### 2. O Elemento Contêiner (Target Container)

É necessário um **elemento HTML** que o ReactDOM utilizará como alvo para renderizar a UI. O código puro do React será montado dentro deste elemento no DOM.

A configuração básica de um documento HTML, conforme ilustrado nas fontes, inclui um contêiner alvo geralmente definido por um ID: `<div id="react-container"></div>`.

#### 3. Ordem de Carregamento dos Scripts

O código JavaScript contendo o Pure React (seja incorporado ou em um arquivo separado) deve ser carregado na página **após** as bibliotecas React e ReactDOM terem sido carregadas.

A estrutura mínima do documento HTML para trabalhar com React Puro é apresentada como a seguir:

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Pure React Samples</title>
</head>
<body>
    <!-- Contêiner alvo -->
    <div id="react-container"></div>
    <!-- Bibliotecas React e ReactDOM -->
    <script src="https://unpkg.com/react@15.4.2/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@15.4.2/dist/react-dom.js"></script>
    <script>
        // Código Pure React e JavaScript
    </script>
</body>
</html>
```

Essa configuração representa os **requisitos mínimos** para que o React comece a operar no navegador. Uma vez que a página esteja configurada, o React pode começar a construir o **DOM Virtual** a partir dos Elementos React criados por `React.createElement`.

**DOM VIRTUAL**

As fontes definem o **DOM Virtual (Virtual DOM)** como um conceito fundamental do React Puro, essencial para a maneira como a biblioteca lida com a construção e atualização eficiente da Interface do Usuário (UI) no navegador.

O React é uma solução para as complexidades associadas à construção de Aplicações de Página Única (SPAs) performáticas, pois gerencia a atualização do DOM real do navegador de forma inteligente.

### Definição e Função do DOM Virtual

O DOM Virtual é descrito como:

- **Um conjunto de instruções ou um modelo** que o React utiliza para construir a UI e interagir com o navegador, **abstraindo as complexidades** da manipulação direta da API do DOM.
- É a camada com a qual o desenvolvedor interage **em vez de interagir diretamente com a API do DOM**.
- É composto por **Elementos React**, que são os "tijolos" (_bricks_) do DOM Virtual.
- Trabalhar com o DOM Virtual (objetos JavaScript) é **muito mais rápido** do que interagir diretamente com a API do DOM.

### DOM Virtual no Fluxo do React Puro

No contexto do React Puro, o fluxo de construção da UI envolve o DOM Virtual e o `ReactDOM`:

1. **DOM e SPAs:** O DOM (Document Object Model) é a hierarquia de elementos que o navegador constrói a partir do HTML, e a invenção do AJAX permitiu a criação de SPAs, onde o JavaScript destrói e cria uma nova UI à medida que o usuário interage com o aplicativo.
2. **Problema da API do DOM:** Embora atualizar elementos DOM renderizados seja relativamente fácil com JavaScript, o processo de **inserir novos elementos é "dolorosamente lento"**. Gerenciar mudanças eficientes no DOM com JavaScript pode ser complicado e demorado.
3. **A Solução do React:** O React é projetado para atualizar o DOM do navegador para o desenvolvedor. Ao invés de manipular o DOM nativo, o desenvolvedor faz alterações em um **objeto JavaScript**, o DOM Virtual, e o React renderiza essas alterações da maneira mais eficiente possível usando a API do DOM.

### Elementos React

Os **Elementos React** (discutidos em detalhe na nossa conversa anterior) são fundamentais para o DOM Virtual.

- Um Elemento React é um **objeto literal JavaScript** que serve como uma **descrição** de como o elemento DOM real deve se parecer.
- Esses elementos são criados usando a função `React.createElement`.
- A partir desses elementos, o React constrói uma **árvore de componentes** (_component tree_) que é o DOM Virtual, toda originada de um único elemento raiz.

### Renderização Eficiente

A principal vantagem do DOM Virtual reside na sua capacidade de otimizar as atualizações da UI:

- Quando o estado da aplicação muda, o componente é renderizado novamente. O `ReactDOM.render` não reconstrói o DOM inteiro.
- Em vez de apagar e reconstruir todo o DOM, o `ReactDOM.render` **mantém o DOM atual no lugar e aplica apenas a quantidade mínima de alterações necessárias** para modificar o DOM.
- A **inserção de novos elementos** no DOM é uma das operações mais caras da API do DOM. O `ReactDOM.render` minimiza essas inserções, priorizando a atualização de elementos existentes, o que torna as aplicações mais rápidas.

Em resumo, o DOM Virtual age como um intermediário programático rápido (um modelo de objeto JavaScript) que permite aos desenvolvedores expressar a UI de forma declarativa e previsível. O React, então, lida com a tarefa demorada e complexa de sincronizar esse modelo com o DOM real do navegador de maneira otimizada.

Como uma analogia para entender o DOM Virtual: Imagine que o DOM real do navegador é uma **grande construção física** que é lenta e custosa para modificar (como uma casa de tijolos). O DOM Virtual é o **projeto arquitetônico** da casa, que pode ser alterado e revisado rapidamente (um objeto digital) antes que a equipe de construção (o React) realize apenas as mudanças essenciais e mais eficientes na estrutura física.