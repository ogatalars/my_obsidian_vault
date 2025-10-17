/* BASIC DA PROGRAMAÇÂO -> 
1 - Fundamentos da linguagem de programação; 
2 - Debbug logs e breakpoint; 
3 - CRIAR UMA API REST DO ZERO; 
4 - Implementar operação CRUD; 
5 - Autentificação e autorização logins e senhas; 
6 - Banco de dados; 
7 - GIT e github;
8 - Escrever testes com unitários; 
9 - DESIGN PATTERNS BÁSICOS; 
10 - Documentação
*/



const nome = "Alice" // string + const 
let idade = 20 // number
let ehEstudante = true; //boolean

// Variáveis são "contêineres" para armazenar dados. Em JS, usamos var (antigo), let (valores que podem mudar) e const (valores constantes). Os tipos de dados primitivos são: string, number, boolean, null, undefined, symbol e bigint.

const pais = 'Brasil'
const cidade = 'São Paulo'
let populacao = 1313123122 
console.log(`Eu sou do ${pais}, moro em ${cidade} que tem uma população de ${populacao}`);

// Estruturas Condicionais e Operadores Conceito: Permitem que o código tome decisões. O if/else é a estrutura mais comum. Usamos operadores de comparação (>, <, ===, !==) e lógicos (&& - E, || - OU).

const nota = 7.6
if(nota >= 7.0) {
    console.log("Aprovado");
    else if(nota >= 5.0) {
        console.log("Recueraçao");
    } else {
        console.log("Reprovado");
    }
}

// Estrutura de repetição -> executar um bloco de código diversas vezes. O for é ideal quando sabemos o numero de iterações e o while é bom para quando não sabemos

for (let i = 1; i <= 5; i++) {
    console.log(`Contage de vezes: ${i}`)
}

const frutas = ['Maça', 'banana', 'abacaxi']

for (let i = 0; i < frutas.length; i++) {
    console.log(`Frutas: ${frutas[i]}`)
}

// Funções -> blocos de código que são reutilizáveis que realizam uma tarefa especifica. Elas podem receber parâmetros (que são na verdade entradas) e retornam um valor (quando tem return)

function somar(a, b) {
    return a + b;
}

const subtrair (a, b) => a - b // arrow function; 

const resultatdoSoma = somar(10, 5) // 15
const resultadoSub = subtrair (15, 5) // 10 

// Manipulação de ARRAYS 
// .map() Transforma cada item de uma array e retorna um novo array do mesmo tamanho. .filter() cria um novo array com todos os itens que passam em um teste; .reduce() executa uma função para cada item, resultando em um único valor final. 

const numeros = [
1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]; 

const dobrados = numeros.map(num => num * 2);
console.log(dobrados) 
const pares = numeros.filter(num => num % 2 === 0) // [2, 4]
const somaTotal = numeros.reduce((acc, num) => acc + num, 0) // mais complexo, ficar atento -> serve muito para somar coisas ao mesmo tempo 

// Objetos 

const usuarios = {
    nome: "sabrina",
    idade: 31, 
    empresa: "google",
    admin: false
}
// desestruturação

const {nome, idade} = usuario1
console.log(`${nome} tem ${idade} anos`)