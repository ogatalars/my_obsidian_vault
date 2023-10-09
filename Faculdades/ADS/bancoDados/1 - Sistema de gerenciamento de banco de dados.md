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

Em um banco de dados **relacional,** os dados são organizados em tabelas. Uma tabela armazena uma coleção de ocorrências para determinado tipo de entidade, ao passo que um banco de dados reúne tabelas pertinentes a determinado assunto. Por exemplo, um banco de dados para a gerência de recursos humanos de uma empresa poderá ter tabelas para funcionários, departamentos, salários, etc. Cada ocorrência de um tipo de entidade (por exemplo, um funcionário) é um registro na tabela correspondente. Também podemos chamar os registros por linhas. Assim, uma tabela de funcionários possui uma linha para cada funcionário da empresa. Em um banco relacional, cada tipo de entidade define um conjunto uniforme de atributos possíveis para as ocorrências daquele tipo de entidade. Dito de outra forma: cada tabela define um conjunto de colunas, e cada registro possui um valor para cada coluna.

Em um banco de dados relacional, os dados são organizados em tabelas. Uma tabela armazena uma coleção de ocorrências para determinado tipo de entidade, ao passo que um banco de dados reúne tabelas pertinentes a determinado assunto. Por exemplo, um banco de dados para a gerência de recursos humanos de uma empresa poderá ter tabelas para funcionários, departamentos, salários, etc. Cada ocorrência de um tipo de entidade (por exemplo, um funcionário) é um registro na tabela correspondente. Também podemos chamar os registros por linhas. Assim, uma tabela de funcionários possui uma linha para cada funcionário da empresa. Em um banco relacional, cada tipo de entidade define um conjunto uniforme de atributos possíveis para as ocorrências daquele tipo de entidade. Dito de outra forma: cada tabela define um conjunto de colunas, e cada registro possui um valor para cada coluna.

**SGBD**
Desenvolvedores de software utilizam um sistema de gerenciamento de banco de dados (SGBD) para criar bancos de dados. Um SGBD é utilizado para o gerenciamento de uma ou mais bases de dados. Um exemplo desse sistema é o MySQL; um exemplo de base de dados seria a base de candidatos a vereador ou até mesmo a base de dados de vereadores eleitos de determinado município.

A rigor, um banco de dados seria uma base de dados. Por exemplo: “precisamos construir o banco de dados com as informações dos candidatos a vereador”. No entanto, na linguagem coloquial, os profissionais também empregam o termo “banco de dados” para se referir ao SGBD, por exemplo: “qual banco de dados vamos utilizar em nosso próximo projeto? O MySQL ou o PostgreSQL?”. Fique atento, pois esse coloquialismo poderá ser encontrado neste material dado o seu uso tão comum.

Geralmente o desenvolvedor – ou um papel mais específico, como o administrador de bancos de dados (DBA) – escreve comandos que o SGBD entenda para a construção de um banco de dados. Usando a linguagem do SGBD, o desenvolvedor define as tabelas que existirão e os campos de cada tabela. Uma vez criada a estrutura do banco de dados (definição de tabelas e campos), a aplicação desenvolvida interage com o banco para manipular (incluir, alterar, excluir e consultar) os registros. Via de regra, o usuário final interage com a aplicação, e não diretamente com o banco de dados

As operações típicas de manipulação de dados são inserir, alterar, excluir e consultar. Essas operações são referidas em conjunto como CRUD (create, retrieve, update, delete). Algumas aplicações bem simples se resumem basicamente a cadastros que “inserem, alteram, excluem e consultam” registros. Assim, uma “aplicação CRUD” (ou mesmo “um CRUDzinho”) é aquela aplicação que não faz muito mais do que um cadastro básico, não possuindo regras de negócio elaboradas

Claro! Aqui estão alguns **comandos básicos do MySQL:**

1. **Conectar ao MySQL:**
   Para se conectar ao servidor MySQL, você pode usar o seguinte comando, substituindo `username` e `password` pelas suas credenciais:

   ```
   mysql -u username -p
   ```

   Isso solicitará sua senha.

2. **Selecionar um Banco de Dados:**
   Para selecionar um banco de dados específico, use o comando:

   ```
   USE nome_do_banco;
   ```

3. **Mostrar Databases:**
   Para listar todos os bancos de dados disponíveis, utilize:

   ```
   SHOW DATABASES;
   ```

4. **Mostrar Tabelas em um Banco de Dados:**
   Para listar as tabelas em um banco de dados específico, você pode usar:

   ```
   SHOW TABLES;
   ```

5. **Criar um Banco de Dados:**
   Para criar um novo banco de dados, use o comando:

   ```
   CREATE DATABASE nome_do_banco;
   ```

6. **Excluir um Banco de Dados:**
   Para excluir um banco de dados, use:

   ```
   DROP DATABASE nome_do_banco;
   ```

   Tenha cuidado ao usar esse comando, pois ele apagará permanentemente o banco de dados e todos os dados dentro dele.

7. **Criar uma Tabela:**
   Para criar uma nova tabela, utilize o seguinte comando:

   ```sql
   CREATE TABLE nome_da_tabela (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(255),
       idade INT
   );
   ```

8. **Inserir Dados em uma Tabela:**
   Para adicionar dados a uma tabela, você pode usar o comando `INSERT INTO`:

   ```sql
   INSERT INTO nome_da_tabela (nome, idade) VALUES ('Alice', 30);
   ```

9. **Selecionar Dados de uma Tabela:**
   Para recuperar dados de uma tabela, use o comando `SELECT`:

   ```sql
   SELECT * FROM nome_da_tabela;
   ```

10. **Atualizar Dados em uma Tabela:**
    Para modificar dados em uma tabela, use o comando `UPDATE`:

    ```sql
    UPDATE nome_da_tabela SET idade = 31 WHERE nome = 'Alice';
    ```

11. **Excluir Dados de uma Tabela:**
    Para remover registros de uma tabela, utilize o comando `DELETE`:

    ```sql
    DELETE FROM nome_da_tabela WHERE nome = 'Alice';
    ```

Esses são alguns dos comandos MySQL mais básicos. O MySQL oferece muitos outros comandos e recursos avançados para atender a uma variedade de necessidades de gerenciamento de banco de dados.