import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const HorizontalProductSlider = ({ title, products }) => {
  return (
    <section className="px-4 md:px-8 py-6 mt-2 md:mt-10 bg-[#1C1B2A]">
      <h2 className="text-3xl font-semibold text-white mb-4">{title}</h2>

      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#2B2A40] rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[120px] object-contain mb-3"
              />
              <p className="text-sm md:text-base font-medium">{product.name}</p>
              <p className="text-[#7D5FFF] text-sm mt-1 font-semibold">
                {product.price}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HorizontalProductSlider;
