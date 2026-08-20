import { Project, Certification, TargetMetric, SkillCategoryGroup } from '../types';

export const categoryLabel = (project: Project): string =>
  project.categoryLabel || project.type.toUpperCase();

export const TYPEWRITER_ROLES = [
  'Cloud Infrastructure Engineer',
  'Cybersecurity & Network Defense',
  'QA Automation & Software Systems'
];

export const MANIFESTO_WORDS = [
  { text: 'Undergraduate', type: 'accent' },
  { text: 'student', type: 'dim' },
  { text: 'pursuing', type: 'dim' },
  { text: 'a', type: 'dim' },
  { text: 'Bachelor', type: 'bright' },
  { text: 'of', type: 'dim' },
  { text: 'Information', type: 'bright' },
  { text: 'Technology', type: 'dim' },
  { text: 'at', type: 'dim' },
  { text: 'President', type: 'bright' },
  { text: 'University.', type: 'bright' }
];

export const TARGET_METRICS: TargetMetric[] = [
  { id: 't1', mark: '⊕', label: 'CLOUD_PLATFORM', value: 'AZURE', tag: 'TERRAFORM', type: 'purple' },
  { id: 't2', mark: '⊕', label: 'VPN_ENCRYPTION', value: 'ML-KEM-1024', tag: 'POST-QUANTUM', type: 'blue' },
  { id: 't3', mark: '⊕', label: 'RAG_ARCHITECTURE', value: 'GEMINI+CHROMA', tag: 'CONTAINER APPS', type: 'blue' },
  { id: 't4', mark: '⊕', label: 'SECURITY_MODEL', value: 'LEAST-RBAC', tag: 'ZERO-TRUST', type: 'red' },
  { id: 't5', mark: '⊕', label: 'PROJECT_DELIVERY', value: '100%', tag: 'VERIFIED', type: 'vol' }
];

