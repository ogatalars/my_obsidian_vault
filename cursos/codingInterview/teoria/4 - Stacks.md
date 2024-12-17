### **A Jornada das Pilhas Encantadas (Stacks)** 🗡️📜

Bem-vindo à **Torre das Pilhas**, aventureiro! As **Stacks** (Pilhas) são uma estrutura de dados poderosa que você encontrará em muitas jornadas do desenvolvimento, desde controlar o "histórico de feitiços lançados" até resolver problemas complexos como reversão de strings ou validação de parênteses.

Pegue seu **Livro de Feitiços (Stack)** e prepare-se para dominar os mistérios dessa estrutura no formato RPG!

---

## **O que é uma Stack (Pilha)?**

Imagine uma **pilha de livros** mágicos. Se você colocar um livro no topo, ele será o **último** a ser retirado. A regra das Stacks é simples:

- **LIFO (Last In, First Out):** O **último** item que entrou é o **primeiro** a sair.

No mundo das estruturas de dados:

- A **Stack** é como uma mochila de pergaminhos onde você só consegue acessar o **topo**.
- Você pode **empilhar (push)** e **desempilhar (pop)** itens, mas não pode acessar diretamente os itens do meio.

---

## **Termos Importantes na Stack**

1. **Push:** Adicionar um item ao topo da pilha.
2. **Pop:** Remover o item do topo da pilha.
3. **Peek/Top:** Visualizar o item no topo sem removê-lo.
4. **Empty:** Verificar se a pilha está vazia.

---

## **Aplicações Reais (ou Missões para a Stack)**

1. **Histórico de Feitiços**:
    
    - Um mago guarda os feitiços lançados em uma pilha. Quando desfaz um feitiço, ele remove o último feitiço lançado.
2. **Reversão de Strings**:
    
    - Inverter uma palavra ou frase.
3. **Validação de Parênteses**:
    
    - Verificar se uma expressão tem parênteses corretamente balanceados, como `((a + b) * c)`.
4. **Navegadores (Back/Forward)**:
    
    - O histórico de páginas navegadas é uma stack.
5. **Chamadas Recursivas**:
    
    - A pilha de chamadas em linguagens de programação é uma implementação real de stacks.

---

## **Implementação Básica de uma Stack em JavaScript**

Vamos construir uma Stack personalizada para guardar **pergaminhos mágicos**.

```javascript
class Stack {
  constructor() {
    this.items = []; // Array interno para armazenar os elementos
  }

  // Adicionar ao topo da pilha (Push)
  push(item) {
    this.items.push(item);
  }

  // Remover o item do topo da pilha (Pop)
  pop() {
    if (this.isEmpty()) return "A pilha está vazia!";
    return this.items.pop();
  }

  // Visualizar o item do topo (Peek)
  peek() {
    if (this.isEmpty()) return "A pilha está vazia!";
    return this.items[this.items.length - 1];
  }

  // Verificar se a pilha está vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Tamanho da pilha
  size() {
    return this.items.length;
  }

  // Imprimir a pilha
  print() {
    console.log(this.items.join(' -> '));
  }
}

// Teste da Stack
const feitiços = new Stack();
feitiços.push("Bola de Fogo");
feitiços.push("Cura");
feitiços.push("Escudo Mágico");

console.log("Topo:", feitiços.peek()); // 'Escudo Mágico'
feitiços.pop(); // Remove 'Escudo Mágico'
feitiços.print(); // 'Bola de Fogo -> Cura'
```

---

## **Big O da Stack**

|Operação|Complexidade|
|---|---|
|Push|O(1)|
|Pop|O(1)|
|Peek|O(1)|
|Buscar|O(n)|

- **Push/Pop/Peek:** O(1) porque acessam apenas o topo da pilha.
- **Buscar:** **O(n)** pois precisa percorrer todos os elementos.

---

## **Problema de Entrevista: Validação de Parênteses Balanceados**

**Problema:**  
Dada uma string que contém parênteses `()`, colchetes `[]` e chaves `{}`, verifique se eles estão **balanceados**.

- Exemplo 1: `"({[]})"` → **Válido**
- Exemplo 2: `"([)]"` → **Inválido**

**Como Resolver?**  
Usamos uma **Stack**:

1. Ao encontrar um **abre** parênteses (`(`, `[`, `{`), empilhamos.
2. Ao encontrar um **fecha** parênteses (`)`, `]`, `}`), verificamos:
    - Se a Stack está vazia → inválido.
    - Se o topo da Stack corresponde ao parênteses atual → desempilha.
3. Se no final a Stack estiver vazia, os parênteses estão balanceados.

---

### **Código da Solução**

```javascript
function validarParenteses(expressao) {
  const stack = new Stack();
  const mapeamento = { ')': '(', ']': '[', '}': '{' };

  for (let char of expressao) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char); // Empilha parênteses de abertura
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.isEmpty() || stack.peek() !== mapeamento[char]) {
        return false; // Não corresponde ou a pilha está vazia
      }
      stack.pop(); // Desempilha se corresponder
    }
  }

  return stack.isEmpty(); // Se a pilha estiver vazia, é válido
}

// Teste da função
console.log(validarParenteses("({[]})")); // true
console.log(validarParenteses("([)]"));   // false
console.log(validarParenteses("((())"));  // false
```

---

### **Explicação do Algoritmo**

1. Usamos uma **Stack** para guardar parênteses de abertura.
2. Ao encontrar um parênteses de fechamento, verificamos se ele corresponde ao topo da pilha.
3. Se não houver correspondência ou a pilha estiver vazia, a expressão é inválida.
4. Ao final, a pilha deve estar vazia para ser válida.

**Complexidade:**

- **Tempo:** O(n), onde `n` é o número de caracteres na string.
- **Espaço:** O(n), no pior caso (todos os parênteses são de abertura).

---

## **Resumo do Mestre das Stacks**

1. **Conceito:** Stacks seguem a regra **LIFO**.
2. **Aplicações Práticas:** Reversão de strings, navegação (back/forward), histórico de chamadas, validação de expressões.
3. **Big O:** Push, Pop e Peek são **O(1)**.
4. **Problemas de Entrevista:** Validação de parênteses, reversão de strings, implementação de undo/redo.

Com isso, você agora possui a **Espada das Stacks**, pronta para resolver problemas com eficiência e impressionar o **Recrutador Dragão**. Boa sorte, aventureiro! 🚀🗡️