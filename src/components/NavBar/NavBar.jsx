import NavItem from '../NavItem/NavItem';
import CartWidget from '../CartWidget/CartWidget';

import './NavBar.css';

const NavBar = () => {
   return (
      <header className='bg-dark header'>
         <nav className='navbar navbar-expand-sm py-3'>
            <div className='container-fluid order-1'>
               <div className='order-1 col-3 col-sm-2 m-0 '>
                  <a className='navbar-brand text-light overpass_600' href='#'>
                     <span className='text-info'>Tienda</span> Manu
                  </a>
               </div>
               <div className='order-2 col-2 offset-5 order-sm-3 offset-sm-0 me-sm-1 d-flex justify-content-end'>
                  <CartWidget />
               </div>
               <button
                  id='caca'
                  className='navbar-toggler order-3 col-2 border-0 shadow-none'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'>
                  <i className='fa-solid fa-bars text-light'></i>
               </button>
               <div
                  className='collapse navbar-collapse order-4 order-sm-2'
                  id='navbarSupportedContent'>
                  <ul className='navbar-nav w-100 justify-content-evenly'>
                     <NavItem categoryNumber='1' id='1' />
                     <NavItem categoryNumber='2' id='2' />
                     <NavItem categoryNumber='3' id='3' />
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default NavBar;
