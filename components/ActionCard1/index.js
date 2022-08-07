/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoStar } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import styles from "./styles.module.css";

export default function ActionCard1() {
  return (
    <div>
      <div className={styles["action_card__item_container"]}>
        <div className={styles["action_card__image_container"]}>
          <img
            src="https://www.whoistheownerof.com/wp-content/uploads/2018/02/Owner-of-IDBI-Bank-India-Logo-Wiki-profile-1.jpg"
            alt="aasd"
            width={"100%"}
            height={"100%"}
            loader={({ src }) => src}
            layout="fixed"
          />
        </div>
        <div className={styles["action_card__item_info_container"]}>
          <div className={`${styles["action_card__item_name"]} text-truncate`}>
            IDBI Bank Executive by Safalta
          </div>
          <div className={"d-flex justify-content-between"}>
            <div className={styles["action_card__item_author"]}>By Safalta</div>
            <div className={styles["action_card__item_rating"]}>
              <IoStar color="#FFD233" />
              <IoStar color="#FFD233" />
              <IoStar color="#FFD233" />
              <IoStar color="#FFD233" />
              <IoStar color="#FFD233" />
            </div>
          </div>
          <div
            className={`${styles["action_card__item_features_container"]} d-flex gap-1`}
          >
            <div
              className={`${styles["action_card__course_type"]} rounded-pill px-1 small`}
            >
              Video
            </div>
            <div className={styles["action_card__item_seprator"]}>•</div>
            <div
              className={`${styles["action_card__course_start_by"]} rounded-pill px-1 small`}
            >
              Start on 18 Aug
            </div>
          </div>
        </div>
        <div
          role={"button"}
          className={`${styles["action_card__item_cta"]} p-2 text-white text-center d-flex align-items-center justify-content-center`}
        >
          Enroll now for &nbsp; <FaRupeeSign size={12} />
          999
        </div>
      </div>
    </div>
  );
}
