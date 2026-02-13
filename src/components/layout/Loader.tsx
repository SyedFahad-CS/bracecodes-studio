import React, { useEffect, useState } from 'react';
import { Layers } from 'lucide-react';

interface LoaderProps {
    onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Slight delay before unmounting
                    return 100;
                }
                // Random increment for realistic feel
                const increment = Math.random() * 12;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-100 bg-black flex flex-col items-center justify-center text-white transition-opacity duration-700">

            {/* Central Content */}
            <div className="flex flex-col items-center space-y-8">

                {/* Animated Logo Stack */}
                <div className="relative w-16 h-16 flex items-center justify-center animate-bounce-subtle">
                    <Layers className="w-16 h-16 text-indigo-500 absolute top-0 left-0 opacity-50 translate-y-2" />
                    <Layers className="w-16 h-16 text-indigo-400 absolute top-0 left-0 opacity-75 translate-y-1" />
                    <Layers className="w-16 h-16 text-white relative z-10" />
                </div>

                {/* Text */}
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold tracking-[0.3em] uppercase">
                        Bracecodes Studio
                    </h1>
                </div>

                {/* Progress Section */}
                <div className="w-64 space-y-2">
                    <div className="flex justify-center text-indigo-400 font-mono font-bold">
                        {Math.round(progress)}%
                    </div>

                    {/* Progress Bar */}
                    <div className="h-0.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-indigo-500 transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Subtext */}
                <div className="text-slate-500 text-xs font-mono tracking-widest animate-pulse">
                    FIRING UP THE ENGINES...
                </div>

            </div>
        </div>
    );
};

export default Loader;
