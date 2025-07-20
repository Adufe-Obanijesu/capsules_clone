import {cn} from "../utils/tailwind.ts";

interface Props {
    children: React.ReactNode;
    classes?: string;
}

export default function SubTitle({children, classes}: Props) {
    return (
        <span className={cn("text-xs", classes)}>
            {children}
        </span>
    )
}