// Typescript é um superset do JS, isso significa que ele adiciona tipos estáticos. 
// a principal diferença é que ele adiciona tipagem, que seria : tipo depois de uma variavel ou parâmetro de função.


let nome: string = "Sabrina"; 
let idade: number = 28; 
let possuiHobbies: boolean = true; 

// any: Desliga o ts, não usar
// unknown: o any mais seguro, usamos quando não sabemos o que será dado como tipo 
// void: representa funções que não retornam nada; 
// never: never acontece; 

let nomeProduto = 'Laptop';
let preco = 4500; 
let disponivel: boolean;


let coringa: any = 4; 
coringa = "agora sou uma string";
coringa.toUpperCase(); // funciona mas é bom evitar esse tipo de tipagem any

let misterio: unknown = 4
// A forma correta de usar 'unknown' é verificando o tipo
if (typeof misterio === 'string') {
  console.log(misterio.toUpperCase());
}