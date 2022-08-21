import React, { useState, useEffect } from "react";
import styles from "./callPopUp.module.css";
import logo1 from "../Assets/Images/Logo.svg";
import logo2 from "../Assets/Images/logo1.svg";
import { BsWhatsapp } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default function CallPopUp({ pop, setPop, theme }) {
  console.log("open");
  return (
    <div className={styles.container} onClick={() => setPop(!pop)}>
      <div
        id={styles[theme]}
        className={styles.callPopUp}
        onClick={(e) => e.stopPropagation()}
      >
        <img className={styles.logo1} src={logo1}></img>
        <img className={styles.logo2} src={logo2}></img>
        <div className={styles.itemSoc}>
          <button className={styles.socButton}>+374 98 96-09-59</button>
          <button className={styles.socButton}>
            <BsWhatsapp style={{ fontSize: "1.5vw" }} />
            <p className={styles.socTitle}>Whatsapp</p>
          </button>
          <button className={styles.socButton}>
            <FaViber style={{ fontSize: "1.5vw" }} />
            <p className={styles.socTitle}>Viber</p>
          </button>
          <button className={styles.socButton}>
            <FaTelegramPlane style={{ fontSize: "1.5vw" }} />
            <p className={styles.socTitle}>Telegram</p>
          </button>
        </div>
        <p className={styles.title}>Պատվիրել զանգ</p>
        <div className={styles.itemInfo}>
          <input
            className={styles.inputs}
            type="name"
            placeholder="Անուն Ազգանուն հայրանուն"
          ></input>
          <input
            className={styles.inputs}
            type="date"
            name="trip-start"
          ></input>
          <input
            className={styles.inputs}
            type="tel"
            placeholder="Հեռախոսահամար"
          ></input>
        </div>
      </div>
    </div>
  );
}
