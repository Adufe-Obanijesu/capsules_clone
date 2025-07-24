import type {ICapsule} from "../data/capsules.ts";
import type Lenis from "@studio-freight/lenis";

export interface IReserveProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IContext {
    isOpenReserve: boolean,
    setIsOpenReserve: React.Dispatch<React.SetStateAction<boolean>>
    selectedCapsule: ICapsule,
    setSelectedCapsule: React.Dispatch<React.SetStateAction<ICapsule>>,
    lenis: Lenis | null
}