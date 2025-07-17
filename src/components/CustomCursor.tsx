import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {useRef} from "react";
import {cn} from "../utils/tailwind.ts";

interface CustomCursorProps {
    children: React.ReactNode;
    cursorHide?: boolean;
    cursor: React.ReactNode;
    block?: boolean
}

export default function CustomCursor({
                                         children,
                                         cursorHide = true,
                                         cursor,
                                         block = false
                                     }: CustomCursorProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const isHovering = useRef(false);

    useGSAP(() => {
        const container = containerRef.current;
        const cursorElement = cursorRef.current;

        if (!container || !cursorElement) return;

        gsap.set(cursorElement, {
            opacity: 0,
            scale: 0.5,
            xPercent: -50,
            yPercent: -50,
            pointerEvents: 'none'
        });

        const handleMouseMove = (e: MouseEvent) => {
            if (isHovering.current) {
                gsap.to(cursorElement, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.1,
                    ease: "power2.out"
                });
            }
        };

        const handleMouseEnter = () => {
            isHovering.current = true;
            gsap.to(cursorElement, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        };

        const handleMouseLeave = () => {
            isHovering.current = false;
            gsap.to(cursorElement, {
                opacity: 0,
                scale: 0.5,
                duration: 0.2,
                ease: "power2.in"
            });
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="relative">
            <div
                ref={containerRef}
                className={cn("relative inline-block", {"block": block})}
                style={{
                    cursor: cursorHide ? 'none' : 'auto'
                }}
            >
                {children}
            </div>

            <div
                ref={cursorRef}
                className="fixed top-0 left-0 z-50 pointer-events-none"
            >
                {cursor}
            </div>
        </div>
    );
};