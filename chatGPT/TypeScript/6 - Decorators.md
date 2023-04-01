1.  O que são Decorators? Decorators são uma forma de modificar ou estender a funcionalidade de classes, métodos, propriedades e outros elementos em tempo de compilação. Em outras palavras, um decorator é uma função que pode ser usada para adicionar metadata ou comportamento a um elemento do código.
    
2.  Como definir e utilizar Decorators: Para definir um decorator, basta criar uma função que receba como argumento o elemento que se deseja decorar e retorne um novo elemento com as modificações desejadas. Para utilizar um decorator em um elemento do código, basta colocar o nome da função decorator acima do elemento.


Exemplo:

```
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with args: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Result: ${result}`);
    return result;
  }

  return descriptor;
}

class Calculator {
  @log
  sum(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.sum(1, 2); // Output: Calling sum with args: 1,2
                     //         Result: 3

```


Neste exemplo, o decorator `@log` é usado para adicionar uma mensagem de log antes e depois da chamada do método `sum` da classe `Calculator`. Quando o método é chamado, a mensagem de log é exibida no console junto com os argumentos da chamada e o resultado retornado pelo método.

Decorators são uma poderosa ferramenta em TypeScript para modificar e estender a funcionalidade dos elementos do código em tempo de compilação. Com eles, podemos adicionar metadata, aplicar padrões de design, adicionar validações e muito mais.