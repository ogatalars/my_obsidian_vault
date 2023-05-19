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