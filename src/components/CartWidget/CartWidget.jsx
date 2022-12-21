import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
  const { calcTotalItemAmount } = useContext(CartContext);
  return (
    <div className='order-2 col-1 offset-5 order-sm-3 offset-sm-0 me-sm-1 d-flex justify-content-end'>
      <Link to='/cart' style={{ textDecoration: 'none' }}>
        <button className='position-relative p-0 border-0 bg-transparent'>
          <i className='fa-sharp fa-solid fa-cart-shopping fs-3 colorYellow hoverBlueGreen'></i>
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
            {calcTotalItemAmount()}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;
