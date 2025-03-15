1 - Como os dados são gerados, armazenados e usados em ciência de dados: datasets abertos e fechados

(Página 48). 

Os dados usados em um projeto podem ter diferentes proveniências, estruturas e disponibilidade (Grus, 2016). Eles podem ser datasets abertos, que são conjuntos de dados disponíveis publicamente, geralmente divulgados por organizações governamentais, instituições de pesquisa ou empresas. Mas também podem ser datasets fechados, ou seja, dados proprietários, frequentemente detidos por empresas e que contêm informações sensíveis ou comerciais. Muitas vezes, utilizamos os dois tipos de dados em um projeto, mediante técnicas de integração.

(Página 48). 

**Geração dos dados

(Página 49). **

A geração de dados é uma etapa crucial em qualquer projeto de ciência de dados, e compreender as diversas formas como os dados podem ser gerados pode ter um impacto significativo nos resultados da análise. Por exemplo, a coleta direta de dados é uma abordagem proativa que envolve reunir informações diretamente dos participantes por meio de questionários, pesquisas e entrevistas. Esta técnica é frequentemente utilizada em campos como psicologia, marketing e ciências sociais.

(Página 49). 
Além da fonte de dados, é importante considerar a forma como os dados são coletados, seja em lotes ou em tempo real. A coleta em lotes é feita em intervalos programados e é adequada para dados que não requerem análise imediata. Em contraste, os dados em tempo real são continuamente coletados e analisados, o que é essencial para aplicações que necessitam de respostas rápidas, como monitoramento de tráfego e sistemas de recomendação em tempo real.


Por último, a estrutura dos dados também é um fator crítico. Os dados podem ser estruturados ou não estruturados. Dados estruturados encaixam-se bem em tabelas e são facilmente armazenados em bancos de dados SQL, enquanto dados não estruturados, como textos e imagens, exigem métodos de tratamento e modelagem mais complexos.

(Página 50). 

**Armazenamento dos dados

(Página 51). **
O armazenamento dos dados é importante para a eficiência dos sistemas e para a segurança. Como exemplo, bancos de dados relacionais como MySQL e PostgreSQL são frequentemente escolhidos para dados estruturados em razão de sua eficiência e facilidade de manipulação. No entanto, para dados mais complexos ou não estruturados, bancos de dados NoSQL como MongoDB oferecem a flexibilidade necessária. Data lakes e opções de armazenamento em nuvem como AWS e Google Cloud proporcionam escalabilidade e são especialmente úteis para empresas que lidam com grandes volumes de dados em formatos variados, ou seja, em aplicações de big data (Basso, 2020).

(Página 51). 

Outra consideração importante é a velocidade de acesso aos dados. Enquanto sistemas de armazenamento em cache como Redis são usados para dados que requerem recuperação rápida e frequente, soluções de data warehousing como Snowflake e BigQuery são otimizadas para consultas de dados complexas e oferecem um desempenho excepcionalmente rápido para operações de leitura.

(Página 51). 
Por último, mas não menos importante, a segurança e a conformidade regulatória são aspectos críticos para o armazenamento de dados. É imperativo que os dados sejam armazenados de forma segura, com criptografia robusta e controles de acesso rigorosos, para proteger contra violações de dados. Além disso, o armazenamento de dados deve estar em conformidade com regulamentações locais e internacionais, como o Regulamento Geral de Proteção de Dados (GDPR) na Europa ou a Lei Geral de Proteção de Dados Pessoais (LGPD) no Brasil, especialmente quando se trata de dados pessoais.

(Página 51). 

**Utilização dos dados

(Página 52). **

O monitoramento da qualidade do ar nas cidades é frequentemente realizado por meio de sensores urbanos, e os dados coletados geralmente são disponibilizados ao público. Esse é um exemplo clássico do uso de dados abertos para beneficiar a sociedade. Com essa informa- ção, é possível identificar áreas com altos níveis de poluição e reconhecer os períodos do dia em que a qualidade do ar se deteriora. Esse tipo de dado é valioso tanto para o planejamento urbano quanto para fornecer alertas aos residentes, que podem tomar medidas para reduzir a exposição a poluentes. Por outro lado, no mundo do comércio eletrônico, grandes varejistas on-line coletam uma variedade de dados, como cliques, histórico de compras e padrões de navegação. Esses dados são altamente sensíveis e se enquadram na categoria de dados fechados, usados internamente para refinar algoritmos de recomendação e otimizar as vendas. O acesso a essas informações geralmente é restrito em virtude de sua natureza sensível e de seu potencial de vantagem competitiva.

