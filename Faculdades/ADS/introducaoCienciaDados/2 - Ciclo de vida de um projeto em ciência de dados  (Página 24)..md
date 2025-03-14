https://www.youtube.com/watch?v=HVn1cZ2MQ08&t=1s

O ciclo de vida de um projeto em ciência de dados é uma sequência de etapas que servem como espinha dorsal para o desenvolvimento e implementação de soluções baseadas em dados (O’Neil; Schutt, 2013). A primeira etapa abrange entender o problema e identificar os objetivos do projeto de ciência de dados. Após todos os integrantes da equipe terem clareza de aonde querem chegar, passamos para a coleta de dados. Uma vez que os dados relevantes para o problema são coletados, entramos na fase de pré-processamento. Esta é uma das etapas mais trabalhosas e envolve limpeza, transformação e integração dos dados coletados. Então, os dados estão finalmente prontos para a análise exploratória. Combinando técnicas estatísticas e ferramentas de visualização, podemos descrever os dados. A próxima etapa é a construção de modelos, com a aplicação de machine learning para criar um modelo matemático para análises descritiva, preditiva e prescritiva.

(Página 24). 

Como resultados do ciclo de vida de um projeto em ciência de dados, há duas contribuições significativas que podemos destacar. A primeira é a geração e a comunicação de insights que são meticulosamente direcionados para o aprimoramento dos processos dentro da empresa. A segunda contribuição relevante é a implementação dos modelos de dados. Esses modelos vão além do simples diagnóstico da situação atual, oferecendo alternativas que podem ser aplicadas para executar tarefas ou otimizar determinadas funções beneficiando a empresa e o cliente final. Após a implementação do projeto, a etapa final é o feedback e a medi- ção da eficácia dos modelos e dos resultados alcançados.

(Página 25). 

A eficácia de um projeto em ciência de dados está atrelada à identificação clara e precisa do problema em questão (Amaral, 2016; Sharda; Delen; Turban, 2019). Esse marco inicial abrange não só o entendimento do cenário corporativo, mas também as necessidades dos clientes. Após essa investigação, é possível definir um objetivo central para o projeto, para o qual as estratégias e os recursos podem ser alocados de forma assertiva.

(Página 25). 

Os resultados de um projeto de ciência de dados são, essencialmente, um reflexo direto da qualidade e da relevância dos dados iniciais coletados. Se os dados forem incompletos, imprecisos ou tendenciosos, será manifestado nos resultados finais, podendo levar a conclusões errôneas ou a decisões mal orientadas (Basso, 2020; Davenport, 2014).

(Página 26). 

**Kaggle**
O Kaggle é uma das principais plataformas para cientistas de dados, principalmente por seu vasto repositório de datasets2 (Kaggle, 2023). Essas bases de dados, que abrangem diversas áreas e setores, facilitam a inicialização de projetos, permitindo que pesquisadores e profissionais encontrem facilmente conjuntos de dados relevantes para suas necessidades específicas. Muitos datasets no Kaggle vêm com uma descrição detalhada, insights preliminares e até discussões da comunidade, ajudando os usuários a entenderem melhor o contexto e as características dos dados. Em suma, para quem está em busca de dados para análise, modelagem ou pesquisa, o Kaggle se torna uma ferramenta inestimável.

(Página 27). 
(df). É possível exibir as primeiras linhas de um df por meio da função head(). Também podemos exibir linhas escolhidas aleatoriamente com a função sample(). É utilizada a função info() para verificar o tipo de dado de cada coluna. O exemplo do código pode ser visto a seguir: import pandas as pd df = pd.read_csv('books.csv', sep=",", on_bad_lines = "skip") df.head() df.sample(5) df.info()

(Página 29). 

O pré-processamento de dados é uma etapa crucial em qualquer projeto de ciência de dados, servindo como ponte entre a coleta de dados brutos e a fase de análise (Faceli et al., 2021). Muitas vezes, por ter a característica de ajudar a deixar os dados mais limpos e compreensíveis para a construção de modelos, essa etapa pode ser desenvolvida de forma iterativa com a etapa de análise exploratória. Dessa forma, a exploração indica o que deve ser consertado, enquanto as técnicas de pré-processamento mitigam os problemas identificados, proporcionando uma análise mais correta.

(Página 30). 

(aspecto chave da etapa de pré-processamento de dados) -> Integração envolve a combinação de dados de várias fontes para criar um conjunto de dados unificado e coerente, sendo especialmente relevante quando os dados provêm de bancos de dados distintos ou até mesmo de tipos de dados diferentes.

(Página 30). 

A amostragem também é uma técnica usada para simplificar os dados, selecionando subconjuntos representativos para análise em vez de usar o conjunto de dados completo. Utilizamos a amostragem quando a base de dados tem muitos exemplos e gostaríamos de selecionar apenas alguns para as análises. Algumas técnicas de amostragem são: aleató- ria simples, estratificada e progressiva.

