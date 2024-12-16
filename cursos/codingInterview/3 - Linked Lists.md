### **Linked Lists: A Jornada da Caravana Encadeada**

Bem-vindo, aventureiro! Hoje você irá explorar as **Linked Lists**, uma estrutura de dados flexível e poderosa que muitas vezes é esquecida no RPG do desenvolvimento. No entanto, dominar esta estrutura pode ser a chave para resolver desafios na entrevista de trabalho.

Vamos entender o que são, como funcionam, suas operações e resolver um **problema prático** que poderia ser apresentado em uma entrevista.

---

## **O Que São Linked Lists?**

Imagine que você lidera uma **caravana de aventureiros** em uma longa jornada. Cada aventureiro segura um **mapa** que aponta para o próximo membro da caravana.

- Cada aventureiro (ou **nó**) contém:
    - Um **valor** (os dados).
    - Um **ponteiro** para o próximo aventureiro (referência ao próximo nó).

Ao contrário dos arrays (que são como uma taverna onde os membros são colocados lado a lado em memória contígua), em uma **Linked List** os elementos são espalhados e apenas conectados através de **ponteiros**.

---

## **Tipos de Linked Lists**

1. **Singly Linked List** (Lista Encadeada Simples):  
    Cada nó possui apenas **um ponteiro** para o próximo nó. O último nó aponta para `null`.
    
2. **Doubly Linked List** (Lista Duplamente Encadeada):  
    Cada nó tem **dois ponteiros**: um para o próximo nó e outro para o nó anterior.
    
3. **Circular Linked List**:  
    O último nó aponta de volta para o primeiro, formando um ciclo.
    

---

## **Linked List vs Array**

|Característica|Linked List|Array|
|---|---|---|
|Acesso por índice|O(n) (lento, pois precisa percorrer)|O(1) (rápido)|
|Inserção/Remoção no início|O(1) (basta ajustar ponteiros)|O(n) (desloca elementos)|
|Inserção/Remoção no final|O(n) (precisa percorrer a lista)|O(1)|
|Tamanho|Dinâmico (não precisa alocar espaço fixo)|Estático/Dinâmico|

---

## **Estrutura de um Nó**

```javascript
class Node {
  constructor(valor) {
    this.valor = valor; // Dados do nó
    this.proximo = null; // Ponteiro para o próximo nó
  }
}
```

---

## **Implementação de uma Singly Linked List**

Vamos construir nossa caravana (Linked List) do zero.

### **Código Básico**

```javascript
class LinkedList {
  constructor() {
    this.head = null; // O primeiro nó da lista
    this.size = 0;    // Tamanho da lista
  }

  // Adicionar um nó ao final (O(n))
  append(valor) {
    const novoNo = new Node(valor);
    if (!this.head) {
      this.head = novoNo; // Primeiro nó
    } else {
      let atual = this.head;
      while (atual.proximo) { // Percorre até o último nó
        atual = atual.proximo;
      }
      atual.proximo = novoNo; // Aponta para o novo nó
    }
    this.size++;
  }

  // Adicionar um nó no início (O(1))
  prepend(valor) {
    const novoNo = new Node(valor);
    novoNo.proximo = this.head; // Aponta para o antigo head
    this.head = novoNo;         // Atualiza o head
    this.size++;
  }

  // Remover um nó com base no valor (O(n))
  remove(valor) {
    if (!this.head) return null;

    if (this.head.valor === valor) {
      this.head = this.head.proximo; // Remove o head
      this.size--;
      return;
    }

    let atual = this.head;
    let anterior = null;

    while (atual && atual.valor !== valor) {
      anterior = atual;
      atual = atual.proximo;
    }

    if (atual) {
      anterior.proximo = atual.proximo; // Remove o nó
      this.size--;
    }
  }

  // Imprimir os valores da lista
  print() {
    let atual = this.head;
    let resultado = '';
    while (atual) {
      resultado += atual.valor + ' -> ';
      atual = atual.proximo;
    }
    console.log(resultado + 'null');
  }
}

// Teste da Linked List
const caravana = new LinkedList();
caravana.append('Guerreiro');
caravana.append('Mago');
caravana.prepend('Arqueiro');
caravana.print(); // Arqueiro -> Guerreiro -> Mago -> null
caravana.remove('Guerreiro');
caravana.print(); // Arqueiro -> Mago -> null
```

---

## **Big O das Operações**

|Operação|Complexidade|
|---|---|
|Inserir no início|O(1)|
|Inserir no final|O(n)|
|Remover do início|O(1)|
|Remover no meio/final|O(n)|
|Buscar um elemento|O(n)|

---

## **Problema Realista de Entrevista**

**Problema:** Você precisa implementar uma **função que detecta se uma Linked List é circular**, ou seja, se algum nó aponta para um nó anterior, formando um ciclo.

---

### **Solução com o Algoritmo de Tartaruga e Lebre (Floyd's Cycle Detection)**

**Ideia:**  
Use dois ponteiros:

1. **Ponteiro lento (tartaruga):** Move uma posição por vez.
2. **Ponteiro rápido (lebre):** Move duas posições por vez.

Se a lista for circular, os dois ponteiros eventualmente se encontrarão.

---

**Código:**

```javascript
function detectarCiclo(head) {
  let lento = head;
  let rapido = head;

  while (rapido && rapido.proximo) {
    lento = lento.proximo;           // Move 1 passo
    rapido = rapido.proximo.proximo; // Move 2 passos

    if (lento === rapido) {
      return true; // Há um ciclo
    }
  }
  return false; // Não há ciclo
}

// Teste da função
const lista = new LinkedList();
lista.append(1);
lista.append(2);
lista.append(3);

// Criando um ciclo manualmente
lista.head.proximo.proximo.proximo = lista.head.proximo; // Nó 3 aponta de volta para o nó 2

console.log(detectarCiclo(lista.head)); // true
```

---

### **Explicação do Algoritmo**

1. **Complexidade de Tempo:** O(n), porque os ponteiros percorrem a lista uma única vez.
2. **Complexidade de Espaço:** O(1), pois não usamos memória extra além dos ponteiros.

---

## **Conclusão**

As **Linked Lists** são estruturas de dados extremamente versáteis, ideais para situações onde a inserção e remoção frequente no início são necessárias.

**Destaques para a Entrevista:**

1. Explique a diferença entre Linked List e Array.
2. Fale sobre o trade-off entre flexibilidade (Linked List) e acesso direto (Array).
3. Demonstre soluções com algoritmos clássicos, como **detecção de ciclos**.

Você está pronto para enfrentar qualquer desafio envolvendo **Linked Lists** e impressionar o **Recrutador Dragão** com sua habilidade de resolver problemas complexos! 🐉🚀