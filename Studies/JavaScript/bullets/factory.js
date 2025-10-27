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
const jogador2 = criarJogador("Sofia", 15)
jogador1.saudacao()
jogador2.saudacao()