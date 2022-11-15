import React from "react";
import ActionCard1 from "../ActionCard1";
import styles from "./styles.module.css";
import Link from "next/link";
import useIsMobile from "../../hooks/useIsMobile";

export default function ActionCardsContainer({exploreMoreLink}) {
  const isMobile = useIsMobile();
  const data = [
    {
      title: "IDBI Bank Executive by Safalta",
      courseBy: "Safalta",
      classType: "Video",
      startDate: "22 Oct",
      price: "999",
      imageSrc: "https://www.whoistheownerof.com/wp-content/uploads/2018/02/Owner-of-IDBI-Bank-India-Logo-Wiki-profile-1.jpg",
      backdropColor: "#00836c",
      permalink: "/course/idbi-bank-executive-by-safalta"
    },
    {
      title: "RBI ASSISTANT PRE And MAIN VIDEO COURSE",
      courseBy: "Make My Exam",
      classType: "Video",
      startDate: "22 Oct",
      price: "3795",
      imageSrc: "https://i0.wp.com/zeevector.com/wp-content/uploads/2021/02/RBI-Emblem-PNG.png?resize=600%2C609&ssl=1",
      backdropColor: "#eedfc0",
      permalink: "/course/rbi-assistant-pre-and-main-video-course"
    },
    {
      title: "SBI PO - Foundation Batch 2021 By Safalta.Com",
      courseBy: "Safalta",
      classType: "Video",
      startDate: "24 Nov",
      price: "2999",
      imageSrc: "https://i0.wp.com/www.atpos.in/wp-content/uploads/2019/08/2017-Design-Stack-new-logo-design-State-Bank-of-India.png?fit=520%2C321&ssl=1",
      backdropColor: "#290070",
      permalink: "/course/sbi-po-foundation-batch-2021"
    },
    {
      title: "SBI SO PRE VIDEO COURSE",
      courseBy: "Make My Exam",
      classType: "Video",
      startDate: "22 Oct",
      price: "2749",
      imageSrc: "https://i0.wp.com/www.atpos.in/wp-content/uploads/2019/08/2017-Design-Stack-new-logo-design-State-Bank-of-India.png?fit=520%2C321&ssl=1",
      backdropColor: "#290070",
      permalink: "/course/sbi-po-pre-video-course"
    },
    {
      title: "IBPS RRB ASSISTANT PRE VIDEO COURSE",
      courseBy: "Make My Exam",
      classType: "Video",
      startDate: "22 Oct",
      price: "3795",
      imageSrc: "https://cracku.in/latest-govt-jobs/wp-content/uploads/2019/06/IBPS-LOGO.jpg",
      backdropColor: "#fff",
      permalink: "/course/ibps-rrb-assistant-pre-video-course"
    },
    {
      title: "IBPS RRB ASSISTANT PRE VIDEO COURSE",
      courseBy: "Make My Exam",
      classType: "Video",
      startDate: "22 Oct",
      price: "3795",
      imageSrc: "https://cracku.in/latest-govt-jobs/wp-content/uploads/2019/06/IBPS-LOGO.jpg",
      backdropColor: "#fff",
      permalink: "/course/ibps-rrb-assistant-pre-video-course"
    },
    {
      title: "IBPS RRB ASSISTANT PRE VIDEO COURSE",
      courseBy: "Make My Exam",
      classType: "Video",
      startDate: "22 Oct",
      price: "3795",
      imageSrc: "https://cracku.in/latest-govt-jobs/wp-content/uploads/2019/06/IBPS-LOGO.jpg",
      backdropColor: "#fff",
      permalink: "/course/ibps-rrb-assistant-pre-video-course"
    },
  ];

  return (
    <>
      <div className={` ${styles.action_cards_container} d-flex gap-2 mb-3`}>
        {data.map(_ => <ActionCard1 key={_.title}  {..._} />)}
      </div>
      {!isMobile &&
      <div className="d-flex justify-content-center mb-3">
          <div className="px-4 btn btn-outline-primary btn-lg1"> <Link href={exploreMoreLink || "#"}> Explore More</Link></div>
      </div>}
    
    </>
  );
}
