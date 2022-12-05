import { useEffect, useState } from 'react';
import './DescriptionContainer.css';
import { products } from '../../utils/products';
import Description from '../Description/Description';
import { customFetch } from '../../utils/customFetch';
import { useParams } from 'react-router-dom';

const DescriptionContainer = () => {
  const [product, setProduct] = useState({});
  const { itemID } = useParams();

  useEffect(() => {
    customFetch(
      2000,
      products.find(product => product.id === itemID)
    )
      .then(prod => {
        setProduct(prod);
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
