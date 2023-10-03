Vamos aprofundar no tópico de variáveis em JavaScript (JS) e TypeScript (TS). Variáveis são fundamentais em programação, pois permitem armazenar e manipular dados. Abaixo, vou explicar as variáveis em ambos os idiomas e suas diferenças.

**JavaScript (JS):**
Em JavaScript, você pode declarar variáveis usando três palavras-chave: `var`, `let`, e `const`.

1. **`var`:**
   - Declara variáveis globalmente ou localmente dentro de uma função.
   - Variáveis declaradas com `var` têm escopo de função.
   - São suscetíveis ao "hoisting," o que significa que a declaração de variável é movida para o topo do escopo, mas a inicialização permanece no lugar.

```javascript
var x = 10;
function example() {
  var y = 5;
}
```

2. **`let`:**
   - Introduzido no ES6 (ECMAScript 2015), oferece escopo de bloco.
   - Variáveis declaradas com `let` não sofrem hoisting.
   - Mais seguro e preferível para evitar problemas de escopo.

```javascript
let x = 10;
if (true) {
  let y = 5;
}
```

3. **`const`:**
   - Declara constantes com escopo de bloco.
   - Não pode ser reatribuído após a inicialização.
   - Útil para declarar valores que não devem mudar.

```javascript
const PI = 3.14159;
```

**TypeScript (TS):**
TypeScript é um superconjunto de JavaScript que adiciona tipos estáticos. Ele mantém a mesma sintaxe para variáveis, mas com a adição de informações de tipo.

1. **Declarando Variáveis com Tipos:**
   - Em TypeScript, você pode adicionar tipos a variáveis usando `:`.

```typescript
let age: number = 30;
let name: string = "John";
```

2. **Inferência de Tipo:**
   - TypeScript pode inferir tipos automaticamente com base no valor atribuído.

```typescript
let age = 30; // TypeScript infere que "age" é do tipo number.
```

3. **Variáveis Constantes:**
   - No TypeScript, o uso de `const` é semelhante ao JavaScript, mas com tipos.

```typescript
const PI: number = 3.14159;
```

4. **Tipos Avançados:**
   - TypeScript oferece tipos avançados, como uniões, interseções e tipos personalizados, para tornar a definição de variáveis mais precisa.

```typescript
let result: string | number = "Hello"; // União de tipos
let person: { name: string; age: number } = { name: "Alice", age: 25 }; // Tipo de objeto
```

Em resumo, o TypeScript estende as capacidades de variáveis do JavaScript, adicionando a verificação de tipos em tempo de compilação. Isso pode ajudar a evitar erros de tipos e melhorar a qualidade do código em projetos maiores. No entanto, ambas as linguagens compartilham os mesmos conceitos básicos de variáveis, como declaração, escopo e atribuição.