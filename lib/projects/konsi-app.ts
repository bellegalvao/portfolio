import type { Project } from "../types";

export const konsiApp: Project = {
  slug: "konsi-app",
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
    android: "https://play.google.com/store/search?q=konsi&c=apps&hl=pt_BR",
  },
  pt: {
    title: "Konsi App",
    headline: "Konsi App: Equilibrando Conversão e Complexidade Regulatória no Crédito Consignado",
    summary:
      "Como liderei a evolução da experiência mobile, traduzindo regras de negócio complexas (INSS, SIAPE, Governos) em uma jornada de alta conversão, transparência e retenção.",
    challenge:
      "A Konsi opera em um cenário financeiro altamente regulado e de baixa confiança por parte do usuário. O fluxo original sofria com um alto índice de drop-off porque tentava resolver a complexidade do ecossistema expondo-a diretamente ao cliente.\nMinha missão como Product Designer foi navegar por três grandes pilares de atrito:",
    challengePoints: [
      "A assimetria de informação (Fricção Cognitiva): O excesso de termos jurídicos e bancários gerava insegurança no preenchimento de dados sensíveis. O usuário não entendia o valor de cada etapa.",
      "A complexidade invisível: Cada convênio (SIAPE, INSS, instâncias governamentais) possui regras de negócio, limites de margem e exigências documentais completamente diferentes. O desafio era criar uma interface única e linear que absorvesse essa complexidade sem que o usuário percebesse as ramificações técnicas por trás da tela.",
      "O paradoxo da retenção: Crédito costuma ser uma jornada transacional (o usuário contrata e some). O objetivo era transformar o app em um hub de gestão financeira e de margem, estimulando o engajamento contínuo.",
    ],
    solution:
      "A resposta para o desafio foi redesenhar de ponta a ponta a jornada mobile da Konsi, cobrindo desde o onboarding e captação inicial até os fluxos críticos de simulação, contratação e acompanhamento pós-contratação. A estratégia central consistiu em criar uma camada de interface simples e unificada que absorvesse as fricções regulatórias e as regras assíncronas de múltiplos convênios. Ao transformar dados brutos de backend em componentes visuais claros e focar em uma arquitetura de revelação progressiva, o produto passou de um formulário burocrático para um ecossistema de alta conversão, focado em transparência e autonomia do usuário.",
    processTitle: "Decisões estratégicas de design",
    processIntro:
      "Para mover os ponteiros de negócio sem comprometer a segurança jurídica e técnica, adotei quatro frentes de atuação:",
    process: [
      {
        step: "Arquitetura baseada em carga cognitiva (Revelação progressiva)",
        description:
          "Em vez de encurtar o fluxo artificialmente (o que comprometeria a coleta de dados necessários para a análise de crédito), reestruturei a jornada utilizando Progressive Disclosure. Agrupei os dados em blocos lógicos e contextuais. Ao explicar o porquê de cada dado solicitado no momento exato da fricção, reduzimos a ansiedade e aumentamos drasticamente a taxa de completude do formulário.",
      },
      {
        step: "Dashboard de margem como gancho de retenção",
        description:
          "Para mitigar o comportamento estritamente transacional do app, desenhei uma área logada focada em visualização de dados financeiros. Utilizando os componentes do nosso Design System, criei um cockpit onde o usuário acompanha suas margens consignáveis e contratos atuais em tempo real. O app deixou de ser apenas “um lugar para pegar dinheiro” e virou uma ferramenta de controle.",
      },
      {
        step: "Design orientado a dados (PostHog & Metabase)",
        description:
          "Não desenhei no escuro. Mapeei todo o funil antigo e novo utilizando ferramentas de Product Analytics. Ao cruzar os dados quantitativos de abandono com as gravações de sessão, identificamos os gargalos exatos da esteira. Isso nos permitiu realizar iterações e melhorias de usabilidade em ciclos semanais, sem adivinhações.",
      },
      {
        step: "Mapeamento do “Momento Wow” para mensuração de NPS",
        description:
          "Implementar o NPS não foi apenas disparar um pop-up. Desenhei a jornada da pesquisa baseada no comportamento do usuário: o gatilho foi programado para o momento de maior valor percebido (logo após a confirmação do depósito/sucesso da proposta). Capturar o sentimento do usuário nesse ápice transformou um dado qualitativo isolado em uma métrica de saúde do produto altamente confiável e rastreável em tempo real.",
      },
    ],
    metrics: [
      {
        label: "Conversão no Funil de Crédito",
        value: "+24%",
        description: "A eliminação dos pontos de atrito psicológico e a clareza na simulação garantiram que mais usuários chegassem até a proposta final de forma qualificada.",
      },
      {
        label: "Tickets de Dúvidas no Suporte",
        value: "−40%",
        description: "Ao desenhar uma linha do tempo clara e transparente do status da proposta dentro do app, demos autonomia ao cliente. Isso gerou um alívio massivo na operação de atendimento, permitindo que a equipe focasse em casos de alta complexidade.",
      },
      {
        label: "Velocidade de Go-To-Market",
        value: "3x",
        description: "A maturidade do processo de handoff e o uso rigoroso de componentes globais do Design System conectaram perfeitamente Design e Engenharia. O tempo gasto desenhando e codificando telas do zero caiu drasticamente, permitindo testar novos produtos de crédito em tempo recorde.",
      },
      {
        label: "NPS (Zona de Excelência)",
        value: "+75",
        description: "A nota reflete o acerto da estratégia de transparência. Mesmo lidando com um produto financeiro sensível, a clareza sobre taxas, prazos e andamento gerou blindagem de marca e recomendação orgânica.",
      },
    ],
    highlight:
      "No mercado de fintechs, muitas vezes assume-se que 'menos telas' significa uma experiência melhor. Este case provou o contrário: em produtos de crédito, a confiança é a métrica que destrava a conversão. Priorizar a clareza radical nas taxas, regras e prazos, mesmo que isso exigisse um fluxo com mais etapas explicativas, foi a decisão de design que gerou leads de maior qualidade, reduziu o custo operacional de suporte e fidelizou o cliente na base.",
    cardTitle: "Konsi App: UX para Fintech de Crédito",
    cardLine: "App de crédito consignado criado do zero com foco em simplicidade para um público com baixa familiaridade digital.",
    cardTags: ["UX Research", "Mobile Fintech", "Acessibilidade"],
  },
  en: {
    title: "Konsi App",
    headline: "Konsi App: Balancing Conversion and Regulatory Complexity in Consigned Credit",
    summary:
      "How I led the evolution of the mobile experience, translating complex business rules (INSS, SIAPE, Government) into a high-conversion, transparent, and retention-focused journey.",
    challenge:
      "Konsi operates in a highly regulated financial environment with low user trust. The original flow suffered from high drop-off rates because it tried to resolve the ecosystem's complexity by exposing it directly to the customer.\nMy mission as a Product Designer was to navigate three major friction pillars:",
    challengePoints: [
      "Information asymmetry (Cognitive Friction): The excess of legal and banking jargon created insecurity when filling in sensitive data. Users didn't understand the value of each step.",
      "Invisible complexity: Each agreement (SIAPE, INSS, government entities) has completely different business rules, margin limits, and documentation requirements. The challenge was to build a single, linear interface that absorbed this complexity without the user noticing the technical branches behind the screen.",
      "The retention paradox: Credit tends to be a transactional journey (the user contracts and disappears). The goal was to turn the app into a financial and margin management hub, encouraging continuous engagement.",
    ],
    solution:
      "The answer to the challenge was to redesign Konsi's mobile journey end-to-end, covering everything from onboarding and initial acquisition to the critical flows of simulation, contracting, and post-contracting follow-up. The core strategy was to build a simple, unified interface layer that absorbed regulatory friction and the asynchronous rules of multiple agreements. By translating raw backend data into clear visual components and focusing on a progressive disclosure architecture, the product evolved from a bureaucratic form into a high-conversion ecosystem centered on transparency and user autonomy.",
    processTitle: "Strategic design decisions",
    processIntro:
      "To move the business metrics without compromising legal and technical security, I adopted four fronts of action:",
    process: [
      {
        step: "Cognitive load architecture (Progressive Disclosure)",
        description:
          "Rather than artificially shortening the flow (which would compromise the data collection required for credit analysis), I restructured the journey using Progressive Disclosure. I grouped data into logical, contextual blocks. By explaining the reason behind each requested field at the exact moment of friction, we reduced anxiety and dramatically increased form completion rates.",
      },
      {
        step: "Margin dashboard as a retention hook",
        description:
          "To mitigate the app's strictly transactional behavior, I designed a logged-in area focused on financial data visualization. Using our Design System components, I created a cockpit where users track their consignable margins and current contracts in real time. The app stopped being just ‘a place to get money’ and became a control tool.",
      },
      {
        step: "Data-driven design (PostHog & Metabase)",
        description:
          "I didn't design in the dark. I mapped the entire old and new funnel using Product Analytics tools. By cross-referencing quantitative drop-off data with session recordings, we identified the exact bottlenecks in the pipeline. This allowed us to run usability iterations and improvements in weekly cycles, without guesswork.",
      },
      {
        step: "Mapping the 'Wow Moment' for NPS measurement",
        description:
          "Implementing NPS was not just triggering a pop-up. I designed the survey journey based on user behavior: the trigger was programmed for the moment of highest perceived value (right after deposit confirmation/proposal success). Capturing user sentiment at this peak transformed an isolated qualitative data point into a highly reliable, real-time trackable product health metric.",
      },
    ],
    metrics: [
      {
        label: "Credit Funnel Conversion",
        value: "+24%",
        description: "Eliminating psychological friction points and clarifying the simulation ensured that more users reached the final proposal in a qualified manner.",
      },
      {
        label: "Support Inquiry Tickets",
        value: "−40%",
        description: "By designing a clear and transparent proposal status timeline inside the app, we gave customers autonomy. This generated massive relief for the support operation, allowing the team to focus on high-complexity cases.",
      },
      {
        label: "Go-To-Market Speed",
        value: "3x",
        description: "The maturity of the handoff process and rigorous use of global Design System components perfectly connected Design and Engineering. Time spent designing and coding screens from scratch dropped drastically, enabling new credit products to be tested in record time.",
      },
      {
        label: "NPS (Excellence Zone)",
        value: "+75",
        description: "The score reflects the success of the transparency strategy. Even handling a sensitive financial product, clarity around rates, deadlines, and progress generated brand protection and organic recommendations.",
      },
    ],
    highlight:
      "In the fintech market, it's often assumed that 'fewer screens' means a better experience. This case proved the opposite: in credit products, trust is the metric that unlocks conversion. Prioritizing radical clarity around rates, rules, and deadlines — even when that required a flow with more explanatory steps — was the design decision that generated higher-quality leads, reduced operational support costs, and retained customers in the base.",
    cardTitle: "Konsi App: UX for Credit Fintech",
    cardLine: "Consigned credit app built from scratch focused on simplicity for users with low digital literacy.",
    cardTags: ["UX Research", "Mobile Fintech", "Accessibility"],
  },
};
