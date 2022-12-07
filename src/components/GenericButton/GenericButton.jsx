const GenericButton = props => {
  const { children, handleClick } = props;
  return (
    <button
      className='px-4 py-2 border-0 bgBlue hoverBgBlueGreen colorYellow'
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default GenericButton;
