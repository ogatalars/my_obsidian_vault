

### Introdução: Dando Ordens vs. Descrevendo um Desejo

Imagine que seus contêineres são músicos talentosos e o Kubernetes é o Maestro de uma grande orquestra. **Crucialmente, o Maestro não toca nenhum instrumento,** mas seu papel é garantir que todos os músicos toquem em harmonia, na hora certa e no volume certo. Se um músico desmaiar (um contêiner travar), o Maestro rapidamente o substitui sem que o público perceba a falha.

Nessa orquestra, você, como engenheiro, pode interagir com o Maestro de duas formas:

1. **Dar uma ordem direta:** "Violino, toque a nota Dó agora!"
2. **Descrever um desejo:** "Maestro, meu desejo é que a melodia desta seção da sinfonia seja sempre esta sequência de notas, tocada continuamente."

A primeira abordagem é como o comando `kubectl create`: uma instrução imperativa, específica e única. A segunda é como `kubectl apply`: uma declaração de um estado final desejado, que o Maestro (Kubernetes) trabalhará incansavelmente para manter.

Este guia foi projetado para desmistificar esses dois comandos. Entender a diferença entre eles é mais do que um detalhe técnico; é sobre adotar a mentalidade de um arquiteto de sistemas que gerencia estados desejados, não apenas um operador que executa comandos. Essa mudança de perspectiva é a base para as práticas modernas de DevOps e GitOps. Para interagir com o nosso Maestro, usamos uma ferramenta principal, a "batuta" do nosso cluster.

--------------------------------------------------------------------------------

### 1. O Básico: O que é `kubectl`?

`kubectl` (pronuncia-se "kube-control") é a ferramenta de linha de comando (CLI) para interagir com o plano de controle de um cluster Kubernetes. É através do `kubectl` que você envia seus "desejos" e "ordens" para a API central do Kubernetes, o `kube-apiserver`, que atua como o ponto de entrada de toda a comunicação.

A melhor maneira de pensar no `kubectl` é como um **"controle remoto"** para o seu cluster. Com ele, você pode executar todas as operações essenciais de criação, leitura, atualização e exclusão (CRUD) nos recursos do cluster, como Pods, Deployments e Services. Ele é a sua principal interface para inspecionar, gerenciar e depurar suas aplicações containerizadas.

Com essa ferramenta em mãos, vamos explorar o primeiro método para dar vida aos nossos recursos: a abordagem imperativa.

--------------------------------------------------------------------------------

### 2. `kubectl create`: O Comando Imperativo (A Ordem Direta)

A abordagem imperativa diz ao Kubernetes exatamente **"o que fazer"**. É uma ordem direta e explícita. Quando você usa `kubectl create`, está instruindo o cluster: "Crie este recurso agora, com estas especificações exatas".

Este comando é usado para criar um recurso **novo** a partir de um arquivo de manifesto (geralmente YAML) ou diretamente pela linha de comando com flags. Sua principal função é a criação inicial de objetos.

O comportamento mais importante e definidor de `kubectl create` é o seguinte: ele **falhará com um erro** se um recurso com o mesmo nome já existir no cluster. Ele não foi projetado para atualizar ou modificar objetos existentes.

Veja um exemplo prático:

```bash
# Tentativa de criar um recurso que já existe
$ kubectl create -f deployment.yaml
Error from server (AlreadyExists): error when creating "deployment.yaml": deployments.apps "my-deployment" already exists
```

_(Como mentor, posso dizer que ver este erro em um pipeline de CI/CD é um sinal claro de que a ferramenta errada está sendo usada para o gerenciamento do ciclo de vida.)_

Apesar de suas limitações, `kubectl create` é útil em cenários específicos:

- **Recursos de uso único ou temporários:** Ideal para criar rapidamente um pod de depuração que será descartado após o uso.
- **Certeza da inexistência:** Quando você está em um ambiente limpo ou tem certeza absoluta de que o recurso não foi criado anteriormente.
- **Geração de manifestos:** Uma de suas aplicações mais poderosas é gerar um esqueleto de arquivo YAML usando a flag `--dry-run=client -o yaml`. Isso cria o manifesto na sua tela sem enviá-lo ao cluster, permitindo que você o salve e o modifique.

Essa abordagem direta é ótima para começar. No entanto, o verdadeiro poder do Kubernetes reside em uma estratégia mais flexível e inteligente, que nos permite descrever o futuro em vez de apenas comandar o presente. Vamos conhecer a abordagem declarativa.

--------------------------------------------------------------------------------

### 3. `kubectl apply`: O Comando Declarativo (O Estado Desejado)

A abordagem declarativa muda o foco de "o que fazer" para **"como o cluster deve ser"**. Em vez de dar uma ordem, você descreve o **Estado Desejado** da sua aplicação em um arquivo de manifesto. O Kubernetes, então, assume a responsabilidade de fazer com que o estado atual do cluster corresponda a esse desejo.

Esse processo é orquestrado pelo **Control Loop** (Loop de Controle) do Kubernetes, um mecanismo incansável que observa continuamente o estado do cluster e faz os ajustes necessários para reconciliá-lo com a sua declaração. O comando `kubectl apply` é a sua forma de entregar uma nova "declaração de desejo" a este loop de controle.

Ele funciona da seguinte maneira:

- Se o recurso definido no manifesto **não existir**, ele o cria.
- Se o recurso **já existir**, ele compara a configuração do manifesto com a configuração ativa no cluster e aplica apenas as diferenças (um "patch").

