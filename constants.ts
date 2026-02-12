import {
  Code2,
  Smartphone,
  Database,
  Cloud,
  Layers,
  Cpu,
  Globe
} from 'lucide-react';
import { ServiceItem, ProjectItem, NavItem, TeamMember, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Web Applications',
    description: 'Scalable, high-performance React & Next.js applications built for enterprise needs.',
    icon: Globe
  },
  {
    title: 'Mobile Engineering',
    description: 'Native-feel iOS and Android experiences using React Native and Flutter.',
    icon: Smartphone
  },
  {
    title: 'Backend Architecture',
    description: 'Robust API design, microservices, and database modeling designed for scale.',
    icon: Database
  },
  {
    title: 'DevOps & Cloud',
    description: 'CI/CD pipelines, Docker containerization, and Kubernetes orchestration.',
    icon: Cloud
  },
  {
    title: 'Design Systems',
    description: 'Unified UI/UX languages that ensure consistency across all your digital products.',
    icon: Layers
  },
  {
    title: 'Technical Strategy',
    description: 'CTO-level consulting to guide your technology roadmap and stack decisions.',
    icon: Cpu
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'finedge-platform',
    title: 'FinEdge Platform',
    client: 'FinEdge Corp',
    tags: ['FinTech', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    description: 'A real-time trading dashboard handling millions of transactions with sub-millisecond latency.',
    category: 'Enterprise',
    fullDescription: 'FinEdge required a complete overhaul of their legacy trading infrastructure. The goal was to build a high-frequency trading dashboard that could visualize complex market data in real-time without compromising performance.',
    challenge: 'The existing system suffered from significant latency issues during market peaks, leading to lost trading opportunities. The UI was cluttered and difficult for traders to parse quickly.',
    solution: 'We architected a WebSocket-based streaming architecture using Node.js and a highly optimized React frontend with Web Workers for off-main-thread data processing. The UI was redesigned with a focus on data density and readability.',
    stack: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'D3.js', 'Redis'],
    gallery: [
      'https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  {
    slug: 'healthstream-ai',
    title: 'HealthStream AI',
    client: 'MedCore',
    tags: ['HealthTech', 'Python', 'AI'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop',
    description: 'Diagnostic assistance tool leveraging computer vision to analyze X-ray data securely.',
    category: 'Enterprise',
    fullDescription: 'MedCore needed a way to assist radiologists in detecting anomalies in X-ray scans more efficiently. Security and accuracy were paramount.',
    challenge: 'Processing high-resolution medical imaging data requires significant computational power, and patient data privacy regulations (HIPAA) imposed strict constraints on data handling.',
    solution: 'We developed a hybrid edge-cloud architecture where initial processing happens locally on secure edge devices. The AI model was trained on a proprietary dataset to achieve 99.8% accuracy in anomaly detection.',
    stack: ['Python', 'TensorFlow', 'React', 'AWS Lambda', 'PostgreSQL'],
    gallery: [
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  {
    slug: 'urban-flow',
    title: 'Urban Flow',
    client: 'SmartCity Initiative',
    tags: ['IoT', 'Go', 'Data Viz'],
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2669&auto=format&fit=crop',
    description: 'City-wide traffic management system visualizing sensor data for urban planners.',
    category: 'Web',
    fullDescription: 'Urban Flow is a visualization tool designed to help city planners understand traffic patterns and optimize infrastructure.',
    challenge: 'Ingesting and visualizing data from thousands of IoT sensors across the city in real-time presented a massive scalability challenge.',
    solution: 'We used Go for high-throughput data ingestion and Mapbox GL JS for rendering interactive, 3D visualizations of traffic flows on the frontend.',
    stack: ['Go', 'TimescaleDB', 'React', 'Mapbox GL', 'Docker'],
    gallery: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop'
    ]
  },
  {
    slug: 'velocita-commerce',
    title: 'Velocita Commerce',
    client: 'Velocita',
    tags: ['E-commerce', 'Next.js', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop',
    description: 'Headless e-commerce solution increasing conversion rates by 40% through performance optimization.',
    category: 'Web',
    fullDescription: 'Velocita wanted to decouple their frontend from their backend to improve site speed and marketing agility.',
    challenge: 'The legacy monolithic platform was slow and difficult to update. Page load times were hurting conversion rates.',
    solution: 'We built a headless storefront using Next.js and Shopify Storefront API. This reduced page load times by 60% and allowed for rapid UI iterations.',
    stack: ['Next.js', 'Shopify API', 'Tailwind CSS', 'Vercel'],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  {
    slug: 'aerospace-ops',
    title: 'AeroSpace Ops',
    client: 'Stellar Dynamics',
    tags: ['Enterprise', 'Rust', 'WebAssembly'],
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2670&auto=format&fit=crop',
    description: 'Mission control dashboard providing real-time telemetry and resource management for satellite arrays.',
    category: 'Enterprise',
    fullDescription: 'Stellar Dynamics needed a reliable, low-latency dashboard to monitor their satellite constellation.',
    challenge: 'The system needed to handle binary telemetry streams and visualize orbital mechanics with zero dropped frames.',
    solution: 'We utilized Rust and WebAssembly to parse binary data directly in the browser, achieving near-native performance for the visualization engine.',
    stack: ['Rust', 'WebAssembly', 'React', 'Three.js', 'gRPC'],
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop'
    ]
  },
  {
    slug: 'cryptovault',
    title: 'CryptoVault',
    client: 'BlockSecure',
    tags: ['Web3', 'Solidity', 'React Native'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2632&auto=format&fit=crop',
    description: 'Non-custodial mobile wallet with multi-chain support and biometric security integration.',
    category: 'Mobile',
    fullDescription: 'BlockSecure aimed to create a user-friendly mobile wallet that didnt compromise on security.',
    challenge: 'Balancing the complexity of blockchain interactions with a simple, intuitive user experience for non-technical users.',
    solution: 'We built a React Native app with a secure key management system protected by device biometrics. The UI abstracts away gas fees and chain switching.',
    stack: ['React Native', 'Ethers.js', 'Solidity', 'Node.js'],
    gallery: [
      'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2555&auto=format&fit=crop'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-serverless',
    title: 'The Future of Serverless Architecture',
    excerpt: "Why we're moving 80% of our production workloads to edge functions, and what we learned along the way.",
    content: `
      <h2>Introduction</h2>
      <p>Serverless architecture has revolutionized how we build and deploy applications. By abstracting away the underlying infrastructure, developers can focus on writing code that delivers value to users.</p>
      <h3>The Shift to the Edge</h3>
      <p>Edge computing pushes this concept even further by running code closer to the user. This reduces latency and improves performance for global applications.</p>
      <blockquote>"The edge is where the action is. It's where the user is."</blockquote>
      <p>We've seen a significant improvement in our Core Web Vitals since migrating our key API routes to edge functions.</p>
    `,
    date: 'Oct 12, 2025',
    author: 'Syed Fahad',
    role: 'Principal Architect',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop',
    readTime: '5 min read'
  },
  {
    id: '2',
    slug: 'designing-dark-mode',
    title: 'Designing for Dark Mode: A Comprehensive Guide',
    excerpt: "It's not just about inverting colors. Learn how to create accessible and visually stunning dark themes.",
    content: `
      <h2>Beyond Inversion</h2>
      <p>Creating a great dark mode experience requires more than just swapping white for black. It involves careful consideration of contrast, saturation, and elevation.</p>
      <h3>Elevation in Dark Mode</h3>
      <p>In light mode, we use shadows to show depth. In dark mode, shadows are often invisible. Instead, we use lighter shades of gray to indicate elevated surfaces.</p>
      <ul>
        <li>Level 0: #121212</li>
        <li>Level 1: #1E1E1E</li>
        <li>Level 2: #222222</li>
      </ul>
    `,
    date: 'Sep 28, 2025',
    author: 'Sarah Miller',
    role: 'Design Director',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&w=2670&auto=format&fit=crop',
    readTime: '7 min read'
  },
  {
    id: '3',
    slug: 'scaling-nextjs',
    title: 'Scaling Next.js to 1 Million Users',
    excerpt: "Optimization techniques, caching strategies, and database patterns for high-scale applications.",
    content: `
      <h2>The Challenge</h2>
      <p>When you hit scale, everything breaks. Database connections saturate, API latencies spike, and build times crawl.</p>
      <h3>Caching Strategy</h3>
      <p>We implemented a multi-layer caching strategy using Redis and Vercel's Data Cache. This allowed us to serve dynamic content with static-like performance.</p>
      <h3>Database Optimization</h3>
      <p>Connection pooling was critical. We switched to using PgBouncer to manage our Postgres connections effectively.</p>
    `,
    date: 'Sep 15, 2025',
    author: 'Alex Chen',
    role: 'Tech Lead',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    readTime: '10 min read'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Alex Chen',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
    bio: 'Ex-Google engineer with 15+ years in distributed systems and cloud infrastructure.',
    social: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    name: 'Sarah Miller',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop',
    bio: 'Award-winning UX specialist focused on human-centric enterprise interfaces.',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Marcus Thorne',
    role: 'Lead DevOps',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop',
    bio: 'Kubernetes contributor and automation obsessive. Ensures 99.99% uptime for clients.',
    social: { github: '#', linkedin: '#' }
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop',
    bio: 'Bridging the gap between complex business requirements and technical execution.',
    social: { linkedin: '#', twitter: '#' }
  }
];