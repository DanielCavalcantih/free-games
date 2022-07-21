import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import FavoriteGames from './pages/FavoriteGames';
import Game from './pages/Game';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/home" element={ <Home /> } />
      <Route exact path="/favorites" element={ <FavoriteGames /> } />
      <Route exact path="/game/:id" element={ <Game /> } />
      <Route exact path="/profile" element={ <Profile /> } />
    </Routes>
  );
}

export default App;
