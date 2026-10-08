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
    desc: 'Multi-layer VPN security system for a simulated B2B FinTech inter-bank network. Combines fwknop dark network, WireGuard mesh tunnels, and Rosenpass ML-KEM-1024 key rotation to protect transaction traffic from current threats and future quantum attacks, with a React monitoring dashboard.',
    tags: ['Azure', 'WireGuard', 'Rosenpass', 'Post-Quantum Crypto', 'ML-KEM-1024', 'fwknop', 'Prometheus & Grafana', 'React'],
    type: 'cloud',
    categoryLabel: 'CLOUD & NETWORK SECURITY',
    url: 'https://github.com/mwaarits/PQC-VPN',
    image: '/img/project-PQC.png'
  },
  {
    title: 'Retrieval Augmented Generation (RAG) Web App',
    desc: 'Local RAG Q&A app: upload PDF/TXT/MD documents, chunk and embed with Gemini, store in ChromaDB, then ask questions with hybrid BM25 + vector search. Features per-user data isolation, auth, and grounded answers with source citations.',
    tags: ['Python', 'Gemini AI', 'ChromaDB', 'Docker', 'FastAPI', 'Azure Container Apps', 'Terraform', 'GitHub Actions'],
    type: 'cloud',
    categoryLabel: 'CLOUD & AI PLATFORM',
    url: 'https://github.com/mwaarits/Retrieval-Augmented-Generation',
    image: '/img/project-RAG.png'
  },
  {
    title: 'Web3 Escrow Bug Bounty Platform',
    desc: 'On-chain bug bounty platform on BOT Chain (EVM) connecting builders with security researchers via smart contract escrow. Bounties are funded in escrow, reports are hash-committed on-chain, then paid out or refunded with admin dispute resolution and full audit trail.',
    tags: ['Solidity', 'React', 'Hono', 'Viem', 'PostgreSQL', 'Azure App Service', 'GitHub Actions', 'BOT Chain (EVM)'],
    type: 'dev',
    categoryLabel: 'FULL-STACK & CLOUD',
    url: 'https://github.com/mwaarits/BugChain',
    image: '/img/project-Bugchain.png'
  },
  {
    title: 'Quality Assurance Portfolio',
    desc: 'Comprehensive QA portfolio covering manual and automation testing — from test plans and test cases to execution reports — plus API testing using tools such as Cypress, Katalon Studio, and Postman.',
    tags: ['Cypress', 'Katalon Studio', 'Postman', 'JMeter', 'Manual Testing', 'API Testing'],
    type: 'qa',
    categoryLabel: 'QA & TEST AUTOMATION',
    url: 'https://www.mentorqa.com/portfolio/mohammad-waarits-harahap',
    image: '/img/project-QA-Portfolio.png',
    linkLabel: 'VIEW PORTFOLIO'
  },
  {
    title: 'PharmaTrack — Pharmacy & Inventory System',
    desc: 'Modern hybrid pharmacy e-commerce and Mini POS platform for digital pharmacies. Provides product catalog and checkout, automated inventory alerts, AI-powered health consultation, and streamlined sales tracking.',
    tags: ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'Gemini'],
    type: 'dev',
    categoryLabel: 'FULL-STACK & SYSTEMS',
    url: 'https://github.com/mwaarits/PharmaTrack',
    image: '/img/project-Pharmatrack.png'
  },
  {
    title: 'KopdesGO — Rural Cooperative Management Platform',
    desc: 'Digital Koperasi Desa platform for member transparency and participation. Provides member dashboard, village job listings, e-voting, cooperative financial transparency, and a Gemini-powered WhatsApp assistant via Fonnte and Supabase Edge Functions.',
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Gemini 2.5 Flash', 'Fonnte', 'Tailwind CSS'],
    type: 'dev',
    categoryLabel: 'FULL-STACK & FINTECH',
    url: 'https://github.com/mwaarits/KopdesGO',
    image: '/img/project-Kopdesgo.png'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Machine Learning Basics for Beginners',
    issuer: 'Dicoding',
    year: '2024',
    merit: true,
    link: 'https://www.dicoding.com/certificates/JMZV3E2YRPN9',
    type: 'foundation'
  },
  {
    name: 'Getting Started with Python Programming',
    issuer: 'Dicoding',
    year: '2024',
    merit: true,
    link: 'https://www.dicoding.com/certificates/NVP7QL8MOZR0',
    type: 'foundation'
  },
  {
    name: 'Learn JavaScript Programming Basics',
    issuer: 'Dicoding',
    year: '2025',
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
    year: '2023',
    merit: true,
    link: 'https://itbox.id/certificate-verifier/1330E7D25-1333BAAC8-33F893D/',
    type: 'defense'
  },
  {
    name: 'Cyber Security Course — Level Intermediate',
    issuer: 'ITBOX',
    year: '2023',
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
