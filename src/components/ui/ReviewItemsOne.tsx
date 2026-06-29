import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data';

function ReviewItemsOne() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isPaused = useRef(false);
    const scrollPosition = useRef(0);

    // Dupliquer les témoignages pour garantir un défilement suffisamment long
    const items = [...testimonials, ...testimonials];

    // Continuous scroll effect (défilement vers le bas)
    useEffect(() => {
        const speed = 0.5; // pixels per frame
        const container = containerRef.current;
        if (!container) return;

        if (container.children.length === 0) return;

        let totalHeight = 0;
        for (let i = 0; i < items.length; i++) {
            totalHeight += (container.children[i] as HTMLElement).offsetHeight + 16;
        }

        // Start one full set above
        scrollPosition.current = totalHeight;

        const loop = () => {
            if (!isPaused.current) {
                scrollPosition.current -= speed;

                // When fully moved upward by one set, reset back
                if (scrollPosition.current <= 0) {
                    scrollPosition.current = totalHeight;
                }

                container.style.transform = `translateY(-${scrollPosition.current}px)`;
            }
            requestAnimationFrame(loop);
        };

        const reqId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(reqId);
    }, [items.length]);

    const handleMouseEnter = () => {
        isPaused.current = true;
    };

    const handleMouseLeave = () => {
        isPaused.current = false;
    };

    return (
        <div className="overflow-hidden h-[600px] relative">
            <div
                ref={containerRef}
                className="space-y-4 max-w-xs"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* First set of cards */}
                {items.map((item, index) => (
                    <div
                        key={`first-${index}-${item.id}`}
                        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl mx-2 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between"
                        style={{
                            boxShadow: `0px 12px 40px rgba(0, 0, 0, 0.2), 0px 20px 60px rgba(0, 0, 0, 0.1)`
                        }}
                    >
                        <div className="flex space-x-1 mb-4">
                            {Array.from({ length: item.rating }).map((_, i) => (
                                <Star key={i} size={14} className="text-amber-500 fill-amber-500" />
                            ))}
                        </div>
                        <p className="text-sm text-neutral-200 font-sans font-light leading-relaxed italic mb-6">
                            "{item.text}"
                        </p>
                        <div className="border-t border-white/10 pt-4">
                            <div className="flex items-center space-x-3.5">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="h-11 w-11 rounded-full object-cover border border-white/20 shrink-0"
                                    loading="lazy"
                                />
                                <div>
                                    <h3 className="font-serif text-sm font-bold text-white">
                                        {item.name}
                                    </h3>
                                    <p className="text-[10px] text-neutral-300 font-sans uppercase font-bold tracking-wider">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {items.map((item, index) => (
                    <div
                        key={`second-${index}-${item.id}`}
                        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl mx-2 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between"
                        style={{
                            boxShadow: `0px 12px 40px rgba(0, 0, 0, 0.2), 0px 20px 60px rgba(0, 0, 0, 0.1)`
                        }}
                    >
                        <div className="flex space-x-1 mb-4">
                            {Array.from({ length: item.rating }).map((_, i) => (
                                <Star key={i} size={14} className="text-amber-500 fill-amber-500" />
                            ))}
                        </div>
                        <p className="text-sm text-neutral-200 font-sans font-light leading-relaxed italic mb-6">
                            "{item.text}"
                        </p>
                        <div className="border-t border-white/10 pt-4">
                            <div className="flex items-center space-x-3.5">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="h-11 w-11 rounded-full object-cover border border-white/20 shrink-0"
                                    loading="lazy"
                                />
                                <div>
                                    <h3 className="font-serif text-sm font-bold text-white">
                                        {item.name}
                                    </h3>
                                    <p className="text-[10px] text-neutral-300 font-sans uppercase font-bold tracking-wider">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewItemsOne;
