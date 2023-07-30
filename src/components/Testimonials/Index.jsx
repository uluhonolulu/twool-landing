import React from 'react';
import stefan from './stefan.jpg';
import sochima from './sochima.jpg';
import './Testimonials.css';

const Testimonials = (props) => {
	const username = "uluhonolulu";
	const name = "Ulu Honolulu";
	const text = "I've been using this for a few months now and it's been great. I've been able to get a lot of feedback from my followers and it's helped me grow my business. I highly recommend it to anyone who wants to grow their business.";

	return (
		<>
			<h2>What users say</h2>
			<div className='testimonials'>
				<Testimonial name="Stefan | Ghostwriter" username="stefan_puc" text="I was skeptical about trying a DM tool from an Indie developer, but Artyom was extremely helpful and twool gives me proper leads every day. I absolutely love it!" avatar={stefan}/>
				<Testimonial name="Sochima Akujuo| Sandwich(Lead & Offer) -Copywriter" username="sochima_akujuo" text="Before now, getting qualified leads on Twitter had been my major limitations to sending out cold dm's. But since using the twool software. I've had more leads than I could dm in a day. An average of 100 per day. It's really incredible." avatar={sochima}/>
			</div>
		</>
	)
}

export default Testimonials;

function Testimonial({name, username, text, avatar}) {
	return (
		<div className="twittercard-section">
		<div className="user-box">
		  <div className="user-info">
			<div className="details">
			<h2 className="head-img">
			  <img src={avatar} alt="avatar" />
			</h2>
			<div className="username">
			<h1 className="title">
			  {name}
			  <svg
				viewBox="0 0 512 512"
				width="100"
				title="check-circle"
				className="check"
			  >
				<path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
			  </svg>
			</h1>
			<h4 className="sub-title">
			  @{username}
			</h4>
			</div>
			</div>
  
		  </div>
  
		  <p className="box-description">
			{text}
		  </p>
		</div>
	  </div>
	)
}
