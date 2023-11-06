**Introdução**

Os padrões de projeto são uma série de padrões que fornecem um modelo ou descrição de como você pode resolver um problema comum. Por si só, eles não são soluções completas para problemas, mas oferecem uma explicação ou uma maneira de resolver um problema recorrente geral no mundo do design de software.

Como resultado das semelhanças entre as questões levantadas, houve a necessidade de uma forma unificada de resolver esses problemas comuns. Foi isso que trouxe o conjunto inicial de padrões de design. Você pode ter aplicado muitas dessas soluções ao desenvolver um produto. São soluções que vão fundo no desenvolvimento de software e tendem a resolver problemas centrais sem restringi-los a uma linguagem ou framework.

**Objetivos da aula**

-   Compreender sobre os princípios de design.
-   Aplicar os princípios de padrões de design.
-   Observar o funcionamento dos padrões de arquitetura orientada a objetos.
-   Ajustar e aprimorar os códigos fontes a partir da aplicação do Design Pattern.

**Resumo**

Os princípios de design são diretrizes que nos ajudam a melhorar a qualidade de nossa aplicação. Esses elementos são soluções preferidas para problemas comuns que, quando não tratados adequadamente, levam a um design ruim.

Os princípios de design fornecem diretrizes de alto nível para projetar melhores aplicativos de software. Eles não fornecem diretrizes de implementação e não estão vinculados a nenhuma linguagem de programação. Os princípios SOLID (SRP, OCP, LSP, ISP, DIP) são um dos conjuntos de princípios de design mais populares.

Por exemplo, o Princípio de Responsabilidade Única (SRP) sugere que uma classe deve ter apenas um motivo para mudar. Esta é uma declaração de alto nível que podemos ter em mente ao projetar ou criar classes para nosso aplicativo. O SRP não fornece etapas de implementação específicas, mas cabe a você decidir como implementá-lo em seu aplicativo.

Já o padrão de design fornece soluções de baixo nível relacionadas à implementação de problemas orientados a objetos que ocorrem comumente. Em outras palavras, o padrão de projeto sugere uma implementação específica para o problema específico de programação orientada a objetos.

De acordo com FOWLER (2019), os padrões de projeto são usados por especialistas para tornar seus projetos mais flexíveis e reutilizáveis, portanto, ao estudá-los, podemos aplicar os seguintes recursos:

-   Desacoplamento de classes ou objetos, para que algo possa ser alterado sem alterar outra coisa. Cada padrão de projeto permite que algum aspecto do sistema varie independentemente de outros aspectos, tornando assim um sistema mais robusto a um tipo particular de mudança.
-   Elementos em um padrão que sabem como fazer uma coisa geral muito bem e não sabem muito sobre qualquer outra coisa.
-   Esforços para simplificar o código, para torná-lo mais legível, mais compreensível.
-   Uma grande ênfase em interfaces (programar para uma interface, não para uma implementação), e na distinção entre tipos e classes.
-   Um favorecimento da composição de objetos sobre a herança de classes: muita herança leva a uma explosão do número de classes em um sistema.

Por exemplo, se você deseja criar uma classe que pode ter apenas um objeto por vez, pode usar o padrão de design Singleton, que sugere a melhor maneira de criar uma classe que pode ter apenas um objeto. Os padrões de design são testados por outros e são seguros de seguir, por exemplo, padrões Gang of Four: Abstract Factory, Factory, Singleton, Command, etc.

Por fim, podemos relacionar que um padrão de projeto é um passo a passo de uma abordagem bem testada que pode ser usada para resolver um problema recorrente e de ocorrência geral no projeto de software orientado a objetos. O padrão de projeto ajuda a comunidade de desenvolvedores a colaborar e desenvolver um software com a ajuda de um vocabulário comum.

**Como aplicar na prática o que aprendeu**

Os Design Patterns definem uma linguagem comum que um desenvolvedor de software pode usar para se comunicar e colaborar com outros desenvolvedores. Os desenvolvedores podem usar o nome do padrão de design para explicar perfeitamente a ideologia por trás do design do aplicativo.

Depois de aprender os fundamentos da programação orientada a objetos, deve-se seguir o processo de aprendizado de três etapas dado abaixo:

Aceitação: Primeiro, tente aceitar o fato de que os padrões de projeto resolvem problemas comuns no projeto de software orientado a objetos. Portanto, quando estamos desenvolvendo qualquer software orientado a objetos, não devemos complicar o processo reinventando a roda.

Reconhecimento: Reconhecer a importância de seguir as melhores práticas ao desenvolver aplicativos de software orientados a objetos. Leia sobre os problemas que são resolvidos usando padrões de projeto e identifique problemas semelhantes em seu próprio trabalho de desenvolvimento. Dessa forma, podemos encontrar uma maneira de usar esses padrões de design com eficiência.

Internalização: uma vez que um padrão de design adequado é identificado para nosso aplicativo de software, podemos tentar implementá-lo e adicioná-lo internamente ao nosso aplicativo de forma que forneça reusabilidade, capacidade de gerenciamento e extensibilidade.

**Conteúdo bônus**

**Tópicos avançados**

Os padrões de design fornecem muitos benefícios, alguns dos quais incluem:

-   Fornecer um padrão geral para comunicação entre desenvolvedores.
-   Reduzir o tempo de desenvolvimento e acelerar o processo de desenvolvimento.
-   Fornecer soluções comprovadas para problemas recorrentes comuns.
-   Fornecer práticas recomendadas para obter uma base de código limpa, reutilizável e sem erros.
-   Fornecer um núcleo/fundação sobre o qual você pode construir soluções para problemas recorrentes no design de software.

Estes são um conjunto de padrões de projeto propostos por quatro autores: Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides. Eles escreveram um livro intitulado de “**Design Patterns: Elements of Reusable Object-Oriented Software**”, que apresenta os padrões de design e fornece mais informações sobre cada um. Este representa uma ajuda significativa para o mundo do desenvolvimento de software, pois aborda muitos desses problemas e como esses padrões pretendem resolvê-los. São 23 padrões de projeto propostos no livro, que são divididos em três categorias: Estrutural, Comportamental e Criacional.

Ao longo da leitura dessa obra será possível refletir sobre esses elementos a partir de uma linguagem objetiva e direcionada.

Referência Bibliográfica

FOWLER, M. **Refatoração: Aperfeiçoando o design de códigos existentes** - Segunda Edição. 2019.