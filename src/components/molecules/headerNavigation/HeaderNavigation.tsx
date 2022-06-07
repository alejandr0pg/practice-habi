import React from 'react'
import Logo from '../../atoms/Logo/Logo'
import NavHorizontal from '../../atoms/NavHorizontal/NavHorizontal'
import styles from './HeaderNavigation.module.scss'

interface IProps {
  simple?: boolean;
  children: React.ReactNode;
  color?: 'transparent' | 'blue'
}

const HeaderNavigation: React.FunctionComponent<IProps> = ({
  simple,
  children,
  color = 'transparent'
}) => {
  return (
    <nav className={`${styles.navigation} ${styles[`header-nav-${color}`]}`}>
      <div className='container'>
        <div className={styles.wrapper}>
          <Logo
            simple={simple}
          />
          <NavHorizontal>
            {children}
          </NavHorizontal>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNavigation