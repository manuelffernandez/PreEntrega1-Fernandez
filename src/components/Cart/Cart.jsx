import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import GenericButton from '../GenericButton/GenericButton';
import OrderSummary from '../OrderSummary/OrderSummary';
import CartTable from '../CartTable/CartTable';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartList, clear, calcSubtotal, calcTaxes, calcTotal } =
    useContext(CartContext);

  return (
    <div className='my-4 container'>
      <h1 className='text-center colorPuff overpass_600'>Carrito</h1>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <GenericButton>Seguir comprando</GenericButton>
      </Link>
      <div>
        {cartList.length === 0 ? (
          <p className='mt-5 text-center overpass_600 colorBittersweet'>
            Ups! No hay nada por aquí.
          </p>
        ) : (
          <div className='row'>
            <div className='col-12 col-lg-8'>
              <CartTable />
              <GenericButton handleClick={() => clear()}>
                Borrar todo
              </GenericButton>
            </div>
            <OrderSummary
              subtotal={calcSubtotal()}
              taxes={calcTaxes()}
              total={calcTotal()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
