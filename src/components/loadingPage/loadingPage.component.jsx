import "./loadingPage.styles.scss";
import {Image} from "react-bootstrap";
import {useEffect, useState} from "react";
const loadingLogo = require("../../Images/Loading/LoadingLogo.png")
const LoadingPage = ({onloadDone}) => {
    const [count , setCount] = useState(0);
    
    useEffect(()=>{
        const interval = setInterval(() => {
                if (count >= 100) {
                    onloadDone();
                }else{
                    setCount(count+1);
                }
        }, 20);

        return () => {
            clearInterval(interval);
        };
    },[count,onloadDone]);
    return (
    <div className="LoadingPage-Container">
        <div>
            <div className="LoadingPage-Container-Logo">
                <Image width={"10%"} src={loadingLogo} alt={"Logo"}/> 
            </div>
            <div className="LoadingPage-ProgressBar">
                 <div className="LoadingPage-ProgressBar-Fill" style={{width:`${count}%`}}/>
            </div>
        </div>    
    </div>
  );
}

export default LoadingPage;