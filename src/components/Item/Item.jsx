import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ pictUrl, id, name, stock, price, categoryName }) => {
  return (
    <div className='col'>
      <div className='card rounded-0 border-0'>
        <div>
          <div className='position-relative '>
            <div className='d-flex justify-content-center align-items-center position-absolute cardFilter'>
              <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                <p className='m-0 p-2 bgBlue colorYellow hoverBgBlueGreen'>
                  Ver más
                </p>
              </Link>
            </div>
            <img src={pictUrl} className='card-img-top rounded-0 cardImg' />
          </div>
        </div>
        <div className='d-flex flex-column align-items-center colorBlue'>
          <p className='colorPuff'>{categoryName}</p>
          <p className='m-0'>{name}</p>
          <p className='overpass_400'>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
