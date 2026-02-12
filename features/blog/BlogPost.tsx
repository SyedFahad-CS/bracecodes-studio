import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import { useSanityQuery } from '../../hooks/useSanity';
import { postBySlugQuery, urlFor } from '../../lib/sanity';
import type { SanityBlogPostFull } from '../../types';

const portableTextComponents: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) return null;
            return (
                <figure className="my-12">
                    <img
                        src={urlFor(value).width(1200).quality(90).url()}
                        alt={value.alt || ''}
                        className="rounded-2xl shadow-lg w-full"
                    />
                    {value.caption && (
                        <figcaption className="text-center text-sm text-slate-500 mt-3">{value.caption}</figcaption>
                    )}
                </figure>
            );
        },
        code: ({ value }) => (
            <pre className="bg-slate-900 text-slate-100 rounded-xl p-6 overflow-x-auto my-8">
                <code className={`language-${value.language || 'text'} text-sm`}>
                    {value.code}
                </code>
            </pre>
        ),
    },
    marks: {
        link: ({ children, value }) => (
            <a href={value.href} className="text-indigo-600 hover:text-indigo-700 underline" target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
        code: ({ children }) => (
            <code className="bg-slate-100 text-indigo-600 px-1.5 py-0.5 rounded text-sm font-mono">
                {children}
            </code>
        ),
    },
    block: {
        h2: ({ children }) => <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4 tracking-tight">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-3 tracking-tight">{children}</h3>,
        h4: ({ children }) => <h4 className="text-xl font-bold text-slate-900 mt-8 mb-3">{children}</h4>,
        normal: ({ children }) => <p className="text-slate-600 leading-8 mb-6">{children}</p>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-indigo-500 bg-indigo-50/50 py-2 px-6 rounded-r-lg my-8 not-italic">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-6 text-slate-600">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-600">{children}</ol>,
    },
};

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { data: post, loading, error } = useSanityQuery<SanityBlogPostFull>(
        postBySlugQuery,
        { slug }
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Loading State
    if (loading) {
        return (
            <div className="min-h-screen bg-white pt-32 animate-pulse">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="h-4 bg-slate-100 rounded w-32 mb-8" />
                    <div className="h-8 bg-slate-100 rounded w-2/3 mb-4" />
                    <div className="h-12 bg-slate-100 rounded w-full mb-8" />
                    <div className="h-4 bg-slate-100 rounded w-1/2 mb-12" />
                </div>
                <div className="container mx-auto px-6 max-w-5xl mb-20">
                    <div className="aspect-video bg-slate-100 rounded-2xl" />
                </div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
                <p className="text-slate-500 mb-8">The article you're looking for doesn't exist or has been moved.</p>
                <Link to="/blog" className="text-indigo-600 font-bold hover:underline">
                    Back to Blog
                </Link>
            </div>
        );
    }

    const formattedDate = post.date
        ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        : 'Draft';

    return (
        <article className="min-h-screen bg-white">
            {/* Minimal Header */}
            <div className="pt-32 pb-12 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-8 transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Insights
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                {post.category}
                            </span>
                            <span className="text-slate-400 text-sm">•</span>
                            {post.readTime && <span className="text-slate-500 text-sm font-medium">{post.readTime}</span>}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-between border-b border-slate-100 pb-8 mb-12">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                                    <User className="w-6 h-6 text-slate-400" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{post.author}</div>
                                    <div className="text-slate-500 text-xs flex items-center gap-2">
                                        {post.authorRole && <span>{post.authorRole}</span>}
                                        {post.authorRole && <span>•</span>}
                                        <span>{formattedDate}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Featured Image */}
            {post.mainImage && (
                <div className="container mx-auto px-6 max-w-5xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src={urlFor(post.mainImage).width(1600).quality(90).url()}
                            alt={post.mainImage.alt || post.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            )}

            {/* Content Body - Portable Text */}
            <div className="container mx-auto px-6 max-w-3xl pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="prose prose-lg prose-slate max-w-none"
                >
                    {post.content && (
                        <PortableText value={post.content} components={portableTextComponents} />
                    )}
                </motion.div>

                <div className="mt-16 pt-8 border-t border-slate-100">
                    <div className="bg-slate-50 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                        <div className="w-20 h-20 rounded-full bg-slate-200 flex-shrink-0 mx-auto md:mx-0 overflow-hidden">
                            <User className="w-full h-full p-4 text-slate-400" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Written by {post.author}</h4>
                            <p className="text-slate-600 mb-4">{post.authorRole || 'Team Member'}. Passionate about building scalable systems and crafting intuitive user experiences.</p>
                            <button className="text-indigo-600 font-bold text-sm hover:underline">Follow Author</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-slate-50 border-t border-slate-200 py-24">
                <div className="container mx-auto px-6 max-w-2xl text-center">
                    <h3 className="text-3xl font-bold mb-4 font-display">Stay in the loop</h3>
                    <p className="text-slate-500 mb-8 text-lg">Detailed engineering insights, delivered to your inbox.</p>
                    <div className="flex gap-3">
                        <input type="email" placeholder="email@example.com" className="flex-1 px-5 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg" />
                        <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">Subscribe</button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
