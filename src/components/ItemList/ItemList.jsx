import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3'>
      {products.length > 0 ? (
        products.map(product => {
          return (
            <Item
              key={product.id}
              id={product.id}
              pictUrl={product.image}
              name={product.name}
              stock={product.stock}
              price={product.price}
              categoryName={product.categoryName}
            />
          );
        })
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemList;
