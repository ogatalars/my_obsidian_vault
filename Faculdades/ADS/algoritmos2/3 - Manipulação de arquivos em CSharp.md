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


### Escrita de dados em um arquivo

O processo de escrita (ou salvamento) de dados em um arquivo é bem semelhante ao de leitura. Agora que conseguimos carregar os dados de um campo para o nosso programa e jogar uma partida, podemos implementar um código para salvar algum dado modificando o mesmo arquivo utilizado. Já foi apontado que as duas últimas linhas desse arquivo registram a quantidade de vitórias e derrotas do jogador; portanto, implementaremos uma lógica em que, logo após o término da partida, será identificado se o jogador venceu ou perdeu e será incrementada a respectiva contagem no arquivo.

string[] arquivo = File.ReadAllLines(caminho_absoluto); string msgVitorias = arquivo[arquivo.Length - 2]; string msgDerrotas = arquivo[arquivo.Length - 1]; try { StreamWriter sw = new StreamWriter(caminho_absoluto); int contagem; //de vitorias ou derrotas int linha_sobrescrever; string texto; if (vitoria) { int.TryParse(msgVitorias.Split(':')[1], out contagem); linha_sobrescrever = 11; texto = "Vitórias:"; } else { int.TryParse(msgDerrotas.Split(':')[1], out contagem); linha_sobrescrever = 12; texto = "Derrotas:"; } contagem++; for (int i = 0; i < arquivo.Length; i++) { if (i == linha_sobrescrever) sw.WriteLine(texto + contagem); else sw.WriteLine(arquivo[i]); } sw.Close(); } catch (Exception e) { Console.WriteLine( "Ocorreu um problema na escrita do arquivo!"); }

A primeira instrução indica a leitura de todas as linhas do arquivo indicado em caminho_absoluto e a conversão para um vetor de strings, em que cada posição corresponde ao conteúdo de uma das linhas. Abaixo, o valor da penúltima posição desse vetor é armazenado em msgVitorias e o valor da última posição, em msgDerrotas. Em seguida, é iniciado o processo de escrita no arquivo (assim como no processo de leitura, ele é inserido dentro de um bloco try). Um objeto StreamWriter é criado a partir do caminho do arquivo. Três variáveis são utilizadas para compor a mensagem que será sobrescrita no arquivo (contagem de vitórias ou derrotas). Caso a variável booleana vitoria seja true, indicando que o jogador venceu a partida, a string msgVitorias é dividida a partir do sinal de dois pontos (:). Assim, será gerado um vetor de strings com duas posições: a primeira armazena o texto "Vitórias" e a segunda, a contagem de vitórias. Portanto, msgVitorias.Split(':')[1] indica a segunda posição desse vetor, que é a contagem. Essa string será convertida em um valor do tipo int, representado pela variável contagem. A variável linha_sobrescrever armazena 11, que é a indicação da linha do arquivo em que se encontra essa contagem de vitórias. Já a variável texto recebe "Vitórias:". Caso o usuário tenha perdido a partida, a variável contagem armazena o valor da contagem de derrotas atual, a variável linha_sobrescrever recebe o valor 12 e a variável texto recebe "Derrotas:". Em seguida, a variável contagem é incrementada para indicar a vitória ou derrota na última partida finalizada. Por fim, o vetor que inicialmente continha todas as linhas do arquivo é percorrido, e cada linha é sobrescrita com o método WriteLine, usando o conteúdo de uma nova posição do vetor. A maioria das linhas do arquivo é reescrita com o mesmo conteúdo anterior, porém a linha indicada em linha_sobrescrever, que representa a contagem de vitórias ou derrotas do jogador, é alterada. O que é reescrito é a mensagem armazenada em texto ("Vitórias:" ou "Derrotas:"), concatenada com o valor atualizado em contagem. O procedimento demonstrado é suficiente para modificar o arquivo e gravar os dados atualizados gerados por uma nova partida. Essa é uma forma simples de manter um registro dos resultados de um jogo ou das configurações de uma aplicação qualquer.

### Resumo chatGPT
A manipulação de arquivos em C# é uma parte fundamental da programação, pois permite que você leia e escreva dados em arquivos no sistema de arquivos local ou em outros locais, como servidores remotos. É uma habilidade crucial ao lidar com armazenamento de dados, persistência de informações, leitura e gravação de configurações, geração de relatórios e muito mais. Vamos explorar profundamente a manipulação de arquivos em C#:

**Namespace:**
Para trabalhar com arquivos em C#, você precisa usar o namespace `System.IO`, que fornece classes e métodos para operações de entrada e saída (I/O) de arquivos.

```csharp
using System.IO;
```

**Leitura de Arquivos:**
Você pode ler dados de um arquivo usando classes como `File`, `StreamReader` ou `BinaryReader`. Aqui está um exemplo simples usando `StreamReader` para ler texto de um arquivo:

```csharp
string caminhoArquivo = "exemplo.txt";
using (StreamReader leitor = new StreamReader(caminhoArquivo))
{
    string linha;
    while ((linha = leitor.ReadLine()) != null)
    {
        Console.WriteLine(linha);
    }
}
```

**Escrita em Arquivos:**
Você pode escrever dados em um arquivo usando classes como `File`, `StreamWriter` ou `BinaryWriter`. Aqui está um exemplo usando `StreamWriter` para escrever texto em um arquivo:

```csharp
string caminhoArquivo = "saida.txt";
using (StreamWriter escritor = new StreamWriter(caminhoArquivo))
{
    escritor.WriteLine("Olá, Mundo!");
    escritor.WriteLine("Isso é um exemplo de escrita em arquivo.");
}
```

**Tratamento de Exceções:**
É importante tratar exceções ao trabalhar com arquivos, pois várias situações podem causar erros, como falta de permissões, arquivos inexistentes, falta de espaço em disco, etc. Use blocos `try-catch` para lidar com exceções:

```csharp
try
{
    // Operações de leitura ou escrita de arquivo aqui.
}
catch (IOException e)
{
    Console.WriteLine("Erro de I/O: " + e.Message);
}
```

**Verificação de Existência e Informações de Arquivo:**
Você pode verificar se um arquivo existe e obter informações sobre ele usando métodos da classe `File` ou da classe `FileInfo`:

```csharp
string caminhoArquivo = "exemplo.txt";
if (File.Exists(caminhoArquivo))
{
    FileInfo fileInfo = new FileInfo(caminhoArquivo);
    Console.WriteLine("Nome do arquivo: " + fileInfo.Name);
    Console.WriteLine("Tamanho do arquivo: " + fileInfo.Length + " bytes");
    Console.WriteLine("Última modificação: " + fileInfo.LastWriteTime);
}
```

**Manipulação de Diretórios:**
Além de arquivos, você também pode criar, listar e manipular diretórios usando a classe `Directory` ou a classe `DirectoryInfo`. Por exemplo, para criar um diretório:

```csharp
string caminhoDiretorio = "meuDiretorio";
Directory.CreateDirectory(caminhoDiretorio);
```

**Exclusão de Arquivos e Diretórios:**
Você pode excluir arquivos e diretórios usando métodos das classes `File` e `Directory`. Tenha cuidado ao usar esses métodos, pois a exclusão é irreversível:

```csharp
string caminhoArquivo = "exemplo.txt";
File.Delete(caminhoArquivo);

string caminhoDiretorio = "meuDiretorio";
Directory.Delete(caminhoDiretorio, true); // O segundo argumento indica se a exclusão é recursiva (incluindo subdiretórios).
```

Lembrando que operações de leitura e escrita de arquivos podem causar exceções, portanto, é fundamental envolvê-las em tratamento de exceções para garantir que seu programa seja robusto e lide adequadamente com erros. Além disso, certifique-se de fechar adequadamente os recursos de arquivo usando os blocos `using` para evitar vazamentos de recursos e garantir que os arquivos sejam fechados após o uso.