*"O sistema operacional funciona como um conjunto de processos que inicializa o hardware, fornecendo as rotinas básicas para o controle dos dispositivos. Além disso, gerencia, escalona, faz a interação de tarefas e mantém a integridade do sistema."*

**Processo** Os programas de computador são executados pelo processador, que tem uma arquitetura interna composta de registradores, contadores de programa, ponteiro para pilha, unidade lógica aritmética e a unidade de processamento. Assim, um primeiro conceito muito importante seria **o processo, que nesse contexto significa um programa em execução**
Processador = CPU

Associado a cada processo está o espaço de endereçamento, uma lista de posições de memória que vai de 0 a algum máximo, onde o processo pode ler e escrever. O espaço de endereçamento contém o programa executável, os dados do programa e sua pilha.

Os processos de um sistema operacional possuem três estados: em execução, pronto e bloqueado.

As transições entre os estados podem ser: 
1. O processo bloqueado enquanto aguarda a uma entrada de dispositivos de E/S (entrada/saída). 
2. O escalador de processos seleciona outro processo. 
3. O escalador de processos seleciona esse processo. 
4. A entrada torna-se disponível

A transição 1 ocorre quando um processo que está em execução não pode continuar, por exemplo, quando um recurso necessário não está disponível. As transições 2 e 3 são causadas pelo escalador de processos, sendo que na transição 2 o processo que está sendo executado já teve tempo suficiente de CPU e, mesmo ainda não tendo terminado, o escalador decide deixar que outro processo comece a utilizar a CPU. A transição 3 ocorre quando o escalador define que o processo volte a ser executado pela CPU. Já a transição 4 se dá com a ocorrência de um evento externo que era esperado pelo processo. Observe que a transição 4 não coloca o processo direto em modo de execução devido à possibilidade de que um outro processo esteja em execução.

*"Os sistemas operacionais e os programas de gerenciamento das atividades de rede são interfaces de software que ligam o hardware às redes de computadores e aos programas de aplicação dos usuários. Por exemplo: um computador possui um hardware de placa de rede, que é responsável pela interligação entre a placa motherboard (onde está o processador) e o conector e o cabo de redes, e para isso possui um sistema de endereçamento que é atribuído por software. O sistema operacional de rede, através desse “endereço”, enviará os dados corretamente."*

Para o funcionamento de um computador, é necessário um sistema que garanta aos usuários a utilização dos recursos de hardware por meio de aplicativos (por exemplo: processadores de texto, planilhas, jogos, etc.). O sistema que faz essa conexão é chamado de sistema operacional. Quando um programa de usuário acessa um recurso de hardware, ele não precisa enviar mensagens específicas ao dispositivo, mas ao sistema operacional, que as encaminhará por meio de um driver2 de comunicação. Essa característica facilita muito aos programadores de aplicativos, que não precisam saber como se comunicar com os periféricos e deixam essa atividade para o software do driver, disponibilizado pelo sistema operacional.

**Os softwares de sistema são organizados em duas categorias:** 
**Programa de gerenciamento do sistema:** é responsável pelo gerenciamento dos recursos de hardware, software, rede e pelos dados necessários para que as tarefas dos usuários sejam executadas. Exemplos: o sistema operacional, utilitários do sistema, gerenciamento de banco de dados e gerenciamento de rede.
**Programa de desenvolvimento do sistema:**  programas que possibilitam ao usuário o desenvolvimento de programas para o processamento das informações. ◦ Exemplos: editores das linguagens de programação e ferramentas de programação da engenharia de software, que auxiliam no projeto dos aplicativos que serão utilizados pelos usuários

*"Na camada mais baixa estão os dispositivos de hardware como: circuitos integrados, fonte de energia, barramentos de comunicação, placas de vídeo, placas de rede, processadores, etc. Esses dispositivos são acessados por meio de um conjunto de instruções que é interpretado pela camada de microprogramação. A camada do sistema operacional recebe as informações das aplicações dos usuários, que são compiladas ou interpretadas por programas que facilitam o acesso das aplicações aos recursos de hardware. Dessa forma, os programas de usuários podem ser desenvolvidos sem a preocupação, por exemplo, de como os dados da memória são transferidos para o disco rígido, em qual trilha do disco serão gravados; ou, ainda, como será a movimentação da cabeça de gravação. Tudo isso é realizado pelo sistema operacional. Acima da camada do sistema operacional existem outras funções como compiladores, editores e interpretadores de comando que auxiliam as aplicações a utilizar o sistema operacional. E, na camada mais alta, estão as aplicações dos usuários, desenvolvidas para resolver problemas específicos, como escrever um texto, processar imagens, aplicações comerciais, etc."*

