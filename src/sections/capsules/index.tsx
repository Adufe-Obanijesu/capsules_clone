import {useMediaQuery} from "react-responsive";
import DesktopVersion from "./desktop/DesktopVersion";
import MobileVersion from "./mobile/MobileVersion";

export default function Capsules() {

    const isDesktop = useMediaQuery({minWidth: 1280})

    return (
        isDesktop ? <DesktopVersion/> : <MobileVersion/>
    )
}