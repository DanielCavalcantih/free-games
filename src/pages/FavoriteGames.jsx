import { useContext } from "react";
import CategoryList from "../Components/CategoryList";
import GameCard from "../Components/GameCard";
import Header from "../Components/Header";
import Context from "../context/freeGameContext";
import '../styles/favorites.css';

function FavoriteGames() {
  const { favoriteGames, selectedFavCategory } = useContext(Context);

  return (
    <div>
      <Header />
      <CategoryList listType="favoriteList" />
      <div className="container-category-cards">
        <ul className="game-list">
          {favoriteGames.length
            ? ( favoriteGames && selectedFavCategory === 'All'
              ? favoriteGames.map(game => (
                <li className="item-card" key={ game.id }>
                  <GameCard gameId={ game.id } cardType="favorite" title={ game.title } img={ game.thumbnail } category={ game.genre } />
                </li>)
              ) : favoriteGames.filter(game => game.genre === selectedFavCategory)
                .map(g => (
                  <li key={ g.id }>
                    <GameCard gameId={ g.id } cardType="favorite" title={ g.title } img={ g.thumbnail } category={ g.genre } />
                  </li>)) )
            : <span>No favorite games</span>
          }
        </ul>
      </div>
    </div>
  )
}

export default FavoriteGames;