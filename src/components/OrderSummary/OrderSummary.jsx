import GenericButton from '../GenericButton/GenericButton';

const OrderSummary = props => {
  const { subtotal, taxes, total } = props;
  return (
    <>
      <h2 className='mb-4 colorBlue overpass_600'>Resumen de cuenta</h2>
      <p className='mb-1'>Subtotal: ${subtotal}</p>
      <p className='mb-1'>Impuestos: ${taxes}</p>
      <p className='mb-5'>Total: ${total}</p>
      <GenericButton>Pagar</GenericButton>
    </>
  );
};

export default OrderSummary;
