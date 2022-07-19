import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/freeGameContext";
import '../styles/header.css'

function Header({ location }) {
  const { search, setSearch, gamesList, setNewGameList } = useContext(Context);

  const user = JSON.parse(localStorage.getItem('infoUser'));

  const handleClick = e => {
    e.preventDefault();
    search.length > 0
      ? setNewGameList(gamesList.filter((game) => game.title.toLowerCase().includes(search.toLocaleLowerCase())))
      : setNewGameList(gamesList)
    setSearch('')
  }

  return (
    <header className="header">
      <h1 className="header-title">
        <Link className="link-home" to="/home">
          Hello, { user.userName }
        </Link>
      </h1>
      <form>
        {
          location === 'home'
            ? (
              <div>
                <input className="input-search" placeholder="Look for a game" id="searchGame" value={ search } type="text" onChange={ ({ target }) => setSearch(target.value) } />
                <button className="btn-search" type="submit" onClick={ handleClick }>
                  <img width="12" src="https://emoji-uc.akamaized.net/orig/36/42dfd89cc30f82fc76ebe7fd1ef1fb.png" alt="" />
                </button>
              </div>
            )
            : <div></div>
        }
      </form>
      <div>
        <Link to="/favorites" className="link-favorites" type="button"><p>Favorites</p><img width="25" src="https://www.lojasestrelaonline.com.br/media/catalog/category/novidades.png" alt="" /></Link>
      </div>
    </header>
  )
}

export default Header;