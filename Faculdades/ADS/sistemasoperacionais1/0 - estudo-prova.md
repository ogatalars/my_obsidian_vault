1 - O uso de máquinas virtuais é cada vez mais frequente entres os usuários finais, mas isso não
significa que ele seja apenas um emulador de máquinas físicas, a mesma serve para testes de
softwares dos mais diversos tipos e sistemas operacionais. Neste contexto é comum a
instalação de Sistemas Operacionais diferentes da máquina host. Os **Hypervisors** do tipo 2 são
executados como um aplicativo dentro de um sistema operacional de host, e geralmente têm
como destino plataformas de notebook, ou área de trabalho de usuário único. Com um
Hypervisor do tipo 2, é possível criar manualmente uma VM e, em seguida, instalar um sistema
operacional Guest nela. É possível usar o Hypervisor para alocar recursos físicos para a sua
VM, configurando manualmente a quantia de núcleos do processador e a memória que pode
ser usada. Dependendo dos recursos do hypervisor, também é possível configurar opções
como a aceleração 3D para gráficos. Em um cenário na qual a Máquina virtual criada deve ter
comunicação com o host, comunicar com outras VMS, Não acessar a internet e Não ser visível
na rede host, devemos escolher qual tipo de adaptador de rede?
a Tradução de endereço de rede (NAT)
b Customizada (Custom)
**c Rede somente Host (Host-only)** -> Correta
d Segmento de Lan (LAN Segment)
e Rede em Ponte (Bridge)

2 - No ambiente de uma empresa o uso de domínio é comum, por situações como por exemplo de
segurança ou de organização. Instala-se o **AD DS** (Serviços de Domínio do Active Directory),
possibilitando o armazenamento de informações sobre todos os objetos do domínio. Ao entrar
na rede, o AD DS é o principal meio pelo qual você pode configurar e gerenciar contas de
usuário e computador em sua rede. Após instalar o Serviço do AD DS, e configurar o ambiente
de domínio Senac.local, o Snap-in do gerenciador do AD disponibiliza uma estrutura
hierárquica para administrar o ambiente (Mostrado na imagem). Supondo que você fosse criar
uma área para armazenar os usuários do Departamento de CONTABILIDADE, qual tipo de
objeto você criaria?

a Árvore: trata-se de uma organização hierárquica de um ou mais Domínios. Todos os
domínios de uma árvore têm um esquema comum, isso é, as mesmas informações sobre
classes e atributos de objetos.
**b Unidade Organizacional (OU): é um container dentro de um domínio. O controle sobre a**
**OU e os objetos no interior da OU são determinados exclusivamente pelo Access Control**
**List (ACLs) sobre a OU e seus objetos.** -> correta
c Diretiva de Grupo ou Group Policy (GPO): É um conjunto de regras que controlam o
ambiente de trabalho de contas de usuário e contas de computador. Ela fornece o
gerenciamento e configuração centralizados de sistemas operacionais, aplicativos e
configurações dos usuários em um ambiente Active Directory. Em outras palavras, a
Diretiva de Grupo controla em parte o que os usuários podem ou não fazer em um
sistema de computador.
d Domínio: é uma partição de uma floresta Active Directory. O proprietário administrativo
padrão de um domínio é o grupo Domain Admins do domínio. Pelo fato de o proprietário
do domínio controlar os controladores de domínio, o proprietário do domínio é o
administrador de serviço. Todos os proprietários de domínio, exceto o raiz, são pares,
independentemente de sua posição no domínio; o proprietário de um domínio pai, que
não seja o raiz, não possui controles administrativos padrões sobre o domínio filho.
e Floresta: É um conjunto de árvores. O uso de florestas é bastante comum em grupos de
empresas, onde cada uma das empresas do grupo mantém uma autonomia de
identidade em relação as outras. A estrutura de uma floresta é utilizada para organizar as
árvores com diferentes esquemas (já que os domínios dentro de uma mesma floresta não
possuem, necessariamente, o mesmo esquema).

