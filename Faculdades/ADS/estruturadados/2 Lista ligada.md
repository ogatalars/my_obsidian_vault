As listas ligadas (ou listas encadeadas) são uma estrutura de dados fundamental na ciência da computação, utilizada para armazenar sequências de elementos de uma maneira que cada elemento aponta para o próximo na sequência. Elas são especialmente úteis em situações onde é necessário realizar muitas inserções e deleções de elementos, pois essas operações podem ser mais eficientes do que em arrays ou listas baseadas em arrays, que requerem deslocamento de elementos.

### Estrutura de uma Lista Ligada

Uma lista ligada consiste em uma sequência de "nós", onde cada nó contém:
1. **Dados**: O valor ou os dados armazenados no nó.
2. **Referência ao próximo nó**: Um ponteiro ou referência para o próximo nó na lista.

Existem várias variações de listas ligadas, incluindo listas simplesmente ligadas, listas duplamente ligadas e listas circulares.

### Exemplo em JavaScript: Lista Ligada Simplesmente Ligada

Aqui está um exemplo básico de como implementar uma lista ligada simples em JavaScript:

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Uso da lista ligada
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print(); // Saída: 1, 2, 3
```

### Exemplo em C#: Lista Ligada Simplesmente Ligada

Agora, um exemplo equivalente em C#:

```csharp
using System;

public class Node {
    public int Data;
    public Node Next;

    public Node(int data) {
        this.Data = data;
        this.Next = null;
    }
}

public class LinkedList {
    private Node head;

    public void Add(int data) {
        Node newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            Node current = this.head;
            while (current.Next != null) {
                current = current.Next;
            }
            current.Next = newNode;
        }
    }

    public void Print() {
        Node current = this.head;
        while (current != null) {
            Console.WriteLine(current.Data);
            current = current.Next;
        }
    }
}

// Uso da lista ligada
public class Program {
    public static void Main() {
        LinkedList list = new LinkedList();
        list.Add(1);
        list.Add(2);
        list.Add(3);
        list.Print(); // Saída: 1, 2, 3
    }
}
```

### Considerações

- **Vantagens**: As listas ligadas permitem inserções e remoções eficientes sem reorganizar toda a estrutura de dados, como seria necessário em um array.
- **Desvantagens**: Acessar elementos em uma lista ligada é menos eficiente do que em um array, pois você precisa percorrer a lista desde o início para encontrar um elemento. Além disso, as listas ligadas geralmente usam mais memória devido ao armazenamento de referências adicionais.

Listas ligadas são uma parte fundamental do toolkit de um programador e são essencialmente utilizadas para implementar várias outras estruturas de dados e operações complexas em muitos sistemas e aplicações.