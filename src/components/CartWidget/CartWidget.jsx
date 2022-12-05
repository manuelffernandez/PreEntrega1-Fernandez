import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className='order-2 col-2 offset-5 order-sm-3 offset-sm-0 me-sm-1 d-flex justify-content-end'>
      <button className='p-0 border-0 bg-transparent'>
        <i className='fa-sharp fa-solid fa-cart-shopping fs-3 text-light cart'></i>
      </button>
    </div>
  );
};

export default CartWidget;
