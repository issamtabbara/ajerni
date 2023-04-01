import { Fragment } from "react";
import { ReactComponent as LOGO } from "../../Images/Logo/LOGO.svg";
import logoutBtn from "../../Images/navbar/LogIn-Btn.svg";
import Navbarbtn from "../Navbar-Btn/NavBar-Btn.component";
import "./navbar.styles.scss";
const Navbar = () => {
  return (
    <Fragment>
      <div className='Navbar-Container'>
        <div className='Navbar-Logo'>
          <LOGO
            width='27px'
            height='38px'
          />
          <p>dahherni</p>
        </div>
        <div className='Navbar-Buttons-Container'>
          <Navbarbtn>Program</Navbarbtn>
          <Navbarbtn>Contact</Navbarbtn>
          <Navbarbtn>Partnership</Navbarbtn>
          <Navbarbtn>About us</Navbarbtn>
          <Navbarbtn>Blog</Navbarbtn>
          <Navbarbtn>
            <img
              src={logoutBtn}
              alt='Logout'
            />
          </Navbarbtn>
        </div>
      </div>
      <div className='Navbar-LowerBorder' />
    </Fragment>
  );
};

export default Navbar;
