O crescimento da utilização de serviços computacionais em diversas áreas do conhecimento, e com isso a necessidade de mais infraestrutura de TI nas empresas, tem sido o grande desafio para os arquitetos de tecnologia da informação. Assim, um dos termos mais utilizados nos últimos anos tem sido “colocar tudo na nuvem”. As informações são armazenadas em uma infraestrutura que pode ser chamada de arquitetura de TI, pois envolve computadores e dispositivos dos usuários, servidores, software de aplicação, infraestrutura de rede e até mesmo pessoal especializado. A relação custo-benefício e a necessidade de respostas rápidas a demandas emergentes têm forçado as empresas a uma ruptura com padrões estabelecidos. Uma dessas rupturas consiste em passar a armazenar não só as informações em um data center, mas também as aplicações, os sistemas operacionais e, de uma certa forma, manter na empresa apenas os dispositivos que possibilitam aos usuários acessar as informações, sem necessariamente conhecer o local físico onde estão armazenadas.

Mainframes> Cliente-servidor> Data center> Virtualização

No início, grandes volumes de dados eram armazenados e processados nos mainframes; em seguida passaram para a arquitetura cliente-servidor graças à evolução da microeletrônica e aos novos processadores, cada vez mais poderosos e rápidos. As empresas perceberam que para a evolução de utilização da tecnologia, o custo de uma nova instalação de hardware/software em novos computadores, elas precisariam ter computadores de usuários com maior poder de processamento, mais até do que os servidores instalados. As tecnologias que ampliaram as velocidades e as novas propostas de conexão deram à internet novas possibilidades. Esse cenário e principalmente as características interessantes de virtualização propiciaram o compartilhamento não só dos servidores, mas também das aplicações, das ferramentas de desenvolvimento, tornando toda a infraestrutura de TI possível de ser compartilhada.

*"é um modelo computacional no qual a capacidade de processamento, armazenamento, software e outros serviços são obtidos de um agrupamento de recursos virtualizados por meio de uma rede, geralmente a Internet. Essa “nuvem” de recursos computacionais pode ser acessada com base na demanda do momento, a partir de qualquer local ou dispositivo conectado."*

*Computação em nuvem é um modelo que possibilita o acesso, de modo conveniente e sob demanda, a um conjunto de recursos computacionais que são configuráveis (redes, equipamentos, servidores, dispositivos de armazenamento, aplicações e serviços) e que podem ser rapidamente adquiridos e liberados com mínimo esforço gerencial ou interação com o provedor de serviços. (NIST, 2013, p. 1)*


#### Principais conceitos sobre computação em nuvem
A principal característica da computação em nuvem é a terceirização do gerenciamento e a utilização de hardware e software para os usuários, fornecidos por empresas especializadas, com serviços de melhor qualidade e menor custo. Por exemplo, uma empresa pode adquirir recursos de hardware conforme sua demanda, sem os custos iniciais de aquisição e instalação dos computadores e softwares. Se a demanda diminuir, pode então diminuir a quantidade de recursos de hardware remoto, e não fica com hardware desnecessário e que será depreciado com o tempo. Assim, conceitos como escalabilidade e elasticidade no fornecimento de recursos se tornam fatores muito atraentes para as empresas.

Modelos de desenvolvimento: com as nuvens pública, privada,
híbrida ou comunitária.
• Modelos de serviços: com IaaS (infraestrutura como serviço),
PaaS (plataforma como serviço) e SaaS (software como serviço).
• Características essenciais: self-service sob demanda (on-demand
self-service), acesso através da rede (broad network access), medição de serviços (measured service), elasticidade rápida (rapid
elasticity) e oferta de recursos (resource pooling)


#### Características essenciais

As características essenciais da computação em nuvem servem de parâmetros para que tanto as empresas quanto os fornecedores de serviços de nuvem possam ajustar seus relacionamentos e os contratos de prestação de serviços.

On-demand self-service (self-service sob demanda): os serviços computacionais podem ser acessados sob demanda, dependendo da necessidade do usuário, e podem ser selecionados sem
a necessidade de intervenção do fornecedor.
• Broad network access (acesso pela rede): os recursos são disponibilizados através de rede e acessados por diversos tipos de
dispositivos, como computadores, smartphones e tablets.
• Measured service (medição de serviços): os serviços em nuvem
são cobrados dependendo da quantidade utilizada.
• Rapid elasticity (elasticidade rápida): os recursos podem ser
provisionados pelos provedores de serviços de nuvem de forma
elástica, isto é, podem ser alocados em qualquer quantidade e a
qualquer momento.
• Resource pooling (oferta de recursos): os recursos computacionais são fornecidos pelo provedor de serviços de forma compartilhada com diversos usuários, quer sejam físicos, quer sejam
virtuais, e são atribuídos dinamicamente aos usuários.


