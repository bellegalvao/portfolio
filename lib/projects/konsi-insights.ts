import type { Project } from "../types";

export const konsiInsights: Project = {
  slug: "konsi-insights",
  year: "2025",
  tags: ["Data Product", "Dashboard", "Design + Code"],
  images: ["/images/konsi-insights-live.png"],
  cover: "/images/konsi-insights.webp",
  links: {
    github: "https://github.com/bellegalvao/konsi-insights",
    live: "https://konsi-insights.vercel.app/",
  },
  pt: {
    title: "Konsi Insights",
    headline: "Construí do zero o produto que o time de produto, CS e design usa toda semana para tomar decisões — do Figma ao deploy, sozinha.",
    summary:
      "Dashboard que centraliza feedbacks de múltiplas plataformas para gerar backlog de produto com dados reais.",
    challenge:
      "O time de produto, CS e design tomava decisões baseadas em feeling,os feedbacks dos clientes estavam dispersos em múltiplas plataformas sem visibilidade centralizada.",
    solution:
      "Criei um produto que agrega insights de clientes de diferentes fontes, tornando visível onde estão as dores, gerando relatórios e alimentando o backlog com dados reais.",
    process: [
      {
        step: "Problema",
        description:
          "Identifiquei a necessidade por experiência própria: perdia horas abrindo várias ferramentas para ter uma visão completa do que os usuários reclamavam.",
      },
      {
        step: "Design",
        description:
          "Desenhei a interface focada em visualização de padrões,não apenas listar feedbacks, mas revelar onde se concentram as dores.",
      },
      {
        step: "Desenvolvimento",
        description:
          "Construí o frontend em JavaScript com ajuda do Claude. Design e código 100% meu,do Figma ao Vercel.",
      },
    ],
    metrics: [
      { label: "Usuários", value: "Time de Produto, CS e Design" },
      { label: "Autoria", value: "Design + Código 100%" },
      { label: "Deploy", value: "Vercel" },
    ],
    highlight:
      "Fiz o design e o código. Usar o Claude como parceiro de desenvolvimento foi uma extensão natural do meu processo,assim como uso dados para embasar decisões de design, usei IA para ampliar minha capacidade de entrega.",
    cardTitle: "Konsi Insights: Do Figma ao Deploy",
    cardLine: "Dashboard que centraliza feedbacks de múltiplas plataformas para gerar backlog de produto com dados reais.",
    cardTags: ["Data Product", "Design + Code", "Full-cycle"],
  },
  en: {
    title: "Konsi Insights",
    headline: "Built from scratch the product the team uses every week to make decisions — from Figma to deploy, solo.",
    summary:
      "Dashboard that centralizes feedback from multiple platforms to generate data-driven product backlogs.",
    challenge:
      "The product, CS, and design teams made decisions based on gut feeling,customer feedback was scattered across multiple platforms without centralized visibility.",
    solution:
      "I built a product that aggregates customer insights from different sources, making pain points visible, generating reports, and feeding the backlog with real data.",
    process: [
      {
        step: "Problem",
        description:
          "I identified the need from my own experience: I was spending hours opening multiple tools to get a complete picture of what users were complaining about.",
      },
      {
        step: "Design",
        description:
          "Designed the interface focused on pattern visualization,not just listing feedback, but revealing where pain points concentrate.",
      },
      {
        step: "Development",
        description:
          "Built the frontend in JavaScript with Claude's help. Design and code 100% mine,from Figma to Vercel.",
      },
    ],
    metrics: [
      { label: "Users", value: "Product, CS & Design teams" },
      { label: "Authorship", value: "Design + Code 100%" },
      { label: "Deploy", value: "Vercel" },
    ],
    highlight:
      "I did the design and the code. Using Claude as a development partner was a natural extension of my process,just as I use data to support design decisions, I used AI to expand my delivery capacity.",
    cardTitle: "Konsi Insights: From Figma to Deploy",
    cardLine: "Dashboard that centralizes feedback from multiple platforms to generate data-driven product backlogs.",
    cardTags: ["Data Product", "Design + Code", "Full-cycle"],
  },
};
