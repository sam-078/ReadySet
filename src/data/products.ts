import type { BundleConfig, Collection, FAQItem, Product } from '../types/store';

export const COLLECTIONS: Collection[] = [
  {
    slug: 'creators',
    name: 'Creators',
    shortName: 'Creators',
    tagline: 'Structured systems for consistent publishing and brand pitching.',
    description:
      'Editorial content calendars, pillar planners, media kit layouts, and campaign trackers built for solo creators who want structure without clutter.',
    accentTheme: 'cobalt',
    imagePath: '/src/assets/images/collection_creators_1795444648796.jpg',
    imageAlt: 'Tablet displaying an editorial media kit layout and monthly content calendar on a stone desk',
    audienceHighlights: [
      'Short-form video & social creators',
      'Newsletter writers & indie educators',
      'Creators preparing for brand partnerships',
    ],
  },
  {
    slug: 'freelancers',
    name: 'Freelancers',
    shortName: 'Freelancers',
    tagline: 'Client-ready documents, pricing sheets, and onboarding workflows.',
    description:
      'Clear pricing calculators, onboarding questionnaires, revision policies, proposals, and delivery checklists designed to run independent client work professionally.',
    accentTheme: 'lime',
    imagePath: '/src/assets/images/collection_freelancers_1795444648679.jpg',
    imageAlt: 'Laptop displaying a client pricing spreadsheet and project brief document on a minimalist desk',
    audienceHighlights: [
      'Freelance video editors & post-production specialists',
      'Designers, writers & independent consultants',
      'New freelancers launching their first paid offer',
    ],
  },
  {
    slug: 'students-events',
    name: 'Students & Event Organisers',
    shortName: 'Students & Events',
    tagline: 'Practical trackers for campus fests, clubs, and internship season.',
    description:
      'Event budgets, sponsorship pipelines, vendor sheets, and internship application trackers made for busy students and organising committees.',
    accentTheme: 'orange',
    imagePath: '/src/assets/images/collection_students_events_1795444649126.jpg',
    imageAlt: 'Tablet displaying a campus event timeline and budget matrix beside printed checklist sheets',
    audienceHighlights: [
      'College festival & club organising teams',
      'University students applying for internships',
      'Community & workshop coordinators',
    ],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'creator-starter-kit',
    slug: 'creator-starter-kit',
    name: 'Creator Starter Kit',
    priceInr: 199,
    categoryLabel: 'Creators',
    filterCategories: ['creators'],
    collectionSlug: 'creators',
    shortDescription:
      'Everything you need to organise a month of content and stop staring at a blank content calendar.',
    fullDescription:
      'Everything you need to organise a month of content and stop staring at a blank content calendar. Built to take you from scattered notes to a clear 30-day publishing rhythm with dedicated spaces for content pillars, hooks, captions, brand deals, and monthly review.',
    includes: [
      '30-day content planner',
      'Content pillar worksheet',
      'Reel idea bank',
      'Caption framework',
      'Posting tracker',
      'Brand collaboration checklist',
      'Monthly analytics tracker',
    ],
    whoIsItFor: [
      'Creators who want a consistent weekly posting schedule without overcomplicating their tools',
      'Solo educators, reviewers, and lifestyle creators planning a full month in one sitting',
      'Anyone tired of rebuilding new spreadsheets every Monday morning',
    ],
    softwareRequirements: [
      'Google Sheets or Microsoft Excel (for planners & analytics trackers)',
      'Google Docs, Notion, or Word-compatible editor (for caption & pillar worksheets)',
      'Any PDF reader for printable reference checklists',
    ],
    formats: ['Google Sheets / Excel', 'Editable Docs', 'Printable PDF'],
    mockupKind: 'creator-starter',
    studioImagePath: '/src/assets/images/collection_creators_1795444648796.jpg',
    studioImageAlt: 'Creator Starter Kit tablet preview on an editorial studio desk',
    previewSlides: [
      {
        id: 'cs-overview',
        label: 'Calendar',
        title: '30-Day Content Planner',
        caption: 'Map weekly themes, formats, hooks, and publish status in one clean grid.',
        variant: 'overview',
      },
      {
        id: 'cs-sheet',
        label: 'Analytics',
        title: 'Monthly Analytics & Posting Tracker',
        caption: 'Log reach, saves, shares, and format performance with automatic summary totals.',
        variant: 'spreadsheet',
      },
      {
        id: 'cs-checklist',
        label: 'Frameworks',
        title: 'Caption & Brand Collab Checklist',
        caption: 'Structured hook formulas and pre-publish deliverables checklist.',
        variant: 'checklist',
      },
      {
        id: 'cs-studio',
        label: 'In Context',
        title: 'Studio Workspace View',
        caption: 'Designed for calm planning across tablet, laptop, and print.',
        variant: 'studio',
      },
    ],
    faqs: [
      {
        question: 'Can I reuse the 30-day content planner every month?',
        answer:
          'Yes. Duplicate the master tab inside Google Sheets or Excel each month to keep an ongoing archive of your content plans and analytics.',
      },
      {
        question: 'Do I need paid software to use the Creator Starter Kit?',
        answer:
          'No. Everything works in free accounts on Google Sheets and Google Docs, as well as desktop Excel or Notion.',
      },
    ],
    featuredOrder: 1,
  },
  {
    id: 'creator-media-kit-pack',
    slug: 'creator-media-kit-pack',
    name: 'Creator Media Kit Pack',
    priceInr: 249,
    categoryLabel: 'Creators',
    filterCategories: ['creators'],
    collectionSlug: 'creators',
    shortDescription:
      'Clean media kit layouts, brand outreach scripts, and campaign tracking built for pitching sponsors.',
    fullDescription:
      'Present your audience, past work, and rate structure with clarity. The Creator Media Kit Pack combines three distinct editorial media kit layouts with structured outreach templates, proposal pages, and a campaign tracker so brand partnerships stay organised from first email to final invoice.',
    includes: [
      'Three media kit layouts',
      'Brand outreach templates',
      'Collaboration proposal template',
      'Campaign tracker',
      'Portfolio checklist',
    ],
    whoIsItFor: [
      'Creators pitching brands for their first paid collaborations or retainers',
      'Talent managers or micro-creators updating an outdated PDF deck',
      'Newsletter and YouTube creators who want clean, readable rate-card layouts',
    ],
    softwareRequirements: [
      'Canva (Free tier compatible) or Figma/Slides-ready document layouts',
      'Google Sheets or Excel for the Campaign Tracker',
      'Google Docs or Word-compatible editor for outreach & proposal copy',
    ],
    formats: ['Editable Layouts', 'Google Sheets / Excel', 'Doc Templates'],
    mockupKind: 'creator-media-kit',
    studioImagePath: '/src/assets/images/collection_creators_1795444648796.jpg',
    studioImageAlt: 'Creator Media Kit Pack editorial layout preview',
    previewSlides: [
      {
        id: 'mk-overview',
        label: 'Layouts',
        title: 'Three Editorial Media Kit Layouts',
        caption: 'Minimalist one-page and multi-page layouts for audience stats, deliverables, and rates.',
        variant: 'overview',
      },
      {
        id: 'mk-sheet',
        label: 'Tracker',
        title: 'Campaign & Outreach Pipeline',
        caption: 'Track brand contacts, pitch dates, deliverable deadlines, and payment status.',
        variant: 'spreadsheet',
      },
      {
        id: 'mk-checklist',
        label: 'Pitching',
        title: 'Outreach Scripts & Portfolio Checklist',
        caption: 'Cold pitch, follow-up, and rate-negotiation templates ready to customise.',
        variant: 'checklist',
      },
      {
        id: 'mk-studio',
        label: 'In Context',
        title: 'Tablet Presentation Preview',
        caption: 'Export crisp PDFs ready to attach to sponsor emails.',
        variant: 'studio',
      },
    ],
    faqs: [
      {
        question: 'Can I change the fonts, colours, and sections in the media kit layouts?',
        answer:
          'Yes. Every layout is fully editable so you can swap in your own handle, brand palette, audience metrics, and sample links.',
      },
      {
        question: 'Are outreach email templates included for cold pitches and replies?',
        answer:
          'Yes. You get initial pitch templates, polite follow-ups, and counter-offer responses for gifted vs. paid requests.',
      },
    ],
    featuredOrder: 2,
  },
  {
    id: 'freelance-editor-toolkit',
    slug: 'freelance-editor-toolkit',
    name: 'Freelance Editor Toolkit',
    priceInr: 299,
    categoryLabel: 'Freelancers',
    filterCategories: ['freelancers'],
    collectionSlug: 'freelancers',
    shortDescription:
      'Pricing calculator, client onboarding, revision boundaries, invoicing, and delivery workflow for editors.',
    fullDescription:
      'Built specifically for independent video editors and post-production freelancers who want predictable margins and clear client boundaries. Price projects accurately, onboard clients with structured briefs, enforce clean revision limits, and deliver every cut without missing assets.',
    includes: [
      'Pricing calculator',
      'Client onboarding questionnaire',
      'Project brief',
      'Revision policy template',
      'Invoice template',
      'Delivery checklist',
      'Client communication templates',
    ],
    whoIsItFor: [
      'Freelance short-form, YouTube, or commercial video editors',
      'Post-production specialists tired of scope creep and endless unpaid revisions',
      'Editors moving from casual DMs to structured client onboarding',
    ],
    softwareRequirements: [
      'Google Sheets or Microsoft Excel (for the Pricing Calculator & Invoice)',
      'Google Docs or Word-compatible editor (for Briefs, Revision Policy & Email scripts)',
      'PDF export support for sending clean client invoices and briefs',
    ],
    formats: ['Google Sheets / Excel', 'Editable Docs', 'PDF Templates'],
    mockupKind: 'freelance-editor',
    studioImagePath: '/src/assets/images/collection_freelancers_1795444648679.jpg',
    studioImageAlt: 'Freelance Editor Toolkit pricing calculator and project brief on laptop',
    previewSlides: [
      {
        id: 'fe-sheet',
        label: 'Calculator',
        title: 'Project & Retainer Pricing Calculator',
        caption: 'Factor editing hours, motion graphics, rush fees, and margin targets before quoting.',
        variant: 'spreadsheet',
      },
      {
        id: 'fe-overview',
        label: 'Brief & Invoice',
        title: 'Project Brief & Clean Invoice Template',
        caption: 'Collect footage links, aspect ratios, and music preferences upfront.',
        variant: 'overview',
      },
      {
        id: 'fe-checklist',
        label: 'Delivery',
        title: 'Revision Policy & Export Checklist',
        caption: 'Clear round-by-round revision rules and final QC checklist before export.',
        variant: 'checklist',
      },
      {
        id: 'fe-studio',
        label: 'In Context',
        title: 'Desktop Workflow Preview',
        caption: 'Organised for quick client turnaround.',
        variant: 'studio',
      },
    ],
    faqs: [
      {
        question: 'Does the pricing calculator support INR and custom hourly/project rates?',
        answer:
          'Yes. Input your own baseline rate, project complexity multipliers, and retainer discounts; formulas update totals automatically.',
      },
      {
        question: 'Is the revision policy template written in plain, client-friendly language?',
        answer:
          'Yes. It clearly defines what counts as a round of revisions, turnaround windows, and how additional rounds are billed without sounding adversarial.',
      },
    ],
    featuredOrder: 3,
  },
  {
    id: 'freelance-launch-pack',
    slug: 'freelance-launch-pack',
    name: 'Freelance Launch Pack',
    priceInr: 249,
    categoryLabel: 'Freelancers',
    filterCategories: ['freelancers'],
    collectionSlug: 'freelancers',
    shortDescription:
      'Define your service offer, set transparent rates, send proposals, and track leads from day one.',
    fullDescription:
      'Stop spending weeks overthinking your offer before landing your first few clients. The Freelance Launch Pack guides you through packaging what you sell, tightening your portfolio, pricing with confidence, sending crisp proposals, and managing every outreach conversation in one tracker.',
    includes: [
      'Service definition worksheet',
      'Portfolio checklist',
      'Proposal template',
      'Client tracker',
      'Outreach templates',
      'Pricing worksheet',
    ],
    whoIsItFor: [
      'Designers, writers, developers, and marketers starting freelance work',
      'Students or full-time professionals transitioning into independent consulting',
      'Freelancers who need a repeatable way to pitch and follow up with leads',
    ],
    softwareRequirements: [
      'Google Sheets or Excel (for Client Tracker & Pricing Worksheet)',
      'Google Docs or Word-compatible editor (for Proposal, Service Definition & Outreach)',
      'PDF export for sending client proposals',
    ],
    formats: ['Google Sheets / Excel', 'Editable Docs', 'Checklist PDF'],
    mockupKind: 'freelance-launch',
    studioImagePath: '/src/assets/images/collection_freelancers_1795444648679.jpg',
    studioImageAlt: 'Freelance Launch Pack proposal and pricing worksheet on laptop',
    previewSlides: [
      {
        id: 'fl-overview',
        label: 'Proposal',
        title: 'One-Page Service Proposal Template',
        caption: 'Present scope, timeline, deliverables, and pricing clearly without bloated decks.',
        variant: 'overview',
      },
      {
        id: 'fl-sheet',
        label: 'Tracker',
        title: 'Client Lead & Outreach Tracker',
        caption: 'Keep track of warm intros, cold pitches, proposal status, and follow-up dates.',
        variant: 'spreadsheet',
      },
      {
        id: 'fl-checklist',
        label: 'Launch',
        title: 'Service Definition & Portfolio Checklist',
        caption: 'Audit your case studies and clarify exactly who your service helps.',
        variant: 'checklist',
      },
      {
        id: 'fl-studio',
        label: 'In Context',
        title: 'Desk Workspace Preview',
        caption: 'Everything structured to help you pitch this week.',
        variant: 'studio',
      },
    ],
    faqs: [
      {
        question: 'Does this work for non-design freelancers like writers or marketers?',
        answer:
          'Yes. The service definition, proposal, and pricing worksheets are structured for any skill-based freelance service.',
      },
      {
        question: 'Are the outreach templates adaptable for email and LinkedIn?',
        answer:
          'Yes. Each template includes concise versions suited for email as well as shorter DM introductions.',
      },
    ],
    featuredOrder: 4,
  },
  {
    id: 'college-event-organiser-kit',
    slug: 'college-event-organiser-kit',
    name: 'College Event Organiser Kit',
    priceInr: 299,
    categoryLabel: 'Students and Events',
    filterCategories: ['students', 'events'],
    collectionSlug: 'students-events',
    shortDescription:
      'Run campus fests, hackathons, and club events with clear timelines, budgets, sponsors, and vendor sheets.',
    fullDescription:
      'Built for student councils, cultural committees, and club leads running real events on tight timelines. Coordinate team responsibilities, compare vendor quotes side by side, track sponsor commitments, manage estimated vs. actual spend, and run event day from a single master checklist.',
    includes: [
      'Event planning timeline',
      'Budget spreadsheet',
      'Task allocation sheet',
      'Sponsorship tracker',
      'Vendor comparison sheet',
      'Event checklist',
      'Feedback form',
    ],
    whoIsItFor: [
      'College festival core committees and club presidents',
      'Hackathon, workshop, and conference organisers on campus',
      'Community coordinators managing volunteers, vendors, and sponsors together',
    ],
    softwareRequirements: [
      'Google Sheets or Microsoft Excel (for Budget, Timeline, Tasks, Sponsors & Vendors)',
      'Google Docs / Forms-ready structure (for Checklists & Post-Event Feedback Form)',
    ],
    formats: ['Google Sheets / Excel', 'Doc & Form Templates', 'Printable PDF'],
    mockupKind: 'college-event',
    studioImagePath: '/src/assets/images/collection_students_events_1795444649126.jpg',
    studioImageAlt: 'College Event Organiser Kit timeline and budget matrix flatlay',
    previewSlides: [
      {
        id: 'ce-sheet',
        label: 'Budget & Vendors',
        title: 'Event Budget & Vendor Comparison Matrix',
        caption: 'Compare vendor quotes and track estimated vs. actual spend across categories.',
        variant: 'spreadsheet',
      },
      {
        id: 'ce-overview',
        label: 'Timeline',
        title: 'Multi-Week Event Planning Timeline',
        caption: 'Milestone schedule from 8 weeks out through post-event wrap-up.',
        variant: 'overview',
      },
      {
        id: 'ce-checklist',
        label: 'Run of Show',
        title: 'Task Allocation & Day-Of Checklist',
        caption: 'Assign owners, track sponsors, and verify sound, stage, and registration readiness.',
        variant: 'checklist',
      },
      {
        id: 'ce-studio',
        label: 'In Context',
        title: 'Committee Planning Desk View',
        caption: 'Built to share across your organising team in Google Sheets.',
        variant: 'studio',
      },
    ],
    faqs: [
      {
        question: 'Can my entire committee collaborate inside these sheets at the same time?',
        answer:
          'Yes. Upload the spreadsheet files to Google Drive and share edit permissions with your team leads for real-time collaboration.',
      },
      {
        question: 'Does it work for small 50-person workshops as well as larger college fests?',
        answer:
          'Yes. Categories in the budget, task sheet, and timeline are modular so you can hide or expand rows based on event scale.',
      },
    ],
    featuredOrder: 5,
  },
  {
    id: 'internship-application-toolkit',
    slug: 'internship-application-toolkit',
    name: 'Internship Application Toolkit',
    priceInr: 199,
    categoryLabel: 'Students',
    filterCategories: ['students'],
    collectionSlug: 'students-events',
    shortDescription:
      'Stay on top of applications, tighten your resume, prep for interviews, and track every outreach email.',
    fullDescription:
      'Applying for internships is stressful enough when deadlines and follow-ups live in twenty browser tabs. The Internship Application Toolkit gives students a clean application tracker, resume review checklist, structured interview prep workbook, networking log, and ready-to-adapt cold emails.',
    includes: [
      'Application tracker',
      'Resume checklist',
      'Interview preparation workbook',
      'Email templates',
      'Networking tracker',
      'Portfolio checklist',
    ],
    whoIsItFor: [
      'Undergraduate and postgraduate students applying for summer or winter internships',
      'Final-year students preparing portfolios and cold outreach to startups and studios',
      'Anyone who wants a calm, structured weekly application routine',
    ],
    softwareRequirements: [
      'Google Sheets or Microsoft Excel (for Application & Networking Trackers)',
      'Google Docs or Word-compatible editor (for Interview Workbook & Email Templates)',
      'PDF checklists for quick resume and portfolio reviews',
    ],
    formats: ['Google Sheets / Excel', 'Editable Docs', 'Printable PDF'],
    mockupKind: 'internship-toolkit',
    studioImagePath: '/src/assets/images/collection_students_events_1795444649126.jpg',
    studioImageAlt: 'Internship Application Toolkit tracker and checklist desk setup',
    previewSlides: [
      {
        id: 'ia-sheet',
        label: 'Tracker',
        title: 'Application & Networking Tracker',
        caption: 'Track roles, deadlines, referral contacts, interview rounds, and follow-up dates.',
        variant: 'spreadsheet',
      },
      {
        id: 'ia-overview',
        label: 'Workbook',
        title: 'Interview Preparation Workbook',
        caption: 'Organise company research, STAR story prompts, and questions to ask interviewers.',
        variant: 'overview',
      },
      {
        id: 'ia-checklist',
        label: 'Review',
        title: 'Resume & Portfolio Audit Checklists',
        caption: 'Pre-submission checks for clarity, quantifiable outcomes, and link hygiene.',
        variant: 'checklist',
      },
      {
        id: 'ia-studio',
        label: 'In Context',
        title: 'Student Desk Preview',
        caption: 'Clean, distraction-free templates for internship season.',
        variant: 'studio',
      },
    ],
    faqs: [
      {
        question: 'Is this useful for design, tech, marketing, and business internships?',
        answer:
          'Yes. The trackers, email templates, and STAR-method interview workbook apply across disciplines, with an optional portfolio checklist for creative and technical roles.',
      },
      {
        question: 'Are cold email templates included for reaching out to alumni and founders?',
        answer:
          'Yes. Includes structured cold application emails, alumni coffee-chat requests, and post-interview thank-you notes.',
      },
    ],
    featuredOrder: 6,
  },
];

