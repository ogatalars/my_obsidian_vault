As funções de grupo operam em conjuntos de linhas para fornecer um resultado por grupo. As operações das funções de grupo podem envolver todas as linhas de uma tabela ou conjuntos de linhas**.**

Uma subconsulta é uma  consulta utilizada dentro de uma instrução SQL. Pode ser utilizada dentro de instruções select, insert, delete update ou create table.

**Objetivos da aula**

-   Desenvolver consultas complexas com o uso de funções grupo;
    
-   Implantar as restrições nos grupos de dados com a cláusula Having;
    
-   Identificar e Realizar Subconsultas de uma única linha;
    
-   Identificar e Realizar Subconsultas de várias linhas;
    
-   Identificar e Realizar Subconsultas de várias colunas.
    

**Resumo**

**Funções de Grupo**

As funções de grupo operam em conjuntos de linhas para fornecer um resultado por grupo. As operações das funções de grupo podem envolver todas as linhas de uma tabela ou conjuntos de linhas definidos por critérios pré-estabelecidos.

Assim como as funções de diversas outras linguagens ou aplicativos as funções disponíveis na SQL requerem argumentos para realização das operações e retornam valores; neste caso os argumentos serão representados pelo nome da coluna: FUNÇÃO(coluna).

Algumas funções disponíveis:

**AVG ( )** – Retorna a média obtida entre os valores de um conjunto

**COUNT ( )** – Retorna a quantidade de ocorrências

**MAX ( ) –** Retorna o  maior valor de um conjunto

**MIN ( ) –** Retorna o  menor valor de um conjunto

**SUM( ) –** Retorna a somatória dos valores de um conjunto

**VARIANCE( ) –** Retorna a variância entre os valores de um conjunto

**Sintaxe:**

SELECT    \[_coluna_,\]    _função\_de\_grupo(coluna)_

FROM       _tabela_

\[WHERE              _condição_\]

\[GROUP BY                  _coluna_\]

\[ORDER BY         _coluna_\];

onde:

<table><tbody><tr><td><p><span><span><span>[<em>coluna</em>,]</span></span></span></p></td><td><p><span><span><span>lista de colunas envolvidas na consulta, é opcional</span></span></span></p></td></tr><tr><td><p><span><span><span><em>função_de_grupo(coluna)</em></span></span></span></p></td><td><p><span><span><span>indica o nome da função que será utilizada e que os dados da coluna especificada serão passados como parâmetro para a função</span></span></span></p></td></tr><tr><td><p><span><span><span>FROM <em>tabela</em></span></span></span></p></td><td><p><span><span><span>tabela ou tabelas utilizadas na consulta</span></span></span></p></td></tr><tr><td><p><span><span><span>[WHERE <em>condição</em>]</span></span></span></p></td><td><p><span><span><span>condição para realização da consulta, limita o conjunto de dados que irão compor o conjunto.</span></span></span></p></td></tr><tr><td><p><span><span><span>[GROUP BY <em>coluna</em>]</span></span></span></p></td><td><p><span><span><span>Cria grupos de dados</span></span></span></p></td></tr><tr><td><p><span><span><span>[HAVING condição]</span></span></span></p></td><td><p><span><span><span>limita os grupos a serem mostrados, é similar à cláusula where, mas aplica-se somente à colunas que tenham valores agrupados</span></span></span></p></td></tr><tr><td><p><span><span><span>[ORDER BY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>coluna</em>];</span></span></span></p></td><td><p><span><span><span>A ordenação é por default ascendente.</span></span></span></p></td></tr></tbody></table>

-   Todas as funções de grupo, exceto COUNT(\*), ignoram valores nulos. Para substituir um valor por valores nulos, use a função NVL.
    

O agrupamento simples envolve todo o conjunto de uma determinada tabela, isto é, considera todas as linhas que satisfazem um critério e cada  função envolvida produz um único resultado para o conjunto.

![Figura 1 - Função de Grupo Max - Fonte: Goya, 2013.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683580909648-YrIowCzHj8.png "Figura 1 - Função de Grupo Max - Fonte: Goya, 2013.")

Figura 1 - Função de Grupo Max - Fonte: Goya, 2013.

