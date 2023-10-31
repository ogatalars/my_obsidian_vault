**Introdução**

Os princípios SOLID foram conceituados pela primeira vez por Robert C. Martin em seu artigo de 2000, Design Principles and Design Patterns. Esses conceitos foram posteriormente desenvolvidos por Michael Feathers, que nos apresentou o acrônimo SOLID. Nos últimos anos, estes 5 princípios revolucionaram o mundo da programação orientada a objetos, mudando a maneira como escrevemos software.

Simplificando, os princípios de design de Martin e Feathers nos encorajam a criar um software mais sustentável, compreensível e flexível. Consequentemente, à medida que nossos aplicativos crescem em tamanho, podemos reduzir sua complexidade e evitar muitas dores de cabeça no futuro.

**Objetivos da aula**

-   Compreender sobre o princípio da Substituição de Liskov
-   Compreender sobre o princípio de Segregação de Interface.
-   Compreender sobre o princípio de Inversão de Dependência.
-   Compreender sobre o princípio da Responsabilidade Única.
-   Compreender sobre o princípio do código limpo com SOLID.
-   Compreender sobre o princípio Aberto/Fechado.

**Resumo**

SOLID é um acrônimo para os cinco primeiros princípios de design orientado a objetos de Robert C. Martin. Esses princípios estabelecem práticas que contribuem para o desenvolvimento de software com considerações para manutenção e extensão à medida que o projeto cresce.

SOLID significa:

-   S - Single-responsibility Principle (Princípio da Responsabilidade Única)
-   O - Open-closed Principle (Princípio aberto-fechado)
-   L - Liskov Substitution Principle (Princípio da Substituição de Liskov)
-   I - Interface Segregation Principle (Princípio da Segregação da Interface)
-   D - Dependency Inversion Principle (Princípio de Inversão de Dependência)

A partir desse contexto, de acordo com MARTIN (2000), ao seguir esses princípios, os desenvolvedores podem dividir seus aplicativos em partes menores e mais gerenciáveis, tornando mais fácil rastrear e corrigir problemas e fazer alterações na base de código sem causar consequências indesejadas. Segue abaixo uma breve descrição de cada um dos princípios que foram abordados por Martin (2000):

-   **Princípio da Responsabilidade Única**: Esse princípio incentiva classes complicadas a serem divididas em classes menores com responsabilidades explícitas. Embora isso possa parecer um princípio bastante direto a seguir, muitas vezes é difícil colocá-lo em prática se a responsabilidade de uma classe não estiver imediatamente clara. Martin nos ajudou a captar a responsabilidade de uma classe argumentando que a responsabilidade é uma “razão para mudar”. Assim, você pode identificar um design ruim quando existem várias entidades que mudam por diferentes motivos.
-   **Princípio Aberto-Fechado**: Simplificando, esse princípio exige que os módulos sejam escritos de forma que possam ser estendidos, sem exigir que sejam modificados. Isso parece contraditório a princípio, mas a chave para fazer isso funcionar é usar adequadamente as técnicas de abstração. As abstrações adequadas permitem que recursos sejam adicionados adicionando novo código e não alterando a base de código original. Você provavelmente não quebrará o código de trabalho se não precisar alterá-lo.
-   **Princípio da Substituição de Liskov**: Este princípio pode ser um pouco difícil de entender. Basicamente, significa que as subclasses devem ser adicionadas ao comportamento de uma classe base, não substituí-la. Idealmente, as instâncias ‘pai’ devem ser capazes de substituir suas instâncias filhas sem criar nenhum comportamento inesperado ou misterioso.
-   **Princípio de Segregação de Interface**: É melhor dividir as classes principais em classes menores e mais específicas, em vez de tentar manter uma grande classe generalizada. Dessa forma, os clientes da classe não dependem de métodos que não usam.
-   **Princípio de Inversão de Dependência**: Esse princípio sugere que os módulos de nível superior não devem depender dos módulos de nível inferior. A maioria das dependências deve estar em abstrações dos módulos de nível superior e inferior, bem como em detalhes. A implementação desses princípios de design SOLID devem ajudar seu código a se tornar mais flexível e resistir às inevitáveis mudanças de requisitos que ocorrem em qualquer projeto.

Por fim, podemos relacionar que os Princípios SOLID são cinco princípios de design de classe orientado a objetos. Eles são um conjunto de regras e práticas recomendadas a serem seguidas ao projetar uma estrutura de classe.

**Como aplicar na prática o que aprendeu**

Criar código de qualidade em toda a fase de desenvolvimento é, sem dúvida, a missão de qualquer desenvolvedor que se preocupa com seu produto de software. As melhores práticas tendem a reduzir a complexidade do código, o acoplamento entre classes, separando responsabilidades e definindo suas relações. Essas são maneiras simples de melhorar a qualidade interna do código.

Os princípios SOLID abordam diversas diretrizes para tornar os designs de software mais compreensíveis, flexíveis e sustentáveis. Ao criar um objeto, o design do objeto é essencial no processo de desenvolvimento de software, principalmente na decisão do escopo de acessibilidade.

Em um ciclo de vida de desenvolvimento de software, a decisão sobre o quão acessível e flexível é um objeto durante a fase de design deste objeto garantirá sua usabilidade, simplicidade, facilidade de implementação e acessibilidade para tornar o software confiável.

Os princípios SOLID foram testados e confiáveis por desenvolvedores de software, e a técnica subjacente a esse princípio, quando aplicada corretamente, pode ajudar no desenvolvimento de aplicativos de software orientados a objetos padrão.

**Conteúdo bônus**

**Tópicos avançados**

Em Java, os princípios SOLID são uma abordagem orientada a objetos aplicada ao design da estrutura de software. É conceituado por Robert C. Martin (2000). Esses cinco princípios mudaram o mundo da programação orientada a objetos e também mudaram a maneira de escrever software. Também garante que o software seja modular, fácil de entender, depurar e refatorar.

A partir desse contexto, o trabalho acadêmico intitulado de “**Boas práticas ‘SOLID’ na programação Java**“. Disponível em: <[http://ric.cps.sp.gov.br/handle/123456789/8663](http://ric.cps.sp.gov.br/handle/123456789/8663)\> apresenta uma abordagem como as boas práticas tornam o software mais tolerante a mudanças, com uma manutenção mais fácil e com uma legibilidade melhor, o que ajudará novos desenvolvedores que virão a mexer neste software.

Essa pesquisa está focada em uma introdução sobre a linguagem Java e seus princípios e sobre o que é o SOLID e como se beneficiar dele, através de comparações de códigos seguindo esses princípios e outros que não estão seguindo.

Observação: Este conteúdo não será cobrado nas avaliações e estará, obrigatoriamente, presente nas videoaulas. Fique tranquilo(a)!

Referência Bibliográfica

FOWLER, M. **Refatoração:** Aperfeiçoando o design de códigos existentes - Segunda Edição. 2019.

MARTIN, R. C. **Design Principles and Design Patterns**. 2000. Disponível em: <[https://web.archive.org/web/20191116231621/https://fi.ort.edu.uy/innovaportal/file/2032/1/design\_principles.pdf](https://web.archive.org/web/20191116231621/https:/fi.ort.edu.uy/innovaportal/file/2032/1/design_principles.pdf)\>.