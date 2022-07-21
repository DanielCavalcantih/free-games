import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Context from "../context/freeGameContext";
import '../styles/profile.css';

function ProfileCard() {
  const { favoriteGames } = useContext(Context);
  const allInfoUser = JSON.parse(localStorage.getItem('infoUser'));
  const { userName, userEmail, userNumber, profileImg } = allInfoUser;
  const history = useLocation();
  const { pathname } = history;
  const [valueInputs, setValueInputs] = useState({
    username: '',
    email: '',
    phone: '',
    image: '',
  })

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setValueInputs({ ...valueInputs, [name]: value });
  }

  const handleClick = () => {
    const { username, email, phone, image } = valueInputs;

    const objUser = {
      userName: username,
      userEmail: email,
      userNumber: phone,
      profileImg: image,
    }

    localStorage.setItem('infoUser', JSON.stringify(objUser))
  }

  return (
    <div>
      {
        pathname === '/profile' ? (
          <div className="welcome-profile">
            <div className="container-profile">
              <div className="my-account">
                <h2 className="h2-my-account">My account</h2>
                <div className="container-inputs">
                  <label htmlFor="username">
                    <div className="label-input"><span>Username: </span></div>
                    <input className="input-profile" id="username" type="text" value={ userName } />
                  </label>
                  <label htmlFor="email">
                    <div className="label-input"><span>Email address: </span></div>
                    <input className="input-profile" id="email" type="email" value={ userEmail } />
                  </label>
                  <label htmlFor="phone">
                    <div className="label-input"><span>Phone number: </span></div>
                    <input className="input-profile phone-input" id="phone" type="text" value={ userNumber } />
                  </label>
                </div>
                <Link className="link-edit" to="/profile-edit">
                  <button className="edit-profile" type="button">
                      Edit profile
                  </button>
                </Link>
              </div>
              <div className="account-info">
                <img className="img-profile" width="230" src={
                  profileImg === ''
                    ? "https://www.brejinhodenazare.to.gov.br/wp-content/uploads/2022/03/blank-profile-picture-973460__480.png"
                    : profileImg
                } alt="" />
                {
                  favoriteGames.length < 10 && <img width="100" src="https://www.elovalorant.com.br/assets/img/tiers/ferro.png" alt="" />
                }
                {
                  favoriteGames.length >= 10 && favoriteGames.length < 20 && <img width="100" src="https://valojob.weebly.com/uploads/1/3/3/1/133183763/published/prata.png?1597781056" alt=""/>
                }
                {
                  favoriteGames.length >= 20 && favoriteGames.length < 30 && <img width="100" src="https://www.elovalorant.com.br/assets/img/tiers/ouro3.png" alt="" />
                }
                {
                  favoriteGames.length >= 30 && <img width="100" src="https://www.elovalorant.com.br/assets/img/tiers/imortal3.png" alt="" />
                }
              </div>
            </div>
          </div>
        ) : (
          <div className="welcome-profile">
            <div className="container-profile">
              <div className="my-account">
                <h2 className="h2-my-account">My account</h2>
                <div className="container-inputs">
                  <label htmlFor="username">
                    <div className="label-input"><span>Username: </span></div>
                    <input name="username" onChange={ handleChange } className="input-profile" id="username" type="text" value={ valueInputs.username } />
                  </label>
                  <label htmlFor="email">
                    <div className="label-input"><span>Email address: </span></div>
                    <input name="email" onChange={ handleChange } className="input-profile" id="email" type="email" value={ valueInputs.email } />
                  </label>
                  <label htmlFor="phone">
                    <div className="label-input"><span>Phone number: </span></div>
                    <input name="phone" onChange={ handleChange } className="input-profile" id="phone" type="text" value={ valueInputs.phone } />
                  </label>
                  <label htmlFor="phone">
                    <div className="label-input"><span>Image Url: </span></div>
                    <input name="image" onChange={ handleChange } className="input-profile phone-input" id="phone" type="text" value={ valueInputs.image } />
                  </label>
                </div>
                <Link className="link-edit" to="/profile">
                  <button onClick={ handleClick } className="edit-profile" type="button">
                    Save
                  </button>
                </Link>
              </div>
              <div className="account-info">
                <img className="img-profile" width="230" src="https://www.brejinhodenazare.to.gov.br/wp-content/uploads/2022/03/blank-profile-picture-973460__480.png" alt="" />
                {
                  favoriteGames.length < 10 && <img width="100" src="https://www.elovalorant.com.br/assets/img/tiers/ferro.png" alt="" />
                }
                {
                  favoriteGames.length >= 10 && favoriteGames.length < 20 && <img width="100" src="https://valojob.weebly.com/uploads/1/3/3/1/133183763/published/prata.png?1597781056" alt=""/>
                }
                {
                  favoriteGames.length >= 20 && favoriteGames.length < 30 && <img width="100" src="https://www.elovalorant.com.br/assets/img/tiers/ouro3.png" alt="" />
                }
                {
                  favoriteGames.length >= 30 && <img width="100" src="https://www.elovalorant.com.br/assets/img/tiers/imortal3.png" alt="" />
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}


export default ProfileCard