Um caso interessante que combina ambos os tipos de dados, abertos e fechados, é a previsão de doenças epidêmicas.

**O que torna uma base de dados promissora para análise?

(Página 53). **
Para avaliar o potencial de um conjunto de dados para análise em um projeto de ciência de dados, é crucial considerar diversos fatores técnicos e métricas específicas. Em relação à qualidade dos dados, a precisão é um aspecto primordial que pode ser avaliada por meio de auditorias de amostra de dados para identificar a proporção de registros livres de erros. A integridade dos dados, outro aspecto crítico, pode ser verificada ao observar a completude dos registros e ao identificar campos faltantes ou nulos. Também é de grande importância considerar a atualidade dos dados, observando a data da última atualização e a frequência com que essas atualizações ocorrem. A consistência nos formatos e escalas usados em diferentes variáveis também deve ser avaliada para assegurar a qualidade do conjunto de dados.

(Página 53). 
Quanto às dimensões do big data, o volume deve ser suficiente para garantir a viabilidade estatística da análise, algo que pode ser confirmado com o auxílio de métodos estatísticos rigorosos. A variedade de tipos de dados, que pode incluir dados numéricos, categóricos e textuais, deve ser inventariada e avaliada para garantir que ela seja adequada para resolver o problema em questão. A velocidade de ingestão de novos dados e a latência para análises em tempo real também são critérios que não podem ser ignorados.

(Página 53). 
Além desses aspectos, a relevância dos dados em relação ao problema específico deve ser avaliada por meio de testes estatísticos, como os coeficientes de correlação de Pearson ou de Spearman e outros testes de hipótese.

(Página 54). 
Finalmente, temos o aspecto da acessibilidade dos dados, que pode ser medida pela existência de APIs e endpoints programáticos, além da conformidade com as regulamentações de governo e da empresa.

(Página 54). 
Qualidade Relevância Acessibilidade Integridade e Consistência precisão dos dados armazenados Uniformidade e coerência dos dados ao longo do tempo Pertinência e aplicabilidade dos dados às necessidades dos usuários Facilidade com que os dados podem ser localizados e recuperados

(Página 54). 

**Identificando problemas e gerando soluções baseadas em dados: insights, métricas e ferramentas (produtos, serviços, processos)

(Página 54). **

O primeiro passo nesse processo é o desenvolvimento de insights, ou seja, entendimentos significativos extraídos dos dados e que fornecem uma visão clara dos problemas subjacentes. Por exemplo, uma análise exploratória de dados pode revelar que as taxas de abandono de um site de e-commerce aumentam drasticamente após às 18h. Este é um insight que pode ser avaliado e investigado mais a fundo para gerar uma solução, como ajustes na infraestrutura do servidor para lidar com picos de tráfego ou ofertas especiais que incentivam compras após esse horário. A parte crítica após a geração de insights é a seleção de métricas adequadas para avaliar as soluções implementadas. As métricas devem ser quantificáveis e diretamente relacionadas ao problema que está sendo abordado. No mundo dos negócios e finanças, por exemplo, o retorno sobre investimento (ROI) ajuda a medir o ganho em relação ao dinheiro investido, enquanto o custo de aquisição de cliente (CAC) e o lifetime value (LTV) fornecem insights sobre eficácia e valor a longo prazo das estratégias de aquisição e retenção de clientes. Na área da saúde, métricas como taxa de mortalidade e taxa de readmissão hospitalar são imprescindíveis para avaliar a qualidade dos cuidados médicos.

(Página 55). 
No varejo, a taxa de abandono de carrinho é um indicador crucial da eficácia da experiência de compra on-line, e métricas como venda por visita oferecem percepções importantes sobre o desempenho.

(Página 56). 
Finalmente, a etapa de implementação envolve o uso de várias ferramentas e tecnologias para transformar insights e métricas em ações concretas, podendo envolver desde o ajuste de algoritmos em produtos de software até a reconfiguração de processos empresariais ou a introdução de novos serviços. No contexto da ciência de dados, ferramentas como algoritmos de aprendizado de máquina, painéis de BI (business intelligence) e sistemas de automação são comumente utilizados.

(Página 56). 

**Pensamento analítico (perguntas e respostas em ciências de dados)

(Página 56). **

O pensamento analítico em ciência de dados envolve a habilidade de questionar, interpretar e comunicar informações de maneira eficaz. Por intermédio dele, as métricas encontram a tomada de decisão e a teoria se traduz em ação.

(Página 56). 
É esse o núcleo do pensamento analítico em ciência de dados: questionar de forma incisiva, analisar rigorosamente e agir decisivamente.

(Página 57). 