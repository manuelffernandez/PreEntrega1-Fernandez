import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import GenericButton from '../GenericButton/GenericButton';

const Cart = () => {
  const { cartList, removeItem, clear } = useContext(CartContext);

  return (
    <>
      <h1>Im Cart :D</h1>
      <ul>
        {cartList.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <GenericButton handleClick={() => clear()}>
              Borrar todo
            </GenericButton>
            {cartList.map(item => (
              <li key={item.id} className='my-2'>
                <span className='me-2'>
                  {item.amount}u. - {item.name} - ${item.price}
                </span>
                <GenericButton handleClick={() => removeItem(item.id)}>
                  Borrar producto
                </GenericButton>
              </li>
            ))}
          </div>
        )}
      </ul>
    </>
  );
};

export default Cart;
