Um aspecto importante no desenvolvimento de qualquer aplicação é a implementação de um recurso para a persistência de dados, ou seja, a capacidade de o programa salvar e recuperar dados ao ser reiniciado. Esse recurso é muito útil para o desenvolvimento de um jogo, pois permite a adição de opções de configuração para os jogadores e para as partidas, possibilitando salvar preferências e resultados, criando um histórico de interação e promovendo maior dinamismo. O ideal, para aplicações mais sofisticadas, é o uso de um banco de dados para o armazenamento de informações, porém, para aplicações mais simples ou mesmo com poucos dados gerados, você pode utilizar arquivos para reter os dados gerados pelo programa. Essa é uma abordagem simples, fácil e ideal em seu primeiro contato com alguma forma de persistência de dados.

### Utilização de arquivos em CSharp
A utilização de arquivos por programas remete ao uso de documentos simples, criados e armazenados no diretório de pastas do sistema operacional. Esses arquivos são utilizados como uma forma simples e eficiente de armazenar alguns dados da aplicação, permitindo que o programa seja encerrado sem perdê-los e, quando reiniciado, recorra à leitura do arquivo para restaurar os dados salvos na aplicação. Em um jogo, a utilização desse recurso pode ser essencial para implementar funcionalidades que necessitem da gravação de dados, como a definição de checkpoints, os itens que o jogador possui no momento em que salvou o jogo, rankings e scores obtidos em partidas, etc.

O primeiro passo para trabalhar com a leitura de dados por um programa é criar um arquivo que será acessado por ele. Devemos criar um arquivo de texto (extensão txt) com o nome “campo”. O segundo passo é definir onde salvar esse arquivo. É interessante que ele esteja junto à pasta do projeto que o utiliza. Caso você utilize o Visual Studio para os estudos, recomenda-se colocar esse arquivo na pasta principal do projeto, junto ao arquivo de extensão sln. Após posicionar o arquivo no local desejado, é importante definir os conceitos de caminho absoluto e caminho relativo. No código que implementaremos a seguir, teremos que indicar onde se encontra o arquivo que desejamos acessar; para isso, devemos apontar o caminho até ele utilizando uma das duas formas mencionadas. O caminho absoluto corresponde à indicação de sequência de pastas, desde a raiz do disco rígido até a pasta em que se encontra o arquivo desejado (incluindo o nome do arquivo e sua extensão). 

C:\Users\Rafael\source\repos\Capitulo3\campo.txt

Contudo, ao utilizar esse caminho no código, é preciso duplicar as barras para evitar que a linguagem interprete que deve executar algum comando no meio da string que armazena o caminho, já que esses comandos iniciam com o sinal de barra invertida (\)
C:\\Users\\Rafael\\source\\repos\\Capitulo3\\campo.txt

Outra forma de indicar o arquivo é apontar o caminho relativo. Para isso, toma-se como referência o diretório que executa o projeto

\..\..\..\campo.txt

Assim como no caminho absoluto, ao criar a string com esse caminho, é necessário duplicar as barras. Portanto, em código, o caminho relativo é:

..\\..\\..\\..\\campo.txt

### Leitura de dados em um arquivo
Exemplo de código usando um arquivo:

int[,] campo = new int[10, 10];//matriz com posições dos elementos do campo 
int[,] jogo = new int[10, 10];//matriz que registra ações do jogador 
int qtdLinhas = campo.GetLength(0); 
int qtdColunas = campo.GetLength(1); 
bool problemaArquivo = false;
string caminho_absoluto = "C:\\Users\\Rafael\\source\\repos\\Capitulo3\\campo.txt"; 
string caminho_relativo = "..\\..\\..\\..\\campo.txt";

try { //Informando o caminho e nome do arquivo StreamReader sr = new StreamReader(caminho_absoluto); //Leitura da primeira linha do arquivo 
String linha_arq = sr.ReadLine(); 
int linha_mtz = 0; int coluna_mtz = 0; //Continua lendo até não identificar uma nova linha 
while (linha_arq != null || linha_mtz<10) { //Separação de cada elemento da string pela vírgula
foreach (var numero in linha_arq.Split(',')) { int num; //Conversão de cada elemento separado para um 
int if (int.TryParse(numero, out num)) { //armazenando elemento na matriz campo 
campo[linha_mtz, coluna_mtz] = num; 
jogo[linha_mtz, coluna_mtz] = -1; 
coluna_mtz++; } } //Leitura da próxima linha 
linha_arq = sr.ReadLine(); //Avançando para a leitura da próxima linha, 

//começando pelo primeiro valor (primeira coluna) 
coluna_mtz = 0; linha_mtz++; } 

//Encerrando a leitura do arquivo
sr.Close(); } catch (Exception e) 
{ Console.WriteLine( "Ocorreu um problema na leitura do arquivo!"); 
problemaArquivo = true; 
}


No código acima, iniciamos com a declaração de duas matrizes: a matriz campo armazenará os valores de cada posição do tabuleiro, que serão carregados a partir do arquivo txt; a matriz jogo representa os valores visíveis ao jogador, indicando o valor –1 para cada posição que o jogador ainda não escolheu – após cada escolha de campo vazio, o respectivo valor será atualizado na matriz para zero (0). 

Quando o jogador apontar para uma bomba ou para a bandeira, o jogo se encerrará. Em seguida, são criadas as variáveis qtdLinhas e qtdColunas, que serão utilizadas na próxima etapa de escrita no arquivo. Perceba que, para obter a quantidade de linhas de uma matriz, pode-se utilizar GetLength com o valor 0, e, para obter a quantidade de colunas, o mesmo comando com o valor 1. 

