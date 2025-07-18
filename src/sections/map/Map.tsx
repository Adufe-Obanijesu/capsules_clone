import {AuthenticationType, AzureMap, AzureMapsProvider, type IAzureMapOptions} from "react-azure-maps";
import MapController from "./MapController.tsx";
import 'azure-maps-control/dist/atlas.min.css'

const option: IAzureMapOptions = {
    authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: import.meta.env.VITE_PRIMARY_KEY
    },
}
export default function MapSection() {
    return (

        <AzureMapsProvider>
            <div style={{height: '100vh', width: "100vw", position: "absolute", left: 0, top: 0}}>
                <AzureMap options={option}/>
                <MapController/>
            </div>
        </AzureMapsProvider>
    )
}