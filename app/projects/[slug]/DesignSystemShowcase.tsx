"use client";

import React from "react";

/* ── Konsi DS exact token values ─────────────────────────────────────────── */
const T = {
  primary:   "#0A9F82",
  hover:     "#0DC7A2",
  active:    "#0FE2B8",
  bg:        "#F0F6F5",
  dark:      "#04513F",
  darker:    "#03261F",
  white:     "#FFFFFF",
  g900:      "#141514",
  g600:      "#5E6772",
  g400:      "#7C7C7C",
  g200:      "#BDBDBD",
  g100:      "#F0F0F0",
  g50:       "#F5F5F5",
  errDef:    "#E51D1D",
  errBg:     "#FFF1F1",
  okDef:     "#1EA853",
  okBg:      "#DDFBE7",
  warnDef:   "#F3A42E",
  warnBg:    "#FEF9EC",
  warnDark:  "#C87D0F",
};

const R  = "10px";
const F  = "Inter, system-ui, sans-serif";
const FM = "'JetBrains Mono', 'Fira Code', monospace";

/* ── Panel frame ─────────────────────────────────────────────────────────── */
function Panel({
  stepNum,
  title,
  children,
}: {
  stepNum: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[var(--border)] overflow-hidden mb-3">
      <div className="flex items-center gap-3 px-5 py-3 border-b border-[var(--border)] bg-[var(--surface)]">
        <span className="text-xs font-mono text-[var(--accent)]">{stepNum}</span>
        <span className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">{title}</span>
      </div>
      <div style={{ background: T.white, padding: "24px", fontFamily: F }}>
        {children}
      </div>
    </div>
  );
}

