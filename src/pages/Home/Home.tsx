import React from 'react';
import AppMap from "../../AppMap/AppMap";

const Home = () => {
    const center: number[] = [41.311081, 69.240562]; // Coordinates for Moscow
    const zoom: number = 10;

    return (
        <div>
            Home
            <AppMap center={center} zoom={zoom}/>
        </div>
    );
};

export default Home;