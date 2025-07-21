import Marquee from "./Marquee.tsx";
import SubTitle from "../../components/SubTitle.tsx";
import {socials} from "../../data/footer.ts";
import Link from "./Link.tsx";
import AnimatedUnderlineText from "../../components/AnimatedUnderlineText.tsx";
import AnimatedButton from "../../components/Button.tsx";
import FooterLogo from "../../components/FooterLogo.tsx";
import type {IReserveProps} from "../../types/Reserve.ts";
import {menus} from "../../data/menu.ts";

export default function Footer({setIsOpen}: Omit<IReserveProps, "isOpen">) {
    return (
        <footer className="pb-1 relative">
            <div
                className="absolute top-0 left-0 z-0 bg-gradient-to-b from-tertiary to-middleBrown w-full h-full"/>

            <div className="px-8 space-y-8 relative z-1">
                <h2 className="sub-heading text-lightBrown">
                    Interested in an amazing adventure?
                    <br/>Reserve one of our Capsules®
                </h2>

                <Marquee setIsOpen={setIsOpen}/>

                <div
                    className="md:flex md:flex-row-reverse md:justify-between md:items-center md:leading-[2.2vw] md:text-[1.9vw] text-[20px] leading-[22px]">
                    <div className="mt-[50px] md:mt-0 flex flex-col -space-y-">
                        {
                            menus.slice(0, menus.length - 1).map(link => <Link link={link} key={link.id}/>)
                        }
                    </div>
                    <div className="text-lightBrown py-[30px] md:py-0 md:w-[28ch]"><p
                        className="xl:sm-text md-text leading-[1]">This
                        website is just a
                        concept work done by-Moyra to showcase our capabilities.</p>
                        <div className="mt-5 xl:sm-text md-text leading-[1]">If you would like to outsource a similar
                            website
                            project-
                            <a href="https://moyra.co/" aria-label="Contact us" target="_blank"
                               rel="noopener noreferrer">
                                <AnimatedUnderlineText id="closer-underlined" color="white" hoverColor="lightBrown"
                                                       aria-label="Contact us">
                                    contact us.
                                </AnimatedUnderlineText>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex items-center">
                        {
                            socials.map(({id, Icon, href, name}) => (
                                    <a href={href} key={id} aria-label={name} target="_blank" rel="noopener noreferrer">
                                        <AnimatedButton variant="white-outline"
                                                        className="h-14 w-14 xl:h-10 xl:w-10" aria-label={name}><Icon
                                            className="xl:text-xl text-2xl"/></AnimatedButton>
                                    </a>
                                )
                            )
                        }
                    </div>

                    <SubTitle classes="text-lightBrown xl:block hidden">
                        Meet Capsules®—modern and cozy
                        <br/>houses, in the California desert.
                    </SubTitle>
                </div>

                <hr className="border-white -mx-8"/>

                <div className="flex flex-col gap-0.5 justify-between xl:text-sm xl:flex-row">
                <span
                    className="text-lightBrown">Website made by-<a href="https://moyra.co/"
                                                                   aria-label="Visit Moyra.co website" target="_blank"
                                                                   rel="noopener noreferrer"><AnimatedUnderlineText
                    id="footer-brand">Moyra.co</AnimatedUnderlineText></a>
            </span>
                    <span
                        className="hidden md:block text-lightBrown">This website is using <span
                        className="text-white">cookies.</span></span><span
                    className="text-lightBrown">All rights reserved © <span
                    className="text-white"> 2025</span></span></div>

                <FooterLogo/>
            </div>

            <div id="footer-link-overlay"
                 className="fixed top-0 left-0 h-screen w-screen bg-tertiary z-101 pointer-events-none opacity-0"/>
        </footer>
    )
}