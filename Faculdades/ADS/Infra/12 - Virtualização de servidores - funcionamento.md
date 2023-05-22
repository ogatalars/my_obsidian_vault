A virtualização de servidores tem sido realizada nas empresas com o objetivo de utilizar serviços mais escaláveis e confiáveis e com custo cada vez menor. A tendência é a utilização de serviços de fornecedores de soluções hospedados em nuvem. Nesse sentido, a virtualização e consolidação de servidores é o primeiro e fundamental passo.

O funcionamento da virtualização de um servidor passa pela instalação de monitores de máquinas virtuais (VMM – Virtual Monitor Machine), também conhecidos como hypervisores, que funcionam como uma camada de software entre o sistema operacional e o hardware, e assim disponibilizam uma máquina virtual, com os dispositivos físicos de entrada/saída. Os softwares utilizados para a virtualização podem ser divididos em três categorias, cujo objetivo é fornecer compatibilidade de software, isolamento das máquinas virtuais e o encapsulamento da máquina virtual. O projeto da camada de virtualização não deve gerar impacto no desempenho das aplicações. As categorias de virtualização se aplicam aos níveis de:
• Hardware: nesse caso a virtualização é colocada sobre a máquina física, que a apresenta para as camadas superiores, como sendo um hardware abstrato, semelhante ao original. A maioria dos
hypervisores está nessa categoria. Exemplo: VMware ESX, XEN e
Hyper-V.
• Sistema operacional: nesse caso existe um mecanismo que possibilita a criação de partições lógicas, que se comportam como
máquinas isoladas e que compartilham o mesmo sistema operacional. A camada de virtualização é colocada entre o sistema
operacional e as aplicações. Como exemplo: Jails, Solaris Zones,
Linux- VServer, SandBox, KVM e VirtualBox.
• Linguagem de programação: nesse caso a virtualização é um
programa que define uma máquina abstrata e que executa uma
aplicação. Por exemplo: a máquina virtual Java (JVM – Java
Virtual Machine).

Segundo Chee e Franklin (2013), os hypervisores são classificados em tipo I e tipo II. Os de tipo I são os chamados **bare-metal**, nativo ou supervisor que são executados diretamente no hardware do servidor físico, controlando o hardware e o acesso do sistema operacional guest (convidado). Têm como função compartilhar os recursos de hardware com as máquinas virtuais de modo que elas tenham a “impressão” de que os recursos são exclusivos para elas. Esse tipo se enquadra na categoria de virtualização de hardware. Os de tipo II são aplicativos de software que funcionam dentro de um ambiente de sistema operacional e se comportam como se fossem um processo dele. A camada de virtualização é formada por um sistema operacional guest e um hardware virtual, que são criados sobre os recursos de hardware disponibilizados pelo sistema operacional nativo. Esse tipo se enquadra na categoria de virtualização de sistema operacional.

Um dos principais objetivos da virtualização de servidores é a diminuição dos servidores físicos e consequentemente do consumo de energia, da necessidade de equipamentos para climatização do ambiente, da emissão de gases nocivos e da produção de lixo eletrônico causada pelo descarte de computadores obsoletos. Com a virtualização de servidores os “tempos ociosos” de CPU são mais bem aproveitados, o que na prática pode significar a instalação de alguns servidores em uma única máquina física diminuindo os investimentos em hardware. A virtualização de servidores pode ainda proporcionar economia no upgrade de servidores, pois as fontes de alimentação atuais têm mais eficiência do que as mais antigas.

#### Conceito de instância
Outra característica está na capacidade de servidores virtuais serem transferidos para outros servidores físicos. Esse conceito é conhecido como instância. Assim, imagine que podem ser criadas e armazenadas diversas configurações de máquinas virtuais com todas as configurações ajustadas. A estratégia de uso de instâncias será de fundamental importância, principalmente em casos de recuperação de desastres ou na migração para o conceito de nuvem. A possibilidade de “montar” uma imagem de disco, gerando uma imagem virtual de um disco e armazenado em disco rígido e não em um DVD ou CD físico, torna muito mais fácil o gerenciamento remoto e o equilíbrio da demanda por mais hardware. A virtualização de servidores pode ser realizada de diversas formas. As que são baseadas em hypervisores em arquiteturas x86 alteram o nível de privilégios e incluem a virtualização completa e a paravirtualização.

