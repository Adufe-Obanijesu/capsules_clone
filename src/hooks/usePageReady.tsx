import {useEffect, useState} from "react";

export function usePageReady() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const waitForFonts = document.fonts.ready;

        const heroAssets = new Promise<void>((resolve) => {
            const img = document.querySelector("#hero-background") as HTMLImageElement;
            if (!img || img.complete) return resolve();
            img.addEventListener("load", () => resolve());
            img.addEventListener("error", () => resolve());
        });

        const chunksLoaded = new Promise<void>((resolve) => {
            requestIdleCallback(() => resolve());
        });

        Promise.all([waitForFonts, heroAssets, chunksLoaded]).then(() => {
            setReady(true);
        });
    }, []);

    return ready;
}
