import { useState } from 'react';
import GenericButton from '../GenericButton/GenericButton';

const ItemCount = props => {
  const { stock, name, initialAmount, onAdd } = props;
  const [amount, setAmount] = useState(initialAmount);

  const incrementAmount = () => {
    if (amount < stock) {
      setAmount(amount + 1);
    }
  };

  const decrementAmount = () => {
    if (amount > initialAmount) {
      setAmount(amount - 1);
    }
  };

  return (
    <>
      <div className='d-flex justify-content-around align-items-center'>
        <div className='d-flex align-items-center border rounded'>
          <p className='mb-0 mx-3 mx-sm-4 colorBlue'>{amount}</p>
          <div className='d-flex flex-column'>
            <button
              className='px-3 bg-transparent border-0 border-start'
              onClick={incrementAmount}>
              <i className='fa-solid fa-chevron-up colorPuff'></i>
            </button>
            <button
              className='px-3 bg-transparent border-0 border-start border-top'
              onClick={decrementAmount}>
              <i className='fa-solid fa-chevron-down colorPuff'></i>
            </button>
          </div>
        </div>
        <div>
          <GenericButton handleClick={() => onAdd(amount, name)}>
            Agregar
          </GenericButton>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
