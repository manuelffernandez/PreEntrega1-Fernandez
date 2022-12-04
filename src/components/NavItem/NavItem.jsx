import './NavItem.css';

const NavItem = props => {
  const { categoryName } = props;
  return (
    <li className='nav-item'>
      <button className='bg-transparent border-0 text-light navItem overpass_400'>
        {categoryName}
      </button>
    </li>
  );
};

export default NavItem;
