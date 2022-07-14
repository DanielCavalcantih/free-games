import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSpecificGame } from "../services/fetchApi";
import '../styles/game.css';

function Game() {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [images, setImages] = useState([])
  const [indexImage, setIndexImage] = useState(0);
  const [gameRequirements, setGameRequirements] = useState({})

  useEffect(() => {
    const getResponse = async () => {
      const response = await fetchSpecificGame(id);
      const { graphics, memory, os, processor, storage } = response.minimum_system_requirements;
      console.log(response);
      setGame(response);
      setImages(response.screenshots)
      setGameRequirements({ graphics, memory, os, processor, storage })
    }
    getResponse();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>{ game.title }</h1>
      <div className="container">
        <div className="container-img">
          <button className="btnPrev" type="button" onClick={ () => {
            if (indexImage === 0) {
              setIndexImage(2)
            } else {
              setIndexImage(indexImage - 1);
            }
          } }>❮</button>
          { images.length && <img width="500" src={ images[indexImage].image } alt="" /> }
          <button className="btnNext" type="button" onClick={ () => {
            if (indexImage === images.length - 1) {
              setIndexImage(0)
            } else {
              setIndexImage(indexImage + 1);
            }
          } }>❯</button>
        </div>
        <div className="description">
          <p>{ game.short_description }</p>
          <p>{ game.genre }</p>
          <p>{ game.release_date }</p>
          <p>{ game.developer }</p>
        </div>
      </div>
      <div>
        <h2>Minimum System Requirements</h2>
        <ul>
          <li><h3>Graphics</h3>{gameRequirements.graphics}</li>
          <li><h3>RAM Memory</h3>{gameRequirements.memory}</li>
          <li><h3>OS</h3>{gameRequirements.os}</li>
          <li><h3>Processor</h3>{gameRequirements.processor}</li>
          <li><h3>Storage</h3>{gameRequirements.storage}</li>
        </ul>
      </div>
    </div>
  )
}

export default Game;