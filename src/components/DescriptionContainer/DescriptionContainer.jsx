import { useEffect, useState } from 'react';
import Description from '../Description/Description';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/fetchData';

const DescriptionContainer = () => {
  const [product, setProduct] = useState({});
  const { itemID } = useParams();

  useEffect(() => {
    getProduct(itemID)
      .then(productGeted => {
        setProduct(productGeted);
      })
      .catch(err => {
        console.error('There was an error!', err);
      });
  }, []);

  return (
    <div className='container-fluid my-4 description'>
      {Object.keys(product).length !== 0 ? (
        <Description product={product} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default DescriptionContainer;
