import React from "react";
import ActionCard1 from "../ActionCard1";
import styles from "./styles.module.css";

export default function ActionCardsContainer() {
  const data = [
    {
      title: "RBI ASSISTANT PRE And MAIN VIDEO COURSE",
      courseBy: "Make My Exam",
      classType: "Video",
      startDate: "22 Oct",
      price: "3795",
      imageSrc:"https://i0.wp.com/zeevector.com/wp-content/uploads/2021/02/RBI-Emblem-PNG.png?resize=600%2C609&ssl=1",
    backdropColor: "#eedfc0"
    },
    {
      title: "SBI PO - Foundation Batch 2021 By Safalta.Com",
      courseBy: "Safalta",
      classType: "Video",
      startDate: "24 Nov",
      price: "2999",
      imageSrc: "https://i0.wp.com/www.atpos.in/wp-content/uploads/2019/08/2017-Design-Stack-new-logo-design-State-Bank-of-India.png?fit=520%2C321&ssl=1",
      backdropColor: "#290070"
    },
    {
      title: "SBI SO PRE VIDEO COURSE",
      courseBy: "Make My Exam",
      classType: "Video",
      startDate: "22 Oct",
      price: "2749",
      imageSrc:"https://i0.wp.com/www.atpos.in/wp-content/uploads/2019/08/2017-Design-Stack-new-logo-design-State-Bank-of-India.png?fit=520%2C321&ssl=1",
      backdropColor: "#290070"
    },
    {
      title: "IBPS RRB ASSISTANT PRE VIDEO COURSE",
      courseBy: "Make My Exam",
      classType: "Video",
      startDate: "22 Oct",
      price: "3795",
      imageSrc: "https://cracku.in/latest-govt-jobs/wp-content/uploads/2019/06/IBPS-LOGO.jpg",
      backdropColor: "#fff"
    },
  ];

  return (
    <div className={` ${styles.action_cards_container} d-flex gap-2 mb-3`}>
      <ActionCard1 />
      {data.map(_=><ActionCard1 key={_.title}  {..._}/>)}
    </div>
  );
}