**VIRTUALIZAÇÃO COMPLETA**
Realiza a abstração do sistema físico sobre o qual o sistema operacional guest é executado. E isso sem nenhuma alteração no sistema operacional ou nas suas aplicações. A virtualização completa proporciona maior facilidade na migração de máquinas virtuais entre os servidores físicos. Existe independência entre as aplicações e os recursos físicos do servidor, e como as máquinas virtuais são isoladas uma das outras, a segurança é maior. Cada instância da máquina virtual é um processo do sistema operacional nativo.
Uma desvantagem com a virtualização completa é o desempenho, e isso devido ao hypervisor verificar a execução de todas as instruções que o sistema operacional guest realiza.

**PARAVIRTUALIZAÇÃO**
Com o objetivo de resolver os problemas de desempenho e a baixa utilização dos recursos que a virtualização completa causa, a solução é a paravirtualização, que consiste em alterar o sistema operacional guest para que ele faça uma chamada à máquina virtual sempre que for executar uma instrução prioritária, e as instruções não privilegiadas são executadas diretamente pelo processador nativo. Quanto aos dispositivos de entrada/saída, os hypervisores que utilizam a paravirtualização fazem com que as máquinas virtuais tenham acesso aos dispositivos físicos reais e sob o controle do hypervisor. Dessa forma ocorre a otimização do desempenho.
Uma desvantagem da paravirtualização é a necessidade de modificação no sistema operacional guest e isso necessita acesso ao código-fonte. Um exemplo de sistema que utiliza a paravirtualização é o XEN Open Source, que virtualiza o processador e a memória, e utiliza um núcleo Linux que é modificado. Além disso, ocorre também a virtualização do sistema de entrada/saída com os drivers de dispositivos customizados

**Cenários da virtualização**
A virtualização tem sido um dos elementos centrais da construção de data centers, o que leva à utilização de computadores em toda a sua capacidade, diminuindo assim o desperdício de ciclos de processamento. Com a utilização de vários servidores em um servidor físico, mais algumas situações vantajosas se apresentam, como economia de energia, refrigeração, menor espaço físico, facilidade de gerenciamento e até mesmo menos manutenção dos servidores (VERAS, 2012). O conceito de se utilizarem diversas máquinas virtuais, cada uma fica responsável por um serviço e todos sendo executados em uma única máquina física, é chamado de consolidação de servidores. A continuidade de negócios, a alta disponibilidade e a recuperação em caso de desastres oferecem o complemento no projeto dos cenários de virtualização. Vale lembrar que uma máquina virtual é uma imagem armazenada e que pode ser instanciada1 a qualquer instante. Com isso, a máquina virtual pode ser monitorada, e em caso de necessidade ser “migrada” de um servidor físico a outro, o que facilita a recuperação em caso de falhas ou ainda o balanceamento de carga entre os servidores.

Com a virtualização algumas situações podem ser utilizadas nas
empresas, como:
• Virtualização de desktops: cada usuário pode acessar o servidor
por meio de thin client (clientes magros), que são hardwares de
baixa capacidade de processamento. E ainda podem empregar
diferentes sistemas operacionais, que ficam instalados nas máquinas virtuais.
• Hospedagem de sistemas operacionais legados: podem-se utilizar sistemas legados, pois cada máquina virtual pode hospedar sistemas operacionais e aplicações antigas e todas as suas
bibliotecas.
• Data center dinâmico: com a virtualização é possível criar uma
infraestrutura mais ágil e alterar o local onde a máquina virtual é
hospedada sem que os usuários sofram qualquer impacto.

