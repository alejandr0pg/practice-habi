import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

interface IProps {
  simple?: boolean
}

const Logo: React.FunctionComponent<IProps> = ({ simple }) => {
  return (
    <div className={`${styles.left}`}>
      <Link to={'/'} className={styles.logo}>
        🏠{!simple ? ' Habi.' : ''}
      </Link>
    </div>
  )
}

export default Logo