import React from "react";
import styles from "./styles.module.css";

export default function Subscription() {
  return (
    <div
      className={`${styles.subscription__container} p-2  overflow-hidden mb-3`}
    >
      <div className={` ${styles.subscription__wrapper} d-flex position-relative border overflow-hidden1`}>
        <div
          className={`${styles.subscription_background} shadow-sm position-absolute top-0 start-0 end-0 bottom-0`}
        ></div>
        <div className={`${styles.subscription__head}`}>
          <div className={`${styles.subscription__heading} fw-bold mb-3`}>
            Subscribe to Newsletter!
          </div>
          <div className={`${styles.subscription__description} small text-muted lh-1`}>
            Never miss any important exam Updates!
          </div>
        </div>
        <div
          className={`${styles.subscription__form} p-2 d-flex flex-column align-items-end justify-content-center`}
        >
          <div className="text-muted mb-2">Email</div>
          <input
            type="text"
            className={` ${styles.subscription__email_input} form-control rounded-pill mb-2 `}
            placeholder="example@mail.com"
          />
          <div
            className={`${styles.subscription_cta} btn btn-outline-primary fw-bold rounded-pill px-3`}
          >
            Subscribe
          </div>
        </div>
      </div>
    </div>
  );
}
