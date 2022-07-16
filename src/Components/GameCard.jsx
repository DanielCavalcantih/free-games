import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/freeGameContext";

function GameCard({ title, img, category, cardType, gameId }) {
  const { favoriteGames, setFavoriteGames, gamesList } = useContext(Context);

  const handleChange = ({ target }) => {
    target.checked
      ? setFavoriteGames([...favoriteGames, gamesList.find((game) => game.title === target.name)])
      : setFavoriteGames(favoriteGames.filter((game) => game.title !== target.name))
  }

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
                <input name={ title } onChange={ handleChange } id={ title } type="checkbox" />
                <label htmlFor={ title }></label>
              </div>
            ) : (
              <div className="check-input">
                <input name={ title } onChange={ handleChange } checked id={ title } type="checkbox" />
                <label htmlFor={ title }></label>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default GameCard;