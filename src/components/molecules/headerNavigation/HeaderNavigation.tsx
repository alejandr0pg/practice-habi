import React from 'react'
import Logo from '../../atoms/Logo/Logo'
import NavHorizontal from '../../atoms/NavHorizontal/NavHorizontal'
import NavItem from '../../atoms/NavItem/NavItem'
import styles from './HeaderNavigation.module.scss'

const HeaderNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className='container'>
        <div className={styles.wrapper}>
          <Logo />
          <NavHorizontal>
            <NavItem to='/' label='Inicio' isActive />
            <NavItem to='#howtosell' label='¿Como vender?' />
            <NavItem to='#howtobuy' label='¿Como comprar?' />
            <NavItem to='#habimeter' label='Habimetro' />
            <NavItem to='/sell-house' label='Vender propiedad' />
          </NavHorizontal>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNavigation