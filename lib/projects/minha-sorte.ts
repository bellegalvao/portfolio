import type { Project } from "../types";

export const minhaSorte: Project = {
  slug: "minha-sorte",
  tags: ["UX Research", "Data Viz", "Mobile Design"],
  images: [
    "/images/minha-sorte-screens-1.webp",
  ],
  imageLayout: "stacked",
  midImages: [
    "/images/minha-sorte-screens-2.webp",
    "/images/minha-sorte-screens-4.webp",
    "/images/minha-sorte-screens-3.webp",
  ],
  outroImages: [
    "/images/minha-sorte-brand.webp",
  ],
  cover: "/images/minha-sorte.webp",
  links: {
    android: "https://android.minhasorteapp.com.br",
  },
  pt: {
    title: "Minha Sorte",
    headline: "Minha Sorte: Concepção, design e gestão de um ecossistema de palpites inteligentes",
    summary:
      "Como idealizadora, Product Manager e Product Designer, liderei o ciclo completo de vida (End-to-End) de um aplicativo de loterias estatísticas, transformando uma oportunidade de mercado em um produto rentável, escalável e ativo desde 2025.",
    challenge:
      "Ao analisar o cenário de aplicativos de loteria no Brasil, identifiquei um gap claro: a maioria das soluções disponíveis eram apenas geradores aleatórios de números (focados em utilitarismo simples) ou interfaces complexas demais baseadas em tabelas matemáticas áridas. Não havia um produto que unisse a ciência de dados (análise estatística histórica) a uma experiência gamificada, transparente e focada em conversão.\n\nComo dona do produto, assumi o desafio de criar o Minha Sorte do zero, acumulando as funções de Product Manager e Designer para equilibrar três pilares estratégicos:",
    challengePoints: [
      "Monetização e Viabilidade Econômica: Como estruturar esteiras de pagamento que fizessem sentido para o modelo de negócios do app sem gerar atrito na conversão?",
      "Arquitetura de Informação Escalável: Projetar um MVP (Minimum Viable Product) focado na Mega-Sena, mas cuja engenharia de design permitisse escala rápida para mais 8 modalidades de jogo sem retrabalho.",
      "Estratégia de Go-To-Market e Retenção: Garantir que o app se mantivesse relevante no dispositivo do usuário mesmo fora dos dias de grandes sorteios.",
    ],
    solution:
      "Como idealizadora e designer do produto, concebi e desenhei o ecossistema ponta a ponta do Minha Sorte em Flutter, cobrindo a jornada completa de 9 modalidades de loteria. A solução consistiu em criar uma camada de interface limpa e focada em Data Viz para traduzir análises estatísticas complexas em palpites visuais simples e acionáveis. Além disso, estruturei 3 esteiras de pagamento nativas e transparentes para otimizar a conversão financeira, transformando dados complexos de backend em uma experiência mobile gamificada, segura e de alta conversão.",
    processLabel: "Decisões Estratégicas e Execução",
    process: [
      {
        step: "Definição de Escopo (MVP) e Estratégia de Escala",
        description:
          "Como PM, estruturei o roadmap de lançamentos priorizando a consistência técnica. Desenhei uma arquitetura de componentes globais que permitiu ao desenvolvedor reaproveitar a lógica dos volantes numéricos. Essa decisão de design sistêmico reduziu drasticamente o esforço de engenharia (Flutter), permitindo que escalássemos o app de 1 para 9 modalidades de loteria em tempo recorde e com zero débito técnico de interface.",
      },
      {
        step: "Data Viz e Psicologia Cognitiva Aplicada",
        description:
          "O maior desafio de UX foi a tradução visual de dados. Estatísticas de frequência, dezenas atrasadas e tendências históricas exigiam gráficos pesados. Desenhei uma interface limpa, utilizando cores institucionais de forma psicológica para mitigar o estresse cognitivo. Transformei planilhas complexas em \"palpites visuais acionáveis\", permitindo que até usuários com baixa maturidade digital pudessem criar estratégias de aposta em poucos toques.",
      },
      {
        step: "Engenharia de Checkout e Diversificação de Receita",
        description:
          "Para garantir a saúde financeira do negócio, desenhei e gerenciei o fluxo de 3 modalidades de pagamento (Manual, Automático e Recorrência). Mapeei toda a jornada financeira e os fluxos de contingência (mensagens de erro claras em caso de falha de transação, feedbacks visuais instantâneos de sucesso). O foco em UX Writing nessa etapa blindou o app de reclamações e otimizou a taxa de checkout.",
      },
      {
        step: "Gerenciamento de Ciclo de Vida e Iteração",
        description:
          "Utilizando ferramentas de análise de dados, passei a monitorar o comportamento dos usuários pós-lançamento. Isso me permitiu rodar testes A/B contínuos na home do app e nos cards de chamada para apostas, ajustando a proposta de valor e refinando o produto ao longo dos últimos anos com base no comportamento de uso real.",
      },
    ],
    ledeMetrics: [
      { label: "Downloads orgânicos acumulados no Google Play", value: "10k+" },
      { label: "Avaliação média com base em 69 reviews espontâneos nas lojas", value: "4.6★" },
      { label: "Conversão no Funil de Checkout (Transações concluídas com sucesso)", value: "32%" },
      { label: "Em produção contínua e operação estável desde 2025", value: "2 Anos" },
    ],
    metrics: [
      {
        label: "Tração e Validação de Mercado (10k+ Downloads)",
        value: "10k+",
        description:
          "Lançado em 2025, o aplicativo alcançou a marca de mais de 10.000 downloads de forma totalmente orgânica em seus primeiros 2 anos de mercado. A alta aceitação do produto é refletida na avaliação média de 4.6★, consolidando a confiança dos usuários na plataforma.",
      },
      {
        label: "Otimização de Conversão Financeira (+18%)",
        value: "+18%",
        description:
          "A introdução das 3 jornadas de pagamento (Manual, Automático e Recorrência) e a clareza visual no fluxo de checkout reduziram o abandono de carrinho em 24%, resultando em uma taxa de conversão final de 32% nas transações concluídas no app.",
      },
      {
        label: "Eficiência de Engenharia e Escala (70% de Redução no Time-to-Market)",
        value: "70%",
        description:
          "A criação de uma arquitetura de design baseada em componentes reutilizáveis para Flutter permitiu que o lançamento das outras 8 modalidades de loteria fosse feito com 70% menos esforço de desenvolvimento se comparado ao esforço do MVP inicial.",
      },
      {
        label: "Viabilidade Econômica (ROI)",
        value: "6º mês",
        description:
          "O produto cobriu seus custos operacionais de servidor e APIs já no 6º mês após o lançamento, operando com margem de lucro positiva e sustentável como um negócio independente desde 2025.",
      },
      {
        label: "A Validação de Produto Máxima",
        highlighted: true,
        description:
          "Um usuário real foi premiado na quadra da Mega-Sena utilizando um jogo gerado pelos algoritmos de dados do app, validando empiricamente a proposta de valor e a inteligência estatística do produto no mercado.",
      },
    ],
    highlight:
      "Gerenciar o Minha Sorte como fundadora e designer me deu uma visão holística que vai muito além das telas. Aprendi que o design de interface de sucesso é aquele que resolve uma dor real de forma sustentável para o negócio. Descobrir como traduzir backend complexo em telas simples, enquanto gerencio taxas de conversão e viabilidade técnica, moldou minha abordagem como uma Product Designer orientada a resultados e focada em gerar valor real para o ecossistema de negócios.",
    seoDescription: "App de palpites inteligentes para loteria com 10k+ downloads orgânicos, 4.6★ nas lojas e ROI positivo desde o 6º mês. Concebido e gerenciado por mim.",
    cardTitle: "Minha Sorte: Concepção & Product Design",
    cardLine: "O case de um aplicativo mobile de palpites inteligentes projetado e gerenciado por mim. Em produção com mais de 10 mil downloads, 4.6★ nas lojas e uma proposta de valor validada com usuário premiado.",
    cardTags: ["UX Research", "Data Viz", "Mobile Design"],
  },
  en: {
    title: "Minha Sorte",
    headline: "Minha Sorte: Conception, design and management of a smart betting ecosystem",
    summary:
      "As the creator, Product Manager, and Product Designer, I led the full end-to-end lifecycle of a statistical lottery app, turning a market opportunity into a profitable, scalable product that has been live since 2025.",
    challenge:
      "Analyzing the lottery app landscape in Brazil, I identified a clear gap: most available solutions were either simple random number generators (focused on basic utility) or overly complex interfaces based on raw mathematical tables. There was no product combining data science (historical statistical analysis) with a gamified, transparent, conversion-focused experience.\n\nAs product owner, I took on the challenge of building Minha Sorte from scratch, accumulating the roles of Product Manager and Designer to balance three strategic pillars:",
    challengePoints: [
      "Monetization and Economic Viability: How to structure payment flows that made sense for the app's business model without creating friction in the conversion funnel?",
      "Scalable Information Architecture: Design an MVP focused on Mega-Sena, but with a design engineering approach that allowed rapid scaling to 8 more lottery modalities without rework.",
      "Go-To-Market and Retention Strategy: Ensure the app stayed relevant on the user's device even outside of major lottery draw days.",
    ],
    solution:
      "As the product's creator and designer, I conceived and designed the Minha Sorte ecosystem end-to-end in Flutter, covering the full journey across 9 lottery modalities. The solution consisted of creating a clean interface layer focused on Data Viz to translate complex statistical analyses into simple, actionable visual picks. I also structured 3 native, transparent payment flows to optimize financial conversion, transforming complex backend data into a gamified, secure, high-conversion mobile experience.",
    processLabel: "Strategic Decisions and Execution",
    process: [
      {
        step: "Scope Definition (MVP) and Scale Strategy",
        description:
          "As PM, I structured the release roadmap prioritizing technical consistency. I designed a global component architecture that allowed the developer to reuse the numerical wheel logic. This systemic design decision drastically reduced engineering effort (Flutter), allowing us to scale the app from 1 to 9 lottery modalities in record time with zero interface technical debt.",
      },
      {
        step: "Data Viz and Applied Cognitive Psychology",
        description:
          "The greatest UX challenge was visual translation of data. Frequency statistics, delayed numbers, and historical trends required heavy charts. I designed a clean interface using institutional colors psychologically to reduce cognitive stress. I transformed complex spreadsheets into 'actionable visual picks,' allowing even users with low digital maturity to create betting strategies in just a few taps.",
      },
      {
        step: "Checkout Engineering and Revenue Diversification",
        description:
          "To ensure the business's financial health, I designed and managed the flow of 3 payment modalities (Manual, Automatic, and Recurring). I mapped the entire financial journey and contingency flows (clear error messages on transaction failure, instant visual success feedback). The focus on UX Writing at this stage shielded the app from complaints and optimized the checkout rate.",
      },
      {
        step: "Lifecycle Management and Iteration",
        description:
          "Using data analytics tools, I began monitoring user behavior post-launch. This allowed me to run continuous A/B tests on the app's home and betting call-to-action cards, adjusting the value proposition and refining the product over the years based on real usage behavior.",
      },
    ],
    ledeMetrics: [
      { label: "Organic downloads accumulated on Google Play", value: "10k+" },
      { label: "Average rating based on 69 spontaneous store reviews", value: "4.6★" },
      { label: "Checkout Funnel Conversion (successfully completed transactions)", value: "32%" },
      { label: "In continuous production and stable operation since 2025", value: "2 Years" },
    ],
    metrics: [
      {
        label: "Market Traction and Validation (10k+ Downloads)",
        value: "10k+",
        description:
          "Launched in 2025, the app reached over 10,000 downloads in a fully organic way in its first 2 years on the market. The high product acceptance is reflected in the average rating of 4.6★, consolidating user trust in the platform.",
      },
      {
        label: "Financial Conversion Optimization (+18%)",
        value: "+18%",
        description:
          "The introduction of 3 payment journeys (Manual, Automatic, and Recurring) and visual clarity in the checkout flow reduced cart abandonment by 24%, resulting in a final conversion rate of 32% in completed in-app transactions.",
      },
      {
        label: "Engineering Efficiency and Scale (70% reduction in time-to-market)",
        value: "70%",
        description:
          "Creating a reusable component-based design architecture for Flutter allowed the launch of the other 8 lottery modalities with 70% less development effort compared to the initial MVP effort.",
      },
      {
        label: "Economic Viability (ROI)",
        value: "6th month",
        description:
          "The product covered its server and API operational costs by the 6th month after launch, operating with a positive, sustainable profit margin as an independent business since 2025.",
      },
      {
        label: "The Ultimate Product Validation",
        highlighted: true,
        description:
          "A real user won a 4-number prize in Mega-Sena using a pick generated by the app's data algorithms, empirically validating the product's value proposition and statistical intelligence in the market.",
      },
    ],
    highlight:
      "Managing Minha Sorte as founder and designer gave me a holistic vision that goes far beyond screens. I learned that successful interface design is the kind that solves a real pain point in a way that's sustainable for the business. Discovering how to translate complex backend into simple screens, while managing conversion rates and technical viability, shaped my approach as a results-oriented Product Designer focused on generating real value for the business ecosystem.",
    seoDescription: "Smart lottery betting app with 10k+ organic downloads, 4.6★ store rating, and positive ROI since month 6. Conceived and managed by me.",
    cardTitle: "Minha Sorte: Conception & Product Design",
    cardLine: "A mobile smart-betting app designed and managed by me. In production with over 10k downloads, 4.6★ on the stores, and a value proposition validated with an awarded user.",
    cardTags: ["UX Research", "Data Viz", "Mobile Design"],
  },
};
