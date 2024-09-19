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


1-
**Lucas é um engenheiro de software** com experiência em vários paradigmas de programação, mas recentemente, ele se juntou a uma empresa que trabalha principalmente com PHP para desenvolver aplicações web. Neste novo cargo, Lucas é responsável pelo desenvolvimento de um sistema de gestão de projetos online. Uma das principais características desse sistema é a capacidade de manter os usuários autenticados para que possam acessar seus projetos após o login.

No entanto, Lucas percebeu que alguns usuários estavam tendo problemas com suas sessões, perdendo o acesso enquanto estavam trabalhando em seus projetos. Preocupado com a segurança e a experiência do usuário, Lucas decidiu investigar mais a fundo a forma como as sessões foram implementadas.

Ao analisar o código, Lucas notou que o desenvolvedor anterior não estava usando uma abordagem padrão de gerenciamento de sessões em PHP. Em vez de usar as funções nativas de sessão do PHP, o código tinha uma implementação personalizada que usava cookies diretamente, sem qualquer tipo de criptografia ou validação adequada.

Lucas entende que, para corrigir o problema, ele precisará reescrever a maneira como o sistema lida com as sessões, incorporando as práticas recomendadas para garantir que as sessões sejam seguras e estáveis. Ele decide começar lendo a documentação oficial do PHP sobre sessões e implementa uma solução usando as funções nativas de sessão.

Com base neste cenário, qual das seguintes alternativas representa a abordagem mais apropriada e segura para iniciar e verificar uma sessão em PHP?
	

a)f (!session_id()) {
    session_start();
}
 
	

b)if (!isset($_SESSION)) {
    session_initialize();
}
 
	

c)session_activate();
if ($_SESSION['user'] == "") {
    redirect('login.php');
}
 
	

d)if (!isset($_COOKIE['PHPSESSID'])) {
    session_create();
}
 
	

 PARECE SER ESSA AQUI: 
 e)**session_start();**
 **if (!isset($_SESSION['loggedin']))** 
			**{**
                               **header('Location: login.php');**
                        **}**
 

2-
Gustavo é um desenvolvedor web que está trabalhando em um projeto de blog para um cliente. O cliente deseja que os posts mais recentes apareçam em destaque na homepage. Para isso, Gustavo decidiu criar uma função em PHP que pegue os cinco posts mais recentes do banco de dados.

Ele se lembra das aulas de PHP que teve e sabe que uma função é um bloco de código reutilizável que pode ser executado quando necessário. No entanto, ele está um pouco confuso sobre a sintaxe correta para definir uma função.

Qual das alternativas a seguir apresenta a maneira correta de definir uma função em PHP para buscar os cinco posts mais recentes?
	

a) **Function getRecentPosts($limit) {**

     **// Código para buscar os posts mais recentes com base no valor de $limit }**
	

b)function getRecentPosts() {

    $limit = 5;

    // Código para buscar os posts mais recentes

}
	

c)recentPosts = function(5) {

        // Código para buscar os 5 posts mais recentes

}
	

d)def getRecentPosts(5) {

    // Código para buscar os 5 posts mais recentes

}
	

e)getRecentPosts(5) {

        // Código para buscar os 5 posts mais recentes

}

3-
Leonardo é um desenvolvedor de sistemas web e, recentemente, foi contratado por uma organização não governamental (ONG) dedicada à proteção animal. Esta ONG tem um site onde os usuários podem adotar animais, doar recursos e se voluntariar para diversas atividades. O site era mantido por um antigo desenvolvedor que usava funções mysql_* para conectar-se ao banco de dados, mas, com o passar do tempo, esse tipo de conexão tornou-se obsoleto e inseguro. Sabendo disso, a diretoria da ONG decidiu que era o momento de atualizar o sistema.

Dentre as preocupações da diretoria, a segurança era a principal. Eles haviam lido sobre SQL Injection e estavam alarmados com a possibilidade de um ataque deste tipo. Leonardo, então, decidiu implementar o PDO (PHP Data Objects) no sistema, pois sabia que ele proporciona uma camada de acesso ao banco de dados mais segura e permite a utilização de prepared statements, que ajudam a prevenir ataques de SQL Injection.

Leonardo começou a refatorar o código. Ele teve que transformar várias consultas diretas ao banco, que eram vulneráveis, em consultas seguras usando PDO. Uma das tarefas era pegar os detalhes de um animal específico para mostrar na página de detalhes.

A antiga consulta era algo como:

 

$query = "SELECT * FROM animais WHERE id = " . $_GET['id'];

$result = mysql_query($query);

$animal = mysql_fetch_assoc($result);

 

Leonardo sabe que este código é vulnerável a ataques de SQL Injection por usar diretamente o valor de $_GET['id'] na consulta.

Com base nessa situação, qual das seguintes alternativas representa a maneira correta e segura de reescrever a consulta acima usando PDO e prepared statements?
	