(Página 31). 

O desbalanceamento dos dados é outro ponto importante. Por exemplo, imagine que estamos construindo um modelo de seleção de currículos. Caso os currículos de exemplo na base de dados sejam predominantemente masculinos, o modelo terá um viés para a seleção de candidatos homens, mesmo que esses não sejam necessariamente os mais qualificados. Ou seja, se uma classe é muito mais prevalente do que outra, pode levar a modelos tendenciosos e incorretos. Métodos como undersampling e oversampling são comuns para lidar com esse problema.

(Página 31). 
Por sua vez, a limpeza dos dados envolve várias subetapas (Faceli et al., 2021; Grus, 2016). Dados incompletos precisam ser tratados, seja por meio da inserção de valores nos campos faltantes, seja por meio da exclusão de exemplos incompletos. Para a inserção, é possível utilizar medidas de tendência central nos valores conhecidos, preenchendo-as com tal valor, ou também utilizar um indutor para prever o valor do atributo para cada linha que está incompleta.

(Página 31). 

A redundância ocorre, por exemplo, quando os atributos são muito semelhantes entre si, fornecendo o mesmo tipo de informação, ou quando há amostras duplicadas. Por fim, também podemos limpar os ruídos, que são valores que não representam a realidade, devendo ser suavizados ou eliminados.

(Página 32). 

Por último, a transformação de dados é realizada para preparar o conjunto de dados para exploração e construção de modelos. Essa transformação pode incluir a normalização, que ajusta os valores numéricos em uma escala comum, e a codificação, que converte variáveis categóricas em um formato que pode ser colocado à disposição de algoritmos estatístico, gráficos para visualização e algoritmos de aprendizado de máquina

(Página 32). 
A análise exploratória dos dados (exploratory data analysis, ou EDA) envolve uma variedade de técnicas para examinar, resumir e visualizar a estrutura dos dados (Grus, 2016). Essa etapa pode ser realizada mediante técnicas de estatística e análise descritiva para fornecer medidas resumidas e insights sobre o conjunto de dados, as quais incluem o uso de médias, medianas, modas, desvio padrão, variância, percentis e outros indicadores que ajudam a entender distribuição, tendência central e dispersão dos dados (Morettin, 2021).

(Página 36). 

O aprendizado de máquina (machine learning, ou ML) é uma subárea da inteligência artificial que se concentra no desenvolvimento de algoritmos e modelos estatísticos que permitem que os computadores executem tarefas sem serem explicitamente programados (Faceli et al., 2021; Grus, 2016). Estes algoritmos aprendem de dados ou experiências anteriores e fazem previsões ou decisões baseadas neles.

(Página 41). 
O ML pode ser categorizado como aprendizado supervisionado, aprendizado não supervisionado ou aprendizado por reforço, cada um com seus próprios algoritmos e aplicações. No aprendizado supervisionado, os algoritmos são treinados em um conjunto de dados rotulados para realizar tarefas como classificação e regressão. Modelos como máquinas de vetores de suporte (SVM), árvores de decisão e redes neurais são comumente usados para classificar dados em diferentes categorias. Para tarefas de regressão, que envolvem a previsão de valores contínuos, métodos como regressão linear e árvores de regressão são frequentemente empregados. Por outro lado, o aprendizado não supervisionado não requer um conjunto de dados rotulados e é mais focado na detec- ção de padrões nos dados. Ele geralmente é usado em tarefas de agrupamento e associação, com modelos como k-means e análise de componentes principais (PCA).

(Página 41). 

A análise descritiva se beneficia do aprendizado não supervisionado, pois procura entender a estrutura e os padrões subjacentes nos dados. A análise preditiva, por sua vez, tende a empregar modelos supervisionados para fazer previsões futuras baseadas em dados passados (Mercante, 2022). A análise prescritiva combina elementos de ambos, usando modelos preditivos para simular diferentes cenários para então sugerir ações específicas.

(Página 41). 

Na etapa “resultados: geração de insights e implementação de modelo” do ciclo de vida em ciência de dados, o principal objetivo é utilizar as aná- lises e modelos desenvolvidos para extrair informações significativas e responder à pergunta estratégica. Para isso, o cientista de dados deve construir relatórios compreensíveis que serão analisados e utilizados, por exemplo, pelos executivos da empresa para tomarem decisões. O feedback dessas pessoas guiará a continuidade do projeto. Ainda, a implementação do modelo é outro aspecto crucial. Depois de desenvolvido e validado, o modelo finalizado é colocado em produção para fazer previsões ou categorizações de forma contínua, conforme o caso.

(Página 42). 