
import { ReactComponent as ArrowSeparator } from "../../Images/ArrowDown.svg";
import "./home.styles.scss"

const Home = () => {
    return (
        <div className="CarSelection-Container">
            <div className="ClientInformation-Container">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
            </div>
            <div className="Separator"><ArrowSeparator width="150px" height="300px" style={{paddingTop: '60px'}} /></div>
            <div className="InfoFillingSection">filling Area</div>
            <div className="AdditionalInfo">IncludeDriver</div>
        </div>  
    );
}

export default Home;