No universo da ciência de dados, a **análise descritiva é essencial para aqueles que buscam transformar números brutos em insights significativos. Ela oferece respostas a questões como “o que aconteceu?” e “o que está acontecendo?”**. Este campo se difere de métodos inferenciais ou preditivos pelo seu foco em resumir e organizar um conjunto de dados.

(Página 60). 

A análise descritiva é uma abordagem multifacetada, podendo ser considerada tanto numa perspectiva da estatística clássica quanto em técnicas de aprendizado de máquina. Na estatística, o foco principal é quantificar características básicas dos dados por meio de métricas matemáticas. Em contraste, no campo do aprendizado de máquina, a análise descritiva é frequentemente incorporada em uma variedade de algoritmos para revelar estruturas ou padrões subjacentes nos dados que não são aparentes à primeira vista, tal como técnicas de agrupamento.

(Página 61). 

**O que é e qual a função da análise descritiva

De forma teórica, e como visto na introdução, a análise descritiva refere-se ao conjunto de técnicas empregadas para caracterizar e sumarizar os principais aspectos de um conjunto de dados (Sharda; Delen; Turban, 2019). **Ela funciona como uma lente, permitindo aos cientistas de dados examinarem melhor os dados e identificar padrões subjacentes.** Perceba que é complicado descrever e ter um entendimento geral quando se trata de uma quantidade volumosa de dados (Basso, 2020), ainda mais quando nos referimos a atributos numéricos. Dessa forma, a análise descritiva ajuda nesse sentido.

(Página 61). 
**A análise descritiva é o primeiro passo no universo da análise de dados, servindo como um radar, capturando o panorama dos dados, suas nuances e padrões.**

(Página 61). 

**Tipos de pergunta**
Em sua essência, a análise descritiva busca responder às perguntas “o que aconteceu?” ou “o que está acontecendo?”, sem adentrar no território das inferências ou previsões. Tais perguntas auxiliam a ilustrar o panorama dos dados e a descrevê-los (Sharda; Delen; Turban, 2019).

(Página 62). 
Imagine um hospital que coletou dados sobre a duração da estadia dos pacientes. A primeira indagação poderia ser: “qual a duração média da estadia dos pacientes em nosso hospital?”. Essa é uma pergunta que busca identificar um ponto central para representar o conjunto de dados; ainda assim, uma média por si só pode não oferecer uma visão completa do que está sendo investigado. O hospital pode querer saber, por exemplo, a variação nas durações das estadias, ou se houve pacientes que permaneceram por um tempo excepcionalmente longo ou curto, ou ainda se existe alguma época do ano em que as estadias são mais longas. Esses questionamentos investigam a dispersão, os outliers e as tendências sazonais nos dados.

(Página 62). 

**Estatística descritiva

(Página 63). **
A estatística descritiva é, em muitos aspectos, a espinha dorsal do campo estatístico, fornecendo o contexto e a estrutura necessários para compreender e interpretar dados brutos (Morettin; Singer, 2021; Grus, 2016). Ela concentra-se em resumir, organizar e simplificar dados de uma maneira que permita uma fácil interpretação e compreensão. Embora outros ramos da estatística possam se concentrar em fazer inferências ou previsões baseadas em dados, a estatística descritiva é a primeira etapa crucial que nos ajuda a entender a forma e a estrutura dos dados que estamos analisando.

(Página 63). 

**Medidas de tendência central

(Página 63). **

As medidas de tendência central são estatísticas que buscam resumir um conjunto de dados com um único valor que representa o “centro” desse conjunto. Essas medidas são essenciais para fornecer uma rápida compreensão dos dados disponíveis e são frequentemente o primeiro passo em qualquer análise estatística. **As mais comuns são a média, a mediana e a moda.**

(Página 63). 

Outliers são valores que são significativamente diferentes dos outros valores em um conjunto de dados. Eles podem ser excepcionalmente altos ou baixos e têm o potencial de distorcer a representação geral dos dados. Por exemplo, se você está calculando a média salarial de uma empresa em que quase todos ganham entre 50 e 60 mil dólares por ano, mas o CEO ganha 2 milhões, o salário do CEO é um outlier.

(Página 64). 

A média é talvez a medida de tendência central mais conhecida e utilizada. Ela é calculada somando todos os valores de um conjunto de dados e dividindo a soma pelo número total de valores. A média é sensível a outliers, o que significa que valores extremamente altos ou baixos podem distorcer a média.

(Página 64). 

