import { React, useState } from "react";
import styles from "../LearnProgramming/LearnProgramming.module.css";
import LearnBackground from "../../src/Assets/Images/LearnBackground.svg";
import popup from "../Assets/Images/popup.svg";

export default function LearnProgramming({ pop, setPop, onAboutScroll }) {
  function openPopUp() {
    setPop(!pop);
  }

  function preventDragHandler(e) {
    e.preventDefault();
  }
  return (
    <>
      {window.screen.width > 600 ? (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <p className={styles.learn}>Սովորիր Ծրագրավորում</p>
            <button className={styles.more} onClick = {onAboutScroll}>Իմանալ ավելին</button>
            <img
              onDragStart={preventDragHandler}
              onClick={openPopUp}
              className={styles.popup}
              src={popup}
            ></img>
          </div>
          <div className={styles.wrapper}>
            <img
              onDragStart={preventDragHandler}
              className={styles.learnBackground}
              src={LearnBackground}
            ></img>
          </div>
        </div>
      ) : (
        <div className={styles.mobileContainer}>
          <img
            className={styles.mobileLearnBackground}
            src={LearnBackground}
          ></img>
          <p className={styles.mobileLearn}>Սովորիր Ծրագրավորում</p>
          <button className={styles.mobileMore}>Իմանալ ավելին</button>
        </div>
      )}
    </>
  );
}
