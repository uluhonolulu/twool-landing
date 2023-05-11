import "./Header.css";
import heroImg from "../../assets/hero-img.svg";
const Header = () => {
 
  return (
    <>
      <div className="header">
        <nav>
          <div className="left">
            <h1 className="logo">twool</h1>
          </div>
          <div className="right"></div>
        </nav>
        <div className="hero-section">
          <div className="left">
            <h2>
              <span>Scale your Twitter DM outreach</span> without losing your
              human touch
            </h2>
            <p>
              Unlock the Power of Advanced Search to Find High-Quality Leads and
              Send Personalized Messages at Scale
            </p>
          </div>
          <div className="right">
            <img src={heroImg} alt="hero image"  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
