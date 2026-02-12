import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import ScrollReveal from '../../components/animations/ScrollReveal';
import RevealText from '../../components/animations/RevealText';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '../../types';

const CATEGORIES: ('All' | ProjectItem['category'])[] = ['All', 'Web', 'Mobile', 'Enterprise'];

const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectItem['category']>('All');

  const filteredProjects = PROJECTS.filter(project =>
    activeCategory === 'All' ? true : project.category === activeCategory
  ).slice(0, 6);

  return (
    <section className="py-32 bg-slate-50 relative border-t border-slate-200">
      {/* Background decoration - matching Team.tsx style */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="text-indigo-600 font-semibold tracking-wider uppercase mb-4 block">Selected Works</span>
            </ScrollReveal>
            <RevealText
              as="h2"
              className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6"
            >
              Engineering precision.
            </RevealText>
            <ScrollReveal delay={200}>
              <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
                We build digital products that define brands and drive growth. A showcase of our finest work.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <Link
              to="/work"
              className="group text-slate-900 font-semibold flex items-center gap-3 transition-all cursor-pointer bg-white px-6 py-3 rounded-full border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md"
            >
              <span>View Full Archive</span>
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
            </Link>
          </ScrollReveal>
        </div>

        {/* Filter Controls */}
        <div className="mb-16 animate-[fadeIn_0.5s_0.4s_forwards] opacity-0 flex justify-center md:justify-start">
          <div className="flex-wrap gap-2 bg-white p-1.5 rounded-full border border-slate-200 shadow-sm inline-flex">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === category
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 max-w-7xl mx-auto"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer block relative rounded-[2.5rem]"
              // Removed onMouseEnter and onMouseLeave as per previous instruction (Step 25)
              >
                <Link to={`/work/${project.slug}`} className="block h-full">
                  {/* Image/Video Container */}
                  <div className="relative aspect-[3/2] rounded-[2rem] overflow-hidden mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)]">

                    {/* Base Image */}
                    <img
                      src={`${project.image}?w=800&q=80`}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`} // Removed conditional opacity for video
                      decoding="async"
                    />

                    {/* Removed Hover Video Preview as per previous instruction (Step 25) */}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* View Project Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/95 backdrop-blur-sm text-slate-900 px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl flex items-center gap-2">
                        View Case Study <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 text-sm mb-3 font-medium tracking-wide uppercase opacity-70">{project.client}</p>
                      <p className="text-slate-600 leading-relaxed text-base max-w-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* Floating Action Icon */}
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-white shadow-sm">
                      <ArrowUpRight className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;