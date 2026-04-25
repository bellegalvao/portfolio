import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Isabelle Galvão — Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ color: "#b97aff", fontSize: 18, marginBottom: 20 }}>
          isabellegalvao.com.br
        </div>
        <div
          style={{
            color: "#f0f0f0",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: 20,
          }}
        >
          Isabelle Galvão
        </div>
        <div style={{ color: "#666666", fontSize: 32 }}>Product Designer</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
