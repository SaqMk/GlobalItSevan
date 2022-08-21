import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "../Carousel/carousel.module.css";
import grup from "../Assets/Images/grup.svg";
import individual from "../Assets/Images/individual.svg";
import calendar from "../Assets/Images/calendar.svg";
import ReactStars from "react-stars";

export default function Carousel({theme}) {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const items = [
    {
      id: 1,
      titleItem: "Front-End",
      title: "Ծրագրավորում",
      content:
        "Վեբ ծրագրավորումը ներկայումս աշխատաշուկայում ամենապահանջված մասնագիտություններից է։ Այն բաժանվում է 2 հիմնական մասնագիտացումների՝ Front-End և Back-End ծրագրավորում",
      aboutgrup: "3-6 անձ",
      aboutindividual: "1 անձ",
      aboutcalendar: "4-6 ամիս",
    },
    {
      id: 2,
      titleItem: "Back-End",
      title: "Ծրագրավորում",
      content:
        "Ծրագրավորումը շուկայում պահանջվող և ամենաբարձր վճարվող մասնագիտություններից մեկն է որը ընտրելով որպես բարձորակ և որակյալ մասնագետ դառնալուն մի քայլ էլ եք մոտենում։",
      aboutgrup: "3-5 անձ",
      aboutindividual: "1 անձ",
      aboutcalendar: "4-6 ամիս",
    },
    { id: 3 },
  ];
  return (
    <>
      {window.screen.width > 600 ? (
        <div className={styles.container}>
          <Slider {...settings}>
            {items.map((x, index) => {
              return (
                <div id ={styles[theme]} key={index} className={styles.item}>
                  <div className={styles.imgContainer}>
                    <img className={styles.img} src={x.img}></img>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.contentContainer}>
                      <p className={styles.titleItem}>{x.titleItem}</p>
                      <p className={styles.title}>{x.title}</p>
                      <p className={styles.content}>{x.content}</p>
                      <button className={styles.apply}>Դիմել</button>
                    </div>
                    <div className={styles.contentContainer}>
                      <div className={styles.info}>
                        <div className={styles.infoContainer}>
                          <img
                            className={styles.iconInfo}
                            src={individual}
                          ></img>
                          <p className={styles.about}>{x.aboutgrup}</p>
                        </div>
                        <div className={styles.infoContainer}>
                          <img className={styles.iconInfo} src={grup}></img>
                          <p className={styles.about}>{x.aboutindividual}</p>
                        </div>
                        <div className={styles.infoContainer}>
                          <img className={styles.iconInfo} src={calendar}></img>
                          <p className={styles.about}>{x.aboutcalendar}</p>
                        </div>
                      </div>
                     
                      <button className={styles.progForStudy}>
                        Ուս․ ծրագիր
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      ) : (
        <div className={styles.mobileContainer}>
          <Slider {...settings}>
            {items.map((x, index) => {
              return (
                <div key={index} className={styles.mobileItem}>
                  <div className={styles.mobileImgContainer}>
                    <img className={styles.mobileImg} src={x.img}></img>
                  </div>
                  <div className={styles.mobileWrapper}>
                    <div className={styles.mobileContentContainer}>
                      <p className={styles.mobileTitleItem}>{x.titleItem}</p>
                      <p className={styles.mobileTitle}>{x.title}</p>
                      <p className={styles.mobileContent}>{x.content}</p>
                      <button className={styles.mobileApply}>Դիմել</button>
                    </div>
                    <div className={styles.mobileContentContainer}>
                      <div className={styles.mobileInfo}>
                        <div className={styles.mobileInfoContainer}>
                          <img
                            className={styles.mobileIconInfo}
                            src={individual}
                          ></img>
                          <p className={styles.mobileAbout}>{x.aboutgrup}</p>
                        </div>
                        <div className={styles.mobileInfoContainer}>
                          <img
                            className={styles.mobileIconInfo}
                            src={grup}
                          ></img>
                          <p className={styles.mobileAbout}>
                            {x.aboutindividual}
                          </p>
                        </div>
                        <div className={styles.mobileInfoContainer}>
                          <img
                            className={styles.mobileIconInfo}
                            src={calendar}
                          ></img>
                          <p className={styles.mobileAbout}>
                            {x.aboutcalendar}
                          </p>
                        </div>
                      </div>
                      <button className={styles.mobileProgForStudy}>
                        Ուս․ ծրագիր
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
}
