**Introdução**

Na engenharia de software, os padrões de design criacional são padrões de design que lidam com mecanismos de criação de objetos, tentando criar objetos de maneira adequada à situação.

A forma básica de criação de objetos pode resultar em problemas de design ou aumentar a complexidade do design. Os padrões de design criacional resolvem esse problema controlando de alguma forma a criação desse objeto.

**Objetivos da aula**

-   Compreender os princípios do padrão Abstract Factory.
-   Compreender os princípios do padrão Factory Method.
-   Compreender os princípios do padrão Builder.
-   Compreender os princípios do padrão Prototype.
-   Compreender os princípios do padrão Simple Factory.

**Resumo**

Os padrões criacionais lidam com o processo de criação de objetos. No desenvolvimento de software orientado a objetos, ao projetar e implementar, designers e codificadores trabalham com classes e objetos. Diferentes tipos de problemas podem exigir diferentes interações de objetos para resolver um problema específico. Criar objetos de acordo com os requisitos do problema é uma importante questão de design. Os padrões criacionais lidam com esta questão e ajudam os designers a resolver e orientar os mecanismos de criação de objetos (GAMMA, et al., 1994).

Os padrões de design criacional são ainda classificados em: padrões de criação de classe e padrões de criação de objetos. Os padrões de criação de classe lidam com a instanciação de uma subclasse com base no contexto. Os padrões de criação de objetos lidam com a delegação do processo de criação de objetos para outro objeto.

A partir desse contexto, segue o Quadro 1 que apresenta as técnicas que podemos aplicar a partir dos recursos dos Padrões de design criacional.

Quadro 1 - Padrões de design criacional

Por fim, podemos relacionar que os padrões de design criacional lidam com a maneira como as classes são instanciadas e os objetos são criados. Esses padrões de design são usados quando há requisitos específicos relacionados à criação de objetos.

**Como aplicar na prática o que aprendeu**

Os padrões criacionais são métodos para gerar objetos de forma controlada e adequada ao cenário. Auxiliam na redução de complexidades e instabilidades e proporcionam maior flexibilidade e reaproveitamento de código. Por exemplo, o padrão de método de fábrica é um padrão criacional. Ele lida com o problema de criar objetos sem especificar a classe exata de objeto que será criada. Observe que no mundo real da programação, precisamos criar objetos diferentes com funcionalidades semelhantes. Digamos que precisamos de objetos moeda (dinheiro) baseados no país. Agora você define uma interface chamada Moeda e deve especificar sua funcionalidade na forma de método. Após essa ação, será necessário implementar esta interface para diferentes países, e cada implementação de método será específica para o país.

Agora, como posso criar objetos? Podemos criar uma classe de fábrica e fornecer um método estático para obter o objeto necessário. Este método deve receber a entrada (como por exemplo o nome do país). Com base no valor do país, devemos criar um objeto de país específico e retornar às especificações correspondentes.

O padrão Factory Method é um padrão criacional que usa métodos Factory para lidar com o problema de criar objetos sem especificar a classe exata do objeto que será criado. Isso é feito criando objetos por meio de um método de fábrica, que é especificado em uma interface e na implementação de classes (classes concretas); ou implementado em uma classe base, que pode ser substituída quando herdada em classes derivadas; em vez de utilizar um construtor.

**Conteúdo bônus**

**Tópicos avançados**

A refatoração sempre traz o risco de que o novo código não funcione tão bem quanto o antigo. Para evitar a criação de novos bugs, é importante preparar uma série dos chamados testes unitários - um processo de testar pequenas partes isoladas do código, chamadas de unidades. A refatoração de código pode prosseguir assim que um teste de unidade confirmar que é seguro para todo o código.

A partir desse contexto, o trabalho acadêmico intitulado de “**Uma abordagem reativa de construção de linhas de produto de software baseada em TDD e refatoração**“ (Disponível em: <[https://repositorio.ufsc.br/handle/123456789/129071](https://repositorio.ufsc.br/handle/123456789/129071)\> apresenta uma abordagem para a construção de Linhas de Produto de Software (LPS). Nesta proposta as práticas ágeis de Desenvolvimento Dirigido por Testes (Test-Driven Development - TDD) e Refatoração conduzem a criação de uma LPS de abordagem reativa sem a tentativa de prever variações futuras. 

Observação: Este conteúdo não será cobrado nas avaliações e estará, obrigatoriamente, presente nas videoaulas. Fique tranquilo(a)!

Referência Bibliográfica

FOWLER, M. **Refatoração:** Aperfeiçoando o design de códigos existentes - Segunda Edição. 2019.

GAMMA, E; HELM, R; JOHNSON, R. VLISSIDES, J. **Design Patterns:** Elements of Reusable Object-Oriented Software. Addison-Wesley Professional, 1994.