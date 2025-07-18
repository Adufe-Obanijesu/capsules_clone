import type {ICapsule} from "../data/capsules.ts";

export interface IReserveProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IReserveContext {
    isOpenReserve: boolean,
    setIsOpenReserve: React.Dispatch<React.SetStateAction<boolean>>
    selectedCapsule: ICapsule,
    setSelectedCapsule: React.Dispatch<React.SetStateAction<ICapsule>>
}