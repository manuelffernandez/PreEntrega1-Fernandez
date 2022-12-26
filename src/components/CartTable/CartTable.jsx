import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';

const CartTable = () => {
  const { cartList, calcItemSubtotal, removeItem } = useContext(CartContext);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col' className='text-center'>
            Producto
          </th>
          <th scope='col' className='text-center'>
            Precio
          </th>
          <th scope='col' className='text-center'>
            Cant.
          </th>
          <th scope='col' className='text-center'>
            Tot.
          </th>
          <th scope='col' className='text-center'>
            Borrar
          </th>
        </tr>
      </thead>
      <tbody>
        {cartList.map(item => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            img={item.image}
            subtotal={calcItemSubtotal(item.id)}
            id={item.id}
            handleDelete={removeItem}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
