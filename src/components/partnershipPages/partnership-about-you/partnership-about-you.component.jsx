import "./partnership-about-you.styles.scss"
import CountrySelect from "../../countrySelect/countrySelect.component";
import TravacotRadioBtn from "../../travacot-radioBtn/travacot-radioBtn.component";
import {useState} from "react";

const PartnershipAboutYou = ()=>{
    const [selectedOption,setSelectedOption] = useState("");
    const HandleOptionsChanged = (e) =>{
        setSelectedOption(e.target.value);
    }
    const countrySelectHandler = (value) =>{
        console.log(value);
    }
    
    return(
        <div className="PartnershipAboutYou-Container">
            <h1>Tell us About you</h1>
            <div className="PartnershipAboutYou-Container-FormTitle">
                <p>Choose the category you belong to:</p>
            </div>
            <div className="PartnershipAboutYou-Container-FormInput">
                <div className="PartnershipAboutYou-Container-FormInput-ButtonGroup">
                    {
                        ["TA or OTA", "Fleet"].map((item, index)=>{
                            return(
                                <TravacotRadioBtn 
                                    key={index}
                                    value={item}
                                    checked={selectedOption === item}
                                    handleOptionsChanged={HandleOptionsChanged}
                                >{item}</TravacotRadioBtn>
                            )
                        })
                    }
                    {/*<button className="PartnershipAboutYou-Container-FormInput-button">TA or OTA </button>*/}
                    {/*<button className="PartnershipAboutYou-Container-FormInput-button"> Fleet </button>*/}
                </div>
                <div className="PartnershipAboutYou-Container-FormInput-InputGroup">
                    <input className="PartnershipAboutYou-Container-FormInput-Input" placeholder="Company Name..."/>
                    <CountrySelect OnCountrySelected={countrySelectHandler}/>
                </div>
            </div>
        </div>
    )
}

export default PartnershipAboutYou;