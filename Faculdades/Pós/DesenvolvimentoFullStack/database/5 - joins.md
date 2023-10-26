**Introdução**

As joins também podem ser chamadas de consultas complexas, pois uma junção ou _join_ é a combinação de duas ou mais tabelas em uma consulta. Existem tipos diferentes de joins. Cada um desses tipos, usa-se em situações específicas. É preciso conhecer cada tipo e seu uso adequado.

Esse tipo de consulta é um dos mais utilizados quando estamos acessando o banco de dados, pois os dados encontram-se em tabelas diferentes, que estão relacionadas, então gerar relatórios que utilizam joins, torna-se uma tarefa fundamental.

**Objetivos da aula**

-   Implementar e desenvolver consultas para unir as tabelas através de Junção de  tabelas;
-   Identificar e realizar junções idênticas – equijoins;
-   Identificar e realizar junções tridimensionais;
-   Identificar e realizar junções não-idênticas – noequijoins;
-   Identificar e realizar junções externas – outer joins;
-   Identificar e realizar autojunções – autojoin.

**Resumo**

**Adquirindo Dados de Duas ou mais  Tabelas**

Em algumas situações, é necessário utilizar dados a partir de duas ou mais tabelas. Na figura 1, a consulta exibe dados a partir de duas tabelas destacadas.

-   EMPNO existe na tabela EMP.
-   DEPTNO existe nas tabelas EMP e DEPT.
-   LOC existe na tabela DEPT.

Para gerar a consulta, é necessário linkar as tabelas EMP e DEPT e acessar aos dados das duas tabelas citadas.

![Figura 1- Obtendo dados de duas tabelas - Fonte: GOYA, 2013.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324279751-5IY57kVSzi.png "Figura 1- Obtendo dados de duas tabelas - Fonte: GOYA, 2013.")

Figura 1- Obtendo dados de duas tabelas - Fonte: GOYA, 2013.

Use uma junção para exibir dados, a partir de duas ou mais tabelas.

Para realizar uma junção, é necessário:

-   Criar uma condição de junção na cláusula ON.
-   Utilizar o nome do campo com o nome da tabela quando o mesmo nome do campo aparecer em mais de uma tabela, conforme exemplo da figura 2.

![Figura 2 - Exemplo de Comando de Join - Fonte: autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324314391-M7i8229g8F.png "Figura 2 - Exemplo de Comando de Join - Fonte: autoral, 2023.")

Figura 2 - Exemplo de Comando de Join - Fonte: autoral, 2023.

**Determinando Junções**

Quando são necessários dados de duas ou mais tabelas no banco de dados, usa-se uma condição de _junção_. As linhas de uma tabela podem ser reunidas às linhas de outra tabela de acordo com os valores comuns existentes nas campos equivalentes, ou seja, normalmente campos que fazem as funções de chave primária e estrangeira.

Para visualizar dados a partir de duas ou mais tabelas relacionadas, crie uma condição de junção simples na cláusula ON.

Na sintaxe:

          _tabela1.campo:_ denota a tabela e a campo a partir das quais recupera-se os dados

          _tabela1.campo1_ \= _tabela2.campo2:_ é a condição que junta (ou relaciona) tabelas  
 

**Tipos de Junções**

Há dois tipos principais de condições de junção: Junções idênticas (EquiJoins) e Junções não-idênticas (NoEquiJoins)

Métodos de junção adicional incluem o seguinte: Junções externas (Outer Join) e Autojunções (AutoJoin)

**Junções idênticas - EquiJoin**

Para encontrar o nome do departamento de um empregado, compare o valor no campo DEPTNO na tabela EMP com os valores DEPTNO da tabela DEPT. A ligação entre as tabelas EMP e DEPT é uma _junção idêntica,_ ou seja, os valores do campo DEPTNO das duas tabelas devem ser equivalentes. Na maioria das vezes, essa junção envolve complementos de chave primária e estrangeira.

