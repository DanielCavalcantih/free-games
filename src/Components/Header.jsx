import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/freeGameContext";
import '../styles/header.css'
import logo from '../images/ffgamesBranco.png';
import logoFF from '../images/justFF.png';

function Header({ location }) {
  const { search, setSearch, gamesList, setNewGameList, favoriteGames } = useContext(Context);
  const sizeWidthScreen = global.screen.width;

  const handleClick = e => {
    e.preventDefault();
    search.length > 0
      ? setNewGameList(gamesList.filter((game) => game.title.toLowerCase().includes(search.toLocaleLowerCase())))
      : setNewGameList(gamesList)
    setSearch('')
  }

  return (
    <header className="header">
      <Link to="/home">
        {
          sizeWidthScreen > 500
           ? <img className="link-home" width="130px" src={ logo } alt="" />
           : <img className="just-FF" width="40" src={ logoFF } alt="" />
        }
      </Link>
      <form>
        {
          location === 'home'
            ? (
              <div className="container-input-button">
                <input className="input-search" placeholder="Look for a game" id="searchGame" value={ search } type="text" onChange={ ({ target }) => setSearch(target.value) } />
                {
                  sizeWidthScreen > 500
                    ? (
                      <button className="btn-search" type="submit" onClick={ handleClick }>
                        <img width="20" src="https://cdn-icons-png.flaticon.com/512/1617/1617460.png" alt="" />
                      </button>
                    ) : null
                }
              </div>
            )
            : <div></div>
        }
      </form>
      <div>
          {
            sizeWidthScreen > 500
            ? (
              <Link to="/favorites" className="link-favorites" type="button">
                <p>Favorites</p>
                <span hidden={ !favoriteGames.length > 0 }>({ favoriteGames.length })</span>
                <img width="25" src="https://www.lojasestrelaonline.com.br/media/catalog/category/novidades.png" alt="" />
              </Link>
            ) : (
              location === 'favorites'
                ? null
                : (
                  <Link to="/favorites" className="link-favorites" type="button">
                    <span hidden={ !favoriteGames.length > 0 }>({ favoriteGames.length })</span>
                    <img width="40" src="https://www.lojasestrelaonline.com.br/media/catalog/category/novidades.png" alt="" />
                  </Link>
                )
            )
          }
      </div>
      {
        sizeWidthScreen > 500
          ? null
          : (
            <Link className="link-profile" to="/profile">
              <img width="20" src="https://cdn-icons-png.flaticon.com/512/1361/1361728.png" alt="" />
            </Link>
          )
      }
    </header>
  )
}

export default Header;