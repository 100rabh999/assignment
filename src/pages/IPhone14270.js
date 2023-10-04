import { useCallback } from "react";
import { Link } from "react-router-dom";
import GroupIcon from "../components/GroupIcon";
import styles from "./IPhone14270.module.css";

const IPhone14270 = () => {
  const onGroupClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='firstSwipeText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.iphone14270}>
      <div className={styles.iphone14270Child} />
      <b className={styles.chooseTheOneContainer}>
        <span>{`Choose The `}</span>
        <span className={styles.one}>One</span>
      </b>
      <div className={styles.theGeneratedLorem}>
        The generated Lorem Ipsum is therefore always.
      </div>
      <div className={styles.iphone14270Item} />
      <Link className={styles.iphone14270Inner} to="/iphone-14-275" />
      <div className={styles.firstSwipe} data-scroll-to="firstSwipeText">
        Swipe For Dating
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.iphone14270Child1} />
      <div className={styles.secondSwipe}>Swipe For Food</div>
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
      <img className={styles.groupIcon} alt="" src="/group-105.svg" />
      <img
        className={styles.iphone14270Child2}
        alt=""
        src="/group-107.svg"
        onClick={onGroupClick}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.ag98Z32e220319RemovebgPrevIcon}
        alt=""
        src="/26214113-ag98-z32e-220319removebgpreview-1@2x.png"
      />
      <div className={styles.iphone14270Child3} />
      <img
        className={styles.ag98Z32e220319RemovebgPrevIcon1}
        alt=""
        src="/26214113-ag98-z32e-220319removebgpreview-2@2x.png"
      />
      <div className={styles.iphone14270Child4} />
      <img
        className={styles.removebgPreview1Icon}
        alt=""
        src="/3889513-11949removebgpreview-1@2x.png"
      />
      <div className={styles.iphone14270Child5} />
      <img
        className={styles.removebgPreview2Icon}
        alt=""
        src="/3889513-11949removebgpreview-2@2x.png"
      />
      <img className={styles.iphone14270Child6} alt="" src="/group-115.svg" />
      <GroupIcon />
      <img
        className={styles.valentineSDayCoupleCollectIcon}
        alt=""
        src="/valentinesdaycouplecollection-232147751001removebgpreview-1@2x.png"
      />
      <img
        className={styles.flatValentineSDayCoupleCoIcon}
        alt=""
        src="/flatvalentinesdaycouplecollection-5268353917removebgpreview-1@2x.png"
      />
      <img className={styles.iphone14270Child7} alt="" src="/group-89.svg" />
      <img className={styles.iphone14270Child8} alt="" src="/group-111.svg" />
      <img className={styles.iphone14270Child9} alt="" src="/group-112.svg" />
      <img
        className={styles.valentineSDayCoupleCollectIcon1}
        alt=""
        src="/valentinesdaycouplecollection-232147751001removebgpreview-2@2x.png"
      />
      <img className={styles.iphone14270Child10} alt="" src="/group-113.svg" />
      <img className={styles.groupIcon1} alt="" src="/group.svg" />
      <div className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <img
          className={styles.n929Uyqt220322RemovebgPrevIcon}
          alt=""
          src="/26279000-n929-uyqt-220322removebgpreview-1@2x.png"
        />
      </div>
    </div>
  );
};

export default IPhone14270;
