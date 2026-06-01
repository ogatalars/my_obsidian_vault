Aqui está a transcrição do conteúdo para o português:

### Conceitos Fundamentais de Segurança

Neste curso, aprenderemos sobre análise de lacunas (gap analysis), definiremos iniciativas de "Zero Trust", exploraremos tecnologias de decepção, examinaremos controles físicos preventivos e detectivos, analisaremos processos de negócios e técnicos de gestão de mudanças e descreveremos documentação e controle de versão.

#### Análise de Lacunas (Gap Analysis)

O termo "análise de lacunas" pode ser aplicado a muitas coisas diferentes; significa simplesmente a diferença entre um estado inicial e outro estado subsequente. Aqui, estamos falando de análise de lacunas no contexto da segurança. Para saber onde você está e para onde precisa ir como uma organização segura, você deve realizar uma análise de lacunas.

Essa técnica será aplicada a vários projetos, planos, programas e iniciativas de segurança ao longo de toda a carreira de um profissional de segurança. A análise de lacunas em segurança da informação é uma avaliação abrangente que ajuda as organizações a determinar a diferença entre o estado atual da segurança da informação e requisitos, orientações e melhores práticas da indústria.

Ao realizar uma análise de lacunas de segurança, entende-se melhor o status dos riscos e vulnerabilidades de cibersegurança na organização. Esse tipo de avaliação de risco indica onde os controles técnicos, físicos, gerenciais e de operação contínua precisam ser implantados. Envolve saber quais são os riscos residuais e quais salvaguardas físicas e lógicas adicionais (se houver) precisam ser adquiridas e implementadas.

Algumas lacunas de segurança comuns seriam: credenciais fracas ou compartilhadas; falta de gerenciamento de patches testado; violação do princípio do privilégio mínimo ou "necessidade de saber"; ausência de políticas de uso aceitável; ou falta de visibilidade e auditoria adequada.

#### Zero Trust (ZT)

Zero Trust é o termo para um conjunto evolutivo de iniciativas de cibersegurança que move as defesas de perímetros estáticos baseados em rede (por exemplo, sub-redes ou endereços IP) para focar em usuários, ativos e recursos como o perímetro. O Zero Trust assume que não há confiança implícita concedida a ativos ou contas de usuário baseada apenas na localização física/rede ou na propriedade do ativo.

- **Identidade Adaptativa:** Também chamada de autenticação adaptativa ou baseada em risco. É um método de acesso a dados que combina as credenciais do usuário com o risco da autorização solicitada (por exemplo, acessar dados sensíveis versus dados públicos da intranet).
    
- **Plano de Controle ZT:** É separado do plano de dados e contém o Ponto de Decisão de Política (PDP), que inclui:
    
    - **Mecanismo de Política (PE):** Usa controles de acesso orientados por políticas para conceder, negar ou revogar acesso.
        
    - **Administrador de Política (PA):** Ativa ou desativa o caminho de comunicação entre um sujeito e um recurso via comandos para os Pontos de Execução de Política (PEPs).
        

O plano de dados ZT é definido por zonas de confiança explícitas (centros de dados, internet pública, nuvem, etc.). Os PEPs podem ser de rede (roteadores, firewalls, gateways SDP) ou de aplicação (gateways de API, repositórios de código).

#### Tecnologias de Decepção

- **Honeypot:** Um sistema único (ex: servidor web, FTP) projetado para ser atraente a invasores. Funcionam como "isca". Frequentemente rodam como máquinas virtuais.
    
- **Honeynet:** Uma "rede de honeypots". Configurada com vulnerabilidades intencionais para atrair, redirecionar e atrasar atacantes, permitindo que as equipes de segurança analisem metodologias de ataque.
    
- **Honey Files/Tokens:** Arquivos ou artefatos estrategicamente colocados para atrair suspeitos (ex: chaves de acesso falsas). São usados para detectar intrusos que já estão dentro da rede (movimentação lateral).
    

#### Controles Físicos de Segurança

Antes dos controles técnicos, é preciso garantir a segurança do ambiente físico:

- **Barreiras e Cercas:** Deter ou impedir entrada/saída não autorizada.
    
- **Bollards (Pilares):** Pylons estrategicamente posicionados para redirecionar pedestres ou proibir veículos.
    
- **Vestíbulos de Controle de Acesso (Mantrap):** Áreas fortificadas com pelo menos duas portas intertravadas. Apenas uma porta abre por vez, impedindo que mais de uma pessoa passe (anti-piggybacking/tailgating).
    
- **Seguranças:** Controles detectivos, dissuasórios e preventivos. Devem ser treinados e licenciados.
    
- **Vigilância por Vídeo:** Monitora o perímetro. Dispositivos podem incluir camuflagem industrial.
    
- **Sensores:** Fotoelétricos (feixe de luz), infravermelho passivo, vibração, acústicos, micro-ondas, eletromecânicos, eletrostáticos, umidade e temperatura.
    

#### Gestão de Mudanças (Change Management - CM)

É a abordagem metódica para lidar com a transição ou modificação de metas, processos, configurações ou tecnologias.

1. **Ciclo de Vida:** Submissão -> Aprovação -> Documentação e Testes -> Implementação -> Relatório pós-ação.
    
2. **Processos:** Envolve definir quem é responsável (RACI), análise de impacto da mudança, plano de rollback (recuperação) e janelas de manutenção.
    
3. **Considerações Técnicas:** Listas de permissão/negação, privilégio mínimo, separação de funções, alta disponibilidade e compatibilidade com aplicações legadas.
    

#### Documentação e Controle de Versão

As organizações devem documentar usando esquemas de etiquetagem que mapeiem para um banco de dados de gerenciamento de configuração (CMDB). O controle de versão é crítico tanto para a equipe de operações quanto para a de segurança, aplicando-se a builds de sistema operacional, atualizações de aplicativos, drivers de dispositivos, upgrades, patches, pacotes de contêineres e código em geral.