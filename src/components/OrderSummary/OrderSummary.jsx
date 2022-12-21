const OrderSummary = props => {
  const { subtotal, taxes, total } = props;
  return (
    <div>
      <p>Subtotal: ${subtotal}</p>
      <p>Impuestos: ${taxes}</p>
      <p>Total: ${total}</p>
    </div>
  );
};

export default OrderSummary;
