import "./NavBar-Btn.styles.scss";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {NavBarContext} from "../../Context/navBar.context";

const Navbarbtn = ({ path, children }) => {
 const {alt} = useContext(NavBarContext);
  return (
    <Link
      className={`Navbarbtn-Container-${alt?"Normal":"Alt"}`}
      to={"/"+path}
    >
      {children}
    </Link>
  );
};

export default Navbarbtn;
