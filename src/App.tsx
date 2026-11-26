import React, { useState, useEffect, useMemo } from 'react';
import {
  Globe,
  Code2,
  Megaphone,
  Palette,
  Video,
  Search,
  Bot,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
  MessageSquare,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Layers,
  Cpu,
  Compass,
  Rocket,
  TrendingUp,
  Building2,
  Stethoscope,
  ShoppingBag,
  Utensils,
  GraduationCap,
  Briefcase,
  Lightbulb,
  ExternalLink,
  Send,
  Check,
  Eye,
  Sliders,
  Users,
  Handshake,
  Clock,
  Plus,
  Minus,
  Copy,
  PhoneCall
} from 'lucide-react';

// ============================================================================
// 0. AGENCY CONTACT CONFIGURATION (Update your WhatsApp number & email here)
// ============================================================================
const AGENCY_CONFIG = {
  brandName: 'Nexora Global',
  parentCompany: 'Nexora Enterprises',
  tagline: 'Transforming Ideas Into Digital Growth.',
  // Enter digits only with country code (e.g., '923001234567' for +92 300 1234567)
  whatsappNumber: '923327328071',
  whatsappDisplay: '+92 327 328071',
  email: 'nexoraenterpries786@gmail.com',
  location: 'Pakistan (Serving Clients Locally & Worldwide)'
};

