import { Link } from 'react-router-dom';

const NavBrand = () => {
  return (
    <div className='order-1 col-3 col-sm-2 m-0 '>
      <div className='navbar-brand text-light overpass_600' href='#'>
        <Link to='/'>
          <span className='text-info'>Tienda</span> Manu
        </Link>
      </div>
    </div>
  );
};

export default NavBrand;
