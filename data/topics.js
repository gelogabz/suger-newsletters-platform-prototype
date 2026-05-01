const topics = [
  // ── MAY 2026 ────────────────────────────────────────────────────────────────

  {
    id: "ai-agents",
    title: "AI Agents",
    subtitle: "The Race to Orchestrate",
    tags: ["aws", "azure", "gcp"],
    intro:
      "The AI agent moment has arrived. All three major hyperscalers shipped significant agent infrastructure in the past year, moving from experimentation to production-grade orchestration. The competition is no longer about which model is best — it's about who owns the layer that coordinates agents, memory, and enterprise data at scale.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Bedrock Multi-Agent Collaboration Goes GA",
        body: "Amazon Bedrock's multi-agent framework enables networks of specialized agents to coordinate and delegate tasks autonomously — announced at re:Invent 2024 and now generally available. AWS simultaneously launched the Nova model family (Micro, Lite, Pro, Premier), optimized for cost and speed on Bedrock-native workloads. The strategic play: own the orchestration layer, not just the model, and make Bedrock the default runtime for enterprise agent workflows.",
        source: {
          label: "Amazon Bedrock Multi-Agent Docs",
          url: "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html",
        },
      },
      {
        tagId: "azure",
        headline: "AI Foundry Becomes the Agent Control Plane",
        body: "Microsoft repositioned Azure AI Foundry as the central hub for enterprise agent development. The distribution play is the real story: Copilot Studio lets teams build agents that live inside Teams, Outlook, and SharePoint — where enterprise knowledge workers already are. For buyers evaluating agent platforms, Azure's pitch is adoption through existing workflows, not a new interface your organization has to adopt from scratch.",
        source: {
          label: "Azure AI Foundry Documentation",
          url: "https://learn.microsoft.com/en-us/azure/ai-studio/",
        },
      },
      {
        tagId: "gcp",
        headline: "Agent Space Targets the Enterprise Knowledge Worker",
        body: "Google's Agent Space gives employees a single interface to query across Drive, Gmail, Meet, and third-party apps using natural language — no custom agent build required. Vertex AI Agent Builder expanded simultaneously with 100+ pre-built connectors. Where AWS and Azure ask developers to build agents, GCP is delivering ready-made agents trained on enterprise data out of the box.",
        source: {
          label: "Google Cloud Next 2025 — Agent Space Announcement",
          url: "https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-next-2025-announcements",
        },
      },
    ],
    implications:
      "The hyperscaler agent layer is where platform stickiness is being built right now. Enterprise buyers evaluating AI strategies are implicitly making a platform commitment — AWS Bedrock agents, Azure Copilot, or GCP Agent Space each create different integration dependencies over time. For marketplace sellers, this is the window to position your product as agent-compatible or agent-powered on whichever cloud your customers run. Being listed and certified in the right marketplace as agent ecosystems mature will compound in value over the next 12–18 months.",
  },

  {
    id: "concurrent-agreements",
    title: "Concurrent Agreements",
    subtitle:
      "Marketplace Deal Mechanics Are Catching Up to Enterprise Reality",
    tags: ["aws", "azure", "gcp"],
    intro:
      "Private offers and custom deal structures across AWS, Azure, and GCP have matured significantly. The underlying mechanics — who can negotiate with whom, how agreements stack, and how resellers fit in — now determine how fast complex enterprise deals close on-marketplace versus falling off it entirely.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Concurrent Private Offers and Flexible Payment Scheduling",
        body: "AWS Marketplace now supports concurrent private offers: sellers can run simultaneous negotiations with multiple buyers, and each buyer can hold multiple active agreements with the same seller without blocking others. Flexible payment schedulers let sellers structure installment-based deals directly in the marketplace, reducing the number of enterprise contracts that fall off-platform because standard upfront annual pricing doesn't fit.",
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
        headline: "Procurement API Enables Programmatic Deal Flows",
        body: "GCP continues to push programmatic access to marketplace mechanics via the Procurement API. For high-volume sellers, this means offer creation, entitlement checks, and agreement status management without manual intervention. GCP is quieter on channel mechanics compared to AWS and Azure, but its API-first approach suits ISVs building automated deal pipelines at scale.",
        source: {
          label: "GCP Marketplace Procurement API",
          url: "https://cloud.google.com/marketplace/docs/partners/commerce-procurement-api/overview",
        },
      },
    ],
    implications:
      "The hyperscalers are all converging on the same insight: deals that leave the marketplace are revenue they can't measure or attribute. Every private offer improvement, concurrent negotiation feature, and channel mechanic exists to keep more deal value on-platform. For ISVs, marketplace-native deal structures are increasingly viable for complex enterprise contracts — not just self-serve SMB. For channel partners, MPO and CPPO mechanics are the primary levers for profitability. Understanding each hyperscaler's deal flow isn't a nice-to-have; it's how you price and structure deals competitively.",
  },

  {
    id: "ai-ml-infra",
    title: "AI/ML Infrastructure",
    subtitle: "The Silicon Race Underneath the AI Boom",
    tags: ["aws", "azure", "gcp"],
    intro:
      "The model wars have been fought in the open. The infrastructure war is quieter, but its outcome will determine who wins on cost, latency, and scale over the next three years. All three hyperscalers are now building or deploying custom silicon — and the differences matter more than most sellers and buyers realize.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Trainium2 at Scale — Project Rainier with Anthropic",
        body: "AWS deployed Trainium2 at a scale nobody else has matched: Project Rainier, a dedicated compute cluster built for Anthropic, uses 400,000 Trainium2 chips — the largest AI training cluster ever announced. Paired with Inferentia for inference workloads, AWS now has a full-stack custom silicon play from training through serving. The result: Bedrock model access at costs that external model providers can't structurally match.",
        source: {
          label: "AWS Trainium and Inferentia Overview",
          url: "https://aws.amazon.com/machine-learning/trainium/",
        },
      },
      {
        tagId: "azure",
        headline: "Betting Big on NVIDIA, Building Maia in Reserve",
        body: "Azure is NVIDIA's most important hyperscaler partner — H100, H200, and Blackwell B200 instances are available or announced across regions. Azure Maia, its custom AI accelerator, is still ramping and not broadly customer-accessible. The strategy: run the best available commodity silicon at scale now, build proprietary capability in parallel. For buyers, Azure offers the broadest raw GPU availability — at NVIDIA's premium.",
        source: {
          label: "Azure AI Infrastructure Overview",
          url: "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/overview",
        },
      },
      {
        tagId: "gcp",
        headline: "Ironwood TPU — Built for Inference at Scale",
        body: "Google's 7th-generation Ironwood TPU, announced at Cloud Next 2025, targets inference scale rather than training: 42.5 exaFLOPS per pod, 192GB HBM per chip. Where AWS builds separate chips for training (Trainium) and inference (Inferentia), Google is converging on a TPU architecture that makes inference-at-scale the primary economic equation. Ironwood positions GCP as the lowest-cost inference option as enterprises shift from AI pilots to production deployment.",
        source: {
          label: "Google Cloud TPU Documentation",
          url: "https://cloud.google.com/tpu/docs/intro-to-tpu",
        },
      },
    ],
    implications:
      "The silicon layer is where compute pricing gets set for the next three years. As hyperscalers reduce NVIDIA dependency — AWS with Trainium, Google with TPUs — inference costs will fall, but unevenly by platform. For marketplace sellers with AI-heavy products, your COGS are partly a function of which hyperscaler you run on. GCP's Ironwood push makes them increasingly competitive for inference workloads; AWS's training scale makes them the default for foundation model development. For enterprise buyers, hyperscaler selection for AI infra is now a multi-year decision — silicon roadmaps matter alongside model roadmaps.",
  },

  // ── APRIL 2026 ──────────────────────────────────────────────────────────────

  {
    id: "google-cloud-next-2025",
    title: "Google Cloud Next 2025: Marketplace Implications",
    subtitle: "What the April event meant for ISVs on all three clouds",
    tags: ["gcp", "aws", "azure"],
    intro:
      "Google Cloud Next 2025 (April 9–11, Las Vegas) was the most ISV-relevant Google event in years. Beyond the model announcements, the practical marketplace and distribution changes are what matter for sellers and partners operating across all three clouds.",
    hyperscalers: [
      {
        tagId: "gcp",
        headline:
          "Agent Space, Ironwood, and a New Marketplace Distribution Play",
        body: "Google launched Agent Space — a ready-made enterprise AI interface — alongside Vertex AI Agent Builder's 100+ connector expansion. The Ironwood TPU (7th gen, 42.5 exaFLOPS per pod) was announced for inference at scale. From a marketplace angle, the Google Cloud Ready — AI designation expanded, making it easier for AI-native ISVs to get visible to enterprise GCP buyers and tap into the growing AI infrastructure buying cycle.",
        source: {
          label: "Google Cloud Next 2025 Announcements",
          url: "https://cloud.google.com/blog/topics/google-cloud-next",
        },
      },
      {
        tagId: "aws",
        headline: "AWS Positions Bedrock as the Stable Alternative",
        body: "In the weeks surrounding Google Cloud Next, AWS doubled down on Bedrock's stability and enterprise readiness narrative. Nova model family updates were highlighted as the cost-effective alternative to frontier models. The implicit competitive play: AWS ISVs are positioned as already integrated with a mature orchestration platform, while GCP agent adoption requires new learning curves. Co-sell opportunities tied to Bedrock workloads remained AWS's primary sales motion through Q2.",
        source: {
          label: "Amazon Bedrock Overview",
          url: "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html",
        },
      },
      {
        tagId: "azure",
        headline:
          "Microsoft Previews Build 2025, Reinforces AI Foundry Messaging",
        body: "Microsoft's response to Google Cloud Next was measured — the company previewed Microsoft Build 2025 themes rather than making reactive announcements. Azure AI Foundry messaging was reinforced as the enterprise control plane for agents, emphasizing the Teams and M365 distribution advantage. For Azure Marketplace ISVs, the Copilot Studio integration path remained the highest-leverage positioning — less dependent on model benchmarks, more tied to workflow adoption.",
        source: {
          label: "Microsoft Partner Center — AI Solutions",
          url: "https://learn.microsoft.com/en-us/partner-center/marketplace/",
        },
      },
    ],
    implications:
      "Google Cloud Next set a competitive tone that rippled across all three hyperscalers for the rest of Q2. For ISVs, the key takeaway isn't which announcements were flashiest — it's that GCP's enterprise AI infrastructure is now credible enough to compete for workloads that would have defaulted to AWS or Azure 18 months ago. If your product isn't listed on GCP Marketplace, the addressable opportunity you're missing is growing.",
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
        body: "Azure IP Co-sell status is the designation that unlocks Microsoft's sales team as a distribution channel. To achieve it, ISVs must have a published offer in Azure Marketplace, hit defined business KPIs (typically $100K in annual contracted value for IP Co-sell Ready, with higher thresholds for Azure Incentivized), and complete a business profile in Partner Center. Once achieved, Microsoft field sellers can refer, co-sell, and submit partner-originated leads. The Azure ISV Success program layered on top provides funding, technical support, and go-to-market resources based on partner performance.",
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
      "Snowflake Marketplace has quietly become a significant distribution channel for ISVs whose products run on or interact with Snowflake data. The Native App Framework changes what's possible — and the cross-listing strategy with AWS and GCP is where the real opportunity lies.",
    hyperscalers: [
      {
        tagId: "snowflake",
        headline: "Native App Framework: Apps That Live Inside the Data",
        body: "Snowflake's Native App Framework lets ISVs build applications that execute directly within a customer's Snowflake environment — no data egress, no separate deployment, no infrastructure management by the buyer. The ISV's code runs inside the customer's data perimeter. The framework supports Streamlit-based UIs, stored procedures, and external functions, giving ISVs a full application surface within Snowflake. For analytics, ML, and data transformation ISVs, this eliminates the biggest adoption friction: getting access to customer data without a lengthy security review.",
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
        body: "Snowflake's partnership with Google Cloud has deepened through Cortex — Snowflake's AI/ML framework — which integrates with Google's Vertex AI and Gemini models. For ISVs targeting GCP customers who use Snowflake, this creates a dual listing opportunity: GCP Marketplace for infrastructure-level discovery and Snowflake Marketplace for data-layer access. GCP customers in regulated industries (FSI, healthcare) increasingly use Snowflake as their data governance layer, making Snowflake Marketplace penetration into GCP accounts a strategic priority for relevant ISVs.",
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
    id: "ai-model-listings",
    title:
      "AI on the Marketplace: Models, Agents, and What Buyers Actually Buy",
    subtitle:
      "How AI products are listed, discovered, and billed across hyperscalers",
    tags: ["aws", "azure", "gcp"],
    intro:
      "AI models are now first-class marketplace products. All three hyperscalers have model hubs, and the mechanics of how models are listed, discovered, and billed differ in ways that matter for AI-native ISVs and for buyers trying to manage costs at scale.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "Bedrock and SageMaker Marketplace: Two Paths for AI ISVs",
        body: "Amazon Bedrock is the primary access point for third-party AI models on AWS — model providers work with AWS to make models available within the Bedrock catalog, with per-token billing through the customer's AWS account. For ISVs building on top of models (not providing them), SageMaker Marketplace lets them list custom model packages, training algorithms, inference containers, and MLOps tooling as purchasable products. The two paths serve different buyers: Bedrock buyers want managed model access; SageMaker Marketplace buyers want custom model infrastructure.",
        source: {
          label: "Amazon Bedrock and SageMaker Marketplace",
          url: "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html",
        },
      },
      {
        tagId: "azure",
        headline: "AI Foundry Model Catalog: The Widest Third-Party Selection",
        body: "Azure AI Foundry's model catalog aggregates models from OpenAI, Meta, Mistral, Cohere, and dozens of other providers, with Azure Marketplace billing for pay-as-you-go access. For ISVs, two paths exist: listing an application built on these models as an Azure Marketplace SaaS offer, or becoming a model provider in the catalog. The model-as-a-service billing approach — where customers pay per token through their Azure subscription — is increasingly attractive to enterprise buyers who want AI capabilities without managing model infrastructure.",
        source: {
          label: "Azure AI Foundry Model Catalog",
          url: "https://learn.microsoft.com/en-us/azure/ai-studio/how-to/model-catalog-overview",
        },
      },
      {
        tagId: "gcp",
        headline: "Model Garden: GCP's AI Inference Marketplace",
        body: "Google's Model Garden on Vertex AI offers 150+ models — first-party (Gemini family), open-source (Llama, Mistral), and partner-provided — with GCP Marketplace billing for pay-per-use access. For ISVs, GCP Marketplace lets you list AI applications that run on or alongside Model Garden capabilities. The Vertex AI integration means ISVs can reference specific models in their listings, with customer billing consolidated in GCP. Tight integration with BigQuery and Cloud Storage means data-driven AI applications can be built and distributed without data movement between environments.",
        source: {
          label: "Google Cloud Model Garden",
          url: "https://cloud.google.com/vertex-ai/generative-ai/docs/model-garden/explore-models",
        },
      },
    ],
    implications:
      "AI listings are the fastest-growing category on every major cloud marketplace. For ISVs with AI-native products, this creates a timing advantage: buyers are actively browsing for AI tooling they haven't bought before, and the marketplace is where enterprise procurement is increasingly directing that spend. The window to establish a strong listing before the category matures is narrowing — Q1 and Q2 of 2026 are the right time to move.",
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
        body: "AWS's Foundational Technical Review (FTR) — previously a tiered requirement — is now required for AWS Marketplace listing across nearly all categories. The FTR assesses security posture, well-architected alignment, and operational readiness. ISVs that pass can display the AWS Validated Partner badge, which is increasingly surfaced in marketplace search results. For ISVs on older listings, retroactive FTR requirements are being phased in — the practical deadline is to complete the review before listing renewals, after which non-FTR listings may lose promotional positioning.",
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
          label: "Azure Marketplace Security Requirements",
          url: "https://learn.microsoft.com/en-us/partner-center/marketplace/certification-policies",
        },
      },
      {
        tagId: "gcp",
        headline: "Google Cloud Ready and Assured Workloads Alignment",
        body: "GCP's Assured Workloads framework — which provides compliance controls for regulated industries — increasingly requires ISV listings to demonstrate alignment with the compliance postures it enforces. For ISVs targeting government, FSI, or healthcare buyers on GCP, Assured Workloads compatibility is a prerequisite for access to those customer segments. GCP also runs the Google Cloud Ready program, which validates ISV products against cloud-native best practices — products with this designation receive preferential treatment in marketplace search and co-sell campaigns.",
        source: {
          label: "Google Cloud Ready Program",
          url: "https://cloud.google.com/partners/resources/google-cloud-ready",
        },
      },
    ],
    implications:
      "Certification is no longer just about compliance — it's about search visibility. All three hyperscalers now use certification status as a ranking signal in marketplace discovery. Uncertified listings rank lower, appear in fewer curated collections, and don't qualify for co-sell programs that require validated status. If your listing hasn't been through FTR, publisher attestation, or GCR in the past 12 months, schedule it now — the opportunity cost of delay compounds every quarter.",
  },

  {
    id: "data-products-marketplace",
    title: "Data Products Find Their Marketplace",
    subtitle: "AWS Data Exchange, Analytics Hub, and Snowflake compared",
    tags: ["aws", "gcp", "snowflake"],
    intro:
      "Data products — datasets, analytics tables, ML training sets, and enrichment feeds — are an increasingly significant category on cloud marketplaces. The model is different from software listings, the economics are different, and the buyer motion is different. Here's how the three primary channels compare.",
    hyperscalers: [
      {
        tagId: "aws",
        headline: "AWS Data Exchange: The Mature Data Marketplace",
        body: "AWS Data Exchange is AWS's dedicated marketplace for third-party data products — datasets, ML training data, APIs, and analytics-ready tables. Data providers list products on Data Exchange; buyers subscribe and access data directly in S3 or through direct API calls, with billing through the AWS account. Subscription pricing, pay-per-query, and custom pricing options are all supported. For ISVs who own proprietary datasets (firmographic, market, geospatial, financial), Data Exchange provides marketplace distribution without requiring a software product alongside it.",
        source: {
          label: "AWS Data Exchange Documentation",
          url: "https://docs.aws.amazon.com/data-exchange/latest/userguide/what-is-data-exchange.html",
        },
      },
      {
        tagId: "gcp",
        headline: "Analytics Hub: GCP's Zero-Copy Data Sharing Layer",
        body: "GCP's Analytics Hub enables organizations to publish and subscribe to data exchanges — both internal (within an org) and external (marketplace-style) — with data delivered as linked datasets directly in the subscriber's BigQuery environment. No data copying, no egress costs, always current. For data providers, this is a compelling distribution model: subscribers access fresh data in their existing analytics environment without operational overhead. For ISVs in data-heavy industries, Analytics Hub is the primary mechanism for reaching GCP and BigQuery users at scale.",
        source: {
          label: "GCP Analytics Hub Overview",
          url: "https://cloud.google.com/bigquery/docs/analytics-hub-introduction",
        },
      },
      {
        tagId: "snowflake",
        headline: "Snowflake Marketplace: The Highest-Converting Data Channel",
        body: "Snowflake Marketplace remains the highest-converting distribution channel for data products targeting Snowflake-native users. Data providers list datasets that subscribers access as live shares — no movement, no duplication, always current. The monetization model is direct: providers set per-query, subscription, or usage-based pricing, and Snowflake handles billing. For ISVs with data products, Snowflake Marketplace penetration often converts faster than AWS or GCP listings because buyers are already in-workflow — they browse, subscribe, and query within Snowflake without leaving their data environment.",
        source: {
          label: "Snowflake Marketplace — Provider Guide",
          url: "https://docs.snowflake.com/en/user-guide/data-sharing-provider",
        },
      },
    ],
    implications:
      "Data product listings are among the highest-margin items on cloud marketplaces — once the dataset is prepared and listed, marginal cost per subscriber is near zero. For ISVs who have been treating proprietary data as a sales tool rather than a product, the marketplace infrastructure now exists to monetize it directly. The fastest path to revenue is often Snowflake Marketplace for the data layer, AWS Data Exchange for the enterprise IT buyer, and GCP Analytics Hub for the BigQuery-native analytics buyer.",
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
        body: "AWS Marketplace transaction volume has grown significantly as AWS Enterprise Discount Program (EDP) penetration deepens in the Global 2000. Buyers with large EDP commitments are actively incentivized to purchase software through the marketplace rather than direct, because marketplace spend counts toward their AWS commitment drawdown. The ISVs who invested in marketplace listings and co-sell programs in 2023–2024 are now seeing compounding returns as this buyer incentive structure matures. ISVs without marketplace listings are increasingly excluded from enterprise procurement processes that require it.",
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
        headline: "GCCP: GCP's Committed Spend Program Gains Traction",
        body: "Google Cloud Consumption Commitments (GCCP) expanded meaningfully in 2025, with more ISVs qualifying for GCCP-eligible listings. Customers with GCP committed spend can use marketplace purchases to draw down their GCP commitment — the same mechanic that drove EDP and MACC adoption on AWS and Azure. GCP's committed spend pool is smaller than AWS or Azure in absolute terms, but the growth rate is significant. GCCP-eligible ISV revenue grew substantially as GCP's enterprise penetration deepened in AI infrastructure accounts.",
        source: {
          label: "GCP Marketplace Committed Use",
          url: "https://cloud.google.com/marketplace/docs/partners/integrated-saas/listing-saas",
        },
      },
    ],
    implications:
      "The 2025 story for cloud marketplaces is straightforward: committed spend programs created a structural buyer incentive to purchase on-marketplace that didn't fully exist in 2023. ISVs who are MACC-eligible, EDP-attributed, and GCCP-qualified are operating with a tailwind that their non-marketplace competitors don't have. If your 2026 planning doesn't include a specific plan to achieve or expand these designations, you're ceding ground to competitors who do.",
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
        body: "Microsoft rebranded the Microsoft Partner Network to the Microsoft AI Cloud Partner Program (MAICPP) in 2024–2025, making AI specializations a central differentiator. For Azure Marketplace ISVs, the most impactful change is the addition of AI and Data solution area designations that unlock new co-sell opportunities and Microsoft-funded campaigns. Partners with AI-adjacent products who achieve Solution Partner designation in the Data & AI area gain access to Microsoft's AI customer activation programs — a direct path to buyers actively evaluating AI investments.",
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
