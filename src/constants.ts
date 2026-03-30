import {
  Code2,
  Smartphone,
  Database,
  Cloud,
  Layers,
  Cpu,
  Globe
} from 'lucide-react';
import { ServiceItem, NavItem, TeamMember, BlogPost } from './types';

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
    name: 'Raqib Yousf',
    role: 'Senior Software Engineer',
    image: 'https://res.cloudinary.com/dhwrnmpds/image/upload/v1774874203/raqib_dltjmx.jpg',
    bio: 'Specializing in building scalable web and mobile applications.',
    social: { twitter: '#', linkedin: 'https://www.linkedin.com/in/raqib-yousuf/', github: '#' }
  },
  {
    name: 'Sajad Mir',
    role: 'UI/UX Developer',
    image: 'https://res.cloudinary.com/dhwrnmpds/image/upload/v1774874791/491865992_1257116289175154_195062758135064820_n_tibeki.jpg',
    bio: 'Award-winning UX specialist focused on human-centric enterprise interfaces.',
    social: { linkedin: 'https://www.linkedin.com/in/sajad-mir-270041106/', twitter: '#' }
  },
  {
    name: 'Aayash Ahmad',
    role: 'Software Developer',
    image: 'https://res.cloudinary.com/dhwrnmpds/image/upload/v1774874565/1748609766145_hhhvlg.jpg',
    bio: 'Specializing in building scalable web and mobile applications.',
    social: { github: '#', linkedin: 'https://www.linkedin.com/in/aayash-ahmad-185036242/' }
  },
  {
    name: 'Syed Fahad',
    role: 'Junior Software Engineer',
    image: 'https://res.cloudinary.com/dhwrnmpds/image/upload/v1774334600/WhatsApp_Image_2025-08-30_at_14.10.23_912f508c_c0djyl.jpg',
    bio: 'Specializing in building scalable web and mobile applications',
    social: { linkedin: 'https://www.linkedin.com/in/syed-fahad-cs/', github: 'https://github.com/syedfahad-cs' }
  }
];