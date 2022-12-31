import GenericButton from '../GenericButton/GenericButton';
import './OrderSummary.css';

const OrderSummary = props => {
  const { subtotal, taxes, total, checkout } = props;
  return (
    <div className='col-12 col-lg-4 mt-4 mt-lg-0 p-4 border rounded orderSummary'>
      <h2 className='mb-4 colorBlue overpass_600'>Resumen de cuenta</h2>
      <p className='mb-1'>Subtotal: ${subtotal}</p>
      <p className='mb-1'>Impuestos: ${taxes}</p>
      <p className='mb-5'>Total: ${total}</p>
      <GenericButton handleClick={checkout}>Pagar</GenericButton>
    </div>
  );
};

export default OrderSummary;
