import { useContext, useState } from 'react';
import Context from '../context/freeGameContext';

function Login({ history }) {
  const [state, setState] = useState({ user: '', email: '', password: '' })
  const { addUser } = useContext(Context)

  const handleClick = () => {
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
    <form>
      <label htmlFor="user">
        User:
        <input type="text" onChange={ handleChange } value={ state.name } name="user" id="user" />
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" onChange={ handleChange } value={ state.email } name="email" id="email" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" onChange={ handleChange } name="password" id="password" />
      </label>
      <button disabled={ !(state.email && state.password && state.user) } type="button" onClick={ handleClick }>Login</button>
    </form>
  )
}

export default Login;