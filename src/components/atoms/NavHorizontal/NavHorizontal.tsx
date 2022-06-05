import React from 'react'
import styles from './NavHorizontal.module.scss'

interface IProps {
  children: React.ReactNode
}

const NavHorizontal: React.FunctionComponent<IProps> = ({ children }) => {
  return (
    <div className={styles.right}>
      <ul className={styles.navLinks}>
        {children}
      </ul>
    </div>
  )
}

export default NavHorizontal