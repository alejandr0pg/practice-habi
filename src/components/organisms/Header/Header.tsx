import React from 'react'
import Button from '../../atoms/Button/Button';
import Hero from '../../atoms/Hero/Hero'
import HeroTitle from '../../atoms/HeroTitle/HeroTitle';
import HeaderNavigation from '../../molecules/headerNavigation/HeaderNavigation';
import HeroContent from '../../atoms/heroContent/HeroContent';
import AnimatedText from 'react-animated-text-content';
import styles from './Header.module.scss';
import NavItem from '../../atoms/NavItem/NavItem';

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <HeaderNavigation>
        <NavItem to='/' label='Inicio' isActive />
        <NavItem to='#howtosell' label='¿Como vender?' />
        <NavItem to='#howtobuy' label='¿Como comprar?' />
        <NavItem to='#habimeter' label='Habimetro' />
        <NavItem to='/sell-house' label='Vender propiedad' />
      </HeaderNavigation>
      <Hero>
        <HeroContent>
          <HeroTitle>
            <AnimatedText
              type="words"
              animationType="lights"
              interval={0.06}
              duration={0.8}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
            >
              {`¡Compramos tu vivienda! 🏠 en tan solo 10 días* 👀`}
            </AnimatedText>
          </HeroTitle>

          <div className={styles.buttonContainer}>
            <Button to='/sell-house'>Vende tu casa ahora!</Button>
          </div>
        </HeroContent>
      </Hero>
    </header>
  )
}

export default Header