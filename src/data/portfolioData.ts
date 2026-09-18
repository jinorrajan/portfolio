import { ProjectItem, ServiceItem, ExperienceItem } from '../types';

export const ASSETS = {
  brandMark: 'https://lh3.googleusercontent.com/aida/AEtjO1ULOqr8prec2UMVuOr33ysZmdSmCzCd3gqJBoPdufYEl_srDUsQxWWvWh2oAEf6bIyy27ZG-1mX2Gtcemwow5lTWJaFbSlearH86wCcFz58uKdaVjKJDdW8hYG3QweteWeKnt7O9pGfvZZoLSy-nBTTHRDtd7h_fTNlivufAc9bSc9ByyL9At3oZtII6Ixsaj3wm-f7aDx0F23ZynYjf7hXELx0Bt9Ek_d66ZdokK1vCi4rZ-FL8L0QImX2',
  profileBadge: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCsG2GUtmxZQUdO9N0itWd-_dDPYeIcQHIl1JAbya146oNut2UdpUdLlao2FehZP_G2gc6A8yD4gKoRxkpJAtg4i4eeeGU7ivENmzwtc8cYaMBZNZNo7qxRVAVk_0Lhg9WdaK8AS5a47u3ZMvRr0o7K_Skd6QvXYf1MiCzVZRNU1DsZruyTnxsWBiehvPvHVSa6JjiOK3nLkA_J5fvr6mbzR9QBzCCjgEV7FM18trrqvhv-zIiozHjd-vQ1Zg4VJKKoxU',
  polaroidPortrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_tAatuOpTVVjlhWwaSu-EXAM6qa9LqiX-_CkXvon7Mv92atZhX-xnoVXQQTq326UXKD7rTIBQdYGDdLEELItFgJsNXMDmMmfaNCtZxPiJyWoQhjcPUlJT6Rb5YAwSc5DuorNf2IODksgyH1TYBLhkN2pIzsu1SrWckf_pe_NiUmHsv32Ijpp4a8Zvex_VFwGo_D1IIb9g8cyH69kA7YYnnRuwpWrax7j4AjaDTIjEb_OByK8NAoOc1UHyJXBh8srE2bw',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'mobile-apps',
    specCode: 'SPEC_01',
    title: 'Mobile Applications',
    emoji: '📱',
    accentColor: '#ffe500',
    description:
      'High-performance, pixel-precise iOS and Android apps built primarily with Flutter, reactive state systems, and clean native platform channels.',
    subLabel: 'FLUTTER / DART',
    index: '01/06',
    deliverables: [
      'Cross-platform iOS & Android binary builds',
      'Offline-first synchronization with SQLite/Isar',
      'Native camera, biometric, and Bluetooth bridges',
      'Smooth 60/120fps gesture animations & haptic feedback',
    ],
    bestFor: 'Startups and enterprises needing flawless mobile UX on iOS & Android simultaneously without double development cost.',
    typicalTimeline: '4 - 8 Weeks',
  },
  {
    id: 'mvp-development',
    specCode: 'SPEC_02',
    title: 'MVP Development',
    emoji: '🚀',
    accentColor: '#ffdad6',
    description:
      'Rapid zero-to-one product iteration. Scoping essential workflows, validating assumptions, and launching testable MVPs without structural debt.',
    subLabel: '0-TO-1 SHIP',
    index: '02/06',
    deliverables: [
      'Interactive prototype to production code pipeline',
      'End-to-end auth, payments, and data management',
      'Telemetry & crash tracking instrumentation',
      'Production test deployment with real beta testers',
    ],
    bestFor: 'Founders with validated product specs seeking to get into users hands fast while preserving clean scalable foundations.',
    typicalTimeline: '3 - 6 Weeks',
  },
  {
    id: 'backend-apis',
    specCode: 'SPEC_03',
    title: 'Backend & APIs',
    emoji: '⚡',
    accentColor: '#b4c5ff',
    description:
      'Robust microservices, RESTful and GraphQL endpoints, structured relational schemas, and asynchronous messaging pipelines engineered for uptime.',
    subLabel: 'GO / NODE / POSTGRES',
    index: '03/06',
    deliverables: [
      'High-throughput Go & Node microservice architectures',
      'PostgreSQL schema design with indexed query optimization',
      'gRPC & WebSocket bi-directional streaming channels',
      'Redis in-memory caching and distributed lock handlers',
    ],
    bestFor: 'Applications handling real-time states, geofenced tracking, concurrency spikes, or mission-critical transactions.',
    typicalTimeline: '4 - 10 Weeks',
  },
  {
    id: 'system-design',
    specCode: 'SPEC_04',
    title: 'System Design',
    emoji: '🏗️',
    accentColor: '#a7f3d0',
    description:
      'Modular architectural patterns, distributed event handlers, database sharding, and resilience strategies tailored for multi-tier applications.',
    subLabel: 'ARCHITECTURE & QUEUES',
    index: '04/06',
    deliverables: [
      'Comprehensive system architecture & sequence diagrams',
      'Event-driven worker queues via RabbitMQ/Kafka/Redis',
      'Idempotency validation & fault-tolerant circuit breakers',
      'Performance audit & bottlenecks remediation',
    ],
    bestFor: 'Scale-ups experiencing high latency, database locks, or decoupling complex monoliths into modular services.',
    typicalTimeline: '2 - 6 Weeks',
  },
  {
    id: 'ui-ux-implementation',
    specCode: 'SPEC_05',
    title: 'UI/UX Implementation',
    emoji: '🎨',
    accentColor: '#e9d5ff',
    description:
      'Translating Figma components into crisp, production-grade design tokens with smooth physical interactions, tactile haptics, and zero UI regressions.',
    subLabel: 'DESIGN SYSTEMS',
    index: '05/06',
    deliverables: [
      'Tokenized design systems mapped 1:1 with Figma variables',
      'Accessible contrast, dynamic typography & dark/light themes',
      'Custom canvas & chart visualizers',
      'Micro-interactions that elevate brand personality',
    ],
    bestFor: 'Teams that value tactile polish, physical design nuance, and eliminating UI jank in their user journey.',
    typicalTimeline: '2 - 4 Weeks',
  },
  {
    id: 'hosting-deployment',
    specCode: 'SPEC_06',
    title: 'Hosting & Deployment',
    emoji: '☁️',
    accentColor: '#fed7aa',
    description:
      'Automated CI/CD release trains for Google Play & Apple App Store, containerized Docker deployments, and cloud infrastructure management.',
    subLabel: 'DOCKER / CI-CD / CLOUD',
    index: '06/06',
    deliverables: [
      'Fastlane & GitHub Actions App Store release trains',
      'Multi-stage Docker containerization & optimization',
      'Cloud Run, AWS ECS, or Kubernetes setup',
      'Automated health checks, uptime monitoring & alerting',
    ],
    bestFor: 'Engineering orgs needing automated, zero-downtime releases without manual store upload headaches.',
    typicalTimeline: '1 - 3 Weeks',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'food-delivery-platform',
    projectNumber: 'PROJECT 01',
    title: 'Food Delivery Platform',
    category: 'Ecosystem / Food Delivery Engine',
    categoryKey: 'fullstack',
    date: 'OCT 2025 - JAN 2026',
    duration: '3 MONTHS',
    role: 'PRODUCT ENGINEER',
    statusBadge: 'PRODUCTION SHIP',
    tagline: 'Multi-application food delivery ecosystem involving customer, shop, delivery partner, and admin applications.',
    description:
      'A comprehensive on-demand food delivery suite engineered with 4 distinct client applications and a resilient microservice backend. Solved the critical bottleneck of real-time courier matching and peak-hour order surges through custom geo-clustering.',
    techStack: ['Flutter', 'Dart', 'Go', 'Redis', 'PostgreSQL', 'WebSockets', 'gRPC', 'Docker'],
    features: [
      'Customer app with live delivery route mapping & order customization',
      'Merchant POS tablet portal with kitchen ticket dispatch & inventory toggling',
      'Courier driver app featuring background GPS telemetry & offline resilience',
      'Super Admin operations dashboard for revenue reconciliation & dispute resolution',
    ],
    keyHighlight: {
      title: 'KEY HIGHLIGHT: Smart Dispatch Engine',
      description:
        'Architected geofenced real-time order batching and dynamic courier assignment, reducing average pickup latency by 24% under peak lunch concurrency.',
    },
    metrics: [
      { label: 'Latency Reduction', value: '-24%' },
      { label: 'WebSocket Uptime', value: '99.98%' },
      { label: 'Concurrent Orders', value: '15,000+' },
      { label: 'Delivery Apps Shipped', value: '4 Apps' },
    ],
    topology: {
      title: 'APP_TOPOLOGY',
      status: 'STATUS: HEALTHY',
      nodes: [
        { name: '[1] Customer App', subtitle: 'iOS & Android Client' },
        { name: '[2] Merchant Portal', subtitle: 'Live Tablet POS' },
        { name: '[3] Courier Agent', subtitle: 'Background Telemetry' },
        { name: '[4] Central Ops', subtitle: 'Unified Super Admin', highlight: true },
      ],
      annotation: '// Synchronized state via gRPC & real-time event pipeline',
    },
  },
  {
    id: 'erp-products',
    projectNumber: 'PROJECT 02',
    title: 'ERP Products',
    category: 'Enterprise / Workflow Engine',
    categoryKey: 'enterprise',
    date: 'MARCH 2026',
    duration: '4 MONTHS',
    role: 'FULLSTACK PRODUCT ENGINEER',
    statusBadge: 'ENTERPRISE PRODUCTION',
    tagline: 'Product development involving business workflows, application features, backend integration, and deployment.',
    description:
      'Built from the ground up to streamline complex supply chain inventory, automated GST invoicing, and procurement operations with granular role-based access security and audit logs.',
    techStack: ['Flutter', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker'],
    features: [
      'Multi-tier RBAC authorizing Warehouse Managers, Accountants, and C-suite',
      'Bulk catalog import and barcode/QR scanner integration for warehouse staff',
      'Automated PDF invoice generation and tax filing reconciliation',
      'Interactive business intelligence data charts & Excel/CSV stream exports',
    ],
    keyHighlight: {
      title: 'KEY HIGHLIGHT: Distributed State Machine',
      description:
        'Engineered an event-driven workflow engine that prevents invalid state transitions (e.g. shipping unapproved purchase orders), eliminating billing discrepancy errors.',
    },
    metrics: [
      { label: 'Order Processing Speed', value: '3.4x Faster' },
      { label: 'Inventory Discrepancy', value: '< 0.05%' },
      { label: 'Daily Line Items', value: '80,000+' },
    ],
  },
  {
    id: 'doctor-booking-app',
    projectNumber: 'PROJECT 03',
    title: 'Doctor Booking Application',
    category: 'Health Tech / Telehealth',
    categoryKey: 'mobile',
    date: 'JAN 2026',
    duration: '2 MONTHS',
    role: 'MOBILE LEAD & SYSTEM ARCHITECT',
    statusBadge: 'HIPAA COMPLIANT',
    tagline: 'Client-side and doctor-side applications designed to support doctor booking workflows, consultation scheduling, and encrypted records.',
    description:
      'Dual mobile applications built for patients and healthcare providers. Features synchronized calendar slots, live queue status, in-app encrypted teleconsultations, and digital prescription distribution.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'WebRTC', 'Cloud Functions', 'Algolia'],
    features: [
      'Synchronized real-time calendar appointments preventing double bookings',
      'Instant video & audio consultations with end-to-end encryption',
      'Digital prescription generator with electronic signature stamps',
      'Automated SMS & push reminders reducing patient no-show rates',
    ],
    keyHighlight: {
      title: 'KEY HIGHLIGHT: Live Queue Anticipator',
      description:
        'Implemented dynamic queue estimation that calculates patient delays and updates clinic waiting room screens in real time.',
    },
    metrics: [
      { label: 'No-Show Rate Drop', value: '-38%' },
      { label: 'Patient Rating', value: '4.9 / 5.0' },
      { label: 'Consultations Logged', value: '25,000+' },
    ],
  },
  {
    id: 'zeedz-interactive-app',
    projectNumber: 'PROJECT 04',
    title: 'Zeedz Eco-Interactive Mobile App',
    category: 'Mobile / Gamified Climate Action',
    categoryKey: 'mobile',
    date: '2024 - PRESENT',
    duration: 'ONGOING',
    role: 'PRODUCT ENGINEER @ ZEEDZ',
    statusBadge: 'LIVE ON APP STORE',
    tagline: 'Translating real-world climate projects and live weather feeds into a delight-driven gamified mobile experience.',
    description:
      'Core contributor at Zeedz Innovations, engineering mobile features, reactive Flutter widgets, state management architectures, and backend synchronizations that power this globally celebrated climate app.',
    techStack: ['Flutter', 'Dart', 'Bloc', 'REST APIs', 'Cloud Functions', 'App Store Connect'],
    features: [
      'Live weather API hooks determining in-game habitat states',
      'Complex custom painter particle animations and tactile creature haptics',
      'Multi-currency balance management and international localized assets',
      'Continuous integration pipelines deploying to beta test tracks weekly',
    ],
    keyHighlight: {
      title: 'KEY HIGHLIGHT: Render Pipeline Optimization',
      description:
        'Rewrote heavy animated tree layouts to use RepaintBoundaries and cached Canvas paths, maintaining solid 60 FPS across budget Android chipsets.',
    },
    metrics: [
      { label: 'App Store Rating', value: '4.8' },
      { label: 'Active Users', value: '100K+' },
      { label: 'Frame Drop Rate', value: '< 1%' },
    ],
  },
  {
    id: 'log-aggregator-microservice',
    projectNumber: 'PROJECT 05',
    title: 'High-Throughput Log Aggregator',
    category: 'Backend / Distributed Systems',
    categoryKey: 'backend',
    date: 'NOV 2025',
    duration: '1.5 MONTHS',
    role: 'SYSTEMS ARCHITECT',
    statusBadge: 'INTERNAL CORE TOOL',
    tagline: 'Lightweight Go daemon streaming and partitioning high-volume server telemetry into Redis streams.',
    description:
      'Engineered an ultra-fast logging sidecar in Golang capable of digesting 40k events/second with minimal CPU and memory footprint, decoupling application servers from downstream storage bottlenecks.',
    techStack: ['Golang', 'Redis Streams', 'PostgreSQL', 'Docker', 'Prometheus'],
    features: [
      'Ring-buffer asynchronous batching to avoid thread blocking',
      'Zero-allocation JSON parser leveraging buffer pools',
      'Automatic backpressure regulation during downstream network partitions',
      'Configurable log filtering and PII data masking on ingestion',
    ],
    keyHighlight: {
      title: 'KEY HIGHLIGHT: Low Memory Footprint',
      description:
        'Consumes under 18MB of RAM under sustained 35k events/sec load while preventing memory fragmentation.',
    },
    metrics: [
      { label: 'Throughput', value: '40,000 evt/s' },
      { label: 'Memory Usage', value: '< 18 MB' },
      { label: 'Packet Drop', value: '0.00%' },
    ],
  },
  {
    id: 'fintech-checkout-sdk',
    projectNumber: 'PROJECT 06',
    title: 'Fintech Mobile Payment SDK',
    category: 'SDK / Mobile Security',
    categoryKey: 'mobile',
    date: 'AUG 2025',
    duration: '2 MONTHS',
    role: 'LEAD SDK DEVELOPER',
    statusBadge: 'EMBEDDED MODULE',
    tagline: 'Drop-in Flutter payment checkout sheet with native biometric authorization and card tokenization.',
    description:
      'A modular Flutter library allowing third-party apps to embed a hardened, PCI-DSS compliant checkout workflow with 3D Secure verification in under 5 lines of code.',
    techStack: ['Flutter', 'Kotlin', 'Swift', 'Native Channels', 'AES-256 GCM'],
    features: [
      'Platform view integration embedding native Apple Pay and Google Pay sheets',
      'Biometric authentication (FaceID & Fingerprint) with fallback passcode',
      'End-to-end encrypted payload transmission with RSA key rotation',
      'Customizable theme tokens matching host application brand guidelines',
    ],
    keyHighlight: {
      title: 'KEY HIGHLIGHT: Zero-Dependency Architecture',
      description:
        'Crafted with clean native bridges to avoid bloated transitive dependencies, ensuring a minified SDK footprint under 420KB.',
    },
    metrics: [
      { label: 'Bundle Size', value: '420 KB' },
      { label: 'Auth Success Rate', value: '99.4%' },
      { label: 'Host Integrations', value: '12 Apps' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2024 — PRESENT',
    role: 'Product Engineer',
    company: 'Zeedz Innovations',
    location: 'Remote / Berlin & India',
    type: 'Full-time',
    description:
      'Spearheading mobile application feature delivery, frontend velocity, architectural refinements, and team coordination. Bridging the gap between conceptual product designs and mathematically sound, high-uptime production systems.',
    highlights: [
      'Drive Flutter mobile engineering across iOS and Android release channels',
      'Architect resilient backend integration endpoints and data synchronizations',
      'Lead technical execution, code reviews, and performance optimizations',
      'Coordinate cross-functional milestones between UI design, QA, and founders',
    ],
    skills: ['Flutter', 'Dart', 'Bloc', 'Backend Engineering', 'System Design', 'CI/CD'],
  },
  {
    period: '2023 — 2024',
    role: 'Fullstack Mobile & Backend Consultant',
    company: 'Independent Engineering',
    location: 'Chennai & Remote Worldwide',
    type: 'Consulting',
    description:
      'Partnered with early-stage venture founders and growth businesses to build 0-to-1 applications, scalable APIs, and automated release trains.',
    highlights: [
      'Architected and shipped the Food Delivery 4-App Ecosystem from scratch in 3 months',
      'Designed ERP enterprise workflow engine for warehouse inventory management',
      'Engineered doctor booking telehealth platform with real-time slot synchronization',
      'Conducted architectural audits for existing codebases to eliminate latency spikes',
    ],
    skills: ['Flutter', 'Golang', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker'],
  },
  {
    period: '2022 — 2023',
    role: 'Mobile Software Engineer',
    company: 'Mobile Engineering Lab',
    location: 'Chennai, India',
    type: 'Contract',
    description:
      'Focused on reactive cross-platform client development, native platform channel implementations, and offline-first database synchronization.',
    highlights: [
      'Implemented clean architecture patterns with Riverpod and Bloc state engines',
      'Built native iOS & Android bridge modules for specialized peripheral hardware',
      'Refactored legacy codebases to improve startup time by 45%',
    ],
    skills: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'SQLite', 'Firebase'],
  },
];

export const TOOLKIT = [
  { category: 'Mobile Engineering', items: ['Flutter', 'Dart', 'Bloc', 'Riverpod', 'Native Bridges (Kotlin/Swift)', 'Offline SQLite/Isar'] },
  { category: 'Backend & APIs', items: ['Golang', 'Node.js / Express', 'TypeScript', 'PostgreSQL', 'Redis', 'gRPC', 'WebSockets'] },
  { category: 'Architecture & DevOps', items: ['System Topology', 'Docker', 'CI/CD (GitHub Actions / Fastlane)', 'GCP / Cloud Run', 'AWS', 'Grafana'] },
  { category: 'Design & Craft', items: ['Figma to Token Spec', 'Tactile Motion Physics', 'Design Systems', 'Micro-interactions', 'Neo-brutalism'] },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Spec & Structural Architecture',
    subtitle: '// no premature coding without clear boundaries',
    description:
      'We map the essential user flows, clarify data models, define API contracts, and eradicate ambiguity before writing a single line of client UI.',
    outputs: ['Data Schema & API Contracts', 'System Topology Diagram', 'Sprint Milestones', 'Edge-case Matrix'],
  },
  {
    step: '02',
    title: 'Rapid Zero-to-One Prototyping',
    subtitle: '// clickable builds in your hands in week 1',
    description:
      'Immediate delivery of interactive, high-fidelity Flutter builds. We validate the tactile feel, gesture physics, and core workflow loops early.',
    outputs: ['Interactive Client APK/TestFlight', 'Design Token Binding', 'Mock Backend Endpoints', 'User Feedback Loop'],
  },
  {
    step: '03',
    title: 'Distributed Backend & Hardening',
    subtitle: '// engineered for concurrency and resilience',
    description:
      'Wiring live databases, caching layers, and asynchronous event streams. Applying idempotency, circuit breakers, and comprehensive integration testing.',
    outputs: ['Go / Node Microservices', 'PostgreSQL Migrations & Indexing', 'Redis Pub/Sub Real-Time Sync', 'Stress & Concurrency Reports'],
  },
  {
    step: '04',
    title: 'Automated Release Trains & Telemetry',
    subtitle: '// zero-downtime ships and live observability',
    description:
      'Setting up automated CI/CD pipelines for Google Play and Apple App Store, configuring containerized cloud hosting, and instrumenting error telemetry.',
    outputs: ['Fastlane Store Pipeline', 'Docker Container Deployments', 'Sentry Error Monitoring', 'Handover Docs & Code Ownership'],
  },
];
