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
    cardTitle: "Minha Sorte: Concepção & Product Design",
    cardLine: "O case de um aplicativo mobile de palpites inteligentes projetado e gerenciado por mim. Em produção com mais de 10 mil downloads, 4.6★ nas lojas e uma proposta de valor validada com usuário premiado.",
    cardTags: ["UX Research", "Data Viz", "Mobile Design"],
  },
  en: {
    title: "Minha Sorte",
    headline: "One user won a 4-number prize in Brazil's biggest lottery using the app's picks. Live in production since 2021.",
    summary:
      "Lottery betting app with statistical smart number generation. Live in production.",
    challenge:
      "Create a lottery app that went beyond a simple number generator,something that used statistics to give users a real edge and a complete tracking experience.",
    solution:
      "Designed an app with 9 lottery modalities (Mega-Sena, Quina, Lotofácil, and others), statistically-driven picks based on historical results, and 3 payment modalities.",
    process: [
      {
        step: "Concept",
        description:
          "Researched lottery bettor behavior to understand what they really wanted beyond just picking numbers.",
      },
      {
        step: "Design",
        description:
          "Created the interface with a clean green visual,the color of luck,and clear flows for each game modality.",
      },
      {
        step: "Payments",
        description:
          "Designed 3 payment modalities: normal, manual, and automatic, each with its own UX considerations.",
      },
      {
        step: "Production",
        description:
          "The app was built in Flutter and published to the store,it's live in production with real users.",
      },
    ],
    metrics: [
      { label: "Lottery modalities", value: "9" },
      { label: "Payment modalities", value: "3" },
      { label: "Platform", value: "Flutter · In production" },
      { label: "Standout result", value: "User won a 4-number prize in Mega-Sena" },
    ],
    highlight:
      "One of the users won a 4-number prize in Brazil's biggest lottery using the app's picks. No metric beats that.",
    cardTitle: "Minha Sorte: Lottery App in Production",
    cardLine: "Lottery betting app with statistical smart number generation. Live on Google Play since 2021.",
    cardTags: ["UX Research", "Data Viz", "Mobile Design"],
  },
};
