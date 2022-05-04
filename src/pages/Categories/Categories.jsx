import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';
import './style.css';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  return (
    <div className="category-page">
      <h1>This is the Categories Page</h1>
      <button onClick={() => dispatch(checkStatus())} type="button">
        Check status
      </button>
      <h2>{categories}</h2>
    </div>
  );
}

export default Categories;