#### Modelos de serviços

**Infraestrutura como serviço (IaaS)** -> 
O modelo de serviços IaaS fornece a infraestrutura virtual de servidores, dispositivos de rede, armazenamento e outros recursos para construir um ambiente que possa ser acessado sob demanda, isto é, se forem necessários mais recursos de hardware, basta provisionar e escolher as características de hardware desejadas em um catálogo. Esse catálogo é uma interface para administração da infraestrutura e serve para interação com hosts, switches, balanceadores de carga, roteadores e novos equipamentos. Assim, a adição ou a exclusão de um item ocorre de forma simples. A infraestrutura fornecida pelos serviços IaaS é baseada em técnicas de virtualização de recursos de computação. Como pode ser escalada dinamicamente entre os usuários dos serviços, os custos são muito inferiores. Imagine a economia que a empresa consegue com IaaS, já que não precisa adquirir servidores e equipamentos de rede para ampliar seus serviços conforme as necessidades de mercado.

**Plataforma como serviço (PaaS)** ->
O modelo de serviços PaaS possibilita aos usuários projetar seus sistemas de software, pois fornece um ambiente com um sistema operacional, as linguagens de desenvolvimento e o ambiente necessário para que os desenvolvedores possam construir, testar e compartilhar suas aplicações com outros desenvolvedores. Esses ambientes em geral são escaláveis, isto é, podem crescer dependendo da demanda. Nesse modelo, o PaaS fornece uma infraestrutura em que o usuário não administra ou controla os servidores, a configuração de rede, os sistemas operacionais ou o armazenamento. Os controles ficam restritos apenas às aplicações que estão sendo desenvolvidas. Um cenário interessante para a utilização desse modelo pode ser visto quando uma empresa possui uma equipe de desenvolvimento de aplicações e que em alguns momentos necessita de uma plataforma de desenvolvimento. Eles contratam o serviço apenas pelo tempo necessário.

**Software como serviço (SaaS)** ->
O modelo de serviços SaaS possibilita que os usuários utilizem as aplicações que estão instaladas na infraestrutura (computadores, redes e acesso) do provedor de serviços de nuvem. As aplicações são acessadas por meio de dispositivos com um navegador web. Assim, em vez de adquirir licenças de desktop e servidor para os softwares que utiliza, a empresa obtém as mesmas funções do serviço na nuvem, evitando a complexidade de instalação, manutenção, atualizações e demais atividades em sua infraestrutura, pois tudo isso será função do provedor do serviço de nuvem.

O modelo IaaS provê:
• acesso aos recursos fundamentais de hardware e infraestrutura, como máquinas físicas, máquinas virtuais e armazenamento
virtual;
• ambientes de desenvolvimento para as aplicações e ferramentas
de desenvolvimento;
• utilização de aplicações como um serviço aos usuários finais.

**Modelos de desenvolvimento**
Com o desenvolvimento da computação em nuvem e as vantagens apresentadas, as empresas têm buscado opções para a migração de parte de suas atividades para a nuvem, e em alguns casos até mesmo a totalidade de seus negócios. Uma análise a ser feita, então, será em relação ao modelo de nuvem a ser utilizado, o que diz respeito principalmente à propriedade e à gestão dos recursos de nuvem.

**Nuvem Pública**
Uma infraestrutura de nuvem pública é disponibilizada para o público em geral ou para um conjunto de empresas. O provedor de serviços é o proprietário e vende os serviços, sendo o responsável pela infraestrutura e pelos controles dos dados e das operações da nuvem. O provedor de serviços pode ser uma organização comercial, acadêmica ou governamental, ou ainda um misto entre eles. Esse tipo de nuvem fornece serviços para o consumidor e são fáceis de usar, por exemplo: Amazon, aplicativos do Google, e-mail do Yahoo, Facebook, Linkedin, mídias sociais para armazenamento de fotos, etc. Essas aplicações são acessadas pela internet através de IP seguro e podem ser gratuitas ou cobrar uma taxa por uso.

As nuvens públicas podem ser baratas e dimensionáveis para que possam atender às demandas, contudo não fornecem contrato de serviços (SLA – Service Level Agreement) e, portanto, não garantem contra perda ou corrupção dos dados. As nuvens públicas são mais apropriadas para consumidores e empresas que não exigem níveis de serviços. É preciso considerar que as nuvens públicas de IaaS não fornecem restrições ou conformidade com as leis de privacidade, sendo responsabilidade do assinante ou do usuário corporativo. O foco das nuvens públicas está no consumidor final e nas pequenas e médias empresas.