As junções idênticas também são chamadas de _junções simples_ ou _junções internas_.

![Figura 3 - Junção Idêntica - Fonte: Goya, 2013.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324363311-KJZRz1iSIe.png "Figura 3 - Junção Idêntica - Fonte: Goya, 2013.")

Figura 3 - Junção Idêntica - Fonte: Goya, 2013.

**Resgatando Registros com Junções Idênticas**

O comando SELECT especifica os nomes de campos a resgatar: nome do empregado, número do empregado e número do departamento, que são os campos na tabela EMP, número do departamento, nome do departamento e localização, que são os campos na tabela DEPT. A cláusula FROM especifica as duas tabelas que o banco de dados deve consultar: tabela EMP  e tabela DEPT

A cláusula ON específica como as tabelas serão unidas: EMP.DEPTNO=DEPT.DEPTNO

Pois o campo DEPTNO é comum às duas tabelas, ele deve estar prefixado pelo nome da tabela a fim de evitar equívoco.

![Figura 4 - Comando de Junção Idêntica - Fonte: autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324407300-LxlFUPltBG.png "Figura 4 - Comando de Junção Idêntica - Fonte: autoral, 2023.")

Figura 4 - Comando de Junção Idêntica - Fonte: autoral, 2023.

**Apelidos de Tabela**

Atribuir nomes de campos com nomes de tabela pode gastar muito tempo, principalmente se os nomes das tabelas forem grandes. É possível utilizar _apelidos_ de tabela no lugar de nomes de tabela. Da mesma maneira, que um apelido de campo fornece um outro nome ao campo, um apelido de tabela fornece um outro nome à tabela. Os apelidos de tabela auxiliam a garantir que o código SQL seja menor, utilizando desse jeito menos recurso de  memória.

Na figura, observe como os apelidos de tabela são identificados na cláusula FROM. O nome de tabela é especificado integralmente, seguido de um espaço e, em seguida, do apelido da tabela.  
A tabela EMP ganhou o apelido E, enquanto a tabela DEPT recebe o apelido D.       O apelido de tabela é válido somente para a instrução SELECT atual.

**Uso da Cláusula ON para estabelecer a condição de Junção**

A condição da junção natural é basicamente uma equijunção de todas as campos com o mesmo nome. Para especificar condições arbitrárias ou campos a serem unidas, é usada a cláusula ON. A condição de junção é separada de outras condições de pesquisa. A cláusula ON facilita a compreensão do código.

![Figura 5 - Apelidos nas Tabelas - Fonte: Autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324466491-o7ijPhaZ3W.png "Figura 5 - Apelidos nas Tabelas - Fonte: Autoral, 2023.")

Figura 5 - Apelidos nas Tabelas - Fonte: Autoral, 2023.

**Junções Tridimensionais – Unindo mais de duas Tabelas**

Em algumas situações, é necessário unir mais de duas tabelas, esse tipo de junção é chamada de Junção tridimensional. Observe a figura 7, nesse exemplo estamos trabalhando com o esquema do usuário HR, precisamos exibir o sobrenome do empregado que se encontra na tabela employees, o nome do departamento que se encontra na tabela departments e a cidade em que o departamento está localizado que se encontra na tabela locations. Como podemos observar, para realizar essa consulta, precisamos consultar 3 tabelas.

![Figura 6 - Join Tridimensional - Fonte: Autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324523077-L9IiXmIrAf.png "Figura 6 - Join Tridimensional - Fonte: Autoral, 2023.")

Figura 6 - Join Tridimensional - Fonte: Autoral, 2023.

Note, na figura 7,  que é necessário estabelecer duas condições de junção, uma para relacionar a tabela employees com a tabela departments e a outra condição de junção para ligar a tabela departments com a tabela locations.

**Junções Não-Idênticas -NoEquiJoins**

