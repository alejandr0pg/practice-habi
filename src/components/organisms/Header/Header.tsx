import React from 'react'
import Button from '../../atoms/Button/Button';
import Hero from '../../atoms/Hero/Hero'
import HeroTitle from '../../atoms/HeroTitle/HeroTitle';
import HeaderNavigation from '../../molecules/headerNavigation/HeaderNavigation';
import HeroContent from '../../atoms/heroContent/HeroContent';
import styles from './Header.module.scss';

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <HeaderNavigation />
      <Hero>
        <HeroContent>
          <HeroTitle>
            Compramos<br />
            tu vivienda en 10 días*
          </HeroTitle>

          <div className={styles.buttonContainer}>
            <Button>Vendé tu casa ahora!</Button>
          </div>
        </HeroContent>
      </Hero>
    </header>
  )
}

export default Header