export const BUNDLES: BundleConfig[] = [
  {
    id: 'creator-essentials-bundle',
    slug: 'creator-essentials-bundle',
    name: 'Creator Essentials Bundle',
    description:
      'Pair monthly content planning with sponsor-ready media kits and brand outreach systems.',
    productIds: ['creator-starter-kit', 'creator-media-kit-pack'],
    bundlePriceInr: 349,
    accentTheme: 'cobalt',
  },
  {
    id: 'freelancer-bundle',
    slug: 'freelancer-bundle',
    name: 'Freelancer Bundle',
    description:
      'Everything from defining your freelance offer and pitching leads to pricing, onboarding, and delivering client edits.',
    productIds: ['freelance-editor-toolkit', 'freelance-launch-pack'],
    bundlePriceInr: 449,
    accentTheme: 'lime',
  },
  {
    id: 'campus-organiser-bundle',
    slug: 'campus-organiser-bundle',
    name: 'Campus Organiser Bundle',
    description:
      'Combine full campus event operations with a structured internship and portfolio system for the semester.',
    productIds: ['college-event-organiser-kit', 'internship-application-toolkit'],
    bundlePriceInr: 399,
    accentTheme: 'orange',
  },
];

export const STORE_FAQS: FAQItem[] = [
  {
    id: 'receive-products',
    category: 'Delivery & Files',
    question: 'How do I receive my products?',
    answer:
      'Once external checkout and digital delivery are enabled for the store, your purchase confirmation provides an instant, private download link via our digital delivery provider along with a copy sent to your checkout email. Until delivery integration is live, checkout is marked as pending configuration.',
  },
  {
    id: 'physical-products',
    category: 'Delivery & Files',
    question: 'Are these physical products?',
    answer:
      'No. All ReadySet kits are 100% digital downloadable toolkits, templates, spreadsheets, and printable PDFs. Nothing is shipped physically.',
  },
  {
    id: 'file-formats',
    category: 'Delivery & Files',
    question: 'What file formats are included?',
    answer:
      'Each toolkit includes practical, widely supported formats tailored to the workflow—typically Google Sheets / Microsoft Excel (.xlsx) files for trackers and calculators, editable document templates (Google Docs / .docx), and clean PDFs for checklists and reference sheets.',
  },
  {
    id: 'edit-templates',
    category: 'Usage & Editing',
    question: 'Can I edit the templates?',
    answer:
      'Yes. Every spreadsheet, document, checklist, and layout is made to be duplicated and customised with your own branding, rates, dates, categories, and project notes.',
  },
  {
    id: 'share-products',
    category: 'Usage & Editing',
    question: 'Can I share the products?',
    answer:
      'Each purchase is licensed for individual personal or solo business use. For event kits, you may share working sheets inside your immediate campus organising team for that event, but reselling, redistributing, or publishing ReadySet templates publicly is not permitted.',
  },
  {
    id: 'refund-policy',
    category: 'Orders & Refunds',
    question: 'What is the refund policy?',
    answer:
      'Because digital toolkits are delivered immediately upon purchase, orders are generally non-refundable once downloaded. If you run into a broken file, duplicate charge, or accidental double purchase, contact support with your order reference and we will review it promptly.',
  },
  {
    id: 'download-fails',
    category: 'Orders & Refunds',
    question: 'What happens if a download doesn’t work?',
    answer:
      'If your download link expires, fails to open, or arrives with a corrupted file, email our support address with your purchase receipt email and kit name so we can issue a fresh access link.',
  },
  {
    id: 'software-needed',
    category: 'Usage & Editing',
    question: 'What software do I need?',
    answer:
      'You only need free, everyday tools: Google Sheets or Microsoft Excel for spreadsheets and trackers, Google Docs or Word for written templates, and any modern browser or PDF viewer. No expensive subscriptions are required.',
  },
];
