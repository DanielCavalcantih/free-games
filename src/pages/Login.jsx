import { useContext, useState } from 'react';
import Context from '../context/freeGameContext';
import '../styles/login.css';
import logo from '../images/ffgames.png';

function Login({ history }) {
  const [state, setState] = useState({ user: '', email: '', password: '' })
  const { addUser } = useContext(Context)

  const handleClick = e => {
    e.preventDefault();
    addUser(state.user, state.email);
    localStorage.setItem('infoUser', JSON.stringify({
      userName: state.user,
      userEmail: state.email,
    }))
    history.push('/home');
  }

  const handleChange = ({ target }) => {
    const { value } = target;
    setState({ ...state, [target.name]: value })
  }

  return (
    <main>
      <header>
        <img className="logo" src={ logo } alt="ffgames" />
      </header>
      <div className="div-login">
        <form className="form-login">
          <label htmlFor="user">
            <input className="input-login" placeholder="Username" type="text" onChange={ handleChange } value={ state.name } name="user" id="user" />
          </label>
          <label htmlFor="email">
            <input className="input-login" placeholder="Email" type="email" onChange={ handleChange } value={ state.email } name="email" id="email" />
          </label>
          <label htmlFor="password">
            <input className="input-login" placeholder="Password" type="password" onChange={ handleChange } name="password" id="password" />
          </label>
          <button className="button-login" disabled={ !(state.email && state.password && state.user) } type="submit" onClick={ handleClick }>Login</button>
        </form>
      </div>
    </main>
  )
}

export default Login;