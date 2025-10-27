// Factory é um padrão de design - uma receita que usamos para criar objeto 
// Em vez de usar uma classe e a palavra-chave NEW, uma factory é literalmente uma função normal que, quando chamada, constrói e retorna um objeto novinho 

function criarJogador(nome, nivel) {
    const jogador = {};
    // objeto vazio 
    jogador.nome = nome; 
    jogador.nivel = nivel;

    jogador.saudacao = function() {
        console.log(`Olá, eu sou ${jogador.nome} e estou no nível ${jogador.nivel}!`)
    }
    return jogador
}

// COMO USAMOS

const jogador1 = criarJogador("Alice", 99);
const jogador2 = criarJogador("Sofia", 15);
jogador1.saudacao()
jogador2.saudacao()

/*

A Ferramenta function (Factory Function):

Usamos uma função simples para fazer o "trabalho" de criar e retornar objetos.

Foi o nosso Exemplo 1 (criarJogador()).

É a forma mais simples e direta de aplicar o padrão.

A Ferramenta class (Factory Method):

Usamos uma classe, e colocamos um método dentro dela para fazer o "trabalho" de criar e retornar objetos.

Foi o nosso Exemplo 3 (a classe FabricaDeJogadores com o método criarJogador()).

Essa abordagem é mais estruturada e poderosa, usada em programas maiores.

*/

class FabricaDeUI {

    criarBotao(sistemaOperacional) {
        if(sistemaOperacional === 'windows') {
            return new BotaoWindows();
        } else if (sistemaOperacional === 'macos') {
            return new BotaoMacOs();

        } else {
            throw new Error('Sistema Operacional não suportado');
        }
    }
}

const meuSo = 'macos'
const fabrica = new FabricaDeUi();
