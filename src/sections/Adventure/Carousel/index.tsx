import MobileCarousel from "./mobile";
import DesktopCarousel from "./desktop";
import {useMediaQuery} from "react-responsive";

export default function Carousel() {

    const isDesktop = useMediaQuery({minWidth: 1280})

    return (
        <section>
            {
                isDesktop ? <DesktopCarousel/> : <MobileCarousel/>
            }
        </section>
    )
}