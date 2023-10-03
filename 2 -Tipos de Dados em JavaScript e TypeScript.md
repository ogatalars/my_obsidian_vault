Vamos aprofundar nos tipos de dados mais comuns em JavaScript (JS) e TypeScript (TS), incluindo números, strings, arrays e objetos.

**Tipos de Dados em JavaScript e TypeScript:**

1. **Números (Number):**
   - **JavaScript:** Em JavaScript, os números podem ser inteiros ou de ponto flutuante. Não há distinção entre eles em termos de declaração.
   
   ```javascript
   let x = 10;      // Inteiro
   let y = 3.14;    // Ponto flutuante
   ```

   - **TypeScript:** TypeScript permite definir tipos específicos para números, como `number`, `int`, `float`, entre outros.

   ```typescript
   let a: number = 10;   // Número inteiro
   let b: number = 3.14; // Número de ponto flutuante
   ```

2. **Strings:**
   - **JavaScript:** Em JavaScript, as strings são sequências de caracteres. Você pode usar aspas simples ou duplas para criar strings.
   
   ```javascript
   let name = "John";
   let message = 'Hello, World!';
   ```

   - **TypeScript:** TypeScript mantém a mesma sintaxe de strings, mas permite adicionar informações de tipo.

   ```typescript
   let name: string = "John";
   let message: string = 'Hello, World!';
   ```

3. **Arrays:**
   - **JavaScript:** Em JavaScript, arrays são listas ordenadas de valores. Você pode adicionar valores de diferentes tipos em um array.
   
   ```javascript
   let numbers = [1, 2, 3];
   let mixedArray = [1, "Two", true];
   ```

   - **TypeScript:** Em TypeScript, você pode definir tipos de elementos em um array.

   ```typescript
   let numbers: number[] = [1, 2, 3];
   let mixedArray: (number | string | boolean)[] = [1, "Two", true];
   ```

4. **Objetos:**
   - **JavaScript:** Em JavaScript, objetos são estruturas de dados que consistem em pares chave-valor.
   
   ```javascript
   let person = {
     name: "Alice",
     age: 30
   };
   ```

   - **TypeScript:** TypeScript permite definir tipos para objetos, o que pode ajudar na validação de propriedades.

   ```typescript
   type Person = {
     name: string;
     age: number;
   };
   let person: Person = {
     name: "Alice",
     age: 30
   };
   ```

Além desses tipos, ambas as linguagens suportam outros tipos de dados, como boolean, null, undefined, symbol, e tipos personalizados. TypeScript se destaca na criação de tipos personalizados para trazer mais segurança e clareza ao código, especialmente em projetos grandes. Os tipos são úteis para evitar erros e facilitar a manutenção do código.