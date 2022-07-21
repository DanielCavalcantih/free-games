import { useContext } from 'react';
import Header from '../Components/Header';
import Context from '../context/freeGameContext';
import '../styles/profile.css';

function Profile() {
  const { favoriteGames } = useContext(Context);
  const allInfoUser = JSON.parse(localStorage.getItem('infoUser'));
  const { userName, userEmail } = allInfoUser;
  const userNumber = 'No umber';

  return (
    <div>
      <Header />
      <div className="welcome-profile">
        <h1>Hello, { userName }</h1>
        <div className="container-profile">
          <div className="my-account">
            <label htmlFor="">
              <span>Username: </span>
              <input type="text" placeholder={ userName } />
            </label>
            <label htmlFor="">
              <span>Email address: </span>
              <input type="email" placeholder={ userEmail } />
            </label>
            <label htmlFor="">
              <span>Phone number: </span>
              <input type="text" placeholder={ userName } />
            </label>
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
    </div>
  )
}

export default Profile;