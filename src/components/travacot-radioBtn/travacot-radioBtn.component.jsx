import "./travacot-radioBtn.styles.scss";

const TravacotRadioBtn = ({children,value,handleOptionsChanged,checked,overrideStyle}) => {
    return (
        <label className={`TravacotRadioBtn-Container ${overrideStyle}`}>
            <input 
                type="radio"
                value={value}
                checked={checked}
                onChange={handleOptionsChanged}
            />
            <div>{children}</div>
        </label>
    )
}

export default TravacotRadioBtn;