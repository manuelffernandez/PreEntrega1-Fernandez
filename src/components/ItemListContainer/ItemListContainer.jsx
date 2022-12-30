import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/fetchData';

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    getProducts(categoryName)
      .then(products => setData(products))
      .catch(err => {
        console.error('There was an error!', err);
      });
  }, [categoryName]);

  return (
    <div className='container-fluid mx-auto py-5'>
      <ItemList products={data} />
    </div>
  );
};

export default ItemListContainer;
