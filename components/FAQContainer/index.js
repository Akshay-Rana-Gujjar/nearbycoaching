import React from "react";
import FAQItems from "../FaqItem";
import { FcFaq } from "react-icons/fc";

export default function FAQContainer() {
  return (
    <div>
      <div className="d-flex justify-content-center fw-bolder">
        <span className="me-1">
          <FcFaq />
        </span>
        FAQs
      </div>
      <FAQItems />
      <FAQItems bgColor="#FFC9C2" iconColor="#FF7666" />
      <FAQItems bgColor="#D6F6FF" iconColor="#57AEDE"  />
      <FAQItems bgColor="#C8C3FF" iconColor="#887DFF"  />
      <FAQItems bgColor="#FFC9C2" iconColor="#FF7666"  />
    </div>
  );
}
