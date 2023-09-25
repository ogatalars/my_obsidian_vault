**Introdução**

É necessário entender a diferença entre dados, informação e conhecimento. Conhecer a estrutura de armazenamento como Banco de Dados e saber relacionar essa estrutura com o SGBD. Para tal, é fundamental conhecer todas as características de um projeto de banco de dados e também, como implementar esse projeto.

**Objetivos da aula**

-   Diferenciar entre dados, informação e conhecimento;
-   Conhecer e Entender a definição de  bancos de dados e Sistemas Gerenciadores de Banco de Dados - SGBD´s;
-   Aplicar as principais características de um projeto de  bancos de dados.

**Resumo**

**Dado – Definição**

É a menor unidade de armazenamento dentro de um banco de dados. É um aspecto que quando “olhado” sozinho, não tem significado, não tem sentido. Para que haja compreensão do dado, é sempre necessário fazer o processamento, a realização de algum tipo de operação com o dado. 

![Fonte: autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683302001208-aYNU6XXrBZ.png "Fonte: autoral, 2023.")

Fonte: autoral, 2023.

**Informação – Definição**

A informação é o resultado de algum tipo de operação com o dado, ou seja, é sempre, através do processamento dos dados que se pode obter a informação.

![Fonte: autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683302033749-ILSLTZg0ki.png "Fonte: autoral, 2023.")

Fonte: autoral, 2023.

**Conhecimento – Definição**

Ocorre quando utilizamos a informação para chegar a alguma conclusão, ou até mesmo, reconhecer algum tipo de comportamento e/ou padrão.

Através de análises estatísticas, como por exemplo, média, contagem, valor máximo, valor mínimo e taxas de porcentagem, das informações, chega-se ao conhecimento.

**Exemplo:**  Como o dia está quente e a probabilidade de chover é baixa, irei à praia.

Uma loja de roupas de praias, usando esse conhecimento, pode reforçar seu estoque, ou enviar comunicações de promoções, ou ainda criar ações de marketing, etc.

**Sistemas Baseados Em Arquivos**

Iniciamos essa seção falando dos sistemas baseados em arquivos, por um motivo: são os antecessores dos bancos de dados. Antes de iniciarmos essa discussão, temos que lembrar o que é um arquivo. Segundo o bom e velho amigo, o dicionário, um arquivo é a “reunião dos dados de um computador que, com registro individual e organizados sob um formato específico, contém textos, tabelas, imagens, sons etc.”. Resumindo, podemos dizer, então, que arquivos são estruturas específicas de armazenamento de dados.

Os sistemas de arquivos existem desde os primórdios da computação, ou seja, desde 1950. A computação evoluiu muito desde essa década, entretanto, os sistemas de arquivos apenas ficaram mais modernos e ganharam mais recursos, mas as características de um arquivo permanecem.

Outro ponto importante é o meio onde estes arquivos ficam armazenados: Discos rígidos (HDs), CDs, disquetes, fitas magnéticas, _pendrives_, cartões perfurados etc., o fato é que o sistema de armazenamento de arquivos, embora tenham evoluído muito com o tempo, servem para armazenar estes dados e, qualquer falha nesses mecanismos pode causar a perda de todos os dados.

Outro ponto crucial que motivou a existência dos bancos de dados é que cada software possui um formato específico de arquivo, obrigando o usuário a ter aquele software para poder ler ou gravar em um determinado formato.

Isso não quer dizer que os arquivos não possam ser utilizados para armazenar dados. Na verdade, são, e isso é realmente uma prática muito comum. Inúmeras pessoas e empresas usam, por exemplo, planilhas de softwares licenciados para armazenar informações importantes (sensíveis), como mostrado na figura 2, num breve exemplo.

![Planilha guardando dados – Fonte: TRAUE, T. (2021)](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683302071533-cbyKS2Vp8N.png "Planilha guardando dados – Fonte: TRAUE, T. (2021)")

Planilha guardando dados – Fonte: TRAUE, T. (2021)

O problema é que apesar de ser muito eficientes para armazenar dados simples e um pequeno volume de dados, quando as necessidades de armazenamento começam a ficar mais complexas, estes sistemas não dão conta e, por isso, recorremos à sistemas de informação, onde os dados são guardados e gerenciados pelo próprio sistema, mas vamos estudar isso em breve. Além disso, há muitas outras desvantagens em utilizar os sistemas de arquivos para armazenamento de dados, como:

