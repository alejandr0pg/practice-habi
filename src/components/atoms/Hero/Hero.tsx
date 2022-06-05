import React from 'react'
import styles from './Hero.module.scss';

interface IProps {
  children: React.ReactNode;
}

const Hero: React.FunctionComponent<IProps> = ({ children }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        {children}
      </div>
    </section>
  )
}

export default Hero