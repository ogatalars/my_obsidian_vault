O escopo de variáveis é um conceito fundamental na programação que define a visibilidade e a acessibilidade de variáveis em diferentes partes do código. Tanto em JavaScript quanto em TypeScript, existem dois principais tipos de escopo de variáveis: escopo global e escopo local.

**Escopo Global:**

Variáveis declaradas fora de qualquer função têm escopo global. Isso significa que elas podem ser acessadas de qualquer lugar no código, em qualquer função ou bloco de código.

Exemplo em JavaScript:

```javascript
let nome = "Alice"; // Escopo global

function saudacao() {
  console.log("Olá, " + nome); // A variável nome é acessível aqui
}

saudacao(); // Saída: Olá, Alice
```

**Escopo Local:**

Variáveis declaradas dentro de uma função têm escopo local. Isso significa que elas só podem ser acessadas dentro da função onde foram declaradas. Variáveis declaradas em blocos de código (por exemplo, em loops `for` ou condicionais `if`) também têm escopo local a esse bloco específico.

Exemplo em JavaScript:

```javascript
function exemplo() {
  let localVar = "Esta é uma variável local"; // Escopo local
  console.log(localVar); // A variável localVar é acessível aqui
}

exemplo();
console.log(localVar); // Isso resultaria em um erro, pois localVar não está no escopo global
```

**Var, Let e Const:**

Em JavaScript, as palavras-chave `var`, `let` e `const` têm impacto no escopo das variáveis.

- `var`: Tem escopo de função e é suscetível ao hoisting (a declaração é movida para o topo da função).
- `let`: Introduzido no ES6, possui escopo de bloco (bloco delimitado por chaves) e não é suscetível ao hoisting.
- `const`: Semelhante ao `let`, mas as variáveis declaradas como `const` não podem ser reatribuídas após a inicialização.

Exemplo em JavaScript:

```javascript
function exemplo() {
  if (true) {
    var varVar = "Variável com var"; // Escopo de função
    let letVar = "Variável com let"; // Escopo de bloco
    const constVar = "Variável com const"; // Escopo de bloco
  }
  console.log(varVar); // A variável varVar é acessível aqui
  console.log(letVar); // Isso resultaria em um erro, pois letVar não está no escopo
  console.log(constVar); // Isso resultaria em um erro, pois constVar não está no escopo
}
```

Em TypeScript, `let` e `const` também são usados para definir escopos locais ou de bloco, da mesma forma que em JavaScript.

Entender o escopo de variáveis é fundamental para evitar problemas de colisão de nomes, manter o código organizado e prevenir bugs. Certifique-se de declarar variáveis no escopo apropriado para garantir que elas sejam acessíveis apenas onde são necessárias.