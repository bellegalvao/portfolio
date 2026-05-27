import type { Project } from "../types";

export const minhaSorte: Project = {
  slug: "minha-sorte",
  year: "2021",
  tags: ["Product Design", "Mobile", "Em produção"],
  images: ["/images/minha-sorte-1.png", "/images/minha-sorte-2.png"],
  cover: "/images/minha-sorte.webp",
  links: {
    figma: "https://www.figma.com/design/9IOcNtIfc7QiDCd46dzAKS",
    android: "https://android.minhasorteapp.com.br",
  },
  pt: {
    title: "Minha Sorte",
    summary:
      "App de apostas em loteria com geração de palpites inteligentes por estatística. Em produção na loja.",
    challenge:
      "Criar um app de loteria que fosse além de um simples gerador de números,algo que usasse estatística para dar ao usuário uma vantagem real e uma experiência de acompanhamento completa.",
    solution:
      "Desenhei um app com 9 modalidades de loteria (Mega-Sena, Quina, Lotofácil, entre outras), palpites baseados em análise estatística de resultados históricos e 3 modalidades de pagamento.",
    process: [
      {
        step: "Conceito",
        description:
          "Pesquisei o comportamento de apostadores de loteria para entender o que realmente queriam além de sortear números.",
      },
      {
        step: "Design",
        description:
          "Criei a interface com visual clean e verde,a cor da sorte,e flows claros para cada modalidade de jogo.",
      },
      {
        step: "Pagamentos",
        description:
          "Desenhei 3 modalidades de pagamento: normal, manual e automático, cada uma com suas particularidades de UX.",
      },
      {
        step: "Produção",
        description:
          "O app foi desenvolvido em Flutter e publicado na loja,está em produção com usuários reais.",
      },
    ],
    metrics: [
      { label: "Modalidades de loteria", value: "9" },
      { label: "Modalidades de pagamento", value: "3" },
      { label: "Plataforma", value: "Flutter · Em produção" },
      { label: "Resultado marcante", value: "Usuário ganhou quadra na Mega-Sena" },
    ],
    highlight:
      "Um dos usuários ganhou uma quadra na Mega-Sena usando os palpites do app. Não tem métrica que supere isso.",
  },
  en: {
    title: "Minha Sorte",
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
  },
};
