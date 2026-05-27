import type { Project } from "../types";

export const konsiApp: Project = {
  slug: "konsi-app",
  year: "2023",
  tags: ["Product Design", "Mobile", "Fintech"],
  // Images fixed: actual files are .png (not .webp); only 3 exist
  images: [
    "/images/konsi-app-1.png",
    "/images/konsi-app-2.png",
    "/images/konsi-app-3.png",
  ],
  cover: "/images/konsi-app-cover.webp",
  // banner removed: /images/konsi-banner-top.webp does not exist in public/images
  links: {
    figma: "https://www.figma.com/design/iJ6LZoPpLwhkA232HjtTQj",
    android: "https://play.google.com/store/search?q=konsi&c=apps&hl=pt_BR",
  },
  pt: {
    title: "Konsi App",
    headline: "Otimizando a jornada de crédito: Como redesenhei o fluxo de contratação da Konsi equilibrando regras de negócio complexas e experiência do usuário.",
    summary:
      "Liderando a evolução do produto mobile para aumentar a conversão de propostas e simplificar a gestão de crédito consignado para milhares de usuários.",
    challenge:
      "A Konsi opera em um ecossistema onde o usuário precisa fornecer dados sensíveis e passar por múltiplas camadas de validação. O fluxo original sofria com altas taxas de drop-off devido à carga cognitiva elevada e à falta de clareza nas etapas de simulação de crédito.",
    challengePoints: [
      "Fricção Cognitiva — O excesso de informações bancárias e termos jurídicos gerava insegurança no preenchimento.",
      "Complexidade de Backend vs. Frontend — As diversas regras de convênios (SIAPE, INSS, Governos) precisavam ser traduzidas em uma interface simples, sem expor a complexidade técnica ao usuário.",
      "Necessidade de Retenção — Além de contratar o crédito, o app precisava se tornar uma ferramenta de gestão financeira para que o usuário retornasse e acompanhasse suas margens.",
    ],
    solution:
      "Desenhei a jornada completa do zero: Onboarding → Cadastro → Login → Simulação → Contratação → Confirmação → Follow-Up, com foco em reduzir atrito em cada etapa.",
    processTitle: "Design Orientado a Dados e Conversão",
    processIntro:
      "Para escalar o produto, implementei uma estratégia de design focada em redução de fricção e transparência:",
    process: [
      {
        step: "Progressive Disclosure (Revelação Progressiva)",
        description:
          "Reestruturei o fluxo de simulação para coletar dados em etapas lógicas, reduzindo a ansiedade do usuário e aumentando a taxa de completude do formulário.",
      },
      {
        step: "Visualização de Dados Financeiros",
        description:
          "Criei dashboards intuitivos para que o usuário visualize suas margens e contratos atuais de forma clara, utilizando os componentes do Design System para garantir rapidez e consistência.",
      },
      {
        step: "Integração com Product Analytics",
        description:
          "Utilizei ferramentas como PostHog e Metabase para identificar exatamente em quais etapas do funil os usuários abandonavam a jornada, permitindo iterações rápidas baseadas em comportamento real.",
      },
      {
        step: "Loop de Feedback Contínuo (Estratégia de NPS)",
        description:
          "Desenhei e implementei a jornada de Net Promoter Score dentro do app. Em vez de disparar pesquisas aleatórias, mapeei o momento de maior valor percebido (o Aha! Moment) para coletar a nota, transformando um dado qualitativo em uma métrica de saúde do produto rastreável em tempo real.",
      },
    ],
    metrics: [
      {
        label: "Conversão no Funil de Crédito",
        value: "+24%",
        description: "Otimização expressiva na taxa de usuários que completaram a simulação e avançaram para a solicitação de proposta. A redução da carga cognitiva no fluxo eliminou gargalos críticos de abandono (drop-off).",
      },
      {
        label: "Tickets de Dúvidas no Suporte",
        value: "−40%",
        description: "Redução drástica no volume de chamados relacionados ao status e andamento das propostas. A criação de uma visualização de jornada clara e transparente deu autonomia ao usuário e desafogou a equipe de atendimento.",
      },
      {
        label: "Velocidade de Go-To-Market",
        value: "3x",
        description: "Agilidade multiplicada no lançamento de novas funcionalidades de crédito. Com 100% de aproveitamento dos componentes do Konsi Design System, o tempo de design e desenvolvimento de novas interfaces foi reduzido drasticamente.",
      },
      {
        label: "NPS (Zona de Excelência)",
        value: "+75",
        description: "Manutenção e consolidação de uma métrica de satisfação altamente saudável. A implementação da pesquisa pós-depósito provou que a transparência nas taxas e prazos blindou a experiência do usuário, mesmo em um fluxo financeiro de alta sensibilidade.",
      },
    ],
    highlight:
      "Em um produto de crédito, a confiança é a métrica principal. Minha decisão estratégica foi priorizar a clareza radical nas taxas e prazos, mesmo que isso exigisse fluxos um pouco mais longos. O resultado foi uma conversão de maior qualidade, com menos chamados no suporte e maior satisfação do cliente final.",
    cardTitle: "Konsi App: UX para Fintech de Crédito",
    cardLine: "App de crédito consignado criado do zero com foco em simplicidade para um público com baixa familiaridade digital.",
    cardTags: ["UX Research", "Mobile Fintech", "Acessibilidade"],
  },
  en: {
    title: "Konsi App",
    headline: "NPS above 80 points and +25% conversion in a financial app designed for users with low digital literacy.",
    summary:
      "Consigned credit app built from scratch focused on simplicity for users with low digital literacy.",
    challenge:
      "The challenge wasn't just to create a beautiful app,it was to offer credit in a human way to civil servants, many with low digital familiarity, balancing the user's real need with the product's technical capacity.",
    solution:
      "I designed the full journey from scratch: Onboarding → Registration → Login → Simulation → Contracting → Confirmation → Follow-Up, focused on reducing friction at every step.",
    process: [
      {
        step: "Research",
        description:
          "Conducted user research and usability tests to understand pain points,many elderly users and people with limited access to digital financial services.",
      },
      {
        step: "Flows",
        description:
          "Mapped all critical flows identifying where friction was highest, especially in contracting (documents, bank data, address).",
      },
      {
        step: "Design",
        description:
          "Created screens with large typography, clear hierarchy, and constant visual feedback to reduce anxiety in financial processes.",
      },
      {
        step: "Testing",
        description:
          "Validated flows with real users, iterating mainly on the contracting flow that looks simple but hides real complexity.",
      },
      {
        step: "NPS",
        description:
          "Implemented NPS from scratch as a continuous experience monitoring system, using data to prioritize improvements.",
      },
    ],
    metrics: [
      { label: "NPS implemented from scratch", value: "✓" },
      { label: "NPS", value: "Above 80 pts" },
      { label: "Conversion", value: "+25%" },
    ],
    highlight:
      "The contracting flow looks simple,just address and bank account,but hides real complexity: attaching multiple documents, async validations, and error states. That was the flow I iterated on the most and I'm most proud of.",
    cardTitle: "Konsi App: UX for Credit Fintech",
    cardLine: "Consigned credit app built from scratch focused on simplicity for users with low digital literacy.",
    cardTags: ["UX Research", "Mobile Fintech", "Accessibility"],
  },
};
