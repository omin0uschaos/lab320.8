import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Characters() {
    const [characters, setCharacters] = useState(null)

    let { page } = useParams();
    const url = `https://stapi.co/api/v1/rest/character/search?pageNumber=${page}&pageSize=50`

    async function getCharacters() {
        try {
            let res = await axios.get(url);

            setCharacters(res.data);
            

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCharacters();
    }, [page]);

    const loaded = () => {
      if (characters) { // Check if episodes and episodes.episodes are not null
          let prevPage = Number(page) - 1;
          let nextPage = Number(page) + 1;
  
          if (prevPage <= 0){
            let prevPagePath = `/characters/${prevPage}`;
          }
          let prevPagePath = `/characters/${prevPage}`;
          let nextPagePath = `/characters/${nextPage}`;
  
          return (
              <> 
                  <ul>
                      {characters.characters.map((character) => (
                          <li key={character.uid}>
                              <span>{character.name}</span>
                              <span>{character.gender}</span>
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

    return characters ? loaded() : loading();

}

export default Characters;