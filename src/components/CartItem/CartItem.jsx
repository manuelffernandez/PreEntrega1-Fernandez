import GenericButton from '../GenericButton/GenericButton';
import './CartItem.css';

const CartItem = props => {
  const { name, amount, price, img, subtotal, id, handleDelete } = props;

  return (
    <tr>
      <td className='col-6 col-md-3'>
        <img src={img} className='cartItemImg' alt={name} />
      </td>
      <td className='text-center align-middle col-2 col-md-3'>${price}</td>
      <td className='text-center align-middle col-1 col-md-3'>{amount}</td>
      <td className='text-center align-middle col-2 col-md-3'>${subtotal}</td>
      <td className='align-middle col-1'>
        <GenericButton handleClick={() => handleDelete(id)}>X</GenericButton>
      </td>
    </tr>
  );
};

export default CartItem;