a)$pdo = new PDO('mysql:host=localhost;dbname=ong', 'user', 'password');
$query = "SELECT * FROM animais WHERE id = " . $_GET['id'];
$stmt = $pdo->query($query);
$animal = $stmt->fetch();
 
	

b)$pdo = new PDO('mysql:host=localhost;dbname=ong', 'user', 'password');
$query = "SELECT * FROM animais WHERE id = ?";
$stmt = $pdo->prepare($query);
$stmt->execute($_GET['id']);
$animal = $stmt->fetch();
 
	

c)$pdo = new PDO('mysql:host=localhost;dbname=ong', 'user', 'password');
$query = "SELECT * FROM animais";
$stmt = $pdo->query($query);
$animal = $stmt->fetch();
 
	
GPT respondeu essa:
**d)$pdo = new PDO('mysql:host=localhost;dbname=ong', 'user', 'password');**
**$query = "SELECT * FROM animais WHERE id = :id";**
**$stmt = $pdo->prepare($query);**
**$stmt->execute([':id' => $_GET['id']]);**
**$animal = $stmt->fetch();**
 
	
e)
$pdo = new PDO('mysql:host=localhost;dbname=ong', 'user', 'password');
$query = "SELECT * FROM animais WHERE id = $_GET['id']";
$stmt = $pdo->prepare($query);
$stmt->execute();
$animal = $stmt->fetch();

4-
Você foi contratado por uma empresa para desenvolver uma aplicação de e-commerce. Na sua primeira semana, você foi incumbido de fazer programação em dupla com um programador back-end júnior. Juntos, vocês vão fazer o **formulário de login do e-commerce.** No entanto, o seu colega não sabe muito bem qual seria o método mais adequado para o formulário. Você responde que o mais adequado é o método:
	

 a)**POST, pois mantém as informações escondidas do usuário, ideal para um formulário de login;**

b)GET, pois mantém as informações explícitas para o usuário, ideal para um formulário de login;
	
c)POST, pois mantém as informações explícitas para o usuário, ideal para um formulário de login;

d)GET ou POST seriam métodos igualmente adequados para este formulário.
	
e)GET, pois mantém as informações escondidas do usuário, ideal para um formulário de login;

5-
Para o sistema de descontos, vocês criam a seguinte classe:

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
	

aplicarDesconto e cupomValido.
	

$t, $d e $c.
	

a classe não tem propriedades.
	

**) $titulo, $desconto, $cupom.**
	

aplicarDesconto e cupomValido.

6-
Fernanda é uma desenvolvedora backend que trabalha em uma start-up de comércio eletrônico. Ela foi designada para desenvolver a seção de "checkout" do site, onde os clientes inserirão detalhes do cartão de crédito para finalizar a compra.

Durante uma reunião de planejamento, Fernanda e sua equipe discutiram sobre quais métodos HTTP, especificamente GET e POST, deveriam ser usados para diferentes operações no site. Fernanda defendeu que a submissão de detalhes do cartão de crédito dos clientes deveria usar um método em particular por razões de segurança e para não expor informações sensíveis na URL do navegador.

Qual método HTTP Fernanda deveria escolher para a submissão de detalhes do cartão de crédito dos clientes ao finalizar a compra?
	

a)POST, porque pode enviar grandes quantidades de dados.
	

b)GET, porque é mais rápido e eficiente.
	

 **c)POST, porque mantém os dados enviados ocultos na URL e é mais seguro para informações sensíveis.**
	

d)Ambos, GET e POST, porque a escolha do método não afeta a segurança da transação.
	

e)GET, porque pode manter os detalhes do cartão de crédito na URL para referência futura.


7-
A recursividade é um conceito fundamental em computação e programação, referindo-se à capacidade de uma função chamar a si mesma para resolver um problema. Esta técnica pode ser extremamente útil ao lidar com estruturas de dados hierárquicas ou problemas que podem ser divididos em subproblemas mais simples, semelhantes ao problema original. Embora a recursividade possa ser uma ferramenta poderosa, os desenvolvedores devem ser cautelosos ao utilizá-la, pois o uso inadequado pode levar a um consumo excessivo de recursos ou mesmo a uma falha no programa devido a uma "recursão infinita".

No contexto do PHP, assim como em muitas outras linguagens de programação, a recursividade é implementada permitindo que uma função chame a si mesma. Uma aplicação clássica da recursividade é o cálculo do fatorial de um número.

Dado este contexto, escreva um código em PHP que implementa uma função recursiva para calcular o fatorial de um número. 

<?php
function fatorial($n) {
    if ($n < 0) {
        return null;
    }
    if ($n === 0) {
        return 1;
    }
    return $n * fatorial($n - 1);
}

$numero = 5;
$resultado = fatorial($numero);
if ($resultado !== null) {
    echo "O fatorial de $numero é $resultado.";
} else {
    echo "Fatorial não definido para números negativos.";
}
?>

<?php

function fatoraNumero($numero) {
   if($numero == 0 || $numero==1){
   return 1;
   }
   return $numero * fatorial($numero - 1);
   }


?>