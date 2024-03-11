import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


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
    }, [page]);

    const loaded = () => {
        if (ships && ships.spacecrafts) {
            let prevPage = Number(page) - 1;
            let nextPage = Number(page) + 1;
            let prevPagePath;
            if(prevPage <= 0){
                prevPagePath = `/spaceships/0`;
            } else {
                prevPagePath = `/spaceships/${prevPage}`;
            }
            let nextPagePath = `/spaceships/${nextPage}`;
            return (
              <>
                <ul>
                    {ships.spacecrafts.map((ship) => (
                        <li key={ship.uid}>
                            <span>{ship.uid}</span>
                            <span>{ship.name}</span>
                            <span>{ship.status}</span>
                        </li>
                    ))}
                </ul>
                <div className="pagination">
                    <Link to={prevPagePath} disabled={prevPage < 1}>PREV</Link>
                    <Link to={nextPagePath}>NEXT</Link>
                </div>
            </>
            );
        }
    };
    

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return ships ? loaded() : loading();

}

export default Spaceships;