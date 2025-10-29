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

// void -> NAO RETORNA VALOR
function logarNoConsole(mensagem: string): void {
    console.log(mensagem)
}
function naoRetornaValor(numeroPrintado: number): void {
    console.log(numeroPrintado)
}

// never -> nunca retorna, ela PARA o app, mas retorna um never

function disparErro(erro:string): never {
    throw new Error(erro);
}

// Arrays -> 
// podemos declarar de duas maneiras -> tipo[] ou Array<tipo>
let numeros: number[] = [1,2,3,4,5,6];
numeros.push("6"); // ERRO: Argument of type 'string' is not assignable to parameter of type 'number'.
let nomes: string[] = ["Ariette", "Ama", "Will", "e", "Jesus", "Nicole"]

let notas: Array<number> = [10, 7.5, 9];
let frameWorks: Array<string> = ["React", "Vue", "Angular"]

// Objetos => ao inves de criar objetos soltos, a gente define CONTRATO ou MOLDE ssendo que -> 
// interface: Um contrato que define a forma de um objeto. Padrão 
// type: um apelido (alias) para qualquer tipo
interface IUsuario{
    id: number; 
    nome: string; 
    ativo: boolean; 
    email?: string // ? opcional o email
}

function cadastrarUsuario(usuario: IUsuario): void {
    console.log(`Cadastrando ${usuario.nome}  (ID: ${usuario.id})`)
}