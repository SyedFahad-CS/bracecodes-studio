import { useState } from 'react';
import ScrollReveal from '@/shared/components/animations/ScrollReveal';
import RevealText from '@/shared/components/animations/RevealText';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSanityQuery } from '@/shared/hooks/useSanity';
import { getOptimizedImageUrl } from '@/shared/utils/image';
import { allProjectsQuery as localAllProjectsQuery } from '../api/queries';
import type { SanityProject } from '../types';

const AllWorks: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const { data: projects, loading, error } = useSanityQuery<SanityProject[]>(localAllProjectsQuery);

  // Extract unique tags for filter from live data
  const allTags = ['All', ...Array.from(new Set((projects ?? []).flatMap(p => p.tags ?? [])))];

  const filteredProjects = filter === 'All'
    ? (projects ?? [])
    : (projects ?? []).filter(p => (p.tags ?? []).includes(filter));

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <span className="text-indigo-600 font-semibold tracking-wider uppercase mb-4 block">Our Portfolio</span>
          </ScrollReveal>
          <RevealText
            as="h1"
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8"
            stagger={0.04}
          >
            Engineered for impact.
          </RevealText>
          <ScrollReveal delay={200}>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              Explore our archive of enterprise-grade applications, scalable platforms, and digital experiences shipped for global clients.
            </p>
          </ScrollReveal>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/2] rounded-2xl bg-slate-200 mb-8" />
                <div className="h-6 bg-slate-200 rounded w-1/2 mb-3" />
                <div className="h-4 bg-slate-200 rounded w-3/4" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-500 mb-2">Failed to load projects</p>
            <p className="text-slate-400 text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Filters */}
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-2 mb-16">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setFilter(tag)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === tag
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                      : 'bg-white text-slate-500 hover:bg-white hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                      }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project._id} delay={index * 100}>
                  <Link to={`/work/${project.slug.current}`} className="group cursor-pointer block">
                    {/* Image Container */}
                    <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
                      {project.mainImage ? (
                        <img
                          src={getOptimizedImageUrl(project.mainImage, 1000, 85)}
                          alt={project.mainImage.alt || project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          decoding="async"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                          <span className="text-slate-300 text-sm">No Image</span>
                        </div>
                      )}
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />

                      {/* Hover Floating Button */}
                      <div className="absolute bottom-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                        <ArrowUpRight className="w-6 h-6 text-slate-900" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{project.client}</span>
                      </div>

                      <p className="text-slate-600 leading-relaxed max-w-lg">
                        {project.description}
                      </p>

                      {project.tags && project.tags.length > 0 && (
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1.5 text-[10px] font-bold text-slate-600 bg-linear-to-b from-slate-50 to-slate-100 border border-slate-200 rounded-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] uppercase tracking-widest">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="py-20 text-center text-slate-400">
                No projects found for this category.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllWorks;
