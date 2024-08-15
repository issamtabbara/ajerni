import "./contact.styles.scss";
import UnderConstruction from "../../components/underConstruction/underConstruction.component";
import {useContext, useEffect} from "react";
import {NavBarContext} from "../../Context/navBar.context";
const Contact = () => {
    const {setAlt} = useContext(NavBarContext);
    useEffect(() => {
        setAlt(true);
    });
    return(
        <UnderConstruction page={"Contact"}/>
    )
}

export default Contact;