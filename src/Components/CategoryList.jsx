import { useContext } from 'react';
import categoryArray from '../services/categoryList';
import Context from '../context/freeGameContext';
import '../styles/categories.css';
import { Link } from 'react-router-dom';
import threeLines from '../images/threeLines.png';

function CategoryList({ listType }) {
  const { isHidden, setIsHidden, setNewGameList, gamesList, setSelectedCategory, setSelectedFavCategory } = useContext(Context)
  const sizeWidthScreen = global.screen.width;
  const user = JSON.parse(localStorage.getItem('infoUser'));

  const handleClick = ({ target }) => {
    setIsHidden(!isHidden);
    if (target.value === 'All') setNewGameList([...gamesList])
    listType === 'homeList'
      ? setSelectedCategory(target.value)
      : setSelectedFavCategory(target.value)
  }

  return (
    <div className="container-category-email">
      {
        sizeWidthScreen > 500
          ? (
            <div className="category-container">
              { categoryArray.map(category => (
                <label className="category" htmlFor={category} key={ category }>
                  <input value={category} onClick={ handleClick } name="category" type="button" id={category} />
                  {category}
                </label>
              )) }
            </div>
          ) : (
            <div className="category-container">
              <button onClick={ () => setIsHidden(!isHidden) } className="button-categories">
                <img width="25" src={ threeLines } alt="" />
              </button>
              <div className="all-categories" hidden={ isHidden }>
                { categoryArray.map(category => (
                  <label className="category" htmlFor={category} key={ category }>
                    <input value={category} onClick={ handleClick } name="category" type="button" id={category} />
                    {category}
                  </label>
                )) }
              </div>
            </div>
          )
      }
      <div>
        {
          sizeWidthScreen > 500
           ? (
            <Link className="link-profile" to="/profile">
              <img width="20" src="https://cdn-icons-png.flaticon.com/512/1361/1361728.png" alt="" />
              <span className="user-name">{ user.userName }</span>
            </Link>
           ) : null
        }
      </div>
    </div>
  )
}

export default CategoryList