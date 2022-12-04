import { useEffect, useState } from 'react';
import './DescriptionContainer.css';
import { products } from '../../utils/products';
import Description from '../Description/Description';
import { customFetch } from '../../utils/customFetch';

const DescriptionContainer = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    customFetch(2000, products[2])
      .then(prods => {
        setProduct(prods);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container-fluid my-4 description'>
      <Description product={product} />
    </div>
  );
};

export default DescriptionContainer;