/* ── Panel 01 — Token Architecture ──────────────────────────────────────── */
function TokenPanel({ lang }: { lang: "pt" | "en" }) {
  const layers = [
    {
      name: "Global",
      sub: lang === "pt" ? "valores brutos" : "raw values",
      swatches: [
        { hex: T.darker,  label: "#03261F" },
        { hex: T.dark,    label: "#04513F" },
        { hex: T.primary, label: "#0A9F82" },
        { hex: T.hover,   label: "#0DC7A2" },
        { hex: T.active,  label: "#0FE2B8" },
        { hex: T.bg,      label: "#F0F6F5", border: true },
      ],
    },
    {
      name: "Alias",
      sub: lang === "pt" ? "tokens nomeados" : "named tokens",
      swatches: [
        { hex: T.darker,  label: "greenKonsi.darker" },
        { hex: T.dark,    label: "greenKonsi.dark" },
        { hex: T.primary, label: "greenKonsi.default" },
        { hex: T.hover,   label: "greenKonsi.main1" },
        { hex: T.active,  label: "greenKonsi.main2" },
        { hex: T.bg,      label: "greenKonsi.bg", border: true },
      ],
    },
    {
      name: lang === "pt" ? "Semântico" : "Semantic",
      sub: lang === "pt" ? "intenção de uso" : "use intent",
      swatches: [
        { hex: T.darker,  label: "brand.darkest" },
        { hex: T.dark,    label: "brand.dark" },
        { hex: T.primary, label: "interactive.default" },
        { hex: T.hover,   label: "interactive.hover" },
        { hex: T.active,  label: "interactive.active" },
        { hex: T.bg,      label: "surface.primary", border: true },
      ],
    },
  ];

  const systemColors = [
    { hex: T.errDef,  bg: T.errBg,  label: "semantic.error" },
    { hex: T.okDef,   bg: T.okBg,   label: "semantic.success" },
    { hex: T.warnDef, bg: T.warnBg, label: "semantic.warning" },
  ];

  return (
    <div>
      {/* 3-layer flow */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: "4px", alignItems: "start", marginBottom: "20px" }}>
        {layers.map((layer, li) => (
          <React.Fragment key={layer.name}>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, color: T.g600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>
                {layer.name}
              </p>
              <p style={{ fontSize: "10px", color: T.g400, marginBottom: "10px", fontFamily: FM }}>{layer.sub}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {layer.swatches.map((s) => (
                  <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{
                      width: "22px", height: "22px", borderRadius: "5px", flexShrink: 0,
                      background: s.hex,
                      border: s.border ? `1px solid ${T.g200}` : "none",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                    }} />
                    <span style={{ fontSize: "9.5px", fontFamily: FM, color: T.g600, whiteSpace: "nowrap" }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {li < layers.length - 1 && (
              <div style={{ display: "flex", alignItems: "center", paddingTop: "40px", color: T.primary, fontSize: "16px", padding: "40px 8px 0" }}>
                →
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Sistema de cores semânticas */}
      <div style={{ borderTop: `1px solid ${T.g100}`, paddingTop: "16px", marginTop: "4px" }}>
        <p style={{ fontSize: "10px", fontWeight: 600, color: T.g400, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
          {lang === "pt" ? "Cores de sistema" : "System colors"}
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {systemColors.map((c) => (
            <div key={c.label} style={{
              display: "flex", alignItems: "center", gap: "8px",
              background: c.bg, borderRadius: "8px", padding: "6px 12px",
            }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: c.hex, flexShrink: 0 }} />
              <span style={{ fontSize: "10px", fontFamily: FM, color: T.g600 }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* White label note */}
      <div style={{
        marginTop: "14px", padding: "10px 14px",
        background: T.bg, borderRadius: "8px",
        display: "flex", alignItems: "center", gap: "10px",
      }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "2px", background: T.primary, flexShrink: 0 }} />
        <span style={{ fontSize: "11px", color: T.dark, fontFamily: FM }}>
          {lang === "pt"
            ? "Camada semântica desacopla marca de valores — White Label a custo zero de design."
            : "Semantic layer decouples brand from values — White Label at zero design cost."}
        </span>
      </div>
    </div>
  );
}

/* ── Panel 02 — Component Library ───────────────────────────────────────── */
function ComponentPanel({ lang }: { lang: "pt" | "en" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

      {/* Buttons */}
      <div>
        <p style={{ fontSize: "10px", fontWeight: 600, color: T.g400, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
          {lang === "pt" ? "Botões — 4 variantes · 3 tamanhos" : "Buttons — 4 variants · 3 sizes"}
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
          <button style={{ background: T.primary, color: T.white, border: "none", borderRadius: R, padding: "10px 20px", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: F }}>
            Primary
          </button>
          <button style={{ background: "transparent", color: T.primary, border: `1.5px solid ${T.primary}`, borderRadius: R, padding: "9px 20px", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: F }}>
            Secondary
          </button>
          <button style={{ background: "transparent", color: T.primary, border: "none", borderRadius: R, padding: "10px 20px", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: F }}>
            Ghost
          </button>
          <button style={{ background: T.errDef, color: T.white, border: "none", borderRadius: R, padding: "10px 20px", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: F }}>
            Danger
          </button>
          <button disabled style={{ background: T.g100, color: T.g200, border: "none", borderRadius: R, padding: "10px 20px", fontSize: "14px", fontWeight: 600, cursor: "not-allowed", fontFamily: F }}>
            Disabled
          </button>
        </div>
      </div>

      {/* Chips */}
      <div>
        <p style={{ fontSize: "10px", fontWeight: 600, color: T.g400, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
          {lang === "pt" ? "Chips — Status, Filtro, Sugestão" : "Chips — Status, Filter, Suggestion"}
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
          {[
            { label: lang === "pt" ? "Aprovado" : "Approved",   bg: T.okBg,   color: T.okDef  },
            { label: lang === "pt" ? "Reprovado" : "Rejected",  bg: T.errBg,  color: T.errDef },
            { label: lang === "pt" ? "Pendente" : "Pending",    bg: T.warnBg, color: T.warnDark },
          ].map((chip) => (
            <span key={chip.label} style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              background: chip.bg, color: chip.color,
              padding: "4px 12px", borderRadius: "100px",
              fontSize: "12px", fontWeight: 500, fontFamily: F,
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: chip.color, flexShrink: 0 }} />
              {chip.label}
            </span>
          ))}
          <span style={{
            display: "inline-flex", alignItems: "center",
            background: T.bg, color: T.dark, border: `1px solid ${T.hover}`,
            padding: "4px 12px", borderRadius: "8px",
            fontSize: "12px", fontWeight: 500, fontFamily: F,
          }}>
            {lang === "pt" ? "Filtro ativo" : "Active filter"}
          </span>
          <span style={{
            display: "inline-flex", alignItems: "center",
            background: T.g50, color: T.g600, border: `1px solid ${T.g200}`,
            padding: "4px 12px", borderRadius: "8px",
            fontSize: "12px", fontWeight: 500, fontFamily: F,
          }}>
            {lang === "pt" ? "Filtro inativo" : "Inactive"}
          </span>
        </div>
      </div>

      {/* Input + Card */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <div>
          <p style={{ fontSize: "10px", fontWeight: 600, color: T.g400, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
            Input — focused
          </p>
          <div style={{ position: "relative", fontFamily: F }}>
            <label style={{
              position: "absolute", top: "-8px", left: "12px",
              background: T.white, padding: "0 4px",
              fontSize: "11px", color: T.primary, fontWeight: 600,
            }}>
              CPF
            </label>
            <div style={{
              border: `1.5px solid ${T.primary}`, borderRadius: R, padding: "11px 16px",
              fontSize: "14px", color: T.g900, boxShadow: `0 0 0 3px ${T.bg}`,
            }}>
              000.000.000-00
            </div>
          </div>
        </div>

        <div>
          <p style={{ fontSize: "10px", fontWeight: 600, color: T.g400, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
            Card — AppCard
          </p>
          <div style={{
            background: T.white, borderRadius: R, padding: "12px",
            boxShadow: "1px 1px 4px rgba(0,0,0,0.06), 0 0 6px rgba(0,0,0,0.04)",
            display: "flex", flexDirection: "column", gap: "6px",
          }}>
            <p style={{ fontSize: "11px", color: T.g600, fontFamily: F, margin: 0 }}>
              {lang === "pt" ? "Valor disponível" : "Available amount"}
            </p>
            <p style={{ fontSize: "18px", fontWeight: 700, color: T.g900, fontFamily: F, margin: 0 }}>
              R$ 4.230,00
            </p>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "4px",
              background: T.okBg, color: T.okDef,
              padding: "2px 8px", borderRadius: "6px",
              fontSize: "11px", fontWeight: 600, alignSelf: "flex-start", fontFamily: F,
            }}>
              + 12%
            </span>
          </div>
        </div>
      </div>

      {/* SnackBar feedback */}
      <div>
        <p style={{ fontSize: "10px", fontWeight: 600, color: T.g400, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
          {lang === "pt" ? "Feedback — SnackBar" : "Feedback — SnackBar"}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { bg: T.okBg,   border: T.okDef,   color: T.okDef,   icon: "✓", text: lang === "pt" ? "Proposta enviada com sucesso." : "Proposal sent successfully." },
            { bg: T.errBg,  border: T.errDef,  color: T.errDef,  icon: "!", text: lang === "pt" ? "Erro ao processar. Tente novamente." : "Processing error. Please try again." },
            { bg: T.warnBg, border: T.warnDef, color: T.warnDark, icon: "⚠", text: lang === "pt" ? "Sessão expira em 5 minutos." : "Session expires in 5 minutes." },
          ].map((snack) => (
            <div key={snack.text} style={{
              display: "flex", alignItems: "center", gap: "10px",
              background: snack.bg, border: `1px solid ${snack.border}20`,
              borderLeft: `3px solid ${snack.border}`,
              borderRadius: R, padding: "10px 14px",
            }}>
              <span style={{ fontSize: "12px", color: snack.color, fontWeight: 700, flexShrink: 0 }}>{snack.icon}</span>
              <span style={{ fontSize: "12px", color: T.g900, fontFamily: F }}>{snack.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Panel 03 — SSOT Pipeline ────────────────────────────────────────────── */
function SSOTPanel({ lang }: { lang: "pt" | "en" }) {
  const pipeline = [
    { label: "Figma",      sub: lang === "pt" ? "componentes" : "components",   color: T.primary },
    { label: "Tokens",     sub: "JSON / variables",                              color: T.primary },
    { label: "Flutter",    sub: "AppColors.dart",                                color: T.primary },
    { label: "GitHub Pages", sub: lang === "pt" ? "documentação" : "docs portal", color: T.primary },
  ];

  return (
    <div>
      {/* Flow */}
      <div style={{ display: "flex", alignItems: "stretch", marginBottom: "20px", gap: "0" }}>
        {pipeline.map((step, i) => (
          <React.Fragment key={step.label}>
            <div style={{
              flex: 1, background: T.bg, borderRadius: R,
              padding: "14px 10px",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
            }}>
              <p style={{ fontSize: "13px", fontWeight: 700, color: T.g900, fontFamily: F, margin: "0 0 2px" }}>
                {step.label}
              </p>
              <p style={{ fontSize: "9.5px", color: T.g600, fontFamily: FM, margin: 0 }}>
                {step.sub}
              </p>
            </div>
            {i < pipeline.length - 1 && (
              <div style={{ display: "flex", alignItems: "center", padding: "0 6px", color: T.g200, fontSize: "16px" }}>
                →
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Code output */}
      <pre style={{
        margin: 0, padding: "16px 20px", overflowX: "auto",
        fontFamily: FM, fontSize: "11px", lineHeight: "1.8",
        background: T.g900, borderRadius: R, color: "#e2e8f0",
      }}>
{`// AppColors.dart — gerado a partir dos tokens Figma
class AppColors {
  static const primary      = Color(0xFF0A9F82);  // greenKonsi.default
  static const primaryHover = Color(0xFF0DC7A2);  // greenKonsi.main1
  static const primaryBg    = Color(0xFFF0F6F5);  // greenKonsi.bg

  static const error        = Color(0xFFE51D1D);  // semantic.error
  static const success      = Color(0xFF1EA853);  // semantic.success
  static const warning      = Color(0xFFF3A42E);  // semantic.warning

  static const textPrimary  = Color(0xFF141514);  // gray.900
  static const textSecondary= Color(0xFF5E6772);  // gray.600
  static const divider      = Color(0xFFCECFCD);  // gray.200
}`}
      </pre>
    </div>
  );
}

/* ── Export ──────────────────────────────────────────────────────────────── */
export function DesignSystemShowcase({ lang }: { lang: "pt" | "en" }) {
  const labels: Record<"pt" | "en", { t01: string; t02: string; t03: string }> = {
    pt: {
      t01: "Arquitetura de Tokens Multi-Camada",
      t02: "Biblioteca de Componentes",
      t03: "Single Source of Truth",
    },
    en: {
      t01: "Multi-Layer Token Architecture",
      t02: "Component Library",
      t03: "Single Source of Truth",
    },
  };
  const l = labels[lang];

  return (
    <div className="mb-14">
      <Panel stepNum="01" title={l.t01}>
        <TokenPanel lang={lang} />
      </Panel>
      <Panel stepNum="02" title={l.t02}>
        <ComponentPanel lang={lang} />
      </Panel>
      <Panel stepNum="03" title={l.t03}>
        <SSOTPanel lang={lang} />
      </Panel>
    </div>
  );
}
