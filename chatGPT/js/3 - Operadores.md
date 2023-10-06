Vamos explorar os operadores em JavaScript e TypeScript, incluindo operadores aritméticos, lógicos e de comparação. Operadores são usados para realizar diversas operações em valores e variáveis.

**Operadores Aritméticos:**

Operadores aritméticos são usados para realizar operações matemáticas em números. Aqui estão alguns exemplos em JavaScript e TypeScript:

- **Adição (+):** Soma dois valores.
  ```javascript
  let a = 5;
  let b = 3;
  let result = a + b; // Resultado: 8
  ```

- **Subtração (-):** Subtrai um valor de outro.
  ```javascript
  let x = 10;
  let y = 4;
  let difference = x - y; // Resultado: 6
  ```

- **Multiplicação (*):** Multiplica dois valores.
  ```javascript
  let m = 6;
  let n = 7;
  let product = m * n; // Resultado: 42
  ```

- **Divisão (/):** Divide um valor pelo outro.
  ```javascript
  let p = 20;
  let q = 5;
  let quotient = p / q; // Resultado: 4
  ```

- **Módulo (%):** Retorna o resto da divisão.
  ```javascript
  let num1 = 17;
  let num2 = 5;
  let remainder = num1 % num2; // Resultado: 2
  ```

**Operadores Lógicos:**

Operadores lógicos são usados para realizar operações de lógica booleana. Os operadores lógicos comuns são `&&` (E lógico), `||` (OU lógico) e `!` (NÃO lógico).

- **E lógico (&&):** Retorna verdadeiro se ambos os operandos forem verdadeiros.
  ```javascript
  let isTrue = true;
  let isFalse = false;
  let andResult = isTrue && isFalse; // Resultado: false
  ```

- **OU lógico (||):** Retorna verdadeiro se pelo menos um dos operandos for verdadeiro.
  ```javascript
  let orResult = isTrue || isFalse; // Resultado: true
  ```

- **NÃO lógico (!):** Inverte o valor booleano.
  ```javascript
  let notResult = !isTrue; // Resultado: false
  ```

**Operadores de Comparação:**

Operadores de comparação são usados para comparar dois valores e retornar um valor booleano (verdadeiro ou falso). Aqui estão alguns exemplos:

- **Igual (==):** Verifica se dois valores são iguais.
- **Diferente (!=):** Verifica se dois valores são diferentes.
- **Estritamente Igual (===):** Verifica se dois valores são iguais em valor e tipo.
- **Estritamente Diferente (!==):** Verifica se dois valores são diferentes em valor ou tipo.
- **Maior que (>):** Verifica se o valor da esquerda é maior que o valor da direita.
- **Maior ou igual (>=):** Verifica se o valor da esquerda é maior ou igual ao valor da direita.
- **Menor que (<):** Verifica se o valor da esquerda é menor que o valor da direita.
- **Menor ou igual (<=):** Verifica se o valor da esquerda é menor ou igual ao valor da direita.

```javascript
let numA = 10;
let numB = 5;
let isEqual = numA == numB; // Resultado: false
let isNotEqual = numA != numB; // Resultado: true
let isStrictEqual = numA === numB; // Resultado: false
let isGreaterThan = numA > numB; // Resultado: true
```

É importante entender como esses operadores funcionam para criar expressões lógicas e condicionais eficazes em seus programas JavaScript e TypeScript. Eles são fundamentais para controlar o fluxo do programa e tomar decisões com base em condições.