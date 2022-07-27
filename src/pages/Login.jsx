import { useContext } from 'react';
import Context from '../context/freeGameContext';
import '../styles/login.css';
import logo from '../images/ffgames.png';

function Login() {
  const { state, handleClickLogin, validateEmail, handleChangeLogin } = useContext(Context);

  return (
    <main>
      <header>
        <img className="logo" src={ logo } alt="ffgames" />
      </header>
      <div className="div-login">
        <form className="form-login">
          <label htmlFor="user">
            <input className="input-login" placeholder="Username" type="text" onChange={ handleChangeLogin } value={ state.name } name="user" id="user" />
          </label>
          <label htmlFor="email">
            <input className="input-login" placeholder="Email" type="email" onChange={ handleChangeLogin } value={ state.email } name="email" id="email" />
          </label>
          <label htmlFor="password">
            <input className="input-login" placeholder="Password" type="password" onChange={ handleChangeLogin } name="password" id="password" />
          </label>
          <button className="button-login" disabled={ !(validateEmail(state.email) && state.password.length >= 8 && state.user) } type="submit" onClick={ handleClickLogin }>Login</button>
        </form>
      </div>
    </main>
  )
}

export default Login;