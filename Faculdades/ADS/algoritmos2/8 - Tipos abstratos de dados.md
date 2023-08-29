Para o desenvolvimento de jogos digitais e softwares em geral, deve-se fazer um planejamento cuidadoso antes de iniciar a codificação. É importante identificar elementos que englobam certas variáveis e funções e modularizá-los em um código à parte. Se em seu jogo houver um dragão, por exemplo, algumas variáveis irão caracterizá-lo, como força e vida, e outras funções determinarão suas ações, como atacar e sofrer dano. Todo esse código pode ser modularizado em um código à parte, que diz respeito somente ao dragão.

A vantagem de modularizar trechos do código é a possibilidade de reduzir a extensão do seu código principal, deixando-o mais legível. A modularização também facilita a localização e a reutilização de todo o código referente ao dragão. Imagine que você queira criar três dragões em seu jogo. Sem modularizar, você teria que replicar mais duas vezes o mesmo código. Isso é uma péssima prática, que induz a erros, dificulta ajustes futuros e aumenta desnecessariamente o tamanho do código. Com o código já modularizado, é muito mais fácil criar três dragões a partir de um mesmo código, como veremos adiante.

Essa modularização envolve uma outra forma de enxergar o código e programar. Em C#, esse paradigma de programação se chama orientação a objetos, e o código separado do código principal é denominado classe. Mas antes de entrarmos nos detalhes da implementação, vamos entender melhor o que é esse código “separado”.


### Definição e utilização de TAD

Temos utilizado muitas variáveis nos algoritmos estudados até aqui. Essas variáveis são tipos de dados que correspondem a tipos primitivos, ou seja, representam um único valor. Esse valor pode ser um tipo de número racional, inteiro ou lógico (booleano), e assim por diante. Porém, para a construção de um programa mais sofisticado, normalmente é útil agrupar algumas dessas variáveis que correspondem a uma mesma entidade no programa. Suponha que você deseje criar um programa para gerir uma instituição de ensino. Os alunos podem ter nome, telefone de contato, número de documento pessoal, número de matrícula, curso no qual estão matriculados, entre outras informações. Com diversas variáveis pertencendo a cada aluno, para uma quantidade indefinida de alunos que podem ser cadastrados, é necessário um mecanismo para organizar todas essas informações.

Portanto, é importante que haja uma estrutura para englobar, dentro do programa, todas essas características de um único aluno. Pense que, se uma variável é uma caixa que armazena um único tipo de dado, essa estrutura é um baú, que pode armazenar diversas caixas.

Além disso, a estrutura permite definir ações que envolvem essa entidade. Assim, ações como registrar a falta ou a nota de um aluno e mudar o telefone de contato, entre outras que afetem esse determinado aluno, podem ser definidas dentro dessa estrutura única. Essa é a definição de um TAD, que é a especificação de um conjunto de dados relacionados e de operações executadas sobre esses dados. Em C#, essa definição é feita por meio de classes, que nada mais são do que um código à parte do código principal do projeto

###  Definição de classes, atributos, métodos e construtores
Para prosseguirmos com a definição dos conceitos associados ao TAD, vamos estabelecer um exemplo para relacionar cada um deles. Imagine que você deseje criar um jogo de plataforma em duas dimensões (2D) cujo personagem controlado pelo jogador é um cavaleiro que percorre fases enfrentando inimigos. Suas armas são uma espada e um arco e flecha: a primeira é utilizada para desferir golpes mais fortes próximo aos inimigos e a segunda, para acertá-los de longe, com menor dano. As flechas podem acabar, e o jogador precisa encontrar mais delas ao longo das fases. O cavaleiro possui uma barra de vida – assim como os inimigos – e um contador de moedas, que são coletadas ao eliminar cada inimigo.

Imagine que você vá desenvolver esse jogo com os recursos vistos até aqui e atendendo aos requisitos descritos. O código do jogo estaria todo em um único arquivo, com dezenas – ou mesmo centenas – de variáveis declaradas em sequência, pertencentes a diferentes inimigos, itens, fases, entre outros recursos. Desse modo, utilizando um paradigma de programação estruturada, o código ficaria extenso, ilegível e, a longo prazo, muito difícil de manter e editar. Uma abordagem que auxilia na organização de um código é o paradigma de programação de orientação a objetos. Com ele, o código é modularizado em partes que serão utilizadas aos poucos, de forma organizada, conforme o programa precisa criar e utilizar esses recursos específicos. No exemplo do jogo do cavaleiro, seria o equivalente ao programa utilizar, no cenário da figura 2, as classes relacionadas ao dragão, ao cavaleiro e aos demais itens em uso no momento.

