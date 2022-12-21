import GenericButton from '../GenericButton/GenericButton';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';

const CartList = props => {
  const { cart, removeItem } = props;
  const { calcItemSubtotal } = useContext(CartContext);

  return cart.map(item => (
    <li key={item.id} className='my-2'>
      <span className='me-2'>
        {item.amount} {item.name} - ${calcItemSubtotal(item.id)}
      </span>
      <GenericButton handleClick={() => removeItem(item.id)}>
        Borrar producto
      </GenericButton>
    </li>
  ));
};

export default CartList;
