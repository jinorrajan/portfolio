import { ProjectItem, ServiceItem, ExperienceItem } from '../types';

export const ASSETS = {
  brandMark: 'https://lh3.googleusercontent.com/aida/AEtjO1ULOqr8prec2UMVuOr33ysZmdSmCzCd3gqJBoPdufYEl_srDUsQxWWvWh2oAEf6bIyy27ZG-1mX2Gtcemwow5lTWJaFbSlearH86wCcFz58uKdaVjKJDdW8hYG3QweteWeKnt7O9pGfvZZoLSy-nBTTHRDtd7h_fTNlivufAc9bSc9ByyL9At3oZtII6Ixsaj3wm-f7aDx0F23ZynYjf7hXELx0Bt9Ek_d66ZdokK1vCi4rZ-FL8L0QImX2',
  profileBadge: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCsG2GUtmxZQUdO9N0itWd-_dDPYeIcQHIl1JAbya146oNut2UdpUdLlao2FehZP_G2gc6A8yD4gKoRxkpJAtg4i4eeeGU7ivENmzwtc8cYaMBZNZNo7qxRVAVk_0Lhg9WdaK8AS5a47u3ZMvRr0o7K_Skd6QvXYf1MiCzVZRNU1DsZruyTnxsWBiehvPvHVSa6JjiOK3nLkA_J5fvr6mbzR9QBzCCjgEV7FM18trrqvhv-zIiozHjd-vQ1Zg4VJKKoxU',
  homePortrait: '/assets/home-image.png',
  aboutPortrait: '/assets/about-image.png',
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
    date: 'JUL 2026 - ONGOING',
    duration: 'ONGOING',
    role: 'PRODUCT ENGINEER',
    statusBadge: 'BETA DEVELOPMENT',
    tagline: 'Multi-application food delivery ecosystem involving customer, shop, delivery partner, and admin applications.',
    description:
      'A comprehensive on-demand food delivery suite engineered with 4 distinct client applications and a resilient microservice backend. Solved the critical bottleneck of real-time courier matching and peak-hour order surges through custom geo-clustering.',
    techStack: ['Flutter', 'Dart', 'Go', 'Redis', 'PostgreSQL', 'WebSockets', 'gRPC', 'Docker'],
    features: [
      'Customer app with live delivery route mapping & order customization',
      'Shop Partner app for receiving incoming food orders, accepting them, and managing kitchen preparation',
      'Delivery Partner app featuring background GPS tracking for live food delivery routing',
      'Admin panel for central operations, revenue tracking, and dispute resolution',
    ],
    keyHighlight: {
      title: 'KEY HIGHLIGHT: Scalable Dispatch Engine',
      description:
        'Architected geofenced real-time order batching and dynamic courier assignment, successfully stress-tested to support 10,000+ concurrent WebSocket connections without bottlenecking.',
    },
    metrics: [
      { label: 'Target Concurrency', value: '10,000+' },
      { label: 'Expected API Latency', value: '<50ms' },
      { label: 'Test Coverage', value: '85%' },
      { label: 'Ecosystem Apps', value: '4 Apps' },
    ],
    topology: {
      title: 'APP_TOPOLOGY',
      status: 'STATUS: HEALTHY',
      nodes: [
        { name: '[1] Customer app', subtitle: 'iOS & Android Client' },
        { name: '[2] Shop Partner app', subtitle: 'Store Management POS' },
        { name: '[3] Delivery Partner app', subtitle: 'Driver Tracking & Routing' },
        { name: '[4] Admin panel', subtitle: 'Central Control Dashboard', highlight: true },
      ],
      annotation: '// Synchronized state via gRPC & real-time event pipeline',
    },
  },
  {
    id: 'erp-products',
    projectNumber: 'PROJECT 02',
    title: 'Egg Management ERP',
    category: 'Enterprise / Supply Chain',
    categoryKey: 'enterprise',
    date: 'FEB 2026 - APR 2026',
    duration: '3 MONTHS',
    role: 'FULLSTACK PRODUCT ENGINEER',
    statusBadge: 'ENTERPRISE PRODUCTION',
    tagline: 'Comprehensive supply chain ERP managing egg procurement, warehousing, and branch distribution.',
    description:
      'An end-to-end ERP solution built to manage the complete lifecycle of egg procurement from suppliers, warehouse stocking, and distribution to internal branches and B2B customers.',
    techStack: ['Flutter', 'Express js', 'Node.js', 'PostgreSQL', 'Redis', 'React'],
    features: [
      'Multi-role based workflows for warehouse managers, suppliers, and branch staff',
      'Real-time egg inventory and empty tray tracking system',
      'Integrated dispatch system for routing stock to own branches or external customers',
      'Built-in POS and automated invoicing modules for seamless sales transactions',
    ],
    keyHighlight: {
      title: 'KEY HIGHLIGHT: Centralized Branch Management',
      description:
        'Engineered a unified dashboard that tracks live stock across multiple warehouse branches, utilizing Redis for real-time inventory updates and minimizing supply chain delays.',
    },
    // metrics: [
    //   { label: 'Inventory Accuracy', value: '99.9%' },
    //   { label: 'Daily Trays Tracked', value: '5,000+' },
    //   { label: 'Branches Managed', value: '15+' },
    // ],
  },
  {
    id: 'doctor-booking-app',
    projectNumber: 'PROJECT 03',
    title: 'Doctor Booking Application',
    category: 'Health Tech / Telehealth',
    categoryKey: 'mobile',
    date: 'FEB 2025 - JAN 2026',
    duration: '12 MONTHS',
    role: 'FLUTTER DEVELOPER',
    statusBadge: 'HIPAA COMPLIANT',
    tagline: 'Client-side and doctor-side applications designed to support doctor booking workflows, consultation scheduling, and encrypted records.',
    description:
      'Dual mobile applications built for patients and healthcare providers. Features synchronized calendar slots, live queue status, and secure patient messaging.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'Algolia'],
    features: [
      'Synchronized real-time calendar appointments preventing double bookings',
      'Secure in-app messaging and electronic patient record management',
      'Automated SMS & push reminders reducing patient no-show rates',
    ],
    keyHighlight: {
      title: 'KEY HIGHLIGHT: Seamless Appointments',
      description:
        'Built a complete booking system that allows patients to easily schedule appointments, avoid double bookings, and securely manage their clinic visits.',
    },
    metrics: [
      { label: 'App Rating', value: '4.1' },
      { label: 'Total Downloads', value: '1,000+' },
    ],
  },
  {
    id: 'zeedz-interactive-app',
    projectNumber: 'PROJECT 04',
    title: 'Delivery Partner App',
    category: 'Mobile / Logistics Tracking',
    categoryKey: 'mobile',
    date: 'JUL 2026 - ONGOING',
    duration: 'ONGOING',
    role: 'MOBILE ENGINEER',
    statusBadge: 'BETA PRODUCTION',
    tagline: 'Real-time routing and delivery tracking application built to optimize field partner operations.',
    description:
      'Developed the mobile interface for delivery partners to manage their active orders, track live routes via maps, and update order statuses in real-time.',
    techStack: ['Flutter', 'Dart', 'Google Maps API', 'REST APIs', 'Firebase'],
    features: [
      'Real-time GPS tracking and route optimization using Google Maps SDK',
      'Push notifications for new order assignments and status updates',
      'Offline mode for viewing active order details in low-connectivity zones',
      'Earnings dashboard and daily shift summary tracking',
    ],
    keyHighlight: {
      title: 'KEY HIGHLIGHT: Live Location Tracking',
      description:
        'Integrated background geolocation services to continuously broadcast driver coordinates to the backend without draining battery life.',
    },
    metrics: [
      { label: 'Test Coverage', value: '85%' },
      { label: 'Avg Latency', value: '< 50ms' },
      { label: 'Frame Drop Rate', value: '< 1%' },
    ],
  },

  {
    id: 'fintech-checkout-sdk',
    projectNumber: 'PROJECT 05',
    title: 'Attendance App',
    category: 'Mobile / Enterprise Utility',
    categoryKey: 'mobile',
    date: 'NOV 2025 - DEC 2025',
    duration: '2 MONTHS',
    role: 'FLUTTER DEVELOPER',
    statusBadge: 'INTERNAL TOOL',
    tagline: 'Internal employee attendance and shift management application developed for Srijana Healthcare Solutions.',
    description:
      'Developed a location-aware employee attendance application featuring multi-role authentication, secure image-based check-ins, and automated leave management.',
    techStack: ['Flutter', 'Dart', 'REST APIs', 'Geolocation', 'Camera'],
    features: [
      'Multi-role authentication for employees, managers, and HR admins',
      'Geofenced attendance tracking with real-time GPS validation',
      'Secure selfie capture check-in synced directly to the backend',
      'Intuitive leave application and approval workflow',
    ],
    keyHighlight: {
      title: 'KEY HIGHLIGHT: Location-Verified Check-ins',
      description:
        'Implemented a reliable check-in flow that requires GPS validation and a timestamped selfie before recording attendance, eliminating buddy-punching.',
    },
    metrics: [
      { label: 'Daily Check-ins', value: '20+' },
      { label: 'Location Accuracy', value: '< 10m' },
      { label: 'Active Staff', value: '50+' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'FEB 2026 — PRESENT',
    role: 'Product Engineer',
    company: 'Zeedz Innovations',
    location: 'Chennai / Remote',
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
    period: '',
    role: 'Product Engineer',
    company: 'Independent',
    location: 'Remote Worldwide',
    type: 'Freelance',
    description:
      'Partnered with early-stage venture founders and growth businesses to build 0-to-1 applications, scalable APIs, and automated release trains.',
    highlights: [
      'Architected and shipped the Food Delivery 4-App Ecosystem from scratch',
      'Designed ERP enterprise workflow engine for warehouse inventory management',
      'Engineered doctor booking telehealth platform with real-time slot synchronization',
      'Conducted architectural audits for existing codebases to eliminate latency spikes',
    ],
    skills: ['Flutter', 'Golang', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker'],
  },
  {
    period: 'Feb 25 — Jan 26',
    role: 'Flutter Developer',
    company: 'Srijana Healthcare Solutions',
    location: 'Bengaluru, India',
    type: 'Full-time',
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
