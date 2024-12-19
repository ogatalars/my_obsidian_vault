Vamos resolver o problema **Tree: Height of a Binary Tree** no formato **RPG**, garantindo que o conceito e a implementação fiquem claros!

---

## **Missão: Calcular a Altura de uma Árvore Binária**

**Contexto:**  
Você é o guardião da Árvore dos Saberes e precisa determinar sua **altura**. A altura de uma árvore é o número de arestas entre a raiz e a folha mais distante.

### **Definições Importantes**

1. **Árvore Binária de Busca (BST):**
    
    - Todos os valores na subárvore esquerda de um nó são menores que o valor do nó.
    - Todos os valores na subárvore direita de um nó são maiores que o valor do nó.
2. **Altura da Árvore:**
    
    - Número máximo de arestas entre a raiz e a folha mais distante.
    - Se a árvore tiver apenas **um único nó**, a altura é **0**.

---

### **Entrada e Saída**

1. **Entrada:**
    
    - Número de nós `n` (tamanho da árvore).
    - Valores dos nós, fornecidos em ordem de inserção em uma **BST**.
2. **Saída:**
    
    - A altura da árvore como um inteiro.

---

## **Implementação**

Vamos construir a árvore e calcular sua altura.

### **Passo 1: Classe de Nó e Árvore Binária**

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, data):
        if not self.root:
            self.root = Node(data)
        else:
            self._insert_recursively(self.root, data)

    def _insert_recursively(self, current, data):
        if data < current.data:
            if current.left:
                self._insert_recursively(current.left, data)
            else:
                current.left = Node(data)
        else:
            if current.right:
                self._insert_recursively(current.right, data)
            else:
                current.right = Node(data)
```

---

### **Passo 2: Função para Calcular a Altura**

A altura é calculada de forma **recursiva**:

1. Se o nó é `None`, a altura é `-1`.
2. Caso contrário, a altura é `1 + max(altura_esquerda, altura_direita)`.

```python
def height(node):
    if node is None:
        return -1  # Altura de uma árvore vazia
    left_height = height(node.left)
    right_height = height(node.right)
    return 1 + max(left_height, right_height)
```

---

### **Passo 3: Lógica Principal e Teste**

```python
if __name__ == "__main__":
    tree = BinarySearchTree()
    n = int(input("Digite o número de nós: "))  # Número de nós
    values = list(map(int, input("Digite os valores dos nós: ").split()))  # Valores dos nós

    for value in values:
        tree.insert(value)

    print("Altura da árvore:", height(tree.root))
```

---

### **Exemplo de Entrada e Saída**

#### Entrada:

```
Digite o número de nós: 7
Digite os valores dos nós: 3 5 2 1 4 6 7
```

#### Árvore Construída:

```
        3
       / \
      2   5
     /   / \
    1   4   6
               \
                7
```

#### Saída:

```
Altura da árvore: 3
```

---

## **Complexidade**

1. **Tempo:**
    
    - Construção da árvore: O(n log n) no caso médio (n inserções em uma BST balanceada).
    - Cálculo da altura: O(n), onde `n` é o número de nós.
2. **Espaço:**
    
    - Depende da profundidade máxima da árvore. No pior caso, o espaço é O(h), onde `h` é a altura da árvore (recursão).

---

Com isso, você concluiu a missão de calcular a altura da Árvore dos Saberes! 🌳

Agora vamos para a próxima missão: **Level Order Traversal**. 🧗‍♂️

### **Missão: Percorrer a Árvore por Nível (Tree: Level Order Traversal)** 🌳🎯

---

## **Objetivo:**

Você, o guardião da Árvore dos Saberes, deve percorrer os nós **nível por nível**, ou seja:

1. Começando pela **raiz**.
2. Visitando todos os nós de cada nível antes de passar para o próximo.

Este tipo de travessia é chamado de **Level Order Traversal** e é realizado usando uma **fila** (queue).

---

## **Definições Importantes**

1. **Travessia por Nível:**
    
    - Usa uma **fila** para manter a ordem dos nós a serem visitados.
    - Remove o nó da frente da fila, processa seu valor e adiciona os filhos à fila.
2. **Entrada e Saída:**
    
    - **Entrada:** Uma árvore binária.
    - **Saída:** Uma lista com os valores dos nós em **ordem de nível**.

---

## **Implementação**

### **Passo 1: Classe da Árvore Binária**

Já usamos anteriormente a classe `Node` e `BinarySearchTree` para criar e inserir valores na árvore. Vamos utilizá-las aqui também.

---

### **Passo 2: Função de Travessia por Nível**

Usamos uma fila para processar os nós nível por nível:

- **Enfileirar** a raiz.
- Enquanto a fila não estiver vazia:
    - Remova o nó da frente.
    - Adicione o valor do nó à lista de resultado.
    - **Enfileire os filhos** do nó atual (se existirem).

```python
from collections import deque

