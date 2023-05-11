import "./Discover.css";
import searchImg from "../../assets/search.svg";
import messageImg from '../../assets/message.svg';
import leads from '../../assets/leads.svg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Discover = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="discover-section">
      <div className="header">
        <div className="left">
          <h2>Discover More Leads on Twitter with Our AI-powered Tool</h2>
        </div>
        <div className="right">
          <p>
            Looking to expand your business reach? Look no further! With our
            AI-powered tool, you can now uncover a treasure trove of leads on
            Twitter.
          </p>
        </div>
      </div>

      <div className="step-cards">
        <div className="step-card" data-aos="fade-up" data-aos-duration="2000">
          <h3>1</h3>
          <img src={searchImg} alt="search image" />
          <h2>Identify Potential Customers</h2>
          <p>
            By analyzing data from Twitter and using advanced algorithms, we can
            identify potential customers who may be interested in your products
            or services.
          </p>
        </div>

        <div className="step-card" data-aos="fade-up" data-aos-duration="2000">
          <h3>2</h3>
          <img src={messageImg} alt="message image" />
          <h2>Generate Messages</h2>
          <p>
          For every lead, twool generates a unique message based on the lead's profile or interests. 
          </p>
        </div>

        <div className="step-card" data-aos="fade-up" data-aos-duration="2000">
          <h3>3</h3>
          <img src={leads} alt="leads image" />
          <h2>Review Leads</h2>
          <p>
          Review your leads, add a call to action, or just click "Send" and wait for replies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
