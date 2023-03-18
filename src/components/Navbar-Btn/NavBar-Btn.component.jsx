import "./NavBar-Btn.styles.scss"

const Navbarbtn = ( { path, children } ) => {
    
    const HandleOnClick = () => {
        
    }

    return (
        <div className="Navbarbtn-Container" onClick={HandleOnClick}>
            {children}
        </div>
    )
}


export default Navbarbtn;