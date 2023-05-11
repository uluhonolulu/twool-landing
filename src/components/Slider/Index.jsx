import GeneratedMessage from "../GeneratedMessage/Index";
import TwitterCard from "../TwitterCard/Index";
import "./SlideContainer.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  EffectCoverflow,
  Autoplay,
  Scrollbar,
  Navigation,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

SwiperCore.use([Pagination, EffectCoverflow, Autoplay, Scrollbar, Navigation]);

const data = [
  {
    id: 1,
    name: "Go For Rafizi",
    username: "@...",
    bio: "In the process to become Jedi of Digital Marketing | Copywriting #HelpMeLearning",
    twoolMessage:
      "Hey there, Rafizi! Nice to connect with you on Twitter. I like your dedication to mastering digital marketing, and I appreciate the helpful tips in your tweets about copywriting. Keep up the awesome work!",
    otherMessage: "Hey Go, love your tweets! Keep up the good work!",
  },
  {
    id: 2,
    name: "Dr Stephen Harwood",
    username: "@...",
    bio: "Researching, writing & innovating #TrustInTech #TechForGood #equality #sustainability #emergingtech #SDGs #futures #AI #digital #metaverse @TechnoForeSight",
    twoolMessage:
      "Hey Stephen, nice to connect with you on Twitter! I've been reading your tweets and I appreciate the insights you share on #TrustInTech and #TechForGood. Your focus on #equality and #sustainability in emerging tech is awesome. Keep it up!",
    otherMessage: "Hey Dr, love your tweets! Keep up the good work!",
  },
  {
    id: 3,
    name: "amanda@55",
    username: "@...",
    bio: "Blogger CryptoCurrency",
    twoolMessage:
      "Hey Amanda, how's it going? Just wanted to say that I've been keeping up with your tweets and really appreciate your insights on all things CryptoCurrency. Your blog is awesome too, keep it up! Nice to connect with you.",
    otherMessage: "Hey amanda@55, love your tweets! Keep up the good work!",
  },
];

const SliderContainer = ({
  name,
  username,
  twoolMessage,
  otherMessage,
  bio,
}) => {
  return (
    <div className="slider-container">
      <TwitterCard name={name} username={username} bio={bio} />
      <GeneratedMessage
        twoolMessage={twoolMessage}
        otherMessage={otherMessage}
      />
    </div>
  );
};

const Slides = () => {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      effect="slide" // sets the effect to coverflow
      grabCursor="A11y" // sets grab cursor as the hover cursor over the slides
      centeredSlides="true" // used to center the active slide
      spaceBetween={0} // distance between slides in px
      slidesPerView={1} // number of slides per view
      loop="true" // sets the slides on a continuous loop
      pagination={{ clickable: true, dynamicBullets: true }} // allows for pagination bullets to be dynamic and clickable
    >
      {data.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <SliderContainer
              name={item.name}
              username={item.username}
              twoolMessage={item.twoolMessage}
              otherMessage={item.otherMessage}
              bio={item.bio}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slides;