Por outro lado, a mediana é menos afetada por outliers, tornando-a uma escolha mais robusta quando esses valores extremos estão presentes. Para encontrar a mediana, você ordena os valores do conjunto de dados e identifica o valor do meio. Se houver um número ímpar de observações, a mediana é o valor do meio. Se houver um número par de observações, a mediana é a média dos dois valores do meio.

(Página 64). 
Já a moda é simplesmente o valor que aparece com mais frequência em um conjunto de dados. Diferentemente da média e da mediana, a moda pode ser usada com dados que são categóricos em vez de numé- ricos. Além disso, a moda não é afetada por outliers.

(Página 64). 

Se seus dados são distribuídos de maneira aproximadamente simé- trica e você não tem valores extremamente altos ou baixos, conhecidos como outliers, a média pode ser a melhor opção, pois leva em consideração todos os valores no conjunto de dados. No entanto, se há outliers que você suspeita que possam distorcer a representação geral do conjunto de dados, a mediana é geralmente uma escolha mais consistente, pois ela é menos suscetível a esses valores extremos. A mediana é particularmente útil em situações em que os dados são assimétricos ou quando estamos interessados em uma medida que resista às influências de valores extremos. Por sua vez, a moda pode ser mais apropriada para dados que são categóricos em vez de numéricos, ou quando você deseja identificar o valor mais comum em um conjunto de dados.

(Página 65). 

**Medidas de dispersão

(Página 66). **
Depois de entender a média ou a mediana de um conjunto de números, que são formas de identificar o “centro” dos dados, o próximo passo é entender quão espalhados esses números estão em relação a esse centro. Isso é o que chamamos de dispersão. Compreender a dispersão é como olhar para uma caixa de chocolates e querer saber se todos os sabores são parecidos ou se temos uma grande mistura.

(Página 66). 
Para isso, temos algumas ferramentas úteis como a variância e o desvio padrão. A variância é uma forma de calcular quão distantes os números estão da média. Quanto maior a variância, mais espalhados estão os números. O desvio padrão é a raiz quadrada da variância e é útil porque está na mesma “linguagem” que os números originais. Então, se estamos medindo altura em centímetros, o desvio padrão também estará em centímetros, tornando mais fácil entender sua representação. A amplitude é outra forma simples de entender a dispersão. É basicamente a diferença entre o maior e o menor número do conjunto de dados. Por exemplo, se a menor temperatura registrada foi de 10 graus e a maior foi de 30 graus, a amplitude é de 20 graus. Mas cuidado, a amplitude pode ser enganosa se você tiver outliers.

(Página 66). 
Também temos o intervalo interquartil (IQR), que é uma medida que nos diz sobre a dispersão dos números que se localizam mais ao meio do conjunto, ignorando os 25% menores e os 25% maiores. O IQR é útil porque não é tão afetado por esses outliers ou números extremos.

(Página 66). 
Entender a dispersão é crucial porque, sem ela, a média ou a mediana podem dar uma visão distorcida da realidade. Imagine que duas escolas tenham a mesma média de notas. Na primeira, todos os alunos têm desempenhos próximos à média, enquanto na segunda há muitas notas baixas e altas, variando muito. Se você olhar apenas para a média, pensaria que as duas escolas são iguais, mas ao considerar a dispersão, fica claro que elas são bem diferentes. Portanto, sempre que estiver analisando um conjunto de números, lembre-se de que entender a dispersão é tão importante quanto conhecer a média ou a mediana.

**Correlação

(Página 67). **

Além de conhecer o centro e a dispersão dos seus dados, é frequentemente útil entender como duas ou mais variáveis interagem ou se relacionam entre si. Esse é o domínio do conceito de correlação. Em termos simples, a correlação nos ajuda a identificar se uma variável muda em conjunto com outra e quão forte é essa relação. O coeficiente de correlação é uma métrica que varia entre −1 e 1 e serve como um termômetro dessa rela- ção. Um valor próximo de 1 sugere uma relação positiva forte, ou seja, quando uma variável aumenta, a outra também tende a aumentar. Um valor próximo de −1 indica uma relação negativa forte, significando que quando uma variável aumenta, a outra tende a diminuir. Um valor próximo de zero indica uma falta de relação linear entre as variáveis.

(Página 67). 
Embora o tipo mais conhecido de correlação seja a correlação de Pearson, que mede relações lineares, existem outras, como a correlação de Spearman e a de Kendall, que são usadas quando a relação entre as variáveis não é linear. Mas o coeficiente por si só não nos diz tudo. É crucial visualizar também os dados, muitas vezes recorrendo a um gráfico de dispersão, para realmente entender o contexto dessa correlação.

