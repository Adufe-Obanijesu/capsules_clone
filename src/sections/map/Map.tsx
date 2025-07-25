import {JSX, useEffect, useState} from "react";

export default function MapSection({open}: { open: boolean }) {
    const [MapComponent, setMapComponent] = useState<JSX.Element | null>(null);

    useEffect(() => {
        if (!open) return;

        const loadMap = async () => {
            const [
                {AzureMap, AzureMapsProvider, AuthenticationType},
                {default: MapController},
            ] = await Promise.all([
                import("react-azure-maps"),
                import("./MapController.tsx"),
            ]);

            await import("azure-maps-control/dist/atlas.min.css");

            const option = {
                authOptions: {
                    authType: AuthenticationType.subscriptionKey,
                    subscriptionKey: import.meta.env.VITE_PRIMARY_KEY,
                },
            };

            setMapComponent(
                <AzureMapsProvider>
                    <div
                        style={{
                            height: "100vh",
                            width: "100vw",
                            position: "absolute",
                            left: 0,
                            top: 0,
                        }}
                    >
                        {
                            open && <AzureMap options={option}/>
                        }

                        <MapController/>
                    </div>
                </AzureMapsProvider>
            );
        };

        loadMap();
    }, [open]);

    return <>{MapComponent}</>;
}
