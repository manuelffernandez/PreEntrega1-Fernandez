import NavItem from '../NavItem/NavItem';
import './Header.css';

const Header = () => {
   return (
      <header className='bg-dark header'>
         <nav className='navbar navbar-expand-sm py-3'>
            <div className='container-fluid order-1'>
               <div className='order-1 col-3 col-sm-2 m-0 '>
                  <a className='navbar-brand text-light' href='#'>
                     <span className='text-info'>Brand</span> Logo
                  </a>
               </div>
               <div className='order-2 col-2 offset-5 order-sm-3 offset-sm-0 me-sm-1 d-flex justify-content-end'>
                  <button className='p-0 border-0 bg-transparent'>
                     <i className='fa-sharp fa-solid fa-cart-shopping fs-3 text-light cart'></i>
                  </button>
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
                     <li className='nav-item'>
                        <NavItem categoryNumber='1' />
                     </li>
                     <li className='nav-item'>
                        <NavItem categoryNumber='2' />
                     </li>
                     <li className='nav-item'>
                        <NavItem categoryNumber='3' />
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Header;
