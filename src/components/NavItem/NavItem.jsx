import './NavItem.css';

const NavItem = props => {
   return (
      <button className='bg-transparent border-0 text-light navItem'>
         Categoría {props.categoryNumber}
      </button>
   );
};

export default NavItem;
