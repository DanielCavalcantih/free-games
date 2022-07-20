import Header from '../Components/Header';
import '../styles/profile.css';

function Profile() {
  const allInfoUser = JSON.parse(localStorage.getItem('infoUser'));
  const { userName, userEmail } = allInfoUser;
  const userNumber = '';

  return (
    <div>
      <Header />
      <div className="container-profile">
        <table>
          <thead>
            <img className="img-profile" width="100" src="https://meualmoco.com.br/img/avatar_2x.png" alt="" />
            <tr>
              <th className="th-graphics">Username:</th>
              <td className="td-graphics">{ userName }</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Email:</th>
              <td>{ userEmail }</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th className="th-storage">Phone:</th>
              <td className="td-storage">{ userNumber }</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default Profile;