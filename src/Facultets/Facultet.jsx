import React from "react";
import styles from "../Facultets/facultet.module.css";
import Carousel from "../Carousel/Carousel";

export default function Facultet({theme,fac}) {
  return (
    <>
      {window.screen.width > 600 ? (
        <div id ={fac} className={styles.container} >
          <p id={styles[theme]} className={styles.title}>Դասընթացներ</p>
          <Carousel theme={theme} />
        </div>
      ) : (
        <div>
          <p id={styles[theme]} className={styles.mobileTitle}>Դասընթացներ</p>
          <Carousel theme={theme} />
        </div>
      )}
    </>
  );
}
