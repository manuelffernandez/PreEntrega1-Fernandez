const Description = props => {
  const { product } = props;

  return (
    <div className='container-fluid row row-cols-1 row-cols-md-2 mx-auto'>
      <div className='col'>
        <img className='img-fluid' src={product.image} />
      </div>
      <div className='col'>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default Description;
