import {useMediaQuery} from "react-responsive";
import DesktopVersion from "./DesktopVersion.tsx";
import MobileVersion from "./MobileVersion.tsx";

export default function Hero () {

    const isDesktop = useMediaQuery({
        minWidth: 1280
    });

    return isDesktop ? <DesktopVersion /> : <MobileVersion />
};



