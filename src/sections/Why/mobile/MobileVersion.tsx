import {useGSAP} from "@gsap/react";
import {why} from "../../../data/why";
import Card from "../Card";

export default function MobileVersion() {

    useGSAP()

    return (
        <div id="why" className="padding-x">
            <div className="space-y-4">
                {
                    why.map((item) => <Card key={item.id} whys={why} details={item}/>)
                }
            </div>
        </div>
    )
}