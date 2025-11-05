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
                
            }
        }
    })
}
