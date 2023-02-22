import { ReactComponent as Wait } from "../../Images/waitIcon.svg";
import "./waiting-page.styles.scss"

const WaitingPage = () => {
    return (
        <div className="WaitingPage-Container">
            <Wait />
            <div className="WaitMessage-Container">
                <div style={{color:'rgba(0, 0, 0, 0.65)'}}>Please wait while we have a “little” talk with the office.</div>
                <div style={{color:'rgba(255, 0, 0, 0.65)'}}>P.S this process could take up to 5 minutes or more so feel free to minimize the window and we will notify you ASAP! </div>
            </div>
        </div>
    )
}



export default WaitingPage;