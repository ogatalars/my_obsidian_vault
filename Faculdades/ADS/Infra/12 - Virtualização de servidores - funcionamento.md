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

