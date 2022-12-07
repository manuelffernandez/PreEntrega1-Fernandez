const NavItem = props => {
  const { categoryName } = props;
  return (
    <li className='nav-item'>
      <button className='bg-transparent border-0 fs-5 overpass_400 colorYellow hoverBlueGreen'>
        {categoryName}
      </button>
    </li>
  );
};

export default NavItem;
