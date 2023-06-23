import "./Pricing.css";
import AOS from "aos";
import { useEffect } from "react";
import { useLink } from '@linked/react/lib';

const Pricing = () => {
	const $username = useLink('');
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="pricing-section">
      <h2>
        Start sending Twitter DMs
        <br />
        <span>today</span>
      </h2>
      <p>Join closed beta and get a lifetime discount</p>
      <div className="pricing-cards">
        <div className="price-card" data-aos="fade-up" data-aos-duration="1600">
          <p>Regular Price</p>
          <h3 className="strikethrough">$49/month</h3>
        </div>

        <div className="price-card" data-aos="fade-up" data-aos-duration="1600">
          <p>Early bird price</p>
          <h3 className="strikethrough">$40/month</h3>
        </div>

        <div className="price-card" data-aos="fade-up" data-aos-duration="1600">
          <p>
            <strong>Your price</strong>
          </p>
          <h3>$30/month</h3>
        </div>
      </div>

      <div className="twitter-wrap">
        <input {...$username.props} type="text" placeholder="Enter your twitter handle" />
        <button onClick={go}>
          <span>Send</span>
        </button>
      </div>
      <p className="footer">
        When you click "Sign up", you'll be redirected to take a short survey.
        I'll contact you on Twitter when I get the results of the survey.
      </p>
    </div>
  );

  function go() {
	const username = $username.value;
	window.location.href = `https://tally.so/r/nW2M1j?username=${username}`;
}

};

export default Pricing;
