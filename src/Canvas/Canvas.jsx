import React from "react";
import styles from "../Canvas/canvas.module.css";
import play from "../Assets/Images/play.svg";
import video from "../Assets/Images/video.svg";

export default function Canvas({theme}) {
  function preventDragHandler(e) {
    e.preventDefault();
  }

  return (
    <>
      {window.screen.width > 600 ? (
        <div id={styles[theme]} className={styles.container}>
          <div className={styles.wrapper}>
            <p className={styles.title}>Մեր մասին կարճ տեսանյութ</p>
            <p className={styles.content}>
              Դիտելով այս հոլովակը դուք կստանաք ձեր բոլոր<br></br>հարցերի
              պատասխանները
            </p>
            <img
              onDragStart={preventDragHandler}
              className={styles.play}
              src={play}
            ></img>
          </div>
          <div className={styles.wrapper}>
            <img
              onDragStart={preventDragHandler}
              className={styles.video}
              src={video}
            ></img>
          </div>
        </div>
      ) : (
        <div id={styles[theme]} className={styles.mobileContainer}>
          <p className={styles.mobileTitle}>
            Ուզում եք միանալ մեր<br></br> թիմին բայց ունեք հարցե՞ր
          </p>
          <p className={styles.mobileContent}>
            Դիտելով այս հոլովակը դուք կստանաք<br></br> ձեր բոլոր հարցերի
            պատասխանները
          </p>
          <img
              onDragStart={preventDragHandler}
              className={styles.mobileVideo}
              src={video}
            ></img>
        </div>
      )}
    </>
  );
}