**Orientação a objetos é um paradigma de programação muito importante para o desenvolvimento não apenas de jogos, mas também de softwares em geral (DEITEL, 2003). É essencial dominar conceitos associados a esse paradigma, como herança e polimorfismo, entre muitos outros; portanto, dedique tempo à pesquisa e à compreensão desse assunto.**


Com o paradigma de orientação a objetos, cada entidade do programa é definida por uma classe. O herói (um cavaleiro, mago ou outro personagem), o dragão (verde, vermelho ou azul, cada um com poderes e características diferentes) e uma espada (de ouro, diamante ou outro material que lhe desse poder diferente) podem ser, cada um deles, uma classe. Perceba que essas entidades podem ser classes, pois a definição do que será uma classe em seu programa dependerá da modelagem do desenvolvedor.

Uma classe é, portanto, um código separado do código principal do seu projeto. Nesse código à parte, são definidas as variáveis pertinentes e as operações a serem executadas por essa entidade

Podemos enxergar uma entidade como um componente que será recriado várias vezes no programa. É possível, por exemplo, ter vários heróis no jogo, de forma que, se um deles morrer, o jogador assumirá o controle de outro. Também podemos ter diversos dragões como inimigos. Nesse exemplo, Herói e Dragão são classes. A classe é uma estrutura de código que dita o que faz parte dessa entidade e quais ações ela pode executar. Portanto, a classe herói é um modelo para indicar o que é e o que faz um herói no jogo.

A partir da classe, podem-se criar diversas instâncias, cada uma constituindo um novo elemento do jogo. Ou seja, a partir da classe herói, é possível criar um cavaleiro, um mago, um elfo e diversas outras instâncias de heróis. Essas instâncias são conhecidas como objetos.

Assim, a classe define as variáveis que caracterizam a entidade e as ações que podem ser executadas com essa entidade. Uma classe pode conter vários objetos, cada um com valores diferentes (preenchidos nas variáveis definidas na classe) e executando as ações que foram definidas na respectiva classe. Essas variáveis definidas na classe, que correspondem a características da entidade, são denominadas atributos. Já as ações definidas na classe, que alteram os valores dessas variáveis ou executam outras ações sobre a entidade, nada mais são do que funções dentro do código da classe, as quais são especificamente denominadas métodos.

Por fim, a partir da compreensão de que os objetos são criados a partir de uma classe e que cada objeto pode ter um valor diferente, é necessário um mecanismo para preencher esses valores. Isso pode ser feito por meio de construtores. Um construtor é uma função dentro da classe que define o recebimento de valores no momento da criação do objeto e a passagem desses valores para os atributos correspondentes. Assim, com uma única linha de comando, é possível criar um novo herói, chamado Cavaleiro, e informar todas as suas características (atributos)

**O que é Programação Orientada a Objetos (POO)?** A Programação Orientada a Objetos (POO) é um paradigma de programação que se baseia na ideia de modelar o mundo real em forma de objetos. Os objetos são unidades independentes que contêm dados (atributos) e comportamentos (métodos). Isso ajuda a organizar o código de maneira mais clara, modular e reutilizável.

**Classes e Objetos:** Uma classe é um "molde" ou "plano" que define a estrutura de um objeto. Um objeto é uma instância de uma classe. Pense em uma classe como uma receita e um objeto como o prato feito seguindo essa receita.

**Exemplo de Classe:** Vamos criar uma classe simples chamada "Pessoa" com atributos como nome e idade, e um método para cumprimentar:

class Pessoa
{
    // Atributos
    public string Nome;
    public int Idade;

    // Método para cumprimentar
    public void Cumprimentar()
    {
        Console.WriteLine($"Olá, meu nome é {Nome} e tenho {Idade} anos.");
    }
}


**Criando e Usando Objetos:** Agora, vamos criar objetos da classe "Pessoa" e utilizar seus atributos e métodos:

class Program
{
    static void Main(string[] args)
    {
        Pessoa pessoa1 = new Pessoa();
        pessoa1.Nome = "Alice";
        pessoa1.Idade = 25;

        Pessoa pessoa2 = new Pessoa();
        pessoa2.Nome = "Bob";
        pessoa2.Idade = 30;

        pessoa1.Cumprimentar(); // Saída: Olá, meu nome é Alice e tenho 25 anos.
        pessoa2.Cumprimentar(); // Saída: Olá, meu nome é Bob e tenho 30 anos.
    }
}
Neste exemplo, criamos dois objetos da classe "Pessoa" (pessoa1 e pessoa2) e definimos seus atributos (Nome e Idade). Em seguida, chamamos o método "Cumprimentar()" para cada objeto, que imprime uma mensagem personalizada com base nos atributos.

Isso é apenas um vislumbre dos conceitos básicos de orientação a objetos e classes em C#. À medida que você avança, aprenderá sobre encapsulamento, herança, polimorfismo e outros conceitos avançados que permitem construir programas mais complexos e estruturados.