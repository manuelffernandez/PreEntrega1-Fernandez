import './Item.css';

const Item = ({ pictUrl, name, stock, price, categoryName }) => {
  return (
    <div className='col'>
      <div className='card rounded-0 text-bg-dark'>
        <img src={pictUrl} className='card-img-top rounded-0 cardImg' />
        <div>
          <p>{name}</p>
          <p>{stock}</p>
          <p>{price}</p>
          <p>{categoryName}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
