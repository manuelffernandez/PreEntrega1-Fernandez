import { useEffect, useState } from 'react';
import { products } from '../../utils/products';
import ItemList from '../ItemList/ItemList';
import { customFetch } from '../../utils/customFetch';

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    customFetch(2000, products)
      .then(prods => setData(prods))
      .catch(err => console.log(err));
  }, [data]);

  return (
    <div className='container-fluid mx-auto py-5'>
      <ItemList products={data} />
    </div>
  );
};

export default ItemListContainer;