**Nuvem Privada**

As empresas podem construir suas próprias nuvens dentro da infraestrutura de TI, e assim gerenciar os recursos ou até mesmo terceirizar o gerenciamento. Ainda é importante considerar que os servidores podem estar alocados dentro da empresa ou em data center fora das instalações. As nuvens privadas podem fornecer o modelo IaaS para seus colaboradores, ou ainda unidades de negócios, através de intranet ou internet, usando uma rede VPN (Virtual Private Network). Também podem fornecer aplicativos ou armazenamento como serviços para as filiais e assim aproveitar toda a infraestrutura existente. A segurança é um dos principais motivos para a adoção de nuvem privada, pois os controles de segurança são mais rígidos. Exemplos de serviços fornecidos nessas circunstâncias são os bancos de dados sob demanda e o armazenamento sob demanda.

**Nuvem híbrida**

A infraestrutura de nuvem híbrida é formada por duas ou mais nuvens, que podem ser públicas, privadas ou comunitárias, e que continuam como entidades exclusivas, porém interligadas por tecnologia que possibilita a portabilidade de dados e de aplicativos.
Com a utilização de cenários com nuvem híbrida, as informações confidenciais podem ser armazenadas em área privada da nuvem e outros dados em nuvem pública, aproveitando os benefícios de redução de custo, por exemplo. A utilização de nuvem híbrida pode ser interessante para empresas de menor porte, em que aplicações com menor exigência de segurança podem ser utilizadas com menor custo e sem comprometer a segurança de dados confidenciais.

**Nuvem comunitária**

A infraestrutura de nuvem comunitária compartilha as características de nuvens privadas e públicas. Com a nuvem privada ela restringe o acesso e com a nuvem pública os dados são compartilhados com diversas organizações. Em geral, essas organizações têm requisitos e particularidades em comum e trocam dados entre si. Um exemplo está no setor de saúde, cujas exigências de privacidade, regulamentações do governo e necessidades de informações por laboratórios e outros atores do processo são comuns. O gerenciamento da nuvem comunitária poderá ser feito pelas organizações/empresas participantes ou ainda por terceiros. Os custos são distribuídos por um número menor de usuários que em uma nuvem pública, e maior que em uma nuvem privada.

*"São algumas aplicações da computação em nuvem utilizadas pelos usuários: serviços de e-mail (Gmail, Yahoo mail, Hotmail); mídias sociais (Facebook, Instagram, Twitter, Pinterest, Linkedin, YouTube); drives virtuais (Dropbox, Google Drive); aplicativos (Google docs); armazenamento de fotos (Picasa); internet banking; serviços públicos (Detran, INSS)."*


**Utilização de nuvem por empresas**

As empresas têm utilizado a computação em nuvem para atividades que incluem colaboração e comunicação, backup de arquivos, avaliação e análise de dados, desenvolvimento de aplicações e diversos outros cenários em que a escalabilidade, a segurança, a confiabilidade nos processos de negócios e a mobilidade, com os acessos sendo realizados através de vários tipos de dispositivos, são fundamentais. As comunicações entre usuários realizada através de ferramentas baseadas na web (Skype, por exemplo) e a integração com as plataformas de dispositivos móveis amplia a produtividade dos colaboradores da empresa, e usando aplicativos de escritório, baseados em nuvem, geram mais negócios e em menor tempo e com custo mais baixo. As aplicações de negócios como gerenciamento de clientes, pedidos e todo o planejamento estratégico são gerenciadas através de sistemas que estão na nuvem, com disponibilidade e confiabilidade. Os sistemas de backup e recuperação de desastres são migrados para a nuvem e as empresas apostam na continuidade de negócios como uma vantagem competitiva. As áreas de desenvolvimento, testes e manutenção das aplicações ganham competitividade com a hospedagem na nuvem. As ferramentas e os ambientes de desenvolvimento ficam muito mais seguros, rápidos em necessidade de elasticidade. E tudo e com menor custo. A computação em nuvem já se faz presente em diversas áreas das empresas e até mesmo em diferentes segmentos. A disruptura1 provocada pelas tecnologias utilizadas na computação em nuvem tem mudado a forma como as empresas se relacionam, como os negócios e oportunidades surgem e prosperam. Existe um grande potencial a ser desenvolvido, e a cada momento novos modelos estão surgindo.