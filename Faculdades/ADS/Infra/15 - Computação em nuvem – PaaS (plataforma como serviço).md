**Definição de PaaS (plataforma como serviço)**

A utilização de tecnologia da informação e de todas as suas atividades geram dois tipos de empresas: as que desenvolvem suas próprias aplicações e as que desenvolvem as aplicações e as fornecem para o mercado consumidor. Em ambos os contextos, as necessidades envolvem a aquisição de hardware, além de servidores, discos, memórias, armazenamento, infraestrutura de redes, sistemas operacionais e, claro, ferramentas de desenvolvimento. A PaaS é um ambiente fornecido pelos provedores de nuvem, que inclui a infraestrutura com os servidores, memória, discos de armazenamento e a rede, sistema operacional, middleware, ferramentas de desenvolvimento, serviços de BI (Business Intelligence) e sistemas de gerenciamento de banco de dados.

**Arquitetura TI TRADICIONAL** 
Aplicações 
Dados 
Runtime 
Middleware
Sistema operacional 
Virtualização 
Servidores 
Armazenamento 
Rede

**Serviço PaaS** 
Aplicações 
Dados 
**Runtime 
Middleware 
Sistema operacional 
Virtualização 
Servidores 
Armazenamento 
Rede**

Todos os grifados são gerenciados pela arquitetura PaaS

*São exemplos de soluções de empresas provedoras de serviços PaaS: Microsoft Azure Cloud Services, Google App Engine, Oracle Cloud Platform, entre outros, e cada um com suas características de fornecimento (KAVIS, 2014)*

Uma solução de PaaS fornece os serviços de plataforma integrados baseados em nuvem que incluem software pré-instalado e configurado de banco de dados e middleware. Fornece também a plataforma para desenvolvimento, teste, implantação e proteção de diferentes tipos de aplicativos corporativos.

• Base de dados (database): fornece banco de dados para as aplicações. São fornecidas ferramentas para acessar e utilizar dados
em um sistema de armazenamento.
• Inteligência de negócios (business intelligence): fornece ferramentas de BI (inteligência de negócios).
• Desenvolvimento e teste: fornece ferramentas para desenvolvimento e testes de aplicações.
• Integração: fornece integração entre aplicações e diversos
programadores.
• Implantação de aplicativo (application deployment): fornece o
ambiente com linguagem de programação para desenvolvimento
de aplicativos.

No modelo PaaS, os provedores de nuvem fornecem plataformas de computação que incluem um sistema operacional, ambiente de programação com uma linguagem para desenvolvimento, banco de dados e hospedagem em um servidor virtualizado. Em alguns provedores de PaaS os recursos oferecidos podem ser escalonáveis automaticamente, conforme a demanda solicitada pelos aplicativos. Em geral os provedores de PaaS oferecem uma plataforma de computação que permite a criação de aplicações web de forma rápida e eficiente, sem que o cliente precise adquirir toda a infraestrutura de hardware e ambiente de desenvolvimento

**São algumas características** para avaliar os provedores de PaaS
para que se possam desenvolver aplicativos escaláveis e ser aplicados
em dispositivos móveis (VACCA, 2016):
• Separação do gerenciamento de dados da interface do usuário.
• Confiabilidade nos padrões de computação em nuvem.
• Ambiente integrado de desenvolvimento (IDE).
• Ferramentas que possibilitem o gerenciamento de ciclo de vida.
• Suporte, segurança e escalabilidade da arquitetura multi-tenant.2
• Existência de ferramentas de monitoramento, teste e otimização
de desempenho.
Assim, quanto mais forem os componentes agregados fornecidos
como complementos pelo provedor de PaaS, mais bem posicionado no
mercado esse provedor estará. 

**Componentes de PaaS**
Os componentes fornecidos pela plataforma como serviço incluem toda a infraestrutura que já é fornecida pela IaaS acrescida de serviços de sistema operacional, middleware e runtime,3 que passam a ser gerenciados pelo provedor de nuvem. Assim a equipe de desenvolvimento estará concentrada em desenvolver suas aplicações em um ambiente virtualizado e colaborativo, deixando todas as preocupações na preparação do ambiente por conta do provedor

