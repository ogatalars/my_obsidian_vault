**Introdução**

O banco de dados  deve ter estruturas que permitam o armazenamento de dados, a consulta aos dados, dispositivos lógicos que ajudem no resgate dos dados, entre outros. Como exemplos de objetos pode-se citar:  Visão (Visão (view)), Sequência (Sequence), Índice (Index) entre outros.

**Objetivos da aula**

-   Criar e utilizar visão (view)s simples;
-   Criar e utilizar visão (view)s complexas;
-   Criar e manipular sequences;
-   Criar e manipular índices junto com as tabelas.

**Resumo**

**Visões (Views)**

Uma visão (view) é uma tabela virtual que tem por base uma tabela ou outra visão (view). Uma visão (view) não tem dados próprios mas é como uma interface através da qual os dados das tabelas podem ser visualizados ou atualizados. As tabelas nas quais uma visão (view) é baseada chamam-se _tabelas-base_. A visão (view) é guardada como um comando SELECT no dicionário de dados. Podem ser utilizadas para:

-   Limitar o acesso a dados;
-   Ajudar na confecção de consultas complexas, por exemplo, consultar dados de uma junção de várias tabelas, sem precisar executar o comando de uma Join;
-   Apresentar diferentes panoramas dos mesmos dados, contidos na mesma tabela.

**Criando Visões**

**Sintaxe:**

CREATE \[OR REPLACE\] \[FORCE|NOFORCE\] VISÃO (VIEW) nome\_visão (view)

  \[(_apelido_\[, _apelido_\]...)\]

AS _subconsulta_

\[WITH CHECK OPTION \[CONSTRAINT _restrição_\]\]

\[WITH READ ONLY\];

onde:

Há duas classificações para visão (view)s: simples e complexa:

**Características de uma Visão (view) Simples**

-   Mostra dados envolvendo apenas uma tabela;
-   Não contém funções ou grupos de dados;
-   É possível implementar um comando DML.

**Características de uma Visão (view) Complexa**

-   Mostra dados envolvendo várias tabelas;
-   Contém funções ou grupos de dados;
-   Nem sempre, é possível, implementar um comando DML.

**Criação de Visão (view) Simples**

**Exemplo 1:** Criar uma visão (view) com nome EMPVU10, que contenha detalhes tais como código, nome e função dos empregados que atuam no setor 10.

CREATE VISÃO (VIEW) empvu10

AS SELECT          empno, ename, job

FROM                            scott.emp

WHERE                         deptno = 10;

A estrutura da visão (view) pode ser mostrada usando o comando DESCRIBE

ESCRIBE EMPVU10;

Name                         Null?        Type

EMPNO                      NOT NULL        NUMBER(4)

ENAME                                      VARCHAR2(10)

JOB                                           VARCHAR2(9)

A opção OR REPLACE  altera a definição da visão (view) sem eliminá-la, recriá-la ou dar novamente os privilégios de objetos anteriormente concedidos.

**Exemplo 2:** Alterar a definição da visão (view) empvu10 para que sejam mostrados apelidos para os campos da consulta: id\_emp, nome e função:

CREATE OR REPLACE VISÃO (VIEW) empvu10 (id\_emp, nome, função)

AS SELECT         empno, ename, job

FROM                            scott.emp

WHERE               deptno = 10;

**Criação de Visão (view) Complexa**

**Exemplo 3:**  Criar uma visão (view) para mostrar o nome do setor e o menor salário, maior salário e a média salarial de cada setor.

CREATE VISÃO (VIEW) dept\_sum\_vu          (name, minsal, maxsal, avgsal)

