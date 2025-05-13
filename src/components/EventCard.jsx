import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay } from "swiper/modules";

import arrowLogo from "./assets/arrow.svg";
import techImg from "./assets/Tech Week.jpg";
import onlineSpectrumImg from "./assets/Online Spectrum.jpg"
import schoolSpectrumImg from "./assets/School Spectrum.jpg"
import EventCard from "../../ISTE-2025/src/components/EventCard";

// Event Data with Images
const eventData = [
  {
    title: "State Conventions",
    description:
      "We have been host to two state-level conventions of ISTE- Drishti in 2017, and Atreya in 2019. An exciting blend of events, workshops, lectures and exhibitions, Atreya witnessed a footfall of over 2.5k people coming together from all over the state. The programme commenced with an inaugural ceremony by our chief guest C R Thomas, the Deputy Director of VSSC-ISRO.",
    image: "src/assets/eventImg1.jpg",
  },
  {
    title: "Newton Speaks",
    description:
      "Titled after one of the biggest pioneers of science who dared to think outside the box, our monthly webinar series aims at connecting students with people who have achieved wonders in their fields.",
    image: "src/assets/eventImg2.jpg",
  },
  {
    title: "JEENIUS",
    description:
      "One of our focal events is our hugely successful annual mock exam for engineering aspirants- JEEnius. Modelled after the All India Joint Entrance Examination, this test intends to familiarize students with the question style and paper pattern, and will also help them gauge out their stand in the rankings. In the past, we have conducted JEEnius in various districts in Kerala & Andhra Pradesh. Last year, we took JEEnius beyond the shores of India and conducted it in Doha, Qatar. We’ve also collaborated with Tathva, the annual techno-management fest of NIT Calicut, to conduct JEEnius under the banner “Zeroth Attempt”.",
    image: "src/assets/jeenius.jpg",
  },
  {
    title: "School Spectrum",
    description:
      "Spreading knowledge through fun events is a cherished goal of ours. With a wide range of activities testing oratory talent to technical wiz to managerial skills, Spectrum is the pride of our club as it allows us to reach out to school students and put up activities which help them realize their capabilities and nurture their soft skills.",
    image: schoolSpectrumImg,
  },
  {
    title: "Online Spectrum",
    description:
      "Another hugely successful event is Online Spectrum, held for the first time in July 2020. Collaborating with ISTE student chapters from other colleges, we conducted an all India level online competition, with various fun challenges ranging from technical skills to creative talents, to keep the quarantine slump at bay. The highlight was Dream Codex, a 4-round coding event over the span of a week. The event is a testament to our core qualities of teamwork and creativity.",
    image: onlineSpectrumImg,
  },
  {
    title: "Tech week",
    description:
      "Tech Week, conducted alongside other NITC clubs, is a jam-packed 2 day weekend, boasting fun events such as Junkyard Wars (Beat the other teams by building the best machine out of scrap materials!), Admania (Market the most whimsical products!), Tech charades (The type of dumb charades Newton would enjoy!), and so on. It is no doubt one of the biggest events first years eagerly look forward to.",
    image: techImg,
  },


];

function EventCard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen border-4 p-5 w-full max-w-screen-lg relative mx-auto">
      <h1 className="text-2xl font-bold mb-5">EVENTS</h1>

      {/* Left Navigation Arrow */}
      <img
        src={arrowLogo}
        alt="Arrow Left"
        className="h-10 w-10 rotate-180 absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer swiper-button-prev hidden md:block"
      />

      {/* Swiper Carousel */}
      <div className="flex justify-center items-center w-full">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow,Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            200: { slidesPerView: 1, centeredSlides: true },
            650: { slidesPerView: 2 },
          }}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000, 
            disableOnInteraction: false, 
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 3,
            stretch: 0,
            depth: 300,
            modifier: 2,
            slideShadows: false,
          }}
          className="w-580px"
        >
          {/* Loop through events */}
          {eventData.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col border-4 rounded-2xl justify-center items-center p-5 w-[300px] h-[350px] md:w-[450px] md:h-[450px] gap-3 bg-white transition-all duration-300 swiper-slide-active:scale-110 md:swiper-slide-active:scale-125">
                
                {/* Image Container with Background Image */}
                <div
                  className="bg-gray-300 border-3 rounded-2xl w-full h-40 md:h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                ></div>

                <div className="w-full px-2">
                  <div className="w-fit bg-black text-white px-2 py-1">
                    <p>{event.title}</p>
                  </div>
                  <hr className="border-black" />
                  <p className="text-sm md:text-base max-h-24 md:max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-white">{event.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Navigation Arrow */}
      <img
        src={arrowLogo}
        alt="Arrow Right"
        className="h-10 w-10 absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer swiper-button-next hidden md:block"
      />
    </div>
  );
}

export default EventCard;