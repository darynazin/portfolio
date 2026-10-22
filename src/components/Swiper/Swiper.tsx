import React, { useRef, useState } from 'react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import './Swiper.scss';

interface SwiperProps {
  images: string[];
}

const Swiper: React.FC<SwiperProps> = ({ images }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const sync = (s: SwiperType) => {
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  return (
    <div className="gallery">
      <div className="gallery__frame">
        <SwiperReact
          className="gallery__swiper"
          modules={[Navigation, Keyboard]}
          slidesPerView={1}
          spaceBetween={16}
          speed={350}
          grabCursor
          keyboard={{ enabled: true }}
          onSwiper={(s) => {
            swiperRef.current = s;
            sync(s);
          }}
          onSlideChange={sync}
        >
          {images.map((src, i) => (
            <SwiperSlide key={src + i}>
              <img src={src} alt={`Slide ${i + 1}`} draggable={false} />
            </SwiperSlide>
          ))}
        </SwiperReact>

        <button
          type="button"
          className="gallery__btn gallery__btn--prev"
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
          aria-label="Previous slide"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#000000"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>

        </button>

        <button
          type="button"
          className="gallery__btn gallery__btn--next"
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          aria-label="Next slide"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#000000"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>

        </button>
      </div>
    </div>
  );
};

export default Swiper;