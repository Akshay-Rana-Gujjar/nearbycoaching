/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoStar } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import styles from "./styles.module.css";
import Link from "next/link";
import useIsMobile from '../../hooks/useIsMobile';

export default function ActionCard1({
  title = "IDBI Bank Executive by Safalta",
  courseBy = "Safalta",
  classType = "Video",
  startDate = "18 Aug",
  price = "999",
  imageSrc = "https://www.whoistheownerof.com/wp-content/uploads/2018/02/Owner-of-IDBI-Bank-India-Logo-Wiki-profile-1.jpg",
  backdropColor,
  permalink = "/course/xyz",
}) {
  const isMobile = useIsMobile();

  return (
    <div>
      <Link href={permalink}>
        <>
          <div className={styles["action_card__item_container"]} style={!isMobile && {"--action-card-width": "200px"} || {}} >
            <div
              className={styles["action_card__image_container"]}
              style={{ background: backdropColor }}
            >
              <img
                src={imageSrc}
                alt="aasd"
                width={"100%"}
                height={"100%"}
                loader={({ src }) => src}
                layout="cover"
              />
            </div>
            <div className={styles["action_card__item_info_container"]}>
              <div
                className={`${styles["action_card__item_name"]} text-truncate small`}
              >
                {title}
              </div>
              <div className={"d-flex justify-content-between"}>
                <div
                  className={`small text-muted text-truncate ${styles["action_card__item_author"]}`}
                >
                  By {courseBy}
                </div>
                <div className={`d-flex ${styles["action_card__item_rating"]}`}>
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
                  {classType}
                </div>
                <div className={styles["action_card__item_seprator"]}>•</div>
                <div
                  className={`${styles["action_card__course_start_by"]} rounded-pill px-1 small`}
                >
                  Start on {startDate}
                </div>
              </div>
            </div>
            <div
              role={"button"}
              className={`${styles["action_card__item_cta"]} p-2 text-white text-center d-flex align-items-center justify-content-center`}
            >
              Enroll now for &nbsp; <FaRupeeSign size={12} />
              {price}
            </div>
          </div>
        </>
      </Link>
    </div>
  );
}
