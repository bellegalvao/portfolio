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
      "Desenhei a jornada completa do zero: Onboarding → Cadastro → Login → Simulação → Contratação → Confirmação → Follow-Up, com foco em reduzir atrito em cada etapa.",
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
      "I designed the full journey from scratch: Onboarding → Registration → Login → Simulation → Contracting → Confirmation → Follow-Up, focused on reducing friction at every step.",
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
        description: "Drastic reduction in the volume of support tickets related to proposal status and progress. Creating a clear and transparent journey visualization gave users autonomy and relieved the support team.",
      },
      {
        label: "Go-To-Market Speed",
        value: "3x",
        description: "Multiplied agility in launching new credit features. With 100% reuse of Konsi Design System components, the time to design and develop new interfaces was drastically reduced.",
      },
      {
        label: "NPS (Excellence Zone)",
        value: "+75",
        description: "Maintenance and consolidation of a highly healthy satisfaction metric. The post-deposit survey implementation proved that transparency in rates and deadlines shielded the user experience, even in a highly sensitive financial flow.",
      },
    ],
    highlight:
      "In a credit product, trust is the primary metric. My strategic decision was to prioritize radical clarity in rates and deadlines, even if that required slightly longer flows. The result was higher-quality conversion, fewer support tickets, and greater end-user satisfaction.",
    cardTitle: "Konsi App: UX for Credit Fintech",
    cardLine: "Consigned credit app built from scratch focused on simplicity for users with low digital literacy.",
    cardTags: ["UX Research", "Mobile Fintech", "Accessibility"],
  },
};