export const SKILL_GROUPS: SkillCategoryGroup[] = [
  {
    title: 'PROGRAMMING & SCRIPTING',
    tag: 'LANGUAGES',
    skills: ['C++', 'Python', 'JavaScript', 'Bash', 'HTML', 'CSS']
  },
  {
    title: 'CLOUD & INFRASTRUCTURE',
    tag: 'DEVOPS / SYS',
    skills: ['Microsoft Azure', 'Linux', 'Docker', 'Git']
  },
  {
    title: 'NETWORKING & CYBERSECURITY',
    tag: 'SECURITY / NET',
    skills: ['TCP/IP', 'Subnetting', 'DNS', 'Digital Forensics', 'Log Monitoring', 'RBAC']
  },
  {
    title: 'WEB & FRONTEND DEVELOPMENT',
    tag: 'WEB TECH',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Postman']
  },
  {
    title: 'QA TESTING & WORKFLOW MANAGEMENT',
    tag: 'QA & AGILE',
    skills: ['Software Testing', 'Cypress', 'JMeter', 'Postman', 'Jira', 'ClickUp']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Dark Network Mesh & Post-Quantum Cryptography VPN',
    desc: 'Decentralized WireGuard mesh network secured with Rosenpass post-quantum key exchange (ML-KEM-1024) across Azure cloud infrastructure, managed via agile Jira sprints.',
    tags: ['Azure', 'WireGuard', 'Rosenpass', 'Post-Quantum Crypto', 'ML-KEM-1024', 'Jira', 'Prometheus & Grafana', 'fwknop'],
    type: 'cloud',
    categoryLabel: 'CLOUD & NETWORK SECURITY',
    url: 'https://github.com/mwaarits',
    image: '/img/project-PQC.png',
    problemStatement: 'Conventional public-key exchange algorithms (such as Diffie-Hellman and standard RSA) are vulnerable to future quantum computing decryption ("Harvest Now, Decrypt Later" threats) and lack decentralized mesh resilience.',
    solutionContext: 'Led a 5-person team across 2 sprints in Jira to architect and deploy a robust VPN mesh network. Administered Azure VPS instances with strict network security rules and configured WireGuard tunnels integrated with Rosenpass post-quantum key exchange (ML-KEM-1024).',
    resultsMetrics: [
      'Delivered a fully verified system meeting 100% of mandatory requirements confirmed via live connectivity and network scan testing.',
      'Completed 2 full agile sprints in Jira with zero missed delivery deadlines through proactive dependency management.',
      'Achieved quantum-resilient cryptographic key negotiation with automated tunnel rekeying in sub-second latency.'
    ],
    lessonsLearned: [
      'Kernel-level WireGuard tunnels paired with user-space post-quantum daemons like Rosenpass provide exceptional security without noticeable throughput degradation.',
      'Structured backlog refinement and sprint velocity tracking in Jira are critical when coordinating multi-node infrastructure configurations across a team.'
    ]
  },
  {
    title: 'Retrieval Augmented Generation (RAG) Web App',
    desc: 'Enterprise RAG document Q&A application with Gemini embeddings, ChromaDB, and hybrid BM25 vector search, provisioned on Azure Container Apps via Terraform with automated CI/CD.',
    tags: ['Azure Container Apps', 'Terraform', 'Gemini AI', 'ChromaDB', 'Docker', 'GitHub Actions', 'RBAC'],
    type: 'cloud',
    categoryLabel: 'CLOUD & AI PLATFORM',
    url: 'https://github.com/mwaarits',
    image: '/img/project-RAG.png',
    problemStatement: 'Knowledge-base document query applications often suffer from LLM hallucinations, poor data retrieval precision, and insecure cloud deployments lacking multi-tenant data isolation.',
    solutionContext: 'Engineered a full-stack RAG document Q&A app leveraging Gemini embeddings, ChromaDB, and hybrid BM25 vector search with strict per-user data isolation. Containerized with Dockerfile using a non-root runtime user and provisioned Azure Container Apps, private VNet, and Azure Files via Terraform.',
    resultsMetrics: [
      'Enforced least-privilege security via Azure Managed Identity and role-based access control (AcrPull, Key Vault Secrets User).',
      'Automated container builds to Azure Container Registry (ACR) via GitHub Actions CI/CD on every push to main.',
      'Achieved persistent vector database storage on Azure Files with zero vector data loss across container restarts.'
    ],
    lessonsLearned: [
      'Hybrid keyword (BM25) and dense vector retrieval significantly out-performs pure vector search for domain-specific technical documentation.',
      'Declarative Infrastructure as Code (Terraform) coupled with non-root Docker execution ensures reproducible and secure cloud workloads.'
    ]
  },
  {
    title: 'Web3 Escrow Bug Bounty Platform',
    desc: 'Full-stack smart contract escrow platform built with React, Hono/Node, and viem, deployed to Azure App Service in a private VNet with automated GitHub Actions CI/CD.',
    tags: ['Azure App Service', 'PostgreSQL', 'React', 'Hono', 'Viem', 'GitHub Actions', 'Azure DNS', 'BOT Chain (EVM)'],
    type: 'dev',
    categoryLabel: 'FULL-STACK & CLOUD',
    url: 'https://github.com/mwaarits',
    image: '/img/project-Bugchain.png',
    problemStatement: 'Security bounty programs require transparent, decentralized escrow handling combined with a secure, highly responsive cloud infrastructure for indexing on-chain bounty events.',
    solutionContext: 'Built and deployed a full-stack escrow platform (Hono/Node, React, viem) to Azure App Service with GitHub Actions CI/CD, indexing on-chain bounty events in real time. Provisioned Azure App Service and managed PostgreSQL in a private VNet with Key Vault-backed secrets and custom Azure DNS with TLS certificates.',
    resultsMetrics: [
      'Real-time on-chain event indexing for instant wallet-connected user notifications and bounty status tracking.',
      'Secured backend communication in a private VNet with Key Vault secrets and HTTPS-only enforcement.',
      'Automated seamless zero-downtime deployment pipelines using GitHub Actions.'
    ],
    lessonsLearned: [
      'VNet isolation combined with Managed Identity and Key Vault eliminates raw secret exposures in production application logs.',
      'Lightweight Node runtimes like Hono drastically reduce serverless cold-start delays compared to heavier legacy web frameworks.'
    ]
  },
  {
    title: 'QA Automation & Testing Framework Portfolio',
    desc: 'Automated software quality assurance portfolio featuring End-to-End (E2E) testing with Cypress, automated API validation with Postman, load testing via JMeter, and Jira test management.',
    tags: ['Cypress', 'Postman', 'JMeter', 'Jira', 'ClickUp', 'API Testing', 'E2E Automation'],
    type: 'qa',
    categoryLabel: 'QA & TEST AUTOMATION',
    url: 'https://github.com/mwaarits/QA-Portofolio',
    image: '/img/project-QA-Portfolio.png',
    problemStatement: 'Manual regression testing across complex web applications leads to deployment delays, untracked edge-case defects, and unverified API endpoint performance under load.',
    solutionContext: 'Constructed a comprehensive testing suite combining Cypress for automated end-to-end browser journeys, Postman test scripts automated via Newman CLI for REST API validation, and JMeter test suites for concurrency and performance benchmarking.',
    resultsMetrics: [
      'Engineered automated test coverage across critical user flows and authentication workflows.',
      'Configured CI-ready Newman API test execution validating status codes, response schemas, and payloads.',
      'Simulated concurrent user traffic in JMeter to benchmark backend throughput and latency under stress.'
    ],
    lessonsLearned: [
      'Automating regression suites early prevents release bottlenecks and ensures rapid defect discovery in agile development cycles.',
      'Decoupling test data fixtures and mocking third-party dependencies eliminates flaky test results.'
    ]
  },
  {
    title: 'PharmaTrack — Pharmacy & Inventory System',
    desc: 'Digital pharmacy supply chain and inventory management platform featuring real-time stock tracking, expiration alerts, supplier management, and secure dispensation audits.',
    tags: ['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Gemini', 'Inventory Management'],
    type: 'dev',
    categoryLabel: 'FULL-STACK & SYSTEMS',
    url: 'https://github.com/mwaarits/PharmaTrack',
    image: '/img/project-Pharmatrack.png',
    problemStatement: 'Pharmacies and clinics face medication stockouts, pharmaceutical batch expiration losses, and auditing challenges without a centralized real-time tracking system.',
    solutionContext: 'Developed PharmaTrack to provide live inventory level tracking, First-Expired First-Out (FEFO) dispensation suggestions, automated reorder thresholds, and strict role-based access control for pharmacy staff.',
    resultsMetrics: [
      'Automated batch expiration tracking to prevent distribution of expired pharmaceuticals.',
      'Complete transaction audit trails for all medicine intake, stock adjustments, and customer dispensations.',
      'High-performance searchable drug catalog with SKU and barcode lookup capabilities.'
    ],
    lessonsLearned: [
      'Database transaction integrity and ACID guarantees are paramount to prevent stock discrepancies during simultaneous purchases.',
      'Designing streamlined, high-contrast dashboards minimizes input errors during rapid point-of-sale operations.'
    ]
  },
  {
    title: 'KopdesGO — Rural Cooperative Management Platform',
    desc: 'Comprehensive cooperative (Koperasi Desa) administration platform providing digitized double-entry ledgers, member savings/loan tracking, and automated financial auditing.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'RBAC', 'Financial Ledger', 'Gemini'],
    type: 'dev',
    categoryLabel: 'FULL-STACK & FINTECH',
    url: 'https://github.com/mwaarits/KopdesGO',
    image: '/img/project-Kopdesgo.png',
    problemStatement: 'Rural cooperatives often depend on manual, paper-based ledger recording, causing accounting errors, delayed loan disbursements, and lack of transparency for cooperative members.',
    solutionContext: 'Engineered KopdesGO to digitize member administration, voluntary and mandatory savings deposits, installment loan management with interest schedules, and instant financial balance sheet generation.',
    resultsMetrics: [
      'Automated calculation and tracking of savings balances, loan installments, and dividend distributions.',
      'Multi-tier role access for cooperative managers, tellers, and village cooperative members.',
      'Generated transparent, audit-ready financial summaries for cooperative meetings.'
    ],
    lessonsLearned: [
      'Financial applications require precise numeric representation and immutable ledger audit records at the data layer.',
      'User interfaces for community tools must be lightweight, responsive, and intuitive for users of all technical proficiencies.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Machine Learning Basics for Beginners',
    issuer: 'Dicoding',
    year: '2026',
    merit: true,
    link: 'https://www.dicoding.com/certificates/JMZV3E2YRPN9',
    type: 'foundation'
  },
  {
    name: 'Getting Started with Python Programming',
    issuer: 'Dicoding',
    year: '2026',
    merit: true,
    link: 'https://www.dicoding.com/certificates/NVP7QL8MOZR0',
    type: 'foundation'
  },
  {
    name: 'Learn JavaScript Programming Basics',
    issuer: 'Dicoding',
    year: '2026',
    merit: true,
    link: 'https://www.dicoding.com/certificates/81P2L1M2JZOY',
    type: 'foundation'
  },
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco / Credly',
    year: '2025',
    merit: true,
    link: 'https://www.credly.com/badges/f3924c36-07a7-4681-8ddf-2213cda73bd9/linked_in_profile',
    type: 'defense'
  },
  {
    name: 'Cyber Security Course — Level Basic',
    issuer: 'ITBOX',
    year: '2025',
    merit: true,
    link: 'https://itbox.id/certificate-verifier/1330E7D25-1333BAAC8-33F893D/',
    type: 'defense'
  },
  {
    name: 'Cyber Security Course — Level Intermediate',
    issuer: 'ITBOX',
    year: '2025',
    merit: true,
    link: 'https://itbox.id/certificate-verifier/1330E7D25-1332C4172-33F893D/',
    type: 'defense'
  },
  {
    name: 'AWS Cloud Practitioner (CLF-C02)',
    issuer: 'DataCamp',
    year: '2026',
    merit: true,
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/619f6db2b67a57936d76d78e4661f4089b942ad0',
    type: 'defense'
  },
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'DataCamp',
    year: '2026',
    merit: true,
    link: 'https://app.datacamp.com/learn/skill-tracks/microsoft-azure-fundamentals-az-900',
    type: 'defense'
  }
];
