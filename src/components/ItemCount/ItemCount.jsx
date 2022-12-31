import { useState } from 'react';
import GenericButton from '../GenericButton/GenericButton';

const ItemCount = props => {
  const { stock, initialCount, onAdd } = props;
  const [counter, setCounter] = useState(initialCount);

  const incrementCounter = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrementCounter = () => {
    if (counter > initialCount) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className='d-flex justify-content-around align-items-center'>
        <div className='d-flex align-items-center border rounded'>
          <p className='mb-0 mx-3 mx-sm-4 colorBlue'>{counter}</p>
          <div className='d-flex flex-column'>
            <button
              className='px-3 bg-transparent border-0 border-start'
              onClick={incrementCounter}>
              <i className='fa-solid fa-chevron-up colorPuff'></i>
            </button>
            <button
              className='px-3 bg-transparent border-0 border-start border-top'
              onClick={decrementCounter}>
              <i className='fa-solid fa-chevron-down colorPuff'></i>
            </button>
          </div>
        </div>
        <div>
          <GenericButton handleClick={() => onAdd(counter)}>
            Agregar
          </GenericButton>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
