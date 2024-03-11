import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Animals() {
    const [animals, setAnimals] = useState(null)

    let { page } = useParams();
    const url = `https://stapi.co/api/v1/rest/animal/search?pageNumber=${page}&pageSize=50
    `

    async function getAnimals() {
        try {
            let res = await axios.get(url);

            setAnimals(res.data);
            

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAnimals();
    }, [page]);

    const loaded = () => {
      if (animals) { // Check if episodes and episodes.episodes are not null
          let prevPage = Number(page) - 1;
          let nextPage = Number(page) + 1;
          let prevPagePath;
          if (prevPage <= 0){
          prevPagePath = `/animals/0`;
          } else{
            prevPagePath = `/animals/${prevPage}`;
          }

          let nextPagePath = `/animals/${nextPage}`;
  
          return (
              <> 
                  <ul>
                      {animals.animals.map((animal) => (
                          <li key={animal.uid}>
                              <span>{animal.name}</span>
                          </li>
                      ))}
                  </ul>
                  <div className="pagination">
                      <Link to={prevPagePath}>PREV</Link>
                      <Link to={nextPagePath}>NEXT</Link>
                  </div>
              </> 
          );
      }
  };
    

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return animals ? loaded() : loading();

}

export default Animals;