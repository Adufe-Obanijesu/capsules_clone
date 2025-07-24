import {useRef, useCallback} from 'react'

export function useScrollLock() {
    const lockedRef = useRef(false)

    const preventDefault = (e: Event) => {
        e.preventDefault()
    }
    const preventKeys = (e: KeyboardEvent) => {
        const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']
        if (keys.includes(e.key)) e.preventDefault()
    }

    const disableScroll = useCallback(() => {
        if (lockedRef.current) return
        lockedRef.current = true
        document.addEventListener('wheel', preventDefault, {passive: false})
        document.addEventListener('touchmove', preventDefault, {passive: false})
        document.addEventListener('keydown', preventKeys, {passive: false})

    }, [])

    const enableScroll = useCallback(() => {
        if (!lockedRef.current) return
        lockedRef.current = false
        document.removeEventListener('wheel', preventDefault)
        document.removeEventListener('touchmove', preventDefault)
        document.removeEventListener('keydown', preventKeys)
    }, [])

    return {disableScroll, enableScroll}
}
