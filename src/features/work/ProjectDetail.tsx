import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ScrollReveal from '../../components/animations/ScrollReveal';
import RevealText from '../../components/animations/RevealText';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { useSanityQuery } from '../../hooks/useSanity';
import { projectBySlugQuery, allProjectsQuery, urlFor } from '../../lib/sanity';
import type { SanityProjectFull, SanityProject } from '../../types';

const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    const { data: project, loading, error } = useSanityQuery<SanityProjectFull>(
        projectBySlugQuery,
        { slug }
    );

    // Fetch all projects for "next project" navigation
    const { data: allProjects } = useSanityQuery<SanityProject[]>(allProjectsQuery);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Loading state
    if (loading) {
        return (
            <div className="bg-slate-50 min-h-screen pt-32">
                <div className="container mx-auto px-6 md:px-12 animate-pulse">
                    <div className="h-4 bg-slate-200 rounded w-32 mb-8" />
                    <div className="max-w-4xl">
                        <div className="h-8 bg-slate-200 rounded w-1/4 mb-6" />
                        <div className="h-12 bg-slate-200 rounded w-3/4 mb-6" />
                        <div className="h-6 bg-slate-200 rounded w-1/2 mb-20" />
                    </div>
                    <div className="aspect-video rounded-2xl bg-slate-200 mb-20" />
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Failed to load project</h2>
                    <p className="text-slate-400 mb-6">{error}</p>
                    <Link to="/work" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2 justify-center">
                        <ArrowLeft className="w-4 h-4" /> Back to Work
                    </Link>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Not Found</h2>
                    <Link to="/work" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2 justify-center">
                        <ArrowLeft className="w-4 h-4" /> Back to Work
                    </Link>
                </div>
            </div>
        );
    }

    // Find next project for navigation
    const projects = allProjects ?? [];
    const currentIndex = projects.findIndex(p => p.slug.current === slug);
    const nextProject = projects.length > 0
        ? projects[(currentIndex + 1) % projects.length]
        : null;

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <Link to="/work" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span className="text-xs font-bold tracking-widest uppercase">Back to All Works</span>
                    </Link>

                    <div className="max-w-4xl">
                        <ScrollReveal>
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-indigo-100">
                                    {project.category}
                                </span>
                                <span className="h-1 w-1 rounded-full bg-slate-300" />
                                <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">
                                    {project.client}
                                </span>
                            </div>
                        </ScrollReveal>

                        <RevealText
                            as="h1"
                            className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight"
                            stagger={0.02}
                        >
                            {project.title}
                        </RevealText>

                        <ScrollReveal delay={200}>
                            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl font-light">
                                {project.fullDescription || project.description}
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Main Image */}
            <section className="px-4 md:px-8 mb-20">
                <div className="container mx-auto max-w-7xl">
                    <ScrollReveal delay={300}>
                        <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl shadow-indigo-900/5 relative aspect-video md:aspect-21/9">
                            {project.mainImage ? (
                                <img
                                    src={urlFor(project.mainImage).width(1600).quality(95).url()}
                                    alt={project.mainImage.alt || project.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                                    <span className="text-slate-300">No Image</span>
                                </div>
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Content Grid */}
            <section className="container mx-auto px-6 md:px-12 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

                    {/* Left Column: Stats & Stack - Sticky */}
                    <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-8">
                        <ScrollReveal delay={400}>
                            <div>
                                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Layers className="w-3.5 h-3.5" /> Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {(project.stack || project.tags || []).map(tech => (
                                        <span key={tech} className="px-3 py-1.5 bg-white text-slate-600 text-xs font-medium rounded-full border border-slate-200 shadow-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="w-full h-px bg-slate-200" />

                        <ScrollReveal delay={500}>
                            <div>
                                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Cpu className="w-3.5 h-3.5" /> Services Provided
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                                        <span>UI/UX Design</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                                        <span>Full Stack Development</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                                        <span>Cloud Architecture</span>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Narrative */}
                    <div className="lg:col-span-8 space-y-20">
                        {project.challenge && (
                            <ScrollReveal delay={400}>
                                <div className="prose prose-slate max-w-none">
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">The Challenge</h3>
                                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light text-justify">
                                        {project.challenge}
                                    </p>
                                </div>
                            </ScrollReveal>
                        )}

                        {project.solution && (
                            <ScrollReveal delay={500}>
                                <div className="prose prose-slate max-w-none">
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">The Solution</h3>
                                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light text-justify">
                                        {project.solution}
                                    </p>
                                </div>
                            </ScrollReveal>
                        )}

                        {/* Dynamic Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <div className="space-y-6">
                                {project.gallery.map((img, idx) => (
                                    <ScrollReveal key={idx} delay={600}>
                                        <div className={`rounded-2xl overflow-hidden shadow-md ${idx % 3 === 0 ? 'aspect-21/9' : 'aspect-video'}`}>
                                            <img
                                                src={urlFor(img).width(1200).quality(90).url()}
                                                alt={img.alt || `${project.title} detail ${idx + 1}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Next Project Navigation */}
            {nextProject && (
                <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
                    <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">Next Case Study</p>
                        <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">{nextProject.title}</h2>
                        <Link
                            to={`/work/${nextProject.slug.current}`}
                            className="group inline-flex items-center gap-3 text-lg font-medium transition-all duration-300"
                        >
                            <span className="border-b border-white group-hover:border-indigo-400 group-hover:text-indigo-400 transition-colors pb-1">View Project</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-indigo-400" />
                        </Link>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProjectDetail;