**Exemplo 1:** Verificar o maior salário do conjunto;  neste caso todas as linhas da tabela seriam avaliadas e apenas um valor retornaria como resultado;

Select MAX(sal)

from scott.EMP;

**Exemplo 2:** Calcular a média salarial, o maior salário, o menor salário e a somatória dos salários de todos os funcionários que possuem a cadeia de caracteres  ‘SALES’  como parte do cargo.

SELECT **AVG**(sal), **MAX**(sal), **MIN**(sal), **SUM**(sal)

FROM        scott.emp

**WHERE**      job LIKE 'SALES%';

**Resultado:**

**AVG(SAL)  MAX(SAL)   MIN(SAL)     SUM(SAL)**

1400      1600      1250              5600

**Exemplo 3:** Exibir a quantidade de funcionários que trabalham no departamento 30.

SELECT     **COUNT(\*)**

FROM        scott.emp

**WHERE**      deptno = 30;

A Função COUNT tem dois formatos: COUNT(\*) e COUNT(_expr_).

COUNT(\*) retorna o número de linhas em uma tabela, inclusive linhas duplicadas e linhas contendo valores nulos em qualquer uma das colunas. Se uma cláusula WHERE estiver incluída na instrução SELECT, COUNT(\*) retornará o número de linhas que satisfizer a condição na cláusula WHERE.

COUNT(_expr_) retorna o número de linhas não nulas na coluna identificada por _expr_.

**Agrupando Resultados:**

![Figura 2 - Cláusula Group by - Fonte: Goya, 2013.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683580975359-5uBi0gU1cr.png "Figura 2 - Cláusula Group by - Fonte: Goya, 2013.")

Figura 2 - Cláusula Group by - Fonte: Goya, 2013.

**Exemplo 4:** Exibir a média salarial por departamento.

SELECT   deptno, AVG(sal)

FROM     scott.emp

GROUP BY deptno;

**Resultado:**

**DEPTNO    AVG(SAL)**

 10   2916.6667

 20              2175

 30        1566.6667

Para limitar o resultado de linhas que estarão envolvidas no agrupamento deve-se primeiro utilizar a cláusula WHERE e depois a cláusula GROUP BY.

Todas as colunas individuais envolvidas na consulta, isto é, que não estão participando de funções de grupo,  devem ser incluídas na cláusula GROUP BY.

Não é possível usar o apelido de coluna na cláusula GROUP BY.

Por default, as linhas são classificadas por ordem crescente das colunas incluídas na lista GROUP BY. Isso pode ser sobreposto usando a cláusula ORDER BY.

A coluna GROUP BY não precisa estar na cláusula SELECT.

Pode-se utilizar a função de grupo na cláusula ORDER BY.

**Exemplo 5:** Exiba a somatória dos salários por departamento e cargo.

SELECT   **deptno, job,** sum(sal)

FROM     emp

**GROUP BY deptno, job;**

**Resultado:**

DEPTNO              JOB              SUM(SAL)

\----------  ---------    ----------

10    CLERK         1300

10    MANAGER   2450

30    CLERK           950

30    MANAGER             2850

30    SALESMAN            5600

**...**

No exemplo 5 primeiro, as linhas são agrupadas pelo número do departamento. Em seguida, dentro dos grupos de números de departamentos, as linhas são agrupadas pelo cargo.

Dessa forma, a função SUM é aplicada à coluna de salários para todos os cargos dentro de cada grupo de números de departamentos.

**Restringindo resultados do grupo**

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683581023954-weQA6lr1RF.png)

Da mesma forma que se usa a cláusula WHERE para restringir as linhas que serão selecionadas, pode-se usar a cláusula HAVING para restringir grupos.

As seguintes etapas são executadas quando a cláusula HAVING é utilizada:

-   As linhas são agrupadas.
-   A função de grupo é aplicada ao grupo.
-   Os grupos que correspondem aos critérios na cláusula HAVING são exibidos.

**Exemplo 6:** Exibir os números de departamentos e o salário máximo para os departamentos, cujo salário máximo seja maior do que 2.900.

SELECT   deptno, max(sal)

FROM     scott.emp

GROUP BY deptno

**HAVING   max(sal)>2900;**

**Resultado:**

