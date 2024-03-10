import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Episodes() {
    const [episodes, setEpisodes] = useState(null)

    let { page } = useParams();
    const url = `https://stapi.co/api/v1/rest/episode/search?pageNumber=${page}&pageSize=25`

    async function getEpisodes() {
        try {
            let res = await axios.get(url);

            setEpisodes(res.data);
            

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getEpisodes();
    }, [page]);

    const loaded = () => {
      if (episodes && episodes.episodes) { // Check if episodes and episodes.episodes are not null
          let prevPage = Number(page) - 1;
          let nextPage = Number(page) + 1;
  
          if (prevPage <= 0){
            let prevPagePath = `/episodes/${prevPage}`;
          }
          let prevPagePath = `/episodes/${prevPage}`;
          let nextPagePath = `/episodes/${nextPage}`;
  
          return (
              <> 
                  <ul>
                      {episodes.episodes.map((episode) => (
                          <li key={episode.uid}>
                              <span>{episode.title}</span>
                              <span>{episode.season.title}</span>
                              <span>{episode.series.title}</span>
                              <span>{episode.usAirDate}</span>
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

    return episodes ? loaded() : loading();

}

export default Episodes;