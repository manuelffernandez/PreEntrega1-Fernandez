import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import GenericButton from '../GenericButton/GenericButton';
import OrderSummary from '../OrderSummary/OrderSummary';
import CartList from '../CartList/CartList';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartList, removeItem, clear, calcSubtotal, calcTaxes, calcTotal } =
    useContext(CartContext);

  return (
    <div className='my-4'>
      <h1 className='text-center colorPuff overpass_600'>Carrito</h1>
      <div className='container'>
        {cartList.length === 0 ? (
          <p>
            Tu carrito no tiene productos.
            <Link to='/' style={{ textDecoration: 'none' }}>
              Ir a comprar.
            </Link>
          </p>
        ) : (
          <>
            <div className='row'>
              <div className='col-12 col-lg-8'>
                <CartList removeItem={removeItem} cart={cartList}></CartList>
                <GenericButton handleClick={() => clear()}>
                  Borrar todo
                </GenericButton>
              </div>
              <div className='col-12 col-lg-4 mt-4 mt-lg-0 p-4 border rounded orderSummary'>
                <OrderSummary
                  subtotal={calcSubtotal()}
                  taxes={calcTaxes()}
                  total={calcTotal()}></OrderSummary>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