DEPTNO    MAX(SAL)

10              5000

20              3000

**Subconsultas**

Uma subconsulta é uma  consulta utilizada dentro de uma instrução SQL. Pode ser utilizada dentro de instruções select, insert, delete update ou create table. Pode ser do tipo:

-   **Subconsultas de uma única linha:** consultas que retornam somente uma linha da instrução SELECT interna.
-   **Subconsultas de várias linhas:** consultas que retornam mais de uma linha da instrução SELECT interna.
-   **Subconsultas de várias colunas:** consultas que retornam mais de uma coluna da instrução SELECT interna

**Subconsulta em Consultas**

O uso de subconsultas em Consultas é útil quando a consulta principal requer valores desconhecidos, por exemplo: Suponha que seja necessário criar uma consulta para descobrir quem recebe um salário maior que o salário de Jones, neste caso **qual é o salário de Jones?**

![Figura 4 - Exemplo de Subconsulta - Goya, 2013.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683581061559-W9jlwAGZIl.png "Figura 4 - Exemplo de Subconsulta - Goya, 2013.")

Figura 4 - Exemplo de Subconsulta - Goya, 2013.

Para resolver esse problema, são necessárias _duas_ consultas: uma para descobrir quanto Jones recebe e outra para descobrir quem recebe mais do que ele.

**Sintaxe:**

SELECT  _colunas,_

FROM     _tabela_

WHERE  condição _operador expr_

                         (SELECT     _select\_list_

                                    FROM        _tabela_);

onde:

A condição envolve uma operação de comparação entre uma coluna e o resultado que será retornado pela subconsulta. A subconsulta é uma consulta, portanto, pode ser construída de acordo com o problema apontado e incluir condições, funções de grupo, várias colunas etc.

A subconsulta (consulta interna) é executada uma vez antes da consulta principal.

É possível colocar a subconsulta em várias cláusulas SQL:

-   cláusula WHERE
-   cláusula HAVING
-   cláusula FROM
-   As subconsultas devem estar entre parênteses e ao lado direito do operador de comparação.
-   Não utilizar uma cláusula ORDER BY a uma subconsulta.
-   Utilizar operadores de uma única linha com subconsultas de uma única linha.
-   Utilizar operadores de várias linhas com subconsultas de várias linhas. 

**Subconsultas de uma linha**

Podem ser utilizados os operadores relacionais <,>,<>.>=,<= e = para subconsultas que retornam uma linha.

Nos exemplos 1, 2, 3 e 4,  são apresentadas diversas situações para subconsultas de uma linha.

![Fonte: autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683581109131-nKUVzglUOh.png "Fonte: autoral, 2023.")

Fonte: autoral, 2023.

**Exemplo 1 -** Utilizando subconsultas em condições: Exiba o nome de todos os funcionários cujo salário é maior do que o salário do funcionário 7566.

SELECT ename

FROM   scott.emp

WHERE  sal >

                                       (SELECT sal

                                        FROM   scott.emp

                                       WHERE  empno = 7566);

**Exemplo 2**  **\-** Utilizando subconsultas em condições compostas: Exiba o nome e o cargo dos funcionários que cujo cargo é igual ao cargo do funcionário 7369 e o salário é maior do que o salário do funcionário 7876.

SELECT ename, job

FROM     scott.emp

WHERE    job =

                           (SELECT job  
                     FROM scott.emp  
                            WHERE empno = 7369)

  AND sal >

                         (SELECT            sal

                          FROM     scott.emp

                          WHERE   empno = 7876);

**Exemplo 3 -** Utilizando subconsultas com funções de grupo**:** Exiba o nome, cargo e salário de todos os funcionários com o salário igual ao menor salário recebido pelos funcionários.

 SELECT      ename, job, sal

 FROM         scott.emp

 WHERE       sal =

                      (SELECT     MIN(sal)

                       FROM scott.emp);

**Exemplo 4 -** Utilizando subconsultas com funções de grupo na cláusula having: Exiba o menor salário por departamento quando o menor salário for menor do que o menor salário do departamento 20.

 SELECT deptno, MIN(sal)

       FROM scott.emp

       GROUP BY deptno

       HAVING MIN(sal) >

                        (SELECT MIN(sal)

                         FROM scott.emp

                         WHERE deptno = 20);

