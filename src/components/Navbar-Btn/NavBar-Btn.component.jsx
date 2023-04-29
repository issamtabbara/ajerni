import "./NavBar-Btn.styles.scss";

const Navbarbtn = ({ path, children }) => {
  const HandleOnClick = () => {};

  return (
    <button
      className='Navbarbtn-Container'
      onClick={HandleOnClick}
    >
      {children}
    </button>
  );
};

export default Navbarbtn;