3 - A opção **Windows Server 2019** Datacenter (Server Core) é uma opção de instalação mínima
que está disponível quando você está implantando a edição Standard ou Datacenter. O “Server
Core” inclui a maioria das funções de servidor, mas não todas. O “Server Core” tem um espaço
em disco menor e, portanto, uma superfície de ataque menor devido a uma base de código
menor. No entanto, a opção de instalação servidor com experiência desktop ainda instala
muitos serviços e outros componentes que geralmente não são necessários para um cenário
de uso específico. É aí que o “Server Core” entra em cena: a instalação elimina todos os
serviços e outros recursos que não são essenciais para o suporte de certas funções de
servidor usadas com frequência. Por exemplo, um servidor Hyper-V não precisa de uma GUI
(interface gráfica do usuário), pois você pode gerenciar praticamente todos os aspectos do
Hyper-V na linha de comando usando o Windows PowerShell ou remotamente usando o
Gerenciador do Hyper-V. Neste ambiente, qual a ferramenta de Configuração que você digita
para configurar e gerenciar vários aspectos comuns de instalações **“Server Core”**?
a Digito WUPDATE
b Digito DEVMGMT
c Digito FSUTIL
d Digito CONFIG.SYS
**e Digito SCONFIG** -> correta

4 Para criar um **Servidor de Arquivos**, qual a primeira tarefa a ser executada?

a Ativar o serviço de arquivos do servidor
b Definir uma estrutura de pastas
c Criar usuários para acessar o servidor de arquivos
**d Planejar os discos para os servidores de arquivo** -> correta
e Ativar o serviço de pesquisa

5 - >
Em uma GPO, ao editar uma política encontramos a área de Configuração do Computador, e a
Configuração do Usuário. Precisamos desativar a opção “A senha deve satisfazer a requisitos
de complexidade”, pois o gerente de TI decidiu que os usuários podem colocar senhas mais
amigáveis. Você como consultor de TI precisa indicar o caminho da GPO para desabilitar esta
regra. Com base no console aberto do “Editor de Gerenciamento de Política de Grupo”, qual
caminho você indicaria?

a Acesso Configurações do Computador, usuários, Políticas de senhas, política de contas,
acesso “A senha deve atender os requisitos de complexidade”, escolho a opção
“Desabilitada”, e OK para finalizar
b Acesso Preferências, Configurações do Windows, Registro, Políticas, Política de contas,
acesso “A senha deve atender os requisitos de complexidade”, escolho a opção
“habilitada”, e OK para finalizar.
c Acesso Aplicativos, Configuração de usuários, política de usuários, senhas, Política de
contas, acesso “A senha deve atender os requisitos de complexidade”, escolho a opção
“habilitada”, e OK para finalizar.
d Acesso Configuração de Usuário, Políticas, Configurações de Windows, Política de
contas, acesso “A senha deve atender os requisitos de complexidade”, escolho a opção
“habilitada”, e OK para finalizar
**e Acesso Configuração do computador, Políticas, Configurações de Windows,**
**Configurações de segurança, política de contas, acesso “A senha deve atender os**
**requisitos de complexidade”, escolho a opção “Desabilitada”, e OK para finalizar.** -> correta

6 -> Um servidor de impressão é um aplicativo (software) ou dispositivo (hardware) capaz de
controlar todas as tarefas de impressão enviados de qualquer computador ligado à rede. Sua
principal função é definir as prioridades e gerenciar as filas de impressão, de modo que os
trabalhos sejam distribuídos da melhor forma possível. Além disso há diversas funções
auxiliares, como a capacidade de inspecionar a fila de tarefas, reordenar ou excluir trabalhos
em espera e fazer vários tipos de contabilidade. Eu um determinado momento do dia a
Impressora “deu pau”, e está imprimindo um monte de caracter estranho. Qual comando abaixo
faz PARAR o serviço de Spooler de impressão?
a Net start spooler
b CLS
c Del /f /s .spl
**d Net stop spooler** -> correta
e Del /f /s .shd

