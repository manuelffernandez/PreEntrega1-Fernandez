import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import DescriptionInfo from '../DescriptionInfo/DescriptionInfo';
import GenericButton from '../GenericButton/GenericButton';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../CartContext/CartContext';

const Description = props => {
  const { product } = props;
  const [addedAmount, setAddedAmount] = useState(0);

  const { addItem } = useContext(CartContext);

  const onAdd = amount => {
    alert(`Agregaste ${amount} ${product.name} a tu carrito`);
    setAddedAmount(amount);
    addItem(product, amount);
  };

  return (
    <div className='container-fluid row row-cols-1 row-cols-lg-2 mx-auto'>
      <DescriptionInfo
        image={product.image}
        name={product.name}
        categoryName={product.categoryName}
        price={product.price}
        description={product.description}
        stock={product.stock}>
        {!addedAmount ? (
          <ItemCount
            stock={product.stock}
            name={product.name}
            initialCount={1}
            onAdd={onAdd}
          />
        ) : (
          <Link to='/cart' style={{ textDecoration: 'none' }}>
            <GenericButton>CHECKOUT</GenericButton>
          </Link>
        )}
      </DescriptionInfo>
    </div>
  );
};

export default Description;