(Página 67). 

**Modelos descritivos

(Página 71). **
Modelos descritivos têm como objetivo capturar, representar e explicar a estrutura dos dados em vez de prever ou classificar novas observações. Em muitos campos, desde a psicologia à economia e à biologia, esses modelos ajudam a entender as relações entre as variáveis e a natureza do conjunto de dados em análise, funcionando como uma espécie de mapa que descreve o terreno, mas que não necessariamente nos diz para aonde ir em seguida. No campo do aprendizado de máquina, algoritmos de agrupamento são frequentemente usados para modelagem descritiva. Eles dividem o conjunto de dados em grupos ou clusters que compartilham características semelhantes. Por exemplo, um algoritmo de agrupamento poderia analisar um conjunto de artigos de notícias e dividi-los em tópicos com base na similaridade do conteúdo. O modelo descreve, mas não faz previsões ou inferências.

(Página 71). 
Além disso, outro exemplo de modelo descritivo são as regras de associação, que são frequentemente usadas no varejo para entender padrões de compra.

(Página 72). 

**Algoritmo k-means**

(Página 72). 
O algoritmo k-means é uma forma popular de agrupar itens similares em diferentes grupos ou clusters (Faceli et al., 2021). Imagine que você tenha vários pontos espalhados em um gráfico e quer organizá-los de modo que os pontos de cada grupo fiquem próximos uns dos outros. O k-means faz exatamente isso, de forma automatizada e eficiente. Vamos usar uma analogia para tornar essa explicação mais fácil de entender. Imagine que você tenha uma cesta de frutas contendo maçãs, bananas e uvas, e você quer separá-las em grupos distintos. Você poderia fazer isso com os olhos fechados, sentindo a forma e o tamanho das frutas. O k-means faz algo similar, só que com dados em vez de frutas e utilizando distâncias entre os pontos de dados para agrupá-los.

(Página 72). 
O k-means é uma ferramenta poderosa para organizar dados, mas é importante notar que você precisa escolher o número de grupos (k) com cuidado, e que nem sempre é óbvio o número correto de grupos a serem usados. No entanto, uma vez que os grupos são formados, eles podem fornecer insights valiosos em muitas áreas diferentes. Seu funcionamento básico pode ser descrito em três passos. Para começar, ele seleciona aleatoriamente centros para cada um dos k grupos. Podemos interpretar esses centros como os representantes ideais para cada grupo. Em segundo lugar, o algoritmo analisa cada item (ou ponto de dados) e os coloca no grupo cujo centro está mais próximo. Em terceiro lugar, ele recalcula o centro de cada grupo com base nos itens que agora estão dentro do grupo. O algoritmo repete os passos dois e três várias vezes até que os centros não mudem muito, indicando que os grupos foram estabelecidos.

(Página 73). 

**Resultados da análise descritiva

(Página 76). 
Os resultados de uma análise descritiva consistem principalmente em um melhor entendimento dos dados, extraindo informações como tendências centrais, dispersão, outliers, correlações e padrões de grupos nos dados. De forma prática, a capacidade da análise descritiva de revelar insights poderosos a partir de dados brutos é amplamente evidenciada por diversos casos reais em diversos setores. Considere, por exemplo, o setor de varejo. Uma grande rede de supermercados percebeu, ao analisar suas transações mediante análise descritiva, que a venda de fraldas e cervejas tinha um padrão interessante nas noites de sexta-feira. O padrão mostrou que homens entre 30 e 40 anos, quando compravam fraldas, também tendiam a comprar cerveja. Fundamentada nesta descoberta, a loja rearranjou seus produtos para otimizar as compras cruzadas, colocando promoções de cervejas próximas à seção de fraldas. Outro exemplo notável vem do setor de saúde. Hospitais identificaram, ao analisar a entrada e a saída de pacientes mediante análises descritivas, que certas épocas do ano apresentavam maior ocorrência de doenças respiratórias. Esta descoberta levou a uma melhor gestão de recursos durante esses períodos, com a alocação adequada de leitos, medicamentos e equipe.

(Página 76). 

--- 

### **Resumo: Análise Descritiva na Ciência de Dados**

A **análise descritiva** é a base da ciência de dados, sendo responsável por transformar números brutos em **insights significativos**. Seu objetivo é responder **"o que aconteceu?"** e **"o que está acontecendo?"**, sem realizar previsões ou inferências. Ela organiza e resume os dados para permitir um melhor entendimento antes da tomada de decisão.

