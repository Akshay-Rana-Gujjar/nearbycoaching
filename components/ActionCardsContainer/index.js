import React from 'react'
import ActionCard1 from '../ActionCard1';
import styles from './styles.module.css'

export default function ActionCardsContainer() {
  return (
    <div className={` ${styles.action_cards_container} d-flex gap-2 mb-3`} >
        <ActionCard1/>
        <ActionCard1/>
        <ActionCard1/>
        <ActionCard1/>
        <ActionCard1/>
    </div>
  )
}
