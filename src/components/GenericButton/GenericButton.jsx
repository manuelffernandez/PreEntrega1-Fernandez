const GenericButton = props => {
  const { children, handleClick } = props;
  return (
    <button
      className='px-3 py-1 border-0 bgBlue hoverBgBlueGreen colorYellow'
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default GenericButton;
