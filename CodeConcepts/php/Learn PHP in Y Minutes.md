---
created: 2024-09-18T16:44:42 (UTC -03:00)
tags: []
source: https://learnxinyminutes.com/docs/pt-br/php-pt/
author: 
---

# Learn PHP in Y Minutes

> ## Excerpt
> Este documento descreve PHP 5+.

---
Este documento descreve PHP 5+.

```
<span></span><span>&lt;?php</span> <span>// O código PHP deve estar incluso na tag &lt;?php</span>

<span>// Se o arquivo PHP só contém código PHP, a melhor prática</span>
<span>// é omitir a tag de fechamento PHP.</span>

<span>// Duas barras iniciam o comentário de uma linha.</span>

<span># O hash (conhecido como "pound symbol") também inicia, mas // é mais comum.</span>

<span>/*</span>
<span>     O texto envolto por barra-asterisco e asterisco-barra</span>
<span>     faz um comentário de múltiplas linhas.</span>
<span>*/</span>

<span>// Utilize "echo" ou "print" para imprimir a saída.</span>
<span>print</span><span>(</span><span>'Olá '</span><span>);</span> <span>// Imprime "Olá " sem quebra de linha.</span>
<span>print</span> <span>'Olá '</span><span>;</span> <span>// Não tem a necessidade de utilizar as chaves.</span>

<span>// () são opcionais para print e echo</span>
<span>echo</span> <span>"Mundo</span><span>\n</span><span>"</span><span>;</span> <span>// Imprime "Mundo" com quebra de linha.</span>
<span>echo</span> <span>(</span><span>"Mundo</span><span>\n</span><span>"</span><span>);</span> <span>// Podemos tambem utilizar com chaves no echo.</span>
<span>// (Todas as declarações devem terminar com um ponto e vírgula.)</span>

<span>// Qualquer coisa fora da tag &lt;?php é impresso automaticamente.</span>
<span>?&gt;</span>
<span>Olá mundo novamente!</span>
<span>&lt;?php</span>


<span>/************************************</span>
<span> * Tipos e variáveis</span>
<span> */</span>

<span>// Variáveis começam com o símbolo $.</span>
<span>// Um nome de variável válido se inicia com uma letra ou sublinhado,</span>
<span>// seguido por qualquer quantidade de letras, números ou sublinhados.</span>

<span>// Valores booleanos não diferenciam maiúsculo de minúsculo (case-insensitive).</span>
<span>$boolean</span> <span>=</span> <span>true</span><span>;</span>  <span>// ou TRUE ou True</span>
<span>$boolean</span> <span>=</span> <span>false</span><span>;</span> <span>// ou FALSE ou False</span>

<span>// Inteiros</span>
<span>$int1</span> <span>=</span> <span>12</span><span>;</span>   <span>// =&gt; 12</span>
<span>$int2</span> <span>=</span> <span>-</span><span>12</span><span>;</span>  <span>// =&gt; -12</span>
<span>$int3</span> <span>=</span> <span>012</span><span>;</span>  <span>// =&gt; 10 (um 0 denota um número octal)</span>
<span>$int4</span> <span>=</span> <span>0x0F</span><span>;</span> <span>// =&gt; 15 (um 0x denota um literal hex)</span>

<span>// Flutuantes - Floats (aka doubles)</span>
<span>$float</span> <span>=</span> <span>1.234</span><span>;</span>
<span>$float</span> <span>=</span> <span>1.2e3</span><span>;</span>
<span>$float</span> <span>=</span> <span>7E-10</span><span>;</span>

<span>// Excluir variável.</span>
<span>unset</span><span>(</span><span>$int1</span><span>);</span>

<span>// Aritmética</span>
<span>$soma</span>      <span>=</span> <span>1</span> <span>+</span> <span>1</span><span>;</span> <span>// 2</span>
<span>$diferenca</span> <span>=</span> <span>2</span> <span>-</span> <span>1</span><span>;</span> <span>// 1</span>
<span>$produto</span>   <span>=</span> <span>2</span> <span>*</span> <span>2</span><span>;</span> <span>// 4</span>
<span>$quociente</span> <span>=</span> <span>2</span> <span>/</span> <span>1</span><span>;</span> <span>// 2</span>

<span>// Taquigrafia aritmética</span>
<span>$numero</span> <span>=</span> <span>0</span><span>;</span>
<span>$numero</span> <span>+=</span> <span>1</span><span>;</span>      <span>// Incrementa $number em 1</span>
<span>echo</span> <span>$numero</span><span>++</span><span>;</span>    <span>// Imprime 1 (incrementa após a avaliação)</span>
<span>echo</span> <span>++</span><span>$numero</span><span>;</span>    <span>// Imprime 3 (incrementa antes da avaliação)</span>
<span>$numero</span> <span>/=</span> <span>$float</span><span>;</span> <span>// Divide e atribui o quociente de $numero</span>

<span>// Strings podem ser colocadas entre aspas simples.</span>
<span>$sgl_quotes</span> <span>=</span> <span>'$String'</span><span>;</span> <span>// =&gt; '$String'</span>

<span>// Evite o uso de aspas duplas, exceto para incorporar outras variáveis</span>
<span>$dbl_quotes</span> <span>=</span> <span>"Esta é uma </span><span>$sgl_quotes</span><span>."</span><span>;</span> <span>// =&gt; 'Esta é uma $String.'</span>

<span>// Os caracteres especiais só são escapados entre aspas duplas.</span>
<span>$escapado</span>    <span>=</span> <span>"Este contém um </span><span>\t</span><span> caractere tab."</span><span>;</span> 
<span>echo</span> <span>$escapado</span><span>;</span> <span>//Imprime: Este contém um     caractere tab.</span>
<span>$naoescapado</span> <span>=</span> <span>'Este contém somente a barra e o t: \t'</span><span>;</span> 
<span>echo</span> <span>$naoescapado</span><span>;</span> <span>//Imprime: Este contém somente a barra e o t: \t</span>

<span>// Coloque uma variável entre chaves se necessário.</span>
<span>$dinheiro</span> <span>=</span> <span>"Eu tenho $</span><span>${</span><span>numero</span><span>}</span><span> no banco."</span><span>;</span>

<span>// Desde o PHP 5.3, nowdocs podem ser usados para múltiplas linhas sem análise</span>
<span>$nowdoc</span> <span>=</span> <span>&lt;&lt;&lt;'</span><span>FIM</span><span>'</span>
<span>múltiplas linhas</span>
<span>string</span>
<span>FIM</span><span>;</span>

<span>// Heredocs farão a análise</span>
<span>$heredoc</span> <span>=</span> <span>&lt;&lt;&lt;</span><span>FIM</span>
<span>múltiplas linhas</span>
<span>$sgl_quotes</span>
<span>FIM</span><span>;</span>

<span>// Concatenação de string é feita com .</span>
<span>echo</span> <span>'Esta string '</span> <span>.</span> <span>'é concatenada'</span><span>;</span> <span>//Imprime: 'Esta string é concatenada'</span>


<span>/********************************</span>
<span> * Constantes</span>
<span> */</span>

<span>// Uma constante é definida usando define()</span>
<span>// e nunca pode ser mudada durante a execução!</span>

<span>// Um nome de constante válida começa com uma letra ou sublinhado,</span>
<span>// seguido por qualquer quantidade de letras, números ou sublinhados.</span>
<span>define</span><span>(</span><span>"FOO"</span><span>,</span>     <span>"alguma coisa"</span><span>);</span>

<span>// Acesso a uma constante é possível usando diretamente o nome escolhido</span>
<span>echo</span> <span>'Isto sairá '</span><span>.</span><span>FOO</span><span>;</span> <span>//Imprime: Isto sairá alguma coisa</span>


<span>/********************************</span>
<span> * Arrays</span>
<span> */</span>

<span>// Todos os arrays em PHP são arrays associativos (hashmaps),</span>

<span>// Funciona com todas as versões do PHP</span>
<span>$associativo</span> <span>=</span> <span>array</span><span>(</span><span>'Um'</span> <span>=&gt;</span> <span>1</span><span>,</span> <span>'Dois'</span> <span>=&gt;</span> <span>2</span><span>,</span> <span>'Tres'</span> <span>=&gt;</span> <span>3</span><span>);</span>

<span>// PHP 5.4 introduziu uma nova sintaxe</span>
<span>$associativo</span> <span>=</span> <span>[</span><span>'Um'</span> <span>=&gt;</span> <span>1</span><span>,</span> <span>'Dois'</span> <span>=&gt;</span> <span>2</span><span>,</span> <span>'Tres'</span> <span>=&gt;</span> <span>3</span><span>];</span>

<span>echo</span> <span>$associativo</span><span>[</span><span>'Um'</span><span>];</span> <span>// Imprime 1.</span>

<span>// Uma lista de literais atribui chaves inteiras implicitamente</span>
<span>$array</span> <span>=</span> <span>[</span><span>'Um'</span><span>,</span> <span>'Dois'</span><span>,</span> <span>'Tres'</span><span>];</span>
<span>echo</span> <span>$array</span><span>[</span><span>0</span><span>];</span> <span>// Imprime =&gt; "Um"</span>

<span>// Adiciona um elemento no final do array</span>
<span>$array</span><span>[]</span> <span>=</span> <span>'Quatro'</span><span>;</span>

<span>// Remove um elemento do array.</span>
<span>unset</span><span>(</span><span>$array</span><span>[</span><span>3</span><span>]);</span>

<span>/********************************</span>
<span> * Saída</span>
<span> */</span>

<span>echo</span><span>(</span><span>'Olá Mundo!'</span><span>);</span>
<span>// Imprime Olá Mundo! para stdout.</span>
<span>// Stdout é uma página web se executado em um navegador.</span>

<span>print</span><span>(</span><span>'Olá Mundo!'</span><span>);</span> <span>// O mesmo que o echo.</span>

<span>// echo é atualmente um construtor de linguagem, então você pode </span>
<span>// remover os parênteses.</span>
<span>echo</span> <span>'Olá Mundo!'</span><span>;</span> <span>// Imprime: Olá Mundo!</span>
<span>print</span> <span>'Olá Mundo!'</span><span>;</span> <span>// O print também é - Imprime: Olá Mundo! </span>

<span>$paragrafo</span> <span>=</span> <span>'parágrafo'</span><span>;</span>

<span>echo</span> <span>100</span><span>;</span>        <span>// Imprime valores escalares diretamente</span>
<span>echo</span> <span>$paragrafo</span><span>;</span> <span>// ou variáveis</span>

<span>// Se a abertura de tags curtas está configurada, ou sua versão do PHP é</span>
<span>// 5.4.0 ou maior, você pode usar a sintaxe de echo curto</span>
<span>?&gt;</span>
<span>&lt;p&gt;</span><span>&lt;?</span><span>=</span> <span>$paragrafo</span> <span>?&gt;</span><span>&lt;/p&gt;</span>
<span>&lt;?php</span>

<span>$x</span> <span>=</span> <span>1</span><span>;</span>
<span>$y</span> <span>=</span> <span>2</span><span>;</span>
<span>$x</span> <span>=</span> <span>$y</span><span>;</span> <span>// $x agora contém o mesmo valor de $y</span>
<span>$z</span> <span>=</span> <span>&amp;</span><span>$y</span><span>;</span>
<span>// $z agora contém uma referência para $y. Mudando o valor de</span>
<span>// $z irá mudar o valor de $y também, e vice-versa.</span>
<span>// $x irá permanecer inalterado com o valor original de $y</span>

<span>echo</span> <span>$x</span><span>;</span> <span>// Imprime =&gt; 2</span>
<span>echo</span> <span>$z</span><span>;</span> <span>// Imprime =&gt; 2</span>
<span>$y</span> <span>=</span> <span>0</span><span>;</span>
<span>echo</span> <span>$x</span><span>;</span> <span>// Imprime =&gt; 2</span>
<span>echo</span> <span>$z</span><span>;</span> <span>// Imprime =&gt; 0</span>

<span>// Despeja tipos e valores de variável para o stdout</span>
<span>var_dump</span><span>(</span><span>$z</span><span>);</span> <span>// imprime int(0)</span>

<span>// Imprime variáveis para stdout em formato legível para humanos</span>
<span>print_r</span><span>(</span><span>$array</span><span>);</span> <span>// imprime: Array ( [0] =&gt; Um [1] =&gt; Dois [2] =&gt; Tres )</span>

<span>/********************************</span>
<span> * Lógica</span>
<span> */</span>
<span>$a</span> <span>=</span> <span>0</span><span>;</span>
<span>$b</span> <span>=</span> <span>'0'</span><span>;</span>
<span>$c</span> <span>=</span> <span>'1'</span><span>;</span>
<span>$d</span> <span>=</span> <span>'1'</span><span>;</span>

<span>// assert lança um aviso se o seu argumento não é verdadeiro</span>

<span>// Estas comparações serão sempre verdadeiras, mesmo que os tipos </span>
<span>// não sejam os mesmos.</span>
<span>assert</span><span>(</span><span>$a</span> <span>==</span> <span>$b</span><span>);</span> <span>// igualdade</span>
<span>assert</span><span>(</span><span>$c</span> <span>!=</span> <span>$a</span><span>);</span> <span>// desigualdade</span>
<span>assert</span><span>(</span><span>$c</span> <span>&lt;&gt;</span> <span>$a</span><span>);</span> <span>// alternativa para desigualdade</span>
<span>assert</span><span>(</span><span>$a</span> <span>&lt;</span> <span>$c</span><span>);</span>
<span>assert</span><span>(</span><span>$c</span> <span>&gt;</span> <span>$b</span><span>);</span>
<span>assert</span><span>(</span><span>$a</span> <span>&lt;=</span> <span>$b</span><span>);</span>
<span>assert</span><span>(</span><span>$c</span> <span>&gt;=</span> <span>$d</span><span>);</span>

<span>// A seguir, só serão verdadeiras se os valores correspondem e são do mesmo tipo.</span>
<span>assert</span><span>(</span><span>$c</span> <span>===</span> <span>$d</span><span>);</span>
<span>assert</span><span>(</span><span>$a</span> <span>!==</span> <span>$d</span><span>);</span>
<span>assert</span><span>(</span><span>1</span> <span>==</span> <span>'1'</span><span>);</span>
<span>assert</span><span>(</span><span>1</span> <span>!==</span> <span>'1'</span><span>);</span>

<span>// As variáveis podem ser convertidas entre tipos, dependendo da sua utilização.</span>

<span>$inteiro</span> <span>=</span> <span>1</span><span>;</span>
<span>echo</span> <span>$inteiro</span> <span>+</span> <span>$inteiro</span><span>;</span> <span>// Imprime =&gt; 2</span>

<span>$string</span> <span>=</span> <span>'1'</span><span>;</span>
<span>echo</span> <span>$string</span> <span>+</span> <span>$string</span><span>;</span> <span>// Imprime =&gt; 2 (strings são coagidas para inteiros)</span>

<span>$string</span> <span>=</span> <span>'one'</span><span>;</span>
<span>echo</span> <span>$string</span> <span>+</span> <span>$string</span><span>;</span> <span>// Imprime =&gt; 0</span>
<span>// Imprime 0 porque o operador + não pode fundir a string 'um' para um número</span>

<span>// Tipo de fundição pode ser utilizado para tratar uma variável </span>
<span>// como um outro tipo</span>

<span>$booleano</span> <span>=</span> <span>(</span><span>boolean</span><span>)</span> <span>1</span><span>;</span> <span>// =&gt; true</span>

<span>$zero</span> <span>=</span> <span>0</span><span>;</span>
<span>$booleano</span> <span>=</span> <span>(</span><span>boolean</span><span>)</span> <span>$zero</span><span>;</span> <span>// =&gt; false</span>

<span>// Há também funções dedicadas para fundir a maioria dos tipos</span>
<span>$inteiro</span> <span>=</span> <span>5</span><span>;</span>
<span>$string</span> <span>=</span> <span>strval</span><span>(</span><span>$inteiro</span><span>);</span>

<span>$var</span> <span>=</span> <span>null</span><span>;</span> <span>// valor Null</span>


<span>/********************************</span>
<span> * Estruturas de controle</span>
<span> */</span>

<span>if</span> <span>(</span><span>true</span><span>)</span> <span>{</span>
    <span>print</span> <span>'Eu fico impresso'</span><span>;</span>
<span>}</span>

<span>if</span> <span>(</span><span>false</span><span>)</span> <span>{</span>
    <span>print</span> <span>'Eu não\'t'</span><span>;</span>
<span>}</span> <span>else</span> <span>{</span>
    <span>print</span> <span>'Eu fico impresso'</span><span>;</span>
<span>}</span>

<span>if</span> <span>(</span><span>false</span><span>)</span> <span>{</span>
    <span>print</span> <span>'Não fica impresso'</span><span>;</span>
<span>}</span> <span>elseif</span><span>(</span><span>true</span><span>)</span> <span>{</span>
    <span>print</span> <span>'Fica'</span><span>;</span>
<span>}</span>

<span>// operadores ternários</span>
<span>print</span> <span>(</span><span>false</span> <span>?</span> <span>'Não fica impresso'</span> <span>:</span> <span>'Fica'</span><span>);</span>

<span>$x</span> <span>=</span> <span>0</span><span>;</span>
<span>if</span> <span>(</span><span>$x</span> <span>===</span> <span>'0'</span><span>)</span> <span>{</span>
    <span>print</span> <span>'Não imprime'</span><span>;</span>
<span>}</span> <span>elseif</span><span>(</span><span>$x</span> <span>==</span> <span>'1'</span><span>)</span> <span>{</span>
    <span>print</span> <span>'Não imprime'</span><span>;</span>
<span>}</span> <span>else</span> <span>{</span>
    <span>print</span> <span>'Imprime'</span><span>;</span>
<span>}</span>



<span>// Esta sintaxe alternativa é útil para modelos (templates)</span>
<span>?&gt;</span>

<span>&lt;?php</span> <span>if</span> <span>(</span><span>$x</span><span>)</span><span>:</span> <span>?&gt;</span>
<span>Isto é exibido se o teste for verdadeiro.</span>
<span>&lt;?php</span> <span>else</span><span>:</span> <span>?&gt;</span>
<span>Isto é apresentado caso contrário.</span>
<span>&lt;?php</span> <span>endif</span><span>;</span> <span>?&gt;</span>

<span>&lt;?php</span>

<span>// Use switch para salvar alguma lógica.</span>
<span>switch</span> <span>(</span><span>$x</span><span>)</span> <span>{</span>
    <span>case</span> <span>'0'</span><span>:</span>
        <span>print</span> <span>'Switch faz coerção de tipo'</span><span>;</span>
        <span>break</span><span>;</span> <span>// Você deve incluir uma pausa, ou você vai cair</span>
               <span>// no caso 'dois' e 'tres'</span>
    <span>case</span> <span>'dois'</span><span>:</span>
    <span>case</span> <span>'tres'</span><span>:</span>
        <span>// Faz alguma coisa, se a variável é 'dois' ou 'tres'</span>
        <span>break</span><span>;</span>
    <span>default</span><span>:</span>
        <span>// Faz algo por padrão</span>
<span>}</span>

<span>// While, do...while e for são repetições provavelmente familiares</span>
<span>$i</span> <span>=</span> <span>0</span><span>;</span>
<span>while</span> <span>(</span><span>$i</span> <span>&lt;</span> <span>5</span><span>)</span> <span>{</span>
    <span>echo</span> <span>$i</span><span>++</span><span>;</span>
<span>};</span> <span>// Imprime "01234"</span>

<span>echo</span> <span>"</span><span>\n</span><span>"</span><span>;</span>

<span>$i</span> <span>=</span> <span>0</span><span>;</span>
<span>do</span> <span>{</span>
    <span>echo</span> <span>$i</span><span>++</span><span>;</span>
<span>}</span> <span>while</span> <span>(</span><span>$i</span> <span>&lt;</span> <span>5</span><span>);</span> <span>// Imprime "01234"</span>

<span>echo</span> <span>"</span><span>\n</span><span>"</span><span>;</span>

<span>for</span> <span>(</span><span>$x</span> <span>=</span> <span>0</span><span>;</span> <span>$x</span> <span>&lt;</span> <span>10</span><span>;</span> <span>$x</span><span>++</span><span>)</span> <span>{</span>
    <span>echo</span> <span>$x</span><span>;</span>
<span>}</span> <span>// Imprime "0123456789"</span>

<span>echo</span> <span>"</span><span>\n</span><span>"</span><span>;</span>

<span>$rodas</span> <span>=</span> <span>[</span><span>'bicicleta'</span> <span>=&gt;</span> <span>2</span><span>,</span> <span>'carro'</span> <span>=&gt;</span> <span>4</span><span>];</span>

<span>// Repetições foreach podem iterar sobre arrays</span>
<span>foreach</span> <span>(</span><span>$rodas</span> <span>as</span> <span>$contador_rodas</span><span>)</span> <span>{</span>
    <span>echo</span> <span>$contador_rodas</span><span>;</span>
<span>}</span> <span>// Imprime "24"</span>

<span>echo</span> <span>"</span><span>\n</span><span>"</span><span>;</span>

<span>// Você pode iterar sobre as chaves, bem como os valores</span>
<span>foreach</span> <span>(</span><span>$rodas</span> <span>as</span> <span>$veiculo</span> <span>=&gt;</span> <span>$contador_rodas</span><span>)</span> <span>{</span>
    <span>echo</span> <span>"O </span><span>$veiculo</span><span> tem </span><span>$contador_rodas</span><span> rodas"</span><span>;</span>
<span>}</span>

<span>echo</span> <span>"</span><span>\n</span><span>"</span><span>;</span>

<span>$i</span> <span>=</span> <span>0</span><span>;</span>
<span>while</span> <span>(</span><span>$i</span> <span>&lt;</span> <span>5</span><span>)</span> <span>{</span>
    <span>if</span> <span>(</span><span>$i</span> <span>===</span> <span>3</span><span>)</span> <span>{</span>
        <span>break</span><span>;</span> <span>// Sai da repetição</span>
    <span>}</span>
    <span>echo</span> <span>$i</span><span>++</span><span>;</span>
<span>}</span> <span>// Imprime "012"</span>

<span>for</span> <span>(</span><span>$i</span> <span>=</span> <span>0</span><span>;</span> <span>$i</span> <span>&lt;</span> <span>5</span><span>;</span> <span>$i</span><span>++</span><span>)</span> <span>{</span>
    <span>if</span> <span>(</span><span>$i</span> <span>===</span> <span>3</span><span>)</span> <span>{</span>
        <span>continue</span><span>;</span> <span>// Ignora esta iteração da repetição</span>
    <span>}</span>
    <span>echo</span> <span>$i</span><span>;</span>
<span>}</span> <span>// Imprime "0124"</span>


<span>/********************************</span>
<span> * Functions</span>
<span> */</span>

<span>// Define a função com "function":</span>
<span>function</span> <span>minha_funcao</span> <span>()</span> <span>{</span>
  <span>return</span> <span>'Olá'</span><span>;</span>
<span>}</span>

<span>echo</span> <span>minha_funcao</span><span>();</span> <span>// =&gt; "Olá"</span>

<span>// Um nome de função válido começa com uma letra ou sublinhado,</span>
<span>// seguido por qualquer quantidade de letras, números ou sublinhados.</span>

<span>function</span> <span>adicionar</span><span>(</span><span>$x</span><span>,</span> <span>$y</span> <span>=</span> <span>1</span><span>)</span> <span>{</span> <span>// $y é opcional e o valor padrão é 1</span>
  <span>$resultado</span> <span>=</span> <span>$x</span> <span>+</span> <span>$y</span><span>;</span>
  <span>return</span> <span>$resultado</span><span>;</span>
<span>}</span>

<span>echo</span> <span>adicionar</span><span>(</span><span>4</span><span>);</span> <span>// =&gt; 5</span>
<span>echo</span> <span>adicionar</span><span>(</span><span>4</span><span>,</span> <span>2</span><span>);</span> <span>// =&gt; 6</span>

<span>// $resultado não é acessível fora da função</span>
<span>// print $resultado; // Dá uma aviso.</span>

<span>// Desde o PHP 5.3 você pode declarar funções anônimas</span>
<span>$inc</span> <span>=</span> <span>function</span> <span>(</span><span>$x</span><span>)</span> <span>{</span>
  <span>return</span> <span>$x</span> <span>+</span> <span>1</span><span>;</span>
<span>};</span>

<span>echo</span> <span>$inc</span><span>(</span><span>2</span><span>);</span> <span>// =&gt; 3</span>

<span>function</span> <span>foo</span> <span>(</span><span>$x</span><span>,</span> <span>$y</span><span>,</span> <span>$z</span><span>)</span> <span>{</span>
  <span>echo</span> <span>"</span><span>$x</span><span> - </span><span>$y</span><span> - </span><span>$z</span><span>"</span><span>;</span>
<span>}</span>

<span>// Funções podem retornar funções</span>
<span>function</span> <span>bar</span> <span>(</span><span>$x</span><span>,</span> <span>$y</span><span>)</span> <span>{</span>
  <span>// Utilize 'use' para trazer variáveis de fora</span>
  <span>return</span> <span>function</span> <span>(</span><span>$z</span><span>)</span> <span>use</span> <span>(</span><span>$x</span><span>,</span> <span>$y</span><span>)</span> <span>{</span>
    <span>foo</span><span>(</span><span>$x</span><span>,</span> <span>$y</span><span>,</span> <span>$z</span><span>);</span>
  <span>};</span>
<span>}</span>

<span>$bar</span> <span>=</span> <span>bar</span><span>(</span><span>'A'</span><span>,</span> <span>'B'</span><span>);</span>
<span>$bar</span><span>(</span><span>'C'</span><span>);</span> <span>// Imprime "A - B - C"</span>

<span>// Você pode chamar funções nomeadas usando strings</span>
<span>$nome_funcao</span> <span>=</span> <span>'add'</span><span>;</span>
<span>echo</span> <span>$nome_funcao</span><span>(</span><span>1</span><span>,</span> <span>2</span><span>);</span> <span>// =&gt; 3</span>
<span>// Útil para dinamicamente determinar qual função será executada.</span>
<span>// Ou utilize call_user_func(callable $callback [, $parameter [, ... ]]);</span>

<span>/********************************</span>
<span> * Includes (Incluir)</span>
<span> */</span>

<span>&lt;?</span><span>php</span>
<span>// PHP dentro de arquivos incluídos também deve começar com uma tag </span>
<span>// de abertura do PHP.</span>

<span>include</span> <span>'meu-arquivo.php'</span><span>;</span>
<span>// O código meu-arquivo.php já está disponível no escopo atual.</span>
<span>// Se o arquivo não pode ser incluído (por exemplo, arquivo não encontrado), </span>
<span>//um aviso é emitido.</span>

<span>include_once</span> <span>'meu-arquivo.php'</span><span>;</span>
<span>// Se o código no meu-arquivo.php foi incluído em outro lugar, ele não vai</span>
<span>// ser incluído novamente. Isso evita vários erros de declaração de classe</span>

<span>require</span> <span>'meu-arquivo.php'</span><span>;</span>
<span>require_once</span> <span>'meu-arquivo.php'</span><span>;</span>
<span>// Faz o mesmo que o include(), exceto que o require() irá causar um erro fatal</span>
<span>// se o arquivo não puder ser incluído</span>

<span>// Conteúdo de meu-include.php:</span>
<span>&lt;?</span><span>php</span>

<span>return</span> <span>'Qualquer coisa que você quiser.'</span><span>;</span>
<span>// Fim do arquivo</span>

<span>// Includes e requires também podem retornar um valor.</span>
<span>$valor</span> <span>=</span> <span>include</span> <span>'meu-include.php'</span><span>;</span>

<span>// Arquivos são incluídos com base no caminho determinado ou,</span>
<span>// se este não for passado, com base na diretiva de configuração include_path.</span>
<span>// Se o arquivo não é encontrado no include_path, o include vai finalmente</span>
<span>// verificar no próprio diretório do script chamado e no diretório</span>
<span>// de trabalho atual antes de falhar.</span>
<span>/* */</span>

<span>/********************************</span>
<span> * Classes</span>
<span> */</span>

<span>// As classes são definidas com a palavra-chave class</span>

<span>class</span> <span>MinhaClasse</span>
<span>{</span>
    <span>const</span> <span>MINHA_CONST</span>      <span>=</span> <span>'valor'</span><span>;</span> <span>// Uma constante</span>

    <span>static</span> <span>$valorEstatico</span>   <span>=</span> <span>'estatico'</span><span>;</span>

    <span>// Variáveis estáticas e sua visibilidade</span>
    <span>public</span> <span>static</span> <span>$valorEstaticoPublico</span> <span>=</span> <span>'estaticoPublico'</span><span>;</span>
    <span>// Acessível somente dentro da classe</span>
    <span>private</span> <span>static</span> <span>$valorEstaticoPrivado</span> <span>=</span> <span>'estaticoPrivado'</span><span>;</span>
    <span>// Acessível a partir da classe e subclasses</span>
    <span>protected</span> <span>static</span> <span>$valorEstaticoProtegido</span> <span>=</span> <span>'estaticoProtegido'</span><span>;</span>

    <span>// Propriedades devem declarar a sua visibilidade</span>
    <span>public</span> <span>$propriedade</span>    <span>=</span> <span>'publica'</span><span>;</span>
    <span>public</span> <span>$propInstancia</span><span>;</span>
    <span>protected</span> <span>$prot</span> <span>=</span> <span>'protegida'</span><span>;</span> <span>// Acessível a partir da classe e subclasses</span>
    <span>private</span> <span>$priv</span>   <span>=</span> <span>'privada'</span><span>;</span>   <span>// Acessível somente dentro da classe</span>

    <span>// Criar um construtor com o __construct</span>
    <span>public</span> <span>function</span> <span>__construct</span><span>(</span><span>$propInstancia</span><span>)</span> <span>{</span>
        <span>// Acesse variável de instância utilizando $this</span>
        <span>$this</span><span>-&gt;</span><span>propInstancia</span> <span>=</span> <span>$propInstancia</span><span>;</span>
    <span>}</span>

    <span>// Métodos são declarados como funções dentro de uma classe</span>
    <span>public</span> <span>function</span> <span>meuMetodo</span><span>()</span>
    <span>{</span>
        <span>print</span> <span>'MinhaClasse'</span><span>;</span>
    <span>}</span>

    <span>//palavra-chave final faz uma função não poder ser sobrescrita</span>
    <span>final</span> <span>function</span> <span>voceNaoPodeMeSobrescrever</span><span>()</span>
    <span>{</span>
    <span>}</span>

<span>/*</span>
<span> * Declarando propriedades ou métodos de classe como estáticos faz deles </span>
<span> * acessíveis sem precisar instanciar a classe. A propriedade declarada</span>
<span> * como estática não pode ser acessada com um objeto</span>
<span> * instanciado da classe (embora métodos estáticos possam).</span>
<span>*/</span>

    <span>public</span> <span>static</span> <span>function</span> <span>meuMetodoEstatico</span><span>()</span>
    <span>{</span>
        <span>print</span> <span>'Eu sou estatico'</span><span>;</span>
    <span>}</span>
<span>}</span>

<span>echo</span> <span>MinhaClasse</span><span>::</span><span>MINHA_CONST</span><span>;</span>    <span>// Imprime 'valor';</span>
<span>echo</span> <span>MinhaClasse</span><span>::</span><span>$valorEstatico</span><span>;</span> <span>// Imprime 'estatico';</span>
<span>MinhaClasse</span><span>::</span><span>meuMetodoEstatico</span><span>();</span> <span>// Imprime 'Eu sou estatico';</span>

<span>// Instantiate classes using new</span>
<span>$minha_classe</span> <span>=</span> <span>new</span> <span>MinhaClasse</span><span>(</span><span>'Uma propriedade de instância'</span><span>);</span>
<span>// Os parênteses são opcionais, se não passar algum argumento.</span>

<span>// Acesse membros da classe utilizando -&gt;</span>
<span>echo</span> <span>$minha_classe</span><span>-&gt;</span><span>propriedade</span><span>;</span>  <span>// =&gt; "publica"</span>
<span>echo</span> <span>$minha_classe</span><span>-&gt;</span><span>instanceProp</span><span>;</span> <span>// =&gt; "Uma propriedade de instância"</span>
<span>$minha_classe</span><span>-&gt;</span><span>meuMetodo</span><span>();</span>       <span>// =&gt; "MinhaClasse"</span>


<span>// Estender classes usando "extends"</span>
<span>class</span> <span>MinhaOutraClasse</span> <span>extends</span> <span>MinhaClasse</span>
<span>{</span>
    <span>function</span> <span>imprimePropriedadeProtegida</span><span>()</span>
    <span>{</span>
        <span>echo</span> <span>$this</span><span>-&gt;</span><span>prot</span><span>;</span>
    <span>}</span>

    <span>// Sobrescrever um método</span>
    <span>function</span> <span>meuMetodo</span><span>()</span>
    <span>{</span>
        <span>parent</span><span>::</span><span>meuMetodo</span><span>();</span>
        <span>print</span> <span>' &gt; MinhaOutraClasse'</span><span>;</span>
    <span>}</span>
<span>}</span>

<span>$minha_outra_classe</span> <span>=</span> <span>new</span> <span>MinhaOutraClasse</span><span>(</span><span>'Propriedade de instância'</span><span>);</span>
<span>$minha_outra_classe</span><span>-&gt;</span><span>imprimePropriedadeProtegida</span><span>();</span> <span>// =&gt; Prints "protegida"</span>
<span>$minha_outra_classe</span><span>-&gt;</span><span>myMethod</span><span>();</span> <span>// Prints "MinhaClasse &gt; MinhaOutraClasse"</span>

<span>final</span> <span>class</span> <span>VoceNaoPodeMeEstender</span>
<span>{</span>
<span>}</span>

<span>// Você pode usar "métodos mágicos" para criar getters e setters</span>
<span>class</span> <span>MinhaClasseMapa</span>
<span>{</span>
    <span>private</span> <span>$propriedade</span><span>;</span>

    <span>public</span> <span>function</span> <span>__get</span><span>(</span><span>$chave</span><span>)</span>
    <span>{</span>
        <span>return</span> <span>$this</span><span>-&gt;</span><span>$chave</span><span>;</span>
    <span>}</span>

    <span>public</span> <span>function</span> <span>__set</span><span>(</span><span>$chave</span><span>,</span> <span>$valor</span><span>)</span>
    <span>{</span>
        <span>$this</span><span>-&gt;</span><span>$chave</span> <span>=</span> <span>$valor</span><span>;</span>
    <span>}</span>
<span>}</span>

<span>$x</span> <span>=</span> <span>new</span> <span>MinhaClasseMapa</span><span>();</span>
<span>echo</span> <span>$x</span><span>-&gt;</span><span>propriedade</span><span>;</span> <span>// Irá usar o método __get()</span>
<span>$x</span><span>-&gt;</span><span>propriedade</span> <span>=</span> <span>'Algo'</span><span>;</span> <span>// Irá usar o método __set()</span>

<span>// Classes podem ser abstratas (usando a palavra-chave abstract) ou</span>
<span>// implementar interfaces (usando a palavra-chave implements).</span>
<span>// Uma interface é declarada com a palavra-chave interface.</span>

<span>interface</span> <span>InterfaceUm</span>
<span>{</span>
    <span>public</span> <span>function</span> <span>fazAlgo</span><span>();</span>
<span>}</span>

<span>interface</span> <span>InterfaceDois</span>
<span>{</span>
    <span>public</span> <span>function</span> <span>fazOutraCoisa</span><span>();</span>
<span>}</span>

<span>// interfaces podem ser estendidas</span>
<span>interface</span> <span>InterfaceTres</span> <span>extends</span> <span>InterfaceDois</span>
<span>{</span>
    <span>public</span> <span>function</span> <span>fazOutroContrato</span><span>();</span>
<span>}</span>

<span>abstract</span> <span>class</span> <span>MinhaClasseAbstrata</span> <span>implements</span> <span>InterfaceUm</span>
<span>{</span>
    <span>public</span> <span>$x</span> <span>=</span> <span>'fazAlgo'</span><span>;</span>
<span>}</span>

<span>class</span> <span>MinhaClasseConcreta</span> <span>extends</span> <span>MinhaClasseAbstrata</span> <span>implements</span> <span>InterfaceDois</span>
<span>{</span>
    <span>public</span> <span>function</span> <span>fazAlgo</span><span>()</span>
    <span>{</span>
        <span>echo</span> <span>$x</span><span>;</span>
    <span>}</span>

    <span>public</span> <span>function</span> <span>fazOutraCoisa</span><span>()</span>
    <span>{</span>
        <span>echo</span> <span>'fazOutraCoisa'</span><span>;</span>
    <span>}</span>
<span>}</span>


<span>// Classes podem implementar mais de uma interface</span>
<span>class</span> <span>UmaOutraClasse</span> <span>implements</span> <span>InterfaceUm</span><span>,</span> <span>InterfaceDois</span>
<span>{</span>
    <span>public</span> <span>function</span> <span>fazAlgo</span><span>()</span>
    <span>{</span>
        <span>echo</span> <span>'fazAlgo'</span><span>;</span>
    <span>}</span>

    <span>public</span> <span>function</span> <span>fazOutraCoisa</span><span>()</span>
    <span>{</span>
        <span>echo</span> <span>'fazOutraCoisa'</span><span>;</span>
    <span>}</span>
<span>}</span>


<span>/********************************</span>
<span> * Traits (Traços)</span>
<span> */</span>

<span>// Traits estão disponíveis a partir de PHP 5.4.0 e </span>
<span>// são declarados usando "trait"</span>

<span>trait</span> <span>MeuTraco</span>
<span>{</span>
    <span>public</span> <span>function</span> <span>meuMetodoDeTraco</span><span>()</span>
    <span>{</span>
        <span>print</span> <span>'Eu tenho MeuTraco'</span><span>;</span>
    <span>}</span>
<span>}</span>

<span>class</span> <span>MinhaClasseTracada</span>
<span>{</span>
    <span>use</span> <span>MeuTraco</span><span>;</span>
<span>}</span>

<span>$cls</span> <span>=</span> <span>new</span> <span>MinhaClasseTracada</span><span>();</span>
<span>$cls</span><span>-&gt;</span><span>meuMetodoDeTraco</span><span>();</span> <span>// Imprime "Eu tenho MeuTraco"</span>


<span>/********************************</span>
<span> * Namespaces (Espaço nominal)</span>
<span> */</span>

<span>// Esta seção é separada porque a declaração de espaços nominais</span>
<span>// deve ser a primeira instrução em um arquivo. Vamos fingir, aqui não é o caso</span>

<span>&lt;?</span><span>php</span>

<span>// Por padrão, as classes existem no espaço nominal global e podem</span>
<span>// ser explicitamente chamadas com uma barra invertida.</span>

<span>$cls</span> <span>=</span> <span>new</span> <span>\MinhaClasse</span><span>();</span>



<span>// Definir o espaço nominal para o arquivo</span>
<span>namespace</span> <span>Meu\Espaconominal</span><span>;</span>

<span>class</span> <span>MinhaClasse</span>
<span>{</span>
<span>}</span>

<span>// (de outro arquivo)</span>
<span>$cls</span> <span>=</span> <span>new</span> <span>Meu\Espaconominal\MinhaClasse</span><span>;</span>

<span>//Ou de dentro de outro espaço nominal.</span>
<span>namespace</span> <span>Meu\Outro\Espaconominal</span><span>;</span>

<span>use</span> <span>My\Espaconominal\MinhaClasse</span><span>;</span>

<span>$cls</span> <span>=</span> <span>new</span> <span>MinhaClasse</span><span>();</span>

<span>//Ou você pode usar como apelido de espaço nominal;</span>

<span>namespace</span> <span>Meu\Outro\Espaconominal</span><span>;</span>

<span>use</span> <span>Meu\Espaconominal</span> <span>as</span> <span>OutroEspaconominal</span><span>;</span>

<span>$cls</span> <span>=</span> <span>new</span> <span>OutroEspaconominal\MinhaClasse</span><span>();</span>

<span>*/</span>
```

Se você estiver interessado em melhores práticas atualizadas, visite [PHP The Right Way](http://www.phptherightway.com/).

Se você está vindo de uma linguagem com bom gerenciamento de pacotes, confira [Composer](http://getcomposer.org/).

Para os padrões comuns, visite o Grupo de Interoperabilidade de Framework PHP [PSR standards](https://github.com/php-fig/fig-standards).
