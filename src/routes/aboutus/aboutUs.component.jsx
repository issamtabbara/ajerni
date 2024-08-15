import "./aboutUs.styles.scss";
import UnderConstruction from "../../components/underConstruction/underConstruction.component";
import {useContext, useEffect} from "react";
import {NavBarContext} from "../../Context/navBar.context";
const AboutUs = () => {
    const {setAlt} = useContext(NavBarContext);
    useEffect(() => {
        setAlt(true);
    });
    return(
        <UnderConstruction page={"About Us"}/>
    )
}

export default AboutUs;