def level_order_traversal(root):
    if root is None:
        return []

    resultado = []
    fila = deque([root])  # Fila inicializada com a raiz

    while fila:
        atual = fila.popleft()  # Remove o nó da frente da fila
        resultado.append(atual.data)

        if atual.left:
            fila.append(atual.left)  # Enfileira o filho à esquerda
        if atual.right:
            fila.append(atual.right)  # Enfileira o filho à direita

    return resultado
```

---

### **Passo 3: Lógica Principal e Teste**

```python
if __name__ == "__main__":
    tree = BinarySearchTree()
    n = int(input("Digite o número de nós: "))  # Número de nós
    values = list(map(int, input("Digite os valores dos nós: ").split()))  # Valores dos nós

    for value in values:
        tree.insert(value)

    resultado = level_order_traversal(tree.root)
    print("Travessia por nível:", resultado)
```

---

### **Exemplo de Entrada e Saída**

#### Entrada:

```
Digite o número de nós: 7
Digite os valores dos nós: 3 5 2 1 4 6 7
```

#### Árvore Construída:

```
        3
       / \
      2   5
     /   / \
    1   4   6
               \
                7
```

#### Saída:

```
Travessia por nível: [3, 2, 5, 1, 4, 6, 7]
```

---

## **Complexidade**

1. **Tempo:**
    
    - O(n), onde `n` é o número de nós.
    - Cada nó é visitado exatamente uma vez.
2. **Espaço:**
    
    - O(n), para armazenar os nós na fila durante a travessia.

---

### **Missão Concluída!** 🌟

Você aprendeu como percorrer uma árvore nível por nível e organizar os valores em ordem de visita. Agora, vamos para a próxima missão: **Swap Nodes [Algo]**! 🛠️

### **Missão: Swap Nodes [Algo] - Trocar Nós em uma Árvore** 🌳⚔️

---

## **Objetivo**

Dado uma árvore binária e uma sequência de **níveis**, sua missão é trocar os subárvores (esquerda e direita) de todos os nós presentes nos níveis especificados. A troca deve ser feita **simultaneamente** para todos os nós em um nível antes de passar para o próximo nível.

Após cada operação de troca, você deve realizar e imprimir a **travessia in-order** da árvore.

---

## **Definições Importantes**

1. **Troca de Nós:**
    
    - Em um nó, a subárvore à esquerda é trocada pela subárvore à direita.
2. **Entrada:**
    
    - A árvore binária é fornecida como uma lista com conexões de nós (pares indicando os filhos esquerdo e direito de cada nó).
    - Uma lista de níveis para troca.
3. **Saída:**
    
    - A **travessia in-order** após cada troca.

---

## **Abordagem**

1. **Construir a Árvore Binária:**
    
    - Usar os pares fornecidos para montar a estrutura da árvore.
2. **Troca de Nós em Níveis Específicos:**
    
    - Realizar a troca em todos os nós que estão em níveis múltiplos do valor especificado.
3. **Travessia In-Order:**
    
    - Após cada troca, realizar uma travessia in-order para capturar os valores na nova ordem.

---

### **Passo 1: Classe de Nó e Árvore Binária**

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def build_tree(self, connections):
        """
        Constrói a árvore binária a partir das conexões fornecidas.
        connections é uma lista de pares [(esquerda, direita)].
        """
        from collections import deque
        self.root = Node(1)  # Raiz é sempre 1
        queue = deque([self.root])

        for esquerda, direita in connections:
            current = queue.popleft()
            if esquerda != -1:
                current.left = Node(esquerda)
                queue.append(current.left)
            if direita != -1:
                current.right = Node(direita)
                queue.append(current.right)
```

