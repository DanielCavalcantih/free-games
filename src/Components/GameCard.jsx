import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/freeGameContext";

function GameCard({ title, img, category, cardType, gameId }) {
  const { handleChangeFavorite } = useContext(Context);

  return (
    <div className="card-game">
      <Link className="link" to={`/game/${gameId}`}>
        <img className="game-img" src={ img } alt="gameImage" />
      </Link>
      <div className="name-genre">
        <div>
          <p className="game-title">{ title }</p>
          <p className="game-genre">{ category }</p>
        </div>
        {
          cardType === 'normal'
            ? (
              <div className="check-input">
                <input name={ title } onChange={ handleChangeFavorite } id={ title } type="checkbox" />
                <label htmlFor={ title }></label>
              </div>
            ) : (
              <div className="check-input">
                <input name={ title } onChange={ handleChangeFavorite } checked id={ title } type="checkbox" />
                <label htmlFor={ title }></label>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default GameCard;