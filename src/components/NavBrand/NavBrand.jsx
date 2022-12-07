import { Link } from 'react-router-dom';

const NavBrand = () => {
  return (
    <div className='order-1 col-3 col-sm-2 m-0 '>
      <div className='navbar-brand p-0' href='#'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='m-0 fs-2 overpass_600 colorYellow'>
            Jom<span className='colorBlueGreen'>pa</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBrand;
