import {
  Smartphone,
  Database,
  Cloud,
  Layers,
  Cpu,
  Globe
} from 'lucide-react';
import { ServiceItem } from './types';

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
