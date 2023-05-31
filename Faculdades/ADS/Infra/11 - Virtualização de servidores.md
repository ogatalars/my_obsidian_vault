As aplicações são executadas nos computadores utilizando o hardware disponível, ou seja, o processador, a memória e o disco rígido: isso define um servidor físico, que, através de um sistema operacional, vai alocando e executando as tarefas. As diferenças de velocidades de processamento do processador, o tempo de acesso às memórias e aos sistemas de armazenamento fazem com que em vários momentos o processador fique ocioso. Imagine que em um mesmo servidor físico possam ser “criados” diversos servidores lógicos graças a um software. **Esse é o princípio do conceito de virtualização, em que a capacidade de um servidor físico é distribuída entre diversos servidores, aproveitando todo o potencial do hardware instalado**. Os recursos são distribuídos entre as diversas aplicações, que funcionarão como computadores virtuais, ou melhor ainda, como máquinas virtuais.

**A virtualização pode ser considerada como a execução de vários servidores virtuais em um só servidor físico, o que significa o funcionamento de mais de um sistema operacional e suas aplicações em um mesmo servidor que simula diversos servidores virtuais, ou máquinas  virtuais (VM – Virtual Machines).** O conceito de máquina virtual surgiu com a tecnologia de multiprocessamento, inicialmente lançada nos mainframes, que eram capazes de executar diversos sistemas operacionais, e com a virtualização dos recursos de hardware. A VM é uma camada de abstração que fica entre o hardware e o software e que protege o acesso direto do software aos recursos físicos do hardware. Assim, a virtualização possibilita que as aplicações e o sistema operacional sejam isolados da camada de hardware (VERAS, 2012).

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
O primeiro passo para a virtualização é verificar o hardware disponível dos servidores. Devemos entender como hardware o conjunto composto de processador, memória, discos rígidos, placa de rede e conexões com a infraestrutura de rede. Uma vez selecionado o servidor físico onde serão instaladas as máquinas virtuais, deve-se instalar um sistema operacional. O servidor físico deverá ter instalado um sistema operacional com o hypervisor, que será o responsável pela divisão do hardware em partes e nelas a criação das VMs (máquinas virtuais). 

Como o hypervisor simula dentro do hardware do servidor, os discos são armazenados em arquivos dentro do sistema operacional do hypervisor, enquanto CPU e memória são alocados sob demanda.
Dependendo da necessidade da aplicação, são escolhidos os sistemas operacionais que serão instalados em cada máquina virtual. A máquina virtual 1 recebeu a instalação do Windows 10, e a máquina virtual 2, a instalação do Linux. O sistema operacional de cada máquina virtual estará isolado de outros e se comportará como se tivesse todos os recursos definidos quando da criação da máquina virtual. A divisão dos recursos entre as diversas máquinas virtuais será uma tarefa do hypervisor. É importante observar que alguns recursos podem ser alocados com quantidades maiores do que a real, o que chamamos de over provisioning. Por exemplo: um hardware de servidor possui 20 Gb de memória e pode ter 12 máquinas virtuais com 2 Gb de memória cada uma, o que daria um total de 24 Gb, mas essas máquinas virtuais não podem usar todo o recurso ao mesmo tempo. Em situações de disputa por recursos, o hypervisor prioriza algumas máquinas virtuais para a preferência na execução.

