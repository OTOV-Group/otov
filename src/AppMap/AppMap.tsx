import React, {useEffect, useRef} from 'react';

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
    const mapRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        if (!mapRef) {
            return;
        }

        const ymapsScript = document.createElement('script');
        ymapsScript.src = 'https://api-maps.yandex.ru/2.1/?apikey=f6555a0f-da41-4e7f-8436-87b6d9bd2211&lang=en_US';
        ymapsScript.onload = () => {
            window.ymaps.ready(initMap);
        };

        const currentMapRef = mapRef.current; // Capture the current value
        currentMapRef.appendChild(ymapsScript);

        const initMap = () => {
            const map = new window.ymaps.Map('map', {
                center: center,
                zoom: zoom,
                controls: ['zoomControl', 'geolocationControl', 'typeSelector', 'fullscreenControl']
            });

            map.options.set({
                suppressMapOpenBlock: true,
                yandexMapDisablePoiInteractivity: true
            });

            const myPlacemark = new window.ymaps.Placemark(center, {
                hintContent: 'A custom placemark',
                balloonContent: 'This is a Yandex Marker!',
            });

            map.geoObjects.add(myPlacemark);
        };

        return () => {
            if (currentMapRef) {
                currentMapRef.removeChild(ymapsScript);
            }
        };
    }, [center, zoom]);


    return <div ref={mapRef} id="map" style={{ height: '500px', width: '100%' }} />;
};

export default YandexMap;
