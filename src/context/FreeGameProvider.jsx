import Context from "./freeGameContext";
import { useEffect, useState } from "react";
import { fetchFreeGames } from "../services/fetchApi";

function FreeGameProvider({ children }) {
  const [state, setState] = useState({ userName: '', userEmail: ''});
  const [gamesList, setGamesList] = useState([]);
  const [newGameList, setNewGameList] = useState([]);
  const [favoriteGames, setFavoriteGames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFavCategory, setSelectedFavCategory] = useState('All');
  const [search, setSearch] = useState('');

  const handleChangeFavorite = ({ target }) => {
    target.checked
      ? setFavoriteGames([...favoriteGames, gamesList.find((game) => game.title === target.name)])
      : setFavoriteGames(favoriteGames.filter((game) => game.title !== target.name))
  }

  useEffect(() => {
    const getGames = async () => {
      const allGames = await fetchFreeGames()
      setGamesList(allGames);
      setNewGameList(allGames);
    };

    getGames();
  }, [])

  const addUser = (user, email) => {
    setState({ userName: user, userEmail: email });
  }

  const valueProvider = {
    userName: state.userName,
    userEmail: state.userEmail,
    gamesList,
    setGamesList,
    newGameList,
    setNewGameList,
    addUser,
    selectedCategory,
    setSelectedCategory,
    selectedFavCategory,
    setSelectedFavCategory,
    search,
    setSearch,
    favoriteGames,
    setFavoriteGames,
    handleChangeFavorite,
  }

  return (
    <Context.Provider value={valueProvider}>
      { children }
    </Context.Provider>
  )
}

export default FreeGameProvider;