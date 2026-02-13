import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSanityQuery } from '../../hooks/useSanity';
import { caseStudiesQuery, urlFor } from '../../lib/sanity';
import type { SanityCaseStudy } from '../../types';

const CaseStudies: React.FC = () => {
    const { data: cases, loading, error } = useSanityQuery<SanityCaseStudy[]>(caseStudiesQuery);

    return (
        <div className="pt-32 pb-20 container mx-auto px-6 md:px-12 min-h-screen">
            <div className="mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
                <p className="text-xl text-slate-500 max-w-2xl">
                    Deep dives into our engineering challenges and design solutions.
                </p>
            </div>

            {/* Loading */}
            {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-pulse bg-white rounded-2xl overflow-hidden border border-slate-200">
                            <div className="aspect-video bg-slate-200" />
                            <div className="p-8">
                                <div className="h-4 bg-slate-200 rounded w-1/4 mb-3" />
                                <div className="h-6 bg-slate-200 rounded w-3/4 mb-3" />
                                <div className="h-4 bg-slate-200 rounded w-full mb-6" />
                                <div className="flex gap-2">
                                    <div className="h-6 bg-slate-200 rounded-full w-20" />
                                    <div className="h-6 bg-slate-200 rounded-full w-16" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Error */}
            {error && (
                <div className="text-center py-20">
                    <p className="text-red-500 mb-2">Failed to load case studies</p>
                    <p className="text-slate-400 text-sm">{error}</p>
                </div>
            )}

            {/* Content */}
            {!loading && !error && (
                <>
                    {cases && cases.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cases.map((study) => (
                                <Link
                                    to={`/work/${study.slug.current}`}
                                    key={study._id}
                                    className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="aspect-video relative overflow-hidden">
                                        {study.mainImage ? (
                                            <img
                                                src={urlFor(study.mainImage).width(800).quality(80).url()}
                                                alt={study.mainImage.alt || study.title}
                                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                                decoding="async"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                                                <span className="text-slate-300 text-sm">No Image</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div className="p-8">
                                        <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">
                                            {study.category}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                                            {study.title}
                                        </h3>
                                        <p className="text-slate-500 mb-6 leading-relaxed">
                                            {study.description}
                                        </p>

                                        {study.stats && study.stats.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {study.stats.map((stat, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-100">
                                                        {stat}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex items-center text-slate-900 font-bold group-hover:text-indigo-600 transition-colors">
                                            Read Case Study <ArrowUpRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-slate-400">No case studies published yet.</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default CaseStudies;
