import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Logos des partenaires
const partners = [
  { name: 'UNICEF', logo: 'https://ae2cmali.com/wp-content/uploads/2019/11/unicef.jpg' },
//   { name: 'UNESCO', logo: '/logos/unesco.png' },
  { name: 'USAID', logo: 'https://ae2cmali.com/wp-content/uploads/2019/11/usaid.jpg' },
  { name: 'acdivoca', logo: 'https://ae2cmali.com/wp-content/uploads/2019/11/acdi-voca.jpg' },
  { name: 'helenkeler', logo: 'https://ae2cmali.com/wp-content/uploads/2019/11/helen-keler.jpg' },
  { name: 'ONU femmes', logo: 'https://ae2cmali.com/wp-content/uploads/2019/11/ONU-femmes.jpg' },
  { name: 'BOAD', logo: 'https://ae2cmali.com/wp-content/uploads/2019/11/BAD.jpg' },
  { name: 'ICCO', logo: 'https://ae2cmali.com/wp-content/uploads/2019/11/icco.jpg' },
//   { name: 'Partner 9', logo: '/logos/partner9.png' },
];

const PartnerSlider = () => {
  return (
    <div className="mt-16 bg-gray-100 py-10 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Nos Partenaires</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4} // Nombre de slides visibles en même temps
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto slide avec délai
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="w-full"
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="flex flex-col items-center transition transform hover:scale-105 duration-300">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4 rounded-lg shadow-md" // Taille ajustée
              />
              <p className="font-semibold text-lg text-center text-gray-800">{partner.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerSlider;