---

### **1. Características da Análise Descritiva**

✅ **Perguntas principais:**

- _"O que aconteceu?"_
- _"O que está acontecendo?"_

✅ **Foco:**

- Resumir e descrever dados de forma clara e compreensível.
- **Identificar padrões e tendências** sem realizar previsões.

✅ **Métodos principais:**

- **Estatística descritiva** para medidas de tendência central e dispersão.
- **Visualização de dados** para melhor interpretação gráfica.
- **Agrupamento e segmentação** no aprendizado de máquina.

---

### **2. Estatística Descritiva**

A estatística descritiva fornece ferramentas para organizar e analisar dados de forma eficiente.

#### **🟢 Medidas de Tendência Central**

- **Média** → Valor médio dos dados, útil para distribuições simétricas.
- **Mediana** → Valor central dos dados ordenados, ideal para conjuntos com outliers.
- **Moda** → Valor mais frequente nos dados, útil para variáveis categóricas.

#### **🟢 Medidas de Dispersão**

- **Variância** → Mede o quão dispersos os valores estão em relação à média.
- **Desvio padrão** → Raiz quadrada da variância, facilitando a interpretação.
- **Intervalo interquartil (IQR)** → Considera apenas a dispersão central, ignorando extremos.
- **Amplitude** → Diferença entre o maior e o menor valor do conjunto.

#### **🟢 Correlação**

- Mede a relação entre duas variáveis.
- **Correlação de Pearson** → Avalia relações lineares entre variáveis.
- **Correlação de Spearman e Kendall** → Avaliam relações não lineares.

---

### **3. Modelos Descritivos**

Os modelos descritivos analisam e organizam dados, mas **não fazem previsões**.

#### **🟢 Algoritmos de Agrupamento**

- **K-Means** → Divide os dados em grupos com características semelhantes.
- **Regras de Associação** → Identifica padrões de compra no varejo.

---

### **4. Resultados da Análise Descritiva**

A análise descritiva é amplamente usada para revelar **padrões ocultos e tendências nos dados**.

✅ **Exemplos reais:**

- **No varejo**, a análise mostrou que homens que compravam fraldas também compravam cerveja nas sextas-feiras → **Rearranjo de produtos para aumentar vendas**.
- **Na saúde**, hospitais descobriram picos sazonais de doenças respiratórias → **Melhor alocação de recursos e leitos hospitalares**.

Essa análise permite uma **tomada de decisão informada**, sendo o primeiro passo para modelos mais avançados, como a análise preditiva.

---

### **5. Média, Mediana e Moda: Conceitos, Vantagens e Desvantagens**

As **medidas de tendência central** ajudam a resumir os dados em um valor representativo.

#### **🟢 Média**

✅ Fácil de calcular e amplamente utilizada.  
✅ Representa todos os valores da distribuição.  
❌ Sensível a **outliers** (valores extremos podem distorcer a média).

#### **🟢 Mediana**

✅ Melhor para **distribuições assimétricas** ou com **outliers**.  
✅ Representa o valor central dos dados ordenados.  
❌ Não considera todos os valores ao calcular a posição central.

#### **🟢 Moda**

✅ Útil para **dados categóricos** e para identificar valores mais frequentes.  
✅ Não sofre influência de outliers.  
❌ Pode não existir ou ser ambígua em certos conjuntos de dados.

📌 **Exemplo:**

- Salários em uma empresa: **Mediana** → Evita distorção por diretores com salários elevados.
- Notas de alunos: **Média** → Avaliação geral do desempenho.
- Preferência de produtos: **Moda** → Identifica o item mais escolhido pelos clientes.

---

### **📌 Conclusão**

A **análise descritiva** é essencial para compreender os dados antes de realizar previsões. Ela permite identificar **tendências, padrões e distribuições**, sendo uma ferramenta poderosa para embasar **tomadas de decisão estratégicas**.

✅ **Facilita o entendimento de grandes volumes de dados.**  
✅ **Ajuda a identificar padrões ocultos e tendências.**  
✅ **Serve como base para análises preditivas e prescritivas.**

🔹 **Exemplo prático:** Uma empresa de logística pode usar análise descritiva para **avaliar tempos médios de entrega** e identificar **quais rotas apresentam mais atrasos**, permitindo otimizações no planejamento.

Ao compreender **o que aconteceu**, a análise descritiva **prepara o terreno para previsões futuras e ações estratégicas**. 🚀