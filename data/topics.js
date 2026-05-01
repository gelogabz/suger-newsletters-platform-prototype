const topics = [
  // ── MAY 2026 ────────────────────────────────────────────────────────────────

  {
    id: "ai-agents",
    title: "AI Agents on the Marketplace",
    subtitle: "How the agent layer is reshaping what ISVs list, how they bill, and who buys",
    tags: ["aws", "azure", "gcp"],
    intro:
      "With Google Cloud's Agent Marketplace now open and AWS and Azure's agent frameworks in wide production use, the question for marketplace ISVs has shifted from 'should we be here' to 'how do we compete.' The hyperscaler agent layer is where platform stickiness is being built — and where ISVs with AI-adjacent or AI-native products have a narrow window to establish a listing position before the category matures.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Bedrock Multi-Agent Collaboration: GA Since March 2025",
        body: "Amazon Bedrock's multi-agent framework — announced at re:Invent 2024 and generally available since March 2025 — enables networks of specialized agents to coordinate and delegate tasks autonomously. AWS simultaneously launched the Nova model family (Micro, Lite, Pro) at re:Invent, with Nova Premier following in April 2025 — all optimized for cost and speed on Bedrock-native workloads. For marketplace ISVs, the strategic path is clear: Bedrock-integrated products qualify for ACE co-sell as 'AI-enabled,' and AWS field teams are actively prioritizing agent-compatible listings in their enterprise pipeline.",
        source: {
          label: "Amazon Bedrock Multi-Agent Docs",
          url: "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html",
        },
      },
      {
        tagId: "azure",
        headline: "AI Foundry and Copilot Studio: Agent Distribution Through M365",
        body: "Microsoft repositioned Azure AI Foundry (announced at Ignite, November 2024) as the central hub for enterprise agent development. The distribution play is the real story: Copilot Studio lets teams build agents that live inside Teams, Outlook, and SharePoint — where enterprise knowledge workers already operate. For ISVs evaluating agent platforms, Azure's pitch is adoption through existing workflows, not a new interface your customers have to learn. Copilot Studio-integrated listings on Azure Marketplace qualify for Azure IP Co-sell Incentivized status, unlocking Microsoft's full field sales motion.",
        source: {
          label: "Azure AI Foundry Documentation",
          url: "https://learn.microsoft.com/en-us/azure/ai-studio/",
        },
      },
      {
        tagId: "gcp",
        headline: "Agent Marketplace Launched at Cloud Next 2026",
        body: "Google Cloud launched the Agent Marketplace at Cloud Next 2026 (April 22–24), giving ISVs a dedicated distribution channel for AI agents within Google Cloud Marketplace. At launch, 70+ partner agents are available from Salesforce, SAP, ServiceNow, Workday, Atlassian, Adobe, and others — all discoverable inside Gemini Enterprise without a separate enterprise purchase decision. Google's Agentspace, first announced at Cloud Next 2025, provides the employee-facing interface that surfaces these agents. For ISVs building on GCP, the Agent Marketplace is the fastest path from listing to enterprise buyer discovery.",
        source: {
          label: "Google Cloud Next 2026 Wrap Up",
          url: "https://cloud.google.com/blog/topics/google-cloud-next/google-cloud-next-2026-wrap-up",
        },
      },
    ],
    implications:
      "Enterprise buyers evaluating AI strategies are making implicit platform commitments — Bedrock's multi-agent framework, Copilot Studio's M365 distribution, and Google's Agent Marketplace each create different dependency structures for ISVs and their customers. For marketplace sellers, the window to position products as agent-compatible or agent-powered is now: the early-mover advantage in these agent directories compounds as enterprise adoption scales. ISVs without a clear agent story risk being deprioritized in co-sell motions as hyperscaler field teams focus their pipeline on agent-integrated products. The practical first step is ensuring your marketplace listing explicitly describes agent compatibility — most hyperscaler marketplace teams will surface that in co-sell conversations.",
  },

  {
    id: "concurrent-agreements",
    title: "Concurrent Agreements",
    subtitle:
      "Marketplace deal mechanics are catching up to enterprise reality",
    tags: ["aws", "azure", "gcp"],
    intro:
      "Private offers and custom deal structures across AWS, Azure, and GCP have matured significantly. The underlying mechanics — who can negotiate with whom, how agreements stack, and how resellers fit in — now determine how fast complex enterprise deals close on-marketplace versus falling off it entirely.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Concurrent Private Offers and Flexible Payment Scheduling",
        body: "AWS Marketplace supports concurrent private offers — sellers run simultaneous negotiations with multiple buyers, and each buyer can hold multiple active agreements with the same seller without blocking others. Flexible payment scheduling (expanded to Channel Partner Private Offers in February 2025) lets sellers structure installment-based deals directly in the marketplace, reducing the number of enterprise contracts that fall off-platform because standard upfront annual pricing doesn't fit. AWS also introduced Express Private Offers in November 2025, a faster deal creation mechanism for time-sensitive opportunities.",
        source: {
          label: "AWS Marketplace Private Offers",
          url: "https://docs.aws.amazon.com/marketplace/latest/userguide/private-offers-overview.html",
        },
      },
      {
        tagId: "azure",
        headline: "Multiparty Private Offers Expand the Channel",
        body: "Azure's Multiparty Private Offer (MPO) system lets ISVs, distributors, and resellers collaborate on a single deal without moving off-marketplace. A reseller can mark up an ISV's base offer, both parties have visibility into the deal structure, and the customer receives a single transaction. This is Azure's direct answer to the off-marketplace discount problem — keeping channel economics on-platform without sacrificing partner margin.",
        source: {
          label: "Azure Marketplace Multiparty Private Offers",
          url: "https://learn.microsoft.com/en-us/partner-center/marketplace/multiparty-private-offers-for-isv",
        },
      },
      {
        tagId: "gcp",
        headline: "MCPO and the Procurement API: GCP's Channel Play",
        body: "GCP's Marketplace Channel Private Offer (MCPO) enables resellers to create custom private offers based on an ISV's listing without involving the ISV in each transaction. Starting June 2025, all qualifying MCPO purchases result in 100% commit drawdown for the customer against their GCP committed spend — making channel deals as commitment-friendly as direct purchases. GCP's Procurement API layers on top to give ISVs and partners programmatic control over offer creation, entitlement management, and agreement status.",
        source: {
          label: "GCP Marketplace Channel Private Offers",
          url: "https://cloud.google.com/marketplace/docs/partners/integrated-saas/create-channel-private-offer",
        },
      },
    ],
    implications:
      "The hyperscalers are all converging on the same insight: deals that leave the marketplace are revenue they can't measure or attribute. Every private offer improvement, concurrent negotiation feature, and channel mechanic exists to keep more deal value on-platform. For ISVs, marketplace-native deal structures are increasingly viable for complex enterprise contracts — not just self-serve SMB. For channel partners, MPO and CPPO mechanics are the primary levers for profitability. Understanding each hyperscaler's deal flow isn't a nice-to-have; it's how you price and structure deals competitively.",
  },

  {
    id: "marketplace-certifications",
    title: "Marketplace Certification Requirements Are Tightening",
    subtitle: "What changed, what's now enforced, and what ISVs need to do",
    tags: ["aws", "azure", "gcp"],
    intro:
      "Marketplace compliance requirements have tightened across all three hyperscalers in the past 18 months. What was optional is now required; what was required now has enforcement mechanisms. ISVs who haven't reviewed their certification status recently may be out of compliance — or losing visibility in search results.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Foundational Technical Review (FTR) Is Now the Baseline",
        body: "AWS's Foundational Technical Review (FTR) is required for ISVs co-selling and listing solutions on AWS Marketplace, assessing security posture, well-architected alignment, and operational readiness. ISVs that pass earn the AWS Qualified Software badge, which is surfaced in marketplace search results and the AWS Partner Solutions Finder. AWS recommends completing the FTR for all software products that run on or integrate with AWS — and ISVs without it find themselves deprioritized in co-sell motions where AWS field teams look for validated partners.",
        source: {
          label: "AWS Partner Foundational Technical Review",
          url: "https://docs.aws.amazon.com/partner-central/latest/builder-guide/foundational-technical-review.html",
        },
      },
      {
        tagId: "azure",
        headline: "Publisher Attestation and Security Baseline Requirements",
        body: "Azure Marketplace introduced publisher attestation requirements, where ISVs must self-certify against Microsoft's security baseline and provide documentation on data handling, encryption standards, and vulnerability disclosure processes. The process runs through Partner Center and is renewal-based — publishers who don't complete attestation risk listing suspension. Microsoft Defender for Cloud integration is now strongly recommended (and in some categories required) for Azure Marketplace listings, giving buyers automated security posture visibility into ISV products they purchase.",
        source: {
          label: "Azure Marketplace Certification Policies",
          url: "https://learn.microsoft.com/en-us/partner-center/marketplace/certification-policies",
        },
      },
      {
        tagId: "gcp",
        headline: "Google Cloud Ready and Assured Workloads Alignment",
        body: "GCP's Assured Workloads framework — which provides compliance controls for regulated industries — increasingly requires ISV listings to demonstrate alignment with the compliance postures it enforces. For ISVs targeting government, FSI, or healthcare buyers on GCP, Assured Workloads compatibility is a prerequisite for access to those customer segments. GCP also runs the Google Cloud Ready — Generative AI program, which validates ISV products against GCP's AI platform — products with this designation receive preferential treatment in marketplace search and co-sell campaigns.",
        source: {
          label: "Google Cloud Ready Program",
          url: "https://cloud.google.com/partners/resources/google-cloud-ready",
        },
      },
    ],
    implications:
      "Certification is no longer just about compliance — it's about search visibility. All three hyperscalers now use certification status as a ranking signal in marketplace discovery. Uncertified listings rank lower, appear in fewer curated collections, and don't qualify for co-sell programs that require validated status. If your listing hasn't been through FTR, publisher attestation, or Google Cloud Ready in the past 12 months, schedule it now — the opportunity cost of delay compounds every quarter.",
  },

  // ── APRIL 2026 ──────────────────────────────────────────────────────────────

  {
    id: "google-cloud-next-2026",
    title: "Google Cloud Next 2026: The Agent Marketplace Opens for Business",
    subtitle: "What April's biggest cloud event means for ISVs on all three hyperscalers",
    tags: ["gcp", "aws", "azure"],
    intro:
      "Google Cloud Next 2026 (April 22–24, Mandalay Bay, Las Vegas) delivered 260 announcements to 32,000+ attendees. For ISVs and channel partners, the headline was the launch of the Agent Marketplace — a new distribution channel for partner-built AI agents inside Google Cloud — backed by a $750M partner innovation fund. Here's what changed for sellers, and what it signals across all three clouds.",
    hyperscalers: [
      {
        tagId: "gcp",
        headline: "Agent Marketplace Opens: ISVs Can Now Sell Agents Directly to Enterprise",
        body: "Google Cloud launched the Agent Marketplace at Next 2026, giving ISVs a dedicated path to sell AI agents directly to enterprise buyers inside Google Cloud Marketplace. At launch, 70+ pre-built partner agents are available from Salesforce, SAP, ServiceNow, Workday, Atlassian, Box, Oracle, Palo Alto Networks, and others — all discoverable within Gemini Enterprise. Google simultaneously announced a $750M partner innovation fund offering engineering support, tooling, and incentives for agent development, and introduced forward-deployed Google Cloud engineers for customers of select strategic partners. A dedicated Partner Summit on April 21 gave ecosystem partners early roadmap access and co-sell alignment before the main event.",
        source: {
          label: "Google Cloud Next 2026 Wrap Up",
          url: "https://cloud.google.com/blog/topics/google-cloud-next/google-cloud-next-2026-wrap-up",
        },
      },
      {
        tagId: "aws",
        headline: "AWS Reinforces Bedrock as the Enterprise-Stable Alternative",
        body: "In the months surrounding Google Cloud Next 2026, AWS reinforced Amazon Bedrock as the mature, enterprise-ready orchestration platform for agent workloads — positioning stability and integration depth over the novelty of a new marketplace category. Nova model updates and Bedrock's multi-agent collaboration framework, generally available since March 2025, remain the primary AWS story. AWS ISV Accelerate co-sell motions continued to prioritize Bedrock-integrated ISV listings through Q2 2026. The November 2025 Express Private Offers launch — enabling faster deal creation — is also worth noting for ISVs managing high-velocity pipeline on AWS.",
        source: {
          label: "AWS ISV Accelerate Program",
          url: "https://aws.amazon.com/partners/programs/isv-accelerate/",
        },
      },
      {
        tagId: "azure",
        headline: "Microsoft Doubles Down on M365 as the Agent Distribution Advantage",
        body: "Rather than launching a competing agent marketplace, Microsoft continued building on Copilot Studio's distribution strength: agents built with Copilot Studio run inside Teams, Outlook, and SharePoint — reaching enterprise users without requiring a separate purchase decision. Azure AI Foundry remains the development control plane, with Azure Marketplace as the transact layer. For ISVs evaluating where to invest agent listing resources, Microsoft's answer to Google's Agent Marketplace is channel penetration through M365's installed base — a different bet, but one with significant enterprise reach.",
        source: {
          label: "Azure AI Foundry Documentation",
          url: "https://learn.microsoft.com/en-us/azure/ai-studio/",
        },
      },
    ],
    implications:
      "Google Cloud Next 2026's Agent Marketplace launch is the most significant new ISV distribution channel since the hyperscalers opened SaaS listings. If your product is — or can credibly be packaged as — an AI agent, there is now a direct path to enterprise distribution through GCP, with Google's $750M fund providing funded partnership paths for qualifying ISVs. For businesses already listed on AWS or Azure, this isn't a forced choice: multicloud agent listings are the optimal strategy. The window to establish an early agent listing on GCP before the category becomes crowded is Q2 and Q3 2026.",
  },

  {
    id: "cosell-programs-decoded",
    title: "Co-Sell Programs Decoded",
    subtitle: "ACE, Azure IP Co-sell, and GCP Partner Advantage — compared",
    tags: ["aws", "azure", "gcp"],
    intro:
      "Co-selling with a hyperscaler is not the same thing as listing on their marketplace. Understanding the mechanics of each program — who qualifies, what the seller gets, and how referrals flow — is the difference between a theoretical partnership and a real revenue channel.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "ACE: The Engine Behind AWS Co-Sell",
        body: "APN Customer Engagements (ACE) is AWS's co-sell platform where ISVs submit opportunities and AWS field teams validate, share leads, and track attributed revenue. To participate, ISVs need an active AWS Marketplace listing and AWS Partner Network membership at the Select tier or above. The key metric AWS tracks is Marketplace Transaction Revenue (MTR) — the more revenue flowing through the marketplace, the more co-sell resources AWS allocates. ISVs who consistently close ACE opportunities get access to AWS field seller introductions and funded proof-of-concept support.",
        source: {
          label: "AWS Partner Central — ACE Program",
          url: "https://docs.aws.amazon.com/partner-central/latest/builder-guide/index.html",
        },
      },
      {
        tagId: "azure",
        headline: "Azure IP Co-sell Status: The Tier That Opens Doors",
        body: "Azure IP Co-sell status is the designation that unlocks Microsoft's sales team as a distribution channel. To achieve it, ISVs must have a published offer in Azure Marketplace, hit defined business KPIs, and complete a business profile in Partner Center. Once achieved, Microsoft field sellers can refer, co-sell, and submit partner-originated leads. The Azure ISV Success program layered on top provides funding, technical support, and go-to-market resources based on partner performance.",
        source: {
          label: "Azure IP Co-sell Requirements",
          url: "https://learn.microsoft.com/en-us/partner-center/co-sell-overview",
        },
      },
      {
        tagId: "gcp",
        headline: "GCP Partner Advantage: Build, Sell, and Service Tracks",
        body: "Google Cloud's Partner Advantage program organizes ISVs into Build, Sell, and Service tracks, each with distinct incentives. For marketplace ISVs, the Sell track is most relevant — achieving Partner status unlocks co-sell engagement with GCP field teams, while Premier Partner status adds a dedicated partner development manager and funded campaigns. GCP measures ISV success through Marketplace transactions and Customer Success Plans (CSPs), which tie partner incentives to adoption outcomes rather than just bookings.",
        source: {
          label: "Google Cloud Partner Advantage Program",
          url: "https://cloud.google.com/partners/partnersearch/partner-advantage",
        },
      },
    ],
    implications:
      "Co-sell programs are not passive — they require active pipeline submission, relationship management, and consistent Marketplace transaction volume to unlock their full value. The ISVs seeing the best returns treat ACE, IP Co-sell, and Partner Advantage as sales channels with dedicated owners, not as checkboxes on a partnership agreement. If your co-sell motion is managed by someone for whom it's a 20% responsibility, you're leaving significant pipeline on the table.",
  },

  {
    id: "snowflake-native-apps",
    title: "Snowflake Native App Framework",
    subtitle: "A serious distribution channel for data-adjacent ISVs",
    tags: ["snowflake", "aws", "gcp"],
    intro:
      "Snowflake Marketplace has become a significant distribution channel for ISVs whose products run on or interact with Snowflake data. The Native App Framework — generally available since June 2023 — changes what's possible for data-adjacent ISVs, and the cross-listing strategy with AWS and GCP is where the real opportunity lies.",
    hyperscalers: [
      {
        tagId: "snowflake",
        headline: "Native App Framework: Apps That Live Inside the Data",
        body: "Snowflake's Native App Framework lets ISVs build applications that execute directly within a customer's Snowflake environment — no data egress, no separate deployment, no infrastructure management by the buyer. The ISV's code runs inside the customer's data perimeter, supporting Streamlit-based UIs, stored procedures, and external functions. For analytics, ML, and data transformation ISVs, this eliminates the biggest adoption friction: getting access to customer data without a lengthy security review.",
        source: {
          label: "Snowflake Native App Framework Docs",
          url: "https://docs.snowflake.com/en/developer-guide/native-apps/native-apps-about",
        },
      },
      {
        tagId: "aws",
        headline: "Cross-Listing: AWS Marketplace + Snowflake Marketplace",
        body: "The majority of enterprise Snowflake deployments run on AWS, making AWS Marketplace and Snowflake Marketplace the two primary distribution channels for data-adjacent ISVs targeting these customers. ISVs can cross-list on both — a listing on AWS Marketplace enables private offer and co-sell with AWS field teams, while a Snowflake Marketplace listing enables discovery by Snowflake users browsing within the platform. The cross-listing strategy is common for ISVs doing data enrichment, observability, or ETL — appearing in both discovery surfaces without duplicating the underlying product.",
        source: {
          label: "AWS Marketplace + Snowflake Integration",
          url: "https://docs.aws.amazon.com/marketplace/latest/userguide/listing-on-marketplace.html",
        },
      },
      {
        tagId: "gcp",
        headline: "Snowflake on GCP: The Cortex and Gemini Angle",
        body: "Snowflake's partnership with Google Cloud deepened through Cortex — Snowflake's AI/ML framework — which integrates with Google's Vertex AI and Gemini models. For ISVs targeting GCP customers who use Snowflake, this creates a dual listing opportunity: GCP Marketplace for infrastructure-level discovery and Snowflake Marketplace for data-layer access. GCP customers in regulated industries (FSI, healthcare) increasingly use Snowflake as their data governance layer, making Snowflake Marketplace penetration into GCP accounts a strategic priority for relevant ISVs.",
        source: {
          label: "Google Cloud Marketplace Documentation",
          url: "https://cloud.google.com/marketplace/docs",
        },
      },
    ],
    implications:
      "The Snowflake opportunity is most relevant for ISVs who already have customers using Snowflake — the marketplace listing converts what's currently a direct sales motion into a self-serve discovery path. If you're selling data enrichment, observability, or ML tooling and you don't have a Snowflake Marketplace listing, you're invisible to a buyer segment that is actively browsing and spending.",
  },

  // ── MARCH 2026 ──────────────────────────────────────────────────────────────

  {
    id: "private-offer-mechanics",
    title: "Private Offer Mechanics: The Full Picture",
    subtitle: "CPPO, MPO, and MCPO — how channel deals actually work",
    tags: ["aws", "azure", "gcp"],
    intro:
      "Private offers are how enterprise deals actually get done on cloud marketplaces. The public catalog is for self-serve; private offers are for negotiated terms, custom pricing, and complex deal structures. Each hyperscaler has different mechanics — and the differences matter for ISVs managing channel partners.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "CPPO and Resale Authorization: How Channel Deals Work",
        body: "AWS Marketplace's Channel Partner Private Offer (CPPO) lets ISVs authorize channel partners to create private offers for end customers at their own pricing, without ISV involvement in each deal. ISVs set the base terms; resellers control the markup. The key concept is the Resale Authorization — a reusable permission that ISVs grant to specific partners, enabling them to transact on the ISV's behalf. For ISVs with reseller channels, CPPOs dramatically reduce deal friction: partners don't need to go off-marketplace to honor their discounts.",
        source: {
          label: "AWS Marketplace CPPO Documentation",
          url: "https://docs.aws.amazon.com/marketplace/latest/userguide/channel-partner-private-offers.html",
        },
      },
      {
        tagId: "azure",
        headline: "Multiparty Private Offers: The Channel on One Transaction",
        body: "Azure's Multiparty Private Offer (MPO) allows ISVs, distributors, and resellers to collaborate on a single offer seen by the customer as a unified deal. Unlike CPPO where the reseller creates their own offer, MPO keeps all parties visible in the deal structure — ISV sets the base, reseller applies their margin, customer sees a total. This is particularly useful for Microsoft's CSP partners who need to bundle ISV software with Azure services in a single customer invoice.",
        source: {
          label: "Azure Multiparty Private Offers for ISVs",
          url: "https://learn.microsoft.com/en-us/partner-center/marketplace/multiparty-private-offers-for-isv",
        },
      },
      {
        tagId: "gcp",
        headline: "MCPO and the Procurement API: GCP's Channel Play",
        body: "GCP's Marketplace Channel Private Offer (MCPO) is the structural equivalent of AWS's CPPO — it enables resellers to create custom private offers based on an ISV's listing without involving the ISV in each transaction. GCP's Procurement API layers on top to give ISVs and partners programmatic control over offer creation, entitlement management, and agreement status. The key difference from AWS and Azure: GCP's API-first design means CRM and deal automation integrations are more straightforward for high-volume resellers.",
        source: {
          label: "GCP Marketplace Channel Private Offers",
          url: "https://cloud.google.com/marketplace/docs/partners/integrated-saas/create-channel-private-offer",
        },
      },
    ],
    implications:
      "Private offer mechanics are the plumbing that determines whether your channel motion scales. ISVs with reseller programs who haven't formalized CPPO/MPO/MCPO workflows are creating manual work for every channel deal — and leaving the audit trail that hyperscalers use to track co-sell attribution on the floor. The investment to set up these workflows pays back on the first deal it enables.",
  },

  {
    id: "isv-funding-programs",
    title: "ISV Funding Programs: What's on the Table",
    subtitle: "MAP, AMMP, and GCP Partner POC funding compared",
    tags: ["aws", "azure", "gcp"],
    intro:
      "Every major hyperscaler runs programs that fund ISV adoption activities — migrations, proof-of-concepts, and partner-driven deals. The funding is real, but eligibility requirements, timelines, and amounts vary. Here's what's actually available and how to access it.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "AWS MAP and Marketplace-Funded POCs",
        body: "AWS's Migration Acceleration Program (MAP) funds migration projects for partners helping customers move workloads to AWS, with funding across assessment, mobilization, and migration phases. For marketplace ISVs specifically, AWS ISV Accelerate members can access funded POC support for deals expected to close through the marketplace. ISVs at higher performance tiers also unlock demand generation credits and dedicated partner development manager time. The requirement: a clear path to Marketplace Transaction Revenue, documented in an ACE opportunity.",
        source: {
          label: "AWS Migration Acceleration Program",
          url: "https://aws.amazon.com/migration-acceleration-program/",
        },
      },
      {
        tagId: "azure",
        headline: "Azure Migration and Modernization Program (AMMP)",
        body: "Microsoft's AMMP funds partner-led migration and modernization engagements, covering partner delivery costs for customers moving to or modernizing on Azure. Azure Marketplace ISVs benefit indirectly: marketplace-transacted deals tied to migrations often qualify for additional Azure credits and co-sell funding when Azure IP Co-sell status is in place. The AMMP investment level scales with deal size and the ISV's partner tier — Premier partners access significantly higher funding envelopes than those at Enrolled level.",
        source: {
          label: "Azure Migration and Modernization Program",
          url: "https://learn.microsoft.com/en-us/partner-center/partner-earned-credit-overview",
        },
      },
      {
        tagId: "gcp",
        headline: "GCP Partner-Funded POC Program",
        body: "GCP's Partner Funded POC program covers technical proof-of-concept costs for partner-led deals expected to close as GCP Marketplace transactions. Partners submit deal details and requested funding amounts; Google's partner team approves based on deal size and strategic value. PSO (Professional Services Organization) engagements can also be requested for high-value partner deals, giving ISVs access to Google's own technical resources at no cost. Approval timelines are typically faster than AWS MAP, but funding ceilings are lower.",
        source: {
          label: "Google Cloud Partner Advantage",
          url: "https://cloud.google.com/partners/partnersearch/partner-advantage",
        },
      },
    ],
    implications:
      "Hyperscaler funding programs are underutilized by most ISVs — not because they're inaccessible, but because the application process requires documentation that most partnership teams don't have ready. The ISVs who consistently access funding have a standing deal template, a documented POC scope, and a partner development manager relationship they can activate quickly. If your team is doing POCs without checking whether hyperscaler funding is available, you're absorbing costs you shouldn't be.",
  },

  {
    id: "byol-vs-saas",
    title: "BYOL vs. SaaS Listings",
    subtitle:
      "Choosing the right model — and why it changes your co-sell eligibility",
    tags: ["aws", "azure", "gcp"],
    intro:
      "Choosing between Bring Your Own License (BYOL) and SaaS pricing on cloud marketplaces isn't just a technical decision — it determines your billing model, your customer's purchasing experience, and critically, how much marketplace revenue gets attributed to your ARR and co-sell standing.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "BYOL on AWS: Visibility Without Revenue Attribution",
        body: "BYOL listings on AWS Marketplace let customers use software they already license directly from an ISV, with the marketplace serving as a discovery and deployment mechanism rather than a billing channel. This is useful for ISVs with large existing customer bases who want marketplace visibility without restructuring pricing or contracts. The downside is significant: BYOL deals don't generate Marketplace Transaction Revenue (MTR), which limits ACE co-sell eligibility and AWS partnership tier advancement. ISVs commonly list both a BYOL option and a SaaS transact option, letting customers choose — and nudging new buyers toward the transact path.",
        source: {
          label: "AWS Marketplace Listing Types",
          url: "https://docs.aws.amazon.com/marketplace/latest/userguide/listing-on-marketplace.html",
        },
      },
      {
        tagId: "azure",
        headline:
          "Azure: Contact Me, Free Trial, and Transact — Three Different Bets",
        body: "Azure Marketplace offer types span Contact Me (lead generation, no transaction), Free Trial (usage-based evaluation), and Transact (billing through Microsoft). For ISVs, Transact offers are required for Azure IP Co-sell status and to activate Microsoft's sales team as a channel. BYOL on Azure is handled through the Bring Your Own License pricing option within a Transact offer — Microsoft's billing infrastructure is used, but the price charged is typically nominal. This structure preserves co-sell eligibility while maintaining existing licensing agreements.",
        source: {
          label: "Azure Marketplace Offer Types",
          url: "https://learn.microsoft.com/en-us/partner-center/marketplace/publisher-guide-by-offer-type",
        },
      },
      {
        tagId: "gcp",
        headline: "GCP: Procurement API Supports Flexible License Models",
        body: "GCP Marketplace supports direct purchase, BYOL, and usage-based billing within a single listing framework. BYOL on GCP is commonly used for software that runs on GCP infrastructure but is licensed through existing vendor agreements — common for enterprise databases and security software. For ISVs, GCP's recommendation is to move toward metered billing where possible: usage-based revenue is more attributable through the Procurement API and integrates more tightly with GCP customer budgets, which strengthens the case for co-sell engagement.",
        source: {
          label: "GCP Marketplace Pricing Models",
          url: "https://cloud.google.com/marketplace/docs/partners/integrated-saas/pricing",
        },
      },
    ],
    implications:
      "BYOL is a reasonable short-term choice for ISVs who need marketplace visibility without restructuring existing customer contracts. But it's a ceiling, not a strategy. Every major hyperscaler uses Marketplace Transaction Revenue as the primary input for co-sell resource allocation — BYOL deals don't count. ISVs who want to grow their hyperscaler partnership investment need a credible path to transact listing that accounts for their pricing model and existing customer base.",
  },

  // ── FEBRUARY 2026 ───────────────────────────────────────────────────────────

  {
    id: "payment-disbursement",
    title: "When Does the Money Land?",
    subtitle: "Settlement timelines across AWS, Azure, and GCP — and why they matter for ISV cash flow",
    tags: ["aws", "azure", "gcp"],
    intro:
      "Closing a marketplace deal and receiving payment are two different events. Settlement timelines vary by hyperscaler, billing model, and customer payment terms — and the gap between contract signature and cash in your account can range from days to months. For ISVs modeling cash flow, planning vendor commitments, or recognizing revenue, understanding the disbursement cycle is foundational.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Daily or Monthly Disbursements — but Only After the Customer Pays",
        body: "AWS offers sellers the choice of daily or monthly disbursements, with funds released only after the customer has paid their invoice. For annual upfront deals where buyers pay immediately, turnaround is fast. For enterprise customers on net-30 or net-60 invoice terms, ISVs may wait 60–90 days from deal close to cash receipt. In May 2025, AWS added partial disbursement support: sellers now receive funds proportionally as buyers make partial payments on installment plans, rather than waiting for full invoice settlement. Disbursements typically arrive in the seller's bank account 1–2 business days after the AWS disbursement date.",
        source: {
          label: "AWS Marketplace Disbursement Docs",
          url: "https://docs.aws.amazon.com/marketplace/latest/userguide/disbursement.html",
        },
      },
      {
        tagId: "azure",
        headline: "Monthly Payouts with Regional Variation",
        body: "Microsoft pays Azure Marketplace publishers on a monthly basis, with the standard timeline approximately 30 days after the close of the calendar month in which the transaction occurred. The actual timing varies by region, currency, and payout account type — some markets run longer. Payout thresholds apply: if your monthly earnings fall below the minimum for your region, Microsoft holds the balance until it crosses the threshold. For private offer renewals, Microsoft introduced a 50% agency fee discount in 2025, which affects how much you net — but not when you receive it.",
        source: {
          label: "Azure Marketplace Payout Schedule",
          url: "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/payout-policy-details",
        },
      },
      {
        tagId: "gcp",
        headline: "Fixed Date: The 21st of Every Month",
        body: "Google Cloud disburses marketplace seller earnings on the 21st of every month. Monthly usage and disbursement reports are generated by the 10th business day of each month, giving sellers about two weeks of advance visibility before the payment arrives. For ISVs on channel private offers (MCPOs), the disbursement timing reflects the ISV's revenue share after the reseller margin is applied — sellers should confirm with their reseller how customer payment terms interact with Google's fixed disbursement date. Sellers changing their primary bank account should note that changes take effect on the next disbursement cycle, not immediately.",
        source: {
          label: "GCP Marketplace — Receiving Payments",
          url: "https://cloud.google.com/marketplace/docs/partners/receive-payments",
        },
      },
    ],
    implications:
      "The practical implication for ISVs is straightforward: marketplace deals carry a built-in receivables lag that direct billing often doesn't. If your finance team isn't accounting for the disbursement gap when planning quarterly cash flows, you're likely understating working capital needs. For high-volume or large-contract businesses, the difference between AWS's customer-payment-triggered disbursement and GCP's fixed monthly date affects how you model late payments, installment plans, and renewal timing. Purpose-built marketplace management platforms handle disbursement reconciliation automatically — matching marketplace payout data to your billing records without manual intervention.",
  },

  {
    id: "revenue-share-fees",
    title: "What the House Takes",
    subtitle: "Marketplace fee structures across AWS, Azure, and GCP — modeled for ISV deal desks",
    tags: ["aws", "azure", "gcp"],
    intro:
      "Every cloud marketplace charges sellers a fee on transactions. What's less obvious is how those fees vary by deal type, listing category, channel structure, and partner program status. For ISVs building a marketplace business case — or running deal desk math on a specific opportunity — getting the fee structure right isn't optional. Marketplace fees directly affect net margin, reseller economics, and how you price private offers.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Simplified Fees Since January 2024 — With Channel Uplift",
        body: "AWS simplified and reduced its listing fee structure effective January 5, 2024. For SaaS products with a private offer under $1M total contract value, the listing fee is 3.5%. Professional services private offers carry a 2.5% fee. Channel Partner Private Offers (CPPOs) add a 0.5% uplift on top of the standard listing fee — meaning reseller-transacted deals cost slightly more in platform fees. Additional regional listing fees apply for transactions in certain international jurisdictions. ISV Accelerate program membership may affect fee eligibility for specific deal structures.",
        source: {
          label: "AWS Marketplace Listing Fees",
          url: "https://docs.aws.amazon.com/marketplace/latest/userguide/listing-fees.html",
        },
      },
      {
        tagId: "azure",
        headline: "3% Standard — and 1.5% Effective on Renewals",
        body: "Microsoft's standard store service fee for Azure Marketplace transact offers is 3% of transaction value. For private offer renewals, Microsoft introduced a 50% fee discount — the effective rate drops to 1.5% for the full renewal term, making Azure's renewal economics among the most favorable of the three hyperscalers for established customer relationships. Microsoft is required to provide 90 days' advance notice before increasing the store service fee, providing publishers with predictability. The agency fee applies to the full transaction value billed through Microsoft's infrastructure, including multi-year and installment deals.",
        source: {
          label: "Azure Marketplace Transaction Capabilities",
          url: "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/marketplace-commercial-transaction-capabilities-and-considerations",
        },
      },
      {
        tagId: "gcp",
        headline: "Variable Fees Since April 2025 — Lower for Renewals and Channel",
        body: "Google Cloud introduced a variable revenue share model effective April 21, 2025, governed by the Vendor Net Revenue Schedule. New deals carry a 3% marketplace fee (ISV keeps 97%). Renewals are charged 1.5% (ISV keeps 98.5%). Channel shifts and migrations may qualify for further reduced rates. The applicable rate is determined per transaction based on deal type, total contract value, and other attributes in the schedule. This variable model rewards ISVs for driving renewal and channel volume through GCP Marketplace.",
        source: {
          label: "GCP Vendor Net Revenue Schedule",
          url: "https://cloud.google.com/terms/marketplace-revenue-share-schedule",
        },
      },
    ],
    implications:
      "At scale, fee differences compound meaningfully. On $10M in annual marketplace revenue, the difference between a 3% and a 1.5% effective rate is $150K in additional margin. For renewal-heavy businesses — enterprise SaaS with high net revenue retention — Azure and GCP both offer favorable renewal economics that should be factored into pricing strategy. For channel-heavy businesses, CPPO fee uplifts on AWS need to be modeled into reseller margin calculations before setting partner discounts. Deal desk teams building marketplace-specific pricing models should include the applicable marketplace fee as a named line item, not an afterthought absorbed into gross margin.",
  },

  {
    id: "tax-marketplace-facilitator",
    title: "The Tax You Don't See",
    subtitle: "How marketplace facilitator laws work — and what ISVs still owe on their own",
    tags: ["aws", "azure", "gcp"],
    intro:
      "Under marketplace facilitator laws now active in every US state with a sales tax, AWS, Azure, and GCP are legally responsible for collecting and remitting sales tax on transactions processed through their platforms. This is one of the most significant compliance advantages of marketplace distribution: tax liability shifts to the platform for covered transactions. But the rules have important limits — and a growing set of international nuances — that ISVs need to understand before assuming they're fully covered.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Expanding Global Tax Facilitation — With Notable 2025 Updates",
        body: "AWS operates as the marketplace facilitator for US state sales tax on all qualifying marketplace transactions, collecting and remitting without ISV involvement. In 2025, AWS significantly expanded its international tax facilitation: Swiss VAT collection began January 15, 2025; Korean VAT and Japanese Consumption Tax (10% each) took effect April 1, 2025, with AWS collecting and issuing qualified tax invoices on behalf of ISVs in those jurisdictions. For CPPO channel transactions, AWS manages tax collection in Canada, South Korea, India, and Japan — but in other geographies, ISVs and resellers must settle tax obligations between themselves.",
        source: {
          label: "AWS Marketplace Tax Help for Sellers",
          url: "https://aws.amazon.com/tax-help/marketplace-sellers/",
        },
      },
      {
        tagId: "azure",
        headline: "Microsoft Handles Tax in Covered Jurisdictions — ISV Nexus Rules Still Apply",
        body: "Microsoft collects and remits applicable sales tax, VAT, and GST for Azure Marketplace transactions in covered jurisdictions, relieving ISVs of direct tax obligations on those sales. The Publisher Agreement defines the scope of Microsoft's tax responsibility. However, ISVs with their own tax nexus in a jurisdiction — through employees, offices, or revenue thresholds — may have independent obligations that exist alongside Microsoft's facilitated collection. Professional services, support contracts, and any billing that flows outside Azure Marketplace retain the ISV's full tax liability.",
        source: {
          label: "Azure Marketplace Tax and Payout FAQ",
          url: "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/payout-faq",
        },
      },
      {
        tagId: "gcp",
        headline: "Facilitator Treatment Through Google's Regional Entities",
        body: "Google Cloud acts as the marketplace facilitator for covered jurisdictions, collecting applicable sales tax and VAT on GCP Marketplace transactions. ISVs should note that GCP's disbursement structure routes payments through regional Google entities depending on seller configuration — the entity processing your payment determines which tax treatment applies to international transactions. ISVs whose products span both marketplace and direct billing channels should ensure their tax compliance posture accounts for both: facilitated treatment covers marketplace transactions, but direct deals, API billing, or services sold outside GCP Marketplace are not covered.",
        source: {
          label: "GCP Marketplace — Tax and Payments",
          url: "https://cloud.google.com/marketplace/docs/partners/receive-payments",
        },
      },
    ],
    implications:
      "Marketplace tax facilitation is one of the most underappreciated financial advantages of cloud marketplace distribution. ISVs who transact directly — outside marketplace — carry the full cost of multi-state sales tax registration, compliance software, filing, and audit exposure. Marketplace-native ISVs offload that burden to the platform for covered transactions. The catch: facilitation is transactional, not blanket. Any revenue stream that isn't routed through the marketplace — support contracts, professional services, usage billing managed outside the platform — remains the ISV's responsibility. As international expansions accelerate (Japan, Korea, Switzerland in 2025 alone), the scope of what marketplaces cover is growing — making it worth auditing exactly which of your revenue streams are and aren't protected.",
  },

  // ── JANUARY 2026 ────────────────────────────────────────────────────────────

  {
    id: "marketplace-2025-review",
    title: "2025 Cloud Marketplace Year in Review",
    subtitle: "The numbers, the shifts, and what actually changed for ISVs",
    tags: ["aws", "azure", "gcp"],
    intro:
      "2025 was the year cloud marketplaces crossed from a useful distribution channel to the primary sales motion for enterprise software. The committed spend programs, co-sell sophistication, and enterprise buyer preference for on-marketplace transactions all moved in the same direction — and the ISVs who were ready captured disproportionate growth.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "AWS Marketplace Crosses Critical Mass for Enterprise Deals",
        body: "AWS Marketplace transaction volume grew significantly as AWS Enterprise Discount Program (EDP) penetration deepened in the Global 2000. Buyers with large EDP commitments are actively incentivized to purchase software through the marketplace rather than direct, because marketplace spend counts toward their AWS commitment drawdown. The ISVs who invested in marketplace listings and co-sell programs in 2023–2024 are now seeing compounding returns as this buyer incentive structure matures. ISVs without marketplace listings are increasingly excluded from enterprise procurement processes that require it.",
        source: {
          label: "AWS Marketplace for Sellers",
          url: "https://docs.aws.amazon.com/marketplace/latest/userguide/what-is-marketplace.html",
        },
      },
      {
        tagId: "azure",
        headline: "MACC Eligibility Becomes the Key Azure Differentiator",
        body: "Microsoft Azure Consumption Commitments (MACC) — Azure's committed spend program — expanded its eligible ISV roster significantly in 2025, giving more marketplace ISVs the ability to help customers draw down their Azure commitments. For buyers, MACC-eligible purchases through Azure Marketplace reduce their committed spend balance, creating strong purchasing incentive. For ISVs, achieving MACC eligibility (requiring Azure IP Co-sell Incentivized status) became a primary 2025 objective — separating ISVs generating real pipeline from those with directory-only listings.",
        source: {
          label: "Azure Consumption Commitments for ISVs",
          url: "https://learn.microsoft.com/en-us/partner-center/marketplace/azure-consumption-commitment-benefit",
        },
      },
      {
        tagId: "gcp",
        headline: "GCP Commit Drawdown: More ISVs, More Eligible Spend",
        body: "Google Cloud expanded the roster of ISV solutions that qualify for commit drawdown — where customers apply Google Cloud Marketplace purchases against their GCP committed spend obligations. As of June 2025, all qualifying Channel Private Offer purchases result in 100% commit drawdown against the customer's minimum commitment, up to a 25% cap. GCP's committed spend pool is smaller than AWS EDP or Azure MACC in absolute terms, but the eligible ISV roster is growing alongside GCP's AI infrastructure momentum.",
        source: {
          label: "GCP Marketplace Committed Use",
          url: "https://cloud.google.com/marketplace/docs/partners/integrated-saas/listing-saas",
        },
      },
    ],
    implications:
      "The 2025 story for cloud marketplaces is straightforward: committed spend programs created a structural buyer incentive to purchase on-marketplace that didn't fully exist in 2023. ISVs who are MACC-eligible, EDP-attributed, and GCP commit-qualified are operating with a tailwind that their non-marketplace competitors don't have. If your 2026 planning doesn't include a specific plan to achieve or expand these designations, you're ceding ground to competitors who do.",
  },

  {
    id: "partner-program-changes-2025",
    title: "Partner Program Changes That Mattered in 2025",
    subtitle: "APN restructured, MAICPP launched, GCP adds AI specializations",
    tags: ["aws", "azure", "gcp"],
    intro:
      "All three hyperscalers restructured or significantly updated their partner programs in 2025. For ISVs navigating these changes, the key question is what actually changed for your program status — and what you need to do before your next renewal.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "APN Restructured: ISV Accelerate Takes Center Stage",
        body: "AWS restructured the AWS Partner Network in 2025, creating clearer tracks for technology partners (ISVs) versus consulting partners (SIs). ISV Accelerate — the co-sell program for software companies — became the primary vehicle for partner-to-field engagement, with new performance tiers tied to Marketplace Transaction Revenue and ACE opportunity volume. Partners who meet higher performance tiers unlock funded demand generation, dedicated partner development managers, and AWS executive briefings. The practical change: quarterly business reviews with AWS now include MTR reporting as a core metric, not a secondary one.",
        source: {
          label: "AWS ISV Accelerate Program",
          url: "https://aws.amazon.com/partners/programs/isv-accelerate/",
        },
      },
      {
        tagId: "azure",
        headline:
          "Microsoft AI Cloud Partner Program: AI Competencies Now Central",
        body: "Microsoft launched the Microsoft AI Cloud Partner Program (MAICPP) at Microsoft Inspire in July 2023, replacing the legacy Gold/Silver competency model with Solutions Partner designations, and continued expanding it through 2024–2025. For Azure Marketplace ISVs, the most impactful change is the addition of AI and Data solution area designations that unlock new co-sell opportunities and Microsoft-funded campaigns. Partners with AI-adjacent products who achieve Solution Partner designation in the Data & AI area gain access to Microsoft's AI customer activation programs — a direct path to buyers actively evaluating AI investments.",
        source: {
          label: "Microsoft AI Cloud Partner Program",
          url: "https://learn.microsoft.com/en-us/partner-center/intro-to-cloud-partner-program-membership",
        },
      },
      {
        tagId: "gcp",
        headline: "Google Partner Advantage Adds AI Specializations",
        body: "GCP's Partner Advantage program added AI specializations in 2025, recognizing partners with demonstrated expertise in Vertex AI, Gemini, and cloud-native AI deployment. The most relevant new designation for ISVs is the Google Cloud Ready — Generative AI validation, which signals to GCP buyers that an ISV's product is optimized for GCP's AI infrastructure. Achieving this designation requires product testing against GCP's AI platform, documentation requirements, and customer reference submissions — a 2–3 month process that pays off in enhanced marketplace visibility and co-sell prioritization.",
        source: {
          label: "Google Cloud Partner Specializations",
          url: "https://cloud.google.com/partners/partnersearch/partner-advantage",
        },
      },
    ],
    implications:
      "The partner program restructures across all three hyperscalers in 2025 sent a consistent signal: AI-oriented ISVs are being prioritized for co-sell resources, go-to-market funding, and marketplace visibility. If your product has a credible AI story — even as an adjacent capability — getting the relevant AI designation is now worth the effort. The ISVs without it will find themselves increasingly outprioritized by competitors who have it, regardless of deal quality.",
  },

  // ── PLACEHOLDER CONTENT — 2025 & 2024 ─────────────────────────────────────
  // These are stand-in topics for UI testing. Replace with real editorial content.

  // ── DECEMBER 2025 ───────────────────────────────────────────────────────────

  {
    id: "reinvent-2025-recap",
    title: "re:Invent 2025: The Marketplace Seller's Debrief",
    subtitle: "Cutting through the noise on announcements that affect ISVs",
    tags: ["aws", "pricing"],
    intro: "AWS re:Invent 2025 ran late November into early December. As always, the announcements span everything from chipsets to database services — this topic focuses on what's directly relevant to marketplace sellers and co-sell programs.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: re:Invent 2025 Marketplace Highlights",
        body: "Placeholder content. This section will cover key marketplace-relevant announcements from re:Invent 2025, including any new listing types, co-sell program updates, and fee structure changes announced on stage or in the partner track.",
      },
    ],
    implications: "Placeholder: Action items for ISVs based on re:Invent 2025 marketplace announcements.",
  },

  {
    id: "end-of-year-deal-trends-2025",
    title: "Q4 2025 Deal Velocity: Reading the Year-End Signals",
    subtitle: "Enterprise year-end budget dynamics and their effect on marketplace close rates",
    tags: ["aws", "azure", "gcp"],
    intro: "Q4 is consistently the highest-volume quarter for marketplace transactions. Understanding why — and how to position for it — is the difference between finishing the year strong or scrambling.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: AWS EDP Year-End Drawdown Surge",
        body: "Placeholder content for AWS Q4 dynamics: EDP urgency, year-end ACE pipeline acceleration, and how ISVs can position deals before the December freeze.",
      },
      {
        tagId: "azure",
        headline: "Placeholder: Azure MACC Q4 Urgency",
        body: "Placeholder content for Azure MACC drawdown pressure and Microsoft field team alignment in Q4 enterprise cycles.",
      },
      {
        tagId: "gcp",
        headline: "Placeholder: GCP Commit Spend Q4 Patterns",
        body: "Placeholder content for GCP committed spend dynamics and channel offer activity as year-end approaches.",
      },
    ],
    implications: "Placeholder: Practical advice for ISVs structuring deals in Q4 across all three clouds.",
  },

  // ── NOVEMBER 2025 ───────────────────────────────────────────────────────────

  {
    id: "ai-workloads-marketplace-2025",
    title: "AI Workloads Hit Marketplace Critical Mass",
    subtitle: "The tipping point has passed — AI-native ISVs are now the majority of new listings",
    tags: ["aws", "azure", "gcp"],
    intro: "Placeholder. Examining the shift in marketplace listing mix toward AI-native and AI-adjacent products through Q3 2025, and what it means for ISVs whose products aren't AI-forward.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: Bedrock ISV Ecosystem Growth Q3 2025",
        body: "Placeholder content for AWS Bedrock ISV listing growth and co-sell volume through Q3 2025.",
      },
      {
        tagId: "azure",
        headline: "Placeholder: Azure AI Foundry Partner Ecosystem",
        body: "Placeholder content for Azure AI Foundry partner listing growth through Q3 2025.",
      },
      {
        tagId: "gcp",
        headline: "Placeholder: GCP Vertex AI and Agent Marketplace ISV Growth",
        body: "Placeholder content for GCP Vertex AI ISV listing growth and early Agent Marketplace adoption signals.",
      },
    ],
    implications: "Placeholder: What AI marketplace saturation means for non-AI ISVs and how to respond.",
  },

  {
    id: "bedrock-vs-azure-ai-2025",
    title: "Bedrock vs. Azure AI Foundry: Choosing Your Anchor Cloud",
    subtitle: "A framework for ISVs deciding where to invest AI listing resources first",
    tags: ["aws", "azure"],
    intro: "Placeholder. Most ISVs don't have the resources to build deep integrations on all three clouds simultaneously. This topic offers a decision framework for AWS vs. Azure AI platform investment.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: Bedrock's ISV Value Proposition",
        body: "Placeholder content on Bedrock's strengths for ISVs: ecosystem depth, Nova model access, and co-sell scale.",
      },
      {
        tagId: "azure",
        headline: "Placeholder: Azure AI Foundry's ISV Value Proposition",
        body: "Placeholder content on Azure AI Foundry's strengths: M365 distribution, Copilot Studio integration, CSP channel reach.",
      },
    ],
    implications: "Placeholder: Decision criteria for ISVs picking their primary AI cloud anchor platform.",
  },

  // ── OCTOBER 2025 ────────────────────────────────────────────────────────────

  {
    id: "pricing-shifts-q4-2025",
    title: "Pricing Model Shifts: What Changed in 2025",
    subtitle: "Usage-based billing, credit-based models, and the decline of simple per-seat SaaS",
    tags: ["pricing", "aws", "azure", "gcp"],
    intro: "Placeholder. The shift toward consumption-based pricing on cloud marketplaces accelerated through 2025. This topic examines the implications for ISV deal desks and finance teams.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: AWS Metered Billing Adoption in 2025",
        body: "Placeholder content on AWS Marketplace metered billing adoption trends and new usage dimensions in 2025.",
      },
      {
        tagId: "azure",
        headline: "Placeholder: Azure Custom Meters and Billing Evolution",
        body: "Placeholder content on Azure's custom meter support and SaaS subscription pricing evolution through 2025.",
      },
      {
        tagId: "gcp",
        headline: "Placeholder: GCP Usage-Based Pricing Expansion",
        body: "Placeholder content on GCP's Procurement API usage-based billing capabilities and ISV adoption trends.",
      },
    ],
    implications: "Placeholder: How ISVs should approach pricing model migration on marketplace.",
  },

  {
    id: "revenue-recognition-marketplace-2025",
    title: "Revenue Recognition on Marketplace: The Accounting Side",
    subtitle: "How ASC 606 applies to marketplace-transacted revenue and what ISVs get wrong",
    tags: ["pricing", "azure"],
    intro: "Placeholder. Revenue recognition for marketplace-transacted deals carries unique complexity under ASC 606. This topic covers the key accounting considerations for marketplace-native ISVs.",
    hyperscalers: [
      {
        tagId: "azure",
        headline: "Placeholder: Azure Marketplace Revenue Recognition Timing",
        body: "Placeholder content on how Azure Marketplace billing cycles affect ASC 606 revenue recognition timing for ISVs.",
      },
    ],
    implications: "Placeholder: Finance team checklist for marketplace revenue recognition compliance.",
  },

  // ── SEPTEMBER 2025 ──────────────────────────────────────────────────────────

  {
    id: "security-certifications-overhaul-2025",
    title: "Security Certification Overhaul: New Requirements Across All Three Clouds",
    subtitle: "What changed in 2025 and which ISVs are already out of compliance",
    tags: ["security", "aws", "azure", "gcp"],
    intro: "Placeholder. 2025 saw significant updates to security certification requirements across AWS, Azure, and GCP. ISVs who haven't done a compliance review recently may be surprised.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: AWS FTR and SOC 2 Updates",
        body: "Placeholder content on AWS Foundational Technical Review updates and SOC 2 requirements for marketplace listings in 2025.",
      },
      {
        tagId: "azure",
        headline: "Placeholder: Azure Publisher Attestation Renewal",
        body: "Placeholder content on Azure's updated publisher attestation requirements and Microsoft Defender for Cloud integration.",
      },
      {
        tagId: "gcp",
        headline: "Placeholder: GCP Assured Workloads Policy Updates",
        body: "Placeholder content on GCP Assured Workloads policy changes and their impact on ISV compliance posture.",
      },
    ],
    implications: "Placeholder: Priority actions for ISVs to maintain certification status across all three hyperscalers.",
  },

  {
    id: "compliance-requirements-mid-2025",
    title: "Regulated Industry Listings: FSI, Healthcare, and Government Requirements",
    subtitle: "What the hyperscalers now require before you can sell to regulated segments",
    tags: ["security", "gcp"],
    intro: "Placeholder. Selling to regulated industries through cloud marketplaces requires additional compliance posture beyond standard certification. This topic covers hyperscaler-specific requirements for FSI, healthcare, and government.",
    hyperscalers: [
      {
        tagId: "gcp",
        headline: "Placeholder: GCP FedRAMP and HIPAA Marketplace Requirements",
        body: "Placeholder content on GCP's regulated industry marketplace listing requirements, FedRAMP authorization paths, and HIPAA compliance certification.",
      },
    ],
    implications: "Placeholder: Compliance roadmap for ISVs targeting regulated industry segments via GCP Marketplace.",
  },

  // ── AUGUST 2025 ─────────────────────────────────────────────────────────────

  {
    id: "channel-partner-trends-aug-2025",
    title: "Channel Partner Dynamics: Mid-2025 Update",
    subtitle: "How resellers are adapting to marketplace-native deal structures",
    tags: ["aws", "gcp"],
    intro: "Placeholder. Channel partner behavior on cloud marketplaces shifted notably through H1 2025. CPPO and MCPO adoption accelerated, and reseller margins came under scrutiny.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: AWS CPPO Adoption Mid-2025",
        body: "Placeholder content on CPPO volume growth, reseller adoption patterns, and margin dynamics through H1 2025.",
      },
      {
        tagId: "gcp",
        headline: "Placeholder: GCP MCPO Channel Evolution",
        body: "Placeholder content on GCP MCPO channel partner adoption and the 100% commit drawdown impact on partner deal positioning.",
      },
    ],
    implications: "Placeholder: Reseller enablement priorities for ISVs managing channel programs on AWS and GCP.",
  },

  {
    id: "snowflake-expansion-mid-2025",
    title: "Snowflake Marketplace: Mid-Year Expansion Update",
    subtitle: "New Native App capabilities and what they mean for cross-listed ISVs",
    tags: ["snowflake", "aws"],
    intro: "Placeholder. Snowflake continued to expand its Native App Framework capabilities through H1 2025. For ISVs cross-listed on AWS and Snowflake, the distribution opportunity is growing.",
    hyperscalers: [
      {
        tagId: "snowflake",
        headline: "Placeholder: Native App Framework Mid-2025 Updates",
        body: "Placeholder content on Snowflake Native App Framework capability updates through H1 2025 and new ISV capabilities.",
      },
      {
        tagId: "aws",
        headline: "Placeholder: AWS + Snowflake Cross-Listing Strategy",
        body: "Placeholder content on the combined AWS Marketplace and Snowflake Marketplace cross-listing opportunity for data-adjacent ISVs.",
      },
    ],
    implications: "Placeholder: Strategic update for ISVs evaluating or managing Snowflake + AWS dual listings.",
  },

  // ── JULY 2025 ───────────────────────────────────────────────────────────────

  {
    id: "commit-spend-midyear-2025",
    title: "Mid-Year Commit Spend: EDP, MACC, and GCP — Status Check",
    subtitle: "Which programs are growing, which are stalling, and what ISVs should do",
    tags: ["aws", "azure", "gcp", "pricing"],
    intro: "Placeholder. A mid-year snapshot of committed spend program dynamics across AWS EDP, Azure MACC, and GCP commit drawdown — covering eligibility, volume trends, and ISV positioning.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: AWS EDP Mid-2025 Penetration",
        body: "Placeholder content on AWS EDP program growth through H1 2025 and its impact on marketplace transaction volume.",
      },
      {
        tagId: "azure",
        headline: "Placeholder: Azure MACC Mid-2025 Expansion",
        body: "Placeholder content on MACC-eligible ISV roster expansion and buyer drawdown patterns through H1 2025.",
      },
      {
        tagId: "gcp",
        headline: "Placeholder: GCP Commit Drawdown Mid-2025",
        body: "Placeholder content on GCP commit drawdown program updates, MCPO eligibility expansion, and channel offer dynamics.",
      },
    ],
    implications: "Placeholder: H2 positioning advice for ISVs across all three committed spend programs.",
  },

  {
    id: "macc-edp-comparison-2025",
    title: "MACC vs. EDP: A Deal Desk Comparison",
    subtitle: "Side-by-side mechanics for the two largest committed spend programs",
    tags: ["pricing", "azure", "aws"],
    intro: "Placeholder. Azure MACC and AWS EDP are structurally different programs with different implications for ISV deal structuring. This topic breaks down the key mechanics side by side.",
    hyperscalers: [
      {
        tagId: "azure",
        headline: "Placeholder: Azure MACC Mechanics Deep Dive",
        body: "Placeholder content on MACC program mechanics, eligibility requirements, drawdown calculation, and ISV designation path.",
      },
      {
        tagId: "aws",
        headline: "Placeholder: AWS EDP Mechanics Deep Dive",
        body: "Placeholder content on EDP program mechanics, tier structure, and how marketplace spend counts toward commitment drawdown.",
      },
    ],
    implications: "Placeholder: Deal desk guidance for ISVs selling into accounts with both MACC and EDP commitments.",
  },

  // ── JUNE 2025 (hidden — beyond 6-month limit) ───────────────────────────────

  {
    id: "agent-frameworks-jun-2025",
    title: "Agent Frameworks: Early ISV Signals",
    subtitle: "What the first wave of agent-based marketplace listings reveals",
    tags: ["aws", "gcp"],
    intro: "Placeholder. The first cohort of agent-framework-native marketplace listings went live through Q2 2025. Early data on listing conversion, buyer behavior, and co-sell engagement.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: Bedrock Multi-Agent Early ISV Listings",
        body: "Placeholder content on early Bedrock multi-agent listing performance, co-sell engagement rates, and buyer conversion.",
      },
      {
        tagId: "gcp",
        headline: "Placeholder: GCP ADK Early Listing Pipeline",
        body: "Placeholder content on early Agent Development Kit ISV listings and GCP Agent Marketplace pipeline signals.",
      },
    ],
    implications: "Placeholder: What early agent marketplace data tells ISVs about where to invest listing resources.",
  },

  {
    id: "adk-versus-bedrock-agents-2025",
    title: "ADK vs. Bedrock Agents: A Technical Comparison for ISVs",
    subtitle: "Choosing between Google's Agent Development Kit and AWS's multi-agent framework",
    tags: ["aws", "gcp"],
    intro: "Placeholder. For ISVs building agent-based products, the technical choice between Google's ADK and AWS Bedrock multi-agent framework has significant long-term implications for listing strategy.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: AWS Bedrock Multi-Agent Technical Profile",
        body: "Placeholder content on Bedrock multi-agent framework architecture, pricing model, and ISV integration path.",
      },
      {
        tagId: "gcp",
        headline: "Placeholder: Google ADK Technical Profile",
        body: "Placeholder content on Google Agent Development Kit architecture, capabilities, and GCP Marketplace integration path.",
      },
    ],
    implications: "Placeholder: Technical decision framework for ISVs choosing between ADK and Bedrock agents.",
  },

  // ── MAY 2025 (hidden — beyond 6-month limit) ────────────────────────────────

  {
    id: "security-compliance-baseline-2025",
    title: "Security Baseline for Marketplace Listings: The Full Checklist",
    subtitle: "What ISVs need before listing — and what gets them delisted",
    tags: ["security"],
    intro: "Placeholder. A comprehensive security and compliance baseline review for ISVs who are listing or renewing listings across cloud marketplaces in 2025.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: AWS Minimum Security Listing Requirements",
        body: "Placeholder content on minimum security requirements for AWS Marketplace listing approval and maintenance.",
      },
      {
        tagId: "azure",
        headline: "Placeholder: Azure Publisher Security Requirements",
        body: "Placeholder content on Azure Marketplace publisher security requirements and attestation renewal process.",
      },
      {
        tagId: "gcp",
        headline: "Placeholder: GCP Security Listing Prerequisites",
        body: "Placeholder content on GCP Marketplace security requirements and Google Cloud Ready prerequisites.",
      },
    ],
    implications: "Placeholder: Security compliance action list for ISVs managing listings across multiple hyperscalers.",
  },

  {
    id: "gcp-assured-workloads-2025",
    title: "GCP Assured Workloads: ISV Listing Implications",
    subtitle: "How GCP's compliance framework affects ISVs targeting regulated-industry buyers",
    tags: ["security", "gcp"],
    intro: "Placeholder. GCP Assured Workloads expanded its scope in 2025, adding new compliance boundaries that affect which ISV products can be sold to regulated industry customers through GCP Marketplace.",
    hyperscalers: [
      {
        tagId: "gcp",
        headline: "Placeholder: Assured Workloads 2025 Scope Expansion",
        body: "Placeholder content on GCP Assured Workloads scope changes in 2025 and ISV compliance implications for regulated-industry listings.",
      },
    ],
    implications: "Placeholder: Compliance path for ISVs targeting GCP regulated-industry buyer segments.",
  },

  // ── DECEMBER 2024 ───────────────────────────────────────────────────────────

  {
    id: "marketplace-year-review-2024",
    title: "2024 Cloud Marketplace Year in Review",
    subtitle: "How the market matured — and what set the stage for 2025",
    tags: ["aws", "azure", "gcp"],
    intro: "Placeholder. 2024 year-in-review covering the key shifts in cloud marketplace dynamics, committed spend program expansion, and ISV listing growth across all three hyperscalers.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: AWS 2024 Marketplace Milestones",
        body: "Placeholder content on AWS Marketplace growth, EDP expansion, and ISV Accelerate program evolution through 2024.",
      },
      {
        tagId: "azure",
        headline: "Placeholder: Azure 2024 Marketplace Milestones",
        body: "Placeholder content on Azure Marketplace growth, MACC eligibility expansion, and MAICPP program rollout in 2024.",
      },
      {
        tagId: "gcp",
        headline: "Placeholder: GCP 2024 Marketplace Milestones",
        body: "Placeholder content on GCP Marketplace ISV roster growth, commit drawdown expansion, and partner program evolution through 2024.",
      },
    ],
    implications: "Placeholder: 2025 strategic priorities for ISVs based on 2024 marketplace trends.",
  },

  {
    id: "pricing-evolution-2024",
    title: "How Marketplace Pricing Evolved in 2024",
    subtitle: "From flat-rate SaaS to metered, hybrid, and commitment-based models",
    tags: ["pricing", "aws", "azure"],
    intro: "Placeholder. A retrospective on 2024 pricing model trends across cloud marketplaces, covering the shift from simple SaaS subscriptions toward more flexible, consumption-based structures.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: AWS 2024 Pricing Model Trends",
        body: "Placeholder content on AWS Marketplace pricing model adoption trends and metered billing growth through 2024.",
      },
      {
        tagId: "azure",
        headline: "Placeholder: Azure 2024 Pricing Model Trends",
        body: "Placeholder content on Azure Marketplace pricing structure evolution and custom meter adoption through 2024.",
      },
    ],
    implications: "Placeholder: Pricing model modernization guide for ISVs based on 2024 marketplace trends.",
  },

  // ── SEPTEMBER 2024 ──────────────────────────────────────────────────────────

  {
    id: "cloud-next-2024-recap",
    title: "Google Cloud Next 2024: What ISVs Missed",
    subtitle: "The marketplace and partner announcements that deserved more attention",
    tags: ["gcp"],
    intro: "Placeholder. Google Cloud Next 2024 recap focused on announcements with direct implications for marketplace ISVs and channel partners — the ones that got buried under the AI headlines.",
    hyperscalers: [
      {
        tagId: "gcp",
        headline: "Placeholder: Cloud Next 2024 Marketplace Announcements",
        body: "Placeholder content on GCP Marketplace and partner program announcements from Google Cloud Next 2024.",
      },
    ],
    implications: "Placeholder: ISV action items from Google Cloud Next 2024.",
  },

  {
    id: "snowflake-summit-2024",
    title: "Snowflake Summit 2024: The Marketplace Angle",
    subtitle: "Native App momentum, Cortex AI, and ISV cross-listing opportunities",
    tags: ["snowflake", "gcp"],
    intro: "Placeholder. Snowflake Summit 2024 introduced Cortex AI and significant Native App Framework updates. For ISVs cross-listed on GCP and Snowflake, the partnership implications were significant.",
    hyperscalers: [
      {
        tagId: "snowflake",
        headline: "Placeholder: Snowflake Summit 2024 ISV Announcements",
        body: "Placeholder content on Snowflake Summit 2024 announcements relevant to ISVs: Cortex AI, Native App updates, Marketplace discovery improvements.",
      },
      {
        tagId: "gcp",
        headline: "Placeholder: Snowflake-GCP Integration Updates",
        body: "Placeholder content on Snowflake and Google Cloud's deepened partnership and implications for dual-listed ISVs.",
      },
    ],
    implications: "Placeholder: Strategic update for ISVs cross-listed on Snowflake and GCP Marketplace.",
  },

  // ── MARCH 2024 ──────────────────────────────────────────────────────────────

  {
    id: "security-baseline-2024",
    title: "Q1 2024: Security Requirements Tightened Across All Three Clouds",
    subtitle: "The policy changes that went into effect — and who was caught off guard",
    tags: ["security", "aws", "azure", "gcp"],
    intro: "Placeholder. Q1 2024 brought significant updates to security listing requirements across all three major cloud marketplaces. This topic covers what changed and what ISVs needed to action.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Placeholder: AWS Q1 2024 Security Policy Changes",
        body: "Placeholder content on AWS Marketplace security requirement changes in Q1 2024.",
      },
      {
        tagId: "azure",
        headline: "Placeholder: Azure Q1 2024 Security Policy Changes",
        body: "Placeholder content on Azure Marketplace publisher security policy changes in Q1 2024.",
      },
      {
        tagId: "gcp",
        headline: "Placeholder: GCP Q1 2024 Security Policy Changes",
        body: "Placeholder content on GCP Marketplace security requirement changes in Q1 2024.",
      },
    ],
    implications: "Placeholder: Security compliance retrospective and ongoing readiness checklist.",
  },

  {
    id: "compliance-shifts-2024",
    title: "Azure's 2024 Privacy and Data Handling Updates",
    subtitle: "What Microsoft's publisher policy changes mean for Azure Marketplace ISVs",
    tags: ["security", "azure"],
    intro: "Placeholder. Microsoft updated its privacy and data handling requirements for Azure Marketplace publishers in 2024. This topic covers what changed and how ISVs should structure their compliance response.",
    hyperscalers: [
      {
        tagId: "azure",
        headline: "Placeholder: Azure 2024 Publisher Privacy Policy Changes",
        body: "Placeholder content on Microsoft's 2024 publisher privacy and data handling policy updates for Azure Marketplace.",
      },
    ],
    implications: "Placeholder: Data handling compliance action items for Azure Marketplace ISVs.",
  },

  // ── END PLACEHOLDER CONTENT ─────────────────────────────────────────────────

  {
    id: "marketplace-outlook-2026",
    title: "What to Watch in 2026",
    subtitle:
      "Where cloud marketplace growth is going — and what ISVs should do now",
    tags: ["aws", "azure", "gcp"],
    intro:
      "The structural tailwinds behind cloud marketplace growth are not slowing in 2026. Committed spend programs, co-sell sophistication, and enterprise buyer preference for on-marketplace transactions are all accelerating. Here's where the opportunity concentrates — and what ISVs should do in the next two quarters.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "AWS: More EDP Draw-Down Deals, Bigger Ticket Sizes",
        body: "AWS Marketplace is expected to continue growing as EDP penetration deepens in the Global 2000. As more enterprise customers sign large AWS committed spend agreements, their incentive to source software through the marketplace rather than direct increases proportionally. For ISVs, the implication is to build the marketplace listing and co-sell infrastructure now — the buyer behavior is shifting, and ISVs without marketplace-ready deal structures will find themselves excluded from an increasing share of enterprise RFPs where procurement teams require cloud marketplace transaction capability.",
        source: {
          label: "AWS Marketplace for Buyers and Sellers",
          url: "https://docs.aws.amazon.com/marketplace/latest/userguide/what-is-marketplace.html",
        },
      },
      {
        tagId: "azure",
        headline: "Azure: AI Workloads Drive New Buyer Segments to Marketplace",
        body: "Microsoft's enterprise AI push — Copilot licensing, Azure OpenAI Service, and the AI cloud expansion broadly — is creating new buyer segments on Azure Marketplace who are actively building AI applications and looking for ISV tools that integrate with Azure's AI stack. ISVs best positioned on Azure in 2026 are those with documented integration with Azure AI Foundry, Copilot Studio, or Azure OpenAI — and who have achieved Azure IP Co-sell Incentivized status. Buyers with M365 Copilot deployments are increasingly looking for adjacent software through the same procurement channel.",
        source: {
          label: "Azure Marketplace Go-To-Market Resources",
          url: "https://learn.microsoft.com/en-us/partner-center/marketplace/gtm-your-marketplace-benefits",
        },
      },
      {
        tagId: "gcp",
        headline: "GCP: AI-Infrastructure Buyers Come to Marketplace",
        body: "GCP's marketplace has historically trailed AWS and Azure in ISV ecosystem breadth, but 2026 is the year this changes in key segments. GCP's strength in AI infrastructure — TPUs, Vertex AI, BigQuery — is attracting a wave of AI-native ISVs who build on GCP first and expand to other clouds second. For incumbent ISVs on AWS or Azure, GCP listings that weren't worth the effort in 2023–2024 are worth revisiting now: GCP's committed spend pool is growing and buyers are increasingly looking for ISV solutions to complement GCP AI infrastructure investments.",
        source: {
          label: "Google Cloud Marketplace for Partners",
          url: "https://cloud.google.com/marketplace/docs/partners",
        },
      },
    ],
    implications:
      "2026 is a pivotal year for ISVs who've been watching cloud marketplaces from the sidelines. The committed spend programs have created buyer incentive; the co-sell programs have matured enough to generate real pipeline; and the certification requirements are clear enough that the path to listing is predictable. The window to get listed, certified, and co-sell-active before the category is fully competitive is 2026. The question isn't whether to invest — it's whether you move in Q1 or spend the year watching competitors who did.",
  },
];
