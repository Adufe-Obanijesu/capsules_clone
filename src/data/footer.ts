import {LiaLinkedin} from "react-icons/lia";
import {FaBehance, FaDribbble, FaInstagram} from "react-icons/fa6";

export interface IFooterLink {
    id: number,
    name: string,
    href: string,
}

export const footerLinks: IFooterLink[] = [
    {
        id: 1,
        name: "Welcome",
        href: "#"
    },
    {
        id: 2,
        name: "Introduction",
        href: "#"
    },
    {
        id: 3,
        name: "Houses",
        href: "#"
    },
    {
        id: 4,
        name: "Why Capsules®",
        href: "#"
    },
    {
        id: 5,
        name: "Activities",
        href: "#"
    },
    {
        id: 6,
        name: "Feedback",
        href: "#"
    },
]

export const socials = [
    {
        id: 1,
        Icon: LiaLinkedin
    },
    {
        id: 2,
        Icon: FaInstagram
    },
    {
        id: 3,
        Icon: FaDribbble
    },
    {
        id: 4,
        Icon: FaBehance
    },
]