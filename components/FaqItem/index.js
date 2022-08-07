import React from 'react';
import { IoHelpCircle } from 'react-icons/io5';
import styles from './styles.module.css'

export default function FAQItems({bgColor, iconColor}) {
  return (
    <div>
       <div className={`${styles.faq_item__container} p-3 mb-2`} style={{background: bgColor || "#9CE0D4" }} >
        <div className={`${styles.faq_item__heading} fw-bold`}> <IoHelpCircle color={iconColor || '#0C7475'} size={24}/> Lorem ipsum dolor sit amet elit?</div>
        <div className="faq_item__description">Nec et viverra augue aliquam cursus massa ullamcorper. Viverra massa feugiat auctor.</div>
       </div>
    </div>
  )
}
