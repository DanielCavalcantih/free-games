import { useContext } from 'react';
import categoryArray from '../services/categoryList';
import Context from '../context/freeGameContext';

function CategoryList() {
  const { setSelectedCategory } = useContext(Context)

  const handleChange = ({ target }) => {
    setSelectedCategory(target.value);
  }

  return (
    categoryArray.map((category) => (
      <label htmlFor={category} key={ category }>
        <input value={category} onChange={ handleChange } name="category" type="radio" id={category} />
        {category}
      </label>
    ))
  )
}

export default CategoryList