---

### **Passo 2: Função de Troca**

```python
def swap_nodes(root, k):
    """
    Realiza a troca de nós a cada múltiplo do nível k.
    """
    def dfs(node, level):
        if node is None:
            return
        # Realiza a troca se o nível for múltiplo de k
        if level % k == 0:
            node.left, node.right = node.right, node.left
        dfs(node.left, level + 1)
        dfs(node.right, level + 1)

    dfs(root, 1)  # Começa do nível 1
```

---

### **Passo 3: Função de Travessia In-Order**

```python
def in_order_traversal(root):
    """
    Retorna a travessia in-order da árvore.
    """
    if root is None:
        return []
    return in_order_traversal(root.left) + [root.data] + in_order_traversal(root.right)
```

---

### **Passo 4: Lógica Principal**

```python
if __name__ == "__main__":
    n = int(input("Digite o número de nós: "))  # Número de nós
    connections = [tuple(map(int, input().split())) for _ in range(n)]  # Conexões dos nós

    tree = BinaryTree()
    tree.build_tree(connections)

    t = int(input("Digite o número de níveis para troca: "))  # Número de operações de troca
    niveis = [int(input()) for _ in range(t)]  # Lista de níveis para troca

    for k in niveis:
        swap_nodes(tree.root, k)  # Realiza a troca
        print("Travessia in-order após troca no nível", k, ":", in_order_traversal(tree.root))
```

---

## **Exemplo de Entrada e Saída**

#### Entrada:

```
Digite o número de nós: 3
2 3
-1 -1
-1 -1
Digite o número de níveis para troca: 1
1
```

#### Árvore Construída:

```
        1
       / \
      2   3
```

#### Operação:

1. Trocar os nós no nível múltiplo de 1:
    - Troca os filhos de `1`: `2` ↔ `3`.

#### Saída:

```
Travessia in-order após troca no nível 1: [3, 1, 2]
```

---

## **Complexidade**

1. **Tempo:**
    
    - Construção da árvore: O(n), onde `n` é o número de nós.
    - Troca de nós: O(n), cada nó é visitado uma vez.
    - Travessia in-order: O(n), percorre todos os nós.
    - **Total:** O(n * t), onde `t` é o número de níveis para troca.
2. **Espaço:**
    
    - Depende da profundidade da árvore. O(h), onde `h` é a altura da árvore (recursão).

---



### **1. Tree: Height of a Binary Tree**(JS)

---

#### **Descrição**

A altura de uma árvore binária é o número de arestas entre a raiz e a folha mais distante.

---

### **Passo 1: Classe de Nó e Árvore Binária**

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertRecursively(this.root, newNode);
    }
  }

  _insertRecursively(current, newNode) {
    if (newNode.data < current.data) {
      if (!current.left) {
        current.left = newNode;
      } else {
        this._insertRecursively(current.left, newNode);
      }
    } else {
      if (!current.right) {
        current.right = newNode;
      } else {
        this._insertRecursively(current.right, newNode);
      }
    }
  }
}
```

---

### **Passo 2: Função para Calcular a Altura**

```javascript
function height(node) {
  if (!node) return -1; // Árvore vazia ou sem filhos
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);
  return 1 + Math.max(leftHeight, rightHeight);
}
```

---

### **Passo 3: Lógica Principal**

```javascript
const tree = new BinarySearchTree();
const values = [3, 5, 2, 1, 4, 6, 7]; // Valores de exemplo
values.forEach(value => tree.insert(value));

