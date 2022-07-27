import Context from "./freeGameContext";
import { useEffect, useState } from "react";
import { fetchFreeGames } from "../services/fetchApi";
import  { useNavigate } from 'react-router-dom';

function FreeGameProvider({ children }) {
  const [state, setState] = useState({ user: '', email: '', password: '' });
  const [gamesList, setGamesList] = useState([]);
  const [newGameList, setNewGameList] = useState([]);
  const [favoriteGames, setFavoriteGames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFavCategory, setSelectedFavCategory] = useState('All');
  const [defaultGameList, setDefaultGameList] = useState([]);
  const [search, setSearch] = useState('');
  const [isHidden, setIsHidden] = useState(true);
  const history = useNavigate();

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
      setDefaultGameList(allGames);
    };
    getGames();
  }, [])

  const addUser = (user, email) => {
    setState({ userName: user, userEmail: email });
  }

  const handleClickLogin = e => {
    e.preventDefault();
    addUser(state.user, state.email);
    localStorage.setItem('infoUser', JSON.stringify({
      userName: state.user,
      userEmail: state.email,
      userNumber: 'No number',
      profileImg: '',
    }))
    history('/home');
  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleChangeLogin = ({ target }) => {
    const { value } = target;
    setState({ ...state, [target.name]: value })
  }

  const handleClickLogo = () => {
    setNewGameList(defaultGameList);
    setSelectedCategory('All');
  }

  const handleClickHeader = e => {
    e.preventDefault();
    const newArray = [...gamesList]
    search.length > 0
      ? setNewGameList(newArray.filter((game) => game.title.toLowerCase().includes(search.toLocaleLowerCase())))
      : setNewGameList(gamesList)
    setSearch('')
  }

  const valueProvider = {
    state,
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
    defaultGameList,
    handleClickLogin,
    validateEmail,
    handleChangeLogin,
    isHidden,
    setIsHidden,
    handleClickLogo,
    handleClickHeader,
  }

  return (
    <Context.Provider value={valueProvider}>
      { children }
    </Context.Provider>
  )
}

export default FreeGameProvider;