import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import FavoriteGames from './pages/FavoriteGames';
import Game from './pages/Game';
import Profile from './pages/Profile';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/home" component={ Home } />
      <Route exact path="/favorites" component={ FavoriteGames } />
      <Route exact path="/game/:id" component={ Game } />
      <Route exact path="/profile" component={ Profile } />
    </Switch>
  );
}

export default App;
