import {useRef} from "react"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import {cn} from "../utils/tailwind.ts";
import type {IconType} from "react-icons";

type Variant = "light-overlay" | "white-overlay" | "white-outline" | "dark"

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

        if (variant !== "white-overlay") {
            timeline.current.to(content, {color: "var(--color-tertiary)"}, "<")
                .to(button, {borderColor: "var(--color-lightBrown)"}, "<")
        }
    }, [])

    const onHover = () => timeline.current?.play()
    const onLeave = () => timeline.current?.reverse(0)

    const baseStyles =
        "w-9.5 h-9.5 rounded-full relative border-[1px] flex justify-center items-center overflow-hidden cursor-pointer"

    const variantStyles = {
        "light-overlay": "border-lightBrown bg-transparent text-lightBrown",
        "white-overlay": "border-lightBrown bg-lightBrown text-darkBrown",
        "white-outline": "border-white bg-transparent text-white",
        "dark": "border-tertiary bg-tertiary text-white",
    }

    const overlayStyles = {
        "light-overlay": "bg-lightBrown",
        "white-overlay": "bg-white",
        "white-outline": "bg-lightBrown",
        "dark": "bg-lightBrown",
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
                    "overlay absolute h-full w-full scale-0 rounded-full",
                    overlayStyles[variant], {"scale-100": isActive}
                )}
            />
            <div className="content relative z-10">{children}</div>
        </button>
    )
}

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    className?: string,
    Icon: IconType,
    minimizeOnMobile?: boolean
}

export function IconButton({text, Icon, className, minimizeOnMobile = false, ...props}: IconButtonProps) {
    return (
        <button
            className={cn("bg-gray-100 h-11 rounded-full p-[3px] flex justify-center items-center cursor-pointer group text-sm", className, {"xl:bg-transparent xl:p-0": minimizeOnMobile})} {...props}>
            <div
                className={cn("ml-4 mr-2 text-darkBrown text-sm overflow-hidden relative w-full", {"hidden xl:block": minimizeOnMobile})}>
                <div
                    className="w-full group-hover:-translate-y-full transition duration-300 ease-in-out">{text}
                </div>
                <div
                    className="absolute w-full group-hover:-translate-y-full transition duration-300 ease-in-out">{text}
                </div>
            </div>
            <div
                className={cn("h-full aspect-square bg-darkBrown rounded-full w-11 flex justify-center items-center text-lightBrown", {"bg-white text-tertiary": minimizeOnMobile})}>
                <Icon fontSize={24}/>
            </div>
        </button>
    )
}

export function CursorButton({text, Icon, ...props}: IconButtonProps) {
    return (
        <button type="button"
                className="bg-gray-100/90  rounded-full p-3 flex justify-center items-center cursor-pointer text-sm" {...props}>
            <div
                className="ml-2 mr-1 text-darkBrown text-sm w-full">
                <div
                    className="w-full">{text}
                </div>
            </div>
            <div
                className="h-full aspect-square bg-gray-50 rounded-full w-20 flex justify-center items-center text-tertiary">
                <Icon fontSize={24}/>
            </div>
        </button>
    )
}