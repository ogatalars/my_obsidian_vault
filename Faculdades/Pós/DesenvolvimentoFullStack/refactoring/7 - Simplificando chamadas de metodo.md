**Introdução**

O núcleo da programação orientada a objetos é a maneira como ela nos leva a pensar em termos de comportamento e colaboração em vez de algoritmos e dados. As interfaces são a porta de entrada para essa mentalidade. Uma boa interface comunica intenções e se torna um ponto de união entre diferentes partes da arquitetura.

A maioria das técnicas de refatoração apresentadas abordam a questão de tornar uma interface mais clara para facilitar a compreensão, renomeando métodos, alterando assinaturas de método e movendo e encapsulando os parâmetros (TRUCCHIA e ROMEI, 2010).

A partir desse contexto, veremos algumas maneiras de detectar e gerenciar melhor as condições excepcionais para evitar poluir e contaminar as interfaces das classes.

**Objetivos da aula**

-   Compreender sobre a refatoração “Replace Constructor with Factory Method”.
-   Compreender sobre a refatoração “Replace Error Code with Exception”.
-   Compreender sobre a refatoração “Replace Exception with Test”.
-   Compreender sobre a refatoração “Replace Parameter with Explicit Methods”.

**Resumo**

O núcleo da programação orientada a objetos é a maneira como ela nos leva a pensar em termos de comportamento e colaboração, em vez de algoritmos e dados. As interfaces são a porta de entrada para essa mentalidade. Uma boa interface comunica intenções e se torna um ponto de união entre diferentes partes de nossa arquitetura.

A maioria das técnicas de refatoração mostradas aqui abordam a questão de tornar uma interface mais clara para entender, renomeando métodos, alterando assinaturas de método e movendo e encapsulando parâmetros. Ao simplificar as chamadas de método, podemos melhorar estrategicamente a interação entre as classes, tornando as chamadas de método mais simples e fáceis de compreender. Então, vamos observar as técnicas de refatoração para lidar com essa situação. A partir desse contexto, segue o Quadro 1 que apresenta as técnicas que podemos aplicar para simplificar as chamadas de método.

Quadro 1 - Simplificando chamadas de método

Por fim, podemos relacionar que existem várias abordagens sobre como alguém pode começar a enfrentar o esforço não tão simples quanto parece de simplificação.

Como acontece com qualquer grande bloco de código, podemos tornar a intenção do programador mais clara, como por exemplo aplicar o processo de decomposição e substituir partes do código por uma chamada de método com o nome da intenção desse bloco de código (FOWLER, 2019).

**Como aplicar na prática o que aprendeu**

Os computadores são excelentes em receber conjuntos de instruções e percorrê-los sistematicamente. Eles não precisam de código para ter métodos informativos ou nomes de variáveis. Eles nem precisam que o código seja formatado em um padrão específico (exceto pelos requisitos sintáticos).

Porém ao aplicar os princípios vistos ao longo desse percurso, nosso objetivo ao simplificar as expressões, buscamos tornar a leitura do código mais fácil para os programadores (não para computadores).

Portanto, quando nos depararmos com um código de programa que pode ser simplificado ou melhorado, devemos aproveitar a oportunidade para aplicar essas alterações.

Quando escrevemos um código, devemos simplificá-lo naturalmente à medida que vamos avançando, então tudo o que está comprometido com o controle de versão já deve estar simplificado. Portanto, essa prática deve ser normal nas práticas diárias para que o código mantenha um alto nível de qualidade o tempo todo.

O que você acha – a simplicidade do código é importante? É útil ou é uma perda de tempo? Talvez a discussão deste tópico o inspire a buscar a perfeição em seu ofício de código.

**Conteúdo bônus**

**Tópicos avançados**

Toda vez que você faz uma alteração em uma base de código, existe o risco de quebrar alguma coisa. Essa é a natureza do software. Esse risco existe quando você está corrigindo um bug, introduzindo um novo recurso e, sim, quando você está refatorando. Portanto, para refatorar com segurança, você deve ter uma rede de segurança para protegê-lo caso algo dê errado. E a rede de segurança mais confiável que você pode ter é um conjunto de testes automatizados, compostos principalmente por testes unitários rápidos e confiáveis.

Com um conjunto abrangente instalado, você será notificado se quebrar alguma coisa, tornando o processo de refatoração muito mais seguro. Além disso, ferramentas como o **LinearB** podem detectar ramificações que contêm um alto nível de alterações de código e um alto nível de retrabalho ou refatoração. Você deve verificar o trabalho de alto risco durante a iteração para ver quais ramificações precisam de sua atenção como gerente, mais revisão e mais testes.

Para se aprofundar sobre a utilização da ferramenta **LinearB**, acesse o site oficial da ferramenta (disponível no seguinte link: [https://linearb.io/](https://linearb.io/)) e conheça em detalhes os recursos que estão sendo disponibilizados para o processo de refatoração de código e gestão de projetos.

Observação: Este conteúdo não será cobrado nas avaliações e estará, obrigatoriamente, presente nas videoaulas. Fique tranquilo(a)!

Referência Bibliográfica

TRUCCHIA, F., ROMEI, J, et al. **Simplifying Method Calls. In:** Pro PHP Refactoring. Apress. 2010. Disponível em: <[https://link.springer.com/chapter/10.1007/978-1-4302-2728-1\_11#citeas](https://link.springer.com/chapter/10.1007/978-1-4302-2728-1_11#citeas)\>. Acesso em: 23/01/2023

FOWLER, M. **Refatoração**: Aperfeiçoando o design de códigos existentes - Segunda Edição. 2019.