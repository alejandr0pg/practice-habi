import React from 'react'
import { useMobileMediaQuery } from '../../../hooks/MediaQueryHook';
import styles from './HeroTitle.module.scss'
import clsx from "clsx";

const HeroTitle = ({ children }) => {
  const isMobile = useMobileMediaQuery();

  return (
    <h1 className={clsx(styles.title, {
      [styles.titleMobile]: isMobile
    })}>
      {children}
    </h1>
  )
}

export default HeroTitle