Você foi contratado para projetar um banco de dados de administração de um campeonato de futebol. Um jogador de futebol possui número e nome e pode jogar em apenas um time, ou, em caso de desemprego, não jogar em nenhum time. Um jogador é identificado unicamente pelo seu CPF e pela sua data de nascimento. Um time é composto de vários jogadores e possui nome, ano de fundação e mascote e endereço da sede do clube. O clube é identificado unicamente pelo número de registro na confederação Sabemos que um endereço é composto por logradouro, número, complemento, CEP, cidade e estado. Pede-se 1. Identifique as entidades, seus atributos e seus atributos chave; 2. Descreva os relacionamentos entre as entidades (de forma literal, exemplo, um cliente possui no mínimo um e no máximo N carros)

**Resposta**
As **entidades** são: 
1- **Jogador**; Atributos: CPF(chave primária), data de nascimento(chave estrangeira), Nome e Número 
2- **Clube**; Atributos: Número de registro da confederação do clube(chave), ano, ano de fundação e Mascote
3- **Endereço**; Logradouro, Numero (chave), complemento(chave), CEP (chave), Cidade e estado

Os **relacionamentos** são:
1 - Um jogador joga no mínimo em zero clubes e no máximo em 1 clube; 
2 - Um clube possui no minimo zero e no máximo N jogadores; 
3 - um clube possui no minimo um e no máximo um endereço.

