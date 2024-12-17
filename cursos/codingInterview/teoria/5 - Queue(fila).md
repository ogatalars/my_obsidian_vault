### **A Jornada da Fila Encantada (Queues)** 🎮🛡️

Bem-vindo, aventureiro, à **Guilda das Queues**! Hoje você dominará a estrutura **Queue** (Fila), uma ferramenta essencial no seu arsenal de desenvolvedor.

No reino das **Estruturas de Dados**, as Queues representam uma **fila de aventureiros** esperando pacientemente sua vez de realizar uma ação. Vamos entender como funcionam, suas aplicações, e resolver um **problema clássico de entrevista** para que você esteja pronto para enfrentar qualquer desafio.

---

## **O Que é uma Queue (Fila)?**

Imagine uma **fila de aventureiros** esperando para entrar em uma taverna. A regra da fila é simples:

- **FIFO (First In, First Out):** O **primeiro** aventureiro a entrar é o **primeiro** a sair.
    - A entrada ocorre no **final** da fila.
    - A saída ocorre no **início** da fila.

---

## **Termos Importantes**

1. **Enqueue (Inserir):** Adicionar um elemento ao final da fila.
2. **Dequeue (Remover):** Remover o elemento do início da fila.
3. **Peek/Front:** Visualizar o elemento na frente da fila sem removê-lo.
4. **Empty:** Verificar se a fila está vazia.

---

## **Tipos de Queues**

1. **Fila Simples:**
    
    - Operações de inserção ocorrem no final e remoção no início.
2. **Fila Circular:**
    
    - Os elementos "girando" em um círculo. Quando o final da fila é atingido, ele recomeça do início.
3. **Fila Prioritária:**
    
    - Cada elemento possui uma **prioridade**, e os elementos mais importantes saem primeiro.
4. **Deque (Double-Ended Queue):**
    
    - A inserção e remoção podem acontecer tanto no início quanto no final.

---

## **Queue vs Stack**

|Estrutura|Regra|Exemplo de Uso|
|---|---|---|
|**Stack**|LIFO|Histórico de Feitiços|
|**Queue**|FIFO|Filas de Processos|

---

## **Implementação de uma Queue Básica em JavaScript**

Vamos criar uma **Fila** que gerencia **aventuras na taverna**.

### **Código da Queue**

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // Inserir um elemento no final (Enqueue)
  enqueue(item) {
    this.items.push(item);
  }

  // Remover um elemento do início (Dequeue)
  dequeue() {
    if (this.isEmpty()) return "A fila está vazia!";
    return this.items.shift();
  }

  // Visualizar o elemento da frente (Peek)
  peek() {
    if (this.isEmpty()) return "A fila está vazia!";
    return this.items[0];
  }

  // Verificar se a fila está vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Tamanho da fila
  size() {
    return this.items.length;
  }

  // Imprimir a fila
  print() {
    console.log(this.items.join(" <- "));
  }
}

// Teste da Queue
const fila = new Queue();
fila.enqueue("Guerreiro");
fila.enqueue("Mago");
fila.enqueue("Arqueiro");

console.log("Frente da fila:", fila.peek()); // 'Guerreiro'
fila.print(); // Guerreiro <- Mago <- Arqueiro

fila.dequeue(); // Remove 'Guerreiro'
fila.print(); // Mago <- Arqueiro
```

---

## **Big O das Operações**

|Operação|Complexidade|
|---|---|
|Enqueue|O(1)|
|Dequeue|O(n)|
|Peek|O(1)|

- **Enqueue (inserção):** O(1), pois adiciona ao final da fila.
- **Dequeue (remoção):** **O(n)** em arrays tradicionais, pois os elementos precisam ser deslocados após a remoção.

---

## **Aplicações de Queues**

1. **Filas de Processos:**
    
    - Gerenciamento de tarefas no sistema operacional (agendamento de CPU).
2. **Filas de Impressão:**
    
    - Os documentos são impressos na ordem em que foram enviados.
3. **BFS (Busca em Largura) em Grafos:**
    
    - Algoritmos que exploram grafos usam filas para visitar os nós.
4. **Gerenciamento de Eventos em Sistemas:**
    
    - Mensagens ou eventos são processados em ordem.

---

## **Problema de Entrevista: Implementar um Sistema de Atendimento**

**Problema:**  
Você precisa criar um sistema que simule o atendimento em uma taverna. Os aventureiros entram na fila conforme chegam. A cada chamada, o próximo aventureiro da fila é atendido.

**Entrada:**

- Uma lista de comandos, como `['adicionar Guerreiro', 'adicionar Mago', 'atender', 'adicionar Arqueiro', 'atender']`.

**Saída:**

- Exibir quem foi atendido e o estado atual da fila.

---

### **Solução**

```javascript
class Atendimento {
  constructor() {
    this.fila = new Queue();
  }

  executarComandos(comandos) {
    for (let comando of comandos) {
      if (comando.startsWith("adicionar")) {
        let nome = comando.split(" ")[1];
        this.fila.enqueue(nome);
        console.log(`${nome} entrou na fila.`);
      } else if (comando === "atender") {
        let atendido = this.fila.dequeue();
        console.log(atendido ? `${atendido} foi atendido.` : "A fila está vazia!");
      }
    }
    console.log("Estado final da fila:");
    this.fila.print();
  }
}

// Teste do sistema de atendimento
const sistema = new Atendimento();
const comandos = [
  "adicionar Guerreiro",
  "adicionar Mago",
  "atender",
  "adicionar Arqueiro",
  "atender",
  "atender",
  "atender"
];
sistema.executarComandos(comandos);
```

---

### **Explicação do Algoritmo**

1. **Fila é usada para manter a ordem dos aventureiros.**
2. A cada comando:
    - **`adicionar`** → Insere o aventureiro na fila com `enqueue`.
    - **`atender`** → Remove o aventureiro da frente da fila com `dequeue`.
3. O programa mantém a fila atualizada e exibe quem foi atendido.

**Exemplo de Saída:**

```
Guerreiro entrou na fila.
Mago entrou na fila.
Guerreiro foi atendido.
Arqueiro entrou na fila.
Mago foi atendido.
Arqueiro foi atendido.
A fila está vazia!
Estado final da fila:
```

---

## **Conclusão: O Poder das Queues**

- **Regras de Funcionamento:** FIFO (First In, First Out).
- **Operações Principais:** Enqueue (O(1)) e Dequeue (O(n)).
- **Aplicações Práticas:** Sistemas de atendimento, BFS, filas de eventos, gerenciamento de processos.

Com essa compreensão sólida, você agora possui a **Chave da Ordem (Queue)** para organizar tarefas em qualquer desafio técnico. O **Recrutador Dragão** ficará impressionado com sua habilidade de resolver problemas reais usando filas! 🗝️🐉