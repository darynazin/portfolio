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
          <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" /></svg>
        </button>

        <button
          type="button"
          className="gallery__btn gallery__btn--next"
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

export default Swiper;