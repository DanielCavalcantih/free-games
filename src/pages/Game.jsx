import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { fetchSpecificGame } from "../services/fetchApi";
import '../styles/game.css';
import Header from '../Components/Header';

function Game() {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [images, setImages] = useState([])
  const [indexImage, setIndexImage] = useState(0);
  const [gameRequirements, setGameRequirements] = useState({})
  const [url, setUrl] = useState('');
  const sizeWidthScreen = global.screen.width;

  useEffect(() => {
    const getResponse = async () => {
      const response = await fetchSpecificGame(id);
      const { graphics, memory, os, processor, storage } = response.minimum_system_requirements;
      setGame(response);
      setImages(response.screenshots)
      setGameRequirements({ graphics, memory, os, processor, storage })
      setUrl(response.game_url)
    }
    getResponse();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickImage = ({ target }) => {
    const { id } = target;
    setIndexImage(Number(id));
  }

  return (
    <div>
      {
        images.length > 0
          ? (
            <div>
              <Header />
              <div className="container-game">
                <div className="container">
                  <div className="container-img-table">
                    {
                      sizeWidthScreen > 500
                        ? (
                          <div className="img-buttons">
                            <button className="btnPrev" type="button" onClick={ () => {
                              if (indexImage === 0) {
                                setIndexImage(images.length - 1)
                              } else {
                                setIndexImage(indexImage - 1);
                              }
                            } }>❮</button>
                            { images.length && <img width="600" src={ images[indexImage].image } alt="" /> }
                            <button className="btnNext" type="button" onClick={ () => {
                              if (indexImage === images.length - 1) {
                                setIndexImage(0)
                              } else {
                                setIndexImage(indexImage + 1);
                              }
                            } }>❯</button>
                          </div>
                        ) : (
                          <div className="img-buttons">
                            { images.length && <img width="600" src={ images[indexImage].image } alt="" /> }
                            <div className="container-buttons">
                              <button className="btnPrev" type="button" onClick={ () => {
                                if (indexImage === 0) {
                                  setIndexImage(images.length - 1)
                                } else {
                                  setIndexImage(indexImage - 1);
                                }
                              } }>❮</button>
                              <button className="btnNext" type="button" onClick={ () => {
                                if (indexImage === images.length - 1) {
                                  setIndexImage(0)
                                } else {
                                  setIndexImage(indexImage + 1);
                                }
                            } }>❯</button>
                            </div>
                          </div>
                        )
                    }
                    <div className="container-div-all-img">
                      {
                        images.map((img, i) => (
                          img.image === images[indexImage].image
                            ? <div className="div-all-img"><img className="all-img selected-img" width="130" key={ i } src={ img.image } alt="" /></div>
                            : <div className="div-all-img"><img  id={ i } onClick={ handleClickImage } className="all-img" width="100" key={ i } src={ img.image } alt="" /></div>
                        ))
                      }
                    </div>
                    <a href={`${url}`} className="play-game">
                      Play { game.title }
                    </a>
                    <h2 className="full-description-h2">Description</h2>
                    <p className="full-description">{ game.description }</p>
                    <div>
                      <h2 className="msr-h2">Minimum System Requirements</h2>
                      <table>
                        <thead>
                          <tr>
                            <th className="th-graphics">Graphics</th>
                            <td className="td-graphics">{gameRequirements.graphics}</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>RAM Memory</th>
                            <td>{gameRequirements.memory}</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>OS</th>
                            <td>{gameRequirements.os}</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Processor</th>
                            <td>{gameRequirements.processor}</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th className="th-storage">Storage</th>
                            <td className="td-storage">{gameRequirements.storage}</td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                  <div className="description">
                    <img className="img-thumb" src={ game.thumbnail } alt="gameThumb" />
                    <h3>{ game.title }</h3>
                    <div className="description-text">
                      <p>{ game.short_description }</p>
                    </div>
                    <div className="genre-rele-dev">
                      <h3>Genre: </h3>
                      <p>{ game.genre }</p>
                    </div>
                    <div className="genre-rele-dev">
                      <h3>Released: </h3>
                      <p>{ game.release_date }</p>
                    </div>
                    <div className="genre-rele-dev">
                      <h3>Developer: </h3>
                      <p>{ game.developer }</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : <Loading />
      }
    </div>
  )
}

export default Game;