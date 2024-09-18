1- Chegou a hora da verdade! A interface está funcionando, e vocês decidem colocar a
integração com o banco de dados para funcionar. Assim, escrevem o seguinte código:

$str = 'mysql:host=localhost;dbname=meu_banco;charset=utf8';

$db = new PDO($str, 'root', 'root');

$select = 'SELECT * FROM produtos';

Após este início, quais deveriam ser as linhas para executar este select no banco e pegar
todos os produtos?

a$ produtos = $db->fetch($select)

**b $consulta = $db->query($$select);**

**$produtos = $consulta->fetchAll();**

c$ produtos = $db->fetchAll($select);

d$consulta = $db->query($select);

$produtos = $consulta->fetch();

e$produtos = $db->exec($select)

2 - Você foi contratado por uma empresa para desenvolver uma aplicação de e-commerce. Na
sua primeira semana, você foi incumbido de fazer programação em dupla com um
programador back-end júnior. Juntos, **vocês vão fazer o formulário de login do e-**
**commerce.** No entanto, o seu colega não sabe muito bem qual seria o método mais
adequado para o formulário. Você responde que o mais adequado é o método:

aGET ou POST seriam métodos igualmente adequados para este formulário.

bGET, pois mantém as informações escondidas do usuário, ideal para um formulário

de login;

cGET, pois mantém as informações explícitas para o usuário, ideal para um formulário

de login;

dPOST, pois mantém as informações explícitas para o usuário, ideal para um

formulário de login;

**ePOST, pois mantém as informações escondidas do usuário, ideal para um formulário**

**de login;**

3 - Na hora de listar os produtos da loja, que vem dentro de uma array $produtos, o seu

colega chegou ao seguinte código:

for($i = 0; $i < count($produtos); $i++) {

echo '<p>'. $produtos[$i]['nome'] .'</p>';

}

Você identifica que o loop pode ser facilmente substituído por um foreach. Assim, sugere

ao seu colega que substitua os trechos em negrito por:

aforeach($produtos) e $p['nome']

bforeach($produtos) e $produtos['nome']

cforeach($produtos as $i) e $produtos[$i]['nome']

dforeach($p in $produtos) e $p['nome']

**e foreach($produtos as $p) e $p['nome']**

4 - Você e seu colega criam uma função para reajustar o valor de forma a oferecer um

desconto base, cujo valor pode ser dobrado se o usuário atender a certas condições. A

função está exemplificada abaixo:

function calcularValorFinal($valor, $descontoBase, $dobrarDesconto){

if($dobrarDesconto){

$valor = $valor * (100 - $descontoBase * 2)/100;

} else {

$valor = $valor * (100 - $descontoBase)/100;

}

}

Devido à arquitetura do sistema, vocês não podem retornar o conteúdo de $valor usando

um return. Em outras palavras, isto significa que deve ser possível fazer o seguinte:

$valor = 500;

calcularValorFinal($valor, 15, false);

echo $valor; // imprime 425

Assim, uma alternativa para essa situação é

a usar uma função recursiva.

b extrair a função para uma biblioteca externa.

**c passar o parâmetro valor por referência.**

d entender que não há solução para este problema.

e usar uma função anônima

5 - **O sistema está caminhando muito bem!** Vocês partem para o desenvolvimento do painel

administrativo, em que deve ser possível fazer upload de uma foto para o produto. Vocês

chegam ao seguinte código:

if(array_key_exists('foto_produto', $_FILES)){

$localAtual = $_FILES['foto_produto']['tmp_name'];

$novoLocal = "./imagem_produtos/$id.jpg";

_______;

}

Qual deve ser o comando para mover a imagem de $localAtual para $novoLocal?

a mv($localAtual, $novoLocal);

**b rename($localAtual, $novoLocal);** PODE TA COMO UNLINK

c transfer($localAtual, $novoLocal);

d mvfile($localAtual, $novoLocal);

e move($localAtual, $novoLocal)

6 - Para o sistema de **descontos**, vocês criam a seguinte classe:

class Promocao {

private $titulo;

private $desconto;

private $cupom;

public function __construct($t, $d, $c) {

$this->titulo = $t;

$this->desconto = $d;

$this->cupom = $c;

}

public function aplicarDesconto($valor){

return $valor * (100-$this->desconto)/100;

}

public function cupomValido($palpite){

return $palpite == $this->cupom;

}

Podemos dizer que as propriedades desta classe são

a aplicarDesconto e cupomValido.

**b $titulo, $desconto, $cupom.**

c a classe não tem propriedades.

d aplicarDesconto e cupomValido.

e $t, $d e $c

7 - Possível questão de PHP -> 

<?php
// Função recursiva para calcular o fatorial
function fatorial($numero) {
    // Caso base: se o número for 0 ou 1, o fatorial é 1
    if ($numero == 0 || $numero == 1) {
        return 1;
    }
    // Chamada recursiva: número * fatorial do número anterior
    return $numero * fatorial($numero - 1);
}

// Recebendo o número do usuário via formulário ou via linha de comando
$numero = isset($_POST['numero']) ? $_POST['numero'] : (int)readline("Digite um número: ");

// Verificando se o número é válido
if ($numero < 0) {
    echo "O fatorial não é definido para números negativos.";
} else {
    // Chamando a função recursiva e exibindo o resultado
    echo "O fatorial de $numero é: " . fatorial($numero);
}
?>


8 - 
compras:

function somaCarrinho($produtos) {

$soma = 0;

foreach($produtos as $p){

$soma += $p['valor'];

}

return $soma;

}

$carrinho = [];

$valorTotal = somaCarrinho($carrinho).

No entanto, ao passar um carrinho vazio, o resultado é 0. Isso, embora correto, causa

confusão com carrinhos cujo valor é realmente 0 (isto é, em que todos os produtos são

gratuitos devido ao cupom).

Para resolver isso, vocês alteraram a função para criar uma exception/exceção quando

isso acontece:

function somaCarrinho($produtos) {

if(count($produtos) == 0){

throw new Exception("Carrinho vazio");

}

$soma = 0;

foreach($produtos as $p){

$soma += $p['valor'];

}

return $soma;

}

Agora falta envolver a chamada da função em um try/catch. Qual seria a forma adequada

de fazer isso?

RESPOSTA: 

try{

$valorTotal = somaCarrinho($carrinho);

} catch(Exception $e){

echo 'Carrinho vazio'; // o aluno pode inventar ou omitir a mensagem

}

function fatorial_teste($numero) {
if($numero == 0 || &numero == 1) {
reutnr 1
} 
return $numero * fatorial($$numero -1);
}

$numero = isset($_post['numero'] ) ? $_post['numero'] : (int)readline('Digite um numero: ")

if(numero < 0) {
echo "o fatorial não é defini..."
} else {
echo "fatorial de numero é " . fatorial(numero)
}