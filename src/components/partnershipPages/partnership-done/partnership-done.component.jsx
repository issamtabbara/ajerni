import "./partnership-done.styles.scss";
import {redirect, useNavigate, useNavigation} from "react-router-dom";


const PartnershipDone = ({OnDone}) =>{
    const navigate = useNavigate();
    
    return(
        <div className="PartnershipDone-Container">
            <h1>Let’s make a deal</h1>
            <div className="PartnershipDone-Message">
                <div>Now that we have gathered your information, how about you contact us through <a href="mailto:info@travacot.com?subject=Support Inquiry&body=Hello, I need help with...">info@travacot.com</a></div>
                <div>Don’t worry, we were going to ask you the same questions if you contacted us directly.</div>
            </div>
            <button onClick={() => {navigate("/Program")}}>Okay</button>
        </div>
    )
}

export default PartnershipDone;