-   **Inconsistência e redundância de dados:** Aplicações evoluem com o tempo e há formatos demais, gerando, muitas vezes, repetição de dados
-   **Dificuldade de acesso aos dados:** Os dados nos arquivos normalmente só podem ser acessados de uma forma e, às vezes, isso pode atrasar o acesso à informação
-   **Isolamento dos dados:** Muitas vezes o compartilhamento de dados pode ser dificultado pois nem sempre quem os recebe possui o mesmo software (e/ou versão) para acessar.
-   **Falta de integridade:** Realizar buscas de dados em arquivos pode resultar em dados duplicados ou ignorados, devido ao formato de como são gerados ou guardados.
-   **Falta de atomicidade:** Nem sempre existem mecanismos de tratamento de erros (causados por qualquer motivo) em arquivos e os dados podem ser perdidos.
-   **Falta de segurança:** Muitas vezes a proteção dos arquivos é responsabilidade do sistema operacional e, muitas vezes, dados sensíveis são rapidamente acessados.

E, por isso, usamos bancos de dados, cujas principais características serão apresentadas a seguir.

**Bancos de Dados**

Como vimos, os sistemas baseados em arquivos são ótimas soluções para resolver o problema de armazenamento de dados menos complexos, mas quando o grau de dificuldade aumenta, temos de utilizar sistemas específicos para gerir nossas informações e é aí que entram os bancos de dados. Mas o que são? Para que devemos usar? Para que servem? E para que não servem? Essas são questões que responderemos a seguir.

Na década de 60 a IBM percebeu que os sistemas de arquivos tinham muitos problemas e começou a desenvolver pesquisas de como solucioná-los. Mas foi somente em 1970 que Edgar Todd, um importante pesquisador da IBM publicou um artigo intitulado “_A Relational Model of Data for Large Shared Data Banks”_ (Um modelo relacional de dados para grandes bancos de dados compartilhados). Neste artigo, Todd apresenta um modelo que se tornou, mais tarde, o princípio mais importante dos bancos de dados. Foi somente na década de 1980 que a IBM então lançou seus primeiros projetos comerciais de bancos de dados. Já no início do século XXI, com o “estouro” da internet, os bancos de dados e sistemas começaram a ganhar cada vez mais espaço no mercado (inclusive de entretenimento como o de jogos) e novos fabricantes começaram a surgir, com propostas das mais diversas.

A ideia dos bancos de dados é justamente suprir os problemas dos sistemas baseados em arquivos, garantindo itens como integridade dos dados, segurança no acesso aos dados, atomicidade, independência da linguagem de programação, concentração no armazenamento e desempenho. Mas lembre-se que os bancos de dados servem para armazenar dados e não conhecimento. O conhecimento, aqui, é extraído do conjunto de dados.

Os bancos de dados são tão importantes que precisam de uma disciplina inteira só para eles, o que não quer dizer que são mais fáceis de trabalhar do que sistemas de arquivos ou mais baratos. Muito pelo contrário, é preciso entender bem a arquitetura de um banco de dados e eles nem sempre são gratuitos. Na verdade, normalmente são caros.

**Bancos de Dados – Principais Características**

Bom, um sistema de banco de dados (comumente chamado de database ou base de dados) é nada mais do que um grande software capaz de armazenar dados, de forma organizada. Estes dados podem ser acessados por qualquer programa que utiliza nosso banco e são armazenados numa estrutura específica, que chamamos de tabelas.

Tabelas são nada mais do que estruturas com linhas e colunas. As linhas armazenam os dados, enquanto as colunas servem para “categorizar” aquele dado. Um exemplo com dados arbitrários, neste caso, torna mais fácil o entendimento deste importante conceito:

![Tabela 1 - Tabela de Vendas de Carros - Fonte: TRAUE,T. (2021)](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683302171678-Pp7tt78lEL.png "Tabela 1 - Tabela de Vendas de Carros - Fonte: TRAUE,T. (2021)")

Tabela 1 - Tabela de Vendas de Carros - Fonte: TRAUE,T. (2021)

Note, neste simples exemplo, que os dados dos carros estão armazenados em uma linha, mas cada coluna representa um tipo de dados diferente para este carro. Os dados ficam no cruzamento das linhas e colunas, ou seja, se você quiser saber o modelo do carro cuja placa é “ABC-1234”, basta cruzar esta linha com a coluna “Modelo” e, neste caso, obter o dado “A8”.

