import ItemCount from '../ItemCount/ItemCount';
import './Description.css';

const Description = props => {
  const { product } = props;

  const onAdd = (amount, productName) => {
    alert(`Agregaste ${amount} ${productName} a tu carrito`);
  };

  return (
    <div className='container-fluid row row-cols-1 row-cols-lg-2 mx-auto'>
      <div className='col'>
        <img className='descImg' src={product.image} />
      </div>
      <div className='col d-flex flex-column justify-content-between py-3 text-center text-lg-start'>
        <div>
          <p className='m-0 fs-1 text-capitalize roboto_600 colorBlueGreen descTitle'>
            {product.name}
          </p>
          <p className='mb-3 fs-5 text-uppercase colorPuff'>
            {product.categoryName}
          </p>
          <p className='m-0 fs-3 overpass_600 colorBlueGreen'>
            ${product.price}
          </p>
        </div>
        <hr />
        <div>
          <p className='py-4 lh-lg fs-4 overpass_200 colorBlueGreen'>
            {product.description}
          </p>
        </div>
        <hr />
        <div className='row'>
          <div className='col-12 col-sm-3 d-flex align-items-center'>
            <p className='mx-auto m-0 fs-5 roboto_600 colorBlueGreen'>
              Stock:<span className='roboto_300'>{product.stock}</span>
            </p>
          </div>
          <div className='col-12 col-sm-9'>
            <ItemCount
              stock={product.stock}
              name={product.name}
              initialAmount={1}
              onAdd={onAdd}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
