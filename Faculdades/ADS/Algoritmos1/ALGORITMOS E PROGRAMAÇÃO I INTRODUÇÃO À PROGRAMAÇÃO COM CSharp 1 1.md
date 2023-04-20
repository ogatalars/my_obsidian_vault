### 4 - Tomando decisões e repetindo instruções
Uma linguagem de programação é uma notação formal que utilizamos para descrever precisamente soluções para problemas. Essa solução é alcançada em duas etapas. Na primeira delas, a solução é representada pela escrita ou desenvolvimento do algoritmo, que pode envolver um pensamento considerável por parte do solucionador. Na segunda etapa, uma vez que um algoritmo de solução foi pensado, ele precisa ser codificado em uma notação formal (uma linguagem de programação) para que possa ser executado em um computador.

A dificuldade envolvida na segunda etapa é determinada pela linguagem de programação que se usa para codificar o algoritmo de solução.

As linguagens de programação devem ser cuidadosamente projetadas para garantir que essa etapa seja fácil. A facilidade de programar o algoritmo de solução na linguagem de programação escolhida depende de quão estreita é a lacuna semântica entre essa linguagem de programação e o nível de abstração no qual o procedimento de solução foi concebido pelo usuário. Em geral, quanto mais baixo nível for uma linguagem, maior será a lacuna semântica.

Uma linguagem de baixo nível é a linguagem de máquina, representada por bits zeros e uns. Esta é muito mais complexa para o programador, além de ter o aprendizado dificultado. Por outro lado, tem melhor aproveitamento da arquitetura da máquina.

Uma linguagem de alto nível é aquela escrita em inglês formal, com palavras e instruções mais próximas de nosso entendimento, o que requer um maior nível de abstração, porém, o aprendizado é menos complexo

Diferentes linguagens de programação têm estruturas para oferecer suporte aos recursos necessários para resolver problemas em domínios específicos. Por exemplo, a linguagem Cobol tem suporte para resolver problemas relacionados a negócios; já a linguagem C, para problemas de programação de sistemas; e Lisp/Prolog, para aplicativos de inteligência artificial.

A linguagem de programação escolhida para expressar o procedimento de solução para um determinado problema tem um grande impacto na qualidade do código escrito (sua legibilidade, escrita e manutenção) e na produtividade do programador.

### 4.1 - Linguagem imperativa
Não há uma consideração ou documentação oficial apontando exatamente quantas linguagens de programação existem, porém, mais delas estão sendo criadas exatamente para resolver problemas, sejam para fins gerais ou específicos. Portanto, é útil organizar essas linguagens em categorias que nos ajudem a entender as semelhanças e as diferenças entre elas, de modo que facilite, inclusive, o aprendizado.

Embora não haja uma maneira definitiva de classificar ou agrupar os tipos de linguagens de programação, uma abordagem comum é dividi-los em estilos de programação ou, formalmente definido, em paradigmas centrais, conforme ilustra a figura 1. Isso determina como seu código é estruturado e organizado.

Paradigmas -> a) Imperativo; b) Declarativo; 
a) Imperativo -> Procedural, Orientado a objetivos, Processamento paralelo
b) Declarativo -> Lógico, funcional, Database

é possível observar que as linguagens de programação podem ser divididas em dois paradigmas ou estilos de programação distintos: o imperativo e o declarativo.

**A programação imperativa** expressa comandos para o computador executar – ela se concentra no processo explícito de o que um programa deve fazer e como esse programa deve fazer (FORBELLONE; EBERSPACHER, 2005). 
Se quisermos obter a soma de dois números, este código pode ser expresso conforme o exemplo a seguir: 
1 int numA, numB, soma; 
2 numA = 4; 
3 numB = 5; 
4 soma = numA + numB; 
5 Console.WriteLine("O resultado desta operação é " + soma);

Observe que o código apresentado é baseado em declarações que alteram o estado do programa, dizendo ao computador o que fazer e como fazer as coisas. Em outras palavras, seu código é baseado na definição de variáveis e na alteração dos valores dessas variáveis.

