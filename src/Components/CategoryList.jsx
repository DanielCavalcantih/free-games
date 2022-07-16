import { useContext } from 'react';
import categoryArray from '../services/categoryList';
import Context from '../context/freeGameContext';
import '../styles/categories.css';
import { Link } from 'react-router-dom';

function CategoryList({ listType }) {
  const { setSelectedCategory, setSelectedFavCategory, setNewGameList, gamesList } = useContext(Context)

  const user = JSON.parse(localStorage.getItem('infoUser'));

  const handleClick = ({ target }) => {
    if (target.value === 'All') setNewGameList([...gamesList])
    listType === 'homeList'
      ? setSelectedCategory(target.value)
      : setSelectedFavCategory(target.value)
  }

  return (
    <div className="container-category-email">
      <div className="category-container">
        { categoryArray.map(category => (
          <label className="category" htmlFor={category} key={ category }>
            <input value={category} onClick={ handleClick } name="category" type="button" id={category} />
            {category}
          </label>
        )) }
      </div>
      <div>
        <Link className="link-profile" to="/profile">
          <img width="20" src="https://cdn-icons-png.flaticon.com/512/1361/1361728.png" alt="" />
          <span>{ user.userName }</span>
        </Link>
      </div>
    </div>
  )
}

export default CategoryList