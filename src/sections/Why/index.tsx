import {useMediaQuery} from "react-responsive";
import DesktopVersion from "./desktop/DesktopVersion.tsx";
import MobileVersion from "./mobile/MobileVersion.tsx";

export default function Why() {
    const isDesktop = useMediaQuery({minWidth: 1280})

    return (
        isDesktop ? <DesktopVersion/> : <MobileVersion/>
    )
}