A programação declarativa é de nível superior, focada na lógica e nos conceitos, em vez do fluxo imperativo. Em outras palavras, está preocupada somente com o que precisa ser feito, e não exatamente como deve ser feito. Por exemplo, o código HTML ![](./carro.jpg) informa ao navegador para exibir a imagem de um carro sem dizer ao navegador como ele deve fazer.

Para entender melhor a diferença entre ambos os paradigmas, considere que André está prestes a visitar Bia. Ele não sabe onde a amiga mora, logo: • pelo paradigma imperativo, Bia fornece instruções detalhadas para uma rota específica até a sua casa; • pelo paradigma declarativo, Bia fornece o seu endereço ao amigo e o deixa decidir qual caminho seguir.

**Entre os paradigmas imperativos, de acordo com a figura 1, temos:**

**Paradigma procedural:** está relacionado à chamada de procedimentos, os quais podem ser sub-rotinas, métodos ou funções. Esses procedimentos são coleções de instruções que são executadas sequencialmente para resolver um problema específico. Por exemplo, considere que você preparará uma macarronada. Então, há uma função chamada preparar o molho e outra função cozinhar a massa. Neste paradigma, você deve invocar uma função por vez. Desse modo, somente após uma tarefa for concluída é que a outra será executada. Entre as principais linguagens procedurais, destacam-se: C, C++, C#, Java e Pascal.

**Paradigma orientado a objetos:** considera que o código pode ser dividido em objetos (como os objetos da vida real), os quais possuem propriedades e executam diferentes ações. Os objetos podem interagir uns com os outros para alcançar um objetivo ou resultado desejado. A popularidade e o alto uso deste paradigma estão no fato de que este imita a nossa visão do mundo real, tornando-o relativamente simples de entender. Entre as principais linguagens de programação orientada a objetos, destacam-se: C++, C#, Java e Python.

**Paradigma de processamento paralelo:** usa o princípio de dividir diferentes partes de uma tarefa entre vários processadores, os quais trabalham simultaneamente para resolver um problema. Considere o exemplo anterior da tarefa preparar a macarronada. Agora, em vez de você fazer tudo sozinho, uma pessoa lhe ajudará a preparar o molho, outra irá ralar o queijo e, ao mesmo tempo, você cozinhará a massa – o tempo para preparar toda a tarefa é reduzido, uma vez que três pessoas fazem coisas diferentes.

**Já entre os paradigmas declarativos, de acordo com a figura 1, temos:**

**Paradigma lógico:** os programas são escritos como uma série de fatos e regras que seguem uma estrutura lógica. Por exemplo, podemos ter dois fatos: (fato 1) Sócrates é homem; (fato 2) todo homem é mortal. Se fizermos então uma pergunta do tipo: “Sócrates é mortal?”, o sistema nos retornará “sim”, uma vez que Sócrates é homem e todo homem é mortal. Entre as principais linguagens do paradigma lógico, destacam-se: Prolog, Absys, Alice e Ciao.

**Paradigma funcional:** é baseado na execução de uma série de funções matemáticas, as quais formam um bloco de construção para a execução de diversos tipos de tarefas. Essas linguagens evitam estruturas de controle de fluxo, como loops. Entre as principais linguagens do paradigma lógico, destacam-se: Haskell e Scala

**Paradigma database:** é baseado em dados, logo, as instruções são definidas para manipular os dados em um banco, em vez de codificar uma sequência de instruções para o computador. A maioria dos bancos de dados utiliza a linguagem SQL (Structured Query Language) para manipular os dados (leitura e escrita).

### 4.2 - Variáveis e Constantes
As variáveis são estruturas para armazenamento de valores na memória do computador ou dispositivo (FORBELLONE; EBERSPACHER, 2005). Como seu nome indica, o valor pode ser alterado, além, é claro, de poder ser utilizado várias vezes durante um código