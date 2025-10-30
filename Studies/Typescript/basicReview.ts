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

// Objetos => ao inves de criar objetos soltos, a gente define CONTRATO ou MOLDE sendo que -> 
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

const novoUsuario: IUsuario = { id: 1, nome: "Davi", ativo: true };
cadastrarUsuario(novoUsuario);

type TProduto = {
    nome: string; 
    preco: number; 
    readonly sku : string // readonly impede a modificação após a criação 

};

const meuProduto = TProduto = {
    nome: "Mouse", 
    preco: 150, 
    sku: "M123-ABC"
}

// Funções, união e generics 

// Parametros opcionais com ? e padrão = 

function formatarNome(nome: string, sobrenome?: string): string {
    if(sobrenome) {
        return `${nome} ${sobrenome}`
    }
    return nome;
}

function criarUsuario(nome: string, nivel: number = 1): IUsuario {
    return { id: Math.random(), nome: nome, ativo: true, nivel: nivel }; // Supondo que IUsuario aceite 'nivel'
}
// Podemos definir um type para uma função, o que é ótimo para callbacks.

type OperacaoMatematica = (a: number, b: number) => number;

const somar: OperacaoMatematica = (x, y) => x + y;

// Union | e & (que dá pra combinar múltiplos tipos em um só)

function imprimirID(id: string | number): void {
    if(typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

interface Cliente {
    nome: string; 
}
interface Pedido {
    idPedido: string;
    total: number; 
}

type ClienteComPedido = Cliente & Pedido

// Generics -> <T> Eles criam componentes (funções, classes, interfaces) que podem funcionar com qualquer tipo, mas sem perder a segurança de tipo (ao contrário do any). T é usado por convenção, mas pode ser qualquer nome.

function primeiroItemAny(arr: any[]): any {
    return arr[0];
}

// com generics -> MELHOR USAR GENERICS AO INVES DE ANY

function primeiroItem<T>(arr: T[]): T{
    return arr[0];
}