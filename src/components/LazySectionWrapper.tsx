import {useEffect} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

interface Props {
    children: React.ReactNode
    pinning?: boolean
}

export function LazySectionWrapper({children, pinning = false}: Props) {
    useEffect(() => {
        const id = setTimeout(() => {
            ScrollTrigger.refresh();
        }, pinning ? 100 : 0);

        return () => clearTimeout(id);
    }, []);

    return <>{children}</>;
}
