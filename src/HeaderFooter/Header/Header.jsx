import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import Logo from "../../Assets/Images/Logo.svg";
import Logo1 from "../../Assets/Images/logo1.svg";
import { DarkModeSwitch } from 'react-toggle-dark-mode';


export default function Header({theme,toggleTheme }) {
  return (
    <>
      {window.screen.width > 600 ? (
        <div id={styles[theme]} className={styles.header}>
          <img className={styles.logo} src={Logo}></img>
          <img className={styles.logo1} src={Logo1}></img>
          <div className={styles.menu}>
            <ul>
              <li className={styles.menu_li}>Գլխավոր</li>
              <li className={styles.menu_li}>
                <a href="#fac">Ֆակուլտետներ</a>
              </li>

              <li className={styles.menu_li}>
                <a href="#serv">Ծառայություններ</a>
              </li>
            </ul>
          </div>
          <DarkModeSwitch className={styles.switch} size={'2.2vw'} onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
      ) : (
        <div id={styles[theme]} className={styles.mobileContainer}>
          <img className={styles.mobileLogo} src={Logo}></img>
          <img className={styles.mobileLogo1} src={Logo1}></img>
          <DarkModeSwitch className={styles.mobileSwitch} size={'7.5vw'} onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
      )}
    </>
  );
}
