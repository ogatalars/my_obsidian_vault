As aplicações são executadas nos computadores utilizando o hardware disponível, ou seja, o processador, a memória e o disco rígido: isso define um servidor físico, que, através de um sistema operacional, vai alocando e executando as tarefas. As diferenças de velocidades de processamento do processador, o tempo de acesso às memórias e aos sistemas de armazenamento fazem com que em vários momentos o processador fique ocioso. Imagine que em um mesmo servidor físico possam ser “criados” diversos servidores lógicos graças a um software. Esse é o princípio do conceito de virtualização, em que a capacidade de um servidor físico é distribuída entre diversos servidores, aproveitando todo o potencial do hardware instalado. Os recursos são distribuídos entre as diversas aplicações, que funcionarão como computadores virtuais, ou melhor ainda, como máquinas virtuais.

A virtualização pode ser considerada como a execução de vários servidores virtuais em um só servidor físico, o que significa o funcionamento de mais de um sistema operacional e suas aplicações em um mesmo servidor que simula diversos servidores virtuais, ou máquinas  virtuais (VM – Virtual Machines). O conceito de máquina virtual surgiu com a tecnologia de multiprocessamento, inicialmente lançada nos mainframes, que eram capazes de executar diversos sistemas operacionais, e com a virtualização dos recursos de hardware. A VM é uma camada de abstração que fica entre o hardware e o software e que protege o acesso direto do software aos recursos físicos do hardware. Assim, a virtualização possibilita que as aplicações e o sistema operacional sejam isolados da camada de hardware (VERAS, 2012).

*a virtualização simplifica o gerenciamento, permite flexibilizar e ampliar o poder de processamento. Funcionalidades contidas nos softwares de virtualização permitem melhorar a disponibilidade e a recuperação de desastres de ambientes de TI de uma maneira mais simples e com menor custo quando comparado a formas tradicionais.*

Sendo assim, a máquina virtual representa um computador, com CPU, memória, disco rígido, placa de rede e outros hardwares. Todos são gerenciados pela camada de virtualização, o hypervisor ou VMM (Virtual Machine Monitor), que organiza e separa os recursos físicos dos virtuais, sendo uma camada de software entre o hardware e o sistema operacional.

*O computador servidor que possui o hardware é chamado de servidor físico e possui um sistema operacional instalado. No estudo de virtualização ele é denominado host, ou hospedeiro. As máquinas virtuais são criadas pelo hypervisor e em cada uma delas deve ser instalado um sistema operacional chamado sistema operacional guest, ou convidado. A instalação desse sistema operacional na máquina virtual segue os padrões de instalação de um computador físico. É importante conceituar que o sistema convidado, ao fazer uma chamada de entrada/saída em um disco físico, na verdade está realizando uma gravação em um arquivo no host.*

Existem alguns softwares (hypervisor) no mercado utilizados para criar máquinas virtuais, por exemplo: o Microsoft Hyper-V (HYPER-V); os softwares da VMware Workstation, VMware Player, VMware vSphere (VMware); RedHat KVM (REDHAT); e o Oracle VirtualBox (VIRTUALBOX)

Tipos de virtualização que podem ser criados:
• Virtualização de servidores: considerando que os computadores
desenvolvidos para serem servidores têm capacidade de hardware
para o processamento de uma grande quantidade de informações, e isso devido à velocidade do processador, à memória e à
capacidade do disco rígido, é interessante que as empresas possam construir os seus servidores virtuais em poucos servidores
físicos, gerando economia de espaço, energia e diversos outros
pontos importantes que veremos em tópico posterior. Com a virtualização do servidor, a capacidade instalada é mais bem aproveitada, evitando períodos de ociosidade do servidor.
• Virtualização de desktop: proporciona ao administrador a instalação de diversos sistemas operacionais em um único computador. Pode ser utilizado para testes de performance, de segurança
e de comportamento de aplicativos em diversos sistemas operacionais, sem a necessidade de instalação física de sistema operacional em cada computador. Algumas ferramentas possibilitam
a instalação de diversos desktops virtualizados através da rede.
• Virtualização de sistemas operacionais: esse tipo de virtualização ocorre no kernel, ou seja, o gerenciador de tarefas do sistema operacional. Assim, sistemas operacionais Windows e Linux
podem ser executados paralelamente, o que gera uma redução
de custos quanto a licenças, por exemplo. Outra vantagem é
que as máquinas virtuais podem ser gerenciadas remotamente,
melhorando a segurança e as atualizações de softwares para os
usuários.
• Virtualização de funções da rede: as principais funções de
rede podem ser distribuídas no ambiente de rede, por exemplo: 
configuração de IP, serviços de diretórios, compartilhamento de
arquivos, entre outros. Com isso, os computadores em que estavam instalados não são mais necessários, o que pode significar
a redução de switches, roteadores, cabeamento e outros componentes da infraestrutura de rede.
• Virtualização de dados: os dados são criados em diversas aplicações e armazenados em vários lugares de uma rede. Com a
virtualização de dados, é possível consolidar esses dados em um
único lugar e a partir deles fornecer aos usuários as aplicações
que solicitarem. Isso pode gerar diversas vantagens para as empresas, como economia de servidor, consistência dos dados, segurança, entre outras.
• Virtualização de storage (armazenamento): os dados são centralizados em um sistema de armazenamento, o que facilita o
acesso. Por exemplo, um conjunto de discos rígidos em um data
center. A virtualização de storage possibilita que diversos clientes
possam utilizar um recurso físico, mapeando-os como se estivessem conectados em seus computadores. 

#### Virtualização – componentes