const getWhatsAppUrl = (message) =>
  `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

// ============================================================================
// 1. CUSTOM BRAND LOGO COMPONENT (Matched to Uploaded Royal Navy Logo #003D79)
// ============================================================================
const NexoraLogo = ({ variant = 'light', className = '', showSubtitle = false }) => {
  // variant: 'light' = Royal Navy (#003D79) mark matching your brand logo on light surfaces
  //          'dark'  = Crisp White (#FFFFFF) + Champagne Gold (#C8A96A) mark on dark navy surfaces
  const primaryFill = variant === 'dark' ? '#FFFFFF' : '#003D79';
  const globeStroke = variant === 'dark' ? '#C8A96A' : '#003D79';
  const subTextFill = variant === 'dark' ? '#C8A96A' : '#003D79';
  const maskId = `nexora-n-mask-${variant}-${showSubtitle ? 'sub' : 'main'}`;

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Geometric 'N' Monogram with Circular Negative-Space Cutout & Latitude/Longitude Globe */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Nexora Global Monogram"
        className="shrink-0"
      >
        <defs>
          <mask id={maskId}>
            <rect width="100" height="100" fill="white" />
            <circle cx="50" cy="50" r="29" fill="black" />
          </mask>
        </defs>

        {/* Bold Architectural 'N' Pillars & Diagonal */}
        <g mask={`url(#${maskId})`}>
          <rect x="12" y="10" width="21" height="80" fill={primaryFill} />
          <rect x="67" y="10" width="21" height="80" fill={primaryFill} />
          <polygon points="12,10 33,10 88,90 67,90" fill={primaryFill} />
        </g>

        {/* Precision Latitude / Longitude Globe inside Negative Space */}
        <g stroke={globeStroke} strokeWidth="3.8" fill="none">
          <circle cx="50" cy="50" r="22.5" />
          <line x1="50" y1="27.5" x2="50" y2="72.5" />
          <ellipse cx="50" cy="50" rx="11.5" ry="22.5" />
          <line x1="27.5" y1="50" x2="72.5" y2="50" />
          <path d="M 31 38 Q 50 43 69 38" />
          <path d="M 31 62 Q 50 57 69 62" />
        </g>
      </svg>

      {/* Wordmark Typography */}
      <div className="flex flex-col leading-none">
        <span
          style={{ color: primaryFill, fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif" }}
          className="text-xl sm:text-[22px] font-extrabold tracking-[0.06em] uppercase"
        >
          NEXORA
        </span>
        <span
          style={{ color: subTextFill, fontFamily: "'Inter', sans-serif" }}
          className="text-[10px] sm:text-[11px] font-semibold tracking-[0.34em] uppercase mt-1"
        >
          {showSubtitle ? 'DIGITAL SERVICES' : 'GLOBAL'}
        </span>
      </div>
    </div>
  );
};

// ============================================================================
// 2. DATA REPOSITORY (Services, Portfolio Concepts, Industries, SEO Metadata)
// ============================================================================
const SERVICES_DATA = [
  {
    id: 'web-development',
    slug: '/services/web-development',
    title: 'Website Development',
    shortTitle: 'Web Development',
    icon: Code2,
    tagline: 'High-Performance Web Architecture Built to Convert',
    heroHeadline: 'Custom Websites & Digital Platforms Engineered for Business Growth',
    shortDesc:
      'Modern, fast-loading, responsive websites and web applications engineered for seamless user experience, technical SEO readiness, and lead conversion.',
    longDesc:
      'Your website is your primary digital flagship. At Nexora Global, we design and engineer scalable business websites, custom WordPress platforms, high-converting landing pages, and full-featured e-commerce stores tailored to convert visitors into qualified inquiries.',
    items: [
      'Business websites',
      'WordPress development',
      'E-commerce websites',
      'Landing pages',
      'Website maintenance'
    ],
    benefits: [
      {
        title: 'Mobile-First Responsive Architecture',
        desc: 'Every layout is crafted to deliver an effortless experience across desktop monitors, tablets, and smartphones.'
      },
      {
        title: 'Conversion-Focused User Journeys',
        desc: 'Strategic information hierarchy and clear calls-to-action guide visitors naturally toward requesting a quote or booking a consultation.'
      },
      {
        title: 'Clean, Maintainable Codebase',
        desc: 'Structured modern front-end and CMS builds ensure fast load times, security best practices, and straightforward content updates.'
      },
      {
        title: 'Search Engine Ready Foundation',
        desc: 'Semantic HTML5 markup, schema readiness, clean URLs, and Core Web Vitals optimization built in from day one.'
      }
    ],
    features: [
      {
        name: 'Custom Corporate & Business Websites',
        detail: 'Bespoke multi-page websites tailored to your brand positioning, industry authority, and service offerings.'
      },
      {
        name: 'WordPress & Custom CMS Development',
        detail: 'Lightweight, bloat-free WordPress builds with intuitive editing controls so your internal team can manage content effortlessly.'
      },
      {
        name: 'E-Commerce Storefronts',
        detail: 'Streamlined product catalogs, intuitive filtering, secure payment gateway integration, and frictionless checkout flows.'
      },
      {
        name: 'Dedicated Campaign Landing Pages',
        detail: 'Focused single-purpose pages engineered for Google Ads, Meta campaigns, and product launches.'
      },
      {
        name: 'Ongoing Maintenance & Security Care',
        detail: 'Proactive updates, uptime monitoring, regular backups, and technical support to keep your digital flagship running smoothly.'
      },
      {
        name: 'White-Label Agency Web Builds',
        detail: 'Reliable, confidential development execution for international marketing and creative agencies.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Architecture & Wireframing',
        desc: 'Mapping site structure, user flows, and conversion touchpoints before visual design begins.'
      },
      {
        step: '02',
        title: 'UI/UX Interface Design',
        desc: 'Crafting responsive high-fidelity layouts aligned with your brand identity and accessibility standards.'
      },
      {
        step: '03',
        title: 'Full-Stack & CMS Development',
        desc: 'Building clean, responsive code, integrating forms, analytics, and speed optimizations.'
      },
      {
        step: '04',
        title: 'QA Testing & Launch',
        desc: 'Cross-browser verification, mobile responsiveness checks, SSL setup, and smooth production deployment.'
      }
    ],
    faqs: [
      {
        q: 'How long does it typically take to build a custom business website?',
        a: 'A standard multi-page business website typically takes 2 to 4 weeks depending on content readiness and custom functionality, while larger e-commerce builds take 4 to 7 weeks.'
      },
      {
        q: 'Will I be able to update text and images myself after launch?',
        a: 'Yes. We build with user-friendly content management workflows and provide a clear walkthrough so your team can update pages, blogs, and media without touching code.'
      },
      {
        q: 'Do you redesign existing outdated websites?',
        a: 'Absolutely. We audit your current site structure, preserve valuable SEO equity through proper redirects, and rebuild the interface with modern UX and performance standards.'
      },
      {
        q: 'Can you assist with domain, hosting, and SSL setup?',
        a: 'Yes, we guide you through selecting reliable cloud or managed hosting and handle complete domain DNS, SSL security, and deployment configuration.'
      }
    ],
    metaTitle: 'Web Development Services | Nexora Global – Digital Services',
    metaDesc:
      'Custom web development services, WordPress development, e-commerce websites, and high-converting landing pages by Nexora Global.'
  },
  {
    id: 'digital-marketing',
    slug: '/services/digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    icon: Megaphone,
    tagline: 'Data-Informed Campaigns That Reach Your Ideal Audience',
    heroHeadline: 'Strategic Digital Marketing & Paid Acquisition Built for Measurable Pipeline',
    shortDesc:
      'Targeted social media marketing, Meta and Google advertising campaigns, and cohesive growth strategies designed to connect your brand with active buyers.',
    longDesc:
      'Visibility without strategy wastes budget. Nexora Global builds structured digital marketing ecosystems across Meta (Facebook & Instagram), Google Search, and social channels—combining compelling ad creatives with disciplined audience targeting and transparent reporting.',
    items: [
      'Social media marketing',
      'Facebook and Instagram advertising',
      'Google Ads',
      'Marketing strategy'
    ],
    benefits: [
      {
        title: 'Precision Audience Targeting',
        desc: 'Reach decision-makers and high-intent customers segmented by geography, interests, search intent, and behavior.'
      },
      {
        title: 'Cohesive Creative & Copy Alignment',
        desc: 'Ad visuals, persuasive messaging, and landing pages work together seamlessly to maximize engagement and lead quality.'
      },
      {
        title: 'Transparent Budget Allocation',
        desc: 'Clear visibility into ad spend, campaign structure, audience testing, and ongoing optimization decisions.'
      },
      {
        title: 'Local & International Reach',
        desc: 'Campaign architectures calibrated for Pakistan’s dynamic consumer market as well as competitive USA, UK, UAE, Canada, and Australia regions.'
      }
    ],
    features: [
      {
        name: 'Social Media Management & Growth',
        detail: 'Structured monthly content calendars, brand-aligned visual posts, community engagement, and profile optimization.'
      },
      {
        name: 'Facebook & Instagram (Meta) Ads',
        detail: 'Full-funnel lead generation, retargeting, and brand awareness campaigns with structured A/B creative testing.'
      },
      {
        name: 'Google Search & Display Advertising',
        detail: 'High-intent keyword targeting, compelling search ad copy, negative keyword refinement, and conversion tracking.'
      },
      {
        name: 'Go-To-Market & Funnel Strategy',
        detail: 'Offer positioning, customer journey mapping, and multi-channel campaign roadmaps tailored to your business model.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Market & Audience Research',
        desc: 'Analyzing your ideal customer profile, competitors, and regional demand across target markets.'
      },
      {
        step: '02',
        title: 'Campaign Architecture & Creative',
        desc: 'Structuring ad sets, conversion tracking pixels, and scroll-stopping visual & copy assets.'
      },
      {
        step: '03',
        title: 'Launch & Signal Calibration',
        desc: 'Deploying campaigns with disciplined budget pacing and monitoring early audience response.'
      },
      {
        step: '04',
        title: 'Iterative Optimization & Reporting',
        desc: 'Refining targeting, rotating creatives, and sharing clear, jargon-free performance summaries.'
      }
    ],
    faqs: [
      {
        q: 'How much ad spend do I need to get started with paid ads?',
        a: 'Recommended ad budgets depend on your industry competitiveness and target country. During our consultation, we help determine a realistic testing budget tailored to your goals.'
      },
      {
        q: 'Do you create the graphics and ad copy for our campaigns?',
        a: 'Yes. Our creative and marketing teams collaborate directly to produce custom ad visuals, short-form videos, and conversion-focused copy.'
      },
      {
        q: 'Can you manage campaigns targeting international markets from Pakistan?',
        a: 'Yes. We structure time-zone-aligned campaigns, localized messaging, and currency-appropriate funnels for clients in the USA, UK, UAE, Canada, Australia, and Pakistan.'
      },
      {
        q: 'How do you track leads generated from campaigns?',
        a: 'We configure proper conversion tracking, UTM parameters, and CRM or WhatsApp lead routing so you can trace every inquiry back to its source.'
      }
    ],
    metaTitle: 'Digital Marketing Agency | Nexora Global – Digital Services',
    metaDesc:
      'Strategic digital marketing agency offering social media management, Facebook & Instagram ads, Google Ads, and growth strategy.'
  },
  {
    id: 'graphic-design',
    slug: '/services/graphic-design',
    title: 'Graphic Design & Branding',
    shortTitle: 'Graphic Design & Branding',
    icon: Palette,
    tagline: 'Distinctive Visual Identities That Command Instant Trust',
    heroHeadline: 'Strategic Brand Identity & Visual Design That Elevates Market Perception',
    shortDesc:
      'Timeless logo design, cohesive brand guidelines, social media visual systems, company profiles, and print-ready brochures crafted with precision.',
    longDesc:
      'First impressions happen in milliseconds. Nexora Global crafts refined visual identities and marketing collateral that position your business as credible, modern, and memorable across every digital and physical touchpoint.',
    items: [
      'Logo design',
      'Brand identity',
      'Social media graphics',
      'Business profiles',
      'Brochures and catalogues'
    ],
    benefits: [
      {
        title: 'Consistent Brand Recognition',
        desc: 'Unified typography, color systems, and visual rules ensure your brand looks unmistakable everywhere it appears.'
      },
      {
        title: 'Executive-Grade Corporate Collateral',
        desc: 'Polished company profiles, pitch decks, and brochures that build confidence with enterprise buyers and investors.'
      },
      {
        title: 'Scalable Vector & Digital Assets',
        desc: 'Delivered in complete source, print-ready (CMYK), and web-optimized (RGB/SVG) formats.'
      },
      {
        title: 'Strategic Differentiation',
        desc: 'Thoughtful visual positioning that sets you apart from generic templates and crowded local competitors.'
      }
    ],
    features: [
      {
        name: 'Logo Design & Monogram Systems',
        detail: 'Original, versatile brand marks engineered to scale cleanly from mobile favicons to large-format signage.'
      },
      {
        name: 'Comprehensive Brand Identity Kits',
        detail: 'Color palettes, typography hierarchies, brand usage guidelines, stationery, and social avatar systems.'
      },
      {
        name: 'Social Media Design Templates',
        detail: 'Cohesive Instagram, LinkedIn, and Facebook post/story frameworks for consistent daily publishing.'
      },
      {
        name: 'Corporate Business Profiles & Pitch Decks',
        detail: 'Structured, persuasive company profiles designed for B2B partnerships, real estate, and tenders.'
      },
      {
        name: 'Product Brochures & Catalogues',
        detail: 'Clean editorial layouts for print and interactive digital PDF distribution.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Brand Discovery & Positioning',
        desc: 'Exploring your brand values, target audience expectations, and visual landscape.'
      },
      {
        step: '02',
        title: 'Concept Exploration',
        desc: 'Developing distinct creative directions, typography pairings, and color harmonies.'
      },
      {
        step: '03',
        title: 'Refinement & Collateral Rollout',
        desc: 'Polishing the selected identity and extending it across digital and print touchpoints.'
      },
      {
        step: '04',
        title: 'Brand Guidelines & Asset Handover',
        desc: 'Packaging organized master files, fonts, and a clear brand manual for your team.'
      }
    ],
    faqs: [
      {
        q: 'What files do we receive upon completion of a logo or brand identity project?',
        a: 'You receive full vector master files (AI, EPS, SVG), high-resolution transparent PNGs, print-ready PDFs, and a structured brand style guide.'
      },
      {
        q: 'Can you refresh our existing brand without losing our current recognition?',
        a: 'Yes. We offer strategic brand modernization—refining typography, color balance, and layout systems while preserving your core brand equity.'
      },
      {
        q: 'Do you design company profiles for real estate, healthcare, and corporate firms?',
        a: 'Yes, corporate profiles and capability statements are among our core deliverables for B2B, real estate, and service organizations.'
      },
      {
        q: 'How many design concepts and revision rounds are included?',
        a: 'Every project scope clearly defines initial concept directions and structured revision rounds to ensure complete satisfaction before final handover.'
      }
    ],
    metaTitle: 'Graphic Design & Branding Services | Nexora Global',
    metaDesc:
      'Professional graphic design services, custom logo design, brand identity systems, business profiles, and brochures by Nexora Global.'
  },
  {
    id: 'video-editing',
    slug: '/services/video-editing',
    title: 'Video Editing & Content Creation',
    shortTitle: 'Video Editing & Content',
    icon: Video,
    tagline: 'Scroll-Stopping Motion & Storytelling for Modern Feeds',
    heroHeadline: 'High-Retention Video Editing & Brand Content Creation',
    shortDesc:
      'Dynamic Instagram Reels, YouTube Shorts, promotional brand films, and crisp product videos edited for retention, clarity, and visual polish.',
    longDesc:
      'Short-form and commercial video dominate modern attention. Nexora Global transforms raw footage and brand concepts into crisp, rhythmically paced videos with clean motion graphics, kinetic captions, color grading, and sound design.',
    items: [
      'Reels',
      'YouTube Shorts',
      'Promotional videos',
      'Product videos',
      'Business video content'
    ],
    benefits: [
      {
        title: 'Hook-Driven Pacing & Retention',
        desc: 'Structured visual hooks in the first three seconds, clean cuts, and engaging captions keep viewers watching.'
      },
      {
        title: 'Brand-Consistent Motion Graphics',
        desc: 'Custom lower thirds, kinetic typography, and subtle transitions matched to your brand palette.'
      },
      {
        title: 'Multi-Platform Aspect Formatting',
        desc: 'Delivered ready for vertical feeds (9:16 Reels/Shorts/TikTok), widescreen YouTube (16:9), and square placements.'
      },
      {
        title: 'Reliable Turnaround for Creators & Brands',
        desc: 'Streamlined cloud file-sharing and feedback workflows make ongoing content production effortless.'
      }
    ],
    features: [
      {
        name: 'Instagram Reels & TikTok Editing',
        detail: 'Fast-paced storytelling, dynamic subtitles, B-roll layering, and trend-aware visual polish.'
      },
      {
        name: 'YouTube Shorts & Long-Form Cuts',
        detail: 'Clean narrative pacing, chapter visual cues, audio leveling, and thumbnail visual alignment.'
      },
      {
        name: 'Commercial & Promotional Brand Videos',
        detail: 'High-impact overview videos for websites, paid ad campaigns, and corporate presentations.'
      },
      {
        name: 'E-Commerce Product Showcases',
        detail: 'Feature callouts, clean transitions, and benefit-led product highlight reels.'
      },
      {
        name: 'Executive & Educational Business Content',
        detail: 'Polished founder talking-head edits, clinic/property walkthroughs, and explainer visuals.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Brief & Footage Ingestion',
        desc: 'Sharing raw clips, brand assets, and reference style notes via organized cloud folders.'
      },
      {
        step: '02',
        title: 'Narrative Assembly & Pacing',
        desc: 'Selecting strongest takes, structuring the storyline, and establishing rhythmic flow.'
      },
      {
        step: '03',
        title: 'Motion Graphics, Captions & Audio',
        desc: 'Adding branded titles, clean subtitles, color correction, and balanced background audio.'
      },
      {
        step: '04',
        title: 'Review & Multi-Format Export',
        desc: 'Applying timestamped feedback and exporting crisp, platform-optimized masters.'
      }
    ],
    faqs: [
      {
        q: 'How do we send our raw video footage to your team?',
        a: 'You can share footage easily via Google Drive, Dropbox, or WeTransfer. We organize project folders for smooth ongoing collaboration.'
      },
      {
        q: 'Can you edit videos recorded on a smartphone?',
        a: 'Yes. Modern smartphones shoot high-resolution footage; with proper color grading, audio cleanup, and motion graphics, we turn smartphone clips into studio-grade social content.'
      },
      {
        q: 'Do you offer monthly retainers for regular Reels and Shorts?',
        a: 'Yes, we provide flexible monthly content packages for businesses, personal brands, and agencies needing consistent weekly video output.'
      },
      {
        q: 'Are captions and branded overlays included?',
        a: 'Yes, clean animated captions, brand color accents, and logo stingers are included according to your brand guidelines.'
      }
    ],
    metaTitle: 'Video Editing Services & Content Creation | Nexora Global',
    metaDesc:
      'Professional video editing services for Instagram Reels, YouTube Shorts, promotional brand videos, and product content by Nexora Global.'
  },
  {
    id: 'seo',
    slug: '/services/seo',
    title: 'SEO Services',
    shortTitle: 'SEO Services',
    icon: Search,
    tagline: 'Sustainable Organic Visibility Across Search Engines',
    heroHeadline: 'Technical, On-Page & Local SEO Built for Long-Term Search Authority',
    shortDesc:
      'Comprehensive on-page optimization, technical site audits, local search positioning, and content architecture to capture high-intent organic traffic.',
    longDesc:
      'Sustainable growth requires being discovered when customers actively search for your solutions. Nexora Global executes white-hat, technically sound SEO strategies focused on clean site architecture, search intent alignment, Core Web Vitals, and local market prominence.',
    items: ['On-page SEO', 'Technical SEO', 'Local SEO', 'SEO strategy'],
    benefits: [
      {
        title: 'High-Intent Organic Discovery',
        desc: 'Capture prospects actively researching your services without relying solely on continuous paid ad spend.'
      },
      {
        title: 'Healthy Technical Foundation',
        desc: 'Resolve crawl bottlenecks, broken links, indexing issues, and slow page speeds that hold rankings back.'
      },
      {
        title: 'Dominant Local & Regional Presence',
        desc: 'Strengthen visibility in local map packs and geo-targeted searches across cities and target countries.'
      },
      {
        title: 'Ethical, Algorithm-Resilient Practices',
        desc: 'Zero spammy shortcuts—only structured content quality, clean semantic markup, and user-first optimization.'
      }
    ],
    features: [
      {
        name: 'Comprehensive Technical SEO Audits',
        detail: 'Crawlability analysis, XML sitemaps, robots.txt tuning, Core Web Vitals, mobile usability, and structured schema markup.'
      },
      {
        name: 'On-Page Content & Semantic Optimization',
        detail: 'Keyword intent mapping, title tags, meta descriptions, H1–H3 hierarchy, internal linking, and image alt optimization.'
      },
      {
        name: 'Local SEO & Google Business Optimization',
        detail: 'Location landing pages, local citation consistency, and Google Business Profile optimization for regional leads.'
      },
      {
        name: 'Content Roadmap & Competitor Gap Strategy',
        detail: 'Data-backed topic clusters and service page recommendations designed to build topical authority.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Technical & Competitive Baseline Audit',
        desc: 'Inspecting site health, indexation status, keyword positioning, and competitor benchmarks.'
      },
      {
        step: '02',
        title: 'Keyword & Intent Architecture',
        desc: 'Mapping commercial and informational search terms to dedicated pages across your site.'
      },
      {
        step: '03',
        title: 'On-Page & Technical Implementation',
        desc: 'Deploying metadata, schema markup, speed fixes, internal links, and optimized content.'
      },
      {
        step: '04',
        title: 'Search Console Tracking & Refinement',
        desc: 'Monitoring impressions, click-through rates, and indexing health with transparent monthly updates.'
      }
    ],
    faqs: [
      {
        q: 'How long does SEO take to show meaningful movement?',
        a: 'Technical fixes improve site health immediately, while competitive organic ranking improvements typically build progressively over 3 to 6 months of consistent execution.'
      },
      {
        q: 'Do you guarantee #1 rankings on Google?',
        a: 'No ethical agency can guarantee specific algorithm positions, as search engines control rankings. We guarantee disciplined, transparent technical and content execution aligned with search engine guidelines.'
      },
      {
        q: 'Can you optimize a website that was built by another developer?',
        a: 'Yes. We work across WordPress, custom React/Next.js sites, Shopify, and other platforms to implement technical and on-page improvements.'
      },
      {
        q: 'Is Local SEO helpful for clinics, restaurants, and real estate firms?',
        a: 'Extremely. Location-driven businesses benefit directly from optimized local service pages and strong map-pack visibility when nearby customers search.'
      }
    ],
    metaTitle: 'SEO Services – Technical, On-Page & Local SEO | Nexora Global',
    metaDesc:
      'Professional SEO services including technical SEO audits, on-page optimization, local SEO, and sustainable organic search strategy.'
  },
  {
    id: 'ai-automation',
    slug: '/services/ai-automation',
    title: 'AI & Business Automation',
    shortTitle: 'AI & Automation',
    icon: Bot,
    tagline: 'Intelligent Workflows That Eliminate Repetitive Bottlenecks',
    heroHeadline: 'Practical AI Workflows, CRM Pipelines & Operational Automation',
    shortDesc:
      'Streamline lead capture, CRM routing, customer support responses, and internal operations with tailored AI-assisted business automation.',
    longDesc:
      'Growing businesses lose valuable opportunities when leads sit unanswered or teams spend hours on manual data entry. Nexora Global designs practical, reliable automation systems connecting your website, WhatsApp, email, and CRM so every inquiry is captured and nurtured seamlessly.',
    items: [
      'Business workflow automation',
      'CRM setup',
      'Lead management systems',
      'AI-assisted workflows',
      'Customer support workflow solutions'
    ],
    benefits: [
      {
        title: 'Faster Lead Response Times',
        desc: 'Automatically route website and ad inquiries into your CRM with instant notifications and acknowledgments.'
      },
      {
        title: 'Reduced Manual Administrative Overhead',
        desc: 'Eliminate repetitive copy-pasting between forms, spreadsheets, email tools, and messaging platforms.'
      },
      {
        title: 'Structured Sales & Pipeline Visibility',
        desc: 'Track every prospect stage clearly from initial inquiry through proposal, follow-up, and closing.'
      },
      {
        title: 'Practical, Human-Supervised AI',
        desc: 'Deploy AI assistants for knowledge-base Q&A, inquiry triage, and content drafting with clear guardrails.'
      }
    ],
    features: [
      {
        name: 'CRM Architecture & Pipeline Setup',
        detail: 'Configuring HubSpot, Zoho, Pipedrive, or custom CRM stages tailored to your exact sales workflow.'
      },
      {
        name: 'Automated Lead Capture & Routing',
        detail: 'Connecting website forms, Meta Lead Ads, and WhatsApp inquiries directly into structured contact records.'
      },
      {
        name: 'AI-Assisted Customer Support Workflows',
        detail: 'Smart FAQ routing, instant triage assistants, and structured escalation to human team members.'
      },
      {
        name: 'Cross-App Operational Automations',
        detail: 'Connecting calendars, invoicing notifications, project boards, and reporting sheets seamlessly.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Workflow & Bottleneck Audit',
        desc: 'Mapping how leads, customer inquiries, and internal tasks currently move through your business.'
      },
      {
        step: '02',
        title: 'System Blueprint & Tool Selection',
        desc: 'Designing clean automation logic using reliable, cost-effective CRM and integration platforms.'
      },
      {
        step: '03',
        title: 'Integration, AI Guardrails & Testing',
        desc: 'Building triggers, data validation rules, and sandbox-testing every edge case.'
      },
      {
        step: '04',
        title: 'Team Onboarding & Documentation',
        desc: 'Delivering clear workflow diagrams and training your staff to manage daily pipelines effortlessly.'
      }
    ],
    faqs: [
      {
        q: 'Do we need a large technical team to use the automations you build?',
        a: 'No. We design intuitive dashboards and automated background workflows accompanied by plain-English documentation so non-technical teams can operate them comfortably.'
      },
      {
        q: 'Can you connect our website forms directly to WhatsApp and our CRM?',
        a: 'Yes. Instant lead routing to CRM records, email alerts, and WhatsApp follow-up workflows is one of our most requested setups.'
      },
      {
        q: 'How do you ensure AI responses stay accurate to our business?',
        a: 'We ground AI support workflows strictly on your approved company documentation, service policies, and escalation rules—never letting unverified answers reach customers.'
      },
      {
        q: 'Which CRM platforms do you work with?',
        a: 'We configure popular platforms such as HubSpot, Zoho CRM, Pipedrive, GoHighLevel, and lightweight Airtable/Notion-based pipelines depending on your scale.'
      }
    ],
    metaTitle: 'AI & Business Automation Services | Nexora Global',
    metaDesc:
      'Business workflow automation, CRM setup, lead management systems, and AI-assisted customer support solutions by Nexora Global.'
  }
];

const PORTFOLIO_CONCEPTS = [
  {
  id: 'pharmacare',
  title: 'PharmaCare',
  category: 'Web Development',
  filterGroup: 'Web & E-Commerce',
  industry: 'Pharmaceutical',
  label: 'Client Project',
  summary:
    'A professional digital platform developed for a pharmaceutical company, designed to strengthen its online presence and provide customers with an accessible, informative, and user-friendly experience.',
  challenge:
    'Create a trustworthy digital experience for a pharmaceutical company that communicates professionalism, presents its products and services clearly, and makes important information easy to access.',
  solution:
    'Developed a responsive website experience with a clean interface, structured content sections, intuitive navigation, and a professional visual identity aligned with the pharmaceutical industry.',
  deliverables: [
    'Website UI/UX Design',
    'Responsive Web Development',
    'Pharmaceutical Brand Presentation',
    'Structured Content & Navigation',
    'Cross-Device Optimization'
  ],
  accentColor: '#16A085',
  palette: ['#087F8C', '#16A085', '#F4FAF9']
},
  {
  id: 'aerobic-group',
  title: 'Aerobic Group',
  category: 'Web Development',
  filterGroup: 'Web & E-Commerce',
  industry: 'Construction, Engineering & Contracting',
  label: 'Client Project',
  summary:
    'A professional corporate website concept developed for Aerobic Group of Companies, a multi-sector contracting organization operating across construction, engineering, government tenders, supply and procurement, and general contracting.',
  challenge:
    'Present a diverse range of contracting capabilities through a unified digital experience that communicates corporate credibility, highlights service divisions, and makes business inquiries accessible to potential clients and partners.',
  solution:
    'Created a structured corporate web experience with clear service categories, professional visual presentation, organized company information, and accessible inquiry pathways to showcase the organization’s diverse contracting capabilities.',
  deliverables: [
    'Corporate Website Design & Development',
    'Construction & Engineering Service Presentation',
    'Government Tender & Contracting Information',
    'Supply & Procurement Service Sections',
    'Responsive UI/UX Design',
    'Business Inquiry & Contact Experience'
  ],
  accentColor: '#C8A96A',
  palette: ['#0B1220', '#C8A96A', '#FAF7F2']
},
  {
  id: 'dijas-studio',
  title: "Dija's Studio",
  category: 'Branding & Design',
  filterGroup: 'Branding & Social',
  industry: 'Artificial Jewellery & Fashion Accessories',
  label: 'Client Project',
  summary:
    "Complete brand identity and launch development for Dija's Studio, an artificial jewellery brand. From logo creation and visual identity to brand collateral, packaging, social media presence, and launch execution, we built the brand from the ground up.",
  challenge:
    'Build a distinctive and memorable jewellery brand identity that communicates elegance, style, and affordability while creating a consistent visual experience across digital and physical brand touchpoints.',
  solution:
    "Developed a complete branding system for Dija's Studio, including a custom logo, cohesive visual identity, brand color palette, typography, marketing creatives, packaging direction, and social media design. Also planned and executed the brand launch to establish its initial market presence.",
  deliverables: [
    'Brand Strategy & Creative Direction',
    'Custom Logo Design & Brand Identity',
    'Typography & Color Palette',
    'Jewellery Packaging & Brand Collateral',
    'Social Media Branding & Marketing Creatives',
    'Promotional & Launch Campaign Design',
    'Complete Brand Launch Execution'
  ],
  accentColor: '#C8A96A',
  palette: ['#241B24', '#C8A96A', '#FFF8F2']
},
  {
  id: 'flash-leather',
  title: 'Flash Leather',
  category: 'Digital Marketing',
  filterGroup: 'Branding & Social',
  industry: 'Leather Goods & Fashion Retail',
  label: 'Client Project',
  summary:
    'A digital marketing and promotional campaign for Flash Leather, focused on increasing brand visibility, showcasing premium leather products, and attracting customers through engaging social media content and promotional offers.',
  challenge:
    'Strengthen Flash Leather’s online presence, highlight its leather product collection, and create compelling promotional campaigns that attract potential customers and encourage in-store visits.',
  solution:
    'Developed a social media marketing direction featuring product-focused creatives, promotional discount campaigns, store promotions, and visually engaging content designed to showcase leather jackets, wallets, bags, and belts.',
  deliverables: [
    'Digital Marketing Strategy',
    'Social Media Post & Creative Design',
    'Product Promotion Campaigns',
    'Discount & Promotional Advertising',
    'Brand Awareness Campaigns',
    'Leather Product Photography Direction',
    'Instagram Marketing & Content Planning'
  ],
  accentColor: '#D97706',
  palette: ['#171717', '#D97706', '#F5F0E8']
},
  {
  id: 'luxo-atelier',
  title: 'Luxo Atelier',
  category: 'E-commerce',
  filterGroup: 'Web & E-Commerce',
  industry: 'Luxury Watches & Accessories',
  label: 'Client Project',
  summary:
    'A premium e-commerce storefront for Luxo Atelier, designed to showcase luxury watches through an elegant digital shopping experience, refined product presentation, and seamless online purchasing journeys.',
  challenge:
    'Create a sophisticated online shopping destination that reflects the exclusivity of a luxury watch brand while making product discovery, collection browsing, and purchasing effortless across all devices.',
  solution:
    'Designed a luxury-focused e-commerce experience with an elegant visual identity, premium product galleries, organized watch collections, detailed product pages, intuitive shopping navigation, and a streamlined checkout journey.',
  deliverables: [
    'E-Commerce Website Design & Development',
    'Luxury Brand Digital Experience',
    'Watch Collection & Product Catalog',
    'Product Detail Page UI/UX',
    'Shopping Cart & Checkout Experience',
    'Responsive Mobile-First Design',
    'E-Commerce Conversion Optimization'
  ],
  accentColor: '#C8A96A',
  palette: ['#111111', '#C8A96A', '#F7F4EE']
},
];

const WHY_CHOOSE_ITEMS = [
  {
    icon: Users,
    title: 'Client-Focused Approach',
    desc: 'Every recommendation starts with your specific business objectives, audience realities, and operational capacity—never a one-size-fits-all script.'
  },
  {
    icon: Lightbulb,
    title: 'Creative & Strategic Thinking',
    desc: 'We unite clean visual design with commercial conversion logic so your digital assets look authoritative and actively support growth.'
  },
  {
    icon: Clock,
    title: 'Reliable Project Delivery',
    desc: 'Structured milestones, clear timelines, and disciplined quality assurance ensure your projects move smoothly from concept to launch.'
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    desc: 'We build with contemporary frameworks, responsive standards, search-ready architecture, and practical AI workflow integrations.'
  },
  {
    icon: Sliders,
    title: 'Flexible Solutions',
    desc: 'Whether you need a focused single-service engagement, a complete digital overhaul, or white-label agency support, we adapt to your scope.'
  },
  {
    icon: Handshake,
    title: 'Transparent Communication',
    desc: 'Direct updates, honest expectations, and clear documentation at every stage—no hidden jargon or inflated vanity claims.'
  }
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    desc: 'Understanding your business, goals and challenges.',
    detail:
      'We begin with a focused discovery session to audit your current presence, clarify target markets, and define success criteria.'
  },
  {
    number: '02',
    title: 'Strategize',
    desc: 'Developing a solution and project plan.',
    detail:
      'We map out the architecture, creative direction, technical stack, milestones, and deliverables into a clear roadmap.'
  },
  {
    number: '03',
    title: 'Create',
    desc: 'Designing and developing your digital solution.',
    detail:
      'Our designers, developers, and strategists craft your assets with iterative check-ins and meticulous quality control.'
  },
  {
    number: '04',
    title: 'Deliver',
    desc: 'Launching, reviewing and delivering the final project.',
    detail:
      'After thorough cross-device testing and stakeholder review, we deploy your solution smoothly with full handover documentation.'
  },
  {
    number: '05',
    title: 'Grow',
    desc: 'Ongoing support and improvement.',
    detail:
      'We remain available for continuous optimization, marketing campaigns, technical maintenance, and workflow scaling.'
  }
];

