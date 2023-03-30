1.  Classes: As classes são uma das principais construções em programação orientada a objetos (POO). Em TypeScript, as classes são usadas para encapsular dados e comportamentos relacionados em uma única unidade. As classes são definidas usando a palavra-chave `class`.

Exemplo:

```
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person = new Person("João", 30);
person.greet(); // Output: Hello, my name is João and I'm 30 years old.

```


2.  Herança: A herança é um conceito fundamental em POO, que permite que uma classe herde propriedades e métodos de outra classe. Em TypeScript, podemos criar uma classe filha que herda de uma classe pai usando a palavra-chave `extends`. A classe filha pode adicionar novas propriedades e métodos ou sobrescrever os da classe pai.

Exemplo:

```
class Employee extends Person {
  jobTitle: string;

  constructor(name: string, age: number, jobTitle: string) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old and I work as a ${this.jobTitle}.`);
  }
}

const employee = new Employee("Ana", 25, "developer");
employee.greet(); // Output: Hello, my name is Ana, I'm 25 years old and I work as a developer.

```

3.  Polimorfismo: O polimorfismo é outro conceito fundamental em POO, que permite que um objeto seja tratado como um objeto de sua classe pai ou como um objeto de sua classe filha. Em TypeScript, podemos aproveitar o polimorfismo para criar uma hierarquia de classes que podem ser tratadas de forma polimórfica.

Exemplo:

```

```

Essas são algumas das formas de utilizar Classes, Herança e Polimorfismo em TypeScript. Com eles, podemos criar hierarquias de objetos e reutilizar código de forma mais eficiente.