import "./partnership-departments.styles.scss";


const departments = [
    "Reception",
    "Operations Team",
    "Reservations",
    "IT Department",
    "Sales & Marketing",
]
const PartnershipDepartments = ()=>{
    return(
        <div className="PartnershipDepartments-Container">
            <h1>Please check the departments you have</h1>
            <div className="PartnershipDepartments-Container-ButtonsContainer">
                {
                    departments.map((department,index) =>
                        <label key={index} id={`${index}`} className="PartnershipDepartments-CheckboxContainer">
                            <input type="checkbox"/>
                            <span className="PartnershipDepartments-CheckboxContainer-Checkbox">
                                <span className="PartnershipDepartments-CheckboxContainer-CheckboxInner"/>
                            </span>
                            {department}
                        </label>
                    )
                }
            </div>
        </div>
    )
}


export default PartnershipDepartments;