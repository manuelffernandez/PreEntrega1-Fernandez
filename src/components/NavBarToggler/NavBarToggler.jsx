import NavItem from '../NavItem/NavItem';
import { Link } from 'react-router-dom';

const NavBarToggler = () => {
  return (
    <>
      <button
        className='navbar-toggler order-3 col-2 border-0 shadow-none'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <i className='fa-solid fa-bars colorYellow'></i>
      </button>
      <div
        className='collapse navbar-collapse order-4 order-sm-2'
        id='navbarSupportedContent'>
        <ul className='navbar-nav w-100 justify-content-evenly'>
          <Link
            to={`/categoria/Indumentaria`}
            style={{ textDecoration: 'none' }}>
            <NavItem categoryName={'Indumentaria'} />
          </Link>
          <Link to={`/categoria/Accesorios`} style={{ textDecoration: 'none' }}>
            <NavItem categoryName={'Accesorios'} />
          </Link>
          <Link to={`/categoria/Zapatos`} style={{ textDecoration: 'none' }}>
            <NavItem categoryName={'Zapatos'} />
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBarToggler;
