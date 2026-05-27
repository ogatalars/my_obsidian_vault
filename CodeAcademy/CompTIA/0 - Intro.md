Aqui está a tradução completa do transcript estruturada para estudo, com os conceitos mais importantes e os termos fundamentais para a prova **CompTIA Security+** destacados em negrito.

## Objetivos e Controles de Segurança

Neste curso, aprenderemos sobre confidencialidade, integridade, disponibilidade e não-repúdio. Exploraremos autenticação, autorização e auditoria (AAA). Descreveremos as categorias de controle e definiremos os tipos de controle.

### A Tríade CIA (Confidencialidade, Integridade e Disponibilidade)

Nesta primeira lição, examinaremos a **Tríade CIA**, que significa **Confidencialidade (Confidentiality), Integridade (Integrity) e Disponibilidade (Availability)**.

- **Confidencialidade:** Mede a capacidade de impedir que um atacante obtenha acesso não autorizado a dados ou informações. Envolve o uso de técnicas, **frequentemente a criptografia**, para permitir que apenas sujeitos ou entidades aprovadas visualizem a informação. A confidencialidade inclui preservar restrições autorizadas no acesso e na divulgação de dados em três estados: **dados em trânsito (in transit), dados em repouso (at rest) e dados em uso (in use)**.
    
    - _Exemplos de confidencialidade:_ Uso de **VPN IPsec**; uso de **mTLS (Transport Layer Security mútuo)** entre o navegador e o servidor; armazenamento de credenciais em partições seguras de dispositivos móveis (**Secure Enclave**); e implementação de **criptografia AES** em dados em repouso (arquivos, bancos de dados).
        
- **Integridade:** Envolve a proteção contra a modificação imprópria ou destruição da informação. É a propriedade de que os dados **não foram alterados ou danificados de forma não autorizada**. Ela reflete a correção lógica do sistema operacional, a completude do hardware/software e a consistência das estruturas de dados.
    
    - _Exemplos de integridade:_ Um sistema operacional realizando um **checksum matemático** quando um arquivo é copiado; uma verificação de sequência de quadro (**Frame Check Sequence**) em um quadro Ethernet; um **HMAC (Hashed Message Authentication Code)** aplicado a comunicações entre roteadores; ou a implementação de modelos de acesso obrigatórios como **Biba ou Clark-Wilson**.
        
- **Disponibilidade:** É o processo de garantir o **acesso oportuno e confiável** aos dados e sistemas por usuários autorizados. A **Alta Disponibilidade (High Availability)** é um recurso de **failover** para garantir o funcionamento durante interrupções planejadas ou não.
    
    - _Exemplos de disponibilidade:_ Implementar controles contra ataques de **spoofing, flooding, DoS/DDoS (Negação de Serviço) e envenenamento (poisoning)**. Vulnerabilidades de disponibilidade afetam hardware, software e rede (como consumo excessivo de CPU, memória ou largura de banda). Também inclui garantir que firewalls, sensores IPS e antivírus estejam implantados em **clusters ou grupos de failover**, além de planejar locais de recuperação de desastres (**warm sites ou DRP em nuvem**).
        

### Não-Repúdio (Non-repudiation)

O **não-repúdio** é a **incapacidade de um sujeito ou entidade negar que participou de uma transação digital**, acordo, contrato ou comunicação (como um e-mail). É a impossibilidade de refutar a responsabilidade.

- _Como é feito:_ Em tecnologia da informação, o não-repúdio é alcançado através de um **sistema de criptografia de chave pública/privada e certificados assinados digitalmente**.
    
- _Exemplo:_ Em um internet banking, o remetente não pode dizer "eu não enviei essa transferência", porque **sua chave privada foi usada para assinar o hash criptográfico** daquela transação.
    

### O Modelo AAA (Autenticação, Autorização e Auditoria)

Historicamente, para verificar quando usuários ou sistemas acessam recursos, usamos o **AAA**:

1. **Autenticação (Authentication):** O processo de **validar se uma entidade é quem ela alega ser** (autenticação de origem).
    
