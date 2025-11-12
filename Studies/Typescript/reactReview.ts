/*
Pensar em react é diferente de codar em JS ou TS puro: 

1 - Programação declarativa em REACT x programação imperativa em JS PURO -> 
No caso de js nós damos ordens passo a passo. 
No caso do React nós descrevemos o estado final que você quer, "A tela deve ser assim" 

REACT = DECLARITVO 
JS = IMPERATIVO 

2 - JSX não é HTML e sim açucar sintático 
O Jsx parece html mas não é! ele é uma extensão para a sintaxe do JS que TRANSPILADA(convertida) para chamadas de função React.createElement()

const meuElemento = <h1 className="titulo">Olá, Mundo!</h1>;

o JS vê:

const meuElemento = React.createElement('h1', {className: 'titulo'}, 'Olá, mundo!');

Regras do JS -> variaveiis - insere JS dentro do JSX atraves de {}

const nome = "Alice"; 
const ehDia = true; 

return (
    <>
    <h1 className="titulo">Olá, {nome.toUpperCase()}</h1>
    <>
)

3 - Componentes e props (A comunicação)

componentes são os blocos de construção de React. São FUNÇÔES que começam com letras maiuscula que retornam em tese um JSX. Props(ou propriedades) são a forma de um componente pai passar dados para o componente filho 
Regra de Ouro: Props são somente leitura (imúveis). Um componente nunca deve modificar suas próprias props.
*/

// Exemplo de componente filho 
import React from 'react';

interface BotaoProps {
    texto: string; 
    cor?: 'primaria'
}

// tipamos as props na nossa função 
// usamos desestruturação ({texto}) para pegar a prop

export function Botao({texto, cor='primaria'}: BotaoProps){
    const className = `btn btn-${cor}`
    return <button className= {className}>{texto}</button>;
}

// exemplo de componente pai 

import {Botao } from './Botao'; 

function App() {
    // o componente pai passa para os filhos
    return (
        <div> 
        <h2> Meu app</h2>
        <Botao texto="Clique Aqui" cor="primaria">
        <Botao texto="Cancelar" cor="secundaria">
        </div>
    )
}

// O coração do React -> Estado e eventos 

/*
Hook -> useState => memória do componente 

Conceito (O "Porquê"): Por que não podemos usar let contagem = 0? Porque componentes são funções. Toda vez que o React re-renderiza, a função roda do zero, e sua let seria resetada.

useState é um "Hook" (um gancho) que "prende" um valor no React. Ele diz ao React: "Ei, guarde esse valor para mim. Se ele mudar (usando a função set...), eu quero que você re-renderize este componente."

Sintaxe: const [valor, setValor] = useState(valorInicial);

valor: A variável de estado (somente leitura).

setValor: A única função que você deve usar para atualizar o valor.

valorInicial: O valor na primeira renderização.

Sintaxe: const [valor, setValor] = useState(valorInicial);

valor: A variável de estado (somente leitura).

setValor: A única função que você deve usar para atualizar o valor.

valorInicial: O valor na primeira renderização.

*/

function Contador() {

    const [contagem, setContagem] = useState(0);

    function handleIncrement() {
        // correto: usar a função set
        setContagem(contagem + 1);
        // Forma "segura" (updater function):
    // Quando o novo estado depende do anterior,
    // é melhor passar uma função.
    // setContagem(contagemAnterior => contagemAnterior + 1);

    }
    return (
        <div>
        <p>Contagem: {contagem}</p>
        <button onClick= {handleIncrement}> Incrementar</button>
        </div>
    )
}


/* Useffect() -> 
Um componente React deve, idealmente, ser 'puro': para as mesmas props e estado, ele sempre retorna o mesmo JSX. MAS, e se quisermos fazer algo FORA do react como buscar dados de uma api (ex:fetch), mudar o titulo de uma página(document.title), configurar um timer(setTimeout)

Isso é um Efeito Colateral (Side Effect). O useEffect nos dá um local seguro para rodar esses efeitos depois que o React já renderizou o componente na tela.

sintaxe -> useEffect(()=> {efeitoAqui}, [dependencias])

A Função de Efeito: O código que você quer rodar.

O Array de Dependências: A parte mais importante. Controla quando o efeito roda.

[] (Array Vazio): O efeito roda apenas uma vez, quando o componente "monta" (aparece na tela pela primeira vez). Perfeito para buscar dados iniciais.

[variavel1, variavel2]: O efeito roda na montagem e toda vez que variavel1 ou variavel2 mudarem.

Sem array (não recomendado): O efeito roda em toda renderização.

*/

import React, {useState, useEffect} from 'react';

interface ITarefa {
    id: number;
    title: string;
    completed: boolean;
}

