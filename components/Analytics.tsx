"use client";

import { Analytics } from "@vercel/analytics/next";

export function PortfolioAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        if (typeof window !== "undefined" && localStorage.getItem("is_owner") === "true") {
          return null;
        }
        return event;
      }}
    />
  );
}
