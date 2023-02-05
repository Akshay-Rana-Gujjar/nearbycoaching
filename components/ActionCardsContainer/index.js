import React from "react";
import ActionCard1 from "../ActionCard1";
import styles from "./styles.module.css";
import Link from "next/link";
import useIsMobile from "../../hooks/useIsMobile";

export default function ActionCardsContainer({carditems=[], exploreMoreLink}) {
  const isMobile = useIsMobile();
  return (
    <>
      <div className={` ${styles.action_cards_container} d-flex gap-2 mb-3`}>
        {carditems.map((_, i)=> <ActionCard1 key={i}  {..._} />)}
      </div>
      {!isMobile &&
      <div className="d-flex justify-content-center mb-3">
          <div className="px-4 btn btn-outline-primary btn-lg1"> <Link href={exploreMoreLink || "#"}> Explore More</Link></div>
      </div>}
    
    </>
  );
}
