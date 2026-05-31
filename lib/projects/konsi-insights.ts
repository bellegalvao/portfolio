import type { Project } from "../types";

export const konsiInsights: Project = {
  slug: "konsi-insights",
  tags: ["Data Product", "Dashboard", "Design + Code"],
  images: ["/images/konsi-insights-dashboard.webp"],
  imageLayout: "stacked",
  midImages: ["/images/konsi-insights-inbox.webp", "/images/konsi-insights-modal.webp"],
  outroImages: ["/images/konsi-insights-guide.webp"],
  cover: "/images/konsi-insights.webp",
  links: {
    github: "https://github.com/bellegalvao/konsi-insights",
    live: "https://konsi-insights.vercel.app/",
  },
  pt: {
    title: "Konsi Insights",
    headline: "Central de insights: Escalando a cultura Data-Driven via UX engineering",
    summary:
      "Como projetei, desenvolvi e lancei uma plataforma interna de inteligência de produto (B2B) que centraliza e categoriza feedbacks dispersos, transformando dados qualitativos de múltiplos canais em decisões de backlog acionáveis para os times de Produto, CS e Design.",
    challenge:
      "Tomar decisões de produto baseadas em suposições (feeling) gera desperdício de esforço técnico e desalinhamento entre times. Na estrutura original, os feedbacks de clientes e relatórios de bugs estavam fragmentados em múltiplos silos (plataformas de suporte, CRMs e reviews), tornando o processo de triagem manual e ineficiente.\n\nIdentifiquei esse gargalo: o tempo gasto navegando entre ferramentas para consolidar o que os usuários reportavam atrasava o ciclo de melhorias do produto. O desafio era desenhar e construir uma ferramenta interna de alta fidelidade técnica que unificasse essas fontes em uma única camada visual transparente e de fácil consumo para tomadores de decisão.",
    challengePoints: [
      "Decisões baseadas em feeling: Sem uma fonte unificada de dados de cliente, cada discussão de produto era subjetiva. Era impossível provar ou refutar hipóteses com evidências reais de uso.",
      "Feedbacks fragmentados em múltiplos canais: As dores chegavam por suporte, NPS e app stores, mas ficavam isoladas em cada ferramenta. Cruzar essas informações manualmente era inviável no dia a dia.",
      "Backlog sem rastreabilidade: Sem visibilidade centralizada, era impossível priorizar por recorrência ou medir se uma entrega de fato resolveu a dor que a originou.",
    ],
    solution:
      "Desenvolvi de ponta a ponta uma plataforma interna de inteligência de dados B2B. O sistema agrega, filtra e exibe as principais dores dos clientes de forma agregada, gerando relatórios de impacto semanais e alimentando o backlog de produto com base em volumetria e recorrência de dados reais. Assumi o ciclo completo (Full-Cycle): do mapeamento do fluxo e design de interface no Figma ao desenvolvimento do código front-end e deploy na Vercel.",
    ledeMetrics: [
      { label: "Velocidade de consolidação de dados e discovery", value: "20%" },
      { label: "De adoção nos rituais de Produto, CS e Design", value: "100%" },
      { label: "De engenharia economizadas", value: "+40h" },
      { label: "Iniciativas de produto priorizadas no backlog", value: "24" },
    ],
    processLabel: "Decisões estratégicas e execução",
    process: [
      {
        step: "Mapeamento de padrões e arquitetura de informação",
        description:
          "O erro comum em centrais de feedback é criar apenas uma lista corrida de textos. Minha abordagem de design focou estritamente em visualização de dados e agrupamento por clusters de problemas. Desenhei uma interface com foco em hierarquia visual de criticidade, onde os times conseguem ver em segundos quais componentes do app principal estão gerando mais fricção na jornada do cliente.",
      },
      {
        step: "Abordagem UX engineering",
        description:
          "Para garantir que o produto fosse para a rua rápido, planejei o design focado em componentização limpa no Figma que conversasse diretamente com a estrutura de código em HTML/CSS/JS. Desenhar pensando na folha de estilos e na manipulação do DOM me permitiu criar uma interface fluida, responsiva e pronta para produção sem desperdício de linhas de código.",
      },
      {
        step: "Desenvolvimento potencializado por IA",
        description:
          "Adotei uma postura inovadora de desenvolvimento utilizando o Claude como um parceiro de engenharia front-end. Atuei como arquiteta do sistema, definindo a lógica de estado da aplicação, estrutura de dados e as regras de interface, enquanto utilizava a IA generativa para acelerar a escrita e o refactoring de funções JavaScript. Essa sinergia reduziu o tempo de desenvolvimento em semanas, demonstrando como a IA amplia radicalmente a capacidade de entrega de um designer sênior.",
      },
    ],
    metrics: [
      {
        label: "Otimização do tempo de discovery",
        value: "20%",
        description:
          "O tempo semanal que os times de Produto e Design gastavam abrindo múltiplas ferramentas, exportando planilhas e cruzando feedbacks manuais caiu de 5 horas para menos de 45 minutos. Um ganho massivo de foco e produtividade.",
      },
      {
        label: "Iniciativas Data-Driven",
        value: "24",
        description:
          "A centralização e clusterização dos dados permitiram mapear a real volumetria das dores dos clientes. Como resultado direto, 24 melhorias de produto foram priorizadas e inseridas no backlog com base em evidências estatísticas, eliminando o desperdício de esforço técnico em funcionalidades baseadas em suposições.",
      },
      {
        label: "Adoção e alinhamento entre times",
        value: "100%",
        description:
          "A plataforma alcançou adesão total, tornando-se a única fonte de verdade nos rituais semanais de alinhamento entre Customer Success (CS), Produto e UX. Isso reduziu o tempo de resposta interna sobre a causa raiz de reclamações de clientes.",
      },
      {
        label: "Eficiência de custo e engenharia",
        value: "40h",
        description:
          "Ao assumir o ciclo completo de desenvolvimento (Design + Código via IA), o projeto economizou mais de 40 horas de trabalho de um desenvolvedor sênior do time principal. A ferramenta foi para produção sem desviar ou atrasar o roadmap comercial da empresa.",
      },
    ],
    highlight:
      "Este projeto validou que as metodologias de design centradas no usuário funcionam de forma idêntica para o cliente interno. Além disso, provou que o papel do Product Designer em cenários modernos de tecnologia está mudando: ao utilizarmos Inteligência Artificial como uma extensão da nossa capacidade técnica, conseguimos estreitar a barreira entre o Figma e o código de produção, gerando valor tangível e velocidade de execução para a organização de forma totalmente autônoma.",
    cardTitle: "Konsi Insights: Do Figma ao Deploy",
    cardLine: "Dashboard que centraliza feedbacks de múltiplas plataformas para gerar backlog de produto com dados reais.",
    cardTags: ["Data Product", "Design + Code", "Full-cycle"],
  },
  en: {
    title: "Konsi Insights",
    headline: "Insights Hub: Scaling a Data-Driven Culture through UX Engineering",
    summary:
      "How I designed, developed, and launched an internal product intelligence platform (B2B) that centralizes and categorizes scattered feedback, transforming qualitative data from multiple channels into actionable backlog decisions for the Product, CS, and Design teams.",
    challenge:
      "Making product decisions based on assumptions (gut feeling) wastes technical effort and misaligns teams. In the original setup, customer feedback and bug reports were fragmented across multiple silos (support platforms, CRMs, and reviews), making the triage process manual and inefficient.\n\nI identified this bottleneck: the time spent navigating between tools to consolidate what users were reporting was slowing down the product improvement cycle. The challenge was to design and build a high-fidelity internal tool that unified those sources into a single transparent visual layer — easy to consume for decision-makers.",
    challengePoints: [
      "Decisions based on gut feeling: Without a unified source of customer data, every product discussion was subjective. There was no way to prove or disprove hypotheses with real usage evidence.",
      "Feedback fragmented across multiple channels: Pain points came in through support, NPS, and app stores, but remained siloed in each tool. Cross-referencing this information manually was unmanageable day to day.",
      "Backlog without traceability: Without centralized visibility, it was impossible to prioritize by recurrence or measure whether a delivery actually solved the pain point that originated it.",
    ],
    solution:
      "I developed an end-to-end internal B2B data intelligence platform. The system aggregates, filters, and displays the main customer pain points in a consolidated view, generating weekly impact reports and feeding the product backlog based on volume and recurrence of real data. I owned the full cycle: from flow mapping and interface design in Figma to front-end development and deployment on Vercel.",
    ledeMetrics: [
      { label: "Faster data consolidation and discovery", value: "20%" },
      { label: "Adoption across Product, CS, and Design rituals", value: "100%" },
      { label: "Engineering hours saved", value: "+40h" },
      { label: "Product initiatives prioritized in the backlog", value: "24" },
    ],
    processLabel: "Strategic decisions and execution",
    process: [
      {
        step: "Pattern mapping and information architecture",
        description:
          "The common mistake in feedback hubs is building a plain running list of text entries. My design approach focused strictly on data visualization and problem cluster grouping. I designed an interface centered on visual criticality hierarchy, where teams can see in seconds which components of the main app are generating the most friction in the customer journey.",
      },
      {
        step: "UX engineering approach",
        description:
          "To get the product to market fast, I planned the design around clean componentization in Figma that spoke directly to the HTML/CSS/JS code structure. Designing with the stylesheet and DOM manipulation in mind allowed me to build a fluid, responsive, production-ready interface with no wasted lines of code.",
      },
      {
        step: "AI-powered development",
        description:
          "I adopted an innovative development approach using Claude as a front-end engineering partner. I acted as the system architect — defining the application state logic, data structure, and interface rules — while using generative AI to accelerate JavaScript writing and refactoring. This synergy cut development time by weeks, demonstrating how AI radically expands the delivery capacity of a senior designer.",
      },
    ],
    metrics: [
      {
        label: "Discovery time optimization",
        value: "20%",
        description:
          "The weekly time Product and Design teams spent opening multiple tools, exporting spreadsheets, and manually cross-referencing feedback dropped from 5 hours to under 45 minutes — a massive gain in focus and productivity.",
      },
      {
        label: "Data-Driven initiatives",
        value: "24",
        description:
          "Centralizing and clustering the data made it possible to map the real volume of customer pain points. As a direct result, 24 product improvements were prioritized and added to the backlog based on statistical evidence, eliminating wasted technical effort on assumption-driven features.",
      },
      {
        label: "Team adoption and alignment",
        value: "100%",
        description:
          "The platform achieved full adoption, becoming the single source of truth in the weekly alignment rituals between Customer Success (CS), Product, and UX. This reduced internal response time on the root cause of customer complaints.",
      },
      {
        label: "Cost and engineering efficiency",
        value: "40h",
        description:
          "By owning the full development cycle (Design + Code via AI), the project saved over 40 hours of senior developer work from the core team. The tool shipped to production without diverting or delaying the company's commercial roadmap.",
      },
    ],
    highlight:
      "This project validated that user-centered design methodologies work identically for the internal customer. It also proved that the role of the Product Designer in modern technology settings is shifting: by using Artificial Intelligence as an extension of our technical capacity, we can close the gap between Figma and production code — generating tangible value and execution speed for the organization, fully autonomously.",
    cardTitle: "Konsi Insights: From Figma to Deploy",
    cardLine: "Dashboard that centralizes feedback from multiple platforms to generate data-driven product backlogs.",
    cardTags: ["Data Product", "Design + Code", "Full-cycle"],
  },
};
