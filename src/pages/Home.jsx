import { useContext } from 'react';
import CategoryList from '../Components/CategoryList';
import GameCard from '../Components/GameCard';
import Context from '../context/freeGameContext';
import '../styles/home.css'

function Home({ history }) {
  const { selectedCategory, search, setSearch, gamesList, setGamesList } = useContext(Context);

  const handleClick = () => {
    search.length > 0
    ? setGamesList(gamesList.filter((game) => game.title.toLowerCase().includes(search.toLocaleLowerCase())))
    : setGamesList(gamesList)

    setSearch('')
  }

  const goToFavorite = () => history.push('/favorites')

  return (
    <div>
      <label htmlFor="searchGame">
        Search:
        <input id="searchGame" value={ search } type="text" onChange={ ({ target }) => setSearch(target.value) } />
      </label>
      <button type="button" onClick={ goToFavorite }>Favorites<img width="12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ashthalakshmi_-_Star_of_Laxmi.svg/640px-Ashthalakshmi_-_Star_of_Laxmi.svg.png" alt="" /></button>
      <button type="button" onClick={ handleClick }>
        <img width="12" src="https://emoji-uc.akamaized.net/orig/36/42dfd89cc30f82fc76ebe7fd1ef1fb.png" alt="" />
      </button>
      <CategoryList />
      <ul className="game-list">
        { gamesList && selectedCategory === 'All'
          ? gamesList.map((game) => (
            <li key={ game.id }>
              <GameCard gameId={ game.id } cardType="normal" title={ game.title } img={ game.thumbnail } category={ game.genre } />
            </li>)
          ) : gamesList.filter((game) => game.genre === selectedCategory)
            .map((g) => (
              <li key={ g.id }>
                <GameCard gameId={ g.id } cardType="normal" title={ g.title } img={ g.thumbnail } category={ g.genre } />
              </li>)) }
      </ul>
    </div>
  )
}

export default Home;