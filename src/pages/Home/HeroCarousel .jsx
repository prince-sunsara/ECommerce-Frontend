import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "HANDBAGS",
    subtitle: "Min. 60% Off",
    cta: "+ Explore",
    image: "/images/home/bag.jpg",
  },
  {
    id: 2,
    title: "SHOES",
    subtitle: "Flat 50% Off",
    cta: "+ Explore",
    image: "/images/home/shoes.jpg",
  },
  {
    id: 3,
    title: "WATCHES",
    subtitle: "Up to 70% Off",
    cta: "+ Explore",
    image: "/images/home/watch.jpg",
  },
];

export default function HeroCarousel() {
  return (
    <div className="w-full bg-[#2B2A40]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col md:flex-row w-full min-h-[500px] md:min-h-[600px]">
              {/* Image Section */}
              <div className="w-full md:w-2/3 h-[300px] md:h-auto">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/3 bg-[#1C1B2A] flex items-center justify-center p-6 md:p-10">
                <div className="text-white text-center space-y-4">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold break-words">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl text-[#B3B3C1]">
                    {slide.subtitle}
                  </p>
                  <button className="px-5 py-2 border border-[#3D3C50] text-white hover:bg-[#7D5FFF] hover:text-white transition-all rounded-lg text-sm md:text-base cursor-pointer">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
