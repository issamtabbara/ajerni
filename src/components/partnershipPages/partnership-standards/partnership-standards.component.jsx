import "./partnership-standards.styles.scss";
import TravacotBtn from "../../Travacot-btn/travacot-btn.component";
import TravacotModal from "../../TravacotModal/travacot-modal.component";
import {Fragment, useState} from "react";
import {Image} from "react-bootstrap";
import BlackLogo from "../../../Images/Logo/BlackLogo.png";
const PartnershipStandards = ()=>{
    const [accepted,setAccepted] = useState(false);
    const [checked,setChecked] = useState(false);
    const [showStandards,setShowStandards] = useState(false);
    const HandleCheckChanged = (e) =>{
        setChecked(e.target.checked);
    }
    return(
        <Fragment>
            <TravacotModal show={showStandards}>
                <div className="PartnershipStandards-ModalContainer">
                    <h1>Terms and Conditions</h1>
                    <div className="PartnershipStandards-TermsContainer">
                        <div className="PartnershipStandards-TermsContainer-Title">
                            <Image width={18} height={26} src={BlackLogo}/>
                            <p>travacot</p>
                        </div>
                        <div className="PartnershipStandards-TermsContainer-Break"/>
                        <div className="PartnershipStandards-TermsContainer-Body">
                            <div>
                                <p>
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                    faskhagksdgfjagsdjfavskdjfkasbdvhfkajdfkahvsdkfahskdhf
                                </p>
                            </div>
                             
                        </div>
                    </div>
                    <div className="PartnershipStandards-ModalContainer-Centered">    
                        <label className="PartnershipStandards-TermsContainer-CheckboxContainer">
                            <input type="checkbox" checked={checked} onChange={HandleCheckChanged}/>
                            <span className="PartnershipStandards-TermsContainer-CheckboxContainer-Checkbox">
                                <span className="PartnershipStandards-TermsContainer-CheckboxContainer-CheckboxInner"/>
                            </span>
                            I accept the terms and conditions that apply
                        </label>
                    </div>
                    <div className="PartnershipStandards-ModalContainer-Centered">
                        <TravacotBtn onClick={()=>{
                            setShowStandards(!showStandards);
                            setAccepted(checked);
                        }}  styleOverride="PartnershipStandards-CloseButton">Proceed</TravacotBtn>
                    </div>
                </div>
            </TravacotModal>
            <div className="PartnershipStandards-Container">
                <p>
                    We would love to do business with you! However, if you have
                    standards, we have standards. Please, take your time reading
                    the terms and conditions before proceeding to the next stage.
                </p>
                <div className="PartnershipStandards-ButtonContainer">    
                    <div>
                        <TravacotBtn onClick={()=>{
                            setShowStandards(!showStandards);
                        }} >Travacot Standards</TravacotBtn>
                    </div>
                    <div>
                        <TravacotBtn disabled={!accepted}>Done</TravacotBtn>
                    </div>
                </div>
            </div>
    </Fragment>
    )
}

export  default PartnershipStandards;