**São características da plataforma PaaS Azure (MICROSOFT, 2019):**
• Desenvolvimento de alta produtividade: a criação de aplicativos de API, móveis e web com a utilização de diversas linguagens de programação (.NET, .NET Core, Java, Ruby, Node.js, PHP, Python e Docker); integração do Serviço de Aplicativo do Azure com as estruturas existentes , o que aumenta a produtividade; utilização do IDE do Microsoft Visual Studio, líder do setor, o que proporciona uma produtividade inigualável para depuração do site e de todo um conjunto de aplicativos, de APIs e de conectores predefinidos no Azure marketplace. 
• Plataforma totalmente gerenciada: execução e dimensionamento dos aplicativos em Sistema Operacional Windows ou Linux, com uma plataforma gerenciada para serviços de manutenção da infraestrutura; balanceamento de carga, entre outras atividades. Possibilidade de domínios personalizados, certificados SSL, SSO (significa logon único) e integração de serviço de identidade aos aplicativos. Fornecimento de informações de desempenho e da integridade do aplicativo e com isso solucionando possíveis problemas de forma mais rápida. 
• Aplicativos de nível empresarial: utilização de rede global de data centers de nível corporativo, com a segurança e a conformidade para que o usuário possa criar e hospedar os aplicativos. Conexão dos aplicativos web ou móveis a sistemas corporativos ou a SaaS realizada em minutos. Proteção dos aplicativos com a integração ao Azure AD (Active Directory, ou diretório ativo), e isso em nuvem pública, nuvem privada, rede virtual ou até mesmo localmente. Configuração dos aplicativos em grande escala em um ambiente totalmente isolado, em conformidade e exclusivo.

**O principal serviço de PaaS fornecido pela Microsoft é o Azure app
services** (serviços de aplicativos Azure), com diversos tipos de serviços,
com características para hospedagem dos aplicativos ou lógica de negócios. Os recursos são compartilhados, com escalonamento automático, autenticação e autorização. E ainda com domínios personalizados
e utilização de SSL (Secure Socket Layer). São serviços que podem ser
utilizados com a PaaS Azure (MICROSOFT, 2019):
• **Desenvolvimento de aplicativos web:**
◦ Criação rápida de aplicativos: desenvolvimento de aplicações
web com as linguagens: .NET, Java, Node.js, PHP e Python no
Windows ou .NET Core, Node.js, PHP ou Ruby no Linux. O
provisionamento de sistema operacional, capacidade, servidores e balanceamento de carga. Use modelos predefinidos
de implantação.
◦ Atualizações mais rápidas: implantação das aplicações com
integração contínua/implantação contínua e associação com
repositório de arquivos; os aplicativos são atualizados sempre
que o código-fonte é alterado.
◦ Escala global sob demanda: alta disponibilidade nas regiões
do Azure com serviços de dados e de host em várias localizações, com dimensionamento baseado no desempenho
do aplicativo ou em regras personalizáveis. Atua nos picos
na carga de trabalho e minimiza os custos fora dos horários
de pico.
◦ Informações e análises: fornece exibições detalhadas de uso
do recurso, com informações de desempenho e a integridade
do aplicativo. O Application Insights fornece informações da
taxa de transferência, dos tempos de resposta, da utilização
da memória e da CPU e das tendências de erro do aplicativo.

**Aplicativos web para contêineres**:
◦ Implantação rápida: facilidade para implantar aplicativos web
baseados em contêineres, através do hub do Docker5
ou de um registro de contêiner do Azure privado. O aplicativo web
para contêineres implantará em contêiner na produção com
suas dependências preferenciais.
◦ Atualizações automáticas: o serviço de aplicativo cria uma associação com o repositório e assim os aplicativos são atualizados sempre que o código-fonte é alterado. Os testes de
qualidade e de desempenho são realizados e a implantação
possibilita até mesmo a reversão para versões anteriores sem
tempo de inatividade.
◦ Entrada corporativa: autenticação dos clientes com o Azure
active directory e conexão segura a recursos locais como SAP,
Oracle, SQL Server e SharePoint; estruturas com plataformas
para a criação de aplicativos de nível empresarial.
◦ Criação de aplicativos dinâmicos com sincronização de dados
off-line: criação de aplicativos que continuam funcionando,
mesmo com ocorrência de problemas de rede. Os usuários
podem criar e modificar dados mesmo quando estiverem off
line. Os aplicativos móveis oferecem sincronização nativa nos
seus aplicativos iOS, Android e Windows.
Conexão de aplicativos aos dados no local: use o Azure para
compilar aplicativos móveis que consomem dados do seu próprio data center. Com as conexões híbridas e a VPN do Azure,
é fácil acessar os dados de modo seguro por meio de data
centers locais, de qualquer lugar do mundo.
◦ Notificações personalizadas em minutos: os hubs de notificação do Azure são um mecanismo de notificação por push6
altamente móvel e escalonável, capaz de enviar milhões de notificações por push em segundos para iOS, Android, Windows,
Nokia X ou outros dispositivos.
◦ Dimensionamento automático: dimensionamento automático
interno para aplicativos móveis e hubs de notificação para que
correspondam às necessidades dos aplicativos. Aumente ou
diminua o uso de recursos conforme a demanda.