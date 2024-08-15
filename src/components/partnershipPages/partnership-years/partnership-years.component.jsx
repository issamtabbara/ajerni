import "./partnership-years.styles.scss"
import TravacotRadioBtn from "../../travacot-radioBtn/travacot-radioBtn.component";
import {useState} from "react";

const PartnershipYears = () => {
    const [selectedOption,setSelectedOption] = useState("");
    const HandleOptionsChanged = (e) =>{
        setSelectedOption(e.target.value);
    }
    return (
        <div className="PartnershipYears-Container">
            <h1>Tell us more though!</h1>
            <h2>How long have you been in business?</h2>
            <div className="PartnershipYears-OptionsContainer">
                {
                    ["1 Year","2+ Year","Less than a year"].map((option,index)=>{
                        return(
                            <TravacotRadioBtn 
                                key={index}
                                value={option}
                                checked={selectedOption === option}
                                handleOptionsChanged={HandleOptionsChanged}
                            >{option}</TravacotRadioBtn>
                        )
                    })
                }
            </div>
        </div>
    )
}

export  default PartnershipYears;