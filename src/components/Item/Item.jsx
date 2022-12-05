import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ pictUrl, id, name, stock, price, categoryName }) => {
  return (
    <div className='col'>
      <Link to={`/item/${id}`}>
        <div className='card rounded-0 text-bg-dark'>
          <img src={pictUrl} className='card-img-top rounded-0 cardImg' />
          <div>
            <p>{name}</p>
            <p>{stock}</p>
            <p>{price}</p>
            <p>{categoryName}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