O relacionamento entre a tabela EMP e a tabela SALGRADE é uma junção não-idêntica, ou seja, que nenhum campo da tabela EMP equivale diretamente a um campo da tabela SALGRADE. O relacionamento entre as duas tabelas é que a campo SAL da tabela EMP está entre a campo LOSAL e HISAL da tabela SALGRADE. O relacionamento é obtido usando um outro operador que não o igual (=).

![Figura 7- Tabelas Emp e Salgrade - Fonte: GOYA, 2013.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324583252-Zd3RrIaSGU.png "Figura 7- Tabelas Emp e Salgrade - Fonte: GOYA, 2013.")

Figura 7- Tabelas Emp e Salgrade - Fonte: GOYA, 2013.

Criando a tabela Salgrade

Create table salgrade (

Grade number(1) primary key,

Losal number(5),

Hisal number(5));

Populando a tabela Salgrade

Insert into salgrade values (1,700,1200);

Insert into salgrade values (2,1201,1400);

Insert into salgrade values (3,1401,2000);

Insert into salgrade values (4,2001,3000);

Insert into salgrade values (5,3001,9999);

Commit;

Trata-se de uma junção não idêntica, pois não há nenhum campo equivalente entre a tabela emp e a tabela salgrade. Será criada uma noequijoin para mostrar uma classificação salarial do empregado. O salário deve ser localizado entre as faixas salariais estipuladas na tabela salgrade.

Todos os salários dos empregados estão entre limites inferior e superior estipulados pela tabela salgrade. Conforme se vê na figura 8.

![Figura 8- Comando de NoEquiJoin | Fonte: autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324621470-u4wHJl1NAd.png "Figura 8- Comando de NoEquiJoin | Fonte: autoral, 2023.")

Figura 8- Comando de NoEquiJoin | Fonte: autoral, 2023.

**Junções Externas – OuterJoin**

Caso um registro não satisfizer uma condição de junção, o registro não aparecere no relatório da consulta. Por exemplo, na equijoin das tabelas EMP e DEPT, o departamento 40 OPERATIONS não aparece porque nenhum empregado trabalha neste departamento. Os registros ausentes, podem ser regastados, caso um operador de _outerjoin_ seja usado na condição de junção.

![Figura 9 - Departamento Operations - Fonte: GOYA, 2013.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324658911-16hCVsmHwg.png "Figura 9 - Departamento Operations - Fonte: GOYA, 2013.")

Figura 9 - Departamento Operations - Fonte: GOYA, 2013.

**Junção Externa à Esquerda – Left Outer Join**

Vai privilegiar, ou seja, mostrar todos os registros da tabela que estiver posicionada à esquerda do comando da Join. Na figura 11, observe que a tabela dept está à esquerda do comando JOIN.

![Figura 10 - Junção Externa à Esquerda - Fonte: Autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324699730-kf0Sc9KFMT.png "Figura 10 - Junção Externa à Esquerda - Fonte: Autoral, 2023.")

Figura 10 - Junção Externa à Esquerda - Fonte: Autoral, 2023.

**Observação**: Na construção das joins, as palavras INNER e OUTER, são opcionais, para execução dos comandos.

**Junção Externa à Direita – Rigth Outer Join**

Vai privilegiar, ou seja, mostrar todos os registros da tabela que estiver posicionada à direita do comando da Join. Na figura 12, observe que a funcionária Kimberely não pertence a nenhum departamento.

![Figura 11 - Empregado sem Departamento - Fonte: Autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324756228-naFu6ukskm.png "Figura 11 - Empregado sem Departamento - Fonte: Autoral, 2023.")

Figura 11 - Empregado sem Departamento - Fonte: Autoral, 2023.

![Figura 12- Junção Externa à Direita - Fonte: Autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324770064-rfBYkhxE6v.png "Figura 12- Junção Externa à Direita - Fonte: Autoral, 2023.")

Figura 12- Junção Externa à Direita - Fonte: Autoral, 2023.

**Junção Externa Completa – Full Outer Join**

