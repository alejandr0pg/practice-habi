import React from 'react'
import { Link } from 'react-router-dom'
import { useMobileMediaQuery } from '../../../hooks/MediaQueryHook'
import styles from './Logo.module.scss'
import clsx from "clsx";

interface IProps {
  simple?: boolean
}

const Logo: React.FunctionComponent<IProps> = ({ simple }) => {
  const isMobile = useMobileMediaQuery();

  return (
    <div className={`${styles.left}`}>
      <Link to={'/'} className={clsx(styles.logo, {
        [styles.logoMobile]: isMobile
      })}>
        🏠{(!simple) ? ' Habi.' : ''}
      </Link>
    </div>
  )
}

export default Logo