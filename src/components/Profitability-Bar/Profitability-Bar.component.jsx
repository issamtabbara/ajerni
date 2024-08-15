import "./Profitability-Bar.styles.scss";
import handleViewport from 'react-in-viewport';
const Bar = (props) =>{
    const {inViewport,enterCount,forwardedRef,percentage} = props;
    const className = inViewport && enterCount === 1? 'ProfitabilityBar-Bar-Progress' : 'ProfitabilityBar-Bar-Progress-static';
    
    return(
        <div className={className} ref={forwardedRef} style={{'--percentage':percentage}}/>
    )
    
}
const ViewportBar = handleViewport(Bar, /** options: {}, config: {} **/);
const ProfitabilityBar = ({title,percentage,text=""}) => {
    return(
        <div className="ProfitabilityBar">
            <div className="ProfitabilityBar-Start"/>
            <div className="ProfitabilityBar-Title">
                <p>{title}</p>
            </div>
            <div className="ProfitabilityBar-Bar">
                <ViewportBar percentage={percentage+"%"} onEnterViewport={()=>{console.log("Enter")}} onLeaveViewport={()=>{console.log("Leave")}} />
                <div className="ProfitabilityBar-Bar-Value" style={{left:percentage+"%"}}>{percentage}{text}%</div>
            </div>
        </div>
    )
}

export default ProfitabilityBar;