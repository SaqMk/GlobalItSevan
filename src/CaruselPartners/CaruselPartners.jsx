import React from "react";
import styles from "../CaruselPartners/caruselPartners.module.css";
import Slider from "react-slick";
import partner from "../Assets/Images/partner.svg";

export default function CaruselPartners({ theme }) {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  const partners = [
    {
      img: partner,
    },
    {
      img: partner,
    },
    {
      img: partner,
    },
    {
      img: partner,
    },
    {
      img: partner,
    },
    {
      img: partner,
    },
  ];
  console.log(theme)
  return (
    <>
      {window.screen.width > 600 ? (
        <Slider {...settings}>
          {partners.map((x,index) => {
            return (
              <div key={index} className={styles.item} id={styles[theme]}>
                <img className={styles.partnerImg} src={x.img}></img>
              </div>
            );
          })}
        </Slider>
      ) : (
        <Slider {...settings}>
          {partners.map((x,index) => {
            return (
              <div key={index} className={styles.mobileItem} id={styles[theme]}>
                <img className={styles.mobilePartnerImg} src={x.img}></img>
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
}
