import {cn} from "../utils/tailwind";

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Pill({children, ...props}: PillProps) {
    return (
        <div className={cn("border-[2px] border-lightBrown px-4 py-3 rounded-full", props.className)}>
            {children}
        </div>
    )
}