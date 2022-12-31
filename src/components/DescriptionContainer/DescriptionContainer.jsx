import { useEffect, useState } from 'react';
import Description from '../Description/Description';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/fetchData';
import { closeAlert, showAlert } from '../../utils/swalAlert';
import swalConfig from '../../utils/swalConfig';

const DescriptionContainer = () => {
  const [product, setProduct] = useState({});
  const { itemID } = useParams();

  useEffect(() => {
    showAlert(swalConfig.loader);
    getProduct(itemID)
      .then(productGeted => {
        setProduct(productGeted);
        closeAlert();
      })
      .catch(err => {
        showAlert(swalConfig.error);
        console.error('There was an error!', err);
      });
  }, []);

  return (
    <div className='container-fluid my-4 description'>
      {Object.keys(product).length !== 0 ? (
        <Description product={product} />
      ) : null}
    </div>
  );
};

export default DescriptionContainer;
