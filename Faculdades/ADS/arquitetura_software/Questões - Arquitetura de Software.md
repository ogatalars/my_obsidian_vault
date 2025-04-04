1 - A arquitetura de um sistema é um dos pontos mais importantes para conseguir construir um projeto de sucesso. Dentre as arquiteturas mais utilizadas, temos a arquitetura em camadas **MVC.** Considerando esse modelo de arquitetura, assinale a afirmação verdadeira.
a-O padrão MVC é apenas aplicável a linguagens orientadas ao desenvolvimento web,como PHP.
b-O uso de MVC torna o processo de modelagem mais rápido; porém, dificulta o reaproveitamento de código.
**c-O componente View é responsável pela interação com o usuário, exibindo dados.**
d-O componente Model é responsável pela integração entre View e Controller.
e-O componente Controller é responsável pela leitura, escrita e validação de dados.

2 - O Enterprise JavaBeans (EJB) é uma especificação do Java EE utilizado na construção de
componentes de softwares, utilizando containers em um servidor de aplicação, como o
Oracle Glassfish. Existem três tipos fundamentais de beans, que podem ser utilizados nos
componentes, quais são?

aEntity Beans, Progress Beans e Work Beans.
bSession Beans, Progress Beans e Work Beans.
cEntity Beans, Session Beans e Work Beans.
dSession Beans, Message Driven Beans e Work Beans.
**eEntity Beans, Session Beans e Message Driven Beans**

3 -No padrão arquitetural REST, utilizado para o desenvolvimento de WebServices, o
protocolo HTTP determina as operações ou métodos a serem executados. Sabendo disso,
assinale a opção correta.

aO método TRACE do HTTP não pode ser manipulado pelo modelo REST.
bNo modelo em questão, os parâmetros devem ser obrigatoriamente do tipo JSON.
**cO REST deixa a cargo de quem provê o serviço a definição da URL a ser utilizada.**
dOs parâmetros do modelo definem a requisição dos métodos a serem acessados,
tornando o acesso automatizado.
eO referido modelo impõe uma padronização no formato da URL a ser utilizada.

4 - Dentro de um projeto, você precisa implementar um padrão de projeto comportamental de tal forma que, quando um objeto alterar seu estado, **todos os seus dependentes são notificados e atualizados automaticamente**. Esse padrão é o:
**a - OBSERVER**
c - Adapter
d - Facede
e - Prototype

5 - No âmbito das APIs implementadas utilizando o padrão arquitetural **REST,** precisamos de
acesso e manipulação de uma coleção de recursos designados por URIs específicas. No
protocolo HTTP, t**emos um método utilizado para a criação de uma nova entrada para**
**recursos.** Qual é o método utilizado?
a DELETE.
b GET.
c PATCH.
**d POST.**
e PUT.

6 - Dentre os os padrões de projeto orientado a objetos, temos um em especial no qual tem por
característica garantir **uma única instância de objeto em toda a solução**, sempre mantendo
um ponto global de acesso. Esta padrão de projeto é chamado de
**a singleton.**
b facade.
c proxy.
d command.
e bridge.

7 Explique sobre uma situação no qual o padrão de projeto Singleton pode ser utilizado na
prática do desenvolvimento de sistemas.
R: **Um uso muito decorrente do Singleton está em situações no qual eu preciso armazenar**
**informações sobre a aplicação de maneira a gerantir o acesso da mesma de qualquer**
**contexto de apliicação. Por exemplo, no compartilhamento de tokens gerados em processos**
**de autenticação.**

O padrão de projeto Singleton normalmente é **utilizado quando precisamos garantir que uma classe tenha apenas uma instância em todo o sistema, fornecendo um ponto global de acesso**. Existem vários exemplos, um deles seria o compartilhamento de tokens gerados em processos de autenticação, outro bem recorrente é o gerenciamento de conexões com banco de dados, também sistema de log, gerenciamento de threads. Basicamente a ideia geral é que o singleton é ideal para cenários em que uma única instância deve controlar ou coordenar partes críticas do sistema.

IDEIA GERAL: 
- Uma classe que tem apenas uma instância em todo o sistema, fornecendo ponto global de acesso. **(Classe com uma instancia unica com acesso/ponto global a ela)**
- Compartilhamento de tokens gerados em autenticação; 
- Gerenciamento de threads; 
- Gerenciamento de conexões com banco de dados;
- Sistemas de logs.;