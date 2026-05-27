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
    headline: "NPS acima de 80 pontos e conversão +25% em um app financeiro para um público com pouca familiaridade digital.",
    summary:
      "App de crédito consignado criado do zero com foco em simplicidade para um público com baixa familiaridade digital.",
    challenge:
      "O desafio não era só criar um app bonito,era oferecer crédito de forma humana para servidores públicos, muitos com baixa familiaridade digital, equilibrando a necessidade real do cliente com a capacidade técnica do produto.",
    solution:
      "Desenhei a jornada completa do zero: Onboarding → Cadastro → Login → Simulação → Contratação → Confirmação → Follow-Up, com foco em reduzir atrito em cada etapa.",
    process: [
      {
        step: "Pesquisa",
        description:
          "Conduzi pesquisas com usuários e testes de usabilidade para entender as dores do público,muitos idosos e pessoas com pouco acesso a serviços financeiros digitais.",
      },
      {
        step: "Fluxos",
        description:
          "Mapeei todos os fluxos críticos identificando onde o atrito era maior, especialmente na contratação (documentos, dados bancários, endereço).",
      },
      {
        step: "Design",
        description:
          "Criei as telas com tipografia grande, hierarquia clara e feedbacks visuais constantes para reduzir ansiedade no processo financeiro.",
      },
      {
        step: "Testes",
        description:
          "Validei os fluxos com usuários reais, iterando principalmente no fluxo de contratação que parece simples mas esconde complexidade real.",
      },
      {
        step: "NPS",
        description:
          "Implementei o NPS do zero como sistema de monitoramento contínuo da experiência, usando os dados para priorizar melhorias.",
      },
    ],
    metrics: [
      { label: "NPS implementado do zero", value: "✓" },
      { label: "NPS", value: "Acima de 80 pts" },
      { label: "Conversão", value: "+25%" },
    ],
    highlight:
      "O fluxo de contratação parece simples, só endereço e conta bancária, mas tem uma complexidade real: anexar documentos diversos, validações assíncronas e estados de erro. Esse foi o fluxo que mais criei soluções e melhorias, tenho muito orgulho dele.",
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
  },
};
