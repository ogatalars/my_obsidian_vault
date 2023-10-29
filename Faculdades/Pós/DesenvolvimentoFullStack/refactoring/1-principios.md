**Introdução**

O desenvolvimento de software é uma atividade demorada que na maioria das vezes exige que vários desenvolvedores trabalhem juntos nesse processo. O código-fonte escrito é frequentemente revisado, reorganizado e expandido. Devido à pressão do tempo ou práticas desatualizadas, lugares impuros no código-fonte, acumulam diversas funcionalidades e/ou arquivos. Essas vulnerabilidades, historicamente desenvolvidas, colocam em risco a aplicabilidade e a compatibilidade de um programa. Para evitar a erosão progressiva e deterioração do software, a refatoração é necessária.

A refatoração é comparável à edição de um livro. A edição não resulta em um livro completamente novo, mas em um texto mais fácil de entender. Assim como existem diferentes abordagens de edição, como encurtar, reformular, excluir ou reestruturar, também existem métodos de refatoração de código, como encapsulamento, reformatação ou extração, para otimizar o código sem alterar sua essência.

A partir desse contexto, ao longo desse conteúdo iremos refletir sobre os Princípios da Refatoração.

**Objetivos da aula**

-   Compreender sobre as vantagens da aplicação da refatoração;
-   Observar as situações em que devemos refatorar o código;
-   Estudar sobre os problemas que enfrentamos ao aplicar a refatoração;
-   Compreender sobre o processo de aplicar a refatoração de forma automatizada.

**Resumo**

No decorrer do desenvolvimento de um aplicativo, lugares mal estruturados se acumulam no código-fonte, o que coloca em risco a aplicabilidade e a compatibilidade de um programa.

A solução é um código-fonte completamente novo ou uma reestruturação em pequenos passos. Muitos programadores e empresas estão optando cada vez mais pela refatoração de código para otimizar o software em funcionamento a longo prazo e torná-lo mais legível e claro para outros programadores.

Ao refatorar, surge a questão de qual problema no código deve ser resolvido por qual método. A refatoração é agora um dos princípios básicos de aprender a programar e está se tornando cada vez mais importante.

A refatoração é uma técnica disciplinada para reestruturar um corpo de código existente, alterando sua estrutura interna sem alterar seu comportamento externo. Ela melhora a estrutura interna do código sem alterar sua funcionalidade externa, transformando funções e repensando algoritmos. É um processo iterativo.

“Não quero defender que a refatoração seja a cura para todos os males de software. Ela não é uma solução mágica para todos os problemas. Apesar disso, é uma ferramenta importante – ajuda você a manter um bom controle sobre o código. A refatoração é uma ferramenta que pode – e deve – ser usada para diversos propósitos” (FOWLER, 2019, p. 73).

Fowler (2000) cataloga 72 tipos de mudanças estruturais em programas orientados a objetos, mas essas transformações não necessariamente podem garantir que a preservação do comportamento será alcançada. Na verdade, Fowler recomenda que os desenvolvedores escrevam o código de teste antes, já que essas refatorações podem alterar o comportamento de um programa. Murphy-Hill et. al. (2009) analisaram os logs de refatoração e descobriram que os desenvolvedores muitas vezes intercalam refatorações com outras modificações de comportamento, indicando que revisões de refatoração puras são raras.

A refatoração inclui reduzir o escopo, substituir instruções complexas por instruções mais simples ou incorporadas e combinar várias instruções em uma única instrução. Ao transformar o código com técnicas de refatoração, será mais rápido alterar, executar etc. É uma excelente prática recomendada para os programadores que desejam melhorar sua produtividade. A refatoração é semelhante ao processo de desenvolver a otimização de desempenho, que também são transformações que preservam o comportamento. Também nos ajuda a encontrar bugs quando estamos tentando corrigir um problema em um código difícil de entender. Ao limpar as coisas, tornamos mais fácil expor o bug (VEERRAJUA et. al., 2010). A partir desse escopo, observe o Quadro 1 que apresenta algumas das vantagens e desvantagens da Refatoração:

Quadro 1 – Vantagens e desvantagens da refatoração

A refatoração melhora a qualidade do projeto e da implementação do aplicativo, sistema e/ou software. De acordo com Veerrajua et. al. (2010), a refatoração melhora o design de programas, e torna mais fácil de entender todos os recursos e funcionalidades, nos ajuda a encontrar bugs e também ajuda na execução do programa mais rápido.

Por fim, de acordo com Kim et. al. (2014), quando perguntamos “como você define refatoração?”, normalmente, os desenvolvedores não necessariamente consideram que a refatoração está confinada a transformações de preservação de comportamento. Aproximadamente, 80% dos profissionais definem refatoração como transformação de código que melhora alguns aspectos do comportamento do programa como legibilidade, manutenção ou desempenho. Apenas 46% dos desenvolvedores não mencionaram a preservação do comportamento, semântica ou funcionalidade em sua definição de refatoração de forma alguma.

Essas observações indicam que o escopo e as transformações suportadas por mecanismos de refatoração são muitas vezes de nível muito baixo e não correspondem diretamente aos tipos de refatoração que os desenvolvedores desejam fazer. Ou seja, a intenção por trás de uma refatoração é simplesmente a construção e organização estrutural de um código melhor. Um código eficaz facilita a integração de novos elementos de código sem introduzir novos erros. Os programadores que podem ler o código facilmente podem remover ou evitar bugs com mais facilidade. Outro propósito da refatoração é melhorar a análise de erros e a manutenção do software. Os programadores que verificam um código têm um esforço significativamente menor.

