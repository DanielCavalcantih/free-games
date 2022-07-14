import Context from "./freeGameContext";
import { useEffect, useState } from "react";
import { fetchFreeGames } from "../services/fetchApi";

function FreeGameProvider({ children }) {
  const [state, setState] = useState({ userName: '', userEmail: ''});
  const [gamesList, setGamesList] = useState([]);
  const [favoriteGames, setFavoriteGames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getGames = async () => {
      const allGames = await fetchFreeGames()
      setGamesList(allGames);
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
    addUser,
    selectedCategory,
    setSelectedCategory,
    search,
    setSearch,
    favoriteGames,
    setFavoriteGames,
  }

  return (
    <Context.Provider value={valueProvider}>
      { children }
    </Context.Provider>
  )
}

export default FreeGameProvider;