O operador FULL, mostra todos os registros com ou sem relacionamento entre as tabelas envolvidas na Join. Observe o exemplo da figura 14.

![Figura 13-Full Join- Fonte: Autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324838132-4w7TSgi3ox.png "Figura 13-Full Join- Fonte: Autoral, 2023.")

Figura 13-Full Join- Fonte: Autoral, 2023.

**AutoJunção – AutoJoin - Unindo uma Tabela a Ela Mesma**

![Figura 14 - Unindo a Tabela Emp com ela mesma - Fonte: GOYA, 2013.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324873421-WB7xkZpX44.png "Figura 14 - Unindo a Tabela Emp com ela mesma - Fonte: GOYA, 2013.")

Figura 14 - Unindo a Tabela Emp com ela mesma - Fonte: GOYA, 2013.

A autojoin é a implementação do autorrelacionamento projetado no modelo lógico, ou seja, juntar uma tabela com ela mesma. Por exemplo, todo gerente é um funcionário e as informações de empregado e gerente estão na mesma tabela que no exemplo é a tabela emp. Por exemplo, o funcionário KING é gerente do funcionário Jones. Então é preciso ter a tabela emp de “gerentes” para consultar os dados dos funcionários que são gerentes e a tabela emp para consultar os dados dos funcionários daqueles gerentes. Observe, no exemplo, da figura 14 que a condição da junção é através da equivalência do campo mgr (Código do gerente) com o campo empno (Código do funcionário).

![Figura 15-Comando da AutoJoin - Fonte: Autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324898312-JYbc3F2SzD.png "Figura 15-Comando da AutoJoin - Fonte: Autoral, 2023.")

Figura 15-Comando da AutoJoin - Fonte: Autoral, 2023.

O exemplo da figura une a tabela EMP a ela mesma. Para simular duas tabelas na cláusula FROM, há dois apelidos, chamados EMPREGADO e GERENTE, para a mesma tabela EMP.

Observe que no  exemplo da figura 15, a cláusula ON contém a igualdade do Código do funcionário do gerente com o Código do gerente que é um funcionário.

**Conteúdo bônus**

**Junções Naturais – Natural Join**

A cláusula NATURAL JOIN baseia-se em todas as campos com o mesmo nome nas duas tabelas. Ela seleciona linhas das duas tabelas que têm valores iguais em todas as campos correspondentes. Se os campos com os mesmos nomes tiverem tipos de dados diferentes, será retornado um erro.

![Figura 16 - Recuperando Registros com Junções Naturais- Fonte: Autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324945831-MFfdPeZ980.png "Figura 16 - Recuperando Registros com Junções Naturais- Fonte: Autoral, 2023.")

Figura 16 - Recuperando Registros com Junções Naturais- Fonte: Autoral, 2023.

Observe que no exemplo abaixo, estamos realizando uma Join tridimensional, com o comando de natural Join.

![Figura 17 - Natural Join Tridimensional - Fonte: Autoral, 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1683324968291-nUyX87mRb4.png "Figura 17 - Natural Join Tridimensional - Fonte: Autoral, 2023.")

Figura 17 - Natural Join Tridimensional - Fonte: Autoral, 2023.

Referências Bibliográficas

DATE, C. J. **Introdução a sistemas de banco de dados**. Rio de Janeiro. Ed. Campus, 1991.

CHEN, Peter. **Modelagem de dados: a abordagem entidade-relacionamento para projeto lógico**. São Paulo: Makron Books, 1990.

MEDEIROS, L. F. **Banco de dados, princípios e práticas**, 1ª. ed., Ed. Intersaberes, 2013.

PUGA, S., França E., GOYA M., **Banco de dados: Implementação em SQL, PL/SQL e Oracle 11g**, Ed. Pearson, 2013.

ELMASRI R., NAVATHE, S. **Sistemas de Banco de Dados**, 4ª ed. Ed. Pearson, 2005.