**Como aplicar na prática o que aprendeu**

É importante lembrar que refatorar não significa simplesmente alterar o código aleatoriamente. Muito pelo contrário: existem padrões de refatoração, cada um com um nome e um conjunto claro de instruções. Eles são quase como pequenas "receitas" que você pode usar para melhorar seu código. Alguns dos padrões de refatoração mais populares incluem os seguintes processos:

-   Método de extração;
-   Extração de classe;
-   Método em linha;
-   Renomear variável;
-   Consolidar a expressão condicional;
-   Remover código “morto”, etc.

O primeiro passo para a refatoração é aprender sobre essas "receitas". Para isso, você pode ler o livro citado ao longo do material de Martin Fowler.

**Conteúdo bônus**

**Tópicos avançados**

Do ponto de vista do cliente (ou o “dono” do projeto), nunca há um bom momento para refatorar. O efeito da refatoração provavelmente será visível apenas a longo prazo (a exceção pode ser a refatoração associada à otimização). Portanto, a melhor maneira de manter a refatoração de código como parte do trabalho diário é fazer com que todos (incluindo proprietários de produtos e gerentes de projeto) saibam o que realmente é. Eles precisam saber que isso é uma parte necessária do trabalho do desenvolvedor, e não apenas a consequência de um código mal escrito.

A refatoração é um elemento integral do desenvolvimento de software e não deve ser tratada como uma tarefa adicional completamente desvinculada do trabalho diário. Talvez nem todo desenvolvedor esteja totalmente ciente disso, mas durante a implementação diária de tarefas no sprint, alguma forma de refatoração de código é realizada de vez em quando. Pode ser uma mudança ineficaz no nome de uma variável, mas também conta como refatoração e deve ser parte integrante do processo de programação.

No entanto, é importante não se perder no calor das constantes mudanças e melhorias de código. A refatoração não deve ser um fim em si mesma. O objetivo final do projeto é trazer benefícios tangíveis (geralmente financeiros) que farão com que o projeto se desenvolva e atenda às expectativas do cliente. A satisfação unilateral na forma de um programador satisfeito infelizmente não é suficiente e esta abordagem pode levar ao colapso do projeto.

Como acontece com a maioria dos processos, quanto mais ele puder ser automatizado, mais fácil e rápida será a refatoração. Automatizar alguns ou todos os processos de refatoração está se tornando cada vez mais popular entre os desenvolvedores. Existem muitos atalhos e ferramentas para tornar a refatoração menos dolorosa.

Dois IDEs (Ambientes de Desenvolvimento Integrados) que possuem suporte de refatoração automatizada integrado são Eclipse e IntelliJ IDEA. Provavelmente, em um futuro próximo, teremos diversos recursos de automação de refatoração em outros IDEs, pois os atalhos de refatoração continuam sendo uma grande preocupação para a comunidade de desenvolvimento.

A refatoração de código no processo de manutenção e gestão de uma casa: Quando você tem uma casa limpa e bem organizada, fica menos estressado porque tudo fica mais fácil de encontrar e operar. Por outro lado, uma casa com desordem desnecessária pode levar a um ambiente caótico e estressante. O mesmo vale para o código escrito. Faça questão de fazer uma “limpeza” regular em seu código e você será recompensado com um produto melhor e um ambiente de trabalho mais tranquilo e produtivo.

A partir desse contexto, o trabalho acadêmico intitulado de “**Extensões para refatoração de Código fortran no eclipse**” – Disponível em: <[http://wsl.softwarelivre.org/2010/0010/paper10.pdf](http://wsl.softwarelivre.org/2010/0010/paper10.pdf)\>, que apresenta sobre a possibilidade de utilizar algumas extensões na IDE Eclipse.

Ao longo da discussão serão apresentadas o processo de desenvolvimento e disponibilização de extensões de refatoração para o ambiente integrado de desenvolvimento Eclipse, utilizando-se do framework Photran (um plugin para programação Fortran integrado ao Eclipse).

Referência Bibliográfica

FOWLER, M. **Refatoração:** Aperfeiçoando o design de códigos existentes - Segunda Edição. 2019.

JOHNSON, R. **Beyond behavior preservation**. Microsoft Faculty Summit 2011, Invited Talk, 2011.

KIM, M.; ZIMMERMANN, T.; NAGAPPAN, N. **An Empirical Study of Refactoring Challenges and Benefits at Microsoft**. IEEE TRANSACTIONS ON SOFTWARE ENGINEERING, ACCEPTED ON MARCH 16TH, 2014. Disponível em: <[https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/kim-tse-2014.pdf](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/kim-tse-2014.pdf)\>. Acesso em 23/01/2023

MURPHY-HILL, E.; PARNIN, C.; BLACK, A. P. **How we refactor, and how we know it**. In ICSE ’09: Proceedings of the 31st International Conference on Software Engineering, pages 287–297, Washington, DC, USA, 2009. IEEE Computer Society. Disponível em: <[https://dl.acm.org/doi/10.1109/ICSE.2009.5070529](https://dl.acm.org/doi/10.1109/ICSE.2009.5070529)\>. Acesso em 23/01/2023

XING, Z.; STROULIA, E. **Umldiff:** an algorithm for object-oriented design differencing. In ASE ’05: Proceedings of the 20th IEEE/ACM International Conference on Automated Software Engineering, pages 54–65, New York, NY, USA, 2005. ACM. Disponível em: <[https://dl.acm.org/doi/10.1145/1101908.1101919](https://dl.acm.org/doi/10.1145/1101908.1101919)\>. Acesso em 23/01/2023