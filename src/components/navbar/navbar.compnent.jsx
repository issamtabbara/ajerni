import {Fragment, useContext} from "react";
import Navbarbtn from "../Navbar-Btn/NavBar-Btn.component";
import "./navbar.styles.scss";
import {Link, Outlet} from "react-router-dom";
import {NavBarContext} from "../../Context/navBar.context";
const loginIcon = require("../../Images/navbar/loginIcon.png");
const loginIconAlt = require("../../Images/navbar/loginIconAlt.png");
const Navbar = () => {
  
  const {alt} = useContext(NavBarContext); 
      
  return (
    <Fragment>
        <Fragment>
          <div className={`Navbar-Container-${alt?"Normal":"Alt"}`}>
            <Link className='Navbar-Logo' to={"/"}>
              <div className='Navbar-Logo-Container'/>
              <p>travacot</p>
            </Link>
            <div className='Navbar-Buttons-Container'>
              <Navbarbtn  path={"Program"}>Program</Navbarbtn>
              <Navbarbtn  path={"Contact"}>Contact</Navbarbtn>
              <Navbarbtn  path={"Partnership"}>Partnership</Navbarbtn>
              <Navbarbtn  path={"Aboutus"}>About us</Navbarbtn>
              <Navbarbtn  path={"Blog"}>Blog</Navbarbtn>
              <Navbarbtn  path={"Login"}>
                <img width={"24px"} height={"24px"} src={alt?loginIcon:loginIconAlt} alt={"Login Icon"}/>
              </Navbarbtn>
            </div>
          </div>
          {/*<div className='Navbar-LowerBorderOuter'>*/}
            {/*<div className='Navbar-LowerBorderInner'/>*/}
          {/*</div>*/}
        </Fragment>
        <Outlet/>
    </Fragment>
  );
};

export default Navbar;
