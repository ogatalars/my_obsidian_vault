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

*/

