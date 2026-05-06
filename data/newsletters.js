/*
  Template — add a new newsletter issue:

  {
    id: "nl-000",               // unique slug, used in URLs and sidebar
    title: "Newsletter Title",
    date: "Month YYYY",         // e.g. "June 2026" — drives sidebar grouping by year
    description: "One-sentence summary shown under the title.",
    topicIds: [                 // references ids in topics.js, rendered in order
      "topic-slug-1",
      "topic-slug-2",
    ],
  },

  Newest issue goes first. Tags are derived automatically from the linked topics.
*/

const newsletters = [
  {
    id: "nl-001",
    issue: 5,
    title:
      "AI Agents Go Enterprise, Certifications Tighten & Deal Mechanics Mature",
    date: "May 2026",
    description:
      "Enterprise AI agents land in the marketplace, listing requirements raise the bar, and concurrent agreement mechanics become a deal-closer tool.",
    topicIds: [
      "ai-agents",
      "concurrent-agreements",
      "marketplace-certifications",
    ],
  },
  {
    id: "nl-002",
    issue: 4,
    title:
      "Cloud Next 2026 Debrief, Co-Sell Decoded & Snowflake's Marketplace Moment",
    date: "April 2026",
    description:
      "Google Cloud Next 2026 recap with partner implications, a plain-English breakdown of co-sell programs, and why Snowflake Native Apps matter for ISVs.",
    topicIds: [
      "google-cloud-next-2026",
      "cosell-programs-decoded",
      "snowflake-native-apps",
    ],
  },
  {
    id: "nl-003",
    issue: 3,
    title: "Private Offers, ISV Funding & the BYOL Question",
    date: "March 2026",
    description:
      "Private offer mechanics, ISV funding programs compared, and when BYOL still makes sense.",
    topicIds: [
      "private-offer-mechanics",
      "isv-funding-programs",
      "byol-vs-saas",
    ],
  },
  {
    id: "nl-004",
    issue: 2,
    title:
      "Follow the Money: Disbursement Timelines, Fee Structures & Marketplace Tax",
    date: "February 2026",
    description:
      "When does revenue actually hit your account? A plain-English breakdown of how AWS, Azure, and GCP handle payment timing, revenue share, and sales tax collection.",
    topicIds: [
      "payment-disbursement",
      "revenue-share-fees",
      "tax-marketplace-facilitator",
    ],
  },
  {
    id: "nl-005",
    issue: 1,
    title: "2025 in Review: Partner Changes & What ISVs Should Watch",
    date: "January 2026",
    description:
      "2025 year in review, partner program changes that matter, and what ISVs should watch in 2026.",
    topicIds: [
      "marketplace-2025-review",
      "partner-program-changes-2025",
      "marketplace-outlook-2026",
    ],
  },

  // ── UNPUBLISHED (restore when content is ready) ──────────────────────────────
  /*
  { id: "nl-dec-2025", title: "re:Invent 2025 Recap & Q4 Deal Velocity", date: "December 2025", description: "Placeholder.", topicIds: ["reinvent-2025-recap", "end-of-year-deal-trends-2025"] },
  { id: "nl-nov-2025", title: "AI Workloads Hit Critical Mass & Picking Your Anchor Cloud", date: "November 2025", description: "Placeholder.", topicIds: ["ai-workloads-marketplace-2025", "bedrock-vs-azure-ai-2025"] },
  { id: "nl-oct-2025", title: "Pricing Model Shifts & Revenue Recognition on Marketplace", date: "October 2025", description: "Placeholder.", topicIds: ["pricing-shifts-q4-2025", "revenue-recognition-marketplace-2025"] },
  { id: "nl-sep-2025", title: "Security Certifications Overhauled — Are You Still Compliant?", date: "September 2025", description: "Placeholder.", topicIds: ["security-certifications-overhaul-2025", "compliance-requirements-mid-2025"] },
  { id: "nl-aug-2025", title: "Channel Dynamics, Snowflake Expansion & Mid-Year Partner Update", date: "August 2025", description: "Placeholder.", topicIds: ["channel-partner-trends-aug-2025", "snowflake-expansion-mid-2025"] },
  { id: "nl-jul-2025", title: "Commit Spend Mid-Year: EDP, MACC, and GCP Compared", date: "July 2025", description: "Placeholder.", topicIds: ["commit-spend-midyear-2025", "macc-edp-comparison-2025"] },
  { id: "nl-jun-2025", title: "Agent Frameworks: Early ISV Signals & ADK vs. Bedrock", date: "June 2025", description: "Placeholder.", topicIds: ["agent-frameworks-jun-2025", "adk-versus-bedrock-agents-2025"] },
  { id: "nl-may-2025", title: "Security Baseline & GCP Assured Workloads Deep Dive", date: "May 2025", description: "Placeholder.", topicIds: ["security-compliance-baseline-2025", "gcp-assured-workloads-2025"] },
  { id: "nl-dec-2024", title: "2024 Year in Review: Marketplace Matures & Pricing Evolves", date: "December 2024", description: "Placeholder.", topicIds: ["marketplace-year-review-2024", "pricing-evolution-2024"] },
  { id: "nl-sep-2024", title: "Cloud Next 2024 Recap & Snowflake Summit Highlights", date: "September 2024", description: "Placeholder.", topicIds: ["cloud-next-2024-recap", "snowflake-summit-2024"] },
  { id: "nl-mar-2024", title: "Q1 2024 Security Tightening & Azure Privacy Policy Shifts", date: "March 2024", description: "Placeholder.", topicIds: ["security-baseline-2024", "compliance-shifts-2024"] },
  */
];
