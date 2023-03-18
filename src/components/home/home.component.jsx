import GooglePlayIcon from "../../Images/Home/GooglePlay.png";
import AppStoreIcon from "../../Images/Home/AppStore.png";
import WorldMap from "../../Images/Home/WorldMap.png";
import DownloadFrame from "../../Images/Home/DownloadFrame.png";
import Umbrella from "../../Images/Home/Umbrella.png";
import Avis from "../../Images/Home/AVIS_logo_2012 2.png";
import Alamo from "../../Images/Home/alamo.png";
import Sixt from "../../Images/Home/Sixt.png";
import EnterpRent from "../../Images/Home/enterprise-rent-a-car-logo 1.png";
import hertz from "../../Images/Home/Hertz_Car_Rental_logo 3.png";
import ReferAndEarn from "../../Images/Home/ReferAndEarn.png";
import "./home.styles.scss";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className='Home-Container'>
      <div className='Home-Download'>
        <p>Available on Google and IOS</p>
        <img
          src={GooglePlayIcon}
          alt='Google Play'
        />
        <img
          src={AppStoreIcon}
          alt='App store'
        />
      </div>
      <h1>Your trip starts here!</h1>
      <div className='Home-WorldMap'>
        <img
          src={WorldMap}
          alt='World Map'
        />
      </div>
      <h1>We’re always here for you</h1>
      <div className='Home-DownloadFrame'>
        <img
          src={DownloadFrame}
          alt='Mobile app'
        />
        <div className='DownloadNow'>
          <p>You can download the app here</p>
          <img
            src={GooglePlayIcon}
            alt='Google Play'
          />
          <img
            src={AppStoreIcon}
            alt='App store'
          />
        </div>
      </div>
      <h1>We’re the hub that connects all</h1>
      <div className='Home-CarRentals-Container'>
        <div>
          <img
            src={Umbrella}
            alt='Umbrella'
          />
        </div>
        <div className='Home-CarRentalsLogo'>
          <Container>
            <Row md={10}>
              <Col>
                <div className='Grid-CarRentLogo'>
                  <img
                    src={Avis}
                    alt='Avis'
                  />
                </div>
              </Col>
              <Col>
                <div className='Grid-CarRentLogo'>
                  <img
                    src={Sixt}
                    alt='Sixt'
                  />
                </div>
              </Col>
            </Row>
            <Row md={10}>
              <Col>
                <div className='Grid-CarRentLogo'>
                  <img
                    src={hertz}
                    alt='Hertz'
                  />
                </div>
              </Col>
              <Col>
                <div className='Grid-CarRentLogo'>
                  <img
                    src={EnterpRent}
                    alt='EnterpRent'
                  />
                </div>
              </Col>
            </Row>
            <Row md={10}>
              <Col>
                <div className='Grid-CarRentLogo'>
                  <img
                    src={Alamo}
                    alt='Alamo'
                  />
                </div>
              </Col>
              <Col>
                <div className='Grid-CarRentLogo'>
                  <p>And more...</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div>
        <h1>Passivity and longevity</h1>
        <div className='Home-ReferAndEarn'>
          <div className='Home-ReferAndEarn-Message'>
            <h1>Refer and earn</h1>
            <p>
              The title says it all. Talk about us, make people use our
              application and get rewarded!
            </p>
          </div>
          <div>
            <img
              src={ReferAndEarn}
              alt='Refer And Earn'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