console.log("Altura da árvore:", height(tree.root)); // Saída: 3
```

---

### **2. Tree: Level Order Traversal**

---

#### **Descrição**

Percorra a árvore nível por nível (da raiz até o nível mais profundo).

---

### **Passo 1: Função de Travessia por Nível**

Usaremos uma **fila** para manter a ordem dos nós visitados:

```javascript
function levelOrderTraversal(root) {
  if (!root) return []; // Árvore vazia

  const result = [];
  const queue = [root]; // Inicia com a raiz

  while (queue.length > 0) {
    const current = queue.shift(); // Remove o nó da frente da fila
    result.push(current.data);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return result;
}
```

---

### **Passo 2: Lógica Principal**

```javascript
console.log("Travessia por nível:", levelOrderTraversal(tree.root)); // Saída: [3, 2, 5, 1, 4, 6, 7]
```

---

### **3. Swap Nodes [Algo]**

---

#### **Descrição**

Troque os subárvores (esquerda e direita) de todos os nós em níveis múltiplos de um valor `k`.

---

### **Passo 1: Função de Troca**

Trocar os filhos de um nó em níveis múltiplos de `k`:

```javascript
function swapNodes(root, k) {
  function dfs(node, level) {
    if (!node) return;

    if (level % k === 0) {
      // Realiza a troca
      [node.left, node.right] = [node.right, node.left];
    }

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root, 1); // Começa do nível 1
}
```

---

### **Passo 2: Lógica Principal**

```javascript
const levels = [1]; // Níveis para troca
levels.forEach(k => {
  swapNodes(tree.root, k);
  console.log(
    `Travessia in-order após troca no nível ${k}:`,
    levelOrderTraversal(tree.root)
  );
});
```

---

### **Resumo do Resultado**

#### Entrada:

```javascript
const values = [3, 5, 2, 1, 4, 6, 7]; // Nó inseridos em uma BST
const levels = [1]; // Trocar em níveis múltiplos de 1
```

#### Árvore Inicial:

```
        3
       / \
      2   5
     /   / \
    1   4   6
               \
                7
```

#### Saída:

```
Altura da árvore: 3
Travessia por nível: [3, 2, 5, 1, 4, 6, 7]
Travessia in-order após troca no nível 1: [7, 6, 5, 4, 3, 2, 1]
```

---

## **Complexidade das Soluções**

1. **Altura da Árvore:**
    
    - **Tempo:** O(n), pois cada nó é visitado uma vez.
    - **Espaço:** O(h), onde `h` é a altura da árvore (profundidade da recursão).
2. **Travessia por Nível:**
    
    - **Tempo:** O(n), cada nó é visitado uma vez.
    - **Espaço:** O(n), espaço usado pela fila.
3. **Troca de Nós:**
    
    - **Tempo:** O(n) para visitar cada nó.
    - **Espaço:** O(h) para recursão.

---

### **Missão Concluída!**

Agora você possui todas as soluções em **JavaScript** para esses problemas clássicos envolvendo árvores binárias. Isso irá te preparar para impressionar o **Recrutador Dragão** e encarar desafios técnicos com confiança! 🌟🐉


### **Missão: Determinar a Altura de uma Árvore Binária (Tree: Height of a Binary Tree)** 🌳🧝‍♂️

---

### **O Enigma da Altura**

Você, o guardião da Árvore dos Saberes, recebeu a missão de determinar a **altura** dessa árvore mística. A altura revela o número de arestas entre a **raiz** (o nó inicial) e a folha mais distante.

A altura da árvore ajuda a entender sua profundidade e eficiência em armazenar e buscar informações. Uma árvore "desbalanceada" (muito alta) pode ser ineficiente, então medir a altura é uma habilidade essencial.

---

### **O Que é Altura de uma Árvore?**

- Se a árvore está **vazia**, sua altura é **-1**.
- Se a árvore tem apenas um nó (a raiz), sua altura é **0**.
- Caso contrário, a altura da árvore é **1 + a maior altura das suas subárvores (esquerda ou direita)**.

#### **Exemplo:**

Para a árvore abaixo:

```
        3
       / \
      2   5
     /   / \
    1   4   6
               \
                7
```

- A altura é `3`, pois há 3 arestas entre a raiz (`3`) e a folha mais distante (`7`).

---

### **A Jornada Passo a Passo**

#### **1. Montar a Árvore Binária**

Antes de medir a altura, precisamos construir a **Árvore Binária de Busca (BST)**. Cada nó segue estas regras:

- **Menores valores vão para a esquerda.**
- **Maiores valores vão para a direita.**

#### Código para Construir a Árvore:

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.left = null; // Filho esquerdo
    this.right = null; // Filho direito
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // Raiz da árvore
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      // Se a árvore está vazia, o novo nó vira a raiz
      this.root = newNode;
    } else {
      // Caso contrário, insira recursivamente
      this._insertRecursively(this.root, newNode);
    }
  }

  _insertRecursively(current, newNode) {
    if (newNode.data < current.data) {
      // Vai para a esquerda
      if (!current.left) {
        current.left = newNode;
      } else {
        this._insertRecursively(current.left, newNode);
      }
    } else {
      // Vai para a direita
      if (!current.right) {
        current.right = newNode;
      } else {
        this._insertRecursively(current.right, newNode);
      }
    }
  }
}
```

---

#### **2. Determinar a Altura da Árvore**

Agora precisamos calcular a altura da árvore com a **Magia Recursiva**. Vamos explorar cada ramo até suas folhas e descobrir qual é o mais profundo.

**Regra da Recursão:**

1. Se o nó é `null`, retorne **-1** (altura de uma árvore vazia).
2. Caso contrário, calcule:
    - A altura da subárvore esquerda.
    - A altura da subárvore direita.
3. Retorne `1 + o maior valor` entre as alturas calculadas.

#### Código:

```javascript
function height(node) {
  if (!node) return -1; // Se o nó é vazio, a altura é -1

  const leftHeight = height(node.left); // Altura da subárvore esquerda
  const rightHeight = height(node.right); // Altura da subárvore direita

  return 1 + Math.max(leftHeight, rightHeight); // Retorne o maior caminho mais 1
}
```

---

#### **3. Testando Sua Jornada**

Vamos colocar os nós na árvore e calcular sua altura.

#### Código Principal:

```javascript
const tree = new BinarySearchTree();
const values = [3, 5, 2, 1, 4, 6, 7]; // Valores para inserir na árvore

// Insere os valores na árvore
values.forEach(value => tree.insert(value));

// Calcula a altura da árvore
console.log("Altura da árvore:", height(tree.root)); // Saída: 3
```

#### Árvore Construída:

```
        3
       / \
      2   5
     /   / \
    1   4   6
               \
                7
```

---

### **O Caminho do Algoritmo**

1. **Altura da Subárvore Esquerda:**
    
    - Do nó `3`, desça para `2`, depois `1`.
    - A altura é `2`.
2. **Altura da Subárvore Direita:**
    
    - Do nó `3`, desça para `5`, depois `6` e `7`.
    - A altura é `3`.
3. **Altura Total da Árvore:**
    
    - A maior altura é `3`.

---

### **Complexidade da Missão**

1. **Tempo:**
    
    - O(n), onde `n` é o número de nós na árvore. Cada nó é visitado exatamente uma vez.
2. **Espaço:**
    
    - O(h), onde `h` é a altura da árvore (profundidade da pilha de recursão).

---

### **Saída Esperada**

```
Altura da árvore: 3
```

---

### **Explicação Clara**

- A função recursiva desce até o nível mais profundo da árvore.
- No caminho de volta, ela calcula a maior profundidade para cada nó pai.
- Assim, a raiz (nó inicial) conhece a altura total da árvore.

---

### **Conclusão**

Parabéns, Guardião! Agora você domina a habilidade de medir a altura de uma árvore binária. Essa magia é essencial para otimizar e balancear árvores, garantindo eficiência em futuras missões. Vamos continuar para a próxima jornada: **Level Order Traversal**! 🌟