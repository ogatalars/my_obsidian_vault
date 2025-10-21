// 1 - Reversed array -> Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

//There’s a built-in array method called .reverse() that does a lot of this work for you, but you’re NOT allowed to use it here!
const reverseArray = (array) => {
    let reverse = []
    for(let i = array.length -1; i >= 0; i--) {
        reverse.push(array[i])
    }
    return reverse
}

/* greetAliens() Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”
*/ 

const greetAliens = (arr) => {
    for(let i = 0; i <= arr.length; i++) {
        console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
    }
}

/*
Sincrono (travado) => devemos esperar o retorno da função para a programação continuar a acontecer
Assincrono -> não devemos esperar, quando estiver pronto ele chega.
Promise -> ideia de promessa -> é um objeto que representa essa espera. É um container para um valor que ainda NÃO conhecemos. 
pending -> pendente -> estado inicial 
fulfiled -> realizada sucesso -> a operação foi concluiida
rejected -> a operação falhou 
fetch => É a ferramenta morderna do navegador para fazer requisições de rede (pedidos a um servidor/API). Quando usamos fetch() ele retorna IMEDIATAMENTE UMA PROMISE
async -> coloca antes de declarar uma função, avisa ao js que é operação assync
await -> dentro da função com async, na frente de qualquer coisa que retorne uma promise. 

*/

async function buscarUsuarioGitHub() {
    try{
        console.log("Iniciando uma busca...")
        const response = await fetch('https://api.github.com/users/google')
        const dados = await response.json();
        console.log("Busca concluída!");
        console.log("Nome do usuário:", dados.name);
        console.log("Biografia:", dados.bio);
    } catch(error) {
        console.error("erro: ", error);
    }
}

buscarUsuarioGitHub();

// Closure
function criarContador() {
  // 1. Esta variável 'contagem' vive dentro de 'criarContador'
  let contagem = 0;

  // 2. Esta função interna é criada.
  // Ela "enxerga" a variável 'contagem'
  const funcaoInterna = function() {
    contagem++; // Ela modifica a variável da "mochila"
    console.log(contagem);
  };

  // 3. A função pai retorna a função interna (e sua "mochila")
  return funcaoInterna;
}

// 4. Chamamos a função pai. Ela executa e morre.
// 'meuContador' agora é a 'funcaoInterna' com a "mochila"
const meuContador = criarContador();

// 5. Cada vez que chamamos 'meuContador',
// ele acessa e modifica a 'contagem' em sua mochila.
meuContador(); // Imprime: 1
meuContador(); // Imprime: 2
meuContador(); // Imprime: 3

// A variável 'contagem' está protegida. Eu não consigo acessá-la
// daqui de fora. console.log(contagem) daria erro.