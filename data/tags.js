/*
  Template — add a new tag:

  tagId: {
    label: "Display Name",   // shown in filter pills and badges
    border: "#HEX",          // pill border + tag dot color in sidebar
    bg: "#HEX",              // card background tint (currently unused)
    badgeBg: "#HEX",         // badge / filter pill background
    badgeText: "#HEX",       // badge / filter pill text
  },

  Adding an entry here automatically creates a filter pill in the UI.
  tagId must match the values used in topics.js → tags[] and hyperscalers[].tagId.
*/

const tagMeta = {
  aws: {
    label: "AWS",
    border: "#FF9900",
    bg: "#FFFBF0",
    badgeBg: "#FEF3C7",
    badgeText: "#92400E",
  },
  azure: {
    label: "Azure",
    border: "#0078D4",
    bg: "#F0F7FF",
    badgeBg: "#DBEAFE",
    badgeText: "#1D4ED8",
  },
  gcp: {
    label: "GCP",
    border: "#4285F4",
    bg: "#EFF6FF",
    badgeBg: "#E0E7FF",
    badgeText: "#3730A3",
  },
  snowflake: {
    label: "Snowflake",
    border: "#29B5E8",
    bg: "#F0FAFE",
    badgeBg: "#BAE6FD",
    badgeText: "#0369A1",
  },
  pricing: {
    label: "Pricing",
    border: "#10B981",
    bg: "#F0FDF4",
    badgeBg: "#D1FAE5",
    badgeText: "#065F46",
  },
  security: {
    label: "Security",
    border: "#8B5CF6",
    bg: "#F5F3FF",
    badgeBg: "#EDE9FE",
    badgeText: "#5B21B6",
  },
};
