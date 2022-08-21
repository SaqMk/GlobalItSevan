import React, { useState } from "react";
import styles from "../FollowUs/followUs.module.css";

export default function FollowUs() {
  const [send, setSend] = useState(" ");
  const change = (e) => {
    setSend(e.target.value);
  };
  function sendClick() {
    setSend(" ");
    alert(send);
  }
  return (
    <>
      {window.screen.width > 600 ? (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <p className={styles.title}>Բաժանորդագրվել</p>
            <input
              onChange={change}
              value={send}
              className={styles.emailInput}
            ></input>
            <button onClick={sendClick} className={styles.send}>
              Ուղարկել
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.mobileContainer}>
          <div className={styles.mobileWrapper}>
            <p className={styles.mobileTitle}>Բաժանորդագրվել</p>
            <input
              onChange={change}
              value={send}
              className={styles.mobileEmailInput}
            ></input>
            <button onClick={sendClick} className={styles.mobileSend}>
              Ուղարկել
            </button>
          </div>
        </div>
        </div>
      )}
    </>
  );
}
