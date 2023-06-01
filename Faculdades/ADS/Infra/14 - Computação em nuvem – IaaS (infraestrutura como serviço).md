**Definição de IaaS (infraestrutura como serviço)**
A computação em nuvem oferece alguns modelos de serviços. Um deles é a **infraestrutura como serviço (IaaS),** que é o fornecimento de **hardware virtualizado**, ou seja, de todos os componentes da infraestrutura física de que uma empresa precisa. A IaaS oferece aos usuários espaço virtual em servidores, conexões de rede, largura de banda, endereços IP e até balanceadores de carga. Esses componentes são fornecidos pelas empresas provedoras de serviços de nuvem. São vários servidores e redes que, por segurança e disponibilidade, estão distribuídos em vários locais geográficos diferentes. 

Com a utilização da IaaS, os provedores de nuvem ficam responsáveis pela aquisição de todo hardware necessário, configurações, atualizações e manutenção. Dessa forma, as empresas usuárias do modelo de serviço IaaS ficam livres para construir suas soluções de TI, de forma escalável e com todas as atividades de gestão do hardware terceirizadas para o provedor de nuvem.

TI tradicional
Aplicações
Dados
Runtime*
Middleware**
Sistema operacional
Virtualização
Servidores
Armazenamento
Rede


Serviço laaS
Aplicações
Dados
Runtime
Middleware
Sistema operacional
**Virtualização
Servidores
Armazenamento
Rede** 
(Os campos em bold são os campos que o serviço laaS oferece)

"*Os usuários de serviços de IaaS podem provisionar a infraestrutura de hardware desejada para suas necessidades através de uma interface gráfica. Por meio de um catálogo, opções de processador, quantidade de memória, rede e armazenamento são facilmente selecionadas. São exemplos de soluções de empresas provedoras de serviços IaaS: Amazon Elastic Compute Cloud (Amazon EC2), Microsoft Windows Azure, Google Compute Engine e IBM Cloud*"

**Os provedores de nuvem no modelo IaaS fornecem os serviços elencados**
- Armazenamento (storage): capacidade de armazenamento em
disco que pode ser escalável e utilizada para aplicativos, backups,
arquivamento, armazenamento em geral.
• Corretor de nuvem (cloud broker): ferramentas que gerenciam
serviços em mais de uma plataforma de infraestrutura em nuvem, sendo que algumas possuem suporte a configurações de
nuvem pública-privada.
• Recursos de hardware (compute): recursos de servidor para execução de sistemas baseados em nuvem que podem ser dinamicamente provisionados e configurados conforme necessidade.
• Gerenciamento de serviços (services management): serviços
que gerenciam a plataforma da nuvem IaaS.
• Cópia reserva/recuperação de dados (backup/recovery): plataformas que fornecem serviços para backup e recuperação de sistemas e dados brutos armazenados em servidores.
• Redes de fornecimento de conteúdo (CDN – Content Delivery
Networks): armazenamento de rede de entrega de conteúdos  para melhorar o desempenho e o custo de entrega de conteúdo para sistemas baseados na web.

- **Componentes do laaS**:
- As infraestruturas de nuvem são projetadas para oferecer e gerenciar diversos tipos de recursos. Para distribuir esses recursos de forma eficiente, dependendo da demanda de carga de trabalho, diversos componentes são utilizados. **São componentes de IaaS: compute, network, storage, database e manage**

**Compute** Características centrais do componente: • Encapsula o tempo de processamento da CPU e o espaço de trabalho da memória RAM. • É implementado por hypervisores, contêineres e servidores bare-metal (servidor dedicado). O componente compute (recursos de hardware) é formado por instâncias criadas pelo software hypervisor que encapsulam uma capacidade computacional, como processador, espaço de memória RAM, pontos de acesso de rede e os fraciona entre diversos usuários através da virtualização. Uma infraestrutura de nuvem, em geral, gerencia vários dispositivos físicos que executam um grande número de instâncias. A função do hypervisor é gerenciar o acesso aos recursos físicos, dividindo a CPU, a RAM e o armazenamento entre as máquinas virtualizadas – as instâncias de computação (VACCA, 2016).

