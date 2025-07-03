import {cn} from "../utils/tailwind.ts";

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Pill({children, ...props}: PillProps) {
    return (
        <div className={cn("border-[2px] border-lightBrown px-[20px] py-[12px] rounded-full", props.className)}>
            {children}
        </div>
    )
}