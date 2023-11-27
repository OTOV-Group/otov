import React, {useEffect, useState} from 'react';
import AppMap from "../../AppMap/AppMap";
import $host from "../../http";

const Home = () => {
    const [ coords,  setCoords ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const center: number[] = [41.311081, 69.240562];
    const zoom: number = 10;

    const fetchData = async () => {
        try {
            const { data } = await $host.get("/jobs/");
            setCoords(data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if(loading) {
        return null;
    }

    return (
        <div>
            Home
            <AppMap center={center} zoom={zoom} coords={coords}/>
        </div>
    );
};

export default Home;