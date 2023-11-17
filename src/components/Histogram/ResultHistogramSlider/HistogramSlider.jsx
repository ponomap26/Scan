import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';


import {A11y, Navigation, Pagination} from "swiper/modules";
import loading from "./loading.svg";
import arrow from '../../Home/WhBlock/Slider/arrow.png';

import "./HistogramSlider.css";
import slide1 from "../../Home/WhBlock/Slider/slide1.png";
import slide2 from "../../Home/WhBlock/Slider/slide2.png";
import slide3 from "../../Home/WhBlock/Slider/slide3.png";


export function formatDate(str) {
    let date = new Date(str);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }

    return day + "." + month + "." + year;
}

const HistogramSlider = (props) => {
    const {results} = props;
    const swiperRef = React.useRef(null);
    console.log(results)

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const slides = [
        {id: 1, img: slide1, text: ''},
        {id: 2, img: slide2, text: ''},
        {id: 3, img: slide3, text: ''},
    ];
    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className="relative-wrapper">
            <Swiper
                    spaceBetween={7}
                    slidesPerView={9}
                    navigation={false}
                    className="resultsSlider"
                    ref={swiperRef}
                    breakpoints={{
                        1245: {
                            slidesPerView: 8
                        },
                        1105: {
                            slidesPerView: 7
                        },
                        958: {
                            slidesPerView: 6
                        },
                        815: {
                            slidesPerView: 5
                        },
                        670: {
                            slidesPerView: 4
                        },
                        520: {
                            slidesPerView: 3
                        }
                    }}
                >
                    <SwiperSlide key={0}>
                        <tr className="slide">
                            <td>Период</td>
                            <td>Всего</td>
                            <td>Риски</td>
                        </tr>
                    </SwiperSlide>
                    { results !== "loading" ? results[0].data.map((result, index) => (
                        <SwiperSlide key={index + 1}>
                            <tr className="slide">
                                <td>{formatDate(result.date)}</td>
                                <td>{result.value + results[1].data[index].value}</td>
                                <td>{results[1].data[index].value}</td>
                            </tr>
                        </SwiperSlide>
                    )) :
                        <SwiperSlide className="loading">
                            <div>
                                <img src={loading} alt="" />
                                <span>Загружаем данные</span>
                            </div>
                        </SwiperSlide>
                    }
                </Swiper>
            <div className="custom-button-prev">
                <img
                    src={arrow}
                    alt="Кнопка для показа предыдущего слайда"
                    onClick={goPrev}
                />
            </div>
            <div className="custom-button-next">
                <img
                    src={arrow}
                    alt="Кнопка для показа следующего слайда"
                    onClick={goNext}
                />
            </div>
        </div>
    );
};

export default HistogramSlider;