import React from 'react';
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from './Slide';
import 'swiper/css';
import 'swiper/css/navigation';
import './fix-nav.css';

SwiperCore.use([Navigation]);

const Slider1 = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
				navigation={true}
				loop={true}
                spaceBetween={30}
				className="px-4"
            >
				
				<SwiperSlide>
					<Slide
						name="Go For Rafizi"
						wrongFirstName="Go"
						bio="In the process to become Jedi of Digital Marketing | Copywriting #HelpMeLearning"
						message="Hey there, Rafizi! Nice to connect with you on Twitter. I like your dedication to mastering digital marketing, and I appreciate the helpful tips in your tweets about copywriting. Keep up the awesome work!"
					/>
				</SwiperSlide>

 				<SwiperSlide>
					<Slide
						name="amanda@55"
						wrongFirstName="amanda@55"
						bio="Blogger CryptoCurrency"
						message="Hey Amanda, how's it going? Just wanted to say that I've been keeping up with your tweets and really appreciate your insights on all things CryptoCurrency. Your blog is awesome too, keep it up! Nice to connect with you."
					/>
				</SwiperSlide>

 				<SwiperSlide>
					<Slide
						name="Dr Stephen Harwood"
						wrongFirstName="Dr"
						bio="Researching, writing & innovating #TrustInTech #TechForGood #equality #sustainability #emergingtech #SDGs #futures #AI #digital #metaverse @TechnoForeSight"
						message="Hey Stephen, nice to connect with you on Twitter! I've been reading your tweets and I appreciate the insights you share on #TrustInTech and #TechForGood. Your focus on #equality and #sustainability in emerging tech is awesome. Keep it up!"
					/>
				</SwiperSlide>



           </Swiper>
        </>
    );
};

export default Slider1;
