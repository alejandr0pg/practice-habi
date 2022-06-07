import React from 'react'
import styles from './FooterButtonList.module.scss';
import clsx from "clsx";
import { useMobileMediaQuery } from '../../../hooks/MediaQueryHook';

const FooterButtonList = ({ children }) => {
  const isMobile = useMobileMediaQuery();

  return (
    <div className={clsx(styles.footer, {
      [styles.footerMobile]: isMobile
    })}>
      {children}
    </div>
  )
}

export default FooterButtonList