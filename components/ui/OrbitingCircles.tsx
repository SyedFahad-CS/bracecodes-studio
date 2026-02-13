import React from 'react';

interface OrbitingCirclesProps {
    className?: string;
    children?: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    delay?: number;
    radius?: number;
    path?: boolean;
    iconSize?: number;
    speed?: number;
}

const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
    className = '',
    children,
    reverse = false,
    duration = 20,
    delay = 10,
    radius = 160,
    path = true,
    iconSize = 30,
    speed = 1,
}) => {
    const calculatedDuration = duration / speed;
    const childArray = React.Children.toArray(children);
    const count = childArray.length;

    return (
        <>
            <style>{`
                @keyframes orbit {
                    0% { transform: rotate(0deg) translateX(var(--radius)) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg); }
                }
                @keyframes orbit-reverse {
                    0% { transform: rotate(0deg) translateX(var(--radius)) rotate(0deg); }
                    100% { transform: rotate(-360deg) translateX(var(--radius)) rotate(360deg); }
                }
            `}</style>

            {path && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                >
                    <circle
                        className="stroke-slate-200/60"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                    />
                </svg>
            )}

            {childArray.map((child, index) => {
                const angleOffset = (360 / count) * index;

                return (
                    <div
                        key={index}
                        className={`absolute flex items-center justify-center ${className}`}
                        style={
                            {
                                '--radius': `${radius}px`,
                                '--icon-size': `${iconSize}px`,
                                width: `${iconSize}px`,
                                height: `${iconSize}px`,
                                top: '50%',
                                left: '50%',
                                marginTop: `-${iconSize / 2}px`,
                                marginLeft: `-${iconSize / 2}px`,
                                animation: `${reverse ? 'orbit-reverse' : 'orbit'} ${calculatedDuration}s linear infinite`,
                                animationDelay: `-${(calculatedDuration / count) * index}s`,
                            } as React.CSSProperties
                        }
                    >
                        <div
                            className="flex items-center justify-center rounded-xl bg-white shadow-lg border border-slate-100"
                            style={{
                                width: `${iconSize + 14}px`,
                                height: `${iconSize + 14}px`,
                            }}
                        >
                            {child}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default OrbitingCircles;
