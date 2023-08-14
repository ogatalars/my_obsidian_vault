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


No código acima, iniciamos com a declaração de duas matrizes: a matriz campo armazenará os valores de cada posição do tabuleiro, que serão carregados a partir do arquivo txt; a matriz jogo representa os valores visíveis ao jogador, indicando o valor –1 para cada posição que o jogador ainda não escolheu – após cada escolha de campo vazio, o respectivo valor será atualizado na matriz para zero (0). Quando o jogador apontar para uma bomba ou para a bandeira, o jogo se encerrará. Em seguida, são criadas as variáveis qtdLinhas e qtdColunas, que serão utilizadas na próxima etapa de escrita no arquivo. Perceba que, para obter a quantidade de linhas de uma matriz, pode-se utilizar GetLength com o valor 0, e, para obter a quantidade de colunas, o mesmo comando com o valor 1. A variável problemaArquivo indicará se houve problema no carregamento dos dados

