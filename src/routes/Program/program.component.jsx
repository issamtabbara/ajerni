import "./program.styles.scss";
import ProgramSection from "../../components/ProgramSection/programSection.component";
import {Fragment, useContext, useEffect, useRef} from "react";
import ProfitabilitySection from "../../components/Profitabilty-Section/Profitability-Section.component";
import TravacotBtn from "../../components/Travacot-btn/travacot-btn.component";
import {NavBarContext} from "../../Context/navBar.context";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "../../components/footer/footer.component";
const profitLogoOne = require("../../Images/Program/dahherniLogoProfit.png");
const revConnect = require("../../Images/Program/RevConnect.png");
const eagleEye = require("../../Images/Program/Eagle Eye.png");
const travalytics = require("../../Images/Program/Travalytics.png");
const weCare = require("../../Images/Program/WeCare.png");
const avis = require("../../Images/Program/AVIS_logo.png");
const hertz = require("../../Images/Program/Hertz.png");
const enterprise = require("../../Images/Program/enterprise-rent-a-car-logo.png");
const budget = require("../../Images/Program/Budget.png");
const alamo = require("../../Images/Program/Alamo.png");
const national = require("../../Images/Program/Sixt.png");

const Program = () => {
  const {setAlt} = useContext(NavBarContext)
  const SectionOne = useRef();
  const SectionTwo = useRef();
  const SectionThree = useRef();
  const SectionFour = useRef();
  const SectionFive = useRef();
  const SectionSix = useRef();
  const observer = useRef(SectionOne);
  useEffect(() =>{
    const callback = (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target)
            if (entry.isIntersecting) {
              setAlt(entry.target === SectionOne.current);
            }
        });
    }
    observer.current = new IntersectionObserver(callback, {
      root: document.getElementById("ProgramParent"),
      rootMargin: "0px",
      threshold:0.7,
    });
    observer.current.observe(SectionOne.current);
    observer.current.observe(SectionTwo.current);
    observer.current.observe(SectionThree.current);
    observer.current.observe(SectionFour.current);
    observer.current.observe(SectionFive.current);
    observer.current.observe(SectionSix.current);
    return () => {
      if(observer.current){
        observer.current.disconnect();
      }
    };
  });
  
  const scrollTo = (section) => {
    
    section.current.scrollIntoView({ behavior: "smooth" });
    setAlt(section !== SectionOne);
  };
  return (
      <Fragment>
        <div id="ProgramParent" className='Program-Container'>
          <div ref={SectionOne}>
            <ProgramSection
              scrollTo={scrollTo}
              goToSection={SectionTwo}
              IsFirst={true}
            >
              <div className='Program-CardContainer'>
                <div className="ProgramSectionOne">
                  <div className="ProgramSectionOne-ImageOne"/>
                  <div className="ProgramSectionOne-ImageTwo"/>
                  <div className="ProgramSectionOne-ImageFour"/>
                  <div className="ProgramSectionOne-ImageThree"/>
                  <div className="ProgramSectionOne-ImageFive"/>
                  <div className="ProgramSectionOne-ImageSix"/>
                  <div className="ProgramSectionOne-Background">
                    <div className="ProgramSectionOne-Content">
                      <div className="ProgramSectionOne-Content-Text">
                        <div className="ProgramSectionOne-Content-TextLine"/>
                        <div className="ProgramSectionOne-Content-TextContent">
                          <h1>Let's do something together</h1>
                          <h2>We are thankful to have you interested in our partnership!</h2>
                          <p>
                            Our mission is to become a sustainable asset to any 
                            hospitality business that has a relation to travel agencies.
                            Let’s redirect the world of online travel agencies together.
                          </p>
                        </div>
                      </div>
                      <TravacotBtn>
                        Learn more about the partnership here
                      </TravacotBtn>
                    </div>
                    <div className="ProgramSectionOne-Arrow"/>
                  </div>
                </div>
              </div>
            </ProgramSection>
          </div>
          <div ref={SectionTwo}>
            <ProgramSection scrollTo={scrollTo} goToSection={SectionThree}>
              <div className="ProgramSectionTwo">
                <div className="ProgramSectionTwo-partner-benefits">
                  <div className="ProgramSectionTwo-benefits-Message">
                    <h1>Partnering benefits</h1>
                    <h2>Does your business struggle during recessions?</h2>
                    <p>We've got the cure for you. By becoming a partner, you can build a portfolio here and receive
                      bookings throughout our platform to build a strong peer base in order to get you ready for the
                      recession phase. Your contribution impacts your strength in the recession phase!</p>
                    <button className="ProgramSectionTwo-become-partner-button">Become a partner</button>
                  </div>
                  <div className="ProgramSectionTwo-benefits-Table">
                    <div className="ProgramSectionTwo-benefits-Table-Title">
                      <h1>Partnering benefits</h1>
                    </div>
                    <div className="ProgramSectionTwo-benefits-table-Row">
                      <div className="ProgramSectionTwo-benefits-table-Left">Booking Revenue</div>
                      <div className="ProgramSectionTwo-benefits-table-Right">✔</div>
                    </div>
                    <div className="ProgramSectionTwo-benefits-table-Row">
                      <div className="ProgramSectionTwo-benefits-table-Left">Additional Incentives</div>
                      <div className="ProgramSectionTwo-benefits-table-Right">✔</div>
                    </div>
                    <div className="ProgramSectionTwo-benefits-table-Row">
                      <div className="ProgramSectionTwo-benefits-table-Left">Visibility</div>
                      <div className="ProgramSectionTwo-benefits-table-Right">✔</div>
                    </div>
                    <div className="ProgramSectionTwo-benefits-table-Row">
                      <div className="ProgramSectionTwo-benefits-table-Left">Data Accessibility</div>
                      <div className="ProgramSectionTwo-benefits-table-Right">✔</div>
                    </div>
                    <div className="ProgramSectionTwo-benefits-table-Row">
                      <div className="ProgramSectionTwo-benefits-table-Left">Collaborations with other companies</div>
                      <div className="ProgramSectionTwo-benefits-table-Right">✔</div>
                    </div>
                    <div className="ProgramSectionTwo-benefits-table-Row">
                      <div className="ProgramSectionTwo-benefits-table-Left">Competitive Commission</div>
                      <div className="ProgramSectionTwo-benefits-table-Right">✔</div>
                    </div>
                    <div className="ProgramSectionTwo-benefits-table-Row">
                      <div className="ProgramSectionTwo-benefits-table-Left">Corporate application channeling</div>
                      <div className="ProgramSectionTwo-benefits-table-Right">✔</div>
                    </div>
                    <div className="ProgramSectionTwo-benefits-table-Row">
                      <div className="ProgramSectionTwo-benefits-table-Left">Free PMS (Optional)</div>
                      <div className="ProgramSectionTwo-benefits-table-Right">✔</div>
                    </div>
                    <div className="ProgramSectionTwo-benefits-table-Row">
                      <div className="ProgramSectionTwo-benefits-table-Left">Channel Manager Friendly</div>
                      <div className="ProgramSectionTwo-benefits-table-Right">✔</div>
                    </div>
                    <div className="ProgramSectionTwo-benefits-table-Row">
                      <div className="ProgramSectionTwo-benefits-table-Left">Intuitive</div>
                      <div className="ProgramSectionTwo-benefits-table-Right">✔</div>
                    </div>

                  </div>
                </div>
              </div>
            </ProgramSection>
          </div>
          <div ref={SectionThree}>
            <ProgramSection scrollTo={scrollTo} goToSection={SectionFour}>
              <div className="ProgramSectionThree">
                <div className="ProgramSectionThree-Content">
                  <div className="ProgramSectionThree-Content-Profitability">
                    <ProfitabilitySection
                        title={"travacot"}
                        logo={profitLogoOne}
                        width={40}
                        height={51.2}
                        bars={[{
                          title: "Profitability in the Short-term",
                          value: 45
                        }, {title: "Profitability in the Long-term", value: 100, text: "+"}]}/>
                    <ProfitabilitySection
                        title={"Competitors (Current OTAs,TAs,IRSs)"}
                        bars={[{
                          title: "Profitability in the Short-term",
                          value: 55
                        }, {title: "Profitability in the Long-term", value: 55}]}/>
                  </div>
                  <div className="ProgramSectionThree-Content-Message">
                    <div className="ProgramSectionThree-Content-Message-Title">  
                      <div className="ProgramSectionThree-Content-Message-Title-Meter"/>
                      <h1>Profitability meter</h1>
                    </div>
                    <div className="ProgramSectionThree-Content-Message-Text">  
                      <h2>
                        Redirecting the travel agency market with our business model, because 
                        we hate the current state of it. Our magic will make you rethink your
                        revenue management by defying your forecasts.
                      </h2>
                      <p>
                        It is important to note that the benefits of your investment <b>will not be immediately
                        visible</b>, but will<b> manifest over the long term</b>. By contributing more and increasing
                        bookings for our business, your portfolio will grow substantially. This gradual and steady
                        growth will significantly enhance your ability to withstand economic challenges, such as
                        a recession. By focusing on long-term gains, you are setting yourself up for enduring
                        stability and success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ProgramSection>
          </div>
          <div ref={SectionFour}>
            <ProgramSection
                scrollTo={scrollTo}
                goToSection={SectionFive}
            >
              <div className="ProgramSectionFour">
                <h1>We create for you, because of you!</h1>
                <div className="ProgramSectionFour-Content">
                  <div className="ProgramSectionFour-Content-Logos">
                    <img style={{width: "80%"}} src={revConnect} alt="Reconnect logo"/>
                    <img style={{width: "80%", marginLeft: "7%"}} src={travalytics} alt="Travalytics logo"/>
                    <img style={{width: "80%", marginLeft: "15%"}} src={weCare} alt="WeCare logo"/>
                    <img style={{width: "80%", marginLeft: "2%"}} src={eagleEye} alt="eagle eye logo"/>
                  </div>
                  <div className="ProgramSectionFour-Content-Text">
                    <p>
                      Our comprehensive business model optimizes earnings by leveraging your contributions.
                      As you drive traffic to our platform, your revenue potential increases proportionately,
                      ensuring mutual growth and success. Our focus remains on your empowerment and prosperity.
                    </p>
                    <p>
                      Harness the power of data to inform strategic decisions,
                      enabling informed choices about the viability of opening a
                      franchise in specific locations. Data-driven insights
                      become your invaluable ally, guiding you towards optimal
                      outcomes.

                    </p>
                    <p>
                      Our unconditional love for animals inspires us to establish
                      category devoted to supporting animal welfare initiatives.
                      We take great pride in this commitment, as it allows us to
                      contribute directly to the well-being of animals. Through
                      this dedicated effort, we aim to embody compassion and
                      responsibility, creating a brighter future for our beloved
                      animal companions.
                    </p>
                    <p>
                      EagleEye serves as your indispensable ally in navigating
                      the search for the perfect product in the market of any
                      country of your liking. Empowering you with the ability to
                      discern nuances and analyse products comprehensively, it
                      assists you in determining whether a product aligns with
                      your research and requirements.
                    </p>
                  </div>
                </div>
              </div>
            </ProgramSection>
          </div>
          <div ref={SectionFive}>
            <ProgramSection
                scrollTo={scrollTo}
                goToSection={SectionSix}
            >
              <div className="ProgramSectionFive">
                <div className="ProgramSectionFive-Title">
                    <h1>We are in the favour list of key players such as...</h1>
                </div>
                <div className="ProgramSectionFive-Middle">
                  <Container>
                    <Row>
                      <Col>
                        <img src={avis} alt="Avis Logo"/>
                      </Col>
                      <Col>
                        <img src={national} alt="national Logo"/>
                      </Col>
                      <Col>
                        <img src={hertz} alt="hertz logo"/>
                      </Col>
                    </Row>
                    <Row style={{marginTop:"7%"}}>
                      <Col md={{offset: 2}}>
                        <img src={alamo} alt="Alamo logo"/>
                      </Col>
                      <Col>
                        <img src={enterprise} alt="enterprise logo"/>
                      </Col>
                      <Col>
                        <img src={budget} alt="budget logo"/>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="ProgramSectionFive-Bottom">
                  <p>and more...</p>
                </div>
              </div>

            </ProgramSection>
          </div>
          <div ref={SectionSix}>
            <ProgramSection
                IsLast={true}
            >
              <div className="ProgramSectionSix">
                <div className="ProgramSectionSix-Chidler">
                  <p>CHID</p>
                  <p>DLER</p>
                </div>
                <div className="ProgramSectionSix-X">
                  <div className="ProgramSectionSix-X-Left"/>
                  <div className="ProgramSectionSix-X-Right"/>
                </div>
                <div className="ProgramSectionSix-Travacot">
                  <img src={profitLogoOne} alt="travacot logo"/>
                  <div>
                    <p>travacot</p>
                  </div>
                </div>
              </div>
            </ProgramSection>
          </div>
          <Footer/>
        </div>
      </Fragment>
  );
};

export default Program;
