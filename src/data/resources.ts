export interface ResourceItem {
  id: string;
  category: 'Guides' | 'Articles' | 'Case Studies' | 'E-books' | 'Videos' | 'Checklists';
  subMeta: string; // e.g. "BRANDING • 8 MIN READ"
  title: string;
  description: string;
  imageUrl: string;
  readTime: string;
  tag: string;
}

export const resourcesData: ResourceItem[] = [
  // ================= GUIDES (12 items) =================
  {
    id: 'g1',
    category: 'Guides',
    subMeta: 'BRANDING • 8 MIN READ',
    title: 'The Ultimate Guide to Modern B2B Branding',
    description: 'Learn how to build a unified design system, establish a unique brand voice, and stand out in a crowded marketplace.',
    imageUrl: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600',
    readTime: '8 min read',
    tag: 'Branding'
  },
  {
    id: 'g2',
    category: 'Guides',
    subMeta: 'MARKETING AUTOMATION • 10 MIN READ',
    title: 'HubSpot Implementation Guide for SaaS Startups',
    description: 'A comprehensive walkthrough of setting up lifecycle stages, deal pipelines, and contact scoring rules in HubSpot.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    readTime: '10 min read',
    tag: 'Marketing Automation'
  },
  {
    id: 'g3',
    category: 'Guides',
    subMeta: 'LEAD GENERATION • 12 MIN READ',
    title: 'Building a Scalable Inbound Lead Engine',
    description: 'How to combine content strategy, SEO optimization, and smart forms to generate highly qualified sales pipeline.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600',
    readTime: '12 min read',
    tag: 'Lead Gen'
  },
  {
    id: 'g4',
    category: 'Guides',
    subMeta: 'REVOPS • 15 MIN READ',
    title: 'The Blueprint for Modern Revenue Operations',
    description: 'Align your sales, marketing, and customer success teams under a unified revenue operations strategy and tech stack.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
    readTime: '15 min read',
    tag: 'RevOps'
  },
  {
    id: 'g5',
    category: 'Guides',
    subMeta: 'CRM ARCHITECTURE • 9 MIN READ',
    title: 'Salesforce Customization & Hygiene Best Practices',
    description: 'Keep your CRM data clean and structured. Tips on duplicate rules, validation paths, and field mapping protocols.',
    imageUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600',
    readTime: '9 min read',
    tag: 'CRM'
  },
  {
    id: 'g6',
    category: 'Guides',
    subMeta: 'ANALYTICS • 11 MIN READ',
    title: 'The GA4 Transition and Event Tracking Guide',
    description: 'Configure custom events, enhanced measurement, and Google Tag Manager containers for precise web traffic tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600',
    readTime: '11 min read',
    tag: 'Analytics'
  },
  {
    id: 'g7',
    category: 'Guides',
    subMeta: 'PRODUCT TECH • 8 MIN READ',
    title: 'UX Design System Rules for B2B Dashboards',
    description: 'Create interactive, accessible, and clean user interfaces by following standardized grid systems and design principles.',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600',
    readTime: '8 min read',
    tag: 'Product Tech'
  },
  {
    id: 'g8',
    category: 'Guides',
    subMeta: 'CUSTOMER JOURNEY • 14 MIN READ',
    title: 'Mapping Multi-Channel Customer Journeys',
    description: 'Align email campaigns, SMS notifications, and website personalization along a unified path based on user intent.',
    imageUrl: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=600',
    readTime: '14 min read',
    tag: 'Customer Journey'
  },
  {
    id: 'g9',
    category: 'Guides',
    subMeta: 'SEO TECHNICAL • 13 MIN READ',
    title: 'Technical SEO Audit Guide for Enterprise Sites',
    description: 'Optimize page experience, crawler pathways, XML sitemaps, and Schema markup for massive multi-language domains.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600',
    readTime: '13 min read',
    tag: 'Technical SEO'
  },
  {
    id: 'g10',
    category: 'Guides',
    subMeta: 'CONTENT STRATEGY • 7 MIN READ',
    title: 'Designing Content Hubs That Convert Readers',
    description: 'Structure your knowledge base and blog architecture to lead readers naturally toward conversion forms and demos.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600',
    readTime: '7 min read',
    tag: 'Content Hubs'
  },
  {
    id: 'g11',
    category: 'Guides',
    subMeta: 'TAG MANAGEMENT • 8 MIN READ',
    title: 'Advanced Google Tag Manager Deployments',
    description: 'Learn GTM custom JavaScript variables, element visibility triggers, and data layer pushes for perfect metric accuracy.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
    readTime: '8 min read',
    tag: 'Tag Management'
  },
  {
    id: 'g12',
    category: 'Guides',
    subMeta: 'EMAIL DELIVERABILITY • 10 MIN READ',
    title: 'The Complete Email Deliverability Playbook',
    description: 'Master SPF, DKIM, DMARC configurations and IP warming procedures to ensure your emails land in the primary inbox.',
    imageUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600',
    readTime: '10 min read',
    tag: 'Email Deliverability'
  },

  // ================= ARTICLES (12 items) =================
  {
    id: 'a1',
    category: 'Articles',
    subMeta: 'CONTENT STRATEGY • 5 MIN READ',
    title: 'The Content Blueprint: Creating Copy that Converts',
    description: 'Unlock copywriting methods designed to keep readers engaged, increase email click rates, and convert landing page traffic.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    readTime: '5 min read',
    tag: 'Content Strategy'
  },
  {
    id: 'a2',
    category: 'Articles',
    subMeta: 'WORK & CAREER • 6 MIN READ',
    title: 'How To Onboard a New Client: A Step-by-Step Guide',
    description: 'Avoid onboarding friction by creating structured kickoff meetings, sharing onboarding decks, and setting clear goals.',
    imageUrl: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=600',
    readTime: '6 min read',
    tag: 'Work & Career'
  },
  {
    id: 'a3',
    category: 'Articles',
    subMeta: 'AI SERVICES • 7 MIN READ',
    title: '5 Ways Organizations Can Engage and Advance Women in the Workplace',
    description: 'Implement inclusive mentoring, address systemic promotion bias, and support flexible structures to elevate female leaders.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    readTime: '7 min read',
    tag: 'AI Services'
  },
  {
    id: 'a4',
    category: 'Articles',
    subMeta: 'WORK & CAREER • 5 MIN READ',
    title: 'Build Better Client Relationships: 10 Communication Strategies',
    description: 'Maintain healthy, long-term agency client relationships with transparent updates, setting expectations, and active listening.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    readTime: '5 min read',
    tag: 'Work & Career'
  },
  {
    id: 'a5',
    category: 'Articles',
    subMeta: 'HIRING & MANAGEMENT • 8 MIN READ',
    title: 'How To Build a Successful Team in a Growing Small Business',
    description: 'Discover how alignment on core values, smart hiring criteria, and a supportive culture build a top-performing startup team.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
    readTime: '8 min read',
    tag: 'Hiring & Management'
  },
  {
    id: 'a6',
    category: 'Articles',
    subMeta: 'MARKETING TRENDS • 6 MIN READ',
    title: 'Predictive Analytics: The Future of Customer Lifetime Value',
    description: 'How predictive modeling and customer database segmentation let marketers target high-value buyers with ultimate precision.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    readTime: '6 min read',
    tag: 'Marketing Trends'
  },
  {
    id: 'a7',
    category: 'Articles',
    subMeta: 'COMMUNITY BUILDING • 9 MIN READ',
    title: 'Why Owned Communities are Replacing Third-Party Social Media Networks',
    description: 'Examine the shift of B2B SaaS brands building custom Slack, Discord, and forum spaces to gain direct contact with users.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600',
    readTime: '9 min read',
    tag: 'Community'
  },
  {
    id: 'a8',
    category: 'Articles',
    subMeta: 'CONVERSION RATE • 4 MIN READ',
    title: 'A/B Testing Mistakes: Why 90% of Optimizations Fail to Move the Needle',
    description: 'Learn the primary errors in significance testing, running tests for too short a timeframe, and testing minor elements.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600',
    readTime: '4 min read',
    tag: 'Conversion Rate'
  },
  {
    id: 'a9',
    category: 'Articles',
    subMeta: 'DATA PRIVACY • 7 MIN READ',
    title: 'Preparing for the Post-Cookie Era in Paid Media Tracking',
    description: 'How server-side tagging and first-party cookies will replace pixel models to protect measurement capabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
    readTime: '7 min read',
    tag: 'Data Privacy'
  },
  {
    id: 'a10',
    category: 'Articles',
    subMeta: 'CONTENT PROMOTION • 6 MIN READ',
    title: 'The Art of Content Syndication: Reaching New Audiences Easily',
    description: 'Distribute your high-performing content through Medium, LinkedIn Publisher, and dev networks without SEO penalties.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
    readTime: '6 min read',
    tag: 'Content Promotion'
  },
  {
    id: 'a11',
    category: 'Articles',
    subMeta: 'INFLUENCER TECH • 5 MIN READ',
    title: 'B2B Influencer Marketing: A Highly Underutilized Growth Loop',
    description: 'Collaborate with industry experts and content creators to drive trust, brand authority, and demo bookings cost-effectively.',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600',
    readTime: '5 min read',
    tag: 'Influencer Tech'
  },
  {
    id: 'a12',
    category: 'Articles',
    subMeta: 'BUDGETING • 8 MIN READ',
    title: 'How to Audit Your MarTech Stack and Save Thousands of Dollars',
    description: 'Follow this software audit process to discover unused licenses, overlapping software functions, and bloated subscriptions.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600',
    readTime: '8 min read',
    tag: 'Budgeting'
  },

  // ================= CASE STUDIES (12 items) =================
  {
    id: 'c1',
    category: 'Case Studies',
    subMeta: 'STRATEGIC MARKETING • 12 MIN READ',
    title: 'Mastering Strategic Marketing in 2026',
    description: 'An in-depth case study on how leading SaaS companies optimized customer acquisition costs and scaled revenue.',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600',
    readTime: '12 min read',
    tag: 'Strategic Marketing'
  },
  {
    id: 'c2',
    category: 'Case Studies',
    subMeta: 'CONVERSION RATE • 10 MIN READ',
    title: 'How Acme Corp Increased Signup Conversion Rate by 45%',
    description: 'By redesigning their onboarding flow and introducing multi-step interactive wizard inputs, Acme boosted registrations.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    readTime: '10 min read',
    tag: 'Conversion Rate'
  },
  {
    id: 'c3',
    category: 'Case Studies',
    subMeta: 'ACCOUNT BASED MARKETING • 14 MIN READ',
    title: 'B2B Enterprise Expansion: Generating $2.4M Pipeline via ABM',
    description: 'See how customized ad creatives, tailored whitepapers, and sales sequence coordination landed fortune-500 contracts.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
    readTime: '14 min read',
    tag: 'ABM'
  },
  {
    id: 'c4',
    category: 'Case Studies',
    subMeta: 'MARKETING AUTOMATION • 11 MIN READ',
    title: 'Re-engaging 25% of Dead Leads Using Dynamic Email Workflows',
    description: 'An analysis of a multi-stage behavior-triggered campaign designed to re-hook cold leads based on page interaction.',
    imageUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600',
    readTime: '11 min read',
    tag: 'Marketing Automation'
  },
  {
    id: 'c5',
    category: 'Case Studies',
    subMeta: 'SEARCH MARKETING • 13 MIN READ',
    title: 'Scaling Organic Traffic to 500K Monthly Pageviews in 12 Months',
    description: 'How a series of content audits, internal linking updates, and keyword gap analysis drove massive SEO growth.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600',
    readTime: '13 min read',
    tag: 'SEO Scale'
  },
  {
    id: 'c6',
    category: 'Case Studies',
    subMeta: 'PRODUCT PLACEMENT • 9 MIN READ',
    title: 'The Product Led Growth Strategy That Achieved 80% Organic Referrals',
    description: 'Designing interactive sharing widgets inside the main dashboard allowed this collaborative app to go viral.',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600',
    readTime: '9 min read',
    tag: 'PLG Strategy'
  },
  {
    id: 'c7',
    category: 'Case Studies',
    subMeta: 'ADVERTISING SHIFT • 10 MIN READ',
    title: 'Halving Customer Acquisition Cost by Shifting Ads to Niche Platforms',
    description: 'How a developer-focused platform ceased Meta ads and leveraged custom newsletter advertising for high ROI.',
    imageUrl: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600',
    readTime: '10 min read',
    tag: 'Paid Ads'
  },
  {
    id: 'c8',
    category: 'Case Studies',
    subMeta: 'CUSTOMER RETENTION • 11 MIN READ',
    title: 'Reducing Churn by 18% with In-App Contextual Guided Playbooks',
    description: 'Analyzing how delivering interactive walkthrough guides when a user encounters a high-friction screen decreased dropout rates.',
    imageUrl: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=600',
    readTime: '11 min read',
    tag: 'Retention'
  },
  {
    id: 'c9',
    category: 'Case Studies',
    subMeta: 'VIRAL CONTENT • 8 MIN READ',
    title: 'How a Single Interactive Quiz Generated 85,000 High-Quality Leads',
    description: 'The story of a MarTech stack grader quiz that went viral across LinkedIn and built a massive marketing database.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    readTime: '8 min read',
    tag: 'Viral Growth'
  },
  {
    id: 'c10',
    category: 'Case Studies',
    subMeta: 'LOCALIZATION • 15 MIN READ',
    title: 'International Expansion: Localizing Campaigns for APAC Markets',
    description: 'How a global software brand adapted assets, translated resources, and partnered with local influencers to gain market share.',
    imageUrl: 'https://images.unsplash.com/photo-15222071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
    readTime: '15 min read',
    tag: 'Localization'
  },
  {
    id: 'c11',
    category: 'Case Studies',
    subMeta: 'PR CAMPAIGN • 9 MIN READ',
    title: 'Breaking Through the Noise: The $10k Interactive Public PR Playbook',
    description: 'Leveraging proprietary industry data index reports to earn backlinks from Forbes, TechCrunch, and major tech blogs.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600',
    readTime: '9 min read',
    tag: 'PR Strategy'
  },
  {
    id: 'c12',
    category: 'Case Studies',
    subMeta: 'WEB DESIGN SHIFT • 10 MIN READ',
    title: 'Revamping Mobile UI Architecture: Boosting Mobile Checkout by 30%',
    description: 'Simplifying checkout fields, removing heavy animations, and implementing instant Apple Pay decreased cart abandonment.',
    imageUrl: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=600',
    readTime: '10 min read',
    tag: 'Web Design'
  },

  // ================= E-BOOKS (12 items) =================
  {
    id: 'e1',
    category: 'E-books',
    subMeta: 'TALENT INTELLIGENCE • 30 MIN READ',
    title: 'State Of Non-Tech Talent 2025',
    description: 'Discover real salary benchmarks from India\'s top product companies. Learn how to win tech and product talent with confidence.',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=600',
    readTime: '30 min read',
    tag: 'Talent Intelligence'
  },
  {
    id: 'e2',
    category: 'E-books',
    subMeta: 'COMPENSATION DATA • 45 MIN READ',
    title: 'The 2025 Bharat Salary Index [Non-Tech Skills]',
    description: 'Compensation benchmarks and real salary data from top startups and enterprise companies across India\'s core tech regions.',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600',
    readTime: '45 min read',
    tag: 'Compensation Data'
  },
  {
    id: 'e3',
    category: 'E-books',
    subMeta: 'TALENT ACQUISITION • 35 MIN READ',
    title: 'Product Tech PayCheck 2025: Recruitment Handbook',
    description: 'Discover salary trends from 10,000+ verified offers across India. Plan structured offers and avoid candidate dropouts.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600',
    readTime: '35 min read',
    tag: 'Talent Acquisition'
  },
  {
    id: 'e4',
    category: 'E-books',
    subMeta: 'IT SERVICES • 40 MIN READ',
    title: 'State Of ITeS Tech Talent and Salaries 2025',
    description: 'The ultimate guide for hiring managers, recruiters, and HR professionals who want to stay ahead of tech agency recruitment.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600',
    readTime: '40 min read',
    tag: 'IT Services'
  },
  {
    id: 'e5',
    category: 'E-books',
    subMeta: 'SALARY TRENDS • 38 MIN READ',
    title: 'MarTech Salary Index 2025: Roles & Compensation',
    description: 'This index is a highlight-filled quick reference for hiring managers to benchmark salaries for Marketo and HubSpot leads.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600',
    readTime: '38 min read',
    tag: 'Salary Trends'
  },
  {
    id: 'e6',
    category: 'E-books',
    subMeta: 'GROWTH STRATEGY • 50 MIN READ',
    title: 'The B2B SaaS Growth Framework for Post-Seed Startups',
    description: 'A deep-dive book detailing growth channels, client acquisition models, cohort metrics, and scalable hiring pathways.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600',
    readTime: '50 min read',
    tag: 'Growth Strategy'
  },
  {
    id: 'e7',
    category: 'E-books',
    subMeta: 'MARKETING STACK • 28 MIN READ',
    title: 'The Enterprise MarTech Stack Architecture Reference Book',
    description: 'Learn how massive global firms structure data feeds, customer segments, tracking servers, and consent networks.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    readTime: '28 min read',
    tag: 'Enterprise Stack'
  },
  {
    id: 'e8',
    category: 'E-books',
    subMeta: 'AI APPLICATIONS • 32 MIN READ',
    title: 'Artificial Intelligence in B2B Marketing: Practical Playbooks',
    description: 'Integrate LLMs, prompt template libraries, content engines, and personalization models directly into your workflows safely.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    readTime: '32 min read',
    tag: 'AI Marketing'
  },
  {
    id: 'e9',
    category: 'E-books',
    subMeta: 'CUSTOMER EXPERIENCE • 34 MIN READ',
    title: 'Retaining Customers Through Dynamic Lifecycle Design',
    description: 'Implement structured support paths, digital help libraries, trigger notifications, and personalized dashboard tools.',
    imageUrl: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=600',
    readTime: '34 min read',
    tag: 'Retention'
  },
  {
    id: 'e10',
    category: 'E-books',
    subMeta: 'REV ARCHITECTURE • 42 MIN READ',
    title: 'RevOps Metrics Guide: Unified Systems & Attribution Models',
    description: 'Design perfect marketing-to-sales data funnels, establish attribution points, and map team payouts accurately.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
    readTime: '42 min read',
    tag: 'RevOps'
  },
  {
    id: 'e11',
    category: 'E-books',
    subMeta: 'OUTBOUND GUIDE • 36 MIN READ',
    title: 'Modern Cold Email Outreach: Compliance & Conversion Tactics',
    description: 'Learn modern email warming systems, personalization macros, list-cleansing methods, and copy structures that get meetings.',
    imageUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600',
    readTime: '36 min read',
    tag: 'Outbound Sales'
  },
  {
    id: 'e12',
    category: 'E-books',
    subMeta: 'AGENCY SCALE • 48 MIN READ',
    title: 'The Agency Scale Playbook: Building Multi-Million Dollar Services',
    description: 'Standardize service deliveries, implement recurring retainer models, hire account executives, and design client acquisition programs.',
    imageUrl: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600',
    readTime: '48 min read',
    tag: 'Agency Scale'
  },

  // ================= VIDEOS (12 items) =================
  {
    id: 'v1',
    category: 'Videos',
    subMeta: 'TUTORIAL • 12 MINS',
    title: 'Platform Walkthrough: Setting Up Your Expert Hub',
    description: 'Watch a step-by-step video guide on building your expert portfolio, setting prices, and applying for top-tier MarTech gigs.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600',
    readTime: '12 min view',
    tag: 'Tutorial'
  },
  {
    id: 'v2',
    category: 'Videos',
    subMeta: 'MASTERCLASS • 15 MINS',
    title: 'Personal Branding Masterclass with MarTech Leaders',
    description: 'Industry veterans discuss building domain authority on LinkedIn, writing technical posts, and attracting clients.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600',
    readTime: '15 min view',
    tag: 'Masterclass'
  },
  {
    id: 'v3',
    category: 'Videos',
    subMeta: 'HIRING SECRETS • 10 MINS',
    title: 'How to Choose the Best HubSpot Expert for Your Team',
    description: 'Avoid hiring pitfalls by screening candidates for API integration knowledge, migration experience, and system designs.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
    readTime: '10 min view',
    tag: 'Hiring'
  },
  {
    id: 'v4',
    category: 'Videos',
    subMeta: 'ACADEMY VIDEO • 8 MINS',
    title: 'How to Setup Your Verification Badges on MarTechAdda',
    description: 'Unlock higher search rankings and client trust by completing our credential check and getting verification badges.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    readTime: '8 min view',
    tag: 'Academy'
  },
  {
    id: 'v5',
    category: 'Videos',
    subMeta: 'PORTFOLIO TIPS • 11 MINS',
    title: 'Optimizing Your Profile for Enterprise MarTech Inbound Gigs',
    description: 'Tips from top-rated specialists on how they layout experience, link dashboards, and describe previous project outcomes.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    readTime: '11 min view',
    tag: 'Profile Tips'
  },
  {
    id: 'v6',
    category: 'Videos',
    subMeta: 'STARTUP ADVICE • 14 MINS',
    title: 'Hiring Strategies for Fast-Growing Startup Tech Stacks',
    description: 'Founders share how they hire fractional MarTech engineers to avoid the high overhead of permanent executive positions.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600',
    readTime: '14 min view',
    tag: 'Startup'
  },
  {
    id: 'v7',
    category: 'Videos',
    subMeta: 'AI INSIGHTS • 18 MINS',
    title: 'Navigating Your Career in the AI Era: Skills to Develop',
    description: 'Why prompt architecture, agent setups, and data integration are the most valuable skills for marketing technicians today.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    readTime: '18 min view',
    tag: 'AI Era'
  },
  {
    id: 'v8',
    category: 'Videos',
    subMeta: 'EXPERT DISCUSSION • 16 MINS',
    title: 'Building Long-Term Authority: Beyond Simple Freelancing',
    description: 'Transition from hourly project freelancing to fixed-price packages and advisory positions in the marketing sector.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
    readTime: '16 min view',
    tag: 'Career Build'
  },
  {
    id: 'v9',
    category: 'Videos',
    subMeta: 'AGENCY VS FREELANCER • 13 MINS',
    title: 'Hiring Agencies vs. Freelancers: Key Execution Differences',
    description: 'A comparison outlining when to hire a full agency and when a single senior freelancer is more efficient.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600',
    readTime: '13 min view',
    tag: 'Hiring Advice'
  },
  {
    id: 'v10',
    category: 'Videos',
    subMeta: 'MARKETO TIPS • 15 MINS',
    title: 'Marketo Smart Campaign Setups: Advanced Walkthrough',
    description: 'Build complex triggered workflows, handle exclusion list criteria, and set custom wait steps in Marketo.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600',
    readTime: '15 min view',
    tag: 'Marketo'
  },
  {
    id: 'v11',
    category: 'Videos',
    subMeta: 'DATA STREAMS • 10 MINS',
    title: 'Connecting Segment and Customer.io for Automated Journeys',
    description: 'Set up track events in Segment and feed them directly into campaign triggers in Customer.io to drive signups.',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600',
    readTime: '10 min view',
    tag: 'Data Streams'
  },
  {
    id: 'v12',
    category: 'Videos',
    subMeta: 'DEMO STACK • 12 MINS',
    title: 'The Perfect B2B Marketing Tech Stack for Under $500/Month',
    description: 'A visual walkthrough choosing and linking cost-effective platforms for email, CRM, popups, and site tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600',
    readTime: '12 min view',
    tag: 'SaaS Stack'
  },

  // ================= CHECKLISTS (12 items) =================
  {
    id: 'k1',
    category: 'Checklists',
    subMeta: 'AUDIT TOOL • 5 MIN READ',
    title: 'HubSpot Post-Launch Verification Checklist',
    description: 'A 25-point audit to run after going live with HubSpot, ensuring form submissions, tracking codes, and pipelines are clean.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    readTime: '5 min read',
    tag: 'Audit Tool'
  },
  {
    id: 'k2',
    category: 'Checklists',
    subMeta: 'DATA CLEANING • 4 MIN READ',
    title: 'Quarterly CRM Data Cleanliness Checklist',
    description: 'Steps to identify duplicate leads, remove inactive email domains, update job titles, and standardise location codes.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600',
    readTime: '4 min read',
    tag: 'CRM Health'
  },
  {
    id: 'k3',
    category: 'Checklists',
    subMeta: 'SEO AUDIT • 6 MIN READ',
    title: 'SEO Pre-Migration Core Settings Checklist',
    description: 'Don\'t lose rankings during a domain shift. Follow this strict index check, redirect audit, and metadata transfer log.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600',
    readTime: '6 min read',
    tag: 'SEO Migration'
  },
  {
    id: 'k4',
    category: 'Checklists',
    subMeta: 'CAMPAIGN READY • 3 MIN READ',
    title: 'Email Campaign Pre-Send Quality Check',
    description: 'Avoid embarrassing send errors. Audit links, template responsive layouts, token fallbacks, and deliverability spam scores.',
    imageUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600',
    readTime: '3 min read',
    tag: 'Campaign Check'
  },
  {
    id: 'k5',
    category: 'Checklists',
    subMeta: 'ONBOARDING STEP • 5 MIN READ',
    title: 'B2B Client Kickoff & Integration Checklist',
    description: 'Create professional starts by checking off asset requests, access credentials, kickoff presentations, and slack builds.',
    imageUrl: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=600',
    readTime: '5 min read',
    tag: 'Onboarding'
  },
  {
    id: 'k6',
    category: 'Checklists',
    subMeta: 'GDPR / COMPLIANCE • 7 MIN READ',
    title: 'GDPR Consent & Privacy Stack Verification Checklist',
    description: 'Confirm Cookiebot variables, cookie consent headers, IP anonymization, and opt-out workflows match compliance rules.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
    readTime: '7 min read',
    tag: 'GDPR Compliance'
  },
  {
    id: 'k7',
    category: 'Checklists',
    subMeta: 'TRACKING VERIFICATION • 4 MIN READ',
    title: 'Pixel and Tag Setup Validation Checklist',
    description: 'Verify tracking tags are loaded correctly. Includes Chrome DevTools audits, GTM debug checks, and data layer inspects.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
    readTime: '4 min read',
    tag: 'Tracking'
  },
  {
    id: 'k8',
    category: 'Checklists',
    subMeta: 'HIRE CHECKLIST • 5 MIN READ',
    title: 'MarTech Contractor Onboarding Checklist',
    description: 'Make sure contractors have standard logins, signed NDAs, detailed spec documents, and communication guides from Day 1.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    readTime: '5 min read',
    tag: 'Hiring'
  },
  {
    id: 'k9',
    category: 'Checklists',
    subMeta: 'WEB PERFORMANCE • 6 MIN READ',
    title: 'Core Web Vitals Optimisation Checklist',
    description: 'Boost rankings with fast load speeds. Checklist for image formats, script delays, CSS extractions, and font caching.',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600',
    readTime: '6 min read',
    tag: 'Web Performance'
  },
  {
    id: 'k10',
    category: 'Checklists',
    subMeta: 'MARKETING STACK • 5 MIN READ',
    title: 'Annual SaaS stack renewal assessment checklist',
    description: 'Identify software that overlaps, cancel unused user seats, compare tool pricing, and negotiate better software deals.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600',
    readTime: '5 min read',
    tag: 'SaaS Audits'
  },
  {
    id: 'k11',
    category: 'Checklists',
    subMeta: 'CONTENT REPURPOSE • 4 MIN READ',
    title: 'Content Repurposing Checklist: One Post to 10 Assets',
    description: 'Convert a single long ebook or report into LinkedIn posts, slide decks, newsletters, infographics, and YouTube videos.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600',
    readTime: '4 min read',
    tag: 'Repurposing'
  },
  {
    id: 'k12',
    category: 'Checklists',
    subMeta: 'OUTBOUND AUDIT • 5 MIN READ',
    title: 'Outbound Domain Infrastructure Setup Checklist',
    description: 'Configure auxiliary sending domains properly. Setup registrar entries, redirect paths, forward targets, and profile names.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
    readTime: '5 min read',
    tag: 'Outbound Stack'
  }
];
