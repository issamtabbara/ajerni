import "./home.styles.scss";
import UnderConstruction from "../../components/underConstruction/underConstruction.component";
import {useContext, useEffect} from "react";
import {NavBarContext} from "../../Context/navBar.context";

const Home = () => {
    const {setAlt} = useContext(NavBarContext);
    useEffect(() => {
        setAlt(true);
    });
    return(
        <UnderConstruction page={"Home"}/>
    )
}

export  default Home;