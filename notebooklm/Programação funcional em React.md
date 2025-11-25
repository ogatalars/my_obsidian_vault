As fontes fornecem uma discussão detalhada sobre os **Conceitos Fundamentais** da Programação Funcional (PF) no contexto do desenvolvimento web, especialmente em relação ao uso do React e JavaScript.

A PF é apresentada como um paradigma de programação cada vez mais popular no JavaScript e é crucial para a compreensão de estruturas como React, Flux e Redux. A ênfase na PF em detrimento da programação orientada a objetos é uma característica importante do React.

### Contexto da Programação Funcional (PF)

A PF é parte de um paradigma de programação mais amplo: a **Programação Declarativa**. Enquanto a programação imperativa se preocupa com _como_ um resultado deve ser alcançado, a programação declarativa (e, portanto, a PF) prioriza a descrição do _que_ deve acontecer. O React, por exemplo, é intrinsecamente declarativo, onde os componentes descrevem o DOM que deve ser renderizado, abstraindo os detalhes de _como_ o DOM é construído.

A origem da PF remonta ao _lambda calculus_ (λ-calculus) nos anos 1930, e sua aplicação em linguagens de programação começou com o Lisp no final dos anos 1950.

O JavaScript suporta a PF porque suas funções são consideradas **cidadãos de primeira classe** (_first-class citizens_). Isso significa que as funções podem ser tratadas como dados: podem ser salvas, recuperadas, adicionadas a objetos ou _arrays_, enviadas como argumentos para outras funções ou retornadas por outras funções.

### Conceitos Fundamentais da Programação Funcional

As fontes listam vários conceitos principais da PF que, quando aplicados, tornam as aplicações mais fáceis de raciocinar e dimensionar:

#### 1. Imutabilidade (Immutability)

Ser **imutável** significa ser imutável. Em um programa funcional, os dados nunca mudam.

- Em vez de alterar as estruturas de dados originais, o desenvolvedor deve **construir cópias alteradas** dessas estruturas de dados e usá-las em seu lugar.
- Isso se aplica tanto a objetos quanto a _arrays_. O uso do _spread operator_ (`...`) é um método para retornar novos _arrays_ ou objetos sem modificar o original.

#### 2. Funções Puras (Pure Functions)

Uma função pura é um dos conceitos centrais da PF e tem regras estritas:

- Deve **aceitar pelo menos um argumento**.
- Deve **retornar um valor** ou outra função.
- Não deve **causar efeitos colaterais** (_side effects_), o que significa que não deve mudar ou mutar nenhum de seus argumentos, definir variáveis globais, ou alterar qualquer estado da aplicação.

Funções impuras (aquelas que causam efeitos colaterais, como manipular o DOM diretamente) devem ser evitadas. Uma vantagem significativa das funções puras é que elas são **naturalmente testáveis**.

#### 3. Transformações de Dados (Data Transformations)

Como os dados são imutáveis na PF, as aplicações progridem através da transformação de dados de uma forma para outra, produzindo cópias transformadas. As duas funções principais a serem dominadas para proficiência em JavaScript funcional são `Array.map` e `Array.reduce`.

- **`Array.map`**: Pega uma função como argumento e a invoca para cada item no _array_, usando o valor retornado para adicionar ao novo _array_.
- **`Array.filter`**: Usa um predicado para decidir quais itens devem ser adicionados ao novo _array_. É preferido em vez de métodos mutáveis como `Array.pop` ou `Array.splice`.
- **`Array.reduce` / `Array.reduceRight`**: Pode transformar um _array_ em qualquer valor, incluindo um número, _string_, booleano, objeto ou até mesmo uma função. É usado para criar um único valor a partir de um _array_.

#### 4. Funções de Ordem Superior (Higher-Order Functions - HOCs)

Funções de Ordem Superior são aquelas que **manipulam outras funções**; elas podem aceitar funções como argumentos ou retornar funções, ou ambos.

- Exemplos nativos do JavaScript que são HOCs incluem `Array.map`, `Array.filter` e `Array.reduce`.
- O uso de HOCs é essencial para a PF e pode ajudar a gerenciar complexidades associadas à assincronicidade.
- Um exemplo de técnica funcional que envolve HOCs é **Currying**.

No contexto do React, o termo **Componente de Ordem Superior (HOC)** refere-se especificamente a uma função que pega um componente React como argumento e retorna outro componente React, sendo o melhor caminho para reutilizar funcionalidades entre componentes.

#### 5. Recursão (Recursion)

Recursão é uma técnica que envolve a criação de funções que **se chamam de volta**.

- É frequentemente usada como alternativa aos _loops_.
- Funciona bem com processos assíncronos.
- Embora deva ser usada em vez de _loops_ sempre que possível, as limitações da pilha de chamadas (_call stack_) em alguns motores JavaScript devem ser consideradas.

#### 6. Composição (Composition)

A composição é o processo de pegar pequenas funções puras, focadas em tarefas específicas, e **combiná-las em funções maiores**. O objetivo é gerar uma função de ordem superior combinando funções mais simples.

- Um método é o **encadeamento** (_chaining_), onde funções são encadeadas usando a notação de ponto para atuar no valor de retorno da função anterior.
- Uma abordagem mais elegante é usar uma função `compose` (como a fornecida pelo Redux) que pega várias funções como argumentos e as executa em série, passando a saída de uma como a entrada da próxima, resultando em uma única função.

Para construir aplicações funcionais escaláveis, o desenvolvedor deve focar em três regras simples: **manter os dados imutáveis**, **manter as funções puras** (aceitar pelo menos um argumento, retornar dados ou outra função) e **usar recursão em vez de _looping_** (sempre que possível).