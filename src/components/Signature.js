import React from 'react'
import styles from '../styles/Signarure.module.scss'
export default function Signature() {
  return (
    <ul className= {styles.signature}>
        <li className={styles['signature__item']}>Дмитрий Писарев</li>
        <li className={styles['signature__item']}>создано с любовью в LoftSchool</li>
        <li className={styles['signature__item']}>2017</li>
  </ul>
  )
}
