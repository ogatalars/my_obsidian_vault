**Introdução**

Saber onde refatorar dentro de um sistema é um grande desafio para identificar áreas de design ruim. Essas áreas de design ruim são conhecidas como “Bad Smells” ou “Maus Cheiros” dentro do código. Encontrar essas áreas estão mais relacionadas à “intuição humana” do que uma ciência exata. A experiência dos desenvolvedores é confiada na identificação desses maus cheiros.

No entanto, a refatoração em si não trará todos os benefícios, se não entendermos o que precisa ser aplicado no processo de refatoração. Os maus cheiros de código é qualquer sintoma que indica algo errado. Geralmente indica que o código deve ser refatorado ou o projeto geral deve ser reexaminado. Ao longo dessa aula iremos discutir justamente sobre como evitar ou como corrigir os “maus cheiros” nos códigos.

**Objetivos da aula**

-   Compreender os malefícios da prática de duplicar o código fonte.
-   Observar os problemas da prática de utilizar uma função longa.
-   Compreender os problemas estruturais de utilizar uma lista longa de parâmetros.
-   Compreender sobre os Dados globais e mutáveis.
-   Compreender alguns problemas que enfrentamos com a construção de classes.
-   Compreender as vantagens e desvantagens da utilização de comentários nos códigos fontes.

**Resumo**

Os “cheiros de código” ou o termo em inglês “_code smells_” estão estritamente relacionados com a prática da refatoração de software para melhorar a qualidade interna. Como os desenvolvedores detectam os maus cheiros em seus códigos, eles devem avaliar se sua presença sugere alguma degradação relevante na estrutura do código e, se positivo, decidir qual refatoração deve ser aplicada.

Usando uma metáfora, os cheiros são como os sintomas de possíveis doenças, e o processo de refatorar as operações podem curar as doenças associadas e remover seus sintomas.

A partir desse contexto, segue o Quadro 1 que apresenta como podemos evitar os "Maus cheiros" no código.

Quadro 1 – Recursos que podem ser aplicados para evitar os "Maus cheiros" no código

Por fim, podemos relacionar que os “maus cheiros” decorrem de uma falha em escrever o código de acordo com os padrões necessários. Em outros casos, significa que a documentação necessária para definir claramente os padrões e expectativas de desenvolvimento do projeto estava incompleta, imprecisa ou inexistente.

Existem muitas situações que podem causar esse problema, como dependências impróprias entre módulos, atribuição incorreta de métodos a classes ou duplicação desnecessária de segmentos de código. Um código particularmente mal cheiroso pode eventualmente causar problemas profundos de desempenho e dificultar a manutenção de aplicativos críticos para os negócios.

Tenha em mente, no entanto, que um mau cheiro de código não é um bug real - é provável que o código ainda seja compilado e funcione conforme o esperado. Os maus cheiros de código são simplesmente indicações de possíveis violações da disciplina de código e dos princípios de design. Dito isso, é possível que esse inconveniente no código possa causar problemas e falhas em cascata ao longo do tempo.

**Como aplicar na prática o que aprendeu**

A refatoração de código é uma das maneiras mais eficazes de eliminar os maus cheiros do código e manter uma boa higiene de código. A refatoração é um processo de reestruturação que tenta tornar o código mais limpo, mais conciso e mais eficiente sem alterar sua funcionalidade principal. A refatoração regular ajuda a garantir que o código atenda às diretrizes de uma equipe e se alinhe com uma arquitetura definida.

O melhor momento para refatorar o código é antes de adicionar atualizações ou novos recursos a um aplicativo, pois é uma boa prática limpar o código existente antes que os programadores adicionem qualquer novo código. Outro bom momento para refatorar o código é depois que uma equipe implantou o código na produção. Afinal, os desenvolvedores teriam mais tempo do que o normal para limpar o código antes de receberem uma nova tarefa ou projeto.

Uma ressalva à refatoração é que as equipes devem garantir que haja cobertura de teste completa antes de refatorar o código de um aplicativo. Caso contrário, o processo de refatoração pode simplesmente reestruturar partes quebradas do aplicativo sem nenhum ganho. A refatoração regular não é uma boa ideia ao enfrentar cronogramas de lançamento apertados - os testes necessários levam muito tempo e podem impedir que a equipe libere o aplicativo dentro do cronograma.

Existem muitas opções de ferramentas disponíveis para automatizar o processo de refatoração de código, incluindo SonarQube, Visual Studio IntelliCode, Rider e Eclipse IDE . Muitas dessas ferramentas permitem que os programadores executem a reestruturação do código junto com o processo de desenvolvimento real, o que pode ajudar as equipes a acelerar as cadências de lançamento quando necessário.

**Conteúdo bônus**

**Tópicos avançados**

A detecção de erros em sistemas de software é um campo de pesquisa da engenharia de software. Mesmo que não necessariamente apresentem erros claros, a presença de maus cheiros no código de software pode tornar os programas mais difíceis de entender, manter e evoluir. A detecção de maus cheiros permite aos programadores melhorar seus programas, eliminando esses inconvenientes.

A partir desse contexto, o trabalho acadêmico intitulado de “**REFATORAÇÃO**: APERFEIÇOANDO UM CÓDIGO EXISTENTE”, disponível no seguinte link: <[https://revistas.unifenas.br/index.php/RE3C/article/view/12](https://revistas.unifenas.br/index.php/RE3C/article/view/12)\>, apresenta um estudo sobre as várias técnicas de refatoração existentes, suas vantagens e desvantagens.

Após o desenvolvimento de um sistema de referência que é apresentado ao longo da pesquisa, foram aplicadas diversas refatorações e foi comprovado que a utilização de tais técnicas melhora a qualidade do código, deixando-o mais limpo e de fácil manutenabilidade.

De acordo com os autores da pesquisa, pôde-se observar que com o uso de técnicas de refatoração houve uma redução de aproximadamente 9% no total de linhas de códigos do sistema.

Observação: Este conteúdo não será cobrado nas avaliações e estará, obrigatoriamente, presente nas videoaulas. Fique tranquilo(a)!

Referência Bibliográfica

FOWLER, M. **Refatoração:** Aperfeiçoando o design de códigos existentes - Segunda Edição. 2019.