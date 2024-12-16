const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e'); // 0(1)

//pop
strings.pop();
strings.pop(); // 0(1)

//unshift
strings.unshift('x') // 0(n)

//splice
strings.splice(2, 0, 'alien'); // 0(n)

console.log(strings)

lookup o(1) and push 0(1); insert O(n); delete O(n)

Static x Dynamic array

Static array = Fixed in size; 
Dynamic Array = Not fixed in size; 


Vamos fazer uma aula épica sobre arrays em JavaScript no estilo RPG! Você é um **Desenvolvedor Aventureiro**, e sua missão é dominar os **Arrays**, uma estrutura de dados fundamental, para impressionar o **Recrutador Dragão**. Pegue sua espada de conhecimento, e vamos começar a jornada!

---

### **Nível 1: O que são Arrays?**

**Missão:** Entender o conceito básico.

- Arrays são como **mochilas mágicas** no mundo do RPG. Eles armazenam vários itens (dados) em **slots numerados**, começando pelo índice `0`.
- Em JavaScript, os arrays são **dinâmicos**, ou seja, você pode alterar o tamanho deles (adicionar ou remover itens) sem se preocupar com a capacidade inicial.

**Sintaxe:**

```javascript
let mochila = []; // Mochila vazia
let inventario = ['Espada', 'Poção', 'Escudo']; // Mochila com itens
```

**Características:**

- Os arrays em JavaScript são heterogêneos: podem conter diferentes tipos de dados.
    
    ```javascript
    let mix = [42, 'Dragão', true];
    ```
    
- **Big O (Complexidade)**:
    - Acesso por índice: **O(1)** (rápido, direto ao ponto)
    - Adicionar no final (`push`): **O(1)** (geralmente)
    - Remover no final (`pop`): **O(1)** (simples)
    - Inserir ou remover no início (`unshift`/`shift`): **O(n)** (rearranjo dos elementos)

---

### **Nível 2: Arrays Estáticos vs Dinâmicos**

**Missão:** Entender a diferença entre mochilas fixas e mágicas.

- **Arrays Estáticos** (em linguagens como C ou Java):
    - Você deve especificar o tamanho **antes** de usá-los.
    - Tamanho fixo (não pode expandir ou reduzir).
    - Operações de acesso e modificação são rápidas porque não há necessidade de realocação.
- **Arrays Dinâmicos** (JavaScript):
    - A mochila expande automaticamente conforme você adiciona mais itens.
    - Internamente, a memória pode ser realocada, o que pode causar operações **O(n)** em alguns casos (crescimento exponencial da capacidade).

**Exemplo:**

```javascript
let inventario = ['Espada', 'Poção'];
inventario.push('Arco'); // Adiciona no final
console.log(inventario); // ['Espada', 'Poção', 'Arco']
```

---

### **Nível 3: Operações Básicas**

**Missão:** Aprender as habilidades básicas para manipular arrays.

#### **1. Adicionar Itens**

- **Adicionar no final:**
    
    ```javascript
    inventario.push('Flecha'); // O(1)
    ```
    
- **Adicionar no início:**
    
    ```javascript
    inventario.unshift('Elmo'); // O(n)
    ```
    

#### **2. Remover Itens**

- **Remover do final:**
    
    ```javascript
    inventario.pop(); // O(1)
    ```
    
- **Remover do início:**
    
    ```javascript
    inventario.shift(); // O(n)
    ```
    

#### **3. Acessar Elementos**

- Pegue itens usando o índice:
    
    ```javascript
    console.log(inventario[0]); // 'Elmo'
    ```
    

#### **4. Atualizar Elementos**

- Atualize diretamente pelo índice:
    
    ```javascript
    inventario[1] = 'Cajado';
    ```
    

---

### **Nível 4: Métodos Avançados**

**Missão:** Aprender magias de manipulação.

1. **`slice` (cortar uma parte do array):**
    
    ```javascript
    let poções = inventario.slice(1, 3); // O(n)
    console.log(poções); // ['Cajado', 'Arco']
    ```
    
2. **`splice` (inserir ou remover elementos no meio):**
    
    ```javascript
    inventario.splice(1, 1, 'Martelo'); // Remove 1 item na posição 1, insere 'Martelo'
    console.log(inventario); // ['Elmo', 'Martelo', 'Arco']
    ```
    
3. **`map` (transformar os itens):**
    
    ```javascript
    let armas = inventario.map(item => `${item} +1`);
    console.log(armas); // ['Elmo +1', 'Martelo +1', 'Arco +1']
    ```
    
4. **`filter` (filtrar os itens):**
    
    ```javascript
    let armasPesadas = inventario.filter(item => item.includes('Martelo'));
    console.log(armasPesadas); // ['Martelo']
    ```
    
5. **`reduce` (acumular valores):**
    
    ```javascript
    let inventarioJunto = inventario.reduce((acc, item) => acc + ', ' + item);
    console.log(inventarioJunto); // 'Elmo, Martelo, Arco'
    ```
    

---

### **Nível 5: Eficiência e Desafios**

**Missão:** Preparar-se para o combate final.

1. **Big O em Operações Comuns:**
    
    |Operação|Complexidade|
    |---|---|
    |Acesso|O(1)|
    |Inserção Final|O(1)|
    |Inserção Meio|O(n)|
    |Remoção Final|O(1)|
    |Remoção Meio|O(n)|
    |Busca|O(n)|
    
2. **Estratégias de Otimização:**
    
    - Evite manipular o início do array com frequência (`shift`, `unshift`), pois isso move todos os itens subsequentes.
    - Para buscas frequentes, use estruturas mais rápidas como mapas (`Map`).

---

### **Batalha Final: Resolver um Problema**

**Missão:** Ordenar os itens do inventário.

**Problema:** Ordene os itens em ordem alfabética.

```javascript
inventario.sort();
console.log(inventario); // ['Arco', 'Elmo', 'Martelo']
```

**Desafio Avançado:** Ordene por comprimento do nome.

```javascript
inventario.sort((a, b) => a.length - b.length);
console.log(inventario); // ['Arco', 'Elmo', 'Martelo']
```

---

### **Conclusão**

Você agora é um Mestre dos Arrays! Lembre-se de:

- Usar a estrutura de dados apropriada para o problema.
- Dominar o Big O para impressionar na entrevista.
- Mostrar exemplos práticos e otimizações.

Está pronto para derrotar o **Recrutador Dragão**! 🎮