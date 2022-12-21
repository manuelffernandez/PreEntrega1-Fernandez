import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import GenericButton from '../GenericButton/GenericButton';
import OrderSummary from '../OrderSummary/OrderSummary';
import CartList from '../CartList/CartList';

const Cart = () => {
  const { cartList, removeItem, clear, calcSubtotal, calcTaxes, calcTotal } =
    useContext(CartContext);

  return (
    <>
      <h1>Im Cart :D</h1>
      <div>
        {cartList.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <GenericButton handleClick={() => clear()}>
              Borrar todo
            </GenericButton>
            <ul>
              <CartList removeItem={removeItem} cart={cartList}></CartList>
            </ul>
            <OrderSummary
              subtotal={calcSubtotal()}
              taxes={calcTaxes()}
              total={calcTotal()}></OrderSummary>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
