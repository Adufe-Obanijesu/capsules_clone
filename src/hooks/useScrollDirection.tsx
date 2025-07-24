import {useEffect, useRef, useCallback} from 'react'

interface ScrollDirectionCallbacks {
    onScrollUp?: () => void
    onScrollDown?: () => void
}

interface ScrollDirectionOptions {
    threshold?: number // Minimum distance/delta to trigger callback
    debounceMs?: number // Debounce time in milliseconds
}

export default function useScrollDirection(
    callbacks: ScrollDirectionCallbacks,
    options: ScrollDirectionOptions = {}
) {
    const {
        threshold = 1,
        debounceMs = 16 // ~60fps
    } = options

    const lastScrollY = useRef(0)
    const lastTouchY = useRef(0)
    const debounceTimeout = useRef<number>(null)

    const {onScrollUp, onScrollDown} = callbacks

    // Debounced callback execution
    const executeCallback = useCallback((direction: 'up' | 'down') => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current)
        }

        debounceTimeout.current = setTimeout(() => {
            if (direction === 'up' && onScrollUp) {
                onScrollUp()
            } else if (direction === 'down' && onScrollDown) {
                onScrollDown()
            }
        }, debounceMs)
    }, [onScrollUp, onScrollDown, debounceMs])

    // Determine scroll direction and execute callback
    const handleScrollDirection = useCallback((currentY: number, previousY: number, delta?: number) => {
        const diff = delta !== undefined ? delta : currentY - previousY

        if (Math.abs(diff) < threshold) return

        if (diff > 0) {
            executeCallback('down')
        } else if (diff < 0) {
            executeCallback('up')
        }
    }, [threshold, executeCallback])

    useEffect(() => {
        // Handle wheel events (mouse wheel, trackpad)
        const handleWheel = (e: WheelEvent) => {
            const delta = e.deltaY
            handleScrollDirection(0, 0, delta)
        }

        // Handle keyboard events
        const handleKeydown = (e: KeyboardEvent) => {
            let direction: 'up' | 'down' | null = null

            switch (e.key) {
                case 'ArrowUp':
                case 'PageUp':
                case 'Home':
                    direction = 'up'
                    break
                case 'ArrowDown':
                case 'PageDown':
                case 'End':
                case ' ': // Spacebar
                    direction = 'down'
                    break
                case 'ArrowLeft':
                case 'ArrowRight':
                    // Horizontal scrolling - you can customize this behavior
                    return
            }

            if (direction) {
                executeCallback(direction)
            }
        }

        // Handle touch events (mobile/tablet)
        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length === 1) {
                lastTouchY.current = e.touches[0].clientY
            }
        }

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length === 1) {
                const currentY = e.touches[0].clientY
                const diff = lastTouchY.current - currentY // Inverted for natural scroll direction

                if (Math.abs(diff) > threshold) {
                    handleScrollDirection(0, 0, diff)
                    lastTouchY.current = currentY
                }
            }
        }

        // Handle programmatic scrolling
        const handleScroll = () => {
            const currentY = window.scrollY
            handleScrollDirection(currentY, lastScrollY.current)
            lastScrollY.current = currentY
        }

        // Add event listeners
        window.addEventListener('wheel', handleWheel, {passive: true})
        window.addEventListener('keydown', handleKeydown)
        window.addEventListener('touchstart', handleTouchStart, {passive: true})
        window.addEventListener('touchmove', handleTouchMove, {passive: true})
        window.addEventListener('scroll', handleScroll, {passive: true})

        // Initialize scroll position
        lastScrollY.current = window.scrollY

        // Cleanup
        return () => {
            window.removeEventListener('wheel', handleWheel)
            window.removeEventListener('keydown', handleKeydown)
            window.removeEventListener('touchstart', handleTouchStart)
            window.removeEventListener('touchmove', handleTouchMove)
            window.removeEventListener('scroll', handleScroll)

            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current)
            }
        }
    }, [handleScrollDirection, executeCallback])

}