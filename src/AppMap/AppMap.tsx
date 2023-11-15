import React, { useEffect } from 'react';

// Define the props type
interface YandexMapProps {
    center: number[]; // [latitude, longitude]
    zoom: number;
}

declare global {
    interface Window {
        ymaps: {
            ready: (callback: () => void) => void;
            Map: new (id: string, options: { center: number[]; zoom: number, controls: string[]; }) => any;
            Placemark: new (coordinates: number[], properties?: any, options?: any) => any;
        };
    }
}

const YandexMap: React.FC<YandexMapProps> = ({ center, zoom }) => {
    useEffect(() => {
        const ymapsScript = document.createElement('script');
        ymapsScript.src = 'https://api-maps.yandex.ru/2.1/?apikey=f6555a0f-da41-4e7f-8436-87b6d9bd2211&lang=en_US';
        ymapsScript.onload = () => {
            window.ymaps.ready(initMap);
        };
        document.body.appendChild(ymapsScript);

        const initMap = () => {
            const map = new window.ymaps.Map('map', {
                center: center,
                zoom: zoom,
                controls: ['zoomControl', 'geolocationControl', 'typeSelector', 'fullscreenControl'] // Exclude 'trafficControl' from this list
            });

            map.options.set({
                suppressMapOpenBlock: true,
                yandexMapDisablePoiInteractivity: true // This option might help in disabling interactivity with the POIs.
            });

            const myPlacemark = new window.ymaps.Placemark(center, {
                hintContent: 'A custom placemark',
                balloonContent: 'This is a Yandex Marker!',
            });

            map.geoObjects.add(myPlacemark);
        };

        return () => {
            document.body.removeChild(ymapsScript);
        };
    }, [center, zoom]);

    return <div id="map" style={{ height: '500px', width: '100%' }} />;
};

export default YandexMap;
