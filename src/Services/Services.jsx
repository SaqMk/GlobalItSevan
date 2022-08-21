import React from "react";
import styles from "../Services/services.module.css";
import WebSites from "../Assets/Images/WebSites.svg";
import PhoneProgramm from "../Assets/Images/PhoneProgramm.svg";
import PcProgramm from "../Assets/Images/PcProgramm.svg";
import PcPhoneGames from "../Assets/Images/PcPhoneGames.svg";
import design from "../Assets/Images/design.svg";
import SeoSmm from "../Assets/Images/SeoSmm.svg";

export default function Services({serv,theme}) {

  const items = [
    {
      id: 1,
      title: "Վեբ Կայքերի պատրաստում",
      img: WebSites,
    },
    {
      id: 2,
      title: "Բջջային հավելվածներ",
      img: PhoneProgramm,
    },
    {
      id: 3,
      title: "Համակարչային հավելվածներ",
      img: PcProgramm,
    },
    {
      id: 4,
      title: "Բջջային և համ․ խաղեր",
      img: PcPhoneGames,
    },
    {
      id: 5,
      title: "Վեբ և գրաֆիկ դիզայն",
      img: design,
    },
    {
      id: 6,
      title: "ՍԵՈ և ՍՄՄ առաջխաղացում",
      img: SeoSmm,
    },
  ];

  const mobileItems = [
    {
      id: 1,
      title: "Վեբ Կայքերի պատրաստում",
      img: WebSites,
    },
    {
      id: 2,
      title: "Բջջային հավելվածներ",
      img: PhoneProgramm,
    },
    {
      id: 3,
      title: "Վեբ և գրաֆիկ դիզայն",
      img: design,
    },
  ];
  return (
    <>
      {window.screen.width > 600 ? (
        <div className={styles.container} id = {serv}>
          <p id={styles[theme]} className={styles.title}>Ծառայություններ</p>
          <div className={styles.wrapper}>
            {items.map((x, index) => (
              <div key={index} className={styles.items}>
                <div className={styles.contentContainer}>
                  <p className={styles.contentTitle}>{x.title}</p>
                  <button className={styles.order}>Պատվիրել</button>
                </div>
                <div className={styles.imgContainer}>
                  <img className={styles.itemImg} src={x.img}></img>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.mobileContainer}>
          <p id={styles[theme]} className={styles.mobileTitle}>Ծառայություններ</p>
          <div className={styles.mobileWrapper}>
            {mobileItems.map((x, index) => (
              <div key={index} className={styles.mobileItems}>
                <div className={styles.mobileContentContainer}>
                  <p className={styles.mobileContentTitle}>{x.title}</p>
                  <button className={styles.mobileOrder}>Պատվիրել</button>
                </div>
                <div className={styles.imgContainer}>
                  <img className={styles.mobileItemImg} src={x.img}></img>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      )}
    </>
  );
}
