import React from "react";
import FAQItems from "../FaqItem";
import { FcFaq } from "react-icons/fc";

export default function FAQContainer({ data = [] }) {
  const bgColorArray = ["#9CE0D4", "#FFC9C2", "#D6F6FF", "#C8C3FF"];
  const iconColorArray = ["#0C7475", "#FF7666", "#57AEDE", "#887DFF"];

  return (
    <div>
      <div className="d-flex justify-content-center fw-bolder">
        <span className="me-1">
          <FcFaq />
        </span>
        FAQs
      </div>
      {data.length ? (
        data.map((faq, idx)=>{
          const colorIndex = idx  % bgColorArray.length;
          return <FAQItems faq_question={faq.faq_question} faq_answer={faq.faq_answer} bgColor={bgColorArray[colorIndex]} iconColor={iconColorArray[colorIndex]} />
        })
      ) : (
        <>
          <FAQItems />
          <FAQItems bgColor="#FFC9C2" iconColor="#FF7666" />
          <FAQItems bgColor="#D6F6FF" iconColor="#57AEDE" />
          <FAQItems bgColor="#C8C3FF" iconColor="#887DFF" />
          <FAQItems bgColor="#FFC9C2" iconColor="#FF7666" />
        </>
      )}
    </div>
  );
}
