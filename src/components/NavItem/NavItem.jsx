import './NavItem.css';

const NavItem = props => {
   const { categoryNumber, id } = props;
   return (
      <li key={id} className='nav-item'>
         <button className='bg-transparent border-0 text-light navItem overpass_400'>
            Categoría {categoryNumber}
         </button>
      </li>
   );
};

export default NavItem;
