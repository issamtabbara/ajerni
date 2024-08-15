import "./countrySelect.styles.scss"
import countryList from "react-select-country-list";
import {useMemo, useState} from "react";
const CountrySelect = ({OnCountrySelected}) => {
    
    const [isActive, setIsActive] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('Country:');
    const [selectedKey, setSelectedKey] = useState("");
    const options = useMemo(() => countryList().getData(),[]);
    
    const countrySelectHandler = (country) =>{
        setIsActive(!isActive);
        setSelectedCountry(country);
        OnCountrySelected(country);
    }
    const HandleKeyPressed = (e) =>{
       setSelectedKey(e.key);
    }
    return(
        <div className="CountrySelect-Container">
            <input type="text" value={selectedCountry} onKeyDown={HandleKeyPressed} className="CountrySelect-Container-btn" onClick={() => {
                setIsActive(!isActive)
                setSelectedKey("");
            }}/>
            <div  className="CountrySelect-Container-Content" style={{display: isActive?"block":"none"}}>
                {
                    selectedKey === "" 
                        ? options.map((country) =>
                                <div key={country.label} className="CountrySelect-Container-Content-Item" onClick={() =>{countrySelectHandler(country.label)}}>
                                    {country.label}
                                </div>)    
                        :options.map((country) =>{
                            if(country.label.toLowerCase().charAt(0) === selectedKey.toLowerCase()){
                                return (
                                    <div key={country.label} className="CountrySelect-Container-Content-Item"
                                         onClick={() => {
                                             countrySelectHandler(country.label)
                                         }}>
                                        {country.label}
                                    </div>
                                )
                            }else return null;
                        })
                }
            </div>
        </div>
    )
}

export default CountrySelect;