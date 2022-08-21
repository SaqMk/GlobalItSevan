import React from "react";
import styles from "../Footer/Footer.module.css";
import LogoFooter from "../../Assets/Images/LogoFooter.svg";
import fbFooter from "../../Assets/Images/fbFooter.svg";
import instagramFooter from "../../Assets/Images/instagramFooter.svg";
import linkedinFooter from "../../Assets/Images/linkedinFooter.svg";
import twitterFooter from "../../Assets/Images/twitterFooter.svg";
import { FaTelegramPlane } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import { ImFacebook } from 'react-icons/im';


export default function Footer() {
  return (
    <>
      {window.screen.width > 600 ? (
        <div className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <img className={styles.logoFooter} src={LogoFooter}></img>
              <p className={styles.aboutFooter}>
                «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ.
                Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ
                լուծումներ, որոնց նպատակն է մեծացնել Ձեր բիզնեսի
                շահութաբերությունը և նպաստել աճին: Մեր ստեղծարար թիմը համատեղ
                ուժերով տալիս Է նորարարական լուծումներ, որոնք նպաստում են Ձեր
                բիզնեսի թիրախային լսարանի ներգրավմանը:
              </p>
              <div className={styles.socialFooter}>
                <a href="https://www.facebook.com/globalitsevan/?ref=pages_you_manage" target='_blank'><ImFacebook className={styles.icons}/></a>
                <a href="https://instagram.com/globalit.sevan?igshid=YmMyMTA2M2Y=" target='_blank'><GrInstagram className={styles.icons}/></a>
                <a href="https://www.linkedin.com/company/globalitcompany" target='_blank'><RiLinkedinFill className={styles.icons}/></a>
                <a href = "https://t.me/globalitsevan" target="_blank"> <FaTelegramPlane className={styles.icons} /> </a>
              </div>
            </div>
            <div className={styles.wrapper}>
              <p className={styles.title2}>Դասընթացներ</p>
              <p className={styles.content2}>Վեբ ծրագրավորում</p>
              <p className={styles.content2}>Մուլտիմեդիա</p>
              <p className={styles.content2}>Նախագծեր</p>
              <p className={styles.content2}>Ծրագրավորում</p>
              <p className={styles.content2}>Անվճար դասընթացներ</p>
              <p className={styles.content2}>Այլ դասընթացներ</p>
            </div>
            <div className={styles.wrapper}>
              <p className={styles.title3}>Նախագծեր</p>
              <p className={styles.title3}>Աշխատանք</p>
              <p className={styles.title3}>Մեր մասին</p>
            </div>
            <div className={styles.wrapper}>
              <p className={styles.title4}>Հասցեներ</p>
              <p className={styles.content4}>
                Ք. Երևան Ալեք Մանուկլյան15ա (Հյուսիսային Համալսարան)
              </p>
              <p className={styles.content4}>
                ք. Էջմիածին Գ․ Լուսավորիչ համալսարան 2հ․ 41,47 սեն․
              </p>
              <p className={styles.content4}>
                ք․ Աբովյան 6-րդ դպրոց, գ․ Արամուսի Մշակույթի տուն
              </p>
              <p className={styles.content4}>ք․ Չարենցավան 6-րդ դպրոց</p>
              <p className={styles.content4}>ք․ Սևան 5-րդ դպրոց</p>
              <p className={styles.contacts}>Հեռախոսահամարներ</p>
              <p className={styles.phone}>+374 98 26 28 65</p>
              <p className={styles.phone}>+374 55 96 09 50</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.mobileFooter}>
          <div className={styles.mobileWrapper}>
            <img className={styles.mobileLogoFooter} src={LogoFooter}></img>
            <div className={styles.mobileFooterContainer}>
              <div className={styles.mobileFooterItems}>
                <p className={styles.mobileFooterTitle}>Դասընթացներ</p>
                <p className={styles.mobileFooterTitle}>Ծառայություններ</p>
                <p className={styles.mobileFooterTitle}>Հետադարձ Կապ</p>
              </div>
              <div className={styles.mobileFooterItems}>
                <p className={styles.mobileFooterTitle}>Նախագծեր</p>
                <p className={styles.mobileFooterTitle}>Աշխատանք</p>
                <p className={styles.mobileFooterTitle}>Մեր մասին</p>
              </div>
            </div>
            <div className={styles.mobileFooterContainerContact}>
              <p className={styles.mobileFooterContent}>
                Ք. Երևան Ալեք Մանուկլյան15ա (Հյուսիսային Համալսարան)
              </p>
              <p className={styles.mobileFooterContent}>
                ք. Էջմիածին Գ․ Լուսավորիչ համալսարան 2հ․ 41,47 սեն
              </p>
              <p className={styles.mobileFooterContent}>
                ք․ Աբովյան 6-րդ դպրոց, գ․ Արամուսի Մշակույթի տուն
              </p>
              <p className={styles.mobileFooterContent}>
                ք․ Չարենցավան 6-րդ դպրոց{" "}
              </p>
              <p className={styles.mobileFooterContent}>ք․ Սևան 5-րդ դպրոց</p>
              <p className={styles.mobileFooterTitle}>Հեռախոսահամարներ</p>
              <p className={styles.mobileFooterContent}>098-22-44-98</p>
              <p className={styles.mobileFooterContent}>098-22-44-98</p>
            </div>
          </div>
          <p className={styles.mobileFooterTitle}>Copyright ©2020</p>
        </div>
      )}
    </>
  );
}