No mundo dos bancos de dados, chamamos as tabelas de entidade e as colunas de atributos.

**Conceito de Projeto**

Para este assunto, precisamos definir o que é “projeto” e nada melhor do que usar o guia mais completo e importante sobre o assunto, o famoso “PMBOK”, que em sua primeira página define projeto como “um esforço temporário empreendido para criar um produto, serviço ou resultado exclusivo” (PMBOK, 2017).

O PMBOK define, ainda, que todo projeto normalmente é dividido em fases e essas fases devem ser muito bem definidas, ou seja, cada fase de cada projeto deve ter um início, uma execução e uma finalização. Independentemente do modelo de gestão de projetos utilizado, normalmente os projetos são divididos em quatro grandes fases, conforme a figura:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683302219265-GoxcjbSLcd.png)

Lembre-se que qualquer projeto, até mesmo de um jogo, pode ser dividido nestas fases e essencialmente as fases definem o que acontece na linha do tempo do projeto.

Na fase de iniciação são definidos os objetivos do projeto (o que será criado), as justificativas (porque ele faz e porque este projeto deve ser realizado), a descrição do time, ou seja, quem é quem no projeto, a identificação dos stakeholders (partes interessadas do projeto) e a definição das características deste projeto. Aqui, normalmente são gerados inúmeros documentos, comumente chamados de artefatos, que explicam para todos os interessados o que realmente o projeto faz, para que ele realmente serve. Aqui também é definido de forma superficial um cronograma, quais são as entregas, como cada entrega deve ser aceita, além das expectativas de custos.    

Na fase de planejamento os detalhes são descritos e é onde também são levantados os recursos para a concepção do projeto, comprados equipamentos necessários para seu desenvolvimento (se é o caso), são feitos os planejamentos detalhados dos custos e das atividades. Podemos ver essa fase como um detalhamento da fase inicial, ou seja, define-se o que se quer realizar com o projeto na primeira fase e, na segunda, detalha-se tudo para que o projeto “saia do papel”.

Já a fase de execução é, literalmente, a concepção do projeto, ou seja, onde ele começa a ganhar vida e ser criado, colocado em prática. Aqui o projeto deve ser constantemente monitorado para que todo o planejamento das fases anteriores seja devidamente atendido e sejam aplicadas todas as correções necessárias para isso. Lembre-se que nos processos modernos de gestão de projetos, podem aqui ser realizadas entregas parciais do projeto ao cliente, ou seja, o sistema ou o jogo ou o serviço pode ser entregue em pequenas fases, com várias entregas até que todo o planejado seja entregue finalmente.

Finalmente, na fase de encerramento o projeto é entregue e todo o planejamento inicial é validado e o projeto é encerrado por definitivo. Normalmente gera-se, também, um documento que pode ser muito útil para projetos futuros, onde são mostrados os erros do projeto e como cada um foi tratado. Nessa fase também são encerrados os contratos e o projeto é arquivado.

**Projeto de Bancos de Dados**

Uma vez entendido o conceito de projeto de forma generalista, podemos incluir agora questões mais detalhadas sobre o projeto do banco de dados. Assim como qualquer projeto, os bancos de dados também precisam de um processo bem definido para implementação.

O projeto do banco de dados inicia-se, normalmente, já na fase de planejamento do projeto principal, ou seja, junto com o planejamento do produto ou serviço final. Normalmente dividimos as fases do projeto do banco de dados em quatro grandes etapas, conforme mostrado na figura 4.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683302263985-UpOdTNamKa.png)

O mundo real, descrito nessas fases é essencialmente o mundo o qual o projeto está inserido, ou seja, o nosso “minimundo” (comumente chamado por diversos autores) de onde projeto será descrito. Muitas vezes esse “minimundo” é o contexto completo de nosso cliente ou o roteiro de um jogo e, até mesmo, detalhes de um site qualquer. Por exemplo, para o projeto de um sistema acadêmico o “minimundo” é composto por alunos, curso, disciplinas, professores, coordenadores e o papel de cada um destes no todo modelado. É do “minimundo” que realizamos a análise precisa de requisitos.

**Análise de Requisitos**

