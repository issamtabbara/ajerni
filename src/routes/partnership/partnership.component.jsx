import "./partnership.styles.scss";
import PartnershipBackground from "../../components/partnership-background/partnership-background.component";
import ProgressSteps from "../../components/progressSteps/progressSteps.component";
import PartnershipAboutYou
    from "../../components/partnershipPages/partnership-about-you/partnership-about-you.component";
import {useContext, useEffect, useState} from "react";
import PartnershipDepartments
    from "../../components/partnershipPages/partnership-departments/partnership-departments.component";
import PartnershipStandards
    from "../../components/partnershipPages/partnership-standards/partnership-standards.component";
import PartnershipYears from "../../components/partnershipPages/partnership-years/partnership-years.component";
import PartnershipMostBooked
    from "../../components/partnershipPages/partnership-mostBooked/partnership-mostBooked.component";
import PartnershipDone from "../../components/partnershipPages/partnership-done/partnership-done.component";
import {NavBarContext} from "../../Context/navBar.context";

const Partnership = () => {
    const {setAlt} = useContext(NavBarContext);
    useEffect(() => {
        setAlt(true);
    });
    const [currentPage,SetCurrentPage] = useState(0);
    const Pages =[
        <PartnershipAboutYou/>,
        <PartnershipDepartments/>,
        <PartnershipStandards/>,
        <PartnershipYears/>,
        <PartnershipMostBooked/>,
        (<PartnershipDone OnDone = { () =>{
            SetCurrentPage(0);
        }}/>),
    ]
    const HandleOnStepClick = (step) =>{
        SetCurrentPage(step);
    }
    return(
        <div className="Partnership-Container">
            <PartnershipBackground/>
            <div className="Partnership-Container-Background">   
                <ProgressSteps OnStepClick={HandleOnStepClick} totalSteps={Pages.length} currentStep={currentPage}/>
                {Pages[currentPage]}
            </div>
        </div>
    )
}

export default Partnership;