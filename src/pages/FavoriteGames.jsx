import { useContext } from "react";
import GameCard from "../Components/GameCard";
import Context from "../context/freeGameContext";

function FavoriteGames() {
  const { favoriteGames } = useContext(Context);

  return (
    <ul className="game-list">
      {favoriteGames.length
        ? favoriteGames.map((game) => (
          <li key={ game.id }>
            <GameCard gameId={ game.id } cardType="favorite" title={ game.title } img={ game.thumbnail } category={ game.genre } />
          </li>))
        : <span>No favorite games</span>
      }
    </ul>
  )
}

export default FavoriteGames;