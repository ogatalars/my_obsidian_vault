TypeScript é uma linguagem de programação de tipagem estática, o que significa que os tipos dos valores são verificados em tempo de compilação. Isso pode ajudar a detectar erros e tornar o código mais robusto.

Existem vários tipos básicos em TypeScript, incluindo:

- **Number:** números inteiros e de ponto flutuante
- **String:** texto
- **Boolean:** verdadeiro ou falso
- **Array:** uma lista de valores
- **Object:** um objeto com propriedades
- **Function:** uma função que retorna um valor
- **Enum:** uma lista de valores nomeados
- **Any:** um tipo que pode ser qualquer valor
- **Void:** um tipo que não tem valor

Você também pode criar seus próprios tipos usando interfaces e classes.

Aqui estão alguns exemplos de tipagem em TypeScript:

```
const myNumber: number = 10;
const myString: string = "Hello, world!";
const myBoolean: boolean = true;
const myArray: number[] = [1, 2, 3];
const myObject: { name: string, age: number } = { name: "John Doe", age: 30 };
const myFunction: () => number = () => 10;
const myEnum: "red" | "blue" | "green" = "red";
const myVoid: void = undefined;
```

A tipagem pode ajudar a tornar o seu código mais robusto e fácil de ler. Ela também pode ajudar a detectar erros em tempo de compilação, o que pode economizar tempo e frustração.