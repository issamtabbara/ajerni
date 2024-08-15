import "./travacot-modal.styles.scss"


const TravacotModal = ({children,show}) => {
    if(!show) return null;
    return(
        <div className="travacotModal-overlay">
            <div className="travacotModal">
                {children}
            </div>
        </div>
    )
}

export default TravacotModal;