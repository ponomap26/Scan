import React from "react";

// import "./WhyBlock.css";
import image from "./whyblock.png";
import Slider from "./Slider/Slider.jsx";

export default function WhBlock() {
    return (
        <div className="whyblock">
            <div className="wrapper">
                <title

                >Почему именно мы</title>
                <Slider/>
                <img src={image} alt="Иллюстрация раздела"/>
            </div>
        </div>
    )
}