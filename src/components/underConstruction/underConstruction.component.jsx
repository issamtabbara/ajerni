import "./underConstruction.styles.scss";
const UnderConstruction = ({page}) => {
    return (
    <div className="UnderConstruction-Container">   
        <div>
            <h1>Under Construction</h1>
            <p>{page} Page</p>
        </div>    
    </div>
  );
}

export default UnderConstruction;