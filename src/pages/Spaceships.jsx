import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function Spaceships() {
    const [ships, setShips] = useState(null)

    let { page } = useParams();
    const url = `https://stapi.co/api/v2/rest/spacecraft/search?pageNumber=${page}&pageSize=50`

    async function getShips() {
        try {
            let res = await axios.get(url);

            setShips(res.data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getShips();
    }, []);

    const loaded = () => {
        if (ships && ships.spacecrafts) { // Check if ships and ships.spacecrafts are not null
            return (
                ships.spacecrafts.map((ship) => (
                    <li key={ship.uid}>{ship.uid} - {ship.name} - {ship.status}</li>
                ))
            );
        }
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return ships ? loaded() : loading();

}

export default Spaceships;