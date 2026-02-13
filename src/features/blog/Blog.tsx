import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSanityQuery } from '../../hooks/useSanity';
import { allPostsQuery, urlFor } from '../../lib/sanity';
import type { SanityBlogPost } from '../../types';

const Blog: React.FC = () => {
    const { data: posts, loading, error } = useSanityQuery<SanityBlogPost[]>(allPostsQuery);

    return (
        <div className="pt-32 pb-20 container mx-auto px-6 md:px-12 min-h-screen">
            <div className="mb-16 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Thoughts & Insights</h1>
                <p className="text-xl text-slate-500">
                    Engineering patterns, design philosophies, and lessons from the trenches.
                </p>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden animate-pulse">
                            <div className="aspect-video bg-slate-100" />
                            <div className="p-8 space-y-4">
                                <div className="h-3 bg-slate-100 rounded w-1/3" />
                                <div className="h-6 bg-slate-100 rounded w-full" />
                                <div className="h-4 bg-slate-100 rounded w-2/3" />
                                <div className="h-4 bg-slate-100 rounded w-1/2" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="text-center py-20">
                    <p className="text-slate-500 text-lg mb-4">Unable to load blog posts.</p>
                    <p className="text-slate-400 text-sm">{error}</p>
                </div>
            )}

            {/* Posts Grid */}
            {!loading && !error && posts && posts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link to={`/blog/${post.slug.current}`} key={post._id} className="group block">
                            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 h-full flex flex-col">
                                {/* Image */}
                                <div className="aspect-video relative overflow-hidden">
                                    {post.mainImage ? (
                                        <img
                                            src={urlFor(post.mainImage).width(800).quality(80).url()}
                                            alt={post.mainImage.alt || post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                                            <span className="text-slate-300 text-sm">No Image</span>
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-600 rounded-full text-xs font-bold border border-indigo-100 shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'Draft'}
                                        </div>
                                        {post.readTime && (
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </div>
                                        )}
                                    </div>

                                    <h2 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-500 mb-8 leading-relaxed line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                                                <User className="w-4 h-4 text-slate-400" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-slate-900 leading-none">{post.author}</span>
                                                {post.authorRole && (
                                                    <span className="text-[10px] text-slate-400">{post.authorRole}</span>
                                                )}
                                            </div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            )}

            {/* Empty State */}
            {!loading && !error && posts && posts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-slate-500 text-lg">No blog posts yet. Create one in the <Link to="/studio" className="text-indigo-600 font-bold hover:underline">Studio Dashboard</Link>.</p>
                </div>
            )}
        </div>
    );
};

export default Blog;
