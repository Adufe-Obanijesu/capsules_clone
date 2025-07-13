import {useRef} from "react"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import {cn} from "../utils/tailwind.ts";

type Variant = "light-overlay" | "white-overlay"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: Variant
    isActive?: boolean
}

export default function AnimatedButton({
                                           children,
                                           className,
                                           variant = "light-overlay",
                                           isActive = false,
                                           ...props
                                       }: AnimatedButtonProps) {
    const btnRef = useRef<HTMLButtonElement>(null)
    const timeline = useRef<gsap.core.Timeline | null>(null)

    useGSAP(() => {
        const button = btnRef.current
        if (!button) return

        const overlay = button.querySelector(".overlay")
        const content = button.querySelector(".content")

        if (!overlay || !content) return

        timeline.current = gsap.timeline({paused: true, defaults: {duration: 0.25}})
            .fromTo(overlay, {scale: 0}, {scale: 1, ease: "power2.in"})

        if (variant === "light-overlay") {
            timeline.current.to(content, {color: "var(--color-tertiary)"}, "<")
        }
    }, [])

    const onHover = () => timeline.current?.play()
    const onLeave = () => timeline.current?.reverse(0)

    const baseStyles =
        "w-9.5 h-9.5 rounded-full relative border-[1px] flex justify-center items-center overflow-hidden cursor-pointer"

    const variantStyles = {
        "light-overlay": "border-lightBrown bg-transparent text-lightBrown",
        "white-overlay": "border-lightBrown bg-lightBrown text-darkBrown",
    }

    const overlayStyles = {
        "light-overlay": "bg-lightBrown",
        "white-overlay": "bg-white",
    }

    return (
        <button
            ref={btnRef}
            {...props}
            onMouseEnter={(e) => {
                onHover()
                props.onMouseEnter?.(e)
            }}
            onMouseLeave={(e) => {
                onLeave()
                props.onMouseLeave?.(e)
            }}
            className={cn(baseStyles, variantStyles[variant], className)}
        >
            <div
                className={cn(
                    "overlay absolute h-full w-full scale-0 rounded-full will-change-transform",
                    overlayStyles[variant], {"scale-100": isActive}
                )}
            />
            <div className="content relative z-10">{children}</div>
        </button>
    )
}