7 -> A empresa está contratando diversos funcionários para o departamento de Call Center. Neste
instante é impossível cadastrar os 350 funcionários novos no modelo tradicional utilizando a
interface gráfica. Atualmente você possui um servidor Windows Server 2019, que já está
instalado o AD, com o domínio “Senac.Local”, e possui uma OU de desenvolvimento para os
funcionários novos chamada “TEMP”. Usando a estratégia de criação de usuário em massa,
como você criaria um script para cadastrar os funcionários (Usando o prompt de comando).
Algumas observações: Nome do usuário é composto da primeira letra e o sobrenome; Senha
“Senac@123”. Utilize os três primeiros nomes da lista abaixo para montar a resolução da
situação.
Lista (3 de 350 nomes)
Nome Registro
Adalgisa Monteiro 510988
Denis Carvalho 510924
Marta Souza 530771

**Resolução:**
Usando o prompt de comando ou em um bloco de notas na extensão .bat
o script abaixo está em uma única linha.
Para cada usuário, mudará o nome.
Comando para o nome 1:
dsadd user cn=“Adalgisa Monteiro”,ou=Temp,dc=Senac,dc=local -samid Amonteiro -upn
“amonteiro@senac.local” -fn Adalgisa -ls Monteiro -pwd “Senac@123” -disabled no
Comando para o nome 2:
dsadd user cn=“Denis Carvalho”,ou=Temp,dc=Senac,dc=local -samid Dcarvalho -upn
“dcarvalho@senac.local” -fn Denis -ls Carvalho -pwd “Senac@123” -disabled no
Comando para o nome 3:
dsadd user cn=“Marta Souza”,ou=Temp,dc=Senac,dc=local -samid Msouza -upn
“msouza@senac.local” -fn Marta -ls Souza -pwd “Senac@123” -disabled no
Deverá mencionar: Criar arquivo em Lote ou script

regra:
dsadd user cn="nome x", ou=Temp, dc=Senac, dc=local -samid PrimeiraLetraNomeFinal -upn "PrimeiraLetraNomeFinal" -fn Nome -ls SegundoNome -pwd "Senac@123" -disabled no

8 -> Em um domínio de rede Microsoft com servidores Windows Server 2019, a
autenticação de usuários utiliza o protocolo Kerberos. Esse protocolo exige
um serviço imprescindível para o seu funcionamento. Assinale a alternativa
que corresponde a esse serviço.

a- IPSEC

b- RRAS

**c-  DNS**** -> correta
**
d - RADIUS

e - DHCP

9 ->
**Trabalhar com o disco requer cuidados,** pois, dependendo de como for arquitetada, a entrega de informação pode ser comprometida. Em alguns casos, o projeto pode se tornar extremamente lento, o que torna impraticável o acesso ao disco e às informações. Montar
arranjos de discos tem como principais objetivos aprimorar a segurança e/ou aumentar a
performance do sistema de armazenamento de computadores, servidores e storages.
Enquanto um arranjo RAID utiliza recursos como striping ou paridade para obter mais
velocidade de I/O e entregar maior proteção de dados, uma matriz JBOD apenas
concatena os discos num único volume. Ao escolher um arranjo de disco, os principais
fatores que devem ser considerados são segurança, velocidade e a capacidade
necessária. Neste quesito, qual tipo de RAID é recomendado para a maioria das
aplicações realizadas rotineiramente em pequenas e médias instalações, principalmente as
que demandam alta capacidade e alguma segurança para as informações armazenadas?

aRAID 4 (Particionamento)

**bRAID 5 (Strip Set com paridade)** -> correta

cRAID 3 (espelhamento duplo)

dRAID 0 (fracionamento)

eRAID 1 (espelhamento)