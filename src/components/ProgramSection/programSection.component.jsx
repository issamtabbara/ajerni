import "./programSection.styles.scss";

const HomeSection = ({ children, scrollTo, goToSection, IsLast = false,IsFirst = false }) => {
  return (
    <div className='programsection-section'>
      {children}
      {IsFirst && (
        <div className="scroll-down">
          {
              IsFirst && (
                  <p>SCROLL</p>
              )
          }
          <button className="downarrow"
              onClick={() => {
                scrollTo(goToSection);
              }}
          />
        </div>
      )}
        {/*{*/}
        {/*    !IsFirst && (*/}
        {/*    <div className="programsection-LineBreak"/>)*/}
        {/*}*/}

    </div>
  );
};

export default HomeSection;
