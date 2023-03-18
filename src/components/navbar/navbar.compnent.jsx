import { Fragment } from "react";
import { ReactComponent as LOGO } from "../../Images/Logo/LOGO.svg";
import { ReactComponent as LOGIN } from "../../Images/navbar/LogIn-Btn.svg"
import "./navbar.styles.scss"
const Navbar = () => {
    

    return (
       <Fragment>
            <div className="Navbar-Container">
                <div className="Navbar-Logo">
                    <LOGO width="27px" height="38px" />
                    <p>dahherni</p> 
                </div>
                <div className="Navbar-Buttons-Container"> 
                    <a href="">Program</a>    
                    <a href="">Contact</a>    
                    <a href="">Partnership</a>    
                    <a href="">About us</a>    
                    <a href="">Blog</a>
                    <LOGIN/>
                    
                </div>
            </div>
            <div className="Navbar-LowerBorder"/>
       </Fragment>
    );
}

export default Navbar;