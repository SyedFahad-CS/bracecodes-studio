import { useState } from 'react';
import ScrollReveal from '../../components/animations/ScrollReveal';
import RevealText from '../../components/animations/RevealText';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSanityQuery } from '../../hooks/useSanity';
import { featuredProjectsQuery, urlFor, srcSetFor, defaultSizes } from '../../lib/sanity';
import type { SanityProject } from '../../types';

const CATEGORIES = ['All', 'Web', 'Mobile', 'Enterprise'] as const;
type Category = (typeof CATEGORIES)[number];

const padIndex = (i: number) => String(i + 1).padStart(2, '0');

const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const { data: projects, loading, error } = useSanityQuery<SanityProject[]>(featuredProjectsQuery);

  const filteredProjects = (projects ?? []).filter(project =>
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  const heroProject = filteredProjects[0];
  const restProjects = filteredProjects.slice(1);

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-indigo-200/20 rounded-full blur-[120px] -translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-200/15 rounded-full blur-[100px] translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-xs block mb-6 bg-indigo-50 inline-block px-4 py-1.5 rounded-full border border-indigo-100">
                Selected Works
              </span>
            </ScrollReveal>
            <RevealText
              as="h2"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-[1.05] mb-6"
              stagger={0.03}
            >
              Engineering precision.
            </RevealText>
            <ScrollReveal delay={200}>
              <p className="text-xl text-slate-500 leading-relaxed font-light max-w-lg">
                We build digital products that define brands and drive growth. A showcase of our finest work.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <Link
              to="/work"
              className="group text-slate-900 font-semibold flex items-center gap-3 transition-all cursor-pointer bg-white px-6 py-3 rounded-full border border-slate-200 hover:border-indigo-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-300"
            >
              <span>View Full Archive</span>
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
            </Link>
          </ScrollReveal>
        </div>

        {/* Filter Controls */}
        <ScrollReveal delay={300}>
          <div className="mb-20 flex justify-center md:justify-start w-full">
            <div className="inline-flex flex-nowrap gap-1.5 bg-white p-1.5 rounded-full border border-slate-200 shadow-sm mx-auto md:mx-0">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap
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
        </ScrollReveal>

        {/* Loading Skeleton */}
        {loading && (
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="animate-pulse">
              <div className="aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] bg-slate-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/3] rounded-[2.5rem] bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20 max-w-7xl mx-auto">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-12 max-w-md mx-auto">
              <p className="text-red-500 font-semibold mb-2">Failed to load projects</p>
              <p className="text-slate-400 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Projects */}
        {!loading && !error && (
          <AnimatePresence mode="popLayout">
            <motion.div layout className="max-w-7xl mx-auto">
              {/* Hero Card */}
              {heroProject && (
                <ScrollReveal>
                  <motion.div
                    layout
                    key={heroProject._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link
                      to={`/work/${heroProject.slug.current}`}
                      className="group relative block rounded-[2.5rem] overflow-hidden aspect-[16/9] md:aspect-[21/9] mb-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] transition-all duration-700 hover:-translate-y-1"
                    >
                      {/* Image */}
                      {heroProject.mainImage ? (
                        <img
                          src={urlFor(heroProject.mainImage).width(1600).quality(90).url()}
                          srcSet={srcSetFor(heroProject.mainImage, [800, 1200, 1600, 2000], 85)}
                          sizes="100vw"
                          alt={heroProject.mainImage.alt || heroProject.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-slate-200" />
                      )}

                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

                      {/* Ghost Number */}
                      <span className="absolute top-6 left-8 md:top-10 md:left-12 text-6xl md:text-8xl font-black text-white/[0.07] select-none leading-none tracking-tighter">
                        01
                      </span>

                      {/* Category Badge */}
                      <div className="absolute top-6 right-8 md:top-10 md:right-12">
                        <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/20 uppercase tracking-widest">
                          {heroProject.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-2xl">
                          <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-3">{heroProject.client}</p>
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
                            {heroProject.title}
                          </h3>
                          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-5 max-w-xl font-light">
                            {heroProject.description}
                          </p>

                          {/* Tags — revealed on hover */}
                          {heroProject.tags && heroProject.tags.length > 0 && (
                            <div className="flex gap-2 flex-wrap translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                              {heroProject.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 text-[10px] font-bold text-white/80 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg uppercase tracking-widest">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Hover Arrow */}
                      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </Link>
                  </motion.div>
                </ScrollReveal>
              )}

              {/* Remaining Projects — Pairs Grid */}
              {restProjects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {restProjects.map((project, i) => (
                    <ScrollReveal key={project._id} delay={i * 100}>
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <Link
                          to={`/work/${project.slug.current}`}
                          className="group relative block rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1"
                        >
                          {/* Image */}
                          {project.mainImage ? (
                            <img
                              src={urlFor(project.mainImage).width(800).quality(85).url()}
                              srcSet={srcSetFor(project.mainImage)}
                              sizes={defaultSizes}
                              alt={project.mainImage.alt || project.title}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                              decoding="async"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-slate-200" />
                          )}

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                          {/* Ghost Number */}
                          <span className="absolute top-5 left-6 md:top-8 md:left-8 text-5xl md:text-7xl font-black text-white/[0.07] select-none leading-none tracking-tighter">
                            {padIndex(i + 1)}
                          </span>

                          {/* Category Badge */}
                          <div className="absolute top-5 right-6 md:top-8 md:right-8">
                            <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md text-white text-[9px] font-bold rounded-full border border-white/20 uppercase tracking-widest">
                              {project.category}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                            <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{project.client}</p>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight leading-tight">
                              {project.title}
                            </h3>

                            {/* Tags — revealed on hover */}
                            {project.tags && project.tags.length > 0 && (
                              <div className="flex gap-1.5 flex-wrap translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 mt-3">
                                {project.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="px-2.5 py-0.5 text-[9px] font-bold text-white/80 bg-white/10 backdrop-blur-sm border border-white/10 rounded-md uppercase tracking-widest">
                                    {tag}
                                  </span>
                                ))}
                                {project.tags.length > 3 && (
                                  <span className="px-2.5 py-0.5 text-[9px] font-bold text-white/50">
                                    +{project.tags.length - 3}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Hover Arrow */}
                          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                            <ArrowUpRight className="w-4 h-4 text-white" />
                          </div>
                        </Link>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Empty State */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-20 max-w-7xl mx-auto">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-16 max-w-md mx-auto shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-6">
                <ArrowUpRight className="w-8 h-8 text-slate-300" />
              </div>
              <p className="text-slate-500 text-lg font-medium mb-2">No projects found</p>
              <p className="text-slate-400 text-sm">Try selecting a different category.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
