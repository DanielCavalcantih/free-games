import { useContext } from 'react';
import CategoryList from '../Components/CategoryList';
import GameCard from '../Components/GameCard';
import Header from '../Components/Header';
import Context from '../context/freeGameContext';
import '../styles/home.css'

function Home({ history }) {
  const { selectedCategory, gamesList, newGameList, favoriteGames } = useContext(Context);

  return (
    <div>
      <Header location="home" history={ history } />
      <CategoryList listType="homeList" />
      <div className="container-category-cards">
        <ul className="game-list">
          { gamesList && selectedCategory === 'All'
            ? newGameList.map((game, i) => (
                i <= 50
                  ? (
                    <li key={ game.id }>
                      { favoriteGames.includes(game)
                        ? <GameCard gameId={ game.id } cardType="favorite" title={ game.title } img={ game.thumbnail } category={ game.genre } />
                        : <GameCard gameId={ game.id } cardType="normal" title={ game.title } img={ game.thumbnail } category={ game.genre } />
                      }
                    </li>
                  ) : null
              )
            ) : newGameList.filter(game => game.genre === selectedCategory)
              .map((g, i) => (
                i <= 50
                  ? (
                    <li key={ g.id }>
                      <GameCard gameId={ g.id } cardType="normal" title={ g.title } img={ g.thumbnail } category={ g.genre } />
                    </li>
                  ) : null
                )) }
        </ul>
      </div>
    </div>
  )
}

export default Home;