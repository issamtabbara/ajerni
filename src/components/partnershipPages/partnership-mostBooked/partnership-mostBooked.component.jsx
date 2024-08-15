import "./partnership-mostBooked.styles.scss"
import TravacotRadioBtn from "../../travacot-radioBtn/travacot-radioBtn.component";
import {useState} from "react";

const PartnershipMostBooked = () => {
    const [selectedOption,setSelectedOption] = useState("");
    const HandleOptionsChanged = (e) =>{
        setSelectedOption(e.target.value);
    }
    return (
        <div className="PartnershipMostBooked-Container">
            <h1>What is your most booked car category?</h1>
            <div className="PartnershipMostBooked-OptionsContainer">
                {
                    ["Basic - Class","High - Class","Mid - Class","All classes"].map((option,index)=>{
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

export  default PartnershipMostBooked;