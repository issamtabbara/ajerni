import "./travacot-btn.styles.scss";

const TravacotBtn = ({ children, styleOverride,...props }) => {
return (
        <button  {...props} className={`TravacotBtn ${styleOverride}`}>
            {children}
        </button>
    )
}

export  default TravacotBtn;