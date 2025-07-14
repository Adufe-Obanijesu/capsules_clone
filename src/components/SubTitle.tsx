import {cn} from "../utils/tailwind.ts";

interface Props {
    children: React.ReactNode;
    classes?: string;
}

export default function SubTitle({children, classes}: Props) {
    return (
        <h6 className={cn("text-xs", classes)}>
            {children}
        </h6>
    )
}