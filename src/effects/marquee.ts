import gsap from "gsap";

interface IConfig {
    xPercent?: number,
    x?: number,
    duration?: number,
    ease?: string,
}

gsap.registerEffect({
    name: "infiniteSlide",
    effect: (targets: gsap.TweenTarget, config: IConfig) => {
        return gsap.to(targets, {
            xPercent: config.xPercent || -100,
            x: config.x || -100,
            repeat: -1,
            ease: config.ease || "none",
            duration: config.duration || 15,
            ...config
        });
    },
    defaults: {
        x: 0,
        xPercent: -100,
        duration: 15,
        ease: "none"
    },
    extendTimeline: true
});

export {}