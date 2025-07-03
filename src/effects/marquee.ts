import gsap from "gsap";

gsap.registerEffect({
    name: "infiniteSlide",
    effect: (targets: any, config: any) => {
        return gsap.to(targets, {
            xPercent: config.xPercent || -100,
            repeat: -1,
            ease: config.ease || "none",
            duration: config.duration || 15,
            ...config
        });
    },
    defaults: {
        xPercent: -100,
        duration: 15,
        ease: "none"
    },
    extendTimeline: true
});

export {}