import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import CartTable from '../CartTable/CartTable';
import GenericButton from '../GenericButton/GenericButton';

const CartList = () => {
  const { clear } = useContext(CartContext);

  return (
    <div className='col-12 col-lg-8'>
      <CartTable />
      <GenericButton handleClick={() => clear()}>Borrar todo</GenericButton>
    </div>
  );
};

export default CartList;
