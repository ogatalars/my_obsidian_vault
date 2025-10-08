---
title: "TypeScript: O guia definitivo"
source: "https://oieduardorabelo.medium.com/typescript-o-guia-definitivo-1a63b04259cc"
author:
  - "[[Eduardo Rabelo]]"
published: 2018-11-23
created: 2025-10-08
description: "“” is published by Eduardo Rabelo."
tags:
  - "clippings"
---
[Sitemap](https://oieduardorabelo.medium.com/sitemap/sitemap.xml)

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*FcYQDFv-U-AO24ogF9oR1Q.png)

> Este artigo descreve os recursos e funcionalidades até o TypeScript 3.1.

Uma das linguagens mais interessantes para o desenvolvimento de aplicativos em larga escala é o [TypeScript](https://typescriptlang.org/), da Microsoft. O TypeScript é único porque é um superconjunto de JavaScript (ES2015+), mas com tipos, interfaces, tipos genéricos e muito mais. Ao contrário de outras linguagens que compilam para JavaScript, o TypeScript não tenta alterar o JavaScript para uma nova linguagem. Ao invés disso, a equipe do TypeScript toma um cuidado extra para alinhar os recursos de uma maneira bem próxima ao JavaScript e suas funcionalidades futuras. Devido a isso, os desenvolvedores que utilizam TypeScript podem aproveitar os recursos mais recentes da linguagem JavaScript, além de um sistema de tipagem forte para escrever códigos mais organizados, aproveitando as ferramentas avançadas que o uso de uma linguagem de tipo estaticamente fornece.

O poder real no TypeScript vem de suas ferramentas. Os tipos são um meio de levar ferramentas de classe mundial à linguagem JavaScript, o que permite projetos melhores estruturados e mais fáceis de manter. Isso é especialmente importante à medida que os projetos JavaScript aumentam de tamanho (seja em linhas de código ou desenvolvedores no projeto). Ter uma conclusão rápida e precisa, recursos de refatoração e feedback imediato faz do TypeScript a linguagem ideal para JavaScript em grande escala. O TypeScript também simplifica seu uso para quem quer iniciar com a linguagem! Como o JavaScript é efetivamente o TypeScript sem anotações de tipo, todas ou partes de um projeto existente podem ser convertidas imediatamente e, em seguida, podemos aproveitar lentamente tudo o que o TypeScript tem a oferecer ao longo do tempo.

Embora a documentação do TypeScript tenha melhorado significativamente desde que este guia foi publicado, este guia ainda fornece uma das melhores visões gerais dos principais recursos do TypeScript, supondo que você já tenha um conhecimento razoável de JavaScript e um entendimento básico de como funciona a herança baseada em classe (como em Java, PHP, C #, etc.). O guia é atualizado regularmente para fornecer novas informações sobre as versões mais recentes do TypeScript.

### Índice

- Instalação e uso
- Configuração
- Utilizando let e const
- Importação e exportação
- Açucares de linguagem
- Desestruturação
- Outros recursos da linguagem
- Tipos
- Tipos de Objeto
- Tipo “object” em TS 2.2+
- Tipos de Tupla
- Tipos de Função
- Funções sobrecarregadas
- Tipos rigorosos para Funções em TS 2.6+
- Tipos Genéricos
- Tipos de União
- Tipos de Intersecção
- Tipando o valor de “this”
- Tipos Mapeados em TS 2.1+
- Tipos “Mapped”, “Partial”, “Readonly”, “Record” e “Pick” em TS 2.1+
- Tipos Condicionais em TS 2.8+
- Guardas de Tipo
- Classes
- Mixins e Herança múltipla
- Enumeráveis
- Aliases
- Declarações de Ambiente
- Carregador de Plugins
- Análise de controle de fluxo

## Instalação e uso

A instalação do TypeScript é tão simples quanto a execução **npm install typescript**. Uma vez instalado, o compilador TypeScript estará disponível executando **tsc** ou executando uma tarefa local para compilar automaticamente após cada arquivo ser salvo. Se você quiser experimentar o TypeScript em seu navegador, o [TypeScript Playground](http://www.typescriptlang.org/Playground/) permite que você experimente o TypeScript com um editor de código completo, com a limitação de que os módulos não podem ser usados. A maioria dos exemplos deste guia pode ser colado diretamente no playground para ver rapidamente como o TypeScript é compilado em JavaScript com uma fácil leitura.

## Configuração

O compilador TypeScript é altamente configurável, permitindo que o usuário defina onde os arquivos de origem estão e como eles devem ser transformados, indo até como podemos configurar quão restrito o verificador de tipos deve ser e se deve permitir arquivos JavaScript. Cada uma das opções de configuração pode ser passada para o comando **tsc**, ou um arquivo **tsconfig.json** pode armazenar as configurações de um projeto, definindo como o compilador deve ser executado toda vez. O **tsconfig.json** armazena informações sobre vários sinalizadores e configurações do compilador, bem como informações de resolução do caminho do módulo. [Uma lista completa de opções do compilador está disponível na documentação oficial](https://www.typescriptlang.org/docs/handbook/compiler-options.html). Um exemplo de **tsconfig.json** do projeto Dojo:

```rb
{
  "version": "2.1.5",
  "compilerOptions": {
    "declaration": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "module": "umd",
    "moduleResolution": "node",
    "outDir": "_build/",
    "removeComments": false,
    "sourceMap": true,
    "strict": true,
    "target": "es5",
    "lib": ["es2015", "dom"]
  },
  "include": [
    "./src/**/*.ts", 
    "./tests/**/*.ts", 
    "./typings/index.d.ts"
  ]
}
```

O principal benefício de incluir um **tsconfig.json** em um projeto é garantir que cada execução do compilador seja idêntica comparação à execução anterior e que todos os contribuidores do projeto estejam executando com os mesmos sinalizadores. O compilador também tem vários sinalizadores que alteram a rigidez do compilador quando se trata de verificação de tipos e se devem ser permitidos arquivos JavaScript. Essa é uma das melhores partes do TypeScript, pois permite que o TypeScript seja adicionado a um projeto existente sem exigir que o projeto inteiro seja convertido para o TypeScript e totalmente tipado primeiro. Bandeiras como **noImplicitAny**, quando **false**, não emitirá um aviso de compilador sobre uma variável que não é anotada com um tipo ou onde um tipo não pode ser inferido. Com o tempo, um projeto pode habilitar esse e outros sinalizadores, permitindo que uma equipe trabalhe, incrementalmente, em direção ao código totalmente tipado. Para novos projetos iniciados no TypeScript, recomenda-se que o sinalizador **strict** seja habilitado para receber todos os benefícios do TypeScript.

A propriedade **lib** no **tsconfig.json** pode ser usada para especificar quais bibliotecas padrão estão disponíveis para o projeto. Os valores aqui são baseados no tipo de projeto e onde o projeto precisa ser executado. Por exemplo, um projeto para Web provavelmente precisará acessar o DOM, portanto, a inclusão de **lib: \[“dom”\]** garantirá a existência de **document** e métodos como **querySelector**. Se estiver rodando em um ambiente ES2016, ou um com os polyfills apropriados, **“es2016”** também pode ser incluído. Se o seu projeto especificamente espera que os arrays tenham um método **.include**, podemos incluir **“es2016.array.include”**. Isso permite a personalização de como o TypeScript pode identificar o seu código, comparando com o ambiente desejado em tempo de execução e se deve lançar erros para o código atual, que pode não existir realmente no ambiente em tempo de execução.

A partir do TypeScript 2.7, existe uma **nova diretiva de referência para lib**, isolando a inclusão de uma biblioteca específica apenas no arquivo que usa essa diretiva. Isso é benéfico para isolar recursos novos/experimentais em um único arquivo e não disponibilizá-los para o projeto inteiro. Considere o seguinte exemplo:

```rb
/// <reference lib="es2016.array.include" />
 
[ 'foo', 'bar', 'baz' ].includes('bar'); // true
```

O compilador não lançará um erro sobre o uso **Array.prototype.includes** neste módulo, porque ele contém a diretiva lib. No entanto, se outro arquivo no projeto tentar usar esse método e a lib não for incluída no **tsconfig.json**, o compilador lançará um erro.

Muitos projetos também incluem um [**tslint.json**](https://github.com/dojo/widget-core/blob/master/tslint.json) para especificar configurações de linter e um arquivo [**package.json**](https://github.com/dojo/widget-core/blob/master/package.json) que é padrão na maioria dos pacotes JavaScript.

O suporte a Glob foi adicionado para o TypeScript 2.0, facilitando o **include** e **exclude** em grupo de arquivos seguindo padrões que aproveitam `*, ?, **/`.

Observe que, a partir do TypeScript 2.1, o tsconfig.json pode herdar de outros arquivos de configuração, reduzindo a duplicação em aplicativos e bibliotecas complexos. Isto é feito através da chave **extends** que tem um caminho como um valor.

## Utilizando let e const

O ES2015 introduz duas novas maneiras de declarar variáveis usando **let** e **const**. É preferível declarar variável usando **let** ou **const** ao invés de **var** porque as declarações **var** têm algumas regras de escopo incomuns em comparação com outras linguagens. Ao contrário das variáveis declaradas com **var**, aquelas declaradas com **let** são variáveis de “escopo de bloco”, que não são visíveis fora de seu bloco mais próximo ou loop. Isso ajuda a evitar colisões não intencionais na reutilização de nomes de variáveis. As variáveis declaradas usando **const** são de escopo similar àquelas declaradas com **let** — a grande diferença é que é um erro é retornado em tempo de compilação se você tentar reatribuir o valor de uma **const**. No entanto, você ainda pode alterar as propriedades dentro de um objeto mantido por uma variável **const**. Utilizar **const** quando possível ajuda um programador a sinalizar sua intenção sobre como essas variáveis se comportarão — o que torna o código mais fácil de entender.

O TypeScript 2.0 adicionou a palavra chave ==**readonly**== ==— que não permite a reatribuição e implica uma propriedade não gravável/uma propriedade acessível apenas via== ==**get**====.== Isso não significa que os não-primitivos sejam imutáveis.

## Importação e exportação

Para começar a falar sobre como escrever o TypeScript, primeiro precisamos entender como criar e carregar arquivos do TypeScript. Os arquivos TypeScript usam a extensão de arquivo **.ts** e, como o [AMD](http://www.sitepen.com/blog/2012/06/25/amd-the-definitive-source/) e o [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1), cada arquivo TypeScript representa nominalmente um único módulo. A importação de módulos no TypeScript segue a API ES Modules (ESM):

```rb
import myModule from './myModule';
```

Por padrão, a resolução do caminho de módulos para IDs de módulo relativo é a mesma no TypeScript que no AMD e no CommonJS, em que a ID do módulo é resolvida em relação ao diretório que contém o módulo de referência. IDs de módulo absoluto funcionam de forma ligeiramente diferente; primeiro, se houver [uma declaração de módulo de ambiente correspondente](https://www.sitepen.com/blog/2018/10/29/update-the-definitive-typescript-guide/#ambient-declarations), seu valor será usado. Caso contrário, o compilador percorre o sistema de arquivos, a partir do diretório que contém o módulo de referência, procurando **.ts**, então **.d.ts**, em cada diretório pai, até encontrar uma correspondência.

Antes do TypeScript 2.0, existia um suporte para duas maneiras de resolver nomes de módulos: **classic** (um nome de módulo sempre é resolvido para um arquivo, os módulos são pesquisados usando uma pasta walk) e **node** (usa regras similares ao carregador de módulo Node.js). Infelizmente, nenhuma abordagem resolve a abordagem de definir módulos relativos a um **baseUrl**, que é o que os sistemas AMD, como Dojo e RequireJS e SystemJS usam, embora os esforços estejam em andamento na [proposta de padrões de URLs nomeados/mapeados](https://github.com/whatwg/html/issues/3161).

Ao invés de introduzir um terceiro tipo de resolução de módulos para o TypesSript 2.0, a equipe resolveu adicionar definições de configuração para resolver este problema: **baseUrl**, **paths**, e **rootDirs**.

**paths** só pode ser usado se **baseUrl** estiver definido. Se pelo menos uma dessas propriedades for definida, o compilador do TypeScript tentará usá-las para resolver os nomes dos módulos e, se falhar, recorrerá a uma estratégia padrão.

Para exportar valores de um módulo, podemos utilizar a palavra-chave **export**:

```rb
export function foo() {}
export let bar = 123;
export class MyClass {}
```

Importação de todo um módulo, pode ser feita usando \* *asterisco (*)\*\*, isso fará com que as exportações do módulo fiquem disponíveis localmente com os mesmos nomes: **foo**, **bar**, e **MyClass**. Para usar esses valores em outro módulo, basta utilizar **import** para acessar o módulo e suas propriedades exportadas:

```rb
import * from './myModule';

foo();
bar + 5; // = 128
new MyClass();
```

Para importar propriedades individuais, coloque os nomes das propriedades com chaves:

```rb
import { foo } from './myModule';
import { bar, MyClass } from './myModule';

foo();
bar + 5; // = 128
new MyClass();
```

Você pode especificar uma exportação padrão adicionando a palavra-chave **default** imediatamente após **export**:

```rb
export default class MyClass {}
```

Isso é equivalente a retornar um valor de uma função de fábrica (*factory function)* no AMD ou atribuir um valor ao **module.exports** em CommonJS. Para utilizar o módulo, você pode simplesmente importá-lo diretamente:

```rb
import MyClass from './MyClass';

let myInstance = new MyClass();
```

Fornecer um identificador de importação sem chaves irá carregar a importação padrão e será implicitamente nomeada ao que você especificar. Outras importações podem ser nomeadas usando a palavra-chave **as**:

```rb
// AnotherClass = MyClass from MyClass.ts
import AnotherClass from './MyClass';

import { foo, bar as baz } from './myModule';
```

Para anexar as exportações de um módulo a uma propriedade nomeada, como quando você atribui propriedades ao objeto **exports** em AMD ou CommonJS, podemos fornecer um alias para a **importação com asterisco**:

```rb
import * as foo from './myModule';

foo.foo();
foo.bar;
new foo.MyClass();
```

Observe que ao usar mixins com classes TypeScript (2.2+), há alguns detalhes sutís descritos na seção sobre classes.

## Açucares de linguagem

Antes de mergulhar nos recursos de tipagem estática do TypeScript, é essencial revisar algumas das melhorias gerais feitas nas funções do TypeScript, já que algumas dessas alterações tornam os recursos do sistema de tipos mais fáceis de entender.

O TypeScript inclui quatro melhorias principais em funções: **parâmetros opcionais**, **valores de argumentos padrão**, **associar parâmetros restantes** e **funções de seta**.

Parâmetros opcionais agora podem ser definidos pela sufixação de um identificador de parâmetro com um ponto de interrogação:

```rb
function getRange(max, min, exclusive?) {
  // ...
}
```

Aqui **exclusive** é um parâmetro opcional. Isso não tem sentido quando se fala em JavaScript, já que todos os parâmetros são sempre opcionais, mas no TypeScript, o compilador proíbe omitir os argumentos tipados, a menos que eles sejam especificados como opcionais ou tenham um valor padrão.

Um parâmetro opcional é essencialmente uma forma abreviada de especificar **undefined** como o valor padrão para um parâmetro. Tornar um parâmetro opcional com um valor diferente é tão simples quanto atribuí-lo à lista de parâmetros, ao invés de usar a abreviação de ponto de interrogação, fazemos:

```rb
function getRange(max, min = 0, exclusive = false) {
  // ...
}
```

Nesse caso, **min** é opcional e terá como padrão **0**, e **exclusive** é opcional e será padronizado com **false**.

O TypeScript também adiciona suporte para um parâmetro variádico no final com **…rest**, que coleta quaisquer argumentos extras passados para a função em um único array nomeado:

```rb
function publish(topic, ...args): void {
  // ...
}
```

Neste caso, ao chamar **publish(‘/foo’, ‘a’, ‘b’, ‘c’)**, **topic** uma **string ‘/foo’** e **args** seria um **array \[‘a’, ‘b’, ‘c’\]**. Observe que o uso desse recurso adiciona um loop extra à sua função que é executada em cada chamada para coletar argumentos restante no parâmetro nomeado, portanto, se você tem um código crítico, para melhorar seu desempenho você deve continuar utilizando diretamente o objeto **arguments**.

O TypeScript também inclui suporte para a [função de seta do ES2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). Esse novo tipo de função fornece uma nova sintaxe abreviada e também altera a maneira como a palavra-chave **this** funciona, portanto, seu valor é obtido do escopo léxico mais próximo, ao invés do objeto de contexto no qual está sendo chamada, como as funções normais do JavaScript:

```rb
let obj = {
  arrow: () => {
    console.log(this);
  },
  regular: function () {
    console.log(this);
  }
};
 
obj.arrow(); // logs \`window\`
obj.regular(); // logs \`obj\`
```

O TypeScript também inclui notações abreviadas de objetos que reduzem a quantidade de código necessária para operações comuns com associar objetos literais:

```rb
const foo = 'foo';
let a = {
  // notação abreviada de identificador, igual à \`foo: foo\`
  foo,
 
  // notação abreviada para métodos, igual à \`bar: function () {}\`
  bar() {
 
  }
};
```

## Desestruturação

Diversas variáveis podem ser atribuídas diretamente de um array:

```rb
let x, y;
[x, y] = [10, 20];
```

Podemos encurtar:

```rb
let [x, y] = [10, 20];
```

Desestruturação também funciona com objetos:

```rb
let { place, location: [x, y] } = { place: 'test', location: [10, 20] };
// variável local 'place' = 'test'
// variável local 'x' = 10
// variável local 'y' = 20
```

## Outros recursos da linguagem

O TypeScript também inclui vários outros recursos das especificações atuais ou futuras do ECMAScript, incluindo:

- [Iteração de loop](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#forof-support) `[for..of](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#forof-support)`
- [Strings de Template](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#template-strings)
- [Tagged Strings de Template](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#tagged-template-strings-in-es3es5)
- [Operador de Exponenciação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_\(**\))
- [Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) e [Protocolo de Iteração](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) (No TS 1.6+ com exportação ES2015, 2.3+ para exportação ES3/ES5 com `--downlevelIteration`)
- [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) (TS 1.7+ com exportação ES2015, 2.1+ com exportação ES3/ES5)
- [Iteração de loop](https://tc39.github.io/proposal-async-iteration/) `[for-await-of](https://tc39.github.io/proposal-async-iteration/)` (TS 2.3+ para ES3/ES5 com `--downlevelIteration`)
- [Expressões de Importação Dinâmica](https://tc39.github.io/proposal-dynamic-import/) (TS 2.4+)
- [Variáveis opcionais para cláusula](https://tc39.github.io/proposal-optional-catch-binding/) `[catc](https://tc39.github.io/proposal-optional-catch-binding/)` (TS 2.5+)

## Tipos

Sem adicionar nenhuma indicação de tipo, as variáveis no TypeScript são do tipo **any**, o que significa que elas podem conter qualquer tipo de dados, assim como o JavaScript. A sintaxe básica para adicionar restrições de tipo ao código no TypeScript é semelhante a:

```rb
function toNumber(numberString: string): number {
    const num: number = parseFloat(numberString);
    return num;
}
```

No código acima, a função **toNumber** aceita um parâmetro que deve ser uma string e retorna um número. A variável **num** é explicitamente digitada para conter um número (embora o TypeScript seja inteligente o suficiente para saber que a função **parseFloat** padrão retorna um número e, portanto, **num** é um número, ele é atribuído no momento em que é declarado). Os tipos primitivos fornecidos pelo TypeScript são os mesmos tipos primitivos do próprio JavaScript: **any**, **number**, **string**, **boolean**, **void** (isto é **null** ou **undefined**), **never** e a partir do TypeScript 3.0, **unknown**. Na maioria dos casos, **never** é inferido em funções em que a análise de fluxo de código detecta algum código inacessível e, como desenvolvedor, você não precisa se preocupar com isso. Por exemplo, se uma função for jogada (`throw`), ela terá um tipo **never**. Já **unknown**, é um tipo de contrapartida segura do **any**, garantindo que alguma verificação de tipo seja executada antes que o valor possa ser usado.

Ao escrever uma expressão (chamada de função, operação aritmética, etc.), você também pode declarar explicitamente o tipo resultante da expressão, o que é necessário se você estiver chamando uma função em que o TypeScript não pode descobrir o tipo de retorno automaticamente. Por exemplo:

```rb
function numberStringSwap(value: any, radix: number = 10): any {
    if (typeof value === 'string') {
        return parseInt(value, radix);
    }
    else if (typeof value === 'number') {
        return String(value);
    }
}
 
const num = <number> numberStringSwap('1234');
const str = numberStringSwap(1234) as string;
```

Neste exemplo, o valor de retorno de **numberStringSwap** é ambíguo (**any**) porque a função pode retornar mais de um tipo. Para remover a ambigüidade, o tipo da expressão em que **num** está sendo atribuída pode ser declarado explicitamente prefixando a expressão de chamada com `num = <seu-tipo-aqui> ...`. Isso pode ser feito em qualquer lugar, desde que o tipo que está sendo declarado seja compatível com o tipo da expressão; em outras palavras, se o TypeScript soubesse que **numberStringSwap** retornava um número, ao tentar afirmar o tipo com uma string, resultaria em um erro do compilador como `Cannot convert number to string`, uma vez que os dois tipos são incompatíveis. Uma sintaxe alternativa para conversão de tipos usa a palavra-chave **as**, como mostrado na atribuição para o valor **str** acima. Usar **as** é idêntico ao uso de `<...>`. No entanto, a sintaxe `<...>` não está disponível em arquivos `.tsx` devido a sua ambiguidade com TSX/JSX. Portanto, **as** é a sintaxe padrão e preferencial para conversão de tipo.

Ao escrever código no TypeScript, é uma boa idéia adicionar explicitamente os tipos às suas variáveis e funções onde o compilador não pode inferir o tipo. Quando uma variável não é anotada e o tipo não pode ser inferido, é dado um tipo **any** implícito. Ao compilar, a configuração **“noImplicitAny”: true** na seção **compilerOptions** do **tsconfig.json** evitará que tipos **any** implícitos sejam adicionados em seu código (ou seja, áreas em que o compilador não está sendo inteligente o bastante para descobrir o tipo correto).

O TypeScript também tem suporte para tipos literais de string. Esses são úteis quando você sabe que o valor de um parâmetro pode corresponder a uma lista de strings, por exemplo `let easing: "ease-in" | "ease-out" | "ease-in-out";`.

Declarações de classe local, interfaces, enums e tipos de alias também podem aparecer dentro de declarações de função. O escopo para tipos locais é bloqueado, semelhante a variáveis declaradas com `let` e `const`.

## Tipos de Objeto

Além dos sete tipos primitivos, o TypeScript permite que tipos complexos (como objetos e funções) sejam facilmente definidos e usados como restrições de tipo. Assim como objeto literais são a raiz da maioria das definições de objeto em JavaScript, o tipo literal de objeto são a maioria das definições de tipo de objeto em TypeScript. Em sua forma mais básica, parece muito semelhante a um objeto literal de JavaScript normal:

```rb
let point: {
  x: number;
  y: number;
};
```

Neste exemplo, a variável **point** é definida para aceitar qualquer objeto com propriedades **x** e **y**. Observe que, diferentemente de um objeto literal JavaScript, o tipo literal de objeto separa os campos usando ponto-e-vírgula, e não vírgulas.

Quando o TypeScript compara dois tipos de objetos diferentes, para decidir se eles correspondem ou não, isso é feito estruturalmente. Isso significa que, ao invés de comparar os tipos, verificando se os dois herdam o mesmo objeto de restrição de base (como **instanceof**), as propriedades de cada objeto são comparadas. Contanto que um determinado objeto tenha todas as propriedades que são requeridas pela restrição na variável que está sendo designada, elas são consideradas compatíveis (embora as atribuições de objeto literal sejam tratadas mais estritamente como um caso especial):

```rb
let point: { x: number; y: number; };
 
point = { x: 0, y: 0 };
// OK, mesmas propriedades

point = { x: 'zero', y: 0 };
// Erro, tipo da propriedade \`x\` está errado

point = { x: 0 };
// Erro, faltando propriedade \`y\`

point = { x: 0, y: 0, z: 0 };
// Erro, atribuição literal deve contar apenas propriedades declaradas

const otherPoint = { x: 0, y: 0, z: 0 };
point = otherPoint;
// OK, propriedades extras não são relevantes para atribuição não literal
```

Para reduzir a duplicação de tipos, o operador **typeof** também pode ser usado para definir uma restrição de tipo. Por exemplo, se fôssemos adicionar uma variável **point2**, ao invés de ter que escrever isso:

```rb
let point: { x: number; y: number; };
let point2: { x: number; y: number; };
```

Nós poderíamos simplesmente referenciar o tipo de **point** usando **typeof**:

```rb
let point: { x: number; y: number; };
let point2: typeof point;
```

Esse mecanismo ajuda a reduzir a quantidade de código necessário para fazer referências ao mesmo tipo, mas há outra abstração ainda mais poderosa no TypeScript para a reutilização de tipos de objetos: interfaces. Uma interface é, em essência, um tipo literal de objeto nomeada. Vamos alterar o exemplo anterior para usar uma interface:

```rb
interface Point {
  x: number;
  y: number;
}
 
let point: Point;
let point2: Point;
```

Essa alteração permite que o tipo **Point** seja usado em vários locais dentro do código sem precisar redefinir os detalhes do tipo repetidas vezes. Interfaces também podem estender outras interfaces ou classes usando a palavra-chave **extends** para compor tipos mais complexos a partir de tipos simples:

```rb
interface Point3d extends Point {
  z: number;
}
```

Neste exemplo, o tipo **Point3d** resultante consistiria nas propriedades **x** e **y** da interface **Point**, além da nova propriedade **z**.

Métodos e propriedades em objetos também podem ser especificados como opcionais, da mesma forma que os parâmetros de função podem ser opcionais:

```rb
interface Point {
  x: number;
  y: number;
  z?: number;
}
```

Aqui, ao invés de especificar uma interface separada para um ponto tridimensional, simplesmente tornamos a propriedade **z** da interface opcional; a verificação de tipo resultante seria assim:

```rb
let point: Point;
 
point = { x: 0, y: 0, z: 0 };
// OK, mesmas propriedades

point = { x: 0, y: 0 };
// OK, mesmas propriedades, parâmetro opcional omitido

point = { x: 0, y: 0, z: 'zero' };
// Erro, tipo da propriedade \`z\` está errado
```

Até agora, examinamos os tipos de objetos com propriedades, mas não especificamos como adicionar um método a um objeto. Como as funções são objetos de primeira classe em JavaScript, é possível usar a sintaxe de propriedade, o TypeScript também fornece uma sintaxe abreviada para especificar métodos, o que se torna muito conveniente quando começamos a trabalhar com [classes](https://www.sitepen.com/blog/2018/10/29/update-the-definitive-typescript-guide/#classes):

```rb
interface Point {
  x: number;
  y: number;
  z?: number;
  toGeo(): Point;
}
```

Neste exemplo, adicionamos um método **toGeo** na interface **Point**, que não aceita argumentos e retorna outro objeto **Point**. Como as propriedades, os métodos também podem ser opcionais, colocando um ponto de interrogação após o nome do método:

```rb
interface Point {
  // ...
  toGeo?(): Point;
}
```

Objetos destinados a serem usados como mapas de hash ou listas ordenadas podem receber uma assinatura de índice, que permite que chaves arbitrárias sejam definidas em um objeto:

```rb
interface HashMapOfPoints {
  [key: string]: Point;
}
```

Neste exemplo, definimos um tipo em que **qualquer** chave pode ser definida, desde que o valor atribuído seja do tipo **Point**. Como no JavaScript, só é possível usar **string** ou **number** como o tipo da assinatura do índice.

Para tipos de objeto sem uma assinatura de índice, o TypeScript permitirá apenas que as propriedades sejam definidas explicitamente no tipo. Se você tentar atribuir a uma propriedade que não existe no tipo, você receberá um erro do compilador. Porém, algumas vezes, você não quer adicionar propriedades dinâmicas a um objeto sem uma assinatura de índice. Para isso, você pode usar a notação de array para definir a propriedade no objeto: `a['foo'] = 'foo';`. Observe, no entanto, que o uso dessa solução alternativa sobressai o sistema de tipos para essas propriedades, portanto, faça isso apenas como último recurso.

O Typescript 2.7 adiciona a capacidade de ter propriedades de nomes constantes nos tipos. Isso significa que as interfaces podem ser definidas usando strings constantes, números ou literais de símbolo.

```rb
const Foo = 'Foo';
const Bar = 'Bar';
const Baz = Symbol();
 
interface MyInterface {
    [Foo]: number;
    [Bar]: string;
    [Baz]: boolean;
}
```

## Tipo “object” em TS 2.2+

O TypeScript 2.2 adiciona o tipo **object** que corrige uma limitação anterior na definição de tipo em que algo pode ser um tipo **Object** não primitivo. Não era possível lidar com esse cenário em versões anteriores do TypeScript porque **number**, **string** e **boolean** podem ser atribuídos a **Object**. O novo tipo **object** (observe as letras minúsculas) implica em um tipo que é atribuível ao **Object**, exceto para primitivos.

## Tipos de Tupla

Embora o JavaScript em si não tenha tuplas, o TypeScript possibilita emular tuplas tipadas usando Arrays. Se você quiser armazenar um ponto como uma tupa `(x, y, z)` ao invés de um objeto, isso pode ser feito especificando um tipo de tupla em uma variável:

```rb
let point: [ number, number, number ] = [ 0, 0, 0 ];
```

O TypeScript 3.0 adiciona melhor suporte para os tipos de tupla, permitindo que elas sejam usadas com expressões de **atribuição restante** (*rest params*) e **propagação** (*spread operator*), e permitindo elementos opcionais:

```rb
function draw(...point: [ number, number, number? ]): void {
    const [ x, y, z ] = point;
    console.log('point', ...point);
}
 
draw(100, 200); // loga: point 100, 200
draw(100, 200, 75); // loga: point 100, 200, 75
draw(100, 200, 75, 25); // Erro: Espera 2-3 argumentos mas recebeu 4
```

No exemplo acima, a função **draw** pode aceitar valores para **x**, **y** e, opcionalmente **z**. Os tipos de tuplas têm um comprimento fixo a partir do TypeScript 2.7, mas também contêm a capacidade de marcar um valor dentro da tupla como opcional.

## Tipos de Função

Como as funções em JavaScript são objetos de primeira classe, a sintaxe literal do tipo de objeto também pode ser usada para especificar que um objeto deve ser uma função. Para fazer isso, a mesma sintaxe do método mostrada acima **toGeo** é usada, mas com o nome do método deixado em branco:

```rb
let printPoint: {
  (point: Point): string;
};
```

Aqui, **printPoint** é definido para aceitar uma função que recebe um objeto de ponto e retorna uma string.

Como as funções são tão comuns em JavaScript, existe uma sintaxe de tipo para abreviar uma função específica no TypeScript, que pode ser usada para definir funções com uma única assinatura de chamada:

```rb
let printPoint: (point: Point) => string;
```

Observe que usamos a seta (`=>`), que vem da função de seta do ES2015, para definir o tipo de retorno da função ao invés dos dois pontos. Os dois pontos (`:`) são usados para definir o tipo de retorno de um método definido dentro de um tipo de objeto literal, interface ou classe, enquanto que as setas são usadas pelo tipo de função abreviada mostrado aqui. Isso é um pouco confuso no início, mas ao trabalhar com o TypeScript, você descobrirá que é fácil saber quando um ou outro deve ser usado. Por exemplo, no exemplo acima, usar dois pontos pareceria errado porque resultaria em dois dois pontos diretamente dentro da declaração:

```rb
let printPoint: (point: Point): string
```

Agora que conhecemos a sintaxe do tipo de função, voltando à nossa definição **Point**, definimos **toGeo** como uma propriedade ao invés de um método:

```rb
interface Point {
  x: number;
  y: number;
  z?: number;
  toGeo: () => Point;
}
```

As funções também podem ser tipadas como construtores colocando a palavra-chave `new` antes do tipo de função:

```rb
let Point: { new (): Point; };
let ShorthandEquivalent: new () => Point;
```

Neste exemplo, qualquer função atribuída **Point** ou **ShorthandEquivalent** precisaria ser um construtor que cria objetos **Point**.

Como a sintaxe literal do objeto nos permite definir objetos como funções, também é possível definir tipos de função com propriedades ou métodos estáticos (como a função JavaScript `String`, que também possui um método estático `String.fromCharCode`):

```rb
let Point: {
  new (): Point;
  fromLinear(point: Point): Point;
  fromGeo(point: Point): Point;
};
```

Aqui, definimos **Point** aceitando um construtor que também precisa ter os métodos estáticos `Point.fromLinear` e `Point.fromGeo`. A única maneira de realmente fazer isso é definir uma classe que implemente **Point** e tenha os métodos estáticos **fromLinear** e **fromGeo**; Vamos ver como fazer isso mais tarde, quando discutirmos `class` em profundidade.

## Funções sobrecarregadas

*NOTA: Em inglês conhecidos como — overloaded functions, functions overload, etc*

Anteriormente, criamos uma função **numberStringSwap** de exemplo que converte entre números e strings:

```rb
function numberStringSwap(value: any, radix: number):any {
    if (typeof value === 'string') {
        return parseInt(value, radix);
    }
    else if (typeof value === 'number') {
        return String(value);
    }
}
```

Neste exemplo, a ambiguidade existe na assinatura de chamada porque o tipo de retorno é **any**. No entanto, sabemos que essa função retorna uma string quando é passado um número e um número quando é passado uma string. Para ajudar o compilador do TypeScript a saber o que sabemos, podemos usar sobrecargas de função para eliminar a ambigüidade da assinatura de chamada e restaurar a verificação de tipo no valor de retorno.

Uma maneira de escrever a função acima, em que a tipagem é tratada corretamente, é:

```rb
function numberStringSwap(value: number, radix?: number): string;
function numberStringSwap(value: string): number;
function numberStringSwap(value: any, radix: number = 10): any {
    if (typeof value === 'string') {
        return parseInt(value, radix);
    }
    else if (typeof value === 'number') {
        return String(value);
    }
}
```

Com as assinaturas de chamadas extras, o TypeScript agora sabe que quando for passado a função uma string, ela retorna um número e vice-versa. Você também pode usar **tipos de união** em alguns casos, ao invés de sobrecargas de função, que serão discutidas posteriormente neste guia.

É extremamente importante ter em mente que a implementação real da função deve ter uma interface que corresponda ao menor denominador comum de todas as assinaturas de sobrecarga. Isso significa que se um parâmetro aceita vários tipos, como no exemplo o **value**, a implementação deve ter um tipo que englobe todas as opções possíveis. No caso de **numberStringSwap**, porque **string** e **number** não tem base comum, o tipo de **value** deve ser **any**.

Da mesma forma, se diferentes sobrecargas aceitarem diferentes números de argumentos, a implementação real deve ser escrita de modo que quaisquer argumentos que não existam em todas as assinaturas de sobrecarga sejam opcionais. Em **numberStringSwap**, isso significa que nós temos que fazer o argumento **radix** ser opcional na implementação real. Isso é feito especificando um valor padrão.

Não seguir essas regras resultará em um erro genérico de “Assinatura de sobrecarga não é compatível com definição de função” (*Overload signature is not compatible with function definition*).

Note que mesmo que nossa função, totalmente definida, use o tipo **any** para **value**, ao tentar passar outro tipo (como um **booleano**) para este parâmetro, fará com que o TypeScript lance um erro, pois somente as assinaturas sobrecarregadas são usadas para verificação de tipo. Em um caso em que mais de uma assinatura corresponderia a uma determinada chamada, a primeira sobrecarga listada no código-fonte vencerá:

```rb
function numberStringSwap(value: any): any;
function numberStringSwap(value: number): string;
 
numberStringSwap('1234');
```

Aqui, embora a segunda assinatura de sobrecarga seja mais específica, a primeira será usada. Isso significa que você sempre precisa verificar se o seu código-fonte está devidamente ordenado para que as sobrecargas preferidas sejam listadas primeiro.

As sobrecargas de função também funcionam em literais, interfaces e classes de tipo de objeto:

```rb
let numberStringSwap: {
  (value: number, radix?: number): string;
  (value: string): number;
};
```

Observe que, como estamos definindo um tipo e não estamos criando uma declaração de função real, a implementação real de **numberStringSwap** é omitida.

O TypeScript também permite especificar diferentes tipos de retorno quando uma string exata é fornecida como um argumento para uma função. Por exemplo, a [declaração de ambiente **createElement**](https://typescript.codeplex.com/SourceControl/latest#typings/lib.d.ts) do TypeScript para o [método do DOM se parece com isto](https://typescript.codeplex.com/SourceControl/latest#typings/lib.d.ts):

```rb
createElement(tagName: 'a'): HTMLAnchorElement;
createElement(tagName: 'abbr'): HTMLElement;
createElement(tagName: 'address'): HTMLElement;
createElement(tagName: 'area'): HTMLAreaElement;
// ... etc.
createElement(tagName: string): HTMLElement;
```

Isso significa que, em TypeScript, quando você chama **document.createElement(‘video’)**, por exemplo, o TypeScript sabe que o valor de retorno é um **HTMLVideoElement** e será capaz de garantir que você esteja interagindo corretamente com a API de vídeo DOM sem a necessidade de afirmar o tipo.

## Tipos rigorosos para Funções em TS 2.6+

Por padrão, o TypeScript é negligente ao verificar os parâmetros do tipo de função. Considere o seguinte exemplo:

```rb
class Animal { breath() { } }
class Dog extends Animal { bark() {} }
class Cat extends Animal { meow() {} }
 
let f1: (x: Animal) => void = (x: Animal) => x.breath();
let f2: (x: Dog) => void = (x: Dog) => x.bark();
let f3: (x: Cat) => void = (x: Cat) => x.meow();
 
f1 = f2;
const c = new Cat();
f1(c); // Erro no Runtime
```

Se fôssemos definir `f1 = f2`, isso resultaria em um erro em tempo de execução se nós passássemos `Cat` para a função, mesmo que `Cat` seja um Animal, ele tentaria chamar `.bark`, o que os gatos não conseguem fazer. No entanto, o TypeScript não apresentará um erro por padrão. Isso ocorre porque os tipos de função no TypeScript são [bivariantes](https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-function-parameters-bivariant). Para corrigir isso, a equipe do TypeScript adicionou um novo sinalizador `--strictFunctionTypes`, que lançará um erro na atribuição `f1 = f2`.

## Tipos Genéricos

O TypeScript inclui o conceito de [tipos genéricos](https://en.wikipedia.org/wiki/Generic_programming), que pode ser interpretado como um tipo que deve incluir ou fazer referência a outro tipo para ser concluído. Dois tipos genéricos muito comuns que você vai encontrar são **Array** e **Promise**.

A sintaxe de um tipo genérico é `GenericType`. Por exemplo, um tipo "array de strings" seria `Array` e um tipo "promise que resolve para um número" seria `Promise`. Tipos genéricos podem exigir mais de um tipo específico como `Converter`, mas isso é extremamente incomum. Os marcadores de posição de tipos dentro dos colchetes são chamados de **parâmetros de tipo**. Ao contrário dos tipos de objetos não genéricos, os tipos genéricos só podem ser criados com interfaces ou classes.

Como arrays são o tipo mais comum de tipo genérico, é mais fácil explicar como criar seus próprios tipos genéricos usando uma interface parecida com um array como exemplo:

```rb
interface Arrayish<T> {
  map<U>(callback: (value: T, index: number, array: Arrayish<T>) => U, thisArg?: any): Array<U>;
}
```

Neste exemplo, **Arrayish** é definido como um tipo genérico com um único método **map**, que corresponde ao método **Array#map** do ECMAScript 5. O método **map** tem um parâmetro de tipo próprio `U`, que é usado para indicar que o tipo de retorno da função de *callback* precisa ser do mesmo tipo que o valor de retorno de **map**.

Seria algo como isto:

```rb
const arrayOfStrings: Arrayish<string> = [ 'a', 'b', 'c' ];
 
const arrayOfCharCodes: Arrayish<number> = arrayOfStrings.map(function (value: string): number {
  return value.charCodeAt(0);
});
```

Aqui, **arrayOfStrings** é definido como sendo um **Arrayish** contendo strings, e **arrayOfCharCodes** é definido como sendo um **Arrayish** contendo números. Chamamos **map** no array de strings, passando uma função *callback* que retorna números. Se o *callback* fosse alterado para retornar uma string ao invés de um número, o compilador geraria um erro informando que os tipos não são compatíveis, pois **arrayOfCharCodes** é explicitamente tipado e faz uso de um parâmetro de tipo para determinar o valor retornado pelo *callback*, garantindo a compatibilidade no compilador.

Como arrays são um caso comum de tipos genéricos, TypeScript fornece uma forma abreviada para arrays: `SpecificType[]`. Perceba porém, que a ambigüidade pode surgir ocasionalmente ao usar essa abreviação. Por exemplo, o tipo é `() => boolean[]`, um array de funções que retorna booleanos ou é uma única função que retorna um array de booleanos?

A resposta correta é a última; para representar o primeiro, você precisaria escrever `Array<() => boolean>` ou `{ (): boolean; }[]`.

O TypeScript também permite que os parâmetros de tipo sejam restritos a um tipo específico usando a palavra-chave `extends` dentro do parâmetro de tipo, como `interface PointPromise`. Nesse caso, somente um tipo que correspondesse estruturalmente a `Point` poderia ser usado com esse tipo genérico; tentar usar outra coisa, tipo `string`, causaria um erro de tipo.

Na versão 2.3, o Typescript adicionou a capacidade de declarar um tipo padrão para tipos genéricos. Isso é muito útil para funções em que o tipo de retorno depende de um parâmetro, mas você deseja que o parâmetro seja opcional. Por exemplo, se quiséssemos uma função que criasse uma **Arrayish** baseada nos argumentos passados mas com padrão para **string** quando nenhum argumento fosse passado, antes de 2.3 teríamos que escrever:

```rb
function createArrayish(): Arrayish<string>;
function createArrayish<T>(...args: T[]): Arrayish<T>;
function createArrayish(...args: any[]): Arrayish<any> {
    return args;
}
```

A partir da versão 2.3+, podemos escrever:

```rb
function createArrayish<T = string>(...args: T[]): Arrayish<T> {
    return args;
}
```

## Tipos de União

O tipo de união é usado para indicar que um parâmetro ou variável pode conter mais de um tipo. Por exemplo, se você quiser ter uma função como **document.getElementById**, mas que também permita que você passe um elemento, como a função **byId** do Dojo, você poderia fazer isso usando um tipo de união:

```rb
function byId(element: string | Element): Element {
  if (typeof element === 'string') {
    return document.getElementById(element);
  }
  else {
    return element;
  }
}
```

O TypeScript é inteligente o suficiente para tipar contextualmente a variável **element** dentro do bloco **if** para ser do tipo **string** e para ser do tipo **Element** no bloco **else**. O mecanismo de redução de tipos é chamado de Guardas de Tipo (*Type Guards*).

## Tipos de Intersecção

Os tipos de interseção exigem que o valor atenda ao contrato de todos os membros do tipos. Por exemplo:

```rb
interface Foo {
    name: string;
    count: number;
}
 
interface Bar {
    name: string;
    age: number;
}
 
export type FooBar = Foo & Bar;
```

Uma ressalva é que você pode acidentalmente criar tipos inutilizáveis:

```rb
interface Foo {
    count: string;
}
 
interface Bar {
    count: number;
}
 
export type FooBar = Foo & Bar;
/* FooBar.count é do tipo \`string & number\` */
```

## Tipando o valor de “this”

O contexto ou valor de **this** em uma função, método, classe ou interface pode ser definido. Em uma função ou método, **this** é um falso primeiro parâmetro. Você também pode usar parâmetros **this** para declarar como *callbacks* são chamados.

Para evitar reverter o comportamento de tipagem de **this** da versão anterior do TypeScript, você pode usar o sinalizador `--noImplicitThis` no compilador.

## Tipos Mapeados em TS 2.1+

Os Tipos Mapeados permitem a criação de novos tipos com base nos tipos existentes, mapeando efetivamente um tipo existente e retornando um novo. Isso permite a transformação de cada propriedade de um tipo existente em um novo, reduzindo a duplicação de tipos. Um tipo de exemplo pode ser um chamado **Stringify**, que pegará um tipo **T** e transformará cada propriedade desse tipo em um valor seja `string`:

```rb
type Stringify<T> = {
    [P in keyof T]: string;
};
 
interface Point { x: number; y: number; }
 
type StringPoint = Stringify<Point>;
 
const pointA: StringPoint = { x: '4', y: '3' };
// válido
```

## Tipos “Mapped”, “Partial”, “Readonly”, “Record” e “Pick” em TS 2.1+

*Partial*, *Readonly*, *Record* e *Pick* são tipos mapeados que são tão comuns que o TypeScript fornece isso para você. Um tipo *Parcial* é aquele em que tomamos um tipo existente, mas todas as suas propriedades são opcionais. Isso é comum para APIs que aceitam um pacote de propriedades como um parâmetro:

```rb
setState(this: StoreMixin, newState: Partial<State>): void {
    const { properties: { store, id } } = this;
 
    if (id || newState['id']) {
        store.patch(assign( { id }, newState))
            .then(() => id ? store.get(id) : store.fetch())
            .then((state: State) => {
                replaceState(this, state);
            });
    }
    else {
        throw new Error('Unable to set state without a specified \`id\`');
    }
}
```

Com os tipos *Mapped*, podemos simplificar a sintaxe para expressar isso, iterando sobre o tipo original usando `keyof`, como uma forma de criar rapidamente o novo tipo parcial. Os tipos mapeados também são úteis para transformar tipos. Por exemplo, transformando um grupo de propriedades síncronas em instâncias de Promise:

```rb
type ToPomise<T> = { [K in typeof T]: Promise<T[K]> };
```

O TypeScript 2.8 adiciona a capacidade de adicionar ou remover modificadores `readonly` ou `?` nas propriedades mapeadas. Isso é feito usando `+` e `-` para indicar se o modificador deve ser adicionado ou removido:

```rb
type MutableRequired<T> = { -readonly [P in keyof T]-?: T[P] };
type ReadonlyPartial<T> = { +readonly [P in keyof T]+?: T[P] };
 
interface Point { readonly x: number; y: number; }
 
const pointA: ReadonlyPartial<Point> = { x: 4 };
pointA.y = 3; // Erro: readonly
 
const pointB: MutableRequired<Point> = { x: 4, y: 3 };
pointB.x = 2; // Válido
```

O TypeScript 3.1 também introduz a capacidade de mapear os tipos de tupla e retornar um novo tipo de tupla. Considere o exemplo a seguir, onde um tipo de tupla para `Point` é definido. Suponha que, em alguns casos, os pontos sejam realmente Promises que resolvam os objetos `Point`. O TypeScript permite a criação do último tipo a partir do primeiro:

```rb
type ToPromise<T> = { [K in typeof T]: Promise<T[K]> };
type Point = [ number, number ];
type PromisePoint = ToPromise<Point>;
 
const point: PromisePoint = [ Promise.resolve(2), Promise.resolve(3) ]; // Válido
}
```

## Tipos Condicionais em TS 2.8+

Os tipos condicionais permitem que um tipo seja definido dinamicamente com base em uma condição fornecida. Todos os tipos de condicionais seguem o mesmo formato: `T extends U ? X : Y`. Isso deve parecer familiar para você, pois é a sintaxe de uma declaração ternária. O que esta declaração significa é que se `T` é atribuível a `U`, então defina o tipo para `X`. Caso contrário, defina o tipo para `Y`. Isso pode parecer simples no começo, mas é uma maneira muito poderosa de garantir que os tipos apropriados sejam fornecidos para o seu código.

Considere o seguinte exemplo em que gostaríamos de definir tipos para uma função que aceita um número ou uma sequência.

```rb
declare function addOrConcat(x: number | string): number | string;
```

Os tipos aqui são suficiente, mas não transmitem verdadeiramente o significado ou a intenção do código. Se o argumento é um `number` então o tipo de retorno também será `number`, e da mesma forma para `string`. Para corrigir isso, podemos usar a sobrecarga de funções:

```rb
declare function addOrConcat(x: string): string;
declare function addOrConcat(x: number): number;
declare function addOrConcat(x: number | string): number | string;
```

No entanto, temos que digitar muito e pode ser tedioso mudar no futuro. Aqui entra os tipos condicionais! Usando a sintaxe ternária dos tipos condicionais acima, podemos simplificar nossa assinatura de função para o seguinte:

```rb
declare function addOrConcat<T extends number | string>(x: T): T extends number ? number : string;
```

Esta assinatura de função está usando tipos genéricos, indicando que `T` será um `number` ou um `string`. Este será o valor para o argumento. Em seguida, os tipos condicionais são usados para determinar o tipo de retorno, informando que a função retornará um `number` se um for passado, caso contrário, uma `string`.

O TypeScript também vem com alguns tipos condicionais comuns que servem para lidar com situações de uso de tipos condicionais, mostrando seu verdadeiro poder.

- `Exclude`: excluir de `T` qualquer coisa que seja atribuível a `U`
- `Extract`: extrair de `T` qualquer coisa que seja atribuível a `U`
- `NonNullable`: excluir `null` e `undefined`
- `ReturnType`: obter o tipo de retorno de uma função
- `InstanceType`: obter o tipo de instância de uma função construtora
```rb
type ExcludeExample = Exclude<string | number | Point, string | Point>; // number
type ExtractExample = Extract<string | number | Point, string | Point>; // string | Point
type NonNullableExample = NonNullable<string | number | null | undefined | void>; // string | number
type ReturnTypeExample = ReturnType<() => boolean>; // boolean
 
class Renderer {}
type InstanceOfExample = InstanceType<typeof Renderer>; // Renderer
```

## Guardas de Tipo

*NOTA: Em inglês conhecidos como — type guards*

Guardas de tipo permitem o limitar os tipos dentro de um bloco condicional. Isso é essencial quando se trabalha com tipos que podem ser uniões de dois ou mais tipos ou onde o tipo não é conhecido até o tempo de execução. Para fazer isso de uma maneira que também é compatível com o código JavaScript que será executado em tempo de execução, o sistema de tipos do TypeScript utiliza os operadores `typeof`, `instanceof`, e `in` (a partir do TS 2,7+) do JavaScript. Dentro de um bloco condicional usando uma dessas verificações, é garantido que o valor verificado é desse tipo e os métodos que existiriam nesse tipo podem ser usados com segurança.

### Utilizando “typeof” como guarda de tipos

O guarda de tipo `typeof` irá tipar o resultado utilizando o operador do JavaScript `typeof`. Se a execução entrar no bloco condicional, o TypeScript pode assumir corretamente que o valor é do tipo que está sendo verificado. No entanto, se a execução continuar no bloco `else`, o TypeScript pode assumir que o valor não é desse tipo e, no caso de um tipo de união, é a alternativa:

```rb
function lower(x: string | string[]) {
    if (typeof x === 'string') {
        // \`x\` é garantido ser uma \`string\`, podemos utilizar \`.toLowerCase\`
        return x.toLowerCase();
    } else {
        // caso contrário, \`x\` é um array de strings e podemos utilizar \`.reduce\`
        return x.reduce((val: string, next: string) => {
            return val += \`, ${next.toLowerCase()}\`;
        }, '');
    }
}
```

### Utilizando “instanceof” como guarda de tipos

O guarda de tipo `instanced` usará o operador `instanceof` do JavaScript para restringir os tipos dentro de uma instrução condicional. Assim como o uso de `typeof` acima, se o resultado desse tipo de verificação for verdadeiro, o TypeScript pode inferir corretamente que a variável em questão é desse tipo dentro do bloco condicional.

```rb
function clearElement(element: string | HTMLElement) {
    if (element instanceof HTMLElement) {
        // garantimos que \`element\` é do tipo \`HTMLElement\`
        // então podemos acessar a propriedade \`.innerHTML\` 
        element.innerHTML = '';
    } else {
        // caso contrário, \`element\` é uma \`string\` e podemos passá-la diretamente para \`document.querySelector\`
        const el = document.querySelector(element);
        el && el.innerHTML = '';
    }
}
```

### Utilizando “in” como guarda de tipos

Esse tipo de proteção restringe o tipo dentro de uma condição, verificando se existe uma propriedade na variável. Se o resultado for `true`, o tipo de variável será restringido para corresponder ao tipo que contém o valor verificado.

```rb
interface Point {
    x: number;
    y: number;
}
 
interface Point3d extends Point {
    z: number;
}
 
function plot(point: Point) {
    if ('z' in point) {
        // point é um \`Point3D\`
        // ...
    } else {
        // point é um \`Point\`
        // ...
    }
}
```

## Classes

Um dos principais recursos do TypeScript que ainda precisamos discutir é a sintaxe de herança baseada em classes. O sistema de classes no TypeScript usa um modelo de herança única que deve ser familiar a qualquer programador que tenha trabalhado com qualquer linguagem baseada em classes. É importante observar que as classes JavaScript são, basicamente, um açúcar sintático sobre o sistema de herança baseado em protótipo e não introduzem um novo modelo de herança orientado a objeto ao JavaScript.

Uma definição básica de classe é assim:

```rb
class Proxy {
  constructor(kwArgs: {}) {
    for (let key in kwArgs) {
      this[key] = kwArgs[key];
    }
  }
 
  get(key: string):any {
    return this[key];
  }
 
  set(key: {}): void;
  set(key: string, value: any): void;
  set(key: any, value?: any): void {
    // ...
  }
}
```

Na maior parte, as classes no Typescript são semelhantes às classes no ES2015. O método especial `constructor` representa a função JavaScript usada como construtor quando compilada de volta ao JavaScript. Se desejado, esta função pode retornar um valor para usar como a instância, assim como o JavaScript, mas ao contrário de todos os outros métodos de uma classe, `constructor` não pode ter um tipo de retorno definido; o tipo de retorno do método construtor é sempre a própria classe.

A subclasse funciona como outros sistemas de herança baseados em classes, usando a palavra-chave `extends` para criar um subtipo e o identificador `super` para se referir à superclasse:

```rb
class Stateful extends Proxy {
  constructor(kwArgs: {}) {
    super(kwArgs);
  }
 
  get(key: string): any {
    let getter: string = '_' + key + 'Getter';
    return this[getter] ? this[getter]() : super.get(key);
  }
}
```

Onde o TypeScript difere das classes do ES2015 atualmente está no uso de campos não-método, no entanto, há [uma proposta do estágio 3 para adicionar isso ao JavaScript](https://github.com/tc39/proposal-class-fields). Classes em TypeScript pode também definir as propriedades como sendo `private`, `protected` e/ou `static`:

```rb
class Animal extends Stateful {
  protected _happy: boolean;
 
  pet(): void {
    this._happy = true;
  }
}
 
class Dog extends Animal {
  static isDogLike(object: any): boolean {
    return object.bark && object.pet;
  }
 
  private _loudBark: boolean;
 
  bark(): string {
    let noise = this._happy ? 'woof' : 'grr';
    if (this._loudBark) {
      noise = noise.toUpperCase();
    }
 
    return noise;
  }
}
```

Devido a privacidade da propriedade ser uma restrição de tempo de compilação e não uma restrição de tempo de execução, é uma boa idéia continuar seguindo as convenções de JavaScript para propriedades `private` e prefixar com um sublinhado, caso seu código TypeScript compilado for consumido por alguém que esteja escrevendo JavaScript puro.

Os valores padrão da propriedade também podem ser especificados em uma definição de classe. O valor padrão de uma propriedade pode ser qualquer expressão de atribuição, não apenas um valor estático, e será executada toda vez que uma nova instância for criada:

```rb
class DomesticatedDog extends Dog {
  age: number = Math.random() * 20;
  collarType: string = 'leather';
  toys: Toy[] = [];
}
```

No entanto, existem algumas advertências que vêm com a definição de propriedades padrão dessa maneira. Notavelmente, se você definiu uma função construtora em uma subclasse, você deve chamar `super()` antes de qualquer outra coisa dentro do construtor, o que significa que você não pode executar operações antes que o construtor da superclasse seja executado, e as propriedades padrão de sua subclasse não serão definidas até o construtor da superclasse ser executado. A alternativa para isso é simplesmente definir os padrões na função construtora:

```rb
class DomesticatedDog extends Dog {
  age: number;
  collarType: string;
  toys: Toy[];
 
  constructor(kwArgs: {}) {
    this.age = Math.random() * 20;
    this.collarType = 'leather';
    this.toys = [];
    super(kwArgs);
  }
}
```

As propriedades padrão são sempre definidas pelo TypeScript da mesma maneira acima, o que significa que essas duas definições de classe são equivalentes da perspectiva de como as propriedades padrão são definidas. Como resultado, você não precisa se preocupar com objetos ou arrays sendo compartilhados entre instâncias, [como aconteceria se eles estivessem especificados no protótipo](https://medium.com/@oieduardorabelo/javascript-propriedades-est%C3%A1ticas-com-heran%C3%A7a-em-classes-8c2123348fa6), o que ajuda em um ponto comum de confusão para pessoas que usam bibliotecas de herança em JavaScript “class-like” que especificam propriedades no protótipo.

## Mixins e Herança múltipla

No TypeScript, as interfaces também podem estender classes, o que pode ser útil ao compor tipos complexos, especialmente se você estiver acostumado a escrever mixins e usar herança múltipla:

```rb
interface Chimera extends Dog, Lion, Monsterish {}
 
class MyChimera implements Chimera {
  bark: () => string;
  roar: () => string;
  terrorize(): void {
    // ...
  }
 
  // ...
}
MyChimera.prototype.bark = Dog.prototype.bark;
MyChimera.prototype.roar = Lion.prototype.roar;
```

Neste exemplo, temos duas classes (`Dog`, `Lion`) e uma interface (`Monsterish`) foram combinadas em uma nova interface `Chimera` e, em seguida, uma classe `MyChimera` implementa essa interface, delegando de volta para as funções corretamente das classes originais. Observe que os métodos `barke` e `roar` são realmente definidos como propriedades ao invés de métodos; isso permite que a interface seja "totalmente implementada" pela classe, apesar da implementação real não existir de fato dentro da definição de classe. Esse é um dos casos de uso mais avançados para classes no TypeScript, mas permite uma reutilização de código extremamente robusta e eficiente quando usado corretamente.

O TypeScript 2.2 fez várias alterações para facilitar o trabalho com mixins e classes de composição. Ao invés de adicionar uma nova gramática a classes que posteriormente possam entrar em conflito com a próxima versão do ES, a equipe do TypeScript obteve esse resultado removendo algumas das restrições nas classes. Por exemplo, agora é possível estender de um valor que constrói um tipo de interseção. O modo como as assinaturas dos tipos de interseção se combinam também mudou.

## Enumeráveis

*NOTA: Em inglês conhecidos como — enumerables*

O TypeScript adiciona um tipo básico de `enum` que permite uma representação eficiente de conjuntos de valores explícitos. Por exemplo, da especificação do TypeScript, uma enumeração de estilos possíveis para aplicar ao texto pode ter esta aparência:

```rb
enum Style {
  NONE = 0,
  BOLD = 1,
  ITALIC = 2,
  UNDERLINE = 4,
  EMPHASIS = Style.BOLD | Style.ITALIC,
  HYPERLINK = Style.BOLD | Style.UNDERLINE
}
 
if (value & Style.BOLD) {
  // cuidando de BOLD, EMPHASIS, e HYPERLINK
}
```

Quando os valores do enumerador são inteiros, você pode usar, como mostrado acima, o operador bitwise OR para criar valores de bitmask e usar o operador bitwise AND para verificar se um valor está definido no bitmask. Como acima, você também pode definir explicitamente o valor de um membro de um enum usando a atribuição. Enums que usam operadores bitwise devem ser especificados para usar explicitamente valores 2n para cada item; enums são normalmente valores simples indexados em 0.

Antes da versão 2.4, os valores de enumeradores eram restritos pelo compilador a números. Na versão 2.4 e além, os valores de enumeradores podem ser strings:

```rb
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
```

Os tipos numéricos enumeráveis no TypeScript são mapas bidirecionais, portanto, você pode determinar o nome de um valor enumerado pesquisando-o no objeto enum. Usando o exemplo `Style` acima, `Style[1]` iria resultar para `'BOLD'`. As enums inicializadas por string não podem ser mapeadas inversamente.

O tipo `const enum` é o mesmo que um enumerável regular, exceto que o compilador substitui todas as referências a valores enumeráveis por valores literais ao invés de gerar código representando as estruturas enumeráveis no tempo de execução.

## Aliases — “Pseudônimos” em Português

Aliases de tipos mais robustos podem ser usados, que usam a palavra-chave `type` para fornecer o mesmo tipo de alias, mas também podem suportar a nomeação de outros tipos primitivos:

```rb
import * as foo from './foo';
type Foo = foo.Foo;
type Bar = () => string;
type StringOrNumber = string | number;
type PromiseOrValue<T> = T | Promise<T>;
 
function convert(value: StringOrNumber): string {
  return String(value);
}
 
function when<T>(value: PromiseOrValue<T>): Promise<T> {
  if (value instanceof Promise) {
    return value;
  }
  return Promise.resolve(value);
}
```

## Declarações de Ambiente

Para usar o código JavaScript existente com o TypeScript, o compilador precisa saber quais módulos e variáveis vêm de fora do TypeScript. Para fazer isso, o TypeScript introduz o conceito de uma declaração de ambiente — uma declaração especial que fornece informações de tipo sobre APIs que existem “no ambiente” de execução do aplicativo.

Declarações de ambiente são criadas adicionando os prefixos normais do TypeScript como `module`, `var`, `let`, `const`, `function`, `class`, ou `enum` declarado com a palavra-chave `declare`, o que indica ao compilador que a instrução se destina para o tipo de ambiente. Como as declarações de ambiente existem inteiramente para o benefício do sistema de tipos, elas nunca incluem nenhum código de implementação e não geram código na compilação.

Por exemplo, se você quisesse escrever código no TypeScript que usasse o jQuery, a função global “jQuery” precisaria ser definida usando uma declaração de ambiente. Na verdade, muitas declarações de ambiente para várias bibliotecas JavaScript, incluindo jQuery, podem ser encontradas no projeto [DefinitelyTyped](http://definitelytyped.org/). O `jquery.d.ts` de DefinitelyTyped é assim:

```rb
// ...
 
  (selector: string, context?: any): JQuery;
  (element: Element): JQuery;
  (object: {}): JQuery;
  (elementArray: Element[]): JQuery;
  (object: JQuery): JQuery;
  (func: Function): JQuery;
  (): JQuery;
 
  // ...
}
 
declare let jQuery: JQueryStatic;
declare let $: JQueryStatic;
```

Como as declarações de ambiente não geram código, elas normalmente são colocadas em arquivos com uma extensão de `.d.ts`. Qualquer arquivo que termina em `.d.ts` ao invés de `.ts` não vai gerar um módulo compilado correspondente, assim, essa extensão de arquivo também pode ser útil para os módulos normais do TypeScript que contêm apenas definições de interface.

Conforme mencionado anteriormente quando discutimos importações e exportações, os módulos também podem ser definidos como declarações de ambiente, o que torna possível consumir o código JavaScript que já está adequadamente modularizado, como o [Dojo Toolkit](https://dojotoolkit.org/):

```rb
declare module 'dojo/_base/array' {
  let array: {
    every<T>(array: T[], callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
    filter<T>(array: T[], callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[];
    forEach<T>(array: T[], callback: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    indexOf<T>(array: T[], value: T, fromIndex?: number, findLast?: boolean): number;
    lastIndexOf<T>(array: T[], value: T, fromIndex?: number): number;
    map<T>(array: T[], callback: (value: T, index: number, array: T[]) => T, thisArg?: any): T[];
    some<T>(array: T[], callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
  };
  export = array;
}
```

Quando você está escrevendo um código TypeScript que precisa acessar as declarações de ambiente, um comentário de referência especial deve ser adicionado ao topo do módulo que precisa dele:

```rb
/// <reference path="jquery" />
```

O caminho fornecido no comentário de referência pode ser um ID de módulo padrão ou um caminho para um arquivo. Se você usar um caminho do sistema de arquivos e obter um erro sobre o fato de o TypeScript não conseguir resolver o caminho, certifique-se de não ter digitado acidentalmente `.ts` como `.js`.

Ao escrever um código modular, os comentários de referência só devem ser usados para importar declarações de ambiente; Todas as outras dependências devem ser carregadas usando a palavra-chave `import`. Felizmente, as dependências carregadas via `import` que nunca são usadas, ou que são usadas apenas para verificações em tempo de compilação, serão inteligentemente excluídas na saída do compilador.

## Carregador de Plugins

Se você é um usuário AMD, provavelmente estará acostumado a trabalhar com um [carregador de plugins](https://github.com/amdjs/amdjs-api/wiki/Loader-Plugins) (`text!` e afins). O TypeScript não suporta `import` desses tipos de módulos dinâmicos automaticamente, mas possui um mecanismo para habilitar seu uso.

Para usar um plugin do AMD, você precisará usar a diretiva `<amd-dependency>`. No TypeScript 1.4 e anterior, um hipotético uso de um plugin `text!` é semelhante ao seguinte:

```rb
/// <amd-dependency path="text!foo.html" />
declare let require: (moduleId: string) => any;
const foo: string = require('text!foo.html');
```

Existe um atributo `name` para a diretiva que facilita o uso de plugins AMD:

```rb
/// <amd-dependency path="text!foo.html" name="foo" />
declare let foo: string;
```

O TypeScript 2.0+ simplificou bastante isso através da adição de módulos *wildcard*. Para suportar carregadores de plugins de módulos no AMD ou SystemJS, é necessário ser capaz de digitar o módulo, com o entendimento de que o nome do módulo é variável através do parâmetro que é passado para o plugin. Por exemplo, isso possibilita suportar o carregamento de arquivos HTML, JSON e outros recursos com mais flexibilidade.

```rb
declare module "json!*" {
    let json: any;
    export default json;
}
 
import d from "json!a/b/bar.json";
// lookup:
//    json!a/b/bar.json
//    json!*
```

## React e suporte ao JSX

Diversas melhorias foram feitas ao longo dos anos para o TypeScript melhorar o suporte à sintaxe JSX que é popularizada pelo React. Mais informações podem ser encontradas na [documentação do suporte ao JSX](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#jsx-support).

## Análise de controle de fluxo

A análise de controle de fluxo ajuda a detectar e evitar erros comuns. Alguns exemplos adicionados de recursos de análise incluem: código inacessível, parâmetros não utilizados, retornos implícitos, *fall-throughs* de declarações `case`, restrição e ampliação de tipos alinhados com a lógica do seu código, verificação rígida de nulos e restrição literal de string e número em igualdade e melhor inferência para tipos literais. Muitas dessas mudanças podem ser substituídas com bandeiras do compilador, como `--allowUnreachableCode`, `--allowUnusedLabels`, `--noImplicitReturns`, `--noImplicitAny`, `--noFallthroughCasesInSwitch`, `--strictNullChecks`, etc.

## Conclusão

Nosso [artigo avançado sobre o TypeScript](http://www.sitepen.com/blog/2014/08/22/advanced-typescript-concepts-classes-types/) explora mais sobre como usar o sistema de classes do TypeScript e também explora alguns recursos avançados, como símbolos e decoradores.

Como o TypeScript continua evoluindo, ele traz consigo não apenas tipagem estática, mas também novos recursos das especificações atuais e futuras do ECMAScript. Isso significa que você pode começar a usar o TypeScript com segurança hoje, sem se preocupar com a necessidade de reformular o código em alguns meses, ou se precisará alternar para um novo compilador para aproveitar os melhores e mais recentes recursos de idioma. Alterações de introduzem alguma quebra de sintaxe, são [documentadas no wiki TypeScript](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes).

Se você quiser obter mais detalhes sobre qualquer um dos recursos descritos neste guia, a [Especificação da linguagem TypeScript](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md) é a fonte da linguagem. O [Stack Overflow](http://stackoverflow.com/questions/tagged/typescript) também é um excelente lugar para discutir sobre o TypeScript e fazer perguntas, e o [Manual do TypeScript](http://www.typescriptlang.org/Handbook) também pode fornecer algumas informações adicionais além do que este guia fornece.

## Continuando sua aprendizagem

Acreditamos que é mais importante do que nunca aprender os fundamentos do ES2015+ e do TypeScript. Com as primeiras mudanças substanciais no idioma em quase 20 anos, agora é a hora de aprender como aproveitar eficientemente essas alterações em nossa linguagem principal para a criação de aplicativos da Web. SitePen tem o prazer de fornecer a você ou sua empresa [consultoria para desenvolver sua próxima aplicação](http://www.sitepen.com/development/index.html); basta nos [enviar um email](http://www.sitepen.com/site/contact.html) para começar!

## ⭐️ Créditos

- [The Definitive TypeScript Guide](https://www.sitepen.com/blog/2018/10/29/update-the-definitive-typescript-guide/), escrito originalmente por [Nick Nisi](https://twitter.com/nicknisi) no blog do [SitePen](https://twitter.com/sitepen)

## More from Eduardo Rabelo

## Recommended from Medium

[

See more recommendations

](https://medium.com/?source=post_page---read_next_recirc--1a63b04259cc---------------------------------------)