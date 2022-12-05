import { useEffect, useState } from 'react';
import { products } from '../../utils/products';
import ItemList from '../ItemList/ItemList';
import { customFetch } from '../../utils/customFetch';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let productsToShow = [];
    if (categoryName) {
      productsToShow = products.filter(
        product => product.categoryName === categoryName
      );
    } else {
      productsToShow = products;
    }
    customFetch(2000, productsToShow)
      .then(prods => setData(prods))
      .catch(err => console.log(err));
  }, [categoryName]);

  return (
    <div className='container-fluid mx-auto py-5'>
      <ItemList products={data} />
    </div>
  );
};

export default ItemListContainer;
