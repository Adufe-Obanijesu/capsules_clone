import {useEffect, useRef, useState} from 'react'
import Lenis from '@studio-freight/lenis'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default function useLenis(hasLoaded: boolean, options = {}) {
    const lenisRef = useRef<Lenis>(null)
    const [lenis, setLenis] = useState<Lenis | null>(null)

    const defaultOptions = {
        duration: 1.2,
        smooth: true,
        touchMultiplier: 2,
        ...options
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const lenis = new Lenis(defaultOptions)
        lenisRef.current = lenis
        setLenis(lenis)

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        return () => {
            lenis.destroy()
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000)
            })
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    useEffect(() => {
        if (!lenisRef.current) return
        if (hasLoaded) lenisRef.current.start()
        else lenisRef.current.stop()
    }, [hasLoaded]);

    return lenis
}