AS SELECT          d.dname, MIN(e.sal), MAX(e.sal, AVG(e.sal)

FROM                  scott.emp e join scott.dept d

ON             (e.deptno = d.deptno)

GROUP BY          d.dname;

No exemplo anterior cria-se uma visão (view) complexa para mostrar os nomes de setor, maior salário, menor salário  e o salário médio por setor. Note que os nomes alternativos foram especificados para a visão (view). Esse é um requisito se um campo da visão (view) derivar de uma função ou expressão.

**Exemplo 4:**  Criar uma visão (view), identificada por empvu20,  com todos os campos da tabela emp e todos os empregados do setor 20. Incluir uma cláusula para  assegurar que as manipulações permaneçam no domínio da visão (view).

CREATE OR REPLACE VISÃO (VIEW) empvu20

AS SELECT          \*

FROM             scott.emp

WHERE    deptno = 20

WITH CHECK OPTION CONSTRAINT empvu20\_ck;

No exemplo anterior qualquer tentativa de alteração do código do setor para qualquer registro na visão (view) falhará porque ela violará a restrição WITH CHECK OPTION. Está cláusula especifica que os comandos INSERTS e UPDATES executados pela visão (view) não têm permissão de criar registros que a visão (view) não possa mostrar e, portanto, ela permite restrições de integridade e verificações de validação de dados a serem impostas aos dados que estiverem sendo adicionados ou alterados.

Se houver uma tentativa de executar operações DML em registros que a visão (view) não selecionou, será exibido um erro, com o nome da restrição, se ele tiver sido especificado, por exemplo, o comando DML a seguir realiza uma alteração no código do setor, usando a visão (view) empvu20.

 UPDATE empvu20

 SET    deptno = 10

 WHERE  empno = 7788;

update empvu20

         \*

 ERRO na registro 1: (ERROR at line1)

ORA-01402: violação na cláusula where WITH CHECK OPTION na visão (view) (visão (view) WITH CHECK OPTION where-clause violation)

Neste caso, nenhum  registro será atualizado porque se o código do setor fosse alterado para 10, a visão (view) não seria mais capaz de enxergar o empregado. Por isso, com a cláusula WITH CHECK OPTION, a visão (view) poderá ver apenas empregados do setor 20 e não permitirá que o código de setor para esses empregados seja alterado na visão (view).

**Exemplo 5: Usando a cláusula WITH READ ONLY-** Alterar as definições da visão (view) empvu10 para que se torne somente para leitura.

CREATE OR REPLACE VISÃO (VIEW) empvu10(employee\_number, employee\_name, job\_title)

AS SELECT          empno, ename, job

FROM                  scott.emp

WHERE      deptno = 10

WITH READ ONLY;

Qualquer ensaio para adicionar um registro ou alterá-lo usando a visão (view) resultará em erro no Oracle Server -01733: não é permitida campo virtual aqui (virtual column not allowed here).

**Excluindo uma Visão (view)**

É possível excluir uma visão (view) sem perder dados porque uma visão (view) tem como base as subjacentes no banco de dados.

**Sintaxe:**

DROP VISÃO (VIEW) _visão (view)_;

**Exemplo:** Excluir a visão (view) empvu10.

DROP VISÃO (VIEW) empvu10;

O comando DROP VISÃO (VIEW) exclui a definição da visão (view) do banco de dados. A exclusão de visão (view) não tem efeito nas tabelas nas quais ela é baseada. A visão (view)s ou outras aplicações baseadas em visão (view)s excluídas tornam-se inválidas. Apenas o criador ou usuário com o privilégio DROP ANY VISÃO (VIEW) pode excluir uma visão (view).

**Sequência**

Uma sequência é um objeto do banco de dados criado pelo usuário que pode ser compartilhado por vários usuários para gerar códigos inteiros exclusivos. Pode-se usar as sequências para gerar valores de chave primária automaticamente.

A sequência é gerada e incrementada (ou diminuída). Esse objeto pode economizar tempo, pois é capaz de reduzir a quantidade de código de aplicação necessária para criar uma rotina de geração de sequências.

**Criando uma sequência**

**Sintaxe:**

CREATE SEQUENCE nome\__sequência_

     \[INCREMENT BY _n_\]

     \[START WITH _n_\]

     \[{MAXVALUE _n_ | NOMAXVALUE}\]

     \[{MINVALUE _n_ | NOMINVALUE}\]

     \[{CYCLE | NOCYCLE}\]

     \[{CACHE _n_ | NOCACHE}\];

onde:

**Exemplo:** Criar uma sequência identificada por dept\_deptno. A sequência deverá iniciar em 91, ser incrementada de 1 em 1, ter como valor máximo 100 e as demais configuarções default.

 CREATE SEQUENCE dept\_deptno

           INCREMENT BY 1

           START WITH 91

           MAXVALUE 100

           NOCACHE

           NOCYCLE;

O exemplo acima cria uma sequência chamada DEPT\_DEPTNO para ser usada no campo DEPTNO da tabela DEPT. A sequência começa em 91, não permite cachê e não permite o ciclo da sequência. Se o valor do parâmetro INCREMENT By for negativo, a sequência será descendente.

**Usando uma Sequência**

Para utilizar a sequência é pode-se fazer referência aos seus valores usando as pseudocampos NEXTVAL e CURRVAL.

-   NEXTVAL retorna o próximo valor de sequência disponível.
-   CURRVAL obtém o valor de sequência atual.

NEXTVAL e CURRVAL podem ser usadas nos seguintes casos:

-   Na relação SELECT de um comando SELECT que não seja parte de uma subconsulta
-   Na relação SELECT de uma subconsulta em um comando INSERT
-   Na cláusula VALUES de um comando INSERT
-   Na cláusula SET de um comando UPDATE

NEXTVAL e CURRVAL não podem ser usadas nos seguintes casos:

-   Na relação SELECT de uma visão (view)
-   Em um comando SELECT com a palavra-chave DISTINCT
-   Em um comando SELECT com as cláusulas GROUP BY, HAVING ou ORDER BY
-   Em uma subconsulta de um comando SELECT, DELETE ou UPDATE

**Exemplo 1: Usando NEXTVAL -** Adicionar um  registro na tabela dept usando a sequence dept\_deptno para prover  o código do setor, o nome do setor é MARKETING  e a sua localização SAN DIEGO.

INSERT INTO      dept(deptno, dname, loc)

VALUES               (**dept\_deptno.NEXTVAL**,'MARKETING', 'SAN DIEGO');

**Exemplo 2: Usando CURRVAL –** Consultar o próximo valor da sequência dept\_deptno:

 SELECT    dept\_deptno.CURRVAL

 FROM       dual;

**Alterando uma Sequência**

É possível alterar as especificações de uma sequência, para isso é necessário informar a cláusula que sofrerá alterações, as demais cláusulas permanecerão com os valores anteriores.

**Sintaxe:**

Alter SEQUENCE nome\__sequência_

     \[INCREMENT BY _n_\]

     \[{MAXVALUE _n_ | NOMAXVALUE}\]

       \[{MINVALUE _n_ | NOMINVALUE}\]

     \[{CYCLE | NOCYCLE}\]

     \[{CACHE _n_ | NOCACHE}\];

**Exemplo 3:** Aterar a sequence dept\_deptno, o valor máximo deverá ser modificado para 99999 e as demais configuração deverão permanecer as mesmas.

 ALTER SEQUENCE dept\_deptno

   MAXVALUE 999999;

-   Somente o proprietário ou usuários que possuam o privilégio ALTER podem alterar a sequência.
-   Somente os códigos de sequência futuras são afetados.
-   A sequência deve ser eliminada e recriada para reiniciar a sequência em um código diferente.
-   Alguma validação é executada, Por exemplo, não é possível impor um novo MAXVALUE menor do que o código de sequência atual.

**Excluindo uma Sequência**

Após excluir a sequência do dicionário de dados,  não será possível  fazer referência a ela.

**Sintaxe:**

       DROP SEQUENCE nome\_sequência;

**Exemplo:** Excluir a sequencia dept\_deptno.

 DROP SEQUENCE dept\_deptno;

Somente o  proprietário da sequência ou usuários com privilégio DROP ANY SEQUENCE podem  excluir uma sequência.

**Índice (Index)**

Um índice do _Oracle Server_ é um objeto de esquema que pode apressar o resgate de registros usando um ponteiro. Se não houver um índice no campo, ocorrerá uma análise em toda a tabela.

O índice é muito parecido com uma chave:

-   Permite classificação por outros campos
-   Apressa a busca de registros específicos
-   A chave primária e a chave secundária são índices

A diferença entre chave e índice é que as chaves são estruturas lógicas, usadas para identificar registros em uma tabela, e índices são estruturas físicas, usadas para otimizar o processamento de dados, pois são objetos no banco de dados que fornecem um mapeamento de todos os valores em um campo de uma tabela.

Os índices podem ser usados para garantir a unicidade dos elementos inseridos num campo (ou campo) e também para alavancar a performance na busca por registros.

O aumento de performance é obtido quando o critério de pesquisa por dados na tabela inclui referência de campo(s) indexados.

Um índice provê acesso direto e veloz aos registros de uma tabela. Seu objetivo é diminuir a necessidade de E/S do disco usando um caminho indexado para encontrar dados rapidamente. O índice é usado e mantido automaticamente pelo Oracle Server. Após a geração de um índice, não é necessária nenhuma atividade direta do usuário.

Os índices são lógica e fisicamente independentes da tabela que indexam, ou seja, que eles podem ser criados e eliminados a qualquer momento e não têm nenhuma consequência sobre as tabelas-base ou outros índices.  Quando uma tabela é  excluída, os índices associados a ela também são removidos.

**Criando um Índice**

**Sintaxe:**

       CREATE INDEX nome\__índice_ ON _tabela_ (_campo_\[, _campo_\]...);

onde:

        nome\__índice_ é o nome do índice

        _tabela_                     é o nome da tabela

        _campo_                               é o nome da campo na tabela a ser indexada

**Exemplo:** Criar um índice para campo ename da tabela emp.

 CREATE INDEX  emp\_ename\_idx

 ON                      emp(ename);

É possível criar vários índices para uma tabela, mas isso não significa que as consultas serão aceleradas. Cada operação DML que seja submetida a commit em uma tabela com índices significa que os índices devem ser alterados. Quanto mais índices ligados a uma tabela você tiver, maior será o trabalho feito pelo Oracle Server para alterar todos os índices após um comando DML. Por isso recomenda-se a criação de índices quando:

-   o campo for usado, de forma frequente, na cláusula WHERE ou em uma condição de junção;
-   o campo contiver uma grande faixa de valores;
-   o campo contiver um grande código de valores nulos;
-   dois ou mais campos forem usados juntos, de forma frequente, em uma cláusula WHERE ou em uma condição de junção;
-   a tabela for grande e se esperar que a maioria das consultas recupere menos que 2 a 4% dos registros;
-   Lembre-se de que, para implantar exclusividade, deve-se definir uma restrição exclusiva na definição da tabela. Em seguida, um índice exclusivo será criado automaticamente;
-   Quando a tabela for alterada com frequência. Se você tiver um ou mais índices em uma tabela, os comandos DML que acessarem a tabela serão mais lentos.

**Excluindo um Índice**

Somente o proprietário do índice ou usuários com privilégio  DROP ANY INDEX podem excluir o índice.

**Sintaxe:**

      DROP INDEX nome\_indice

**Exemplo:** Eliminar o índice emp\_ename\_idx.

 DROP INDEX nome\_indice

Um índice  não pode ser modificado, para alterá-lo deve-se eliminá-lo e, em seguida, recriá-lo.

**Conteúdo bônus**

**Consultando visão (view)s no dicionário de dados**

As definições da visão (view) ficam armazenadas no dicionário de dados como uma consulta. A tabela do dicionário de dados USER\_VISÃO (VIEW) contém o  nome e a definição da visão (view). O texto do comando SELECT que constitui a visão (view) é armazenado em uma campo LONG.

**Exemplo:** Mostrar o nome e o texto de definição da visão (view)s do usuário corrente:

 SELECT VISÃO (VIEW)\_NAME, TEXT FROM USER\_VISÃO (VIEW)S;

**Resultado:**

**VISÃO (VIEW)\_NAME         TEXT**

SALES            SELECT REPID, ORD.CUSTID, CUSTOMER.NAME CUSTNAME,

                 PRODUCT.PRODID, DESCRIP PRODNA

**Consultando  Sequências no dicionário de dados.**

As definições da sequência ficam armazenadas no dicionário de dados e podem ser consultadas na visão (view) USER\_SEQUENCES.

select \*

from user\_sequences

where sequence\_name = 'DEPT\_DEPTNO';

**Resultado:**

SEQUENCE\_NAME MIN\_VALUE  MAX\_VALUE INCREMENT\_BY C O CACHE\_SIZE LAST\_NUMBER

DEPT\_DEPTNO       1          3            1     Y N     0           1  

O campo LAST\_NUMBER exibe o próximo código de sequência disponível.

**Consultando Índices no dicionário de dados.**

As definições do índice  ficam armazenadas no dicionário de dados, é possível consultá-las usando a  visão (view) USER\_INDEXES. Também é possível checar os campos envolvidos em um índice consultando a visão (view) USER\_IND\_COLUMNS.

A visão (view) user\_indexes contém muitas campos, por isso é recomendado que verifique estrutura da visão (view)  e elabore uma consulta somente com as campos relevantes à  pesquisa, para isso utilize a comando DESCRIBE user\_indexes

**Exemplo:**  Mostrar as informações sobre o tipo de índice e o nome da tabela para o índice emp\_ename\_idx.

SELECT INDEX\_NAME, INDEX\_TYPE, TABLE\_NAME

FROM USER\_INDEXES

WHERE INDEX\_NAME = 'EMP\_ENAME\_IDX'

**Resultado:**

INDEX\_NAME              INDEX\_TYPE                  TABLE\_NAME

\--------------------- --------------------------- ----------------EMP\_ENAME\_IDX      NORMAL                      EMP

Referências Bibliográficas

DATE, C. J. **Introdução a sistemas de banco de dados**. Rio de Janeiro. Ed. Campus, 1991.

CHEN, Peter. **Modelagem de dados: a abordagem entidade-relacionamento para projeto lógico**. São Paulo: Makron Books, 1990.

MEDEIROS, L. F. **Banco de dados, princípios e práticas**, 1ª. ed., Ed. Intersaberes, 2013.

PUGA, S., França E., GOYA M., **Banco de dados: Implementação em SQL, PL/SQL e Oracle 11g**, Ed. Pearson, 2013.

ELMASRI R., NAVATHE, S. **Sistemas de Banco de Dados**, 4ª ed. Ed. Pearson, 2005.