"A principal finalidade do sistema operacional é maximizar a produtividade do sistema de um computador, operando-o com a máxima eficácia. O sistema operacional minimiza o nível de intervenção humana necessário durante o processamento. Ele ajuda os programas de aplicação a executar operações comuns, como acessar a rede, inserir dados, salvar e recuperar arquivos e imprimir ou exibir uma saída."

#### Componentes de um sistema operacional
O sistema operacional possui softwares que administram as relações com o hardware de um computador e é escrito com várias linhas de instruções. Para facilitar o desenvolvimento, esses softwares são construídos em módulos, que ficam responsáveis por uma determinada função.


KERNEL (NÚCLEO) 
• Núcleo do sistema operacional
• Permanece residente na memória do computador
• Gerencia os processos e a memória
• Efetua o escalonamento das tarefas
• Executa a comunicação entre os processos
• Processa as execuções e interrupções

SHELL (AMBIENTE OPERACIONAL)
• Conhecido como o ambiente operacional –
“interpretador de comandos”
• Assume o controle do programa
• Recebe as solicitações dos usuários
• Interpreta as solicitações dos usuários
• Atua sobre as execuções dos usuários

O kernel é o núcleo do sistema operacional e responsável pela execução dos processos, sendo a parte mais interna do sistema operacional. O kernel tem a função de iniciar o sistema e fazer a gerência dos recursos. Por exemplo, a memória, o processador e o dispositivo de armazenamento precisam de controle para que possam ser utilizados por diversos programas. Assim, a função do kernel é gerenciar e alocar os recursos necessários de processador, memória e o espaço em disco a serem disponibilizados para o programa e só então iniciar o processo.

Os processos executam várias funções básicas, e será de responsabilidade do kernel responder às solicitações com um conjunto de instruções para que os programas possam funcionar adequadamente

#### Funcionamento do sistema operacional 
"*qualquer sistema operacional executa cinco funções básicas na operação do sistema de um computador: serve como interface do usuário, gerenciador de recursos, gerenciador de tarefas, gerenciador de arquivos e utilitários, além de oferecer serviços de suporte.*"

Funções do sistema operacional 
- Interface do usuário Comunicação de rede e sistema com o usuário final
- Gerenciamento de recursos Gerencia o uso dos recursos do hardware
- Gerenciamento de tarefas Gerencia a execução das tarefas
- Gerenciamento de arquivos Gerencia arquivos de dados e os programas
- Gerenciamento de suporte Gerencia vários serviços de apoio

A interface do usuário é a parte do sistema operacional que faz a comunicação com o usuário e permite que ele possa carregar os programas, acessar os arquivos e realizar diversas tarefas. Existem três tipos de interface de usuário: a orientada a comandos, a orientada a menus e a interface gráfica. Atualmente, a maioria dos sistemas operacionais utiliza a interface gráfica para facilitar o uso dos computadores pelos usuários. A partir dessa interface, o sistema operacional realiza o gerenciamento das tarefas dos usuários e determina quando e quais tarefas são executadas pela CPU, tais como: o gerenciamento dos arquivos, o controle da criação e a exclusão de arquivos de programas, dados e o acesso a eles. Identifica a posição física dos arquivos nos dispositivos de armazenamento e gerencia os recursos de hardware do computador (CPU, memória, dispositivos de armazenamento, placas de rede e diversos dispositivos de entrada e saída). Além disso, o sistema operacional é responsável por diversos serviços de suporte que são parte de todas as atividades apoiando as aplicações dos usuários e fornecendo um ambiente mais produtivo.

Os sistemas operacionais têm por função proporcionar uma interface para que o usuário possa se comunicar com o computador. Isso pode ser feito, por exemplo, por meio dos dispositivos de entrada, como o teclado e o mouse. Para que o computador possa se comunicar com o usuário, as informações podem ser apresentadas no monitor de vídeo ou na impressora, que são os dispositivos de saída. Os dados processados pela CPU são armazenados durante a execução do programa na memória RAM (Random-access Memory) e depois transferidos para armazenamento em discos rígidos ou DVD.