-> switch usado para interligar computadores na camada de enlace,
e o roteador, para interligar redes.

-> Os critérios a serem avaliados devem fornecer indicadores de desempenho,
disponibilidade, escalabilidade, segurança e gerenciabilidade. (Data Center)

-> O cliente de PaaS deve focar no desenvolvimento de suas aplicações com a
utilização das ferramentas de programação, dos bancos de dados e outros
serviços de desenvolvimento fornecidos pelo provedor.

-> Os sistemas monoprogramáveis são caracterizados pelo uso de processador,
memória e dispositivos periféricos, de forma dedicada a um único usuário.

-> A camada de transporte é responsável pelas funções de conexão entre os
dispositivos fonte e destino, segmentando os dados em unidades menores.

-> Servidor de aplicação -> facilitar o desenvolvimento do software e para isto proporciona uma interface entre o software da aplicação de negócio e as características complexas que são
comuns para a maioria das aplicações.

-> O Servidor DHCP possui mecanismos de alocação de endereços, que podem ser Manuais, Automáticos e dinâmicos;

-> Raid -> Gerencia armazenamento, de forma a garantir que os dados não sejam comprometidos, mesmo quanod aparecem falhas

-> A capacidade de servidores serem transferidos para outros servidores é conhecida como instância;

-> Provedores de paas -> Desenvolvimento de aplicações web com diversas linguagens e com provisionamento de SO, servidores e balenceamentos de carga

-> Kernel -> Escalonar as tarefas, cuidar da comunicação entre processos

Uma empresa em crescimento possui uma rede com 20 computadores e um switch de
24 portas que os interliga. Uma área de negócios com mais 15 usuários foi criada e
ficará no mesmo andar, formando então a rede nova. Especifique os equipamentos de
rede que você utilizará, sendo que um dos requisitos será que todos os computadores
da empresa possam se comunicar. Justifique as escolhas dos equipamentos.

**É possível instalar mais um switch**  **para a comunicação das redes**. O
switch é para aumentar a quantidade de portas disponíveis e a porta trunk é para fazer
a ligação entre os switch's, permitindo assim que todos os computadores estejam interl
igados e tenham acesso a rede ou as redes da empresa. **A justificativa da escolha do switch e do roteador é que a função básica de cada um deles é bem definida, sendo o switch usado para interligar computadores na camada de enlace, e o roteador, para interligar redes.**

Para montar uma rede de 20 computadores, serão necessários os seguintes equipamentos:

1. Switch: Um switch é essencial para interconectar todos os computadores em uma rede local. Certifique-se de escolher um switch com capacidade suficiente para suportar pelo menos 20 portas Ethernet.
    
2. Roteador: Um roteador é necessário para fornecer conectividade de rede com a Internet, caso a rede precise de acesso externo. O roteador também pode ser usado para segmentar a rede em sub-redes menores, se necessário.
    
3. Cabos de rede: Cabos Ethernet são necessários para conectar cada computador ao switch. Certifique-se de adquirir cabos de comprimento adequado para alcançar todos os pontos da rede.
    
4. Placas de rede: Cada computador deve ter uma placa de rede (também conhecida como placa de interface de rede ou NIC) para se conectar fisicamente à rede.
    
5. Servidor de arquivos (opcional): Se você deseja compartilhar arquivos e recursos centralmente, pode ser necessário um servidor de arquivos dedicado. Isso ajudará a simplificar o armazenamento e o gerenciamento de dados compartilhados.
    
6. Firewall: Para proteger a rede contra ameaças externas, um firewall é recomendado. Ele ajudará a controlar o tráfego de rede e a garantir que apenas dados seguros passem para a rede.
    
7. Impressora de rede (opcional): Se houver necessidade de compartilhar uma impressora entre os computadores da rede, uma impressora de rede pode ser necessária. Ela pode ser conectada diretamente ao switch ou ao roteador.
    
8. Servidor DHCP (opcional): Um servidor DHCP é útil para atribuir automaticamente endereços IP aos computadores da rede, facilitando a configuração e a administração da rede.
    
9. Cabos de alimentação e tomadas: Certifique-se de ter cabos de alimentação suficientes para os computadores, switch, roteador e outros dispositivos da rede. Verifique também se há tomadas elétricas adequadas disponíveis para conectar todos os equipamentos.
    
10. Rack (opcional): Caso a rede seja em escala maior ou para uma melhor organização dos equipamentos, pode ser útil ter um rack para acomodar o switch, servidor, roteador e outros dispositivos em um espaço dedicado.

A arquitetura tradicional e o modelo SaaS (Software as a Service) são duas abordagens diferentes para o desenvolvimento, entrega e uso de software. O uso de marketplace pode estar presente em ambos os modelos, embora sua implementação possa variar. A seguir, destacarei as diferenças entre a arquitetura tradicional e o modelo SaaS, além de discutir o uso do marketplace em cada um deles:

Arquitetura Tradicional:

1. Implantação local: Na arquitetura tradicional, o software é instalado e executado localmente nos servidores ou dispositivos dos usuários.
2. Manutenção e atualizações: Os usuários são responsáveis por gerenciar e manter o software, incluindo atualizações, correções de bugs e infraestrutura subjacente.
3. Licenciamento: Normalmente, o software tradicional é adquirido mediante compra de licenças de uso ou através de contratos de licenciamento.
4. Personalização: É possível personalizar e adaptar o software de acordo com as necessidades específicas da empresa, mas isso pode exigir recursos adicionais.
5. Escalabilidade: A escalabilidade depende da capacidade de infraestrutura interna da empresa, que pode exigir investimentos em hardware e recursos técnicos.

Modelo SaaS:

1. Acesso via navegador: No modelo SaaS, o software é acessado por meio de um navegador da web, não sendo necessário instalar nada localmente.
2. Manutenção e atualizações: A empresa provedora do SaaS é responsável pela manutenção, atualizações e correções do software, liberando os usuários dessas tarefas.
3. Assinatura ou pagamento por uso: No modelo SaaS, os usuários geralmente pagam uma assinatura mensal ou um valor baseado no uso do software.
4. Configuração personalizada: Embora nem sempre seja possível personalizar completamente o software SaaS, muitas vezes é possível configurar e adaptar certos aspectos para atender às necessidades específicas.
5. Escalabilidade facilitada: O modelo SaaS geralmente oferece uma infraestrutura escalável, permitindo que as empresas expandam ou reduzam o uso do software de acordo com suas necessidades.

Uso do Marketplace:

- Na arquitetura tradicional, o marketplace pode ser uma plataforma onde os usuários podem encontrar e adquirir software de terceiros para uso em seus ambientes locais. O marketplace pode oferecer uma variedade de aplicativos e soluções complementares.
- No modelo SaaS, o marketplace pode ser uma plataforma onde os usuários podem encontrar e adquirir diferentes serviços SaaS de provedores terceirizados. Isso permite que as empresas acessem uma variedade de aplicativos e serviços, integrando-os facilmente em seu ambiente de trabalho.

Em resumo, a arquitetura tradicional envolve a implantação local e gerenciamento do software pelos próprios usuários, enquanto o modelo SaaS oferece acesso baseado em assinatura a software hospedado na nuvem, com manutenção e atualizações realizadas pelo provedor do serviço. O uso do marketplace pode ser benéfico em ambos os casos, fornecendo uma ampla gama de opções de software e serviços adicionais para atender às necessidades dos usuários.


