import React from "react";
import CaruselPartners from "../CaruselPartners/CaruselPartners";
import styles from "../OurPartners/ourPartners.module.css";

export default function OurPartners({theme}) {
  return (
    <>
      {window.screen.width > 600 ? (
        <div className={styles.container}>
          <p id={styles[theme]} className={styles.title}>Մեր գործընկերները</p>
          <CaruselPartners theme={theme} />
        </div>
      ) : (
        <div className={styles.container}>
          <p id={styles[theme]} className={styles.mobileTitle}>Մեր գործընկերները</p>
          <CaruselPartners theme={theme} />
        </div>
      )}
    </>
  );
}
