export const DOMAIN_COLORS = {
  "Cloud Concepts": "#60a5fa",
  "Security and Compliance": "#a78bfa",
  Technology: "#ff9900",
  "Billing and Pricing": "#34d399",
};

export const DEFAULT_DOMAIN_COLOR = "#ff9900";

export function getDomainColor(domain) {
  return DOMAIN_COLORS[domain] || DEFAULT_DOMAIN_COLOR;
}
