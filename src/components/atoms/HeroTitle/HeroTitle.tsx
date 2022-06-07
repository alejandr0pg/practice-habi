import React from 'react'
import styles from './HeroTitle.module.scss'

const HeroTitle = ({ children }) => {
  return (
    <h1 className={styles.title}>
      {children}
    </h1>
  )
}

export default HeroTitle