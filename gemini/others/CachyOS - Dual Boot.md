Sim, é perfeitamente possível e, na verdade, é o **cenário ideal para testes**.

Instalar o Linux em um disco físico separado (no seu caso, o HD comum) mantém o Windows no SSD intacto e isolado. Isso evita que uma atualização do Windows quebre o "bootloader" do Linux e vice-versa.

Como o CachyOS é baseado no Arch Linux (focado em performance), ele é excelente mas exige atenção na instalação.

Aqui está o passo a passo detalhado para fazer esse **Dual Boot em discos separados**:

---

### Fase 1: Preparação no Windows (Crucial)

Antes de qualquer coisa, faça isso para evitar dores de cabeça:

1. **Backup:** Salve arquivos importantes que estejam no HD comum (pois ele será formatado) e, por segurança, faça backup do SSD também.
    
2. **Desativar o "Fast Boot" (Inicialização Rápida):**
    
    - O Windows "hiberna" o disco ao desligar, o que impede o Linux de ler/escrever nas partições corretamente.
        
    - _Como fazer:_ Painel de Controle -> Hardware e Sons -> Opções de Energia -> Escolher a função dos botões de energia -> Clique em "Alterar configurações não disponíveis no momento" -> **Desmarque** "Ligar inicialização rápida".
        
3. **Libere o HD:** Certifique-se de que não há nada no HD secundário que você precise. A instalação mais fácil vai apagar esse disco inteiro.
    

### Fase 2: Criar o Pen Drive Bootável

1. **Baixe a ISO:** Vá ao site oficial do CachyOS e baixe a versão "Desktop Edition" (geralmente KDE Plasma ou GNOME).
    
2. **Baixe o BalenaEtcher ou Rufus:**
    
    - Se usar **Rufus**: Selecione a ISO e escolha o esquema de partição **GPT** (para UEFI).
        
3. **Grave a ISO** no pen drive.
    

### Fase 3: Configuração da BIOS/UEFI

1. Reinicie o notebook e entre na BIOS (geralmente F2, Del ou F10).
    
2. **Secure Boot:** Procure por "Secure Boot" e deixe como **Disabled** (Desativado). O CachyOS (e Arch em geral) funciona melhor sem isso ativado durante a instalação.
    
3. **Boot Order:** Coloque o Pen Drive como prioridade #1.
    

### Fase 4: A Instalação do CachyOS (O momento da verdade)

O CachyOS usa um instalador gráfico (chamado Calamares), o que facilita muito.

1. Dê boot pelo Pen Drive. Selecione "Boot CachyOS".
    
2. Conecte-se ao Wi-Fi se necessário.
    
3. Abra o instalador "Install CachyOS".
    
4. Siga as etapas básicas (Língua, Fuso Horário, Teclado).
    
5. **A ETAPA CRÍTICA: Particionamento**
    
    - O instalador vai perguntar onde você quer instalar. No topo, haverá um menu suspenso para **Selecionar o Dispositivo de Armazenamento**.
        
    - **ATENÇÃO:** Identifique seus discos pelo tamanho.
        
        - O SSD (Windows) geralmente é menor ou tem marca diferente.
            
        - O HD Comum é onde você quer instalar. **Selecione o HD Comum.**
            
    - Escolha a opção **"Apagar Disco" (Erase Disk)**. Isso criará automaticamente as partições necessárias no HD, sem tocar no SSD do Windows.
        
    - _File System:_ O CachyOS sugere **BTRFS** ou **XFS**. Para iniciantes e performance, BTRFS é o padrão moderno (permite snapshots fáceis caso algo quebre).
        
6. **Bootloader (Gerenciador de Inicialização):**
    
    - O CachyOS costuma oferecer **systemd-boot** ou **GRUB**.
        
    - Se você escolher **GRUB**, ele tem mais chances de detectar o Windows no outro disco automaticamente (`os-prober`).
        
    - Se escolher **systemd-boot** (padrão do Cachy por ser mais rápido), talvez ele não mostre o Windows de primeira no menu, e você terá que usar a tecla de Boot da BIOS (F12/F11) para escolher entrar no Windows. _Recomendo GRUB se você quer um menu prático logo de cara._
        
7. Finalize a instalação e reinicie.
    

### Fase 5: O Pós-Instalação (Gerenciando o Boot)

Ao reiniciar, remova o pen drive.

Cenário A: O PC entrou direto no CachyOS

Ótimo. Para voltar ao Windows, reinicie e fique apertando a tecla de Boot Menu do seu notebook (geralmente F12, F11 ou F8) e selecione o "Windows Boot Manager".

Cenário B: O PC entrou direto no Windows

Reinicie, entre na BIOS e mude a ordem de Boot (Boot Priority). Coloque o disco do CachyOS (ou a entrada "Linux Boot Manager" / "CachyOS") acima do "Windows Boot Manager".

---

### Resumo das Vantagens dessa abordagem:

- **Segurança:** Se você se arrepender, basta formatar o HD secundário e o Windows no SSD continua intocado.
    
- **Performance:** O CachyOS vai rodar nativamente, aproveitando todo o hardware (diferente de uma Máquina Virtual).
    

**Dica Extra:** O CachyOS vai detectar sua arquitetura de CPU (v3 ou v4) e instalar pacotes ultra-otimizados. É normal que ele pareça muito mais rápido que o Windows nesse notebook.

Gostaria de ajuda para configurar o ambiente de desenvolvimento (Docker, VSCode, etc) assim que o sistema subir?