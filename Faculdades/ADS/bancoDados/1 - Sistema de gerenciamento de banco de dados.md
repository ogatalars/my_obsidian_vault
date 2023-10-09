Um sistema de gerenciamento de banco de dados (SGBD) é um software projetado para auxiliar a aplicação na manutenção e utilização de grandes conjuntos de dados (RAMAKRISHNAN; GEHRKE, 2011).
Quando falamos de manutenção, estamos nos referindo principalmente à escrita (inserção, alteração e deleção); já a utilização está relacionada principalmente à leitura (buscas).

Algumas das vantagens de utilizar SGBDs são (RAMAKRISHNAN; GEHRKE, 2011):
• As aplicações (e os programadores) não precisam conhecer os detalhes de como os dados são armazenados em disco.
• O SGBD fornece diversas funcionalidades e implementa diversos algoritmos e otimizações para que as buscas possam ser realmente rápidas.
• O SGBD ajuda bastante a proteção da integridade e a segurança dos dados.
• O SGBD fornece meios de acesso concorrente (múltiplos usuários acessando os dados). 
• O SGBD auxilia a recuperação de falhas (falhas da aplicação, do próprio SGBD, do sistema operacional e até mesmo do hardware da máquina)
- A utilização de um SGBD reduz o tempo de desenvolvimento de uma aplicação.

Com todas essas vantagens, para a maioria das aplicações, não utilizar um SGBD nem é mais considerado uma opção. Alguns exemplos de **SGBDs populares são: MySQL, PostgreSQL, Oracle, SQLite, SQL Server e MongoDB.**

**Dado, informação e conhecimento**
Um computador pode armazenar e processar dados, que são representações simbólicas de alguma realidade (ou ficção) subjacente. Por exemplo, ao armazenarmos uma foto, do ponto de vista do computador estamos armazenando um conjunto de dados: são pixels dispostos matricialmente de forma que cada pixel possui um valor que determina sua cor. Um programa visualizador de fotos processa os dados do arquivo da foto e os transforma em comandos de máquina capazes de exibir a foto em um monitor. Contudo, é somente quando um humano observa a foto que é possível para ele apreender alguma informação. Os processos listados anteriormente (armazenamento e exibição) ocorrem da mesma maneira para qualquer foto, mas um ser humano vai olhar para cada foto e apreender uma informação diferente dela.

**Tabela, registro e campo**
No projeto de um SGBD, há dois grandes tipos de decisão a tomar: decisões no nível físico e no nível conceitual dos dados, este último também chamado de nível lógico (RAMAKRISHNAN; GEHRKE, 2011). O nível físico diz respeito a como os dados são estruturados, ou seja, como os arquivos são gravados em disco. Já o nível conceitual diz respeito à visão que o usuário do SGBD (a aplicação e seu desenvolvedor) terá sobre os dados

Em um banco de dados relacional, os dados são organizados em tabelas. Uma tabela armazena uma coleção de ocorrências para determinado tipo de entidade, ao passo que um banco de dados reúne tabelas pertinentes a determinado assunto. Por exemplo, um banco de dados para a gerência de recursos humanos de uma empresa poderá ter tabelas para funcionários, departamentos, salários, etc. Cada ocorrência de um tipo de entidade (por exemplo, um funcionário) é um registro na tabela correspondente. Também podemos chamar os registros por linhas. Assim, uma tabela de funcionários possui uma linha para cada funcionário da empresa. Em um banco relacional, cada tipo de entidade define um conjunto uniforme de atributos possíveis para as ocorrências daquele tipo de entidade. Dito de outra forma: cada tabela define um conjunto de colunas, e cada registro possui um valor para cada coluna.