2. **Autorização (Authorization):** O processo de **conceder permissão** a uma entidade autenticada para acessar um recurso ou função específica.
    
3. **Auditoria/Contabilidade (Accounting):** O registro de **quando a entidade começou, quando terminou e o que ela fez** durante o período.
    

#### Modo Caractere vs. Modo Pacote

- **Modo Caractere (Character mode):** Envia comandos e caracteres diretamente para um dispositivo (como um roteador periférico ou firewall) para fins de **configuração ou administração do próprio dispositivo**.
    
- **Modo Pacote (Packet/Network mode):** Ocorre quando o dispositivo de rede atua como um **proxy de autenticação** em nome de serviços em outras redes ou VLANs (servidores web, FTP, DNS). O dispositivo recebe o pacote, realiza o AAA (localmente ou enviando para um servidor centralizado) e, se autorizado, encaminha o pacote para a zona de destino.
    

> 💡 **Nota sobre arquitetura:** Clientes historicamente iniciavam o _TCP three-way handshake_ antes da autenticação. Hoje, isso é considerado abaixo do ideal e uma **violação dos princípios de Zero Trust**. No Zero Trust, **a autenticação e a autorização devem ocorrer antes** que a conexão seja estabelecida.

- O **RADIUS** é um dos serviços AAA baseados em padrões IETF mais populares, conhecido por sua excelente capacidade de _accounting_ (auditoria). O **DIAMETER** é a próxima geração do RADIUS.
    

### Autenticação de Pessoas e Dispositivos

#### Autenticação de Pessoas

Confirmar a identidade de um indivíduo. O fator mais comum ainda é o nome de usuário/e-mail com senha, mas hoje **sempre deve ser adicionado outro fator robusto (MFA)**. Os métodos comuns incluem:

- Algo que você **sabe** (senha, PIN, frase secreta).
    
- Algo que você **possui** (tokens inteligentes, **YubiKey**, fob USB, certificado digital X.509 v3).
    
- Algo que você **é / atributo biométrico** (impressão digital, escaneamento de íris/retina).
    
- Códigos dinâmicos (QR codes apresentados em dispositivos móveis).
    

#### Autenticação de Dispositivos e Sistemas (NPEs)

Sujeitos que não são humanos são chamados de **Entidades Não-Personificadas (Non-Person Entities - NPEs)**, como laptops, gateways, balanceadores de carga, sistemas robóticos e dispositivos IoT.

- **Endpoint Fingerprinting (Impressão digital de endpoint):** Termo importante para a prova. É uma forma de permitir a autenticação de dispositivos de rede não tradicionais, como leitores de cartão inteligente, sistemas de climatização (HVAC), equipamentos médicos e fechaduras IP.
    
- _Métodos de autenticação de dispositivos:_ Chaves secretas compartilhadas; certificados de dispositivo X.509 v3; credenciais armazenadas a nível de hardware em um **TPM (Trusted Platform Module)** que faz parte de um **TEE (Trusted Execution Environment)**; ou chaves em um **HSM (Hardware Security Module)**.
    

### Modelos de Autorização

- **DAC (Discretionary Access Control - Controle de Acesso Discricionário):** Concede as decisões de controle de acesso aos **donos dos recursos**. O proprietário pode conceder ou revogar permissões para outros usuários. Oferece flexibilidade, mas é **o modelo mais propenso ao "privilege creep" (acúmulo de privilégios)** se não houver automação e visibilidade.
    
- **RBAC (Role-Based Access Control - Controle de Acesso Baseado em Funções/Papéis):** Garante acesso com base em um **cargo ou função predefinida** (ex: médico, enfermeiro, administrador de banco de dados). Os usuários herdam as permissões associadas aos seus papéis, o que torna a administração escalável.
    
- **MAC (Mandatory Access Control - Controle de Acesso Obrigatório):** É o modelo **mais estrito**. Baseia-se em **rótulos de segurança e regras matemáticas**. Os usuários possuem níveis de autorização (ex: _Top Secret, Secret_) e os objetos possuem rótulos de sensibilidade. É um modelo **não-discricionário** (o usuário não pode alterar permissões por conta própria; não existe um "dono", tudo é definido pelo sistema).
    
