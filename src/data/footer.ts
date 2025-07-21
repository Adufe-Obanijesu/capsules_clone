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
        name: "LinkedIn profile",
        Icon: LiaLinkedin,
        href: "https://www.linkedin.com/company/moyra"
    },
    {
        id: 2,
        name: "Instagram profile",
        Icon: FaInstagram,
        href: "https://www.instagram.com/moyra_lab"
    },
    {
        id: 3,
        name: "Dribbble profile",
        Icon: FaDribbble,
        href: "https://dribbble.com/moyra-co"
    },
    {
        id: 4,
        name: "Behance profile",
        Icon: FaBehance,
        href: "https://www.behance.net/moyra-co"
    },
]