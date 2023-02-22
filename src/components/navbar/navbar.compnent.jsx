import {ReactComponent as LOGO} from "../../Images/Logo/Logo.svg"
import {ReactComponent as Cart} from "../../Images/navbar/Cart.svg"
import {ReactComponent as Noti} from "../../Images/navbar/Noti.svg"
import {ReactComponent as ProfIcon} from "../../Images/navbar/user.svg"
import {ReactComponent as Bars} from "../../Images/navbar/3 bars.svg"
import "./navbar.styles.scss"
const Navbar = () => {
    

    return (
        <div className="Navbar-Container">
            <LOGO width="200px" height="auto"/>
            <div className="Navbar-Middle-Buttons-Container">
                <button style={{backgroundColor:'#DC143C'}}>Individual</button>            
                <button style={{backgroundColor:'#808080'}}>Connect</button>            
                <button style={{backgroundColor:'#2288AA'}}>COMPLETED RESERVATIONS</button>            
            </div>
            <div className="Navbar-Buttons-Container">
                <div><Cart/></div>             
                <div><Noti/></div>             
                <div><ProfIcon/></div>             
                <div><Bars/></div>                         
            </div>
        </div>  
    );
}

export default Navbar;