const INDUSTRIES_SERVED = [
  {
    icon: Building2,
    title: 'Real Estate',
    desc: 'Property portals, developer brand identities, virtual showcase landing pages, and qualified buyer lead funnels.'
  },
  {
    icon: Stethoscope,
    title: 'Healthcare & Clinics',
    desc: 'Patient-friendly clinic websites, local search visibility, educational content, and appointment inquiry workflows.'
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-commerce',
    desc: 'High-converting online storefronts, product video showcases, catalog design, and performance ad campaigns.'
  },
  {
    icon: Utensils,
    title: 'Restaurants & Hospitality',
    desc: 'Editorial dining websites, interactive digital menus, reservation funnels, and appetite-driven social reels.'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Institutional web platforms, course landing pages, student enrollment campaigns, and clear information architecture.'
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    desc: 'Corporate profiles, B2B authority websites, CRM pipeline setups, and executive brand positioning.'
  },
  {
    icon: Rocket,
    title: 'Startups',
    desc: 'Rapid MVP web presence, cohesive launch branding, pitch collateral, and scalable growth foundations.'
  }
];

const GLOBAL_MARKETS = ['Pakistan', 'USA', 'UK', 'UAE', 'Canada', 'Australia'];

// ============================================================================
// 3. CUSTOM INTERACTIVE VISUAL MOCKUPS (Hero Dashboard & Portfolio Cards)
// ============================================================================
const HeroInteractiveShowcase = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('web');

  const tabs = [
    { id: 'web', label: 'Web Architecture', icon: Code2 },
    { id: 'growth', label: 'Brand & Growth', icon: TrendingUp },
    { id: 'ai', label: 'AI & CRM Flow', icon: Bot }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:ml-auto">
      {/* Ambient Royal Navy & Champagne Gold Glow */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 25% 20%, #003D79 0%, #C8A96A 45%, rgba(11,18,32,0) 75%)'
        }}
      />

      {/* Main Glassmorphic Studio Window */}
      <div className="relative rounded-2xl bg-[#0B1220]/95 border border-[#C8A96A]/35 shadow-2xl overflow-hidden backdrop-blur-md">
        {/* Browser / Workspace Top Bar */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-800/90 bg-[#061B36]/90">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8A96A]" />
            <span className="ml-2 text-[11px] font-medium text-slate-300 tracking-wide">
              nexora-digital.studio
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#C8A96A] bg-[#C8A96A]/10 border border-[#C8A96A]/30 px-2.5 py-0.5 rounded-full">
            <Globe className="w-3 h-3" /> Global Delivery Ready
          </span>
        </div>

        {/* Interactive Switcher Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-2 bg-[#061B36]/60 border-b border-slate-800/80">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C8A96A] text-[#0B1220] shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Preview Body */}
        <div className="p-5 sm:p-6 min-h-[295px] flex flex-col justify-between">
          {activeTab === 'web' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#C8A96A] font-semibold">
                    Responsive Architecture
                  </p>
                  <h3 className="text-white font-bold text-base mt-0.5">
                    Conversion-Engineered Web Flagship
                  </h3>
                </div>
                <span className="text-[11px] text-slate-200 bg-[#003D79]/60 border border-[#003D79] px-2.5 py-1 rounded-lg shrink-0">
                  Mobile-First UI
                </span>
              </div>

              {/* Wireframe UI Preview Card */}
              <div className="rounded-xl bg-[#061B36]/80 border border-slate-800 p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800/90 pb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-[#003D79] border border-[#C8A96A]/50 flex items-center justify-center text-[#C8A96A] text-[10px] font-bold">
                      N
                    </div>
                    <div className="h-2 w-24 rounded bg-slate-600" />
                  </div>
                  <div className="px-2.5 py-1 rounded bg-[#C8A96A] text-[#0B1220] text-[10px] font-bold">
                    Book Consultation
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-3 items-center pt-1">
                  <div className="col-span-7 space-y-2">
                    <div className="h-2.5 w-4/5 rounded bg-white/85" />
                    <div className="h-2 w-full rounded bg-slate-500" />
                    <div className="h-2 w-5/6 rounded bg-slate-600" />
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#003D79]/70 text-sky-200 border border-sky-400/25">
                        Semantic SEO
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#C8A96A]/15 text-[#C8A96A] border border-[#C8A96A]/30">
                        Clean Codebase
                      </span>
                    </div>
                  </div>
                  <div className="col-span-5 h-24 rounded-lg bg-gradient-to-br from-[#003D79] via-[#0B1220] to-[#061B36] border border-[#C8A96A]/30 p-2.5 flex flex-col justify-between">
                    <span className="text-[10px] text-[#C8A96A] font-semibold">
                      Brand System
                    </span>
                    <div className="flex gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-[#003D79] border border-white/40" />
                      <span className="w-4 h-4 rounded-full bg-[#C8A96A]" />
                      <span className="w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'growth' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#C8A96A] font-semibold">
                    Omnichannel Positioning
                  </p>
                  <h3 className="text-white font-bold text-base mt-0.5">
                    Brand Identity, SEO & Paid Acquisition
                  </h3>
                </div>
                <span className="text-[11px] text-slate-200 bg-[#003D79]/60 border border-[#003D79] px-2.5 py-1 rounded-lg shrink-0">
                  Full-Funnel
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#061B36]/80 border border-slate-800 p-3.5 space-y-2">
                  <div className="flex items-center gap-2 text-[#C8A96A] text-xs font-semibold">
                    <Search className="w-3.5 h-3.5" /> Search Intent Map
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Structured On-Page, Technical & Local SEO hierarchy targeting high-intent regional buyers.
                  </p>
                  <div className="pt-1 flex flex-wrap gap-1">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#003D79]/60 text-slate-200">
                      Schema.org
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#003D79]/60 text-slate-200">
                      Local Pack
                    </span>
                  </div>
                </div>

                <div className="rounded-xl bg-[#061B36]/80 border border-slate-800 p-3.5 space-y-2">
                  <div className="flex items-center gap-2 text-[#C8A96A] text-xs font-semibold">
                    <Video className="w-3.5 h-3.5" /> Creative Studio
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Cohesive brand identity systems paired with high-retention Reels, Shorts & Meta ad creatives.
                  </p>
                  <div className="pt-1 flex flex-wrap gap-1">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#003D79]/60 text-slate-200">
                      9:16 Reels
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#003D79]/60 text-slate-200">
                      Brand Kit
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#C8A96A] font-semibold">
                    Operational Efficiency
                  </p>
                  <h3 className="text-white font-bold text-base mt-0.5">
                    Automated Lead Capture & CRM Pipeline
                  </h3>
                </div>
                <span className="text-[11px] text-slate-200 bg-[#003D79]/60 border border-[#003D79] px-2.5 py-1 rounded-lg shrink-0">
                  Streamlined
                </span>
              </div>

              <div className="rounded-xl bg-[#061B36]/80 border border-slate-800 p-4 space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <div className="flex-1 p-2.5 rounded-lg bg-[#0B1220] border border-slate-700 text-center">
                    <span className="block text-[10px] text-slate-400">Trigger</span>
                    <span className="font-semibold text-white">Web / Ad Inquiry</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C8A96A] shrink-0" />
                  <div className="flex-1 p-2.5 rounded-lg bg-[#003D79]/50 border border-[#C8A96A]/50 text-center">
                    <span className="block text-[10px] text-[#C8A96A]">AI Triage</span>
                    <span className="font-semibold text-white">Qualify & Tag</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C8A96A] shrink-0" />
                  <div className="flex-1 p-2.5 rounded-lg bg-[#0B1220] border border-slate-700 text-center">
                    <span className="block text-[10px] text-slate-400">Action</span>
                    <span className="font-semibold text-white">CRM + WhatsApp</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Every prospect inquiry is automatically logged into your CRM, routed to the right team member, and acknowledged promptly.
                </p>
              </div>
            </div>
          )}

          {/* Bottom Region Strip */}
          <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] text-slate-400 mr-1">Serving:</span>
              {GLOBAL_MARKETS.map((market) => (
                <span
                  key={market}
                  className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#003D79]/40 text-slate-200 border border-[#003D79]/80"
                >
                  {market}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="text-xs font-semibold text-[#C8A96A] hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              Explore Capabilities <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Visual Artwork for Concept Portfolio Cards
const ConceptVisualArtwork = ({ concept, tall = false }) => {
  return (
    <div
      className={`relative ${
        tall ? 'h-60 sm:h-64' : 'h-52'
      } w-full overflow-hidden p-5 sm:p-6 flex flex-col justify-between border-b border-slate-200/80`}
      style={{ backgroundColor: concept.palette[0] }}
    >
      {/* Subtle Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top Bar with Prominent Concept Project Badge */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#C8A96A] text-[#0B1220] shadow-sm">
          <Sparkles className="w-3 h-3" /> {concept.label}
        </span>
        <span className="text-[11px] font-medium text-white/90 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/15">
          {concept.industry}
        </span>
      </div>

      {/* Stylized UI / Brand Mockup Frame */}
      <div className="relative z-10 mt-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-4 text-white shadow-lg group-hover:border-[#C8A96A]/60 transition-colors">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white/50" />
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: concept.accentColor }}
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-slate-200">
            {concept.category}
          </span>
        </div>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-base font-bold tracking-tight text-white">
              {concept.title}
            </p>
            <p className="text-[11px] text-slate-200 line-clamp-1 mt-0.5">
              {concept.deliverables[0]}
            </p>
          </div>
          <div className="flex gap-1 shrink-0">
            {concept.palette.map((hex) => (
              <span
                key={hex}
                className="w-3.5 h-3.5 rounded-full border border-white/40"
                style={{ backgroundColor: hex }}
                title={hex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 4. FUNCTIONAL PROJECT INQUIRY & QUOTE FORM COMPONENT
// ============================================================================
const ProjectInquiryForm = ({
  preselectedService = '',
  preselectedBudget = '',
  preselectedNotes = '',
  compact = false
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    whatsapp: '',
    service: preselectedService || 'Website Development',
    budget: preselectedBudget || '$1,000 – $2,500',
    details: preselectedNotes || ''
  });

  const [errors, setErrors] = useState({});
  const [submittedRecord, setSubmittedRecord] = useState(null);
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: preselectedService || prev.service,
      budget: preselectedBudget || prev.budget,
      details: preselectedNotes || prev.details
    }));
  }, [preselectedService, preselectedBudget, preselectedNotes]);

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your full name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.whatsapp.trim()) {
      nextErrors.whatsapp = 'Please enter a WhatsApp or phone number.';
    }
    if (!formData.details.trim() || formData.details.trim().length < 10) {
      nextErrors.details =
        'Please share a brief overview of your project goals (at least 10 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildFormattedSummary = (record) => {
    return [
      `NEXORA GLOBAL – PROJECT INQUIRY (${record.refId})`,
      `Name: ${record.fullName}`,
      `Business: ${record.businessName || 'Not specified'}`,
      `Email: ${record.email}`,
      `WhatsApp: ${record.whatsapp}`,
      `Service Interested In: ${record.service}`,
      `Estimated Budget: ${record.budget}`,
      `Project Details: ${record.details}`
    ].join('\n');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const refId = `NXG-${Date.now().toString().slice(-6)}`;
    const record = {
      ...formData,
      refId,
      submittedAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('nexora_inquiries') || '[]');
      localStorage.setItem('nexora_inquiries', JSON.stringify([record, ...existing]));
    } catch {
      // Safe fallback in restricted browser contexts
    }

    setSubmittedRecord(record);
  };

  const handleCopySummary = () => {
    if (!submittedRecord) return;
    navigator.clipboard?.writeText(buildFormattedSummary(submittedRecord));
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2500);
  };

  if (submittedRecord) {
    const summaryText = buildFormattedSummary(submittedRecord);
    const whatsappHref = getWhatsAppUrl(summaryText);
    const mailtoHref = `mailto:${AGENCY_CONFIG.email}?subject=${encodeURIComponent(
      `Project Inquiry [${submittedRecord.refId}] – ${submittedRecord.service}`
    )}&body=${encodeURIComponent(summaryText)}`;

    return (
      <div className="rounded-2xl bg-white border border-[#C8A96A]/60 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#003D79]">
              Reference ID: {submittedRecord.refId}
            </span>
            <h3 className="text-2xl font-extrabold text-[#0B1220] mt-1">
              Project Brief Prepared & Logged
            </h3>
            <p className="text-sm text-[#64748B] mt-1 leading-relaxed">
              Thank you,{' '}
              <span className="font-semibold text-[#0B1220]">{submittedRecord.fullName}</span>.
              Your project specification is ready. Dispatch it directly to our team via
              WhatsApp or Email below.
            </p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="rounded-xl bg-[#F5F7FA] border border-slate-200 p-4 space-y-2 text-sm">
          <div className="flex justify-between gap-4 border-b border-slate-200/80 pb-2">
            <span className="text-[#64748B]">Service Selected:</span>
            <span className="font-semibold text-[#0B1220]">{submittedRecord.service}</span>
          </div>
          <div className="flex justify-between gap-4 border-b border-slate-200/80 pb-2">
            <span className="text-[#64748B]">Budget Range:</span>
            <span className="font-semibold text-[#0B1220]">{submittedRecord.budget}</span>
          </div>
          <div className="flex justify-between gap-4 border-b border-slate-200/80 pb-2">
            <span className="text-[#64748B]">Contact Email:</span>
            <span className="font-semibold text-[#0B1220]">{submittedRecord.email}</span>
          </div>
          <div className="pt-1">
            <span className="text-[#64748B] block mb-1">Project Summary:</span>
            <p className="text-[#0B1220] bg-white p-3 rounded-lg border border-slate-200/80 text-xs leading-relaxed">
              {submittedRecord.details}
            </p>
          </div>
        </div>

        {/* Direct Dispatch Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-[#0B1220] font-bold text-sm transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4" /> Send via WhatsApp Now
          </a>
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#003D79] hover:bg-[#0B1220] text-white font-semibold text-sm transition-all shadow-sm"
          >
            <Mail className="w-4 h-4 text-[#C8A96A]" /> Dispatch via Email Client
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={handleCopySummary}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#0B1220] cursor-pointer"
          >
            {copiedId ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied Brief to Clipboard
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Copy Formatted Inquiry
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setSubmittedRecord(null);
              setFormData((prev) => ({ ...prev, details: '' }));
            }}
            className="text-xs font-semibold text-[#003D79] hover:text-[#C8A96A] underline cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xl space-y-5"
    >
      {!compact && (
        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#003D79]">
            Project Consultation
          </span>
          <h3 className="text-2xl font-extrabold text-[#0B1220] mt-1">
            Tell Us About Your Project
          </h3>
          <p className="text-sm text-[#64748B] mt-1">
            Share your requirements below and we will prepare a tailored scope and timeline.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="nx-full-name"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B1220] mb-1.5"
          >
            Full Name *
          </label>
          <input
            id="nx-full-name"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g., Bilal Ahmed"
            className={`w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border text-sm text-[#0B1220] placeholder-slate-400 focus:outline-none focus:bg-white transition-colors ${
              errors.fullName
                ? 'border-red-400 focus:border-red-500'
                : 'border-slate-200 focus:border-[#003D79]'
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Business Name */}
        <div>
          <label
            htmlFor="nx-business-name"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B1220] mb-1.5"
          >
            Business Name
          </label>
          <input
            id="nx-business-name"
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            placeholder="e.g., Horizon Holdings"
            className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-slate-200 text-sm text-[#0B1220] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#003D79] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Address */}
        <div>
          <label
            htmlFor="nx-email"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B1220] mb-1.5"
          >
            Email Address *
          </label>
          <input
            id="nx-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className={`w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border text-sm text-[#0B1220] placeholder-slate-400 focus:outline-none focus:bg-white transition-colors ${
              errors.email
                ? 'border-red-400 focus:border-red-500'
                : 'border-slate-200 focus:border-[#003D79]'
            }`}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        {/* WhatsApp Number */}
        <div>
          <label
            htmlFor="nx-whatsapp"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B1220] mb-1.5"
          >
            WhatsApp Number *
          </label>
          <input
            id="nx-whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            placeholder="+92 332 7328071 / +1 256 322 0104"
            className={`w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border text-sm text-[#0B1220] placeholder-slate-400 focus:outline-none focus:bg-white transition-colors ${
              errors.whatsapp
                ? 'border-red-400 focus:border-red-500'
                : 'border-slate-200 focus:border-[#003D79]'
            }`}
          />
          {errors.whatsapp && (
            <p className="text-xs text-red-600 mt-1">{errors.whatsapp}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Service Interested In */}
        <div>
          <label
            htmlFor="nx-service"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B1220] mb-1.5"
          >
            Service Interested In
          </label>
          <select
            id="nx-service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-slate-200 text-sm text-[#0B1220] focus:outline-none focus:bg-white focus:border-[#003D79] transition-colors"
          >
            <option value="Website Development">Website Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Graphic Design & Branding">Graphic Design & Branding</option>
            <option value="Video Editing & Content Creation">
              Video Editing & Content Creation
            </option>
            <option value="SEO Services">SEO Services</option>
            <option value="AI & Business Automation">AI & Business Automation</option>
            <option value="Full-Service Digital Package">Full-Service Digital Package</option>
            <option value="White-Label Agency Partnership">
              White-Label Agency Partnership
            </option>
          </select>
        </div>

        {/* Project Budget */}
        <div>
          <label
            htmlFor="nx-budget"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B1220] mb-1.5"
          >
            Project Budget
          </label>
          <select
            id="nx-budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-slate-200 text-sm text-[#0B1220] focus:outline-none focus:bg-white focus:border-[#003D79] transition-colors"
          >
            <option value="Under $500 (Starter Scope)">Under $500 (Starter Scope)</option>
            <option value="$500 – $1,000">$500 – $1,000</option>
            <option value="$1,000 – $2,500">$1,000 – $2,500</option>
            <option value="$2,500 – $5,000">$2,500 – $5,000</option>
            <option value="$5,000+ (Custom / Enterprise)">
              $5,000+ (Custom / Enterprise)
            </option>
            <option value="Monthly Retainer / White-Label">
              Monthly Retainer / White-Label
            </option>
          </select>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label
          htmlFor="nx-details"
          className="block text-xs font-semibold uppercase tracking-wider text-[#0B1220] mb-1.5"
        >
          Project Details *
        </label>
        <textarea
          id="nx-details"
          rows={4}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          placeholder="Tell us about your business, goals, target market, and desired timeline..."
          className={`w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border text-sm text-[#0B1220] placeholder-slate-400 focus:outline-none focus:bg-white transition-colors ${
            errors.details
              ? 'border-red-400 focus:border-red-500'
              : 'border-slate-200 focus:border-[#003D79]'
          }`}
        />
        {errors.details && <p className="text-xs text-red-600 mt-1">{errors.details}</p>}
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#003D79] hover:bg-[#0B1220] text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl cursor-pointer group"
      >
        <span>Request Free Consultation & Quote</span>
        <Send className="w-4 h-4 text-[#C8A96A] group-hover:translate-x-0.5 transition-transform" />
      </button>
    </form>
  );
};

// ============================================================================
// 5. REUSABLE SECTION COMPONENTS (Navbar, Footer, CTA Banner, Concept Modal)
// ============================================================================
const Navbar = ({ currentRoute, onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isServiceActive = currentRoute.startsWith('/services');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('/')}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003D79] rounded-lg cursor-pointer"
            aria-label="Nexora Global Home"
          >
            <NexoraLogo variant="light" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            <button
              type="button"
              onClick={() => handleNavClick('/')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentRoute === '/'
                  ? 'text-[#003D79] underline decoration-[#C8A96A] decoration-2 underline-offset-8'
                  : 'text-[#64748B] hover:text-[#003D79]'
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('/about')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentRoute === '/about'
                  ? 'text-[#003D79] underline decoration-[#C8A96A] decoration-2 underline-offset-8'
                  : 'text-[#64748B] hover:text-[#003D79]'
              }`}
            >
              About
            </button>

            {/* Services Interactive Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold py-2 transition-colors cursor-pointer ${
                  isServiceActive
                    ? 'text-[#003D79] underline decoration-[#C8A96A] decoration-2 underline-offset-8'
                    : 'text-[#64748B] hover:text-[#003D79]'
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#C8A96A]' : ''
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[580px] z-50">
                  <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-4 grid grid-cols-2 gap-2">
                    {/* Services Overview Banner */}
                    <button
                      type="button"
                      onClick={() => handleNavClick('/services')}
                      className="col-span-2 flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-[#003D79] to-[#0B1220] text-white hover:opacity-95 transition-opacity text-left cursor-pointer"
                    >
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#C8A96A] font-bold block">
                          Complete Capabilities
                        </span>
                        <span className="text-sm font-bold">
                          Explore All Digital Services Overview
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#C8A96A]" />
                    </button>

                    {SERVICES_DATA.map((service) => {
                      const Icon = service.icon;
                      const active = currentRoute === service.slug;
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleNavClick(service.slug)}
                          className={`flex items-start gap-3 p-3 rounded-xl text-left transition-colors cursor-pointer group ${
                            active
                              ? 'bg-[#F5F7FA] border border-[#003D79]/30'
                              : 'hover:bg-[#F5F7FA]'
                          }`}
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#003D79] group-hover:bg-[#0B1220] text-[#C8A96A] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#0B1220] group-hover:text-[#003D79]">
                              {service.title}
                            </p>
                            <p className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5">
                              {service.items.slice(0, 2).join(' • ')}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('/portfolio')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentRoute === '/portfolio'
                  ? 'text-[#003D79] underline decoration-[#C8A96A] decoration-2 underline-offset-8'
                  : 'text-[#64748B] hover:text-[#003D79]'
              }`}
            >
              Portfolio
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('/contact')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentRoute === '/contact'
                  ? 'text-[#003D79] underline decoration-[#C8A96A] decoration-2 underline-offset-8'
                  : 'text-[#64748B] hover:text-[#003D79]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#003D79] hover:bg-[#0B1220] text-white text-sm font-semibold transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 text-[#C8A96A]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2.5 rounded-xl text-[#003D79] hover:bg-[#F5F7FA] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <button
            type="button"
            onClick={() => handleNavClick('/')}
            className="block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-[#0B1220] hover:bg-[#F5F7FA]"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('/about')}
            className="block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-[#0B1220] hover:bg-[#F5F7FA]"
          >
            About Us
          </button>

          {/* Mobile Services Accordion */}
          <div className="rounded-xl bg-[#F5F7FA]/80 overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-[#0B1220]"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="px-3 pb-3 space-y-1">
                <button
                  type="button"
                  onClick={() => handleNavClick('/services')}
                  className="block w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-[#C8A96A] bg-[#003D79]"
                >
                  All Services Overview →
                </button>
                {SERVICES_DATA.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleNavClick(service.slug)}
                    className="block w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-[#0B1220] hover:bg-white"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleNavClick('/portfolio')}
            className="block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-[#0B1220] hover:bg-[#F5F7FA]"
          >
            Portfolio
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('/contact')}
            className="block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-[#0B1220] hover:bg-[#F5F7FA]"
          >
            Contact Us
          </button>

          <div className="pt-2 grid grid-cols-2 gap-2.5">
            <a
              href={getWhatsAppUrl(
                'Hello Nexora Global, I would like to discuss a digital project.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-[#25D366] text-[#0B1220] font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="py-3 px-4 rounded-xl bg-[#003D79] text-white font-semibold text-xs flex items-center justify-center gap-1.5"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C8A96A]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-[#0B1220] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/90">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <NexoraLogo variant="dark" showSubtitle={true} />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C8A96A] pt-1">
              {AGENCY_CONFIG.tagline}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Nexora Global is a full-service digital agency operating under{' '}
              <span className="text-white font-medium">{AGENCY_CONFIG.parentCompany}</span>.
              Based in Pakistan, we partner with ambitious businesses and white-label
              agencies across Pakistan, the USA, UK, UAE, Canada, and Australia.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { label: 'LinkedIn', href: '#linkedin', text: 'in' },
                { label: 'Instagram', href: '#instagram', text: 'IG' },
                { label: 'Facebook', href: '#facebook', text: 'FB' },
                { label: 'X / Twitter', href: '#x', text: 'X' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-[#003D79]/50 hover:bg-[#C8A96A] hover:text-[#0B1220] border border-[#003D79] flex items-center justify-center text-xs font-bold transition-colors"
                >
                  {social.text}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C8A96A]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services Overview', path: '/services' },
                { label: 'Concept Portfolio', path: '/portfolio' },
                { label: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.path)}
                    className="hover:text-[#C8A96A] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C8A96A]">
              Digital Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(service.slug)}
                    className="hover:text-[#C8A96A] transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C8A96A]">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A96A] shrink-0 mt-1" />
                <span>{AGENCY_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8A96A] shrink-0" />
                <a
                  href={`mailto:${AGENCY_CONFIG.email}`}
                  className="hover:text-[#C8A96A] transition-colors"
                >
                  {AGENCY_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#C8A96A] shrink-0" />
                <a
                  href={getWhatsAppUrl('Hello Nexora Global, I would like to connect.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8A96A] transition-colors"
                >
                  {AGENCY_CONFIG.whatsappDisplay} (WhatsApp)
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="w-full py-2.5 px-4 rounded-xl bg-[#C8A96A] hover:bg-[#d6b97d] text-[#0B1220] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Request Project Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Regions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {AGENCY_CONFIG.brandName}, a division of{' '}
            {AGENCY_CONFIG.parentCompany}. All rights reserved.
          </p>
          <p className="text-slate-400">
            Serving Clients in Pakistan • USA • UK • UAE • Canada • Australia
          </p>
        </div>
      </div>
    </footer>
  );
};

const ConversionCTABanner = ({ onOpenQuote, onNavigate }) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#003D79] via-[#061B36] to-[#0B1220] overflow-hidden px-6 py-14 sm:px-14 sm:py-16 border border-[#C8A96A]/35 shadow-2xl">
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 85% 20%, #C8A96A 0%, transparent 55%)'
            }}
          />
          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#C8A96A]/15 text-[#C8A96A] border border-[#C8A96A]/30">
              Nexora Global • Digital Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Let's turn your ideas into powerful digital solutions. Partner with our team
              for modern web architecture, distinctive branding, and growth-focused digital execution.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#C8A96A] hover:bg-[#d6b97d] text-[#0B1220] font-bold text-sm transition-all shadow-lg cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/25 font-semibold text-sm transition-all cursor-pointer"
              >
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Concept Project Case Study Modal
const ConceptDetailModal = ({ concept, onClose, onRequestSimilar }) => {
  if (!concept) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1220]/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <ConceptVisualArtwork concept={concept} />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#0B1220]/80 text-white hover:bg-[#0B1220] flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                {concept.label} — Demonstration Showcase
              </span>
              <span className="text-xs font-medium text-[#64748B]">
                {concept.category} • {concept.industry}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B1220]">{concept.title}</h3>
            <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{concept.summary}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F5F7FA] border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#003D79] mb-1.5">
                Design Objective
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">{concept.challenge}</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F5F7FA] border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#003D79] mb-1.5">
                Strategic Execution
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">{concept.solution}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1220] mb-2.5">
              Concept Scope & Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {concept.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-[#0B1220] bg-white border border-slate-200 px-3 py-2 rounded-xl"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] text-[#64748B]">
              * Labeled as a Concept Project to illustrate design & architectural standards.
            </p>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestSimilar(
                  concept.category === 'Branding & Design'
                    ? 'Graphic Design & Branding'
                    : concept.category === 'Digital Marketing'
                    ? 'Digital Marketing'
                    : 'Website Development',
                  '',
                  `Interested in a project inspired by the "${concept.title}" (${concept.industry}) concept.`
                );
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#003D79] hover:bg-[#0B1220] text-white text-xs font-bold cursor-pointer"
            >
              <span>Request Similar Solution</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C8A96A]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 6. PAGE VIEWS (All 11 Complete Pages)
// ============================================================================

// --- PAGE 1: HOME ---
const HomePage = ({ onNavigate, onOpenQuote, onSelectConcept }) => {
  const [activeProcessIdx, setActiveProcessIdx] = useState(0);

  return (
    <div>
      {/* 1. HERO SECTION (Logo Royal Navy #003D79 -> Midnight Navy #0B1220 Gradient) */}
      <section className="relative bg-gradient-to-br from-[#061B36] via-[#0B1220] to-[#003D79] text-white overflow-hidden py-20 sm:py-24 lg:py-28">
        {/* Subtle Architectural Grid & Champagne Gold Ambient Glow */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #C8A96A 1px, transparent 1px), linear-gradient(to bottom, #C8A96A 1px, transparent 1px)',
            backgroundSize: '52px 52px'
          }}
        />
        <div
          className="absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #003D79, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#C8A96A]/45 text-xs font-semibold text-[#C8A96A]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Nexora Enterprises • Digital Services Agency</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.1] text-white">
                We Build Digital Experiences That Grow Businesses.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                Nexora Global helps businesses build a powerful digital presence through
                modern websites, creative branding, digital marketing and technology-driven
                solutions.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenQuote()}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#C8A96A] hover:bg-[#d6b97d] text-[#0B1220] font-bold text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/25 font-semibold text-sm transition-all cursor-pointer"
                >
                  <span>Explore Our Services</span>
                </button>
              </div>

              {/* Clean Brand Tagline & Audience Alignment */}
              <div className="pt-5 border-t border-white/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300">
                <span className="font-semibold text-[#C8A96A] uppercase tracking-wider">
                  {AGENCY_CONFIG.tagline}
                </span>
                <span className="hidden sm:inline text-white/30">•</span>
                <span>Direct Business Solutions & White-Label Agency Support</span>
              </div>
            </div>

            {/* Right Interactive Visual */}
            <div className="lg:col-span-6">
              <HeroInteractiveShowcase onNavigate={onNavigate} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / INTRODUCTION SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#003D79]">
                About Nexora Global
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] tracking-tight">
                Your Digital Growth Partner
              </h2>
              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                At Nexora Global, we combine creativity, technology and strategy to help
                businesses build stronger brands, improve their digital presence and connect
                with their customers.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                From website development to creative content and digital marketing, we
                provide solutions designed to help businesses move forward. Operating from
                Pakistan under <strong className="text-[#003D79]">Nexora Enterprises</strong>,
                we serve both direct organizations and international marketing agencies seeking
                dependable execution.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#003D79] hover:text-[#0B1220] transition-colors cursor-pointer"
                >
                  <span>Discover Our Mission & Approach</span>
                  <ArrowRight className="w-4 h-4 text-[#C8A96A]" />
                </button>
              </div>
            </div>

            {/* Global Reach & Partner Ecosystem Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#F5F7FA] border border-slate-200/90 p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#003D79] flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#C8A96A]" /> Regions We Serve
                  </span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {GLOBAL_MARKETS.map((country) => (
                      <span
                        key={country}
                        className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#0B1220] shadow-2xs"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200/80 pt-5 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#003D79] block">
                    Built For
                  </span>
                  <ul className="space-y-2.5 text-sm text-[#64748B]">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#003D79] shrink-0" />
                      <span>Small & Medium-Sized Businesses & Startups</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#003D79] shrink-0" />
                      <span>Real Estate, Healthcare, E-Commerce & Hospitality</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#003D79] shrink-0" />
                      <span>International Agencies Seeking White-Label Partners</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION (6 Premium Cards with Tactile Hover Polish) */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#003D79]">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] tracking-tight">
              Comprehensive Digital Services Under One Roof
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed">
              End-to-end digital architecture, creative storytelling, search visibility, and
              workflow automation tailored to move your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES_DATA.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#003D79] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#003D79] group-hover:bg-[#C8A96A] text-[#C8A96A] group-hover:text-[#0B1220] flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0B1220] group-hover:text-[#003D79] transition-colors mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-5">
                      {service.shortDesc}
                    </p>
                    <ul className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs font-medium text-[#0B1220]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => onNavigate(service.slug)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#003D79] group-hover:text-[#0B1220] transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 text-[#C8A96A] group-hover:translate-x-1 transition-transform" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE NEXORA GLOBAL (6 Feature Cards) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#003D79]">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] tracking-tight">
              Why Choose Nexora Global
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed">
              We focus on disciplined execution, clear communication, and practical digital
              craftsmanship rather than empty promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-[#F5F7FA] border border-slate-200/80 p-6 sm:p-7 hover:bg-white hover:border-[#003D79]/40 hover:shadow-lg transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#003D79] text-[#C8A96A] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0B1220] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR PROCESS (5-Step Interactive Visual Timeline) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#061B36] to-[#0B1220] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A96A]">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A Clear, Structured 5-Step Process
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              From initial discovery to post-launch growth, every engagement follows a
              transparent workflow designed for predictability and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeProcessIdx === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveProcessIdx(idx)}
                  className={`text-left rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#003D79]/55 border-[#C8A96A] shadow-xl'
                      : 'bg-white/5 border-white/10 hover:border-white/25'
                  }`}
                >
                  <div>
                    <span className="inline-block text-xs font-extrabold tracking-widest text-[#C8A96A] mb-3">
                      STEP {step.number}
                    </span>
                    <h3 className="text-xl font-extrabold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-200 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO PREVIEW SECTION (Featured 2-Column + 3-Column Editorial Grid) */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#003D79]">
                Design & Architecture Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] tracking-tight">
                Featured Concept Projects
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Explore sample concept builds demonstrating our UI/UX architecture, brand
                systems, and campaign structure across key industries. All items below are
                clearly labeled as Concept Projects.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/portfolio')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#003D79] hover:bg-[#0B1220] text-white text-sm font-semibold transition-colors self-start md:self-auto cursor-pointer"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4 text-[#C8A96A]" />
            </button>
          </div>

          {/* Top Row: 2 Featured Wide Concept Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-7">
            {PORTFOLIO_CONCEPTS.slice(0, 2).map((concept) => (
              <article
                key={concept.id}
                className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#003D79] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <ConceptVisualArtwork concept={concept} tall={true} />
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#003D79] uppercase tracking-wider">
                        {concept.category}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                        {concept.label}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0B1220] mb-2">
                      {concept.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {concept.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6">
                  <button
                    type="button"
                    onClick={() => onSelectConcept(concept)}
                    className="w-full py-3 px-4 rounded-xl bg-[#F5F7FA] hover:bg-[#003D79] text-[#0B1220] hover:text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Inspect Concept Case Study</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Row: 3 Concept Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {PORTFOLIO_CONCEPTS.slice(2).map((concept) => (
              <article
                key={concept.id}
                className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#003D79] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <ConceptVisualArtwork concept={concept} />
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#003D79] uppercase tracking-wider">
                        {concept.category}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                        {concept.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0B1220] mb-2">
                      {concept.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {concept.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    type="button"
                    onClick={() => onSelectConcept(concept)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#F5F7FA] hover:bg-[#003D79] text-[#0B1220] hover:text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Concept Case Study</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE (7 Cards) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#003D79]">
              Sector Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed">
              Tailored digital solutions designed around the specific customer journeys and
              compliance needs of modern industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES_SERVED.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="rounded-2xl bg-[#F5F7FA] border border-slate-200/80 p-6 hover:border-[#003D79] hover:bg-white transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#003D79] text-[#C8A96A] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0B1220] mb-1.5">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <ConversionCTABanner onOpenQuote={onOpenQuote} onNavigate={onNavigate} />

      {/* 9. EMBEDDED FUNCTIONAL CONTACT & QUOTE SECTION */}
      <section
        id="home-contact"
        className="py-16 sm:py-24 bg-[#F5F7FA] border-t border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Direct Contact & Value Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#003D79]">
                Start a Conversation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] tracking-tight">
                Let’s Discuss Your Digital Goals
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                Whether you are launching a new venture, upgrading your existing website, or
                looking for a dependable white-label digital partner, our team is ready to
                assist.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppUrl(
                    'Hello Nexora Global, I would like to discuss a digital project.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-[#0B1220] transition-all shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5" />
                    <div>
                      <span className="block text-sm font-extrabold">Chat on WhatsApp</span>
                      <span className="text-xs font-semibold text-[#0B1220]/80">
                        {AGENCY_CONFIG.whatsappDisplay}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${AGENCY_CONFIG.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white hover:border-[#003D79] border border-slate-200 text-[#0B1220] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#003D79]" />
                    <div>
                      <span className="block text-sm font-bold">Email Our Team</span>
                      <span className="text-xs text-[#64748B]">{AGENCY_CONFIG.email}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#64748B]" />
                </a>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200/90 p-5 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#003D79]">
                  International Coverage
                </p>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Headquartered in Pakistan under <strong>Nexora Enterprises</strong>,
                  delivering remote consultations and project execution across Pakistan, USA,
                  UK, UAE, Canada, and Australia.
                </p>
              </div>
            </div>

            {/* Right Functional Form */}
            <div className="lg:col-span-7">
              <ProjectInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- PAGE 2: ABOUT US ---
const AboutPage = ({ onNavigate, onOpenQuote }) => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#061B36] via-[#0B1220] to-[#003D79] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#C8A96A]/15 text-[#C8A96A] border border-[#C8A96A]/30">
              About Nexora Global • Nexora Enterprises
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Building Digital Solutions for a Connected World.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Transforming Ideas Into Digital Growth through structured creativity,
              modern web technology, and transparent client collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#003D79]">
                Who We Are
              </span>
              <h2 className="text-3xl font-extrabold text-[#0B1220]">
                A Modern Digital Services Agency Built for Long-Term Value
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                Nexora Global is a digital services brand under{' '}
                <strong className="text-[#003D79]">Nexora Enterprises</strong>, focused on
                helping businesses navigate the digital world through creativity, technology
                and strategic solutions.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                Our mission is to make professional digital services accessible to
                businesses that want to grow, strengthen their brand and build meaningful
                connections with their customers.
              </p>
              <p className="text-base font-semibold text-[#0B1220] leading-relaxed">
                We believe every business deserves a strong digital foundation.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-to-br from-[#003D79] to-[#0B1220] text-white p-8 border border-[#C8A96A]/35 space-y-6 shadow-xl">
                <NexoraLogo variant="dark" showSubtitle={true} />
                <p className="text-sm text-slate-200 leading-relaxed">
                  Operating from Pakistan and collaborating seamlessly across time zones, we
                  serve local enterprises, international startups, and partner agencies in
                  the USA, UK, UAE, Canada, and Australia.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-xs font-bold text-[#C8A96A] block">
                      Parent Group
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Nexora Enterprises
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-xs font-bold text-[#C8A96A] block">
                      Delivery Model
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Direct & White-Label
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values, Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16">
            {/* Our Mission */}
            <div className="rounded-2xl bg-[#F5F7FA] border border-slate-200/90 p-8 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#003D79] text-[#C8A96A] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B1220]">Our Mission</h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                To make professional, high-impact digital services accessible to businesses
                that want to grow, strengthen their brand identity, and build meaningful,
                lasting connections with their customers across local and global markets.
              </p>
            </div>

            {/* Our Vision */}
            <div className="rounded-2xl bg-[#F5F7FA] border border-slate-200/90 p-8 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#003D79] text-[#C8A96A] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B1220]">Our Vision</h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                To be recognized internationally as a trusted digital growth partner from
                Pakistan—known for clean design, dependable engineering, ethical marketing,
                and forward-looking business automation.
              </p>
            </div>

            {/* Our Values */}
            <div className="rounded-2xl bg-[#F5F7FA] border border-slate-200/90 p-8 space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#003D79] text-[#C8A96A] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B1220]">Our Values</h3>
              <ul className="space-y-2.5 text-sm text-[#64748B]">
                <li>
                  <strong className="text-[#0B1220]">Integrity & Honesty:</strong> Clear
                  scopes, realistic timelines, and zero fabricated claims.
                </li>
                <li>
                  <strong className="text-[#0B1220]">Craftsmanship:</strong> Attention to
                  typography, code cleanliness, and responsive detail on every deliverable.
                </li>
                <li>
                  <strong className="text-[#0B1220]">Practical Innovation:</strong> Adopting
                  modern web and AI tools that solve real operational challenges.
                </li>
                <li>
                  <strong className="text-[#0B1220]">Partnership Mindset:</strong> Treating
                  every client’s digital presence as a long-term asset.
                </li>
              </ul>
            </div>

            {/* Our Approach */}
            <div className="rounded-2xl bg-[#F5F7FA] border border-slate-200/90 p-8 space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#003D79] text-[#C8A96A] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B1220]">Our Approach</h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                We align strategy before execution. Whether building a website, launching
                paid ads, or configuring CRM automations, we begin by understanding your
                business model, audience expectations, and conversion path—ensuring every
                creative and technical decision serves a clear purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConversionCTABanner onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
    </div>
  );
};

// --- PAGE 3: SERVICES OVERVIEW ---
const ServicesOverviewPage = ({ onNavigate, onOpenQuote }) => {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#061B36] via-[#0B1220] to-[#003D79] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#C8A96A]/15 text-[#C8A96A] border border-[#C8A96A]/30">
              Digital Services Agency
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              End-to-End Digital Capabilities Built for Business Growth
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Explore our six specialized service pillars—available individually, as
              integrated growth retainers, or via white-label partnerships for international
              agencies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-white border border-slate-200/90 hover:border-[#003D79]/40 p-7 sm:p-10 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#003D79] text-[#C8A96A] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#003D79]">
                        0{index + 1} • {service.tagline}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220]">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                      {service.longDesc}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => onNavigate(service.slug)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#003D79] hover:bg-[#0B1220] text-white text-sm font-bold transition-colors cursor-pointer"
                      >
                        <span>Explore {service.title}</span>
                        <ArrowRight className="w-4 h-4 text-[#C8A96A]" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onOpenQuote(service.title)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F5F7FA] hover:bg-slate-200/70 text-[#0B1220] text-sm font-semibold transition-colors cursor-pointer"
                      >
                        <span>Get a Quote</span>
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-[#F5F7FA] border border-slate-200/80 p-6">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#003D79] mb-3.5">
                        Key Deliverables Included
                      </h3>
                      <ul className="space-y-2.5">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2.5 text-sm font-medium text-[#0B1220]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ConversionCTABanner onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
    </div>
  );
};

// --- PAGES 4–9: INDIVIDUAL DETAILED SERVICE PAGE TEMPLATE ---
const ServiceDetailPage = ({ service, onNavigate, onOpenQuote }) => {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);
  const Icon = service.icon;

  return (
    <div>
      {/* Service Hero */}
      <section className="bg-gradient-to-br from-[#061B36] via-[#0B1220] to-[#003D79] text-white py-16 sm:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 80% 30%, #C8A96A 0%, transparent 60%)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-[#C8A96A] transition-colors cursor-pointer"
            >
              <span>← All Digital Services</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#C8A96A]/15 border border-[#C8A96A]/40 text-[#C8A96A] flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C8A96A]">
                {service.title}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {service.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {service.longDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenQuote(service.title)}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#C8A96A] hover:bg-[#d6b97d] text-[#0B1220] font-bold text-sm transition-all shadow-lg cursor-pointer"
              >
                <span>Request a Quote for {service.shortTitle}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={getWhatsAppUrl(
                  `Hello Nexora Global, I am interested in your ${service.title} services.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/25 font-semibold text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#003D79]">
              Business Value
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mt-2">
              Key Benefits of Our {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-[#F5F7FA] border border-slate-200/80 p-6 sm:p-7 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#003D79] text-[#C8A96A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#0B1220] mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features & Deliverables */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#003D79]">
              Scope & Deliverables
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mt-2">
              What’s Included in {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feat) => (
              <div
                key={feat.name}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-2xs"
              >
                <h3 className="text-base font-extrabold text-[#0B1220] mb-2">
                  {feat.name}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{feat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific 4-Step Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#003D79]">
              Execution Workflow
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mt-2">
              Our {service.shortTitle} Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl bg-gradient-to-b from-[#003D79] to-[#0B1220] text-white p-6 border border-[#003D79]"
              >
                <span className="text-xs font-extrabold tracking-widest text-[#C8A96A] block mb-2">
                  PHASE {p.step}
                </span>
                <h3 className="text-lg font-extrabold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-slate-200 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#003D79]">
              Common Questions
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0B1220]">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-[#F5F7FA] flex items-center justify-center shrink-0 text-[#003D79]">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm text-[#64748B] leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Contact Form Link Banner */}
          <div className="mt-12 rounded-2xl bg-white border border-[#003D79]/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl font-extrabold text-[#0B1220]">
                Ready to Get Started with {service.title}?
              </h3>
              <p className="text-sm text-[#64748B] mt-1">
                Request a tailored quote with {service.title} pre-selected in our project
                consultation form.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenQuote(service.title)}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#003D79] hover:bg-[#0B1220] text-white font-bold text-sm transition-colors cursor-pointer"
            >
              <span>Open Quote Form</span>
              <ArrowRight className="w-4 h-4 text-[#C8A96A]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- PAGE 10: PORTFOLIO ---
const PortfolioPage = ({ onNavigate, onOpenQuote, onSelectConcept }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Web Development',
    'Branding & Design',
    'E-commerce',
    'Digital Marketing'
  ];

  const filteredConcepts = useMemo(() => {
    if (selectedCategory === 'All') return PORTFOLIO_CONCEPTS;
    return PORTFOLIO_CONCEPTS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#061B36] via-[#0B1220] to-[#003D79] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#C8A96A]/15 text-[#C8A96A] border border-[#C8A96A]/30">
              Concept Showcase & Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Digital Design & Solution Concepts
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Explore how Nexora Global approaches user interface architecture, brand
              identity systems, and conversion funnels across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Notice & Filter Bar */}
      <section className="py-14 sm:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Integrity & Transparency Banner */}
          <div className="rounded-2xl bg-white border border-[#003D79]/25 p-5 mb-10 flex items-start gap-3.5 shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-[#003D79] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              <strong className="text-[#0B1220]">Transparency Notice:</strong> Every project
              displayed below is an original{' '}
              <strong className="text-[#003D79]">Concept Project</strong> created by Nexora
              Global’s design and engineering team to demonstrate our visual standards, UX
              structure, and strategic approach. We do not fabricate client relationships or
              mock testimonials.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2.5 mb-10">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#003D79] text-white shadow-sm'
                      : 'bg-white text-[#64748B] hover:text-[#003D79] border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Concept Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredConcepts.map((concept) => (
              <article
                key={concept.id}
                className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#003D79] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <ConceptVisualArtwork concept={concept} />
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#003D79]">
                        {concept.category}
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                        {concept.label}
                      </span>
                    </div>
                    <h2 className="text-xl font-extrabold text-[#0B1220]">
                      {concept.title}
                    </h2>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {concept.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectConcept(concept)}
                    className="w-full py-3 px-4 rounded-xl bg-[#003D79] hover:bg-[#0B1220] text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-[#C8A96A]" />
                    <span>View Concept Breakdown</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConversionCTABanner onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
    </div>
  );
};

// --- PAGE 11: CONTACT US ---
const ContactPage = ({ preselectedService, preselectedBudget, preselectedNotes }) => {
  const [selectedTier, setSelectedTier] = useState(null);

  const inquiryTiers = [
    {
      name: 'Starter Foundation',
      budget: '$500 – $1,000',
      desc: 'Ideal for startups and local businesses needing a clean landing page, logo kit, or foundational SEO setup.',
      note: 'Interested in the Starter Foundation tier.'
    },
    {
      name: 'Business Growth',
      budget: '$1,000 – $2,500',
      desc: 'Complete multi-page business website, cohesive branding, or structured paid acquisition & content package.',
      note: 'Interested in the Business Growth tier.'
    },
    {
      name: 'Custom / E-Commerce',
      budget: '$2,500 – $5,000',
      desc: 'Full e-commerce builds, CRM & AI workflow automation pipelines, and multi-channel digital execution.',
      note: 'Interested in a Custom / E-Commerce solution.'
    },
    {
      name: 'White-Label Partner',
      budget: 'Monthly Retainer / White-Label',
      desc: 'Dedicated white-label web, design, SEO, or video editing support for international marketing agencies.',
      note: 'Interested in discussing a White-Label Agency Partnership.'
    }
  ];

  const activeBudget = selectedTier ? selectedTier.budget : preselectedBudget;
  const activeNotes = selectedTier ? selectedTier.note : preselectedNotes;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#061B36] via-[#0B1220] to-[#003D79] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#C8A96A]/15 text-[#C8A96A] border border-[#C8A96A]/30">
              Contact Nexora Global
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Start Your Project With Confidence
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Select a scope tier below or submit your custom requirements directly. We
              respond promptly with clear next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Scope / Pricing Inquiry Selector + Main Contact Form */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Interactive Pricing Inquiry Tiers */}
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#003D79]">
                Quick Scope Selection
              </span>
              <h2 className="text-2xl font-extrabold text-[#0B1220] mt-1">
                Choose an Inquiry Tier (Optional — Auto-Fills Form Below)
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {inquiryTiers.map((tier) => {
                const isSelected = selectedTier?.name === tier.name;
                return (
                  <button
                    key={tier.name}
                    type="button"
                    onClick={() => setSelectedTier(tier)}
                    className={`text-left rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#003D79] text-white border-[#C8A96A] shadow-xl'
                        : 'bg-white text-[#0B1220] border-slate-200/90 hover:border-[#003D79]'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C8A96A] block mb-1">
                        {tier.budget}
                      </span>
                      <h3 className="text-lg font-extrabold mb-2">{tier.name}</h3>
                      <p
                        className={`text-xs leading-relaxed ${
                          isSelected ? 'text-slate-200' : 'text-[#64748B]'
                        }`}
                      >
                        {tier.desc}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-200/20 flex items-center justify-between text-xs font-bold">
                      <span>{isSelected ? 'Selected for Quote' : 'Select This Scope'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C8A96A]" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Two-Column Direct Contact Channels & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 space-y-5 shadow-sm">
                <h3 className="text-xl font-extrabold text-[#0B1220]">
                  Direct Communication Channels
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Prefer a quick message before filling out a brief? Connect directly with
                  our team via WhatsApp or Email.
                </p>

                <div className="space-y-3">
                  <a
                    href={getWhatsAppUrl(
                      'Hello Nexora Global, I would like to request a quote.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-[#0B1220] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5" />
                      <div>
                        <span className="block text-sm font-extrabold">
                          WhatsApp Consultation
                        </span>
                        <span className="text-xs font-semibold text-[#0B1220]/80">
                          {AGENCY_CONFIG.whatsappDisplay}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={`mailto:${AGENCY_CONFIG.email}`}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#F5F7FA] hover:bg-slate-200/70 text-[#0B1220] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#003D79]" />
                      <div>
                        <span className="block text-sm font-bold">Direct Email</span>
                        <span className="text-xs text-[#64748B]">{AGENCY_CONFIG.email}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#64748B]" />
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-[#64748B]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#003D79] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#0B1220]">Base of Operations:</strong>{' '}
                      Pakistan (Serving Clients in Pakistan, USA, UK, UAE, Canada &
                      Australia)
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-[#003D79] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#0B1220]">Parent Entity:</strong>{' '}
                      {AGENCY_CONFIG.parentCompany}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ProjectInquiryForm
                preselectedService={preselectedService}
                preselectedBudget={activeBudget}
                preselectedNotes={activeNotes}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ============================================================================
// 7. FLOATING WHATSAPP CONTACT BUTTON COMPONENT
// ============================================================================
const FloatingWhatsAppButton = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
      <a
        href={getWhatsAppUrl(
          'Hello Nexora Global, I visited your website and would like to inquire about your digital services.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nexora Global on WhatsApp"
        className="group relative inline-flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-[#0B1220] hover:bg-[#003D79] text-white border border-[#C8A96A]/50 shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A]"
      >
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-[#0B1220] shrink-0">
          <PhoneCall className="w-4 h-4" />
        </span>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C8A96A]">
            Quick Chat
          </span>
          <span className="text-xs font-bold text-white">WhatsApp Us</span>
        </div>
      </a>
    </div>
  );
};

// ============================================================================
// 8. MAIN APPLICATION CONTROLLER (Routing, SEO Head Sync, Floating Bar)
// ============================================================================
export default function App() {
  const [currentRoute, setCurrentRoute] = useState('/');
  const [quoteContext, setQuoteContext] = useState({
    service: '',
    budget: '',
    notes: ''
  });
  const [activeConceptModal, setActiveConceptModal] = useState(null);

  // Load Google Fonts (Plus Jakarta Sans & Inter) cleanly once on mount
  useEffect(() => {
    const fontId = 'nexora-google-fonts';
    if (!document.getElementById(fontId)) {
      const link = document.createElement('link');
      link.id = fontId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap';
      document.head.appendChild(link);
    }

    const initialHash = window.location.hash.replace(/^#/, '');
    if (initialHash && initialHash.startsWith('/')) {
      setCurrentRoute(initialHash);
    }

    const handleHashChange = () => {
      const nextPath = window.location.hash.replace(/^#/, '') || '/';
      setCurrentRoute(nextPath);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamic SEO <title> and <meta name="description"> updates per route
  useEffect(() => {
    let pageTitle =
      'Nexora Global – Digital Services | Transforming Ideas Into Digital Growth';
    let pageDesc =
      'Nexora Global, a division of Nexora Enterprises, builds modern websites, brand identities, digital marketing, SEO, video editing, and AI automation for businesses worldwide.';

    if (currentRoute === '/about') {
      pageTitle = 'About Us | Nexora Global – Digital Services';
      pageDesc =
        'Learn about Nexora Global, a digital agency under Nexora Enterprises building digital solutions for businesses in Pakistan, USA, UK, UAE, Canada, and Australia.';
    } else if (currentRoute === '/services') {
      pageTitle = 'Digital Services | Nexora Global – Digital Services';
      pageDesc =
        'Explore Web Development, Digital Marketing, Graphic Design & Branding, Video Editing, SEO Services, and AI & Business Automation by Nexora Global.';
    } else if (currentRoute === '/portfolio') {
      pageTitle = 'Concept Portfolio | Nexora Global – Digital Services';
      pageDesc =
        'View concept websites, brand identities, e-commerce storefronts, and digital campaign showcases created by Nexora Global.';
    } else if (currentRoute === '/contact') {
      pageTitle = 'Contact & Get a Quote | Nexora Global – Digital Services';
      pageDesc =
        'Request a free consultation and project quote from Nexora Global via our project brief form, WhatsApp, or direct email.';
    } else {
      const matchedService = SERVICES_DATA.find((s) => s.slug === currentRoute);
      if (matchedService) {
        pageTitle = matchedService.metaTitle;
        pageDesc = matchedService.metaDesc;
      }
    }

    document.title = pageTitle;
    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'description');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', pageDesc);
  }, [currentRoute]);

  const navigateTo = (path) => {
    setCurrentRoute(path);
    try {
      window.history.replaceState(null, '', `#${path}`);
    } catch {
      // Safe fallback in sandboxed iframes
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (service = '', budget = '', notes = '') => {
    setQuoteContext({ service, budget, notes });
    navigateTo('/contact');
  };

  const renderCurrentPage = () => {
    if (currentRoute === '/') {
      return (
        <HomePage
          onNavigate={navigateTo}
          onOpenQuote={handleOpenQuote}
          onSelectConcept={setActiveConceptModal}
        />
      );
    }
    if (currentRoute === '/about') {
      return <AboutPage onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />;
    }
    if (currentRoute === '/services') {
      return (
        <ServicesOverviewPage onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />
      );
    }
    if (currentRoute === '/portfolio') {
      return (
        <PortfolioPage
          onNavigate={navigateTo}
          onOpenQuote={handleOpenQuote}
          onSelectConcept={setActiveConceptModal}
        />
      );
    }
    if (currentRoute === '/contact') {
      return (
        <ContactPage
          preselectedService={quoteContext.service}
          preselectedBudget={quoteContext.budget}
          preselectedNotes={quoteContext.notes}
        />
      );
    }

    const matchedService = SERVICES_DATA.find((s) => s.slug === currentRoute);
    if (matchedService) {
      return (
        <ServiceDetailPage
          service={matchedService}
          onNavigate={navigateTo}
          onOpenQuote={handleOpenQuote}
        />
      );
    }

    return (
      <HomePage
        onNavigate={navigateTo}
        onOpenQuote={handleOpenQuote}
        onSelectConcept={setActiveConceptModal}
      />
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-white text-[#0B1220] antialiased selection:bg-[#C8A96A] selection:text-[#0B1220]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        h1, h2, h3, h4 {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>

      {/* Sticky Responsive Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Content Area */}
      <main className="flex-1">{renderCurrentPage()}</main>

      {/* Comprehensive Footer */}
      <Footer onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />

      {/* Floating WhatsApp Contact Button */}
      <FloatingWhatsAppButton />

      {/* Concept Portfolio Case Study Modal */}
      <ConceptDetailModal
        concept={activeConceptModal}
        onClose={() => setActiveConceptModal(null)}
        onRequestSimilar={(service, budget, notes) =>
          handleOpenQuote(service, budget, notes)
        }
      />
    </div>
  );
}