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
Dynamic Array = Not fixed in size




---

### **O que é um Array?**

Imagine que você é um **aventureiro** organizando sua mochila (inventário). Cada **slot** da mochila é numerado, começando do `0`, e pode guardar qualquer item (números, strings, objetos, etc.). Esse inventário é chamado de **Array** no mundo da programação(js)

No entanto, a diferença entre mochilas de diferentes mundos (linguagens) é que:

- Em JavaScript, **Arrays são dinâmicos**. Você não precisa saber o tamanho antecipadamente. Pode começar com uma mochila vazia e adicionar/remover itens sem preocupação.
- Em linguagens como C, **Arrays são estáticos**, o que significa que você precisa definir o tamanho antes de usá-los. Isso é mais eficiente para memória, mas menos flexível.

#### **Representação de um Array:**

```javascript
let inventario = ['Espada', 'Poção', 'Escudo'];
// Índices:        0          1        2
```

Cada **índice** é como a posição dos itens no seu inventário. Para acessar ou modificar qualquer item, você usa o índice.

---

### **Arrays Estáticos vs Dinâmicos**

#### **Arrays Estáticos (exemplo em C):**

- O tamanho do inventário é fixo.
- A memória para o array é alocada antecipadamente.
- Benefícios: Operações de leitura são extremamente rápidas porque a memória é contígua (um bloco contínuo).
- Problema: Não é possível redimensionar.

#### **Arrays Dinâmicos (JavaScript):**

- O tamanho do inventário pode crescer ou encolher automaticamente.
- Por trás das cenas, JavaScript redimensiona o array ao atingir um limite, copiando os elementos para um novo espaço maior.
- Benefício: Flexibilidade.
- Problema: Isso pode causar re-alocação, o que é **O(n)** em alguns casos.

**Exemplo:**

```javascript
let inventario = []; // Mochila inicial vazia
inventario.push('Espada'); // Adiciona no final (O(1))
inventario.push('Poção'); // Agora contém ['Espada', 'Poção']
```

---

### **Operações em Arrays**

Vamos entender o que você pode fazer com um array e o custo dessas operações em termos de complexidade de tempo (Big O).

1. **Adicionar Itens**:
    
    - **No final (`push`)**: **O(1)** (geralmente rápido porque apenas adiciona ao final).
    - **No início (`unshift`)**: **O(n)** (porque todos os itens precisam ser deslocados para abrir espaço).
    
    **Exemplo:**
    
    ```javascript
    let inventario = ['Espada', 'Poção'];
    inventario.push('Arco'); // ['Espada', 'Poção', 'Arco']
    inventario.unshift('Elmo'); // ['Elmo', 'Espada', 'Poção', 'Arco']
    ```
    
2. **Remover Itens**:
    
    - **No final (`pop`)**: **O(1)** (simplesmente remove o último item).
    - **No início (`shift`)**: **O(n)** (desloca todos os itens restantes).
    
    **Exemplo:**
    
    ```javascript
    inventario.pop(); // Remove 'Arco'
    inventario.shift(); // Remove 'Elmo'
    ```
    
3. **Acessar Elementos**:
    
    - O acesso por índice é **O(1)** porque o índice mapeia diretamente para o endereço de memória.
    
    **Exemplo:**
    
    ```javascript
    console.log(inventario[0]); // 'Espada'
    ```
    
4. **Buscar Elementos**:
    
    - **Linear Search (`indexOf`)**: **O(n)** porque você pode ter que verificar cada item até encontrar o que precisa.
    
    **Exemplo:**
    
    ```javascript
    let posicao = inventario.indexOf('Poção'); // Retorna 1
    ```
    

---

### **Operações Avançadas com Arrays**

#### **1. Fatiar um Array (`slice`)**

- **Objetivo:** Extrair uma porção do array sem modificar o original.
- **Complexidade:** O(n) (depende do tamanho da fatia).

**Exemplo:**

```javascript
let armas = ['Espada', 'Poção', 'Arco', 'Escudo'];
let poções = armas.slice(1, 3); // ['Poção', 'Arco']
```

---

#### **2. Modificar diretamente (`splice`)**

- **Objetivo:** Inserir, remover ou substituir itens no meio do array.
- **Complexidade:** O(n), porque pode ser necessário deslocar elementos.

**Exemplo:**

```javascript
let inventario = ['Espada', 'Poção', 'Escudo'];
inventario.splice(1, 1, 'Arco'); // Substitui 'Poção' por 'Arco'
// Resultado: ['Espada', 'Arco', 'Escudo']
```

---

#### **3. Mapear (`map`)**

- **Objetivo:** Criar um novo array aplicando uma transformação a cada elemento.
- **Complexidade:** O(n) porque percorre todos os itens.

**Exemplo:**

```javascript
let itensBuffados = inventario.map(item => item + ' +1');
// ['Espada +1', 'Arco +1', 'Escudo +1']
```

---

#### **4. Filtrar (`filter`)**

- **Objetivo:** Criar um novo array com elementos que atendam a uma condição.
- **Complexidade:** O(n), pois percorre todos os itens.

**Exemplo:**

```javascript
let armasPesadas = inventario.filter(item => item.length > 5);
// ['Espada', 'Escudo']
```

---

#### **5. Reduzir (`reduce`)**

- **Objetivo:** Acumular os elementos de um array em um único valor.
- **Complexidade:** O(n), porque percorre todos os itens.

**Exemplo:**

```javascript
let lista = inventario.reduce((acc, item) => acc + ', ' + item);
console.log(lista); // 'Espada, Arco, Escudo'
```

---

### **Big O Resumido**

|Operação|Complexidade|
|---|---|
|Acesso por índice|O(1)|
|Inserir no final|O(1)|
|Inserir no início|O(n)|
|Remover do final|O(1)|
|Remover do início|O(n)|
|Buscar item|O(n)|

---

### **Perguntas Clássicas em Entrevistas**

1. **Ordenação em Arrays**
    
    - Para ordenar um array, você usa o método `.sort()`.
    - **Complexidade:** Depende do algoritmo subjacente, geralmente **O(n log n)**.
    
    ```javascript
    inventario.sort();
    ```
    
2. **Buscar o maior ou menor elemento**
    
    ```javascript
    let max = Math.max(...[1, 3, 5]); // 5
    let min = Math.min(...[1, 3, 5]); // 1
    ```
    
3. **Reverso de Array**
    
    ```javascript
    inventario.reverse();
    ```
    
4. **Como Arrays Diferem de Objetos?**
    
    - Arrays são indexados numericamente e ordenados.
    - Objetos são coleções de pares chave-valor não ordenados.

---

Espero que agora tenha ficado claro! Se precisar de exemplos mais específicos ou outros detalhes, só avisar. 🎮