O primeiro passo do projeto de bancos de dados é entender todas as necessidades. Isso se chama Análise de Requisitos. É comum dizermos que nessa fase descrevemos tudo que o sistema precisa fazer. É muito comum o uso de uma lista bastante extensa para representar os requisitos de nosso sistema. Normalmente essa lista é extraída do entendimento do sistema, do roteiro do jogo, dos artefatos da fase inicial do projeto ou qualquer outra fonte de conhecimento sobre o sistema.

Antes de mais nada é preciso levantar os requisitos que dão a ideia inicial do sistema. Mas o que é um requisito? É a lista de tudo que o sistema alvo deve ter ou fazer, ou seja, quais são as entidades, como elas se relacionam, quais as regras de negócio etc.

Nessa fase usamos diversas técnicas importantes, como por exemplo, entrevistas e muitas reuniões para entendermos os processos que realmente serão controlados por esse sistema, mesmo que um jogo! Não podemos esquecer que o sucesso das próximas etapas certamente dependerá do entendimento claro dessas necessidades e do levantamento dos requisitos. As técnicas de extração e categorização de requisitos serão abordadas numa aula específica para este fim.

Quando falamos de um Requisito Funcional estamos nos referindo à requisição de uma função que um software deverá atender/realizar. Ou seja, exigência, solicitação, desejo, necessidade, que um software deverá materializar. Um Requisito Funcional é um Requisito de Software.

Então para especificar um requisito funcional, é necessário identificar quais funções/ações que o software deve desempenhar. É importante ressaltar que as principais operações de manipulação de dados são conhecidas como CRUD(Create/Read/Update/Delete) e, na especificação de requisitos, tais operações são representadas pelas palavras Manter ou Gerenciar.

Ao especificar um requisito funcional é necessário colocar código, nome e descrição. Cada requisito funcional representa uma função diferente do sistema.

Para especificar requisitos funcionais, é necessário que:

-   Identifique o código do requisito funcional com o prefixo RF e depois o número do requisito.
-   Identifique o nome do requisito funcional.
-   Faça a descrição do requisito, identificando quais operações devem ser realizadas pelo sistema e, se for o caso, também identifique quais dados devem ser armazenados.

**Conteúdo bônus**

**Tópicos avançados**

Para realizar um projeto de banco de dados, saber especificar os requisitos funcionais é condição fundamental para alcançar o sucesso desse projeto. Perceba, que o processo de levantamento de dados, deve ser conciso, ou seja, objetivo, coeso, isso significa, sem redundâncias e completo, isso implica em conhecer todas as necessidades do usuário e, também do negócio. Caso, o levantamento de dados não tenha as características explanadas acima, a especificação de requisitos será insuficiente.

As características de um bom levantamento de dados são: Boa definição do projeto; Efetividade do projeto; Informações necessárias a um perfeito diagnóstico; Soluções inteligentes e Melhoria da imagem.  Já as características de um levantamento de dados Inadequado são: Um diagnóstico pobre; Conclusões comprometedoras; Não-identificação das causas dos problemas; Soluções medíocres; Custos elevados; Prazos vencidos e/ou comprometedores; Omissão de processos fundamentais e Descrédito.

**Exemplo de especificação de requisitos funcionais**

**RF01 - Manter os dados dos Contatos da Agenda.**

O sistema deve realizar as operações de inserir, alterar, excluir e consultar (CRUD) os contatos da agenda. Para cada contato, deve ser armazenado o código, nome, apelido do contato, endereço, telefone fixo, telefone celular, data de nascimento, e-mail pessoal e e-mail comercial.

**RF02 - Manter os dados das ligações**

O sistema deve realizar as operações de inserir, alterar, excluir e consultar (CRUD) as ligações telefônicas. Para cada ligação, deve ser armazenado o código da ligação, o número do telefone, a duração da ligação e a data da realização.

Referências Bibliográficas

DATE, C. J. **Introdução a sistemas de banco de dados**. Rio de Janeiro. Ed. Campus, 1991.

CHEN, Peter. **Modelagem de dados: a abordagem entidade-relacionamento para projeto lógico**. São Paulo: Makron Books, 1990.

MEDEIROS, L. F., **Banco de dados, princípios e práticas**, 1ª. ed., Ed. Intersaberes, 2013.

PUGA, S., França E., GOYA M., **Banco de dados: Implementação em SQL, PL/SQL e Oracle 11g**, Ed. Pearson, 2013.

ELMASRI R., NAVATHE, S. **Sistemas de Banco de Dados**, 4ª ed., Ed. Pearson, 2005.