A principal vantagem do `apply` é que ele é **idempotente** (o que significa que executar o mesmo comando várias vezes produz sempre o mesmo resultado, sem efeitos colaterais) e **seguro para atualizações**. Ele preserva alterações feitas diretamente nos objetos do cluster (por exemplo, um escalonamento manual com `kubectl scale`) se essas mudanças não estiverem especificadas no seu novo manifesto. Isso evita a perda de estado e torna as operações de atualização previsíveis e não disruptivas.

`kubectl apply` é a prática recomendada para quase todos os cenários de gerenciamento de recursos:

- **Gerenciamento do ciclo de vida de aplicações:** Essencial para ambientes de desenvolvimento, teste e, principalmente, produção.
- **Integração com GitOps e CI/CD:** É a base dos fluxos de trabalho de automação, pois permite que a "fonte da verdade" (seu repositório Git) seja declarada e o `apply` atue como o motor de reconciliação que sincroniza o cluster com essa verdade.
- **Atualizações e rollbacks:** Permite realizar atualizações de versão e reverter para configurações anteriores de forma controlada e segura.

Agora que entendemos a teoria, vamos colocar os dois comandos lado a lado em um cenário do mundo real.

--------------------------------------------------------------------------------

### 4. `apply` vs. `create`: A Diferença em um Cenário Prático

Para resumir, aqui está uma comparação direta das características de cada comando.

|   |   |   |
|---|---|---|
|Característica|`kubectl create`|`kubectl apply`|
|**Filosofia**|Imperativa ("Faça isto")|Declarativa ("O cluster deve ser assim")|
|**Ação Principal**|Apenas cria novos recursos|Cria ou atualiza recursos existentes|
|**Se o Recurso Existe**|Falha com um erro|Compara e aplica as diferenças|
|**Gerenciamento de Estado**|Não preserva alterações externas|Preserva alterações externas (ex: `scale`)|
|**Caso de Uso Principal**|Tarefas únicas e criação inicial|Gerenciamento de ciclo de vida e produção|

#### Cenário de Exemplo: Atualizando uma Aplicação

Vamos simular um fluxo de trabalho comum para ver a diferença em ação.

- **Passo 1: Criar o Deployment inicial**
- Temos um arquivo `deployment.yaml` que define um `Deployment` com 2 réplicas (cópias) do nosso pod.
- Executamos `apply` pela primeira vez. Como o recurso não existe, ele é criado.
- **Passo 2: Modificar o Estado Desejado**
- Agora, decidimos que precisamos de mais capacidade. Editamos o arquivo `deployment.yaml` para aumentar o número de réplicas para 3.
- **Passo 3: Aplicar a Atualização**
- Executamos o mesmo comando `apply` novamente.
- A saída `configured` indica que o `apply` encontrou o `Deployment` existente e o atualizou para corresponder ao novo estado desejado. O Kubernetes agora garantirá que 3 réplicas estejam rodando.
- **O que aconteceria com** `**kubectl create**`**?** No Passo 3, se tivéssemos tentado usar `kubectl create -f deployment.yaml`, o comando teria falhado com o erro `AlreadyExists`. Isso demonstra por que `create` não é adequado para gerenciar o ciclo de vida de uma aplicação.

Essa demonstração prática solidifica a principal lição: `apply` é para gerenciar, `create` é para iniciar.

--------------------------------------------------------------------------------

### 5. Resumo: Quando Usar Cada Comando?

Com base no que aprendemos, as diretrizes são claras e diretas.

1. **Use** `**kubectl create**` **para:** tarefas de uso único, como criar um pod de teste que será deletado em breve, ou para gerar o esqueleto de um arquivo de manifesto que será gerenciado posteriormente.
2. **Use** `**kubectl apply**` **para:** **todo o gerenciamento de recursos** em ambientes de desenvolvimento, teste e, especialmente, produção. É o padrão para automação, CI/CD e GitOps.

#### Dica de Profissional (O Fluxo Híbrido)

Um fluxo de trabalho muito comum e eficiente combina o melhor dos dois mundos:

1. **Gere o esqueleto:** Use `kubectl create deployment [nome] --image=[imagem] --dry-run=client -o yaml > meu-app.yaml` para gerar rapidamente a base de um manifesto.
2. **Salve e modifique:** Salve esse arquivo `meu-app.yaml` em um sistema de controle de versão (como o Git) e faça suas customizações.
3. **Gerencie com** `**apply**`**:** A partir de agora, use exclusivamente `kubectl apply -f meu-app.yaml` para criar e atualizar esse recurso.

Dessa forma, você aproveita a velocidade do `create` para a geração inicial e a robustez do `apply` para todo o gerenciamento subsequente.

O domínio dessa distinção é um passo fundamental na sua jornada com Kubernetes.

--------------------------------------------------------------------------------

### Conclusão: De Ordens a Desejos

A jornada para dominar o Kubernetes é cheia de conceitos poderosos, e a distinção entre `create` e `apply` é uma das mais fundamentais. A diferença, em sua essência, é filosófica: `create` é uma ordem única e finita, enquanto `apply` é a declaração de um estado contínuo e desejado.

Ao internalizar e adotar o gerenciamento declarativo com `kubectl apply`, você dá um passo gigante para gerenciar suas aplicações de forma mais segura, previsível e alinhada com as práticas de automação que definem a engenharia de DevOps moderna. Dominar `apply` é o que diferencia um operador que segue ordens de um engenheiro que projeta sistemas resilientes. Você deixa de ser um mero instrumentista para se tornar o arquiteto da sua orquestra digital.