#### Licenciamento de plataformas virtualizadas
O licenciamento de software para a virtualização depende da política e estratégia de mercado adotadas pelos fabricantes. Uma das possibilidades está no licenciamento por socket (ou seja, os chips processadores que ficam na CPU). Para alcançar maior performance, antigamente se envolviam processadores com maior velocidade em mega-hertz (MHz). Atualmente a melhoria de desempenho está ligada ao número de núcleos, que também economiza energia. A utilização de mais núcleos aumenta a capacidade de multitarefa, o que é mais adequado para servidores. De forma geral, a aquisição de licenças de sistema operacional está ligada ao servidor físico e à quantidade de máquinas virtuais que se pretende instalar. Por exemplo: uma empresa deseja ter quatro servidores virtualizados e utilizar sistema operacional Windows em alguma versão de servidor. A empresa deverá comprar o número suficiente de licenças, sendo uma para cada instância e uma para o servidor físico. Algumas empresas, para diminuir o custo de licenciamento, acabam instalando servidores em máquinas virtuais em ambiente Linux, que em princípio não tem custo.
"A utilização de versões gratuitas de distribuições Linux não é aconselhável em servidores. Os administradores, em situações de emergência e por falta de licenças de sistema operacional, para não correrem riscos de ilegalidade, acabam instalando versões gratuitas. Para segurança de uma instalação de servidor e dos diversos clientes que vão depender dos serviços desse servidor, é aconselhável que se invista em licenças pagas, por questão de segurança e suporte."

#### Considerações sobre limites da virtualização
A virtualização tem sido um dos pilares da TI atual, com tendência
de utilização de serviços migrados para o conceito de nuvem. Nos projetos de adoção de virtualização, os administradores devem considerar
alguns procedimentos para garantir a qualidade dos serviços prestados
pela virtualização, por exemplo:
• Carga excessiva: alguns aplicativos necessitam em grande parte
de demanda do servidor físico onde estão instalados, por exemplo, os servidores de banco de dados. Ao se pensar em virtualizar as aplicações, é importante a análise de desempenho, pois o
hypervisor sempre causa uma perda de desempenho.
• Gerenciamento de licenciamento: o controle de gerenciamento
de licenças para os projetos de virtualização é muito importante
devido às diferentes regras dos fabricantes. Nesse sentido é necessário muito cuidado para não correr o risco de alguma ilegalidade quanto a licenciamento de software.
• Equipe de profissionais de TI: A virtualização e toda a tecnologia envolvida exige qualificação dos profissionais, o que deve ser
uma preocupação constante das empresas.


O exercício de virtualização proposto começa com o projeto da virtualização, que pode ser seguido como uma espécie de guia orientador para que ao final, com os servidores virtualizados, possam ser medidos diversos indicadores e se possa chegar à conclusão de que a virtualização foi um sucesso. O projeto deve definir a infraestrutura necessária para dar suporte às aplicações virtualizadas e considerar as possibilidades de crescimento da infraestrutura.

#### 2 Exercício básico de virtualização

O exercício de virtualização proposto começa com o projeto da virtualização, que pode ser seguido como uma espécie de guia orientador para que ao final, com os servidores virtualizados, possam ser medidos diversos indicadores e se possa chegar à conclusão de que a virtualização foi um sucesso. O projeto deve definir a infraestrutura necessária para dar suporte às aplicações virtualizadas e considerar as possibilidades de crescimento da infraestrutura.

**Planejamento da capacidade**

O planejamento da capacidade de virtualização deve levar em conta a variedade de servidores, os sistemas operacionais e as cargas de trabalho (workloads). Na maioria dos cenários, o uso dos recursos é muito baixo e isso possibilita aos projetos de virtualização um alto ganho de consolidação. O planejamento da capacidade pode ser dividido nas fases de coleta e análise; nos testes – também chamado de POC (Proof of Concept); na prova de conceito do ambiente a ser virtualizado; e na construção do relatório do planejamento da capacidade, conhecido como VRA (Virtualization Readiness Assessment).

**Etapa de coleta e levantamento**
Nessa etapa é importante levantar a infraestrutura existente e saber que funcionalidades selecionadas para a virtualização são importantes para a definição dos recursos legados a serem aproveitados. A nova infraestrutura deve ser projetada com uma folga nos recursos de processamento e no uso de memória. As informações a serem coletadas em relação aos servidores são: quantidade de servidores, processamento total, quantidade de memória, utilização da banda de cada servidor, espaço em disco total e performance de processadores, disco e memória.