- **ABAC (Attribute-Based Access Control - Controle de Acesso Baseado em Atributos):** Concede acesso combinando características do usuário (cargo), do recurso (classificação) e **condições ambientais (horário de acesso, localização, uso de VPN)**.
    
- **ABDAC (Attribute-Based Dynamic Access Control):** Combina o ABAC com dinamismo em tempo real. Avalia avaliações de risco e informações contextuais através de árvores de decisão automatizadas. É o modelo ideal para ambientes **Zero Trust** e pode incluir técnicas de Machine Learning, como o **UBA (User Behavioral Analytics - Análise de Comportamento do Usuário)**.
    
- **Controle de Acesso Baseado em Regras (Rule-Based):** Utiliza regras e critérios estritos (geralmente baseados em localização, endereços IP, serviços e números de portas). O exemplo clássico são as **ACLs (Access Control Lists) de firewalls**, que comparam metadados de rede de forma sequencial (começando da regra 100, 105, 110...) e aplicam a decisão de permitir ou negar no primeiro _match_.
    

### Categorias de Controles de Segurança

Devem ser memorizadas para o exame:

- **Técnicos (Technical):** Mecanismos executados pelos sistemas (manuais ou automatizados). Exemplos: endurecimento de dispositivos (_device hardening_), gerenciamento de identidades (IAM), gerenciamento de chaves criptográficas (HSMs), ferramentas de modelagem de ameaças e sistemas **SIEM e SOAR**.
    
- **Gerenciais / Administrativos (Managerial):** Definem políticas, procedimentos operacionais padrão (SOPs), diretrizes de governança e práticas recomendadas. Exemplos: políticas de senhas, políticas de uso aceitável de mídias sociais, triagem de contratação/demissão, **férias obrigatórias** e programas de conscientização e treinamento.
    
- **Operacionais (Operational):** Apoiam a manutenção contínua e a melhoria contínua (_due care_). Exemplos: gerenciamento de mudanças, **gerenciamento de patches testados**, realização de simulados de resposta a incidentes e planos de desastres, além do gerenciamento contínuo de dispositivos móveis (MDM).
    
- **Físicos (Physical):** Introduzidos para proteger o espaço físico, instalações e pessoas. Exemplos: barreiras, guardas, câmeras, fechaduras, cofres, **clausuras (mantraps), gaiolas de Faraday** e sistemas de supressão de incêndio.
    

### Tipos de Controles de Segurança

Existem seis tipos principais que modificam ou gerenciam as ações de segurança:

1. **Preventivos (Preventative):** Impedem que um ataque ou uma ameaça persistente avançada (APT) tenha sucesso. Exemplos: cercas, portões e fechaduras.
    
2. **Dissuasivos (Deterrent):** Desestimulam o atacante de iniciar ou continuar um ataque. Exemplos: **placas de aviso, barreiras físicas (bollards)**, adesivos em janelas ou a presença visível de um guarda.
    
3. **Detectivos (Detective):** Identificam um ataque que está ocorrendo ou as etapas de um _kill chain_. Exemplos: **sensores IDS/IPS** ou sistemas de monitoramento por câmeras.
    
4. **Corretivos (Corrective):** Restauram o sistema ao estado anterior ao evento negativo (**Recovery Point Objective - RPO**). Exemplo: **reinstalar a imagem de uma máquina e recuperar dados de um backup** após um ataque de ransomware.
    
5. **Compensatórios (Compensating):** Auxiliam controles já existentes ou servem como uma **solução temporária de contingência** até que uma solução completa possa ser financiada. Exemplo: implantar um sistema de proteção de endpoint avançado (como o Palo Alto Cortex XDR) temporariamente.
    
6. **Diretivos (Directive):** Políticas e regulamentos **obrigatórios** implementados para manter a consistência e a conformidade. Exemplo: regras explícitas sobre como um funcionário pode utilizar o celular corporativo ou o veículo da empresa.