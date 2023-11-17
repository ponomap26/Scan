import React from "react";
import "./Slider.css";
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import arrow from './arrow.png'
import slide1 from './slide1.png';
import slide2 from './slide2.png';
import slide3 from './slide3.png';
import {Navigation} from "swiper/modules";


SwiperCore.use([Navigation]);

const SimpleSlider = () => {
    const slides = [
        { id: 1, img: slide1, text: 'Высокая и оперативная скорость обработки заявки' },
        { id: 2, img: slide2, text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос' },
        { id: 3, img: slide3, text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству' },
    ];

    const swiperRef = React.useRef(null);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            navigation={false}
            className="slider"
            ref={swiperRef}
            breakpoints={{
                745: {
                    slidesPerView: 2
                },
                390: {
                    slidesPerView: 1,
                }
            }}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="slide">
                        <img src={slide.img} alt="Изображение для слайда" />
                        <p>{slide.text}</p>
                    </div>
                </SwiperSlide>
            ))}
            <div className="custom-button-prev"><img src={arrow} alt="Кнопка для показа предыдущего слайда" onClick={goPrev} /></div>
            <div className="custom-button-next"><img src={arrow} alt="Кнопка для показа следующего слайда" onClick={goNext} /></div>
        </Swiper>
    );
};

export default SimpleSlider;