function BuscaTarefa() {
    // estados para dados, loading e erro
    const [tarefa, setTarefa] = useState<ITarefa | null> (null);
    const [loading, setLoading] = useState<boolean>(true);
    const [erro, setErro] = useState<string | null>(null);

    // efeito para buscar dados
    useEffect(() => {
        const fetchTarefa = async () => 
        {
            try {
                const responsa = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                const dados: ITarefa = await resposta.json();
                setTarefa(dados);
                
            }
            catch(e) {
                setErro('Falha ao buscar dados.')
            } finally {
                setLoading(false);
            }
        };

        fetchTarefa();
    }, []); // <- ARRAY VAZIO, effect de rodar apenas uma vez

    if(loading) return <p> Carregando.. </p>
    if (erro) return <p> {erro} </p>;
    if(!tarefa) return null; // ou <p> sem dados </p>

    return (
    <div>
      <h3>Tarefa: {tarefa.title}</h3>
      <p>Status: {tarefa.completed ? "Completa" : "Pendente"}</p>
    </div>
  );
}

// outro exemplo 

import React, {useState, useEffect } from 'react';

function TituloDinamico() {
    const [nome, setNome] = useState<string>("");

    // este efeito RODA toda vez que o nome mudar 
    useEffect(() => {
        document.title = `Ola, ${nome || 'visitante'}`
    }, [nome]); // <-- array de dependencia

    return (
        <input
        type"text"
        value={nome}
        onChange={e => setNome(e.target.value)}
        placeholder="Digite seu nome"
        />
    )
}

/*
Você não usa for loop no JS. Você usa o método .map() do JS para transformar um array de dados em um array de elementos React

 KEY => Esta é a regra mais importante. Ao renderizar uma lista, o React precisa de uma key (chave) única e estável para cada item. Isso ajuda o react a identificar o item que mudou, foi adicionado ou removido, otmizando a perfomance. Use o id do item, NUNCA o indice do ARRAY, se a lista puder mudar. 


 

*/

const frutas = ["banana", "Maça", "Laranja"]
return (
    <ul>
    {frutas.map(fruta => (
        <li key={fruta}>{frut}</li>
    ))}
    </ul>
)

// Em App.tsx
const produtos = [
  { id: 1, nome: "Laptop", preco: 4000 },
  { id: 2, nome: "Mouse", preco: 150 },
  { id: 3, nome: "Teclado", preco: 300 },
];

// (Usando o componente CardProduto do exercício anterior)
return (
  <div>
    <h2>Meus Produtos</h2>
    {produtos.map(produto => (
      <CardProduto 
        key={produto.id} // <-- A KEY!
        nome={produto.nome}
        preco={produto.preco}
        emEstoque={true}
      />
    ))}
  </div>
);

// Renderização condicional (Ternário e &&)
const [logado, setLogado] = useState(false);

return (
    <div>
    {logado ? (
        <p>Bem-vindo, usuário!</p>

    ): (
        <button> Entrar </button> 
    )}
    </div>
)


const [temNotificacoes, setTemNotificacoes] = useState(true);

return (
  <div>
    {temNotificacoes && (
      <div className="notificacao-badge">!</div>
    )}
  </div>
);

/*
Use context 

O Problema: "Prop Drilling" (Perfuração de Props)
Conceito (O "Porquê"): Imagine uma estrutura de componentes aninhados (um dentro do outro):

<App>
  <Layout>
    <Header>
      <BarraDeNavegacao>
        <AvatarUsuario /> 
      </BarraDeNavegacao>
    </Header>
  </Layout>
</App>

Agora, imagine que o componente <App> tem a informação do usuario (que veio de um login). O componente <AvatarUsuario>, lá no final da fila, precisa dessa informação para exibir a foto.

Sem o useContext, você teria que fazer isto:

App passa usuario como prop para Layout.

Layout (que não usa usuario) recebe a prop e a repassa para Header.

Header (que não usa usuario) recebe e repassa para BarraDeNavegacao.

BarraDeNavegacao (que não usa usuario) recebe e repassa para AvatarUsuario.

AvatarUsuario finalmente usa a prop usuario.

Isso é Prop Drilling. É o ato de "perfurar" props através de múltiplos níveis de componentes que não se importam com elas, apenas para fazer a prop chegar ao destino final. Isso deixa o código sujo, acoplado e difícil de manter.


A Solução: useContext
Conceito (O "O Quê"): A Context API (que o hook useContext consome) cria um "túnel" ou "portal" de dados.

Pense assim:

Você cria um Contexto (o portal) em um local central.

No topo da sua árvore (ex: em <App>), você usa um Provider (Provedor) para "injetar" um valor nesse portal (ex: o objeto usuario).

Agora, qualquer componente dentro dessa árvore (não importa o quão fundo) pode usar o hook useContext para "puxar" esse valor diretamente do portal, sem precisar de props.

O Fluxo de 3 Passos:

createContext: Criar o contexto.

<Context.Provider>: Prover o valor.

useContext: Consumir o valor.

*/ 
