import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const Button = ({ children }) => {
  return (
    <Link to={'/sell-house'} className={styles.button}>
      <span>
        <div>{children}</div>
      </span>
    </Link>
  )
}

export default Button