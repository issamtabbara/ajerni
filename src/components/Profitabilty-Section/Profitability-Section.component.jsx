import "./Profitability-Section.styles.scss"
import ProfitabilityBar from "../Profitability-Bar/Profitability-Bar.component";
import {Image} from "react-bootstrap";

const ProfitabilitySection = ({title,logo = null,bars =[{title:"",value:0,text:""}]}) => {
    return(
        <div className="ProfitabilitySection">
            
            <div className="ProfitabilitySection-Title">
                { logo !== null &&
                    // <div className="ProfitabilitySection-Title-Logo">
                        <img className="ProfitabilitySection-Title-Logo" src={logo} alt={"travacot logo"} />
                    //</div>  
                }
                <div className="ProfitabilitySection-Title-Text">
                    <p>{title}</p>
                </div>
            </div>
            <div className="ProfitabilitySection-Bars">
                {
                    bars.map((bar,index) => {
                        return(
                            <ProfitabilityBar key={index} title={bar.title} percentage={bar.value} text={bar.text}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProfitabilitySection;