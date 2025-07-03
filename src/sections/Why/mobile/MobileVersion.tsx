import {useGSAP} from "@gsap/react";
import Marquee from "./Marquee.tsx";
import {why} from "../../../data/why.ts";
import Card from "./Card.tsx";

export default function MobileVersion() {

    useGSAP()

    return (
        <section className="text-white padding-x">
            <div className="space-y-8">

                <p className="text-xs padding-x">
                    Want to learn more about <br/>
                    the benefits of—Capsules®?
                </p>

                <Marquee/>

                <div className="space-y-4">
                    {
                        why.map((item) => <Card key={item.id} details={item}/>)
                    }
                </div>
            </div>
        </section>
    )
}