A variável problemaArquivo indicará se houve problema no carregamento dos dados Nesse caso, a matriz não poderá ser montada e, portanto, o jogo não será iniciado. As strings caminho_absoluto e caminho_relativo são as duas opções para indicar a localização do arquivo, como visto anteriormente. 

Em seguida, iniciaremos a leitura do arquivo. Como esse procedimento pode lançar uma exceção (equivalente a um “problema” de execução do programa), como no caso de não ser identificado o arquivo no caminho indicado ou de o formato dos dados não estar na disposição esperada pelo programa, é necessário realizar um tratamento de exceção, que consiste em prever a possibilidade da ocorrência desse problema e indicar uma mensagem de erro ou um fluxo de execução alternativo, evitando, assim, que o programa simplesmente se encerre com erro (evento popularmente conhecido como crash). 

Por isso, criamos um bloco try e, dentro dele, realizamos uma tentativa de acessar o arquivo. Todo o código de acesso e leitura do arquivo estará dentro das chaves desse bloco. Perceba que, ao final dele, há outro bloco, chamado catch. 

O parâmetro desse bloco indica o tipo de exceção que será capturada para iniciar a exceção do código do bloco. Nesse caso, trata-se de uma exceção genérica, indicando que qualquer tipo de problema na leitura iniciará a execução desse bloco. Como resultado de alguma exceção gerada, apenas será mostrada uma mensagem de erro, e a variável problemaArquivo receberá o valor true, impedindo que o jogo inicie, como veremos adiante

Dentro do bloco try, a primeira instrução cria um objeto do tipo StreamReader, passando como argumento o caminho do arquivo. Esse objeto abre um fluxo de comunicação com o arquivo informado, permitindo o uso de métodos para realizar a leitura dos seus dados. O comando seguinte, utilizando o método ReadLine() desse objeto, irá justamente ler todo o conteúdo da primeira linha, armazenando-o na string de nome linha_arq. Como é necessário dividir cada linha para obter os valores de cada posição, são criadas as variáveis linha_mtz e coluna_mtz para auxiliar no posicionamento de cada valor

Em seguida, é utilizado um laço para indicar a repetição do processo de leitura de uma linha e de tratamento dos dados lidos, armazenando-os na matriz. Portanto, esse laço se repetirá enquanto a string que armazena uma linha do arquivo (linha_arq) for diferente de null. Quando se deseja ler todas as linhas de um arquivo, essa é a abordagem padrão, mas, neste caso em específico, queremos ler apenas as dez primeiras linhas, não sendo necessário ler as últimas (com contagem de vitórias e derrotas). Por isso, a eventual contagem de linhas até dez também é uma condição limitante para encerrar o laço.

Dentro do laço, é utilizado o comando foreach parar iterar (percorrer) entre cada valor das linhas do arquivo. Cada um desses valores, representado pela variável numero, é obtido pelo método Split, aplicado na string linha_arq, usando como critério de separação a vírgula

Para cada valor resultante dessa divisão da string em partes, é realizada uma tentativa de conversão do valor, que ainda está em formato de texto, para um inteiro. A variável numero indica o valor de entrada (texto), e num indica a variável int de saída, após essa conversão. Se a conversão der certo, o valor em num será armazenado na matriz campo, na respectiva posição indicada por linha_mtz e coluna_mtz. Na matriz jogo, na mesma posição, é armazenado o valor inicial –1. E o valor de coluna_mtz é incrementado para que o próximo valor lido seja armazenado na coluna seguinte.

Quando o foreach se encerrar, indicando o término da conversão dos valores de uma linha, uma próxima linha será lida pelo comando ReadLine(). O valor da coluna voltará para zero, e o da linha será incrementado para continuar preenchendo corretamente a matriz com os próximos valores a serem convertidos. Assim, o laço se repetirá enquanto houver uma nova linha lida. Ao encerrar-se o processo de leitura, o fluxo aberto com o arquivo é encerrado pelo método Close()

Observe que a definição dos valores do tabuleiro não é mais realizada de forma estática no código, mas provém de uma fonte externa. Assim, quem não entende de programação pode facilmente criar um novo campo no arquivo externo para que outro jogador participe.

Se ocorrer algum problema na leitura do arquivo que você está implementando, verifique com atenção os dados digitados. Perceba que o código implementado para leitura segue uma sequência predeterminada; portanto, os dados no arquivo precisam estar nessa mesma sequência lógica ou haverá inconsistência de informação e problema na leitura. Redobre a atenção, também, para o caminho indicado para o arquivo.



if (!problemaArquivo) { bool fimJogo = false; bool vitoria = false; do { for (int l = 0; l < qtdLinhas; l++) { for (int c = 0; c < qtdColunas; c++) { Console.Write(string.Format("{0} ", jogo[l, c])); Console.Write(Environment.NewLine + Environment.NewLine); } Console.Write("Selecione uma linha [1-10]: "); int linha = Convert.ToInt32(Console.ReadLine()) - 1; Console.Write("Selecione uma coluna [1-10]: "); int coluna = Convert.ToInt32(Console.ReadLine()) - 1; switch (campo[linha, coluna]) { case 0: jogo[linha, coluna] = 0; Console.Write("Continue tentando.\n\n"); break; case 1: jogo[linha, coluna] = 1; Console.Write("BOOOM. Você perdeu.\n\n"); fimJogo = true; break; default: jogo[linha, coluna] = 2; Console.Write("Parabéns. Você ganhou!\n\n"); fimJogo = true; vitoria = true; break; } } while (!fimJogo); }