Um erro comum em subconsultas ocorre quando se utiliza um operador simples para um retorno de várias linhas.

**Operadores para Subconsulta de várias linhas**

![Figura 6 - Operadores de subconsulta para várias linhas - Fonte: Goya, 2013.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683581155278-oZK3J67CP2.png "Figura 6 - Operadores de subconsulta para várias linhas - Fonte: Goya, 2013.")

Figura 6 - Operadores de subconsulta para várias linhas - Fonte: Goya, 2013.

**Exemplo de Uso do Operador Any em subconsulta de várias linhas**

A leitura desse operador é “qualquer valor” retornado pela consulta interna. Observe, que no exemplo abaixo, serão selecionados os funcionários que ganham mais que qualquer funcionário que tenha o cargo clerk.

![Figura 7- Uso do Operador Any - Fonte: PUGA, 2013.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683581188405-YbBqpjqPzS.png "Figura 7- Uso do Operador Any - Fonte: PUGA, 2013.")

Figura 7- Uso do Operador Any - Fonte: PUGA, 2013.

**Exemplo de Uso do Operador All em subconsulta de várias linhas**

A leitura desse operador é “todos os valores” retornados pela consulta interna. Observe, que no exemplo abaixo, serão selecionados os funcionários que ganham mais que todas as médias salariais por departamento.

![Figura 8-Uso do Operador ALL - Fonte: PUGA, 2013.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683581265408-cK7h7QylNU.png "Figura 8-Uso do Operador ALL - Fonte: PUGA, 2013.")

Figura 8-Uso do Operador ALL - Fonte: PUGA, 2013.

**Exemplo de Uso da subconsulta com o comando create table (“cópia de tabela”)**

Perceba, que no exemplo abaixo, a tabela copia emp é criada com toda a estrutura e os dados da tabela emp. É importante ressaltar que esse comando não copia as constraints.

![Figura 9 - Uso de Subconsulta no Create table - Fonte: Autor, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683581304370-Vf1M9Z2FwC.png "Figura 9 - Uso de Subconsulta no Create table - Fonte: Autor, 2023.")

Figura 9 - Uso de Subconsulta no Create table - Fonte: Autor, 2023.

**Exemplo de Uso da subconsulta com o comando insert (“cópia de registros”)**

Perceba, que no exemplo abaixo, os registros da tabela dept são inseridos na tabela cópia dept.

![Figura 10 - Uso de Subconsulta com o Insert - Fonte: Autor, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683581341270-f7fp74msSz.png "Figura 10 - Uso de Subconsulta com o Insert - Fonte: Autor, 2023.")

Figura 10 - Uso de Subconsulta com o Insert - Fonte: Autor, 2023.

**Conteúdo bônus**

**Gerando Subtotais com o operador Rollup**

Para gerar subtotais nas colunas da cláusula group by, utilize o operador Rollup.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683581432130-bMttSkT4ht.png)

**Gerando Subtotais com o operador Cube**

O operador cube gera subtotais em todas as possibilidades das colunas citadas na cláusula group by.

![Figura 12 - Operador Cube - Fonte: PUGA, 2013.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683581463429-2DFQkQpIMf.png "Figura 12 - Operador Cube - Fonte: PUGA, 2013.")

Figura 12 - Operador Cube - Fonte: PUGA, 2013.

Os operadores rollup e cube são muito utilizados em operações de mineração de dados.

Referências Bibliográficas

DATE, C. J. **Introdução a sistemas de banco de dados**. Rio de Janeiro. Ed. Campus, 1991.

CHEN, Peter. **Modelagem de dados: a abordagem entidade-relacionamento para projeto lógico**. São Paulo: Makron Books, 1990.

MEDEIROS, L. F. **Banco de dados, princípios e práticas**, 1ª. ed., Ed. Intersaberes, 2013.

PUGA, S., França E., GOYA M., **Banco de dados: Implementação em SQL, PL/SQL e Oracle 11g**, Ed. Pearson, 2013.

ELMASRI R., NAVATHE, S. **Sistemas de Banco de Dados**, 4ª ed. Ed. Pearson, 2005.