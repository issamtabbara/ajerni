import "./homesection.styles.scss";

const HomeSection = ({ children, scrollTo, goToSection, IsLast = false }) => {
  return (
    <div className='homesection-section'>
      {children}
      {!IsLast && (
        <button
          onClick={() => {
            scrollTo(goToSection);
          }}
          className='downarrow'
        ></button>
      )}
    </div>
  );
};

export default HomeSection;
