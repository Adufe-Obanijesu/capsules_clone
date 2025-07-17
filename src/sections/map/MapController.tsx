import {useContext, useEffect} from "react";
import {AzureMapsContext} from "react-azure-maps";

export default function MapController() {
    const {mapRef, isMapReady} = useContext(AzureMapsContext);

    useEffect(() => {
        if (!mapRef || !isMapReady) return;

        mapRef.setCamera({
            center: [-74.006, 40.7128],
            zoom: 12,
            pitch: 0,
            bearing: 0
        });
    }, [mapRef, isMapReady]);

    return null;
}