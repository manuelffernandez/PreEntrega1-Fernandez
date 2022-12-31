import './DescriptionInfo.css';

const DescriptionInfo = props => {
  const { image, name, categoryName, price, description, stock, children } =
    props;
  return (
    <>
      <div className='col'>
        <img className='descImg' src={image} />
      </div>
      <div className='col d-flex flex-column justify-content-between py-3 text-center text-lg-start'>
        <div>
          <p className='m-0 fs-1 text-capitalize roboto_600 colorBlueGreen descTitle'>
            {name}
          </p>
          <p className='mb-3 fs-5 text-uppercase colorPuff'>{categoryName}</p>
          <p className='m-0 fs-3 overpass_600 colorBlueGreen'>${price}</p>
        </div>
        <hr />
        <div>
          <p className='py-4 lh-lg fs-4 overpass_200 colorBlueGreen'>
            {description}
          </p>
        </div>
        <hr />
        <div className='row'>
          <div className='col-12 col-sm-3 d-flex align-items-center'>
            <p className='mx-auto m-0 fs-5 roboto_600 colorBlueGreen'>
              Stock:<span className='roboto_300'>{stock}</span>
            </p>
          </div>
          <div className='col-12 col-sm-9'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default DescriptionInfo;
