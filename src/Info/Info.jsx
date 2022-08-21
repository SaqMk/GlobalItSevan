import React from "react";
import styles from "../Info/info.module.css";
import development from "../Assets/Images/development.svg";
import works from "../Assets/Images/works.svg";
import training from "../Assets/Images/training.svg";
import Slider from "react-slick";

export default function Info({theme}) {
  function preventDragHandler(e) {
    e.preventDefault();
  }
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
  };
  return (
    <>
      {window.screen.width > 600 ? (
        <div id={styles[theme]} className={styles.container}>
          <div className={styles.wrapper}>
            <img
              onDragStart={preventDragHandler}
              src={development}
              className={styles.itemImage}
            ></img>
            <p className={styles.title}>Պրոֆեսիոնալ մոտեցում</p>
            <p className={styles.content}>
              Մեր մասնագետները ամեն ինչ կանեն որ ձեզ ապահովեն բարձրորակ
              կրթությամբ և ծառայություններով։ Երկար տարիների փորձը և բարձորակ
              աշխատանքային մոտեցումը կտա իր արձյունքը։
            </p>
          </div>
          <div className={styles.wrapper}>
            <img
              onDragStart={preventDragHandler}
              src={works}
              className={styles.itemImage}
            ></img>
            <p className={styles.title}>Որակյալ աշխատանք</p>
            <p className={styles.content}>
              Մեր պրոֆեսիոնալ աշխատակազմը երաշխավորում է բարձրորակ
              ծառայությունների մատուցում։ Եթե վստահեք ձեր աշխատանքը մեր
              թիմին ապա կարող եք վսահ լինել որ արձյունքը ձեզ կգոհացնի։
            </p>
          </div>
          <div className={styles.wrapper}>
            <img
              onDragStart={preventDragHandler}
              src={training}
              className={styles.itemImage}
            ></img>
            <p className={styles.title}>Բարձրորակ կրթություն</p>
            <p className={styles.content}>
              Մեր մասնագետները ամեն ինչ կանեն, որ ձեզ ապահովեն բարձրորակ
              կրթությամբ և ծառայություններով։ Երկար տարիների փորձը և բարձորակ
              աշխատանքային մոտեցումը կտա իր արձյունքը։
            </p>
          </div>
        </div>
      ) : (
        <div id={styles[theme]} className={styles.mobileContainer}>
          <Slider {...settings}>
            <div className={styles.mobileWrapper}>
              <img
                onDragStart={preventDragHandler}
                src={development}
                className={styles.mobileItemImage}
              ></img>

              <p className={styles.mobileTitle}>Պրոֆեսիոնալ մոտեցում</p>
              <p className={styles.mobileContent}>
                Մեր մասնագետները ամեն ինչ կանեն որ ձեզ ապահովեն բարձրորակ
                կրթությամբ և ծառայություններով։
              </p>
            </div>
            <div className={styles.mobileWrapper}>
            <img
              onDragStart={preventDragHandler}
              src={works}
              className={styles.mobileItemImage}
            ></img>
            <p className={styles.mobileTitle}>Որակյալ աշխատանք</p>
            <p className={styles.mobileContent}>
              Մեր պրոֆեսիոնալ աշխատակազմը երաշխավորում է բարձրորակ
              ծառայությունների մատուցում։
            </p>
            </div>
            <div className={styles.mobileWrapper}>
            <img
              onDragStart={preventDragHandler}
              src={training}
              className={styles.mobileItemImage}
            ></img>
            <p className={styles.mobileTitle}>Բարձրորակ կրթություն</p>
            <p className={styles.mobileContent}>
              Մեր մասնագետները ամեն ինչ կանեն, որ ձեզ ապահովեն բարձրորակ
              կրթությամբ և ծառայություններով։ 
            </p>
            </div>
          </Slider>
        </div>
      )}
    </>
  );
}