**Network** Características centrais do componente: • Fornece comunicações intra, inter e extranuvem. • Pode ser virtualizado em um hypervisor ou simplesmente configurado com cuidado. • Deve isolar as comunicações da carga de trabalho diferente. O componente network (rede) de uma infraestrutura em nuvem permite a conectividade com o computador, o armazenamento e outros elementos dessa infraestrutura e também com um ambiente mais amplo fora dessa infraestrutura (VACCA, 2016). No mínimo, o componente de rede conecta os recursos de rede do componente de computação à borda do ambiente de nuvem e gerencia o tipo de acesso que as instâncias de computação têm entre si e para o ambiente mais amplo. Além dessa capacidade mínima exigida, existem várias técnicas para gerenciar a topologia de rede em uma infraestrutura de nuvem: comutação virtual, gerenciamento de equipamento de rede física e rede definida por software.

**Storage** Características centrais do componente: • Realiza o armazenamento em bloco, geralmente com funcionalidade adicional. • Implementado como unidades de disco virtuais em um hypervisor ou com acesso direto ao armazenamento físico. O componente de storage (armazenamento) de uma infraestrutura de serviços em nuvem fornece armazenamento de dados como: informações de gerenciamento da nuvem, máquinas virtuais, definições de rede. Também fornece espaço de trabalho para aplicativos e cargas de trabalho em execução no ambiente de nuvem (VACCA, 2016).

**Database** Características centrais do componente: • Promove acesso simplificado aos serviços de banco de dados. • É implementado como controle SQL gerenciado para a nuvem. • Isola os dados de trabalho e escala dinamicamente como demanda. O componente database (banco de dados) em uma infraestrutura de nuvem fornece um mecanismo de banco de dados gerenciado centralmente e com nível de abstração, tornando mais simples sua utilização e implementação (VACCA, 2016). Assim, o componente banco de dados possibilita que as aplicações sejam escaladas à medida que a carga de trabalho aumenta. Dessa forma, os usuários da nuvem podem instanciar o serviço de banco de dados conforme a necessidade de carga de trabalho e controlar determinados aspectos do banco de dados, por exemplo: programações ou capacidade e desempenho. Existem diversas tecnologias de infraestrutura em nuvem com diversos níveis de suporte para vários tipos de banco de dados. Um banco de dados padrão SQL (Structured Query Language), linguagem de consulta estruturada, não é projetado a partir do zero e não permite escalar dinamicamente, em resposta a variações da carga de trabalho em tempo real.

**Manage** Características centrais do componente: • Promove acesso gráfico através de API (interface de programação de aplicações) para a configuração de infraestrutura e relatórios. • É implementado como uma aplicação independente, integrada com os componentes da nuvem. Controla o acesso por meio de autenticação e autorização


**Uso de IaaS**
A utilização de infraestrutura como serviço tem se tornado uma tendência entre as empresas, que passam a contar com um data center virtual (servidores, armazenamento, rede, firewall, etc.) pagando pela utilização e não tendo todos os investimentos e custos de manutenção, caso todos os dispositivos de hardware fossem de sua propriedade. Os provedores de IaaS ainda fornecem diversas ferramentas e serviços que auxiliam no gerenciamento da infraestrutura, melhorando processos, controle de acessos, balanceamento de carga, segurança, backups, replicações e, em caso de desastres, os processos de recuperação são muito rápidos e sem perda de dados. As empresas, ao optarem pela utilização de IaaS, percebem as seguintes vantagens quando comparadas com a arquitetura de TI tradicional: pagamento por utilização, agilidade, flexibilidade e escalabilidade, dentre as principais. Assim, a migração da infraestrutura para a computação em nuvem tem sido uma tendência nos últimos anos e principalmente nas pequenas e médias empresas

