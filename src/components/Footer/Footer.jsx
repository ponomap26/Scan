import React from 'react';
import "./Footer.css"
import Eqw from "/src/public/images/eqw-1@2x.png"

const Footer = () => (
    <div className="screen_foot" >
        <img className="eqw" alt="Eqw" src={Eqw} />
        <p className="text-wrapper">г. Москва, Цветной б-р, 40</p>
        <p className="text-wrapper"> +7 495 771 21 11</p>
        <p className="text-wrapper"> info@skan.ru</p>
        <p className="text-wrapper-2">Copyright. 2022</p>
    </div>
);

export default Footer;