#### Motivos para a virtualização
A virtualização é uma tecnologia que possibilita a execução de diversos sistemas operacionais e aplicações dentro de um equipamento, que pode ser desde um computador simples até um servidor com diversos recursos. A utilização de hardware compartilhado e a consequente diminuição de investimento em servidores é um excelente motivo para que as empresas utilizem a virtualização. Algumas características que auxiliam os administradores de infraestrutura de TI a justificar a utilização de virtualização nos projetos ou a preparar a empresa para a adoção de tecnologias de cloud computing, ou computação em nuvem, são:
- **Disponibilidade e confiabilidade**: a virtualização e a consequente
redução de servidores diminuem as paradas para manutenção e
tornam possível manter o serviço disponível sem que os usuários percebam a ocorrência de qualquer problema. Essa situação
aumenta muito a confiabilidade e a disponibilidade dos sistemas
aos usuários. Os sistemas de backup são otimizados com o uso
da virtualização.
• **Redução de custos:** a virtualização implica menor número de
componentes físicos. Com isso, os custos de aquisição de hardware, manutenção e consumo de energia são reduzidos. É importante considerar que um servidor ligado e com plena carga
tem quase o mesmo consumo de um servidor com pouca carga  de trabalho. Também é interessante considerar o menor espaço físico necessário aos servidores ou mesmo ao data center.
Automatização de processos: a virtualização e as diversas ferramentas utilizadas possibilitam a automação de vários processos,
como a criação de templates de máquinas virtuais com modelos
adequados às necessidades dos usuários e de aplicações.
• **Recuperação de desastres:** a utilização da virtualização proporciona uma melhor e mais rápida recuperação de desastres, pois o
contingenciamento dos serviços disponibilizados aos usuários é
facilitado devido a menor número de computadores e, com a abstração de hardware, não existe a necessidade de dependência de
um hardware específico. As “imagens” de sistemas operacionais
completos instalados em VM podem ser copiadas e armazenadas
em local seguro e, em caso de problemas, bastará copiar um arquivo com a imagem, que é muito mais rápido que instalar e configurar um novo computador, como é necessário no modo tradicional.
• **Sustentabilidade (TI verde):** a virtualização possibilita a redução
não só de energia e custos de aquisição como também de impactos ambientais, por usar menor número de servidores e, portanto, diminuir o descarte de material. Ainda em ambientes virtuais,
alguns servidores poderão ser desligados em períodos de menor
demanda, o que pode diminuir a necessidade de refrigeração dos
servidores/data center.
• **Provisionamento rápido:** a virtualização contribui para o crescimento dos negócios das empresas devido à facilidade de se provisionar recursos para novas aplicações de forma rápida, diferentemente do processo realizado com servidores físicos.
- **Migração para computação em nuvem:** com a adoção de estrutura de virtualização a migração para utilizar a computação em nuvem fica bem mais fácil, pois os provedores possuem suportea IaaS (infraestrutura como serviço), o que significa que uma máquina virtual interna pode ser facilmente migrada para a nuvem. 

Com a virtualização, diversos benefícios surgem para as empresas e
as áreas de negócios, sendo de imediato:
• **Aproveitamento da infraestrutura existente:** com os vários serviços podendo ser realizados em um único servidor, a capacidade
de processamento é mais bem aproveitada, gerando redução de
custos de hardware e de toda a infraestrutura necessária para dar
suporte a um computador, como espaço, refrigeração e energia
elétrica.
• **Diminuição do parque de máquinas:** ao utilizar mais o hardware
de cada equipamento existente com a virtualização, diminui-se
a necessidade de aquisição de novos hardwares e consequentemente os gastos com a infraestrutura.
• **Centralização do gerenciamento:** com a virtualização se torna mais fácil o gerenciamento dos recursos da infraestrutura
instalada.
• **Implementação rápida de aplicações:** com a virtualização implantada na empresa, fica mais rápido ampliar aplicações e
disponibilizá-las aos usuários.
• **Variedade de plataformas:** a virtualização possibilita que em
um servidor físico possam ser instaladas diversas plataformas
de sistema operacional, dependendo da necessidade de cada
aplicação.
• **Criação de ambiente de testes:** a virtualização e a criação de
máquinas virtuais possibilitam às empresas criar ambientes de  testes para suas aplicações, antes de colocá-las em produção para os usuários.
- **Segurança e confiabilidade:** com a virtualização as máquinas virtuais funcionam de modo independente umas das outras, o que
dá maior segurança, pois caso ocorra um problema de vulnerabilidade em uma máquina isso não afetará as outras.
• **Migração e atualização mais fácil:** as alterações em ambientes
virtualizados podem ser feitas de forma rápida, o que facilita muito os processos de migração de software e até mesmo a ampliação da infraestrutura.