**Etapa de análise**
Deve-se considerar que computadores físicos têm capacidade e quantidade de recursos limitadas a serem compartilhadas com as máquinas virtuais. Assim, o hypervisor será fundamental para gerenciar as máquinas virtuais com relação a uso de memória, uso de processos e entrada/saída. A coleta de dados deve ser centralizada no desempenho real do servidor, e não apenas na sua função. Como produto dessa etapa de análise, tem-se: análise de desempenho de cada servidor, análise do hardware necessário para suportar os servidores que serão virtualizados e análise da situação de tolerância a falhas.


**Etapa de análise**
Nessa etapa as empresas conseguem simular as capacidades da virtualização, avaliar as situações e definir como resolver possíveis problemas e medir os resultados. Em geral, a prova de conceito é desenvolvida pela empresa de consultoria ou por equipe especializada; dura em média de 30 dias e deve: instalar e configurar o software de virtualização, orientar sobre as melhores práticas de utilização, testar as características e funcionalidades e validar a solução do cenário proposto de forma que as especificações de negócio da empresa sejam atendidas.

Estágios da etapa da prova de conceito:
• Fase I – levantamento: definição das características e planejamento do escopo do projeto.
• Fase II – planejamento: detalhes da solução, definição do período de execução e do plano de testes.
• Fase III – construção: instalação, configuração e realização dos
testes da estrutura virtualizada.
• Fase IV – gerenciamento: verificação dos objetivos, reavaliação
da solução e próximos passos. Ao final dessa fase, já se tem ideia
da capacidade de uso da virtualização e dos valores financeiros

**Etapa de avaliação de disponibilidade para virtualização**

Nessa etapa, o relatório de avaliação de disponibilidade para virtualização deverá descrever o impacto e os benefícios que serão alcançados com a consolidação dos servidores, demonstrando as melhorias com relação aos serviços, o aumento da produtividade e a simplificação de implantação de novos serviços.
O relatório deve apresentar dados sobre a área de investimentos a serem realizados, a aquisição de hardware, o licenciamento de software e de todos os custos com a manutenção da nova infraestrutura. Essas informações são conhecidas como custo total do investimento – TCO (Total Cost of Owership). Outra informação importante é o retorno sobre o investimento – ROI (Return On Investiment).

#### Escolha do fornecedor
Após definida a infraestrutura de virtualização tem-se a etapa de seleção dos fornecedores, e a avaliação deve considerar: preço da solução, desempenho, disponibilidade, segurança, base instalada e funcionalidades.

**Projeto**
A etapa do projeto envolve a elaboração dos testes das aplicações
em ambiente de desenvolvimento, na infraestrutura virtualizada e, após
avaliações de comportamento, devem entrar em regime de produção
para os usuários. É comum separar essa etapa em:
• Especificações do sistema: detalhamento de todas as especificações, necessidades de licenciamento, backup e possíveis implicações nos ambientes de rede virtualizada e nos dispositivos
de armazenamento.
• Plano de implementação: deve conter todas as informações necessárias para verificação dos recursos, construção da infraestrutura virtualizada, migrações e acompanhamentos de revisão.

**Implementação**
Depois de desenvolvido o projeto, há a etapa de implementação, em que todos os detalhamentos da infraestrutura virtualizada e das plataformas envolvidas deverão ser instalados. Para facilitar a implementação, alguns cuidados e procedimentos devem ser adotados:
 Procedimentos e cuidados com servidores:
◦ Utilizar servidores homologados pelo software de virtualização.
◦ Conhecer e definir as formas de licenciamento do hypervisor.
◦ Observar projeto de arquitetura dos servidores, backup e
armazenamento.
◦ Observar projeto de migração para converter um servidor físico
em virtual.
• Procedimentos e cuidados com armazenamento:
◦ Utilizar o software de virtualização para os casos de failover2
 e balanceamento de carga.
◦ Definir a rede e as funcionalidades desejadas.
◦ Definir o nível de integração do backup.