import React from 'react'
import styles from './FooterButtonList.module.scss';

const FooterButtonList = ({ children }) => {
  return (
    <div className={styles.footer}>
      {children}
